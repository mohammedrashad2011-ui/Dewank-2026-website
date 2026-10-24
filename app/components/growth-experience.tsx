"use client";

import { useState } from "react";
import Link from "next/link";
import GrowthArtifactCanvas from "./growth-artifact-canvas";
import "./growth-experience.css";

type Locale = "ar" | "en";
type Route = "demand" | "conversion" | "continuity";
const order: Route[] = ["demand", "conversion", "continuity"];

const translations = {
  ar: {
    signature: "ديوانك",
    eyebrow: "نمو بذكاء",
    lead: "القيمة تبدأ عندما تتصل التفاصيل.",
    choose: "ما الذي يحتاجه مشروعك الآن؟",
    link: "اكتشف الخدمة",
    routes: {
      demand: {
        tab: "اجذب الطلب",
        word: "تظهر",
        title: "الحضور يبدأ بالفرق",
        description: "رسالة واضحة تصل إلى الجمهور المناسب.",
        service: "/paid-ads",
      },
      conversion: {
        tab: "ارفع التحويل",
        word: "تقنع",
        title: "من اهتمام إلى قرار",
        description: "تجربة تجعل الخطوة التالية طبيعية.",
        service: "/website-design",
      },
      continuity: {
        tab: "اربط المتابعة",
        word: "تتابع",
        title: "لا تتوقف عند الاستفسار",
        description: "محادثات وعلاقات تسير بنظام واحد.",
        service: "/whatsapp-automation",
      },
    },
  },
  en: {
    signature: "Dewank",
    eyebrow: "GROWTH, INTELLIGENTLY",
    lead: "The difference is how everything connects.",
    choose: "Where should your business go next?",
    link: "Explore the solution",
    routes: {
      demand: {
        tab: "Attract",
        word: "BE SEEN",
        title: "Stand out. Reach the right people.",
        description: "A distinctive message, delivered with intent.",
        service: "/en/paid-advertising",
      },
      conversion: {
        tab: "Convert",
        word: "BE CHOSEN",
        title: "Give attention somewhere to go.",
        description: "A clearer experience. A more natural next step.",
        service: "/en/website-design",
      },
      continuity: {
        tab: "Connect",
        word: "STAY CLOSE",
        title: "Keep the conversation moving.",
        description: "Enquiries and follow-ups working together.",
        service: "/en/whatsapp-crm-automation",
      },
    },
  },
} as const;

const modeByRoute: Record<Route, number> = { demand: 0, conversion: 1, continuity: 2 };

export default function GrowthExperience({ locale }: { locale: Locale }) {
  const [route, setRoute] = useState<Route>("demand");
  const copy = translations[locale];
  const active = copy.routes[route];

  return (
    <div
      className="growth-experience"
      data-scene={route}
      dir={locale === "ar" ? "rtl" : "ltr"}
      aria-label={locale === "ar" ? "منظومة نمو ديوانك" : "Dewank growth experience"}
    >
      <div className="ge-stage">
        <GrowthArtifactCanvas mode={modeByRoute[route]} />
        <div className="ge-stage-vignette" aria-hidden="true" />
        <span className="ge-axis ge-axis-top" aria-hidden="true" />
        <span className="ge-axis ge-axis-bottom" aria-hidden="true" />
        <div className="ge-stage-header">
          <span className="ge-signature">{copy.signature}</span>
          <span className="ge-stage-kicker">{copy.eyebrow}</span>
        </div>
        <div className="ge-ghost-word" key={route + "-word"} aria-hidden="true">{active.word}</div>
        <div className="ge-stage-caption" key={route + "-caption"} aria-live="polite" aria-atomic="true">
          <span className="ge-stage-caption-rule" aria-hidden="true" />
          <strong>{active.title}</strong>
          <span>{active.description}</span>
        </div>
        <span className="ge-stage-symbol" aria-hidden="true">✦</span>
      </div>
      <div className="ge-controller">
        <div className="ge-controller-intro">
          <span className="ge-micro-label">{copy.choose}</span>
          <p>{copy.lead}</p>
        </div>
        <div className="ge-controller-tabs" role="group" aria-label={copy.choose}>
          {order.map((item) => (
            <button
              key={item}
              type="button"
              className={"ge-route" + (route === item ? " is-active" : "")}
              aria-pressed={route === item}
              onClick={() => setRoute(item)}
            >
              <span>{copy.routes[item].tab}</span>
              <span className="ge-route-indicator" aria-hidden="true" />
            </button>
          ))}
        </div>
        <Link className="ge-action" href={active.service}>
          <span>{copy.link}</span>
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </div>
  );
}
