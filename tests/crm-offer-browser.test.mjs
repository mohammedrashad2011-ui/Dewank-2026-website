import {chromium} from "playwright";
import assert from "node:assert/strict";
import {spawn} from "node:child_process";
import {setTimeout as sleep} from "node:timers/promises";
import {CRM_OFFERS} from "../app/lib/crm/offer-catalog.mjs";
const base="http://127.0.0.1:3101";
if(process.env.CRM_CAPTURE_ENABLED!=="true"||process.env.CRM_NOTIFICATIONS_ENABLED!=="false"||process.env.VERCEL_ENV)throw Error("Browser checks must use isolated CI build");
const server=spawn(process.execPath,["node_modules/next/dist/bin/next","start","--hostname","127.0.0.1","--port","3101"],{env:process.env,stdio:"ignore"});
let browser;
try{
  let ready=false;
  for(let i=0;i<60;i++){try{if((await fetch(base+"/contact",{signal:AbortSignal.timeout(2000)})).ok){ready=true;break;}}catch{}await sleep(500);}
  assert.ok(ready,"Next ready");
  browser=await chromium.launch({headless:true});
  for(const viewport of [{width:390,height:844},{width:1440,height:900}]){
    const context=await browser.newContext({viewport, reducedMotion:"reduce"});
    const page=await context.newPage();
    for(const [offer,entry] of Object.entries(CRM_OFFERS)){
      for(const locale of ["ar","en"]){
        const prefix=locale==="en"?"/en":"";
        const tag=locale+" "+offer+" "+viewport.width;
        await page.goto(base+prefix+entry[1],{waitUntil:"domcontentloaded"});
        const section=page.locator(offer==="brand-naming"?"section.bn2-hero":"section.offer-final-cta,section.offer-final,section.vs-close,section.sa-final").filter({has:page.locator("div[data-crm-group="+JSON.stringify(offer)+"]")});
        const group=section.locator("div[data-crm-group="+JSON.stringify(offer)+"]");
        const cta=group.locator("a[data-crm-offer="+JSON.stringify(offer)+"]");
        assert.equal(await page.locator("a[data-crm-offer="+JSON.stringify(offer)+"]").count(),1,tag+" exactly one callback");
        await cta.waitFor({state:"visible",timeout:10000});
        await cta.scrollIntoViewIfNeeded();
        const metrics=await cta.evaluate(el=>{const r=el.getBoundingClientRect(),s=getComputedStyle(el);return {width:r.width,height:r.height,left:r.left,right:r.right,viewport:document.documentElement.clientWidth,cursor:s.cursor,bg:s.backgroundColor,fg:s.color,border:parseFloat(s.borderTopWidth),font:parseFloat(s.fontSize)};});
        assert.ok(metrics.height>=44&&metrics.width>80,tag+" tap target "+JSON.stringify(metrics));
        assert.ok(metrics.left>=-1&&metrics.right<=metrics.viewport+1,tag+" overflow "+JSON.stringify(metrics));
        assert.equal(metrics.cursor,"pointer",tag);
        assert.equal(metrics.bg,"rgb(245, 249, 252)",tag);
        assert.equal(metrics.fg,"rgb(1, 17, 39)",tag);
        assert.ok(metrics.border>=1&&metrics.font>=14,tag);
        const alignment=await group.evaluate(el=>{const primary=el.firstElementChild,secondary=el.querySelector("a[data-crm-offer]");if(!primary||!secondary)return null;const a=primary.getBoundingClientRect(),b=secondary.getBoundingClientRect();return {left:Math.abs(a.left-b.left),right:Math.abs(a.right-b.right),gap:b.top-a.bottom};});
        assert.ok(alignment&&alignment.left<=2&&alignment.right<=2&&alignment.gap>=6&&alignment.gap<=24,tag+" CTA alignment "+JSON.stringify(alignment));
        assert.ok((await cta.getAttribute("href")).startsWith(prefix+"/contact?offer="+offer),tag);
        await cta.click({trial:true,timeout:10000});
        console.log("CTA_VISIBLE "+tag);
        if(viewport.width===390){
          await cta.click();
          await page.waitForURL("**/contact?offer="+offer+"#brief-form");
          await page.waitForFunction(service=>document.querySelector('select[name="service"]')?.value===service,entry[0]);
          assert.equal(await page.locator('select[name="service"]').inputValue(),entry[0],tag);
        }
      }
    }
    await context.close();
  }
}finally{await browser?.close();server.kill("SIGTERM");}
