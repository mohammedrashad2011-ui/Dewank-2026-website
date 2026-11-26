"use client";
import {useState,useEffect} from "react";
import {permittedCampaign} from "@/app/lib/crm/browser-attribution";
export function CrmOfferContactLink({locale,offer}:{locale:"ar"|"en";offer:string}) {
  const base=locale==="ar"?"/contact":"/en/contact";
  const initial=base+"?offer="+encodeURIComponent(offer)+"#brief-form";
  const [href,setHref]=useState(initial);
  useEffect(()=>{
    function refresh(){
      const params=new URLSearchParams({offer});
      for(const [k,v] of Object.entries(permittedCampaign(new URLSearchParams(window.location.search))))params.set(k,v);
      setHref(base+"?"+params.toString()+"#brief-form");
    }
    refresh();
    window.addEventListener("dewank:consent-change",refresh);
    return()=>window.removeEventListener("dewank:consent-change",refresh);
  },[base,offer]);
  return <div className="crm-offer-contact-row">
    <a className="crm-preview-contact-link" href={href} data-crm-offer={offer}>
      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 16v2a2 2 0 0 1-2.2 2 15.5 15.5 0 0 1-6.8-2.4 15.2 15.2 0 0 1-4.7-4.7A15.5 15.5 0 0 1 4 6.2 2 2 0 0 1 6 4h2a2 2 0 0 1 2 1.7l.5 2.6a2 2 0 0 1-.6 2l-1 1a12 12 0 0 0 3.8 3.8l1-1a2 2 0 0 1 2-.6l2.6.5A2 2 0 0 1 20 16Z"/></svg>
      <span>{locale==="ar"?"تفضّل أن نتواصل معك؟ اترك رقمك":"Prefer us to contact you? Leave your number"}</span>
      <span className="crm-offer-contact-arrow" aria-hidden="true">{locale==="ar"?"←":"→"}</span>
    </a>
  </div>;
}
