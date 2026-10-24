"use client";

import { useEffect } from "react";

/** Adds progressively enhanced editorial reveals while keeping every service SSR-visible. */
export default function ServicesMotionDirector() {
  useEffect(()=>{
    const root=document.querySelector<HTMLElement>(".services-motion-premium");
    if(!root || typeof IntersectionObserver==="undefined")return;
    const preference=window.matchMedia("(prefers-reduced-motion: reduce)");
    if(preference.matches)return;
    const targets=Array.from(root.querySelectorAll<HTMLElement>(
      ".services-aeo-answer>h2, .services-aeo-grid article, " +
      ".primary-service-paths:not(.decision-guides) .primary-paths-head, " +
      ".primary-service-paths:not(.decision-guides) .primary-path-card, " +
      ".services-mid-cta>div, .service-group-head, " +
      ".services-grid-refined .service-detail, .problem-chooser>div, " +
      ".services-faq>h2, .services-faq-list details, .services-final-cta>div"
    ));
    const observer=new IntersectionObserver(entries=>{
      for(const entry of entries){
        if(entry.isIntersecting){
          entry.target.classList.add("sm-revealed");
          observer.unobserve(entry.target);
        }
      }
    },{threshold:.06,rootMargin:"0px 0px -4% 0px"});
    for(const target of targets){
      const rect=target.getBoundingClientRect();
      target.classList.add("sm-reveal-target");
      if(rect.top<window.innerHeight*.95){
        target.classList.add("sm-revealed");
      }else{
        observer.observe(target);
      }
    }
    root.classList.add("sm-motion-ready");

    const sectionIds=["brand-services","growth-services","web-services","automation-services","brand","content","web","automation"];
    const sections=sectionIds.map(id=>root.querySelector<HTMLElement>("#"+id)).filter((n):n is HTMLElement=>Boolean(n));
    const linkMap=new Map<string,HTMLAnchorElement>();
    root.querySelectorAll<HTMLAnchorElement>(".service-jump-nav a").forEach(link=>{
      const href=link.getAttribute("href");
      if(href?.startsWith("#"))linkMap.set(href.slice(1),link);
    });
    const progressObserver=new IntersectionObserver(entries=>{
      const active=entries.filter(e=>e.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top)[0];
      if(!active)return;
      for(const link of linkMap.values()){link.classList.remove("sm-current");link.removeAttribute("aria-current");}
      const found=linkMap.get(active.target.id);
      if(found){found.classList.add("sm-current");found.setAttribute("aria-current","location");}
    },{rootMargin:"-18% 0px -54% 0px",threshold:0});
    sections.forEach(section=>progressObserver.observe(section));

    const onPreference=()=>{
      if(!preference.matches)return;
      root.classList.remove("sm-motion-ready");
      observer.disconnect();
      progressObserver.disconnect();
      targets.forEach(target=>target.classList.add("sm-revealed"));
    };
    preference.addEventListener("change",onPreference);
    return()=>{
      preference.removeEventListener("change",onPreference);
      observer.disconnect();
      progressObserver.disconnect();
      root.classList.remove("sm-motion-ready");
      targets.forEach(target=>target.classList.remove("sm-reveal-target","sm-revealed"));
      for(const link of linkMap.values()){link.classList.remove("sm-current");link.removeAttribute("aria-current");}
    };
  },[]);
  return null;
}
