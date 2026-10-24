"use client";

import { useEffect } from "react";

/** Opt-in section transitions. Source content and image links stay SSR-visible. */
export default function WorkMotionDirector() {
  useEffect(()=>{
    const root=document.querySelector<HTMLElement>(".work-cinematic");
    if(!root || !("IntersectionObserver" in window))return;
    const motion=window.matchMedia("(prefers-reduced-motion: reduce)");
    if(motion.matches)return;
    const targets=Array.from(root.querySelectorAll<HTMLElement>(
      ".proof-paths-head, .proof-path-card, .real-case-copy, .metrics-panel, " +
      ".bithan-work-copy, .bithan-work-visual, .identity-work-head, .identity-work-card, " +
      ".testimonials-head, .testimonial-card, .concepts-head, .concept-card, " +
      ".work-method>h2, .work-method-grid>div, .work-final>div"
    ));
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(!entry.isIntersecting)return;
        entry.target.classList.add("wk-in-view");
        observer.unobserve(entry.target);
      });
    },{threshold:.06,rootMargin:"0px 0px -2% 0px"});
    targets.forEach(target=>{
      const rect=target.getBoundingClientRect();
      target.classList.add("wk-anim-target");
      if(rect.top<window.innerHeight*.95)target.classList.add("wk-in-view");
      else observer.observe(target);
    });
    root.classList.add("wk-motion-ready");
    const onPreference=()=>{
      if(!motion.matches)return;
      observer.disconnect();
      root.classList.remove("wk-motion-ready");
      targets.forEach(t=>t.classList.add("wk-in-view"));
    };
    motion.addEventListener("change",onPreference);
    return()=>{
      motion.removeEventListener("change",onPreference);
      observer.disconnect();
      root.classList.remove("wk-motion-ready");
      targets.forEach(t=>t.classList.remove("wk-anim-target","wk-in-view"));
    };
  },[]);
  return null;
}
