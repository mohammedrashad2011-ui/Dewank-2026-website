"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "./growth-experience.css";

type Locale = "ar" | "en";
type SceneKey = "reach" | "convert" | "follow";

const dictionary = {
  ar: {
    eyebrow: "DEWANK / GROWTH ENGINE",
    state: "منظومة نمو مترابطة",
    title: "من خطوات مشتتة إلى رحلة عميل واحدة",
    subtitle: "اختر التحدي، وشاهد كيف تتصل خطوات التسويق بدل ما تعمل كل واحدة وحدها.",
    question: "أين يتعطّل نمو مشروعك؟",
    hint: "اختر مسارًا لاستكشاف رحلة مختلفة",
    cta: "استكشف الحل",
    sample: "تصور تفاعلي لرحلة العمل، وليس بيانات عملاء حقيقية",
    center: "DEWANK",
    centerSub: "GROWTH SYSTEM",
    connected: "CONNECTED",
    nodes: ["الهوية", "الرسالة", "الحملة", "المتابعة"],
    scenes: {
      reach: {
        tab: "جذب الطلب",
        kicker: "ATTRACT",
        sourceTag: "الوصول",
        sourceTitle: "إعلان موجّه",
        sourceText: "عميل مناسب",
        targetTag: "التفاعل",
        targetTitle: "طلب تواصل",
        targetText: "فرصة للمحادثة",
        outcome: "من الظهور إلى أول استفسار واضح",
        toast: "وصول طلب جديد",
        alt: "رسم توضيحي يربط حملة تسويقية بديوانك ثم بطلب تواصل",
        href: "/paid-ads",
      },
      convert: {
        tab: "تحويل الزيارات",
        kicker: "CONVERT",
        sourceTag: "الموقع",
        sourceTitle: "زيارة مهتمّة",
        sourceText: "عرض واضح",
        targetTag: "القرار",
        targetTitle: "خطوة مفهومة",
        targetText: "تواصل أو حجز",
        outcome: "من اهتمام عابر إلى إجراء يستطيع العميل اتخاذه",
        toast: "تم اختيار الإجراء",
        alt: "رسم توضيحي يربط زيارة موقع بديوانك ثم بخطوة تحويل واضحة",
        href: "/website-design",
      },
      follow: {
        tab: "متابعة العملاء",
        kicker: "AUTOMATE",
        sourceTag: "المحادثة",
        sourceTitle: "استفسار وارد",
        sourceText: "عبر واتساب",
        targetTag: "النظام",
        targetTitle: "متابعة منظمة",
        targetText: "صندوق وارد وCRM",
        outcome: "من رسالة واردة إلى متابعة لا تُترك للصدفة",
        toast: "جاهز للمتابعة",
        alt: "رسم توضيحي يربط استفسار واتساب بديوانك ثم بمتابعة منظمة في إدارة العملاء",
        href: "/whatsapp-automation",
      },
    },
  },
  en: {
    eyebrow: "DEWANK / GROWTH ENGINE",
    state: "ONE CONNECTED SYSTEM",
    title: "Disconnected activity. Connected growth.",
    subtitle: "Choose the challenge and see how each part of your growth journey works with the next.",
    question: "Where does your growth get stuck?",
    hint: "Choose a route to explore a different customer journey",
    cta: "Explore this solution",
    sample: "Interactive illustration, not live customer or campaign data",
    center: "DEWANK",
    centerSub: "GROWTH SYSTEM",
    connected: "CONNECTED",
    nodes: ["Brand", "Message", "Campaign", "Follow-up"],
    scenes: {
      reach: {
        tab: "Attract demand",
        kicker: "ATTRACT",
        sourceTag: "REACH",
        sourceTitle: "Relevant campaign",
        sourceText: "Right audience",
        targetTag: "RESPONSE",
        targetTitle: "New enquiry",
        targetText: "A chance to connect",
        outcome: "From visibility to a meaningful first enquiry",
        toast: "Enquiry received",
        alt: "Illustration connecting a marketing campaign through Dewank to a customer enquiry",
        href: "/en/paid-advertising",
      },
      convert: {
        tab: "Convert visits",
        kicker: "CONVERT",
        sourceTag: "WEBSITE",
        sourceTitle: "Interested visitor",
        sourceText: "A clearer offer",
        targetTag: "ACTION",
        targetTitle: "Clear next step",
        targetText: "Contact or book",
        outcome: "From passing interest to an action a customer can take",
        toast: "Action selected",
        alt: "Illustration connecting a website visit through Dewank to a conversion action",
        href: "/en/website-design",
      },
      follow: {
        tab: "Follow up",
        kicker: "AUTOMATE",
        sourceTag: "CONVERSATION",
        sourceTitle: "Incoming enquiry",
        sourceText: "WhatsApp message",
        targetTag: "WORKFLOW",
        targetTitle: "Organised follow-up",
        targetText: "Shared inbox & CRM",
        outcome: "From an incoming message to a structured follow-up",
        toast: "Ready for follow-up",
        alt: "Illustration connecting a WhatsApp enquiry through Dewank to structured CRM follow-up",
        href: "/en/whatsapp-crm-automation",
      },
    },
  },
} as const;

const sceneOrder: SceneKey[] = ["reach", "convert", "follow"];

export default function GrowthExperience({ locale }: { locale: Locale }) {
  const [sceneKey, setSceneKey] = useState<SceneKey>("reach");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const copy = dictionary[locale];
  const scene = copy.scenes[sceneKey];

  useEffect(() => {
    const element = sectionRef.current;
    if (!element || typeof IntersectionObserver === "undefined") {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={"growth-experience" + (isVisible ? " ge-is-visible" : "")}
      data-scene={sceneKey}
      dir={locale === "ar" ? "rtl" : "ltr"}
      aria-label={locale === "ar" ? "تجربة تفاعلية لمنظومة نمو ديوانك" : "Interactive Dewank growth system"}
    >
      <div className="ge-topbar">
        <span className="ge-topbar-name">{copy.eyebrow}</span>
        <span className="ge-topbar-status"><i aria-hidden="true" />{copy.state}</span>
      </div>

      <div className="ge-visual-frame" key={sceneKey} role="img" aria-label={scene.alt}>
        <div className="ge-grid" aria-hidden="true" />
        <div className="ge-atmosphere ge-atmosphere-one" aria-hidden="true" />
        <div className="ge-atmosphere ge-atmosphere-two" aria-hidden="true" />
        <div className="ge-circuit" aria-hidden="true">
          <svg viewBox="0 0 760 440" preserveAspectRatio="none">
            <path className="ge-circuit-shadow" d="M120 225 C235 225 235 120 380 120 S520 225 640 225" />
            <path className="ge-circuit-live" d="M120 225 C235 225 235 120 380 120 S520 225 640 225" />
            <path className="ge-circuit-shadow" d="M120 225 C235 225 260 335 380 335 S515 225 640 225" />
            <path className="ge-circuit-live ge-circuit-secondary" d="M120 225 C235 225 260 335 380 335 S515 225 640 225" />
          </svg>
        </div>

        <div className="ge-floating-mark ge-floating-mark-a" aria-hidden="true">{copy.nodes[0]}</div>
        <div className="ge-floating-mark ge-floating-mark-b" aria-hidden="true">{copy.nodes[1]}</div>
        <div className="ge-floating-mark ge-floating-mark-c" aria-hidden="true">{copy.nodes[2]}</div>
        <div className="ge-floating-mark ge-floating-mark-d" aria-hidden="true">{copy.nodes[3]}</div>

        <div className="ge-cinematic-flow" aria-hidden="true">
          <div className="ge-endpoint ge-endpoint-input">
            <div className="ge-node-orbit"><span /></div>
            <small>{scene.sourceTag}</small>
            <strong>{scene.sourceTitle}</strong>
            <span className="ge-endpoint-detail">{scene.sourceText}</span>
            <div className="ge-endpoint-bars"><i /><i /><i /></div>
          </div>

          <div className="ge-reactor">
            <div className="ge-ring ge-ring-far" />
            <div className="ge-ring ge-ring-middle" />
            <div className="ge-ring ge-ring-near" />
            <div className="ge-reactor-aura" />
            <div className="ge-reactor-center">
              <span className="ge-reactor-spark">✦</span>
              <strong>{copy.center}</strong>
              <small>{copy.centerSub}</small>
            </div>
          </div>

          <div className="ge-endpoint ge-endpoint-output">
            <div className="ge-node-orbit"><span /></div>
            <small>{scene.targetTag}</small>
            <strong>{scene.targetTitle}</strong>
            <span className="ge-endpoint-detail">{scene.targetText}</span>
            <span className="ge-endpoint-check">✓</span>
          </div>
        </div>

        <div className="ge-live-pill"><span />{copy.connected}</div>
        <div className="ge-received-pill"><span className="ge-check">✓</span>{scene.toast}</div>
        <span className="ge-frame-corner ge-frame-corner-a" aria-hidden="true" />
        <span className="ge-frame-corner ge-frame-corner-b" aria-hidden="true" />
      </div>

      <div className="ge-console">
        <div className="ge-console-heading">
          <span className="ge-console-kicker">{scene.kicker} / {copy.centerSub}</span>
          <h2>{copy.question}</h2>
          <p>{copy.hint}</p>
        </div>
        <div className="ge-scene-switch" role="group" aria-label={copy.question}>
          {sceneOrder.map((key) => (
            <button
              key={key}
              type="button"
              className={"ge-scene-button" + (sceneKey === key ? " ge-scene-button-active" : "")}
              aria-pressed={sceneKey === key}
              onClick={() => setSceneKey(key)}
            >
              <span className="ge-scene-button-dot" aria-hidden="true" />
              {copy.scenes[key].tab}
            </button>
          ))}
        </div>
        <div className="ge-console-outcome" aria-live="polite" aria-atomic="true">
          <p>{scene.outcome}</p>
          <Link href={scene.href}>{copy.cta}<span aria-hidden="true">↗</span></Link>
        </div>
      </div>
      <p className="ge-illustration-note">{copy.sample}</p>
    </section>
  );
}
