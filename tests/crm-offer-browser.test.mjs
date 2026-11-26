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
        await page.evaluate(()=>document.fonts.ready);
        await cta.scrollIntoViewIfNeeded();
        const expectedLabel=locale==="ar"?"اترك رقمك للتواصل":"Request a callback";
        await page.waitForFunction(({offer,expectedLabel})=>{const el=document.querySelector("a[data-crm-offer="+JSON.stringify(offer)+"]");return el?.innerText.trim()===expectedLabel&&el.checkVisibility({contentVisibilityAuto:true,visibilityProperty:true,opacityProperty:true});},{offer,expectedLabel},{timeout:10000});
        assert.equal((await cta.innerText()).trim(),expectedLabel,tag+" concise CTA");
        await cta.scrollIntoViewIfNeeded();
        const metrics=await cta.evaluate(el=>{const r=el.getBoundingClientRect(),s=getComputedStyle(el);return {width:r.width,height:r.height,left:r.left,right:r.right,viewport:document.documentElement.clientWidth,cursor:s.cursor,bg:s.backgroundColor,fg:s.color,border:parseFloat(s.borderTopWidth),font:parseFloat(s.fontSize)};});
        assert.ok(metrics.height>=(viewport.width<=640?44:36)&&metrics.width>80&&metrics.width<=191,tag+" tap target "+JSON.stringify(metrics));
        assert.ok(metrics.left>=-1&&metrics.right<=metrics.viewport+1,tag+" overflow "+JSON.stringify(metrics));
        assert.equal(metrics.cursor,"pointer",tag);
        assert.ok(["rgb(245, 249, 252)","rgb(223, 247, 250)"].includes(metrics.bg),tag+" normal/hover background "+metrics.bg);
        assert.equal(metrics.fg,"rgb(1, 17, 39)",tag);
        assert.ok(metrics.border>=1&&metrics.font>=12&&metrics.font<=13,tag+" secondary visual hierarchy");
        const alignment=await group.evaluate(el=>{const primary=el.firstElementChild,secondary=el.querySelector("a[data-crm-offer]");if(!primary||!secondary)return null;const a=primary.getBoundingClientRect(),b=secondary.getBoundingClientRect();return {center:Math.abs((a.left+a.right-b.left-b.right)/2),primaryWidth:a.width,secondaryWidth:b.width,primaryHeight:a.height,secondaryHeight:b.height,gap:b.top-a.bottom};});
        assert.ok(alignment&&alignment.center<=2&&alignment.secondaryWidth<=alignment.primaryWidth*.79&&alignment.primaryHeight>=48&&alignment.gap>=6&&alignment.gap<=24,tag+" CTA alignment "+JSON.stringify(alignment));
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
