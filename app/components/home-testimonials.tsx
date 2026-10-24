"use client";

import { useEffect, useRef, useState } from "react";
import "./home-testimonials-editorial.css";

type Locale = "ar" | "en";
const feedback = {
  ar: {
    label: "تجارب العملاء",
    headline: "الكلمة الأخيرة لعملائنا",
    sub: "تجارب حقيقية في بناء الهوية والتسمية وأبحاث السوق",
    next: "الرأي التالي",
    previous: "الرأي السابق",
    select: "اقرأ رأي",
    origin: "الآراء مترجمة إلى العربية مع الحفاظ على المعنى الأصلي",
    quotes: [
      {quote:"كان رشاد مبادرًا ومنتبهًا جدًا لاحتياجاتي، وصمّم شعارًا يعكس قيم شركتي بشكل مثالي",name:"صوفيا فلوريس",country:"الولايات المتحدة",kind:"هوية بصرية"},
      {quote:"قدرته على تحليل البيانات وعرضها كانت ممتازة. سرعة التنفيذ وجودة العمل جعلتاه مميزًا في أبحاث السوق",name:"مات موناكو",country:"الولايات المتحدة",kind:"أبحاث السوق"},
      {quote:"كانت عملية اختيار الاسم مدروسة واحترافية ومنظمة. تواصل ممتاز، وأفكار مبتكرة، والنتيجة النهائية أسعدتني فعلًا",name:"Loukastaki25",country:"قبرص",kind:"تسمية العلامة"},
      {quote:"ابتكر المصمم شعارًا محببًا يعكس روح الشركة المرحة والإبداعية، ونجح في الوقت نفسه في دمج الطابع الشرق أوسطي الذي أردت إبرازه",name:"Denver",country:"الولايات المتحدة",kind:"هوية بصرية"},
    ]
  },
  en: {
    label: "CLIENT VOICES",
    headline: "In our clients’ words",
    sub: "Real experiences in naming, brand identity and market research",
    next: "Next testimonial",
    previous: "Previous testimonial",
    select: "Read feedback from",
    origin: "Some feedback has been lightly edited for clarity, with the original meaning preserved",
    quotes: [
      {quote:"Rashad was proactive and very attentive to my needs, and designed a logo that reflects my company's values perfectly",name:"Sophia Flores",country:"United States",kind:"Brand identity"},
      {quote:"His ability to analyse and present data was excellent. The speed of execution and the quality of the work made him stand out in market research",name:"Matt Monaco",country:"United States",kind:"Market research"},
      {quote:"The naming process was thoughtful, professional and well organised. Excellent communication and creative ideas, and the final result made me genuinely happy",name:"Loukastaki25",country:"Cyprus",kind:"Brand naming"},
    ]
  }
} as const;

export default function HomeTestimonials({locale = "ar"}:{locale?:Locale}) {
  const copy=feedback[locale];
  const [active,setActive]=useState(0);
  const [paused,setPaused]=useState(false);
  const [reduced,setReduced]=useState(false);
  const touchStart=useRef<number|null>(null);
  const count=copy.quotes.length;
  const item=copy.quotes[active % count];

  useEffect(()=>{
    const query=window.matchMedia("(prefers-reduced-motion: reduce)");
    const update=()=>setReduced(query.matches);
    update();
    query.addEventListener("change",update);
    return()=>query.removeEventListener("change",update);
  },[]);

  useEffect(()=>{
    if(reduced||paused)return;
    const timer=window.setInterval(()=>setActive(index=>(index+1)%count),8200);
    return()=>window.clearInterval(timer);
  },[reduced,paused,count]);

  const pick=(index:number)=>{setActive(index);setPaused(true);};
  const move=(direction:number)=>pick((active+direction+count)%count);
  return (
    <section
      className="home-testimonials hm-voices"
      aria-labelledby="home-testimonials-title"
      dir={locale==="ar"?"rtl":"ltr"}
      onPointerEnter={()=>setPaused(true)}
      onPointerLeave={()=>setPaused(false)}
      onFocusCapture={()=>setPaused(true)}
      onBlurCapture={event=>{
        if(!event.currentTarget.contains(event.relatedTarget as Node|null))setPaused(false);
      }}
      onTouchStart={event=>{touchStart.current=event.touches[0]?.clientX??null;}}
      onTouchEnd={event=>{
        if(touchStart.current===null)return;
        const diff=(event.changedTouches[0]?.clientX??touchStart.current)-touchStart.current;
        if(Math.abs(diff)>50)move((diff>0?1:-1)*(locale==="ar"?1:-1));
        touchStart.current=null;
      }}
    >
      <div className="hm-voices-atmosphere" aria-hidden="true"/>
      <header className="hm-voices-header">
        <span className="hm-voices-label">{copy.label}</span>
        <h2 id="home-testimonials-title">{copy.headline}</h2>
        <p>{copy.sub}</p>
      </header>
      <div className="hm-voices-layout">
        <div className="hm-voices-feature">
          <span className="hm-voices-quote-mark" aria-hidden="true">“</span>
          <div className="hm-voices-quote-viewport" aria-live="polite" aria-atomic="true">
            <blockquote key={item.name}>{item.quote}</blockquote>
          </div>
          <div className="hm-voices-feature-foot">
            <div className="hm-voices-author">
              <strong>{item.name}</strong>
              <span>{item.country}<i aria-hidden="true"/> {item.kind}</span>
            </div>
            <div className="hm-voices-arrows">
              <button type="button" onClick={()=>move(-1)} aria-label={copy.previous}><span aria-hidden="true">{locale==="ar"?"→":"←"}</span></button>
              <button type="button" onClick={()=>move(1)} aria-label={copy.next}><span aria-hidden="true">{locale==="ar"?"←":"→"}</span></button>
            </div>
          </div>
        </div>
        <nav className="hm-voices-people" aria-label={locale==="ar"?"اختر رأي عميل":"Select a client testimonial"}>
          {copy.quotes.map((person,index)=>(
            <button type="button" key={person.name}
              className={"hm-voices-person"+(index===active?" is-active":"")}
              onClick={()=>pick(index)}
              aria-pressed={index===active}
              aria-label={copy.select+" "+person.name}
            >
              <span className="hm-voices-person-name">{person.name}</span>
              <small>{person.kind}</small>
              <span className="hm-voices-person-indicator" aria-hidden="true">↗</span>
            </button>
          ))}
        </nav>
      </div>
      <p className="hm-voices-footnote">{copy.origin}</p>
    </section>
  );
}
