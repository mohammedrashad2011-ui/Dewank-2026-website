"use client";

import Link from "next/link";
import {useEffect,useRef,useState,type PointerEvent,type CSSProperties} from "react";

type Locale="ar"|"en";
type Project={
  name:string;sector:string;image:string;href:string;
  color:string;glow:string;description:string;
};

const scenes:{
  ar:Project[];
  en:Project[];
}={
  ar:[
    {name:"BITHAN",sector:"تسمية وهوية مجوهرات",image:"/work/bithan/hero.svg",href:"/work/bithan",color:"#f3d7a7",glow:"211,148,95",description:"من اختيار الاسم إلى الهوية المعتمدة وتطبيقاتها"},
    {name:"ReachwayAD",sector:"هوية مؤسسية",image:"/work/reachwayad-remastered.webp",href:"#brand-identities",color:"#8adff2",glow:"76,193,231",description:"نظام بصري يعكس الثقة والحركة"},
    {name:"Clinika",sector:"هوية الجمال والعناية",image:"/work/clinika-remastered.webp",href:"#brand-identities",color:"#f2add3",glow:"237,115,178",description:"تجربة بصرية هادئة تبني انطباعًا واثقًا"},
    {name:"Arab Sun",sector:"هوية السفر والسياحة",image:"/work/arab-sun-remastered.webp",href:"#brand-identities",color:"#f8d17e",glow:"248,179,80",description:"لغة هوية تستلهم الشمس والحركة"}
  ],
  en:[
    {name:"BITHAN",sector:"Jewellery naming and identity",image:"/en/work/bithan/hero.svg",href:"/en/work/bithan",color:"#f3d7a7",glow:"211,148,95",description:"From the chosen name to the approved visual identity"},
    {name:"ReachwayAD",sector:"Corporate identity",image:"/en/work/reachwayad-remastered.webp",href:"#brand-identities",color:"#8adff2",glow:"76,193,231",description:"A visual system built around trust and movement"},
    {name:"Clinika",sector:"Beauty and care identity",image:"/en/work/clinika-remastered.webp",href:"#brand-identities",color:"#f2add3",glow:"237,115,178",description:"Calm, considered brand applications"},
    {name:"Arab Sun",sector:"Travel and tourism identity",image:"/en/work/arab-sun-remastered.webp",href:"#brand-identities",color:"#f8d17e",glow:"248,179,80",description:"Brand language inspired by the sun and movement"}
  ]
};

const messages={
  ar:{
    eyebrow:"ديوانك  /  أعمال مختارة",
    lead:"الفرق في التفاصيل",
    headline:"والفكرة وراءها",
    intro:"أعمال حقيقية، قرارات مدروسة، وتجارب بصرية لها قصة. استكشف المشاريع وشوف إزاي الفكرة بتتحول لحضور يستحق التذكر",
    view:"اكتشف المشروع",
    browse:"تصفح كل الأعمال",
    talk:"ناقش مشروعك",
    picker:"اختر مشروعًا",
    featured:"من أعمالنا",
    interaction:"حرّك المؤشر أو اختر مشروعًا",
    sceneLabel:"معرض مختار من أعمال ديوانك"
  },
  en:{
    eyebrow:"DEWANK / SELECTED WORK",
    lead:"BEYOND THE IMAGE",
    headline:"THE THINKING BEHIND IT",
    intro:"Real projects, deliberate decisions and visual stories made to be remembered. Explore the craft behind every direction",
    view:"Explore the project",
    browse:"Explore all work",
    talk:"Discuss your project",
    picker:"Select a project",
    featured:"Selected work",
    interaction:"Move your pointer or choose a project",
    sceneLabel:"Interactive showcase of selected Dewank projects"
  }
} as const;

export default function WorkEditorialHero({locale,whatsappHref}:{locale:Locale;whatsappHref:string}){
  const [active,setActive]=useState(0);
  const [manual,setManual]=useState(false);
  const [paused,setPaused]=useState(false);
  const stage=useRef<HTMLDivElement>(null);
  const c=messages[locale];
  const projects=scenes[locale];
  const selected=projects[active];

  useEffect(()=>{
    if(manual||paused||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
    const timer=window.setInterval(()=>{
      if(document.hidden)return;
      setActive(current=>(current+1)%projects.length);
    },5000);
    return()=>window.clearInterval(timer);
  },[manual,paused,projects.length]);

  const choose=(index:number)=>{
    setManual(true);
    setActive(index);
  };
  const move=(event:PointerEvent<HTMLDivElement>)=>{
    if(event.pointerType==="touch"||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
    const rect=event.currentTarget.getBoundingClientRect();
    const x=(event.clientX-rect.left)/rect.width-.5;
    const y=(event.clientY-rect.top)/rect.height-.5;
    stage.current?.style.setProperty("--wk-cursor-x",Math.round(x*18)+"px");
    stage.current?.style.setProperty("--wk-cursor-y",Math.round(y*14)+"px");
  };
  const reset=()=>{
    stage.current?.style.setProperty("--wk-cursor-x","0px");
    stage.current?.style.setProperty("--wk-cursor-y","0px");
  };

  return (
    <section className="wk-cinema" dir={locale==="ar"?"rtl":"ltr"}
      style={{"--wk-theme":selected.color,"--wk-rgb":selected.glow} as CSSProperties}
      aria-label={c.sceneLabel}>
      <div className="wk-cinema-grain" aria-hidden="true"/>
      <div className="wk-cinema-aura" aria-hidden="true"/>
      <div className="wk-cinema-grid">
        <div className="wk-cinema-copy">
          <div className="wk-cinema-kicker"><span className="wk-cinema-kicker-rule"/>{c.featured}</div>
          <h1>
            <span className="wk-cinema-title-line"><span>{c.lead}</span></span>
            <span className="wk-cinema-title-line wk-cinema-title-color"><span>{c.headline}</span></span>
          </h1>
          <p>{c.intro}</p>
          <div className="wk-cinema-actions">
            <a href="#brand-identities" className="wk-cinema-action-main">{c.browse}<span aria-hidden="true">↘</span></a>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="wk-cinema-action-quiet">{c.talk}<span aria-hidden="true">↗</span></a>
          </div>


        </div>

        <div className="wk-cinema-visual-column">
        <div className={"wk-cinema-scene"+(active===0?" is-portrait":"")} ref={stage} onPointerMove={move} onPointerLeave={reset}>
          <div className="wk-cinema-ambient" aria-hidden="true">
            <div className="wk-cinema-orbit wk-cinema-orbit-first"/>
            <div className="wk-cinema-orbit wk-cinema-orbit-second"/>
            <div className="wk-cinema-light wk-cinema-light-a"/>
            <div className="wk-cinema-light wk-cinema-light-b"/>
            <div className="wk-cinema-scan"/>
          </div>
          <div className="wk-cinema-film-stack" aria-hidden="true">
            <div className="wk-cinema-backplate wk-cinema-backplate-one"/>
            <div className="wk-cinema-backplate wk-cinema-backplate-two"/>
          </div>
          <Link className={"wk-cinema-stage"+(active===0?" is-portrait":"")} href={selected.href} aria-label={c.view+" — "+selected.name}
            onPointerEnter={()=>setPaused(true)} onPointerLeave={()=>setPaused(false)}
            onFocus={()=>setPaused(true)} onBlur={()=>setPaused(false)}>
            {projects.map((project,index)=>(
              <div key={project.name} className={"wk-cinema-slide"+(active===index?" is-active":"")} aria-hidden={active!==index}>
                <img src={project.image} alt="" width={index===0?1126:1200} height={index===0?1591:900} decoding="async" loading={index===0?"eager":"lazy"} fetchPriority={index===0?"high":"auto"}/>
              </div>
            ))}
          </Link>
        </div>
        <div className="wk-cinema-selector" aria-label={c.picker} role="group">
          <div className="wk-cinema-selector-list">
            {projects.map((project,index)=>(
              <button key={project.name} type="button"
                className={"wk-cinema-choice"+(active===index?" is-active":"")}
                onClick={()=>choose(index)} onFocus={()=>setPaused(true)}
                onBlur={()=>setPaused(false)} aria-pressed={active===index}
                aria-label={project.name+" — "+project.sector}>
                <span className="wk-cinema-choice-name">{project.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      </div>
      <div className="wk-cinema-footer">
        <span>{c.interaction}</span>
        <a href="#case-studies">{c.browse}<span aria-hidden="true">↓</span></a>
      </div>
    </section>
  );
}
