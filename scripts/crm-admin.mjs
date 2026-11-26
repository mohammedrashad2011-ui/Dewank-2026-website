import {readFile} from "node:fs/promises";
import {getCrmPool,closeCrmPool} from "../app/lib/crm/mysql-pool.mjs";
import {createCrmMailSender} from "../app/lib/crm/smtp-notifier.mjs";

const cmd=process.argv[2]||"check";
const required=["dewank_crm_leads","dewank_crm_notifications","dewank_crm_rate_limits"];
try {
  if(process.env.VERCEL_ENV)throw Error("Refusing Vercel");
  if(!["check","migrate","smtp-check"].includes(cmd))throw Error("Unknown command");
  if(cmd==="smtp-check"){
    await createCrmMailSender(process.env,{verifyOnly:true});
    console.log("CRM SMTP authentication and TLS verified; no email sent.");
  }else{
    const pool=getCrmPool();
    await pool.query("SELECT 1");
    if(cmd==="migrate"){
      if(!process.env.DB_NAME || process.argv[3]!=="--confirm="+process.env.DB_NAME)throw Error("Explicit DB confirmation required");
      const ddl=await readFile(new URL("../db/mysql/001-crm-leads.sql",import.meta.url),"utf8");
      for(const stmt of ddl.replace(/^--.*$/gm,"").split(";").map(s=>s.trim()).filter(Boolean))await pool.query(stmt);
    }
    const [rows]=await pool.execute("SELECT TABLE_NAME AS name FROM information_schema.TABLES WHERE TABLE_SCHEMA=DATABASE() AND TABLE_NAME IN (?,?,?)",required);
    const present=rows.map(r=>r.name);
    const missing=required.filter(t=>!present.includes(t));
    console.log(JSON.stringify({connection:"ok",tablesPresent:present,tablesMissing:missing}));
    if(missing.length)process.exitCode=2;
    else{
      // Check columns required by the write path without reading customer rows.
      await pool.query("SELECT request_hash,gclid,contact_consent_at FROM dewank_crm_leads LIMIT 0");
      await pool.query("SELECT lease_token,lease_until,sent_at FROM dewank_crm_notifications LIMIT 0");
      console.log("CRM required schema verified");
    }
  }
}catch{
  console.error("CRM preflight failed; verify private environment, database permissions and command. No secrets logged.");process.exitCode=1;
}finally{await closeCrmPool();}
