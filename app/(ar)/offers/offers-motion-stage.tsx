"use client";

import { useRef, type PointerEvent } from "react";

type Locale = "ar" | "en";

const copy = {
  ar: {
    eyebrow:"DEWANK  /  OFFERS",
    meta:"خدمات محددة  /  بداية واضحة",
    lead:"العرض المناسب",
    punch:"يغيّر البداية",
    description:"هوية وإعلانات ومواقع وأتمتة وتحسين تحويل، بعروض لها نطاق عمل واضح. اختر ما يحتاجه مشروعك وابدأ من نقطة محددة",
    action:"استكشف العروض",
    side:"اختَر ما يحرك مشروعك",
    ribbon:["براند","إعلانات","مواقع","محتوى","تحويل","أتمتة"],
  },
  en: {
    eyebrow:"DEWANK  /  OFFERS",
    meta:"CLEAR SCOPE  /  CONFIDENT START",
    lead:"THE RIGHT OFFER",
    punch:"THE NEXT MOVE",
    description:"Brand, campaigns, websites, automation and conversion work with a defined scope. Find a clear starting point for what your business needs",
    action:"Explore the offers",
    side:"MAKE YOUR NEXT MOVE COUNT",
    ribbon:["BRAND","CAMPAIGNS","WEBSITES","CONTENT","CONVERSION","AUTOMATION"],
  }
} as const;

export default function OffersMotionStage({locale}:{locale:Locale}) {
  const artRef=useRef<HTMLDivElement>(null);
  const c=copy[locale];
  const onPointer=(event:PointerEvent<HTMLDivElement>)=>{
    if(event.pointerType==="touch")return;
    const b=event.currentTarget.getBoundingClientRect();
    artRef.current?.style.setProperty("--om-x",(((event.clientX-b.left)/b.width-.5)*32).toFixed(1)+"px");
    artRef.current?.style.setProperty("--om-y",(((event.clientY-b.top)/b.height-.5)*24).toFixed(1)+"px");
  };
  const onLeave=()=>{
    artRef.current?.style.setProperty("--om-x","0px");
    artRef.current?.style.setProperty("--om-y","0px");
  };

  return (
    <section className="offers-motion-stage" dir={locale==="ar"?"rtl":"ltr"}
      aria-label={locale==="ar"?"عروض ديوانك":"Dewank offers"}>
      <div className="om-atmosphere" aria-hidden="true"/>
      <div className="om-hero-top">
        <span className="om-label">{c.eyebrow}</span>
        <span className="om-top-meta">{c.meta}</span>
      </div>
      <div className="om-stage-main" ref={artRef} onPointerMove={onPointer} onPointerLeave={onLeave}>
        <div className="om-line-field" aria-hidden="true"/>
        <div className="om-ribbon-art" aria-hidden="true">
          <div className="om-ribbon om-ribbon-one"/>
          <div className="om-ribbon om-ribbon-two"/>
          <div className="om-ribbon om-ribbon-three"/>
          <div className="om-art-core">✳</div>
        </div>
        <div className="om-ghost-type" aria-hidden="true">OFFERS</div>
        <div className="om-hero-typography">
          <span className="om-kicker">{c.side}</span>
          <h1>
            <span className="om-title-mask"><span>{c.lead}</span></span>
            <span className="om-title-mask om-title-accent"><span>{c.punch}</span></span>
          </h1>
        </div>
        <span className="om-side-asterisk" aria-hidden="true">✳</span>
      </div>
      <div className="om-hero-bottom">
        <p>{c.description}</p>
        <a className="om-explore" href="#offers-explore">
          <span>{c.action}</span>
          <span aria-hidden="true">↘</span>
        </a>
      </div>
      <div className="om-moving-type" aria-hidden="true">
        <div className="om-moving-track">
          {[0,1,2,3].map(loop=>(
            <span className="om-moving-unit" key={loop}>
              {c.ribbon.map(word=><span key={word}>{word}<i>✳</i></span>)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
