import {randomUUID} from "node:crypto";
import {setTimeout as delayMs} from "node:timers/promises";
const MAX_ATTEMPTS=5;

async function retryLock(fn){
  for(let attempt=0;;attempt++){
    try{return await fn();}catch(error){
      if(attempt>=3||!["ER_LOCK_DEADLOCK","ER_LOCK_WAIT_TIMEOUT"].includes(error?.code))throw error;
      await delayMs(20*(attempt+1)+Math.floor(Math.random()*30));
    }
  }
}

// Serialize only the short claim operation across workers in the same database.
// Release the connection-scoped advisory lock before sending SMTP messages.
async function claim(pool,token,batch){
  const conn=await pool.getConnection();
  let locked=false;
  let reusable=true;
  try{
    const [lock]=await conn.query("SELECT GET_LOCK(CONCAT('crm_outbox:',LEFT(SHA2(DATABASE(),256),48)),5) AS acquired");
    locked=Number(lock[0]?.acquired)===1;
    if(!locked)return [];
    await retryLock(()=>conn.execute("UPDATE dewank_crm_notifications SET state='failed',lease_token=NULL,lease_until=NULL WHERE state='sending' AND lease_until<UTC_TIMESTAMP(3) AND attempts>=?",[MAX_ATTEMPTS]));
    await retryLock(()=>conn.execute("UPDATE dewank_crm_notifications SET state='sending',lease_token=?,lease_until=DATE_ADD(UTC_TIMESTAMP(3),INTERVAL 10 MINUTE),attempts=attempts+1 WHERE attempts<? AND ((state='pending' AND next_attempt_at<=UTC_TIMESTAMP(3)) OR (state='sending' AND lease_until<UTC_TIMESTAMP(3))) ORDER BY id LIMIT "+batch,[token,MAX_ATTEMPTS]));
    const [rows]=await conn.execute("SELECT n.id,n.attempts,l.lead_ref,l.name,l.phone,l.service,l.offer FROM dewank_crm_notifications n JOIN dewank_crm_leads l ON l.id=n.lead_id WHERE n.lease_token=? AND n.state='sending' ORDER BY n.id",[token]);
    return rows;
  }finally{
    if(locked){
      try{
        const [result]=await conn.query("SELECT RELEASE_LOCK(CONCAT('crm_outbox:',LEFT(SHA2(DATABASE(),256),48))) AS released");
        if(Number(result[0]?.released)!==1)reusable=false;
      }catch{reusable=false;}
    }
    if(reusable)conn.release();else conn.destroy();
  }
}

// SMTP is at-least-once: a crash after delivery may cause a duplicate notice.
export async function deliverLeadNotifications(pool,send,{limit=5}={}) {
  const token=randomUUID();
  const batch=Math.max(1,Math.min(10,Math.trunc(limit)||5));
  const rows=await claim(pool,token,batch);
  let sent=0,failed=0;
  for(const row of rows){
    try{
      await send({reference:row.lead_ref,name:row.name,phone:row.phone,service:row.service,offer:row.offer});
    }catch{
      const terminal=row.attempts>=MAX_ATTEMPTS;
      const delay=Math.min(60,2**Number(row.attempts));
      await retryLock(()=>pool.execute("UPDATE dewank_crm_notifications SET state=?,next_attempt_at=DATE_ADD(UTC_TIMESTAMP(3),INTERVAL ? MINUTE),lease_token=NULL,lease_until=NULL WHERE id=? AND lease_token=?",[terminal?"failed":"pending",delay,row.id,token]));
      failed++;continue;
    }
    const [result]=await retryLock(()=>pool.execute("UPDATE dewank_crm_notifications SET state='sent',sent_at=UTC_TIMESTAMP(3),lease_token=NULL,lease_until=NULL WHERE id=? AND lease_token=?",[row.id,token]));
    if(result.affectedRows===1)sent++;
  }
  return {claimed:rows.length,sent,failed};
}
