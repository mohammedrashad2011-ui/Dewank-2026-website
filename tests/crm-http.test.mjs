import {test} from "node:test";
import assert from "node:assert/strict";
import {spawn} from "node:child_process";
import {randomUUID} from "node:crypto";
import {setTimeout as sleep} from "node:timers/promises";
import {CRM_OFFERS} from "../app/lib/crm/offer-catalog.mjs";
import {getCrmPool,closeCrmPool} from "../app/lib/crm/mysql-pool.mjs";

const enabled=process.env.CRM_CI_MYSQL==="true";
if(enabled&&(process.env.DB_HOST!=="127.0.0.1"||process.env.DB_NAME!=="crm_ci"||process.env.CRM_CAPTURE_ENABLED!=="true"||process.env.CRM_NOTIFICATIONS_ENABLED!=="false"||process.env.VERCEL_ENV))throw Error("Refusing non-isolated HTTP test");
test("built Next.js: bilingual forms, committed POST, replay, privacy, origin and validation",{skip:!enabled,timeout:90000},async()=>{
  const url="http://127.0.0.1:3100";
  const child=spawn(process.execPath,[".next/standalone/server.js"],{env:{...process.env,HOSTNAME:"127.0.0.1",PORT:"3100"},stdio:["ignore","ignore","ignore"]});
  try{
    let ready=false;
    for(let n=0;n<60;n++){
      if(child.exitCode!==null)throw Error("Next server exited before readiness");
      try{const response=await fetch(url+"/contact",{signal:AbortSignal.timeout(2000)});if(response.ok){ready=true;break;}}catch{}
      await sleep(500);
    }
    assert.ok(ready,"Next server ready");
    for(const path of ["/contact?offer=brand-naming","/en/contact?offer=brand-naming"]){
      const res=await fetch(url+path);assert.equal(res.status,200);
      const html=await res.text();assert.match(html,/name="phone"/);assert.match(html,/name="contactConsent"/);assert.match(html,/id="brief-form"/);assert.doesNotMatch(html,/Preview only\. Use fictional details/);
    }
    for(const [offer,entry] of Object.entries(CRM_OFFERS)){
      for(const locale of ["ar","en"]){
        const prefix=locale==="en"?"/en":"";
        const page=await fetch(url+prefix+entry[1]);assert.equal(page.status,200,entry[1]);
        const html=await page.text();
        assert.ok(html.includes('href="'+prefix+'/contact?offer='+offer+'#brief-form"'),"Missing CRM link: "+locale+" "+offer);
        const sectionPattern=offer==="brand-naming"?/<section[^>]*class="[^"]*bn2-hero[^"]*"[^>]*>[\s\S]*?<\/section>/:/<section[^>]*class="[^"]*(?:offer-final-cta|offer-final|vs-close|sa-final)[^"]*"[^>]*>[\s\S]*?<\/section>/;
        const section=html.match(sectionPattern)?.[0];
        assert.ok(section?.includes('data-crm-offer="'+offer+'"'),"Missing callback in specified CTA section: "+locale+" "+offer);
        assert.ok(section?.includes('data-crm-group="'+offer+'"'),"Missing aligned CTA group: "+locale+" "+offer);
        assert.equal((html.match(new RegExp('data-crm-offer="'+offer+'"','g'))||[]).length,1,"Duplicate callback: "+locale+" "+offer);
      }
    }
    const pool=getCrmPool();
    const requestId=randomUUID();
    const payload={requestId,name:"CI HTTP Client",phone:"+966500000000",service:"brand-naming",contactConsent:true,locale:"en",offer:"landing-page-package",analyticsConsent:true,advertisingConsent:false,gclid:"synthetic-id",utmSource:"ci-test"};
    const send=(data,origin="https://dewank.com")=>fetch(url+"/api/leads",{method:"POST",headers:{origin,"content-type":"application/json"},body:JSON.stringify(data),redirect:"manual"});
    const rejected=await send(payload,"https://invalid.example");assert.equal(rejected.status,403);
    const invalid=await send({...payload,phone:"123"});assert.equal(invalid.status,422);
    const res=await send(payload);assert.equal(res.status,201);
    const first=await res.json();assert.equal(first.created,true);assert.match(first.reference,/^[a-f0-9-]{36}$/);
    const replay=await send(payload);assert.equal(replay.status,200);assert.deepEqual(await replay.json(),{reference:first.reference,created:false});
    const conflict=await send({...payload,name:"Other Client"});assert.equal(conflict.status,409);
    const [rows]=await pool.execute("SELECT l.lead_ref,l.gclid,l.utm_source,l.offer,l.landing_path,n.state FROM dewank_crm_leads l JOIN dewank_crm_notifications n ON n.lead_id=l.id WHERE l.request_id=?",[requestId]);
    assert.equal(rows.length,1);assert.equal(rows[0].lead_ref,first.reference);assert.equal(rows[0].gclid,null);assert.equal(rows[0].utm_source,"ci-test");assert.equal(rows[0].state,"pending");assert.equal(rows[0].offer,"landing-page-package");assert.equal(rows[0].landing_path,"/en/offers/landing-page-package");
  }finally{
    child.kill("SIGTERM");await closeCrmPool();
  }
});
