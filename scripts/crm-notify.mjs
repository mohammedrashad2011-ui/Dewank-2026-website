import {getCrmPool,closeCrmPool} from "../app/lib/crm/mysql-pool.mjs";
import {deliverLeadNotifications} from "../app/lib/crm/notification-worker.mjs";
import {createCrmMailSender} from "../app/lib/crm/smtp-notifier.mjs";

if(process.env.CRM_NOTIFICATIONS_ENABLED!=="true"||process.env.CRM_CAPTURE_ENABLED!=="true"||process.env.VERCEL_ENV){
  console.log("CRM notification worker disabled");
}else{
  try{
    const send=await createCrmMailSender();
    const pool=getCrmPool();
    const counts=await deliverLeadNotifications(pool,send);
    // Delete only old throttle counters; never delete customer data automatically.
    await pool.execute("DELETE FROM dewank_crm_rate_limits WHERE bucket<?",[Math.floor(Date.now()/60000)-1440]);
    console.log(JSON.stringify(counts));
    if(counts.failed)process.exitCode=1;
  }catch{
    console.error("CRM notification worker unavailable");process.exitCode=1;
  }finally{await closeCrmPool();}
}
