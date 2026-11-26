import {test,after} from "node:test";
import assert from "node:assert/strict";
import {readFile} from "node:fs/promises";
import {randomUUID} from "node:crypto";
import {getCrmPool,closeCrmPool} from "../app/lib/crm/mysql-pool.mjs";
import {createLeadStore} from "../app/lib/crm/mysql-lead-store.mjs";
import {createLeadRateLimiter} from "../app/lib/crm/mysql-rate-limit.mjs";
import {handleLeadRequest} from "../app/lib/crm/handle-lead-request.mjs";
import {deliverLeadNotifications} from "../app/lib/crm/notification-worker.mjs";

const enabled=process.env.CRM_CI_MYSQL==="true";
if(enabled && (process.env.DB_HOST!=="127.0.0.1" || process.env.DB_NAME!=="crm_ci")) throw Error("Refusing non-CI DB");
after(async()=>{if(enabled)await closeCrmPool();});
test("real MySQL: migrate, commit, replay, reject conflict, verify outbox and throttle",{skip:!enabled},async()=>{
  const pool=getCrmPool();
  const ddl=await readFile(new URL("../db/mysql/001-crm-leads.sql",import.meta.url),"utf8");
  for(const stmt of ddl.replace(/^--.*$/gm,"").split(";").map(x=>x.trim()).filter(Boolean)) await pool.query(stmt);
  const saveLead=createLeadStore(pool);
  const rateLimit=createLeadRateLimiter(pool,{limit:4});
  const origin="https://dewank.com";
  const requestId=randomUUID();
  const body={requestId,name:"عميل تجريبي",phone:"+966501234567",service:"brand-naming",contactConsent:true,locale:"ar"};
  const req=(data)=>new Request(origin+"/api/leads",{method:"POST",headers:{origin,"content-type":"application/json"},body:JSON.stringify(data)});
  const options={allowedOrigin:origin,saveLead,rateLimit};
  const first=await handleLeadRequest(req(body),options);assert.equal(first.status,201);
  const reference=(await first.json()).reference;
  const repeat=await handleLeadRequest(req(body),options);assert.equal(repeat.status,200);assert.equal((await repeat.json()).reference,reference);
  const conflict=await handleLeadRequest(req({...body,name:"Different name"}),options);assert.equal(conflict.status,409);
  const [rows]=await pool.execute("SELECT l.name,l.phone,n.state FROM dewank_crm_leads l JOIN dewank_crm_notifications n ON n.lead_id=l.id WHERE l.request_id=?",[requestId]);
  assert.equal(rows.length,1);assert.equal(rows[0].name,body.name);assert.equal(rows[0].state,"pending");
  assert.equal((await handleLeadRequest(req({...body,phone:"wrong"}),options)).status,422);
  assert.equal((await handleLeadRequest(req({...body,requestId:randomUUID()}),options)).status,429);
});

test("real MySQL: notification retry and lease isolation",{skip:!enabled},async()=>{
  const pool=getCrmPool();
  // The preceding test applies schema and inserts one pending lead.
  const first=await deliverLeadNotifications(pool,async()=>{throw Error("simulated SMTP failure");});
  assert.equal(first.failed,1);
  const [pending]=await pool.execute("SELECT state,attempts FROM dewank_crm_notifications");
  assert.equal(pending[0].state,"pending");assert.equal(pending[0].attempts,1);
  await pool.execute("UPDATE dewank_crm_notifications SET next_attempt_at=UTC_TIMESTAMP(3)");
  const received=[];
  const send=async lead=>{received.push(lead);};
  const results=await Promise.all([deliverLeadNotifications(pool,send),deliverLeadNotifications(pool,send)]);
  assert.equal(results.reduce((sum,r)=>sum+r.sent,0),1);assert.equal(received.length,1);
  const [done]=await pool.execute("SELECT state,attempts,sent_at FROM dewank_crm_notifications");
  assert.equal(done[0].state,"sent");assert.equal(done[0].attempts,2);assert.ok(done[0].sent_at);
});
