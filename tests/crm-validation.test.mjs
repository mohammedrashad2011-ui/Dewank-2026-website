import {test} from "node:test";
import assert from "node:assert/strict";
import {validateLead} from "../app/lib/crm/validate-lead.mjs";
const sample={"requestId":"12345678-1234-4123-8123-123456789abc","name":"محمد","phone":"+٩٦٦ ٥٠١٢٣٤٥٦٧","service":"brand-naming","contactConsent":true,"locale":"ar","landingPath":"/offers/brand-naming","gclid":"test-id"};
test("accepts minimum fields and normalizes Arabic digits",()=>{const r=validateLead(sample);assert.equal(r.ok,true);assert.equal(r.data.phone,"+966501234567");assert.equal(r.data.email,null);});
test("rejects malformed phone, unknown service, missing consent, honeypot and invalid request ID",()=>{for(const patch of [{phone:"123"},{service:"bad"},{contactConsent:false},{website:"spam"},{requestId:"1"}])assert.equal(validateLead({...sample,...patch}).ok,false);});
test("retains attribution only with analytics consent and accepts only local paths",()=>{assert.equal(validateLead(sample).data.gclid,null);assert.equal(validateLead({...sample,analyticsConsent:true}).data.gclid,null);assert.equal(validateLead({...sample,advertisingConsent:true}).data.gclid,null);assert.equal(validateLead({...sample,analyticsConsent:true,advertisingConsent:true}).data.gclid,"test-id");assert.equal(validateLead({...sample,landingPath:"//bad.example"}).data.landingPath,null);});

import {CRM_OFFERS,getCrmOffer} from "../app/lib/crm/offer-catalog.mjs";
test("all 12 offers keep unique offer attribution and canonical localized path",()=>{assert.equal(Object.keys(CRM_OFFERS).length,12);for(const [offer,entry] of Object.entries(CRM_OFFERS)){for(const locale of ["ar","en"]){const r=validateLead({...sample,offer,locale,service:entry[0],landingPath:"/wrong"});assert.equal(r.ok,true);assert.equal(r.data.offer,offer);assert.equal(r.data.landingPath,(locale==="en"?"/en":"")+entry[1]);}}assert.equal(getCrmOffer("constructor"),null);assert.equal(validateLead({...sample,offer:"fake"}).data.offer,null);});
