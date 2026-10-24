"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import Link from "next/link";
import "./growth-experience.css";

type Locale = "ar" | "en";
type Direction = "brand" | "demand" | "automation";
const order: Direction[] = ["brand", "demand", "automation"];

const copy = {
  ar: {
    eyebrow: "ديوانك",
    signoff: "نمو بذكاء",
    lead: "البراند، الإعلانات، والأتمتة.",
    choose: "ابدأ من هنا",
    discover: "اكتشف كيف نعمل",
    progress: "تصفّح التجربة",
    directions: {
      brand: {
        label: "البراند",
        words: ["اصنع", "هوية", "تُذكر"],
        kicker: "الفرق يبدأ من الانطباع الأول",
        sub: "تموضع واضح وهوية تترك أثرًا.",
        url: "/branding",
        ticker: ["هوية", "تموضع", "تجربة", "حضور"],
      },
      demand: {
        label: "جذب العملاء",
        words: ["حرّك", "الطلب", "بذكاء"],
        kicker: "المهم من يصل إليك، ولماذا",
        sub: "حملات ورسائل تقرّب العميل من القرار.",
        url: "/paid-ads",
        ticker: ["بحث", "حملات", "وصول", "تحويل"],
      },
      automation: {
        label: "الأتمتة",
        words: ["واصل", "رحلة", "النمو"],
        kicker: "الرحلة لا تنتهي عند الاستفسار",
        sub: "محادثات ومتابعة تعمل بانسجام.",
        url: "/whatsapp-automation",
        ticker: ["محادثات", "عملاء", "متابعة", "نمو"],
      },
    },
  },
  en: {
    eyebrow: "DEWANK",
    signoff: "GROWTH, INTELLIGENTLY",
    lead: "Brand, campaigns, and automation.",
    choose: "Start here",
    discover: "Explore what we do",
    progress: "Explore the experience",
    directions: {
      brand: {
        label: "Brand",
        words: ["MAKE", "IT", "ICONIC"],
        kicker: "MAKE THE FIRST IMPRESSION COUNT",
        sub: "Strategy and identity with staying power.",
        url: "/en/branding",
        ticker: ["IDENTITY", "STRATEGY", "PRESENCE", "IMPACT"],
      },
      demand: {
        label: "Demand",
        words: ["TURN", "UP", "DEMAND"],
        kicker: "BE FOUND. BE CHOSEN.",
        sub: "Campaigns and messages that move people to act.",
        url: "/en/paid-advertising",
        ticker: ["SEARCH", "CREATIVE", "CONVERT", "DEMAND"],
      },
      automation: {
        label: "Automation",
        words: ["KEEP", "IT", "MOVING"],
        kicker: "NEVER LOSE THE MOMENTUM",
        sub: "From the first message to the next opportunity.",
        url: "/en/whatsapp-crm-automation",
        ticker: ["CONNECT", "RESPOND", "FOLLOW UP", "GROW"],
      },
    },
  },
} as const;

export default function GrowthExperience({ locale }: { locale: Locale }) {
  const [direction, setDirection] = useState<Direction>("brand");
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(true);
  const stageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const text = copy[locale];
  const scene = text.directions[direction];

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || paused || reduced) return;
    const id = window.setInterval(() => {
      setDirection(prev => order[(order.indexOf(prev) + 1) % order.length]);
    }, 6500);
    return () => window.clearInterval(id);
  }, [inView, paused, reduced, direction]);

  const movePointer = (event: PointerEvent<HTMLDivElement>) => {
    if (reduced || event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - .5;
    const y = (event.clientY - bounds.top) / bounds.height - .5;
    stageRef.current?.style.setProperty("--ge-x", `${(x * 24).toFixed(1)}px`);
    stageRef.current?.style.setProperty("--ge-y", `${(y * 20).toFixed(1)}px`);
    stageRef.current?.style.setProperty("--ge-tx", `${(-x * 5).toFixed(1)}px`);
    stageRef.current?.style.setProperty("--ge-ty", `${(-y * 4).toFixed(1)}px`);
  };
  const resetPointer = () => {
    stageRef.current?.style.setProperty("--ge-x", "0px");
    stageRef.current?.style.setProperty("--ge-y", "0px");
    stageRef.current?.style.setProperty("--ge-tx", "0px");
    stageRef.current?.style.setProperty("--ge-ty", "0px");
  };

  return (
    <div
      ref={containerRef}
      className={"growth-experience" + (inView ? " ge-visible" : "")}
      data-scene={direction}
      dir={locale === "ar" ? "rtl" : "ltr"}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false);
      }}
    >
      <div className="ge-stage" ref={stageRef} onPointerMove={movePointer} onPointerLeave={resetPointer}>
        <div className="ge-grain" aria-hidden="true" />
        <div className="ge-spotlight" aria-hidden="true" />
        <div className="ge-voltage" aria-hidden="true" />
        <div className="ge-sculpture" aria-hidden="true">
          <div className="ge-sculpture-edge" />
          <div className="ge-sculpture-core" />
        </div>
        <div className="ge-stage-top">
          <span className="ge-wordmark">{text.eyebrow}</span>
          <span className="ge-smallprint">{text.signoff}</span>
        </div>
        <div className="ge-kinetic" key={direction}>
          <span className="ge-kinetic-kicker">{scene.kicker}</span>
          <h2 className="ge-kinetic-title" aria-label={scene.words.join(" ")}>
            {scene.words.map((word, i) => (
              <span className={"ge-text-window ge-text-window-" + i} key={i} aria-hidden="true">
                <span className="ge-text-word">{word}</span>
              </span>
            ))}
          </h2>
        </div>
        <div className="ge-stamp" aria-hidden="true">
          <span>✳</span>
        </div>
        <div className="ge-signal" aria-hidden="true"><span /><span /><span /><span /><span /></div>
        <div className="ge-stage-bottom">
          <div className="ge-stage-bottom-copy" key={direction+"-copy"}>
            <strong>{scene.sub}</strong>
          </div>
          <span className="ge-arrow" aria-hidden="true">↗</span>
        </div>
        <div className="ge-track ge-track-front" aria-hidden="true">
          <div className="ge-track-running">
            {[0,1,2,3].map(i => (
              <span className="ge-track-set" key={i}>
                {scene.ticker.map(t => <span key={t}>{t}<i>✳</i></span>)}
              </span>
            ))}
          </div>
        </div>
        <div className="ge-track ge-track-back" aria-hidden="true">
          <div className="ge-track-running">
            {[0,1,2,3].map(i => (
              <span className="ge-track-set" key={i}>
                <span>DEWANK <i>✳</i> {locale === "ar" ? "نمو بذكاء" : "MAKE IT MOVE"} <i>✳</i></span>
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="ge-controls">
        <div className="ge-controls-intro">
          <strong>{text.choose}</strong>
          <span>{text.lead}</span>
        </div>
        <div className="ge-tabs" role="group" aria-label={text.progress}>
          {order.map((item) => (
            <button
              key={item}
              type="button"
              className={"ge-tab" + (direction === item ? " is-selected" : "")}
              aria-pressed={direction === item}
              onClick={() => setDirection(item)}
            >
              <span>{text.directions[item].label}</span>
              <span className="ge-tab-progress" aria-hidden="true"><i /></span>
            </button>
          ))}
        </div>
        <Link href={scene.url} className="ge-link">{text.discover}<span aria-hidden="true">↗</span></Link>
      </div>
    </div>
  );
}

export function GrowthMarquee({locale}: {locale: Locale}) {
  const slogan = locale === "ar" ? "نصنع العلامة" : "BUILD THE BRAND";
  const response = locale === "ar" ? "نحرّك الطلب" : "MOVE THE DEMAND";
  return (
    <div className="ge-wide-ribbon" dir={locale === "ar" ? "rtl" : "ltr"} aria-hidden="true">
      <div className="ge-wide-runner">
        {[0,1,2,3].map(index=><span key={index}>{slogan}<i>✳</i>{response}<i>✳</i></span>)}
      </div>
    </div>
  );
}
