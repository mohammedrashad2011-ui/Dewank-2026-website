import {randomUUID} from "node:crypto";
const MAX_ATTEMPTS=5;

// Claim a small batch across concurrent workers. A stale claim can be recovered;
// SMTP is at-least-once, so a crash after delivery may cause a duplicate notice.
export async function deliverLeadNotifications(pool,send,{limit=5}={}) {
  const token=randomUUID();
  const batch=Math.max(1,Math.min(10,Math.trunc(limit)||5));
  await pool.execute("UPDATE dewank_crm_notifications SET state='failed',lease_token=NULL,lease_until=NULL WHERE state='sending' AND lease_until<UTC_TIMESTAMP(3) AND attempts>=?",[MAX_ATTEMPTS]);
  await pool.execute("UPDATE dewank_crm_notifications SET state='sending',lease_token=?,lease_until=DATE_ADD(UTC_TIMESTAMP(3),INTERVAL 10 MINUTE),attempts=attempts+1 WHERE attempts<? AND ((state='pending' AND next_attempt_at<=UTC_TIMESTAMP(3)) OR (state='sending' AND lease_until<UTC_TIMESTAMP(3))) ORDER BY id LIMIT "+batch,[token,MAX_ATTEMPTS]);
  const [rows]=await pool.execute("SELECT n.id,n.attempts,l.lead_ref,l.name,l.phone,l.service FROM dewank_crm_notifications n JOIN dewank_crm_leads l ON l.id=n.lead_id WHERE n.lease_token=? AND n.state='sending' ORDER BY n.id",[token]);
  let sent=0,failed=0;
  for(const row of rows){
    try{
      await send({reference:row.lead_ref,name:row.name,phone:row.phone,service:row.service});
    }catch{
      const terminal=row.attempts>=MAX_ATTEMPTS;
      const delay=Math.min(60,2**Number(row.attempts));
      await pool.execute("UPDATE dewank_crm_notifications SET state=?,next_attempt_at=DATE_ADD(UTC_TIMESTAMP(3),INTERVAL ? MINUTE),lease_token=NULL,lease_until=NULL WHERE id=? AND lease_token=?",[terminal?"failed":"pending",delay,row.id,token]);
      failed++;continue;
    }
    // If this write fails after SMTP accepts the message, leave the lease for recovery.
    const [result]=await pool.execute("UPDATE dewank_crm_notifications SET state='sent',sent_at=UTC_TIMESTAMP(3),lease_token=NULL,lease_until=NULL WHERE id=? AND lease_token=?",[row.id,token]);
    if(result.affectedRows===1)sent++;
  }
  return {claimed:rows.length,sent,failed};
}
