"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import Link from "next/link";
import "./growth-experience.css";

type Locale = "ar" | "en";
type Focus = "brand" | "demand" | "automation";
type Props = { locale: Locale; whatsappHref: string };

const order: Focus[] = ["brand", "demand", "automation"];

const language = {
  ar: {
    overline: "ديوانك / استوديو للنمو",
    subline: "استراتيجية. إبداع. تنفيذ.",
    headline: ["نصنع العلامة.", "نحرّك الطلب.", "ونؤتمت النمو."],
    intro: "نربط الهوية بالإعلانات والموقع والمتابعة، حتى لا تضيع الفرصة بين أول زيارة وأول محادثة.",
    project: "احكِ لنا عن مشروعك",
    work: "شاهد أعمالنا",
    scroll: "اكتشف المزيد",
    selector: "على ماذا نعمل؟",
    strap: "علامات لها حضور. تسويق يخلق طلبًا. متابعة لا تفوّت الفرص.",
    directions: {
      brand: { name: "البراند", statement: "هوية لا تُنسى", href: "/branding", accent: "IDENTITY" },
      demand: { name: "الطلب", statement: "وصول يتحوّل لفرص", href: "/paid-ads", accent: "DEMAND" },
      automation: { name: "الأتمتة", statement: "متابعة تعمل بذكاء", href: "/whatsapp-automation", accent: "MOMENTUM" },
    },
    marquee: ["براند", "إعلانات", "مواقع", "أتمتة", "نمو بذكاء"],
    stamp: "نمو بذكاء",
  },
  en: {
    overline: "DEWANK / THE GROWTH STUDIO",
    subline: "STRATEGY. CREATIVE. EXECUTION.",
    headline: ["WE BUILD BRANDS.", "WE DRIVE DEMAND.", "WE ENGINEER GROWTH."],
    intro: "From the first impression to the next conversation. We connect brand, marketing, websites and automation so every touchpoint has a purpose.",
    project: "Tell us about your project",
    work: "Explore selected work",
    scroll: "SCROLL TO EXPLORE",
    selector: "WHAT WE MOVE",
    strap: "A stronger brand. Better demand. Smarter follow-through.",
    directions: {
      brand: { name: "Brand", statement: "Made to stand apart", href: "/en/branding", accent: "IDENTITY" },
      demand: { name: "Demand", statement: "Attention into action", href: "/en/paid-advertising", accent: "DEMAND" },
      automation: { name: "Automation", statement: "Momentum that lasts", href: "/en/whatsapp-crm-automation", accent: "MOMENTUM" },
    },
    marquee: ["BUILD BRANDS", "DRIVE DEMAND", "CREATE IMPACT", "MAKE IT MOVE"],
    stamp: "KEEP MOVING",
  },
} as const;

export default function GrowthExperience({ locale, whatsappHref }: Props) {
  const [focus, setFocus] = useState<Focus>("brand");
  const [isVisible, setIsVisible] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(true);
  const [interactionPaused, setInteractionPaused] = useState(false);
  const rootRef = useRef<HTMLElement>(null);
  const artRef = useRef<HTMLDivElement>(null);
  const content = language[locale];

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onPreference = () => setReduceMotion(mq.matches);
    onPreference();
    mq.addEventListener("change", onPreference);
    const node = rootRef.current;
    let observer: IntersectionObserver | null = null;
    if (node && typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        ([entry]) => setIsVisible(entry.isIntersecting),
        { rootMargin: "140px 0px", threshold: 0 },
      );
      observer.observe(node);
    }
    return () => { mq.removeEventListener("change", onPreference); observer?.disconnect(); };
  }, []);

  useEffect(() => {
    if (reduceMotion || interactionPaused || !isVisible) return;
    const id = window.setInterval(() => {
      setFocus((current) => order[(order.indexOf(current) + 1) % order.length]);
    }, 5800);
    return () => window.clearInterval(id);
  }, [reduceMotion, interactionPaused, isVisible]);

  useEffect(() => {
    const node = rootRef.current;
    if (!node || reduceMotion) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const box = node.getBoundingClientRect();
      if (box.bottom < 0 || box.top > window.innerHeight) return;
      const amount = Math.max(-1, Math.min(1, (box.top + box.height / 2 - window.innerHeight / 2) / window.innerHeight));
      node.style.setProperty("--dw-scroll-shift", `${Math.round(amount * -42)}px`);
    };
    const request = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    request();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
    };
  }, [reduceMotion]);

  const onPointer = (event: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    artRef.current?.style.setProperty("--dw-pointer-x", `${(x * 31).toFixed(1)}px`);
    artRef.current?.style.setProperty("--dw-pointer-y", `${(y * 27).toFixed(1)}px`);
  };

  const resetPointer = () => {
    artRef.current?.style.setProperty("--dw-pointer-x", "0px");
    artRef.current?.style.setProperty("--dw-pointer-y", "0px");
  };

  return (
    <section
      className={"dw-editorial-hero" + (!isVisible ? " dw-offscreen" : "")}
      data-focus={focus}
      dir={locale === "ar" ? "rtl" : "ltr"}
      ref={rootRef}
      aria-label={locale === "ar" ? "ديوانك، براند وتسويق ومواقع وأتمتة" : "Dewank brand, marketing and growth studio"}
      onMouseEnter={() => setInteractionPaused(true)}
      onMouseLeave={() => setInteractionPaused(false)}
      onFocusCapture={() => setInteractionPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setInteractionPaused(false);
      }}
    >
      <div className="dw-ed-world" aria-hidden="true">
        <span className="dw-ed-world-word">DEWANK</span>
      </div>

      <div className="dw-ed-topline">
        <span className="dw-ed-overline"><i aria-hidden="true" />{content.overline}</span>
        <span className="dw-ed-subline">{content.subline}</span>
      </div>

      <div className="dw-ed-composition" ref={artRef} onPointerMove={onPointer} onPointerLeave={resetPointer}>
        <div className="dw-ed-light-field" aria-hidden="true" />
        <div className="dw-ed-giant-orbit" aria-hidden="true">
          <div className="dw-ed-orbit-shell" />
          <div className="dw-ed-orbit-center" />
          <div className="dw-ed-orbit-line dw-ed-orbit-line-a" />
          <div className="dw-ed-orbit-line dw-ed-orbit-line-b" />
          <span className="dw-ed-orbit-spark">✳</span>
        </div>
        <div className="dw-ed-slanted-type" aria-hidden="true">
          <span>MAKE</span><span>IT</span><span>MOVE</span>
        </div>
        <div className="dw-ed-focus-ghost" key={focus} aria-hidden="true">
          {content.directions[focus].accent}
        </div>

        <h1 className="dw-ed-headline">
          {content.headline.map((line, index) => (
            <span className={"dw-ed-headline-mask dw-ed-headline-mask-" + index} key={line}>
              <span className="dw-ed-headline-word">{line}</span>
            </span>
          ))}
        </h1>
        <div className="dw-ed-side-label" aria-hidden="true">
          <span>DEWANK STUDIO</span><i />
        </div>
        <div className="dw-ed-asterisk" aria-hidden="true">✳</div>
      </div>

      <div className="dw-ed-foot">
        <div className="dw-ed-foot-copy">
          <p>{content.intro}</p>
          <div className="dw-ed-actions">
            <a className="dw-ed-primary-cta" href={whatsappHref} target="_blank" rel="noopener noreferrer">
              <span>{content.project}</span><span aria-hidden="true">↗</span>
            </a>
            <Link href={locale === "ar" ? "/work" : "/en/work"} className="dw-ed-secondary-cta">
              {content.work}<span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className="dw-ed-focus-panel">
          <span className="dw-ed-focus-label">{content.selector}</span>
          <div className="dw-ed-focus-switch" role="group" aria-label={content.selector}>
            {order.map((key) => (
              <button
                type="button"
                key={key}
                onClick={() => { setFocus(key); setInteractionPaused(true); }}
                aria-pressed={focus === key}
                className={"dw-ed-focus-button" + (focus === key ? " is-current" : "")}
              >
                {content.directions[key].name}
              </button>
            ))}
          </div>
          <Link className="dw-ed-focus-link" href={content.directions[focus].href} aria-live="off">
            <span key={focus}>{content.directions[focus].statement}</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>

      <div className="dw-ed-running-type" aria-hidden="true">
        <div className="dw-ed-running-lane">
          {[0, 1, 2, 3].map((loop) => (
            <span className="dw-ed-running-set" key={loop}>
              {content.marquee.map((word) => (
                <span key={word}>{word}<i>✳</i></span>
              ))}
            </span>
          ))}
        </div>
      </div>
      <div className="dw-ed-tail">
        <span>{content.strap}</span>
        <span>{content.scroll}<b aria-hidden="true">↓</b></span>
      </div>
    </section>
  );
}
