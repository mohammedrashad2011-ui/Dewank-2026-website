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
  return <a className="crm-preview-contact-link" href={href}>{locale==="ar"?"تفضّل أن نتواصل معك؟ اترك رقمك":"Prefer us to contact you? Leave your number"}</a>;
}
