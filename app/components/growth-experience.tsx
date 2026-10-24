"use client";

import { useState } from "react";
import Link from "next/link";
import GrowthArtifactCanvas from "./growth-artifact-canvas";
import "../home-hierarchy-refinement.css";
import "./growth-experience.css";

type Locale = "ar" | "en";
type Route = "demand" | "conversion" | "continuity";
const order: Route[] = ["demand", "conversion", "continuity"];

const translations = {
  ar: {
    signature: "ديوانك",
    eyebrow: "نمو بذكاء",
    lead: "من أول انطباع إلى آخر متابعة.",
    choose: "اختر نقطة البداية",
    link: "اكتشف الخدمة",
    routes: {
      demand: {
        tab: "اجذب الطلب",
        word: "تظهر",
        title: "لا يكفي مجرد الظهور",
        description: "رسالة واضحة تصل إلى الجمهور المناسب.",
        service: "/paid-ads",
      },
      conversion: {
        tab: "ارفع التحويل",
        word: "تقنع",
        title: "حوّل الاهتمام إلى خطوة",
        description: "صفحة تقود الزائر إلى إجراء واضح.",
        service: "/website-design",
      },
      continuity: {
        tab: "اربط المتابعة",
        word: "تتابع",
        title: "الفرصة تبدأ بعد الاستفسار",
        description: "متابعة منظمة من أول رسالة حتى الخطوة التالية.",
        service: "/whatsapp-automation",
      },
    },
  },
  en: {
    signature: "Dewank",
    eyebrow: "GROWTH, INTELLIGENTLY",
    lead: "From first impression to follow-up.",
    choose: "Choose where to begin",
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
