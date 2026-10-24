"use client";

import { useRef, type PointerEvent } from "react";

type Locale = "ar" | "en";
const localeCopy = {
  ar: {
    name:"ديوانك  /  الخدمات",
    signal:["استراتيجية","إبداع","تنفيذ"],
    topMeta:"براند  /  تسويق  /  أتمتة",
    first:"لا تبدأ من",
    second:"اسم الخدمة",
    third:"ابدأ من النتيجة",
    description:"إعلانات ومواقع ومحتوى وبراند وأتمتة تعمل كمنظومة واحدة  اختر نقطة الاختناق الحالية وخذ أقصر طريق للخدمة المناسبة",
    explore:"اكتشف مساراتنا",
    marquee:["العلامة","المحتوى","النمو","المواقع","القياس","الأتمتة"],
    stages:[
      {label:"بناء العلامة",href:"#brand-services"},
      {label:"صناعة الطلب",href:"#growth-services"},
      {label:"الويب والتحويل",href:"#web-services"},
      {label:"الأتمتة",href:"#automation-services"}
    ]
  },
  en: {
    name:"DEWANK / CAPABILITIES",
    signal:["STRATEGY","CREATIVE","EXECUTION"],
    topMeta:"BRAND  /  MARKETING  /  AUTOMATION",
    first:"DON'T START",
    second:"WITH A SERVICE",
    third:"START WITH IMPACT",
    description:"Advertising, websites, content, brand and automation work as one system  Find the bottleneck first, then take the clearest route forward",
    explore:"Explore our capabilities",
    marquee:["BRAND","CONTENT","GROWTH","WEB","MEASUREMENT","AUTOMATION"],
    stages:[
      {label:"Brand",href:"#brand"},
      {label:"Demand",href:"#content"},
      {label:"Web & conversion",href:"#web"},
      {label:"Automation",href:"#automation"}
    ]
  }
} as const;

export default function ServicesMotionStage({locale}:{locale:Locale}) {
  const copy=localeCopy[locale];
  const visualRef=useRef<HTMLDivElement>(null);
  const onMove=(event:PointerEvent<HTMLDivElement>)=>{
    if(event.pointerType==="touch")return;
    const box=event.currentTarget.getBoundingClientRect();
    const x=((event.clientX-box.left)/box.width-.5);
    const y=((event.clientY-box.top)/box.height-.5);
    visualRef.current?.style.setProperty("--sm-x",Math.round(x*34)+"px");
    visualRef.current?.style.setProperty("--sm-y",Math.round(y*26)+"px");
  };
  const reset=()=>{
    visualRef.current?.style.setProperty("--sm-x","0px");
    visualRef.current?.style.setProperty("--sm-y","0px");
  };
  return (
    <section className="sm-hero" dir={locale==="ar"?"rtl":"ltr"}
      aria-label={locale==="ar"?"خدمات ديوانك":"Dewank services"}>
      <div className="sm-topline">
        <span className="sm-brand">{copy.name}</span>
        <span className="sm-topline-meta">{copy.topMeta}</span>
      </div>
      <div className="sm-hero-world" ref={visualRef} onPointerMove={onMove} onPointerLeave={reset}>
        <div className="sm-visual-stage" aria-hidden="true">
          <div className="sm-glow-field"/>
          <svg className="sm-flow-paths" viewBox="0 0 930 750" fill="none" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="sm-stream-one" x1="105" y1="45" x2="824" y2="728" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFB3D2"/><stop offset=".36" stopColor="#D3FF70"/><stop offset=".7" stopColor="#90F0EB"/><stop offset="1" stopColor="#8671FD"/>
              </linearGradient>
              <linearGradient id="sm-stream-two" x1="785" y1="0" x2="176" y2="720" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8EF2DA"/><stop offset=".45" stopColor="#9C86FA"/><stop offset="1" stopColor="#FEA2CA"/>
              </linearGradient>
            </defs>
            <path className="sm-flow-halo" d="M -35 615 C 190 70 550 45 712 241 S 667 657 1000 28" stroke="url(#sm-stream-one)" strokeWidth="112" strokeLinecap="round"/>
            <path className="sm-flow-main" d="M -35 615 C 190 70 550 45 712 241 S 667 657 1000 28" stroke="url(#sm-stream-one)" strokeWidth="51" strokeLinecap="round"/>
            <path className="sm-flow-highlight" d="M -35 615 C 190 70 550 45 712 241 S 667 657 1000 28" stroke="#FFF" strokeOpacity=".48" strokeWidth="5" strokeLinecap="round"/>
            <path className="sm-flow-secondary" d="M 125 -76 C 774 271 67 415 676 843" stroke="url(#sm-stream-two)" strokeWidth="39" strokeLinecap="round"/>
            <path className="sm-flow-sheen" d="M 125 -76 C 774 271 67 415 676 843" stroke="#FFF" strokeOpacity=".5" strokeWidth="3" strokeLinecap="round"/>
            <path className="sm-flow-stitch" d="M 125 -76 C 774 271 67 415 676 843" stroke="#D4FC8B" strokeWidth="2" strokeDasharray="5 20" strokeLinecap="round"/>
          </svg>
          <span className="sm-art-caption">DEWANK / MOVEMENT</span>
        </div>
        <div className="sm-hero-copy">
          <span className="sm-hero-kicker">{copy.signal.map((word,index)=><span key={word} className={index===0?"sm-kicker-lead":""}>{word}</span>)}</span>
          <h1>
            <span className="sm-line"><span>{copy.first}</span></span>
            <span className="sm-line sm-line-outline"><span>{copy.second}</span></span>
            <span className="sm-line sm-line-neon"><span>{copy.third}</span></span>
          </h1>
        </div>
        <div className="sm-orbit-mark" aria-hidden="true">✳</div>
        <div className="sm-frame-mark" aria-hidden="true">DEWANK STUDIO</div>
      </div>
      <div className="sm-hero-footer">
        <p>{copy.description}</p>
        <a href="#services-explore" className="sm-hero-action">
          <span>{copy.explore}</span><span aria-hidden="true">↘</span>
        </a>
      </div>
      <div className="sm-ticker" aria-hidden="true">
        <div className="sm-ticker-runner">
          {[0,1,2,3].map(loop=><span className="sm-ticker-unit" key={loop}>
            {copy.marquee.map(word=><span key={word}>{word}<i>✳</i></span>)}
          </span>)}
        </div>
      </div>
      <nav className="sm-navigation" aria-label={locale==="ar"?"انتقل إلى مجموعة الخدمات":"Explore service categories"}>
        {copy.stages.map(stage=><a key={stage.href} href={stage.href}>{stage.label}<span aria-hidden="true">↗</span></a>)}
      </nav>
    </section>
  );
}
