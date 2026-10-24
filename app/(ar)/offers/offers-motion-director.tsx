"use client";

import { useEffect } from "react";

/** Progressive-enhancement-only entrances for the existing server-rendered offer cards. */
export default function OffersMotionDirector() {
  useEffect(() => {
    const root=document.querySelector<HTMLElement>(".offers-overview-page");
    if(!root || typeof IntersectionObserver==="undefined")return;
    const mq=window.matchMedia("(prefers-reduced-motion: reduce)");
    if(mq.matches)return;
    const cards=Array.from(root.querySelectorAll<HTMLElement>(".offers-overview-grid > article"));
    const observer=new IntersectionObserver((entries)=>{
      for(const entry of entries){
        if(entry.isIntersecting){
          entry.target.classList.add("om-revealed");
          observer.unobserve(entry.target);
        }
      }
    },{threshold:.08,rootMargin:"0px 0px -2% 0px"});

    for(const card of cards){
      const b=card.getBoundingClientRect();
      card.classList.add("om-reveal-target");
      if(b.top<window.innerHeight*.95)card.classList.add("om-revealed");
      else observer.observe(card);
    }
    root.classList.add("om-motion-ready");
    const stop=()=>{if(!mq.matches)return;observer.disconnect();root.classList.remove("om-motion-ready");cards.forEach(card=>card.classList.add("om-revealed"));};
    mq.addEventListener("change",stop);
    return()=>{
      observer.disconnect();
      mq.removeEventListener("change",stop);
      root.classList.remove("om-motion-ready");
      for(const card of cards)card.classList.remove("om-reveal-target","om-revealed");
    };
  },[]);
  return null;
}
