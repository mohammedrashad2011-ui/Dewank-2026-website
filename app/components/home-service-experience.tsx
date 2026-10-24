"use client";

import { useState, type FocusEvent, type PointerEvent } from "react";
import Link from "next/link";
import { ServiceArt } from "./home-service-art";
import "./home-service-experience.css";

type Language = "ar" | "en";
type Focus = "growth" | "web" | "brand" | "automation";
const order: Focus[] = ["growth", "web", "brand", "automation"];
const catalogue = {
  ar: {
    prompt: "اختر ما يحرك مشروعك",
    action: "اكتشف الخدمة",
    services: {
      growth: {
        title: "نجذب الطلب",
        strap: "اجعل السوق ينتبه",
        text: "حملات Google وMeta ورسائل تقود العملاء نحو قرار واضح، بعيدًا عن مطاردة النقرات.",
        tags: ["Google Ads", "Meta Ads", "Tracking"],
        url: "/paid-ads",
        field: "DEMAND",
      },
      web: {
        title: "نبني المواقع",
        strap: "صمّم لحظة القرار",
        text: "تجارب ويب وصفحات هبوط تجمع الهوية والسرعة والتحويل في مكان واحد.",
        tags: ["Web Design", "SEO", "CRO"],
        url: "/website-design",
        field: "DIGITAL",
      },
      brand: {
        title: "نبني البراند والمحتوى",
        strap: "اترك بصمة",
        text: "اسم وتموضع وهوية ومحتوى يخلقون شخصية يعرفها عميلك قبل أن يقرأ اسمك.",
        tags: ["Branding", "Content", "Social"],
        url: "/branding",
        field: "IDENTITY",
      },
      automation: {
        title: "نؤتمت المتابعة",
        strap: "لا تدع الفرصة تنتظر",
        text: "واتساب وCRM ومسارات متابعة تجعل المحادثات تتحول إلى خطوات منظمة.",
        tags: ["WhatsApp", "CRM", "Automation"],
        url: "/whatsapp-automation",
        field: "FLOW",
      },
    },
  },
  en: {
    prompt: "Choose what moves your business",
    action: "Explore the service",
    services: {
      growth: {
        title: "Attract demand",
        strap: "Make the market notice",
        text: "Google and Meta campaigns built around attention that turns into real enquiries, not just clicks.",
        tags: ["Google Ads", "Meta Ads", "Tracking"],
        url: "/en/paid-advertising",
        field: "DEMAND",
      },
      web: {
        title: "Build websites",
        strap: "Design the moment of decision",
        text: "Websites and landing pages where a compelling message, speed and conversion meet.",
        tags: ["Web Design", "SEO", "CRO"],
        url: "/en/website-design",
        field: "DIGITAL",
      },
      brand: {
        title: "Brand and content",
        strap: "Make it unmistakable",
        text: "Positioning, identity and content that give your business a distinctive, consistent presence.",
        tags: ["Branding", "Content", "Social"],
        url: "/en/services#brand",
        field: "IDENTITY",
      },
      automation: {
        title: "Automate follow-up",
        strap: "Keep every conversation moving",
        text: "WhatsApp, CRM and connected workflows that make enquiries easier to follow through.",
        tags: ["WhatsApp", "CRM", "Automation"],
        url: "/en/whatsapp-crm-automation",
        field: "FLOW",
      },
    },
  },
} as const;

export default function HomeServiceExperience({locale}: {locale: Language}) {
  const [focus, setFocus] = useState<Focus>("growth");
  const [pointer, setPointer] = useState({x:0,y:0});
  const content = catalogue[locale];
  const item = content.services[focus];
  const onMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;
    const box=event.currentTarget.getBoundingClientRect();
    setPointer({
      x: Math.round((((event.clientX-box.left)/box.width)-.5)*20),
      y: Math.round((((event.clientY-box.top)/box.height)-.5)*20),
    });
  };
  const reset = () => setPointer({x:0,y:0});
  return (
    <div className="hm-services" dir={locale === "ar" ? "rtl" : "ltr"} data-focus={focus}>
      <nav className="hm-services-index" aria-label={content.prompt}>
        {order.map((key) => {
          const service=content.services[key];
          return (
            <Link
              href={service.url}
              key={key}
              className={"hm-services-line"+(focus===key?" is-active":"")}
              onPointerEnter={() => setFocus(key)}
              onFocus={() => setFocus(key)}
              aria-label={service.title}
            >
              <span className="hm-services-line-copy">
                <strong>{service.title}</strong>
                <small>{service.strap}</small>
              </span>
              <span className="hm-services-line-arrow" aria-hidden="true">↗</span>
            </Link>
          );
        })}
      </nav>
      <div className="hm-services-theatre" onPointerMove={onMove} onPointerLeave={reset}
           style={{"--hm-pointer-x":pointer.x+"px","--hm-pointer-y":pointer.y+"px"} as React.CSSProperties}>
        <div className="hm-services-grid" aria-hidden="true"/>
        <div className="hm-services-sky" aria-hidden="true"/>
        <div className="hm-services-graphic" key={focus} aria-hidden="true">
          <div className="hm-services-art-glow"/>
          {focus==="growth" && <div className="hm-art-growth"><i/><i/><i/><i/><i/><b/></div>}
          {focus==="web" && <div className="hm-art-web"><div className="hm-art-window"><span/><span/><span/></div><div className="hm-art-window hm-art-window-back"/><div className="hm-art-web-pointer">↗</div></div>}
          {focus==="brand" && <div className="hm-art-brand"><span>✳</span><i/><b/></div>}
          {focus==="automation" && <div className="hm-art-flow"><i/><i/><i/><i/><span/><b/></div>}
        </div>
        <div className="hm-services-stage-copy" key={focus+"-copy"}>
          <span className="hm-services-stage-field">{item.field}</span>
          <h3>{item.strap}</h3>
          <p>{item.text}</p>
          <div className="hm-services-tags">{item.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
          <Link className="hm-services-stage-link" href={item.url}>{content.action}<span aria-hidden="true">↗</span></Link>
        </div>
        <span className="hm-services-edge-label" aria-hidden="true">DEWANK</span>
      </div>
    </div>
  );
}
