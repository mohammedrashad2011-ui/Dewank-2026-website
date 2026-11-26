import {test} from "node:test";
import assert from "node:assert/strict";
import {validateLead} from "../app/lib/crm/validate-lead.mjs";
const sample={"requestId":"12345678-1234-4123-8123-123456789abc","name":"محمد","phone":"+٩٦٦ ٥٠١٢٣٤٥٦٧","service":"brand-naming","contactConsent":true,"locale":"ar","landingPath":"/offers/brand-naming","gclid":"test-id"};
test("accepts minimum fields and normalizes Arabic digits",()=>{const r=validateLead(sample);assert.equal(r.ok,true);assert.equal(r.data.phone,"+966501234567");assert.equal(r.data.email,null);});
test("rejects malformed phone, unknown service, missing consent, honeypot and invalid request ID",()=>{for(const patch of [{phone:"123"},{service:"bad"},{contactConsent:false},{website:"spam"},{requestId:"1"}])assert.equal(validateLead({...sample,...patch}).ok,false);});
test("retains attribution only with analytics consent and accepts only local paths",()=>{assert.equal(validateLead(sample).data.gclid,null);assert.equal(validateLead({...sample,analyticsConsent:true}).data.gclid,"test-id");assert.equal(validateLead({...sample,landingPath:"//bad.example"}).data.landingPath,null);});
