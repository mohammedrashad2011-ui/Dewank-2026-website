"use client";

import { useEffect, useState } from "react";

const steps = [
  ["01", "رسالة تدخل", "من إعلان، موقع، QR أو إنستجرام."],
  ["02", "فهم فوري", "النظام يقرأ النية ويطرح السؤال المناسب."],
  ["03", "تأهيل ذكي", "يجمع الاحتياج والميزانية والأولوية بلا استجواب طويل."],
  ["04", "إجراء حقيقي", "يحجز، يرسل عرضًا، يحدّث CRM أو يحوّل لموظف."],
  ["05", "متابعة تلقائية", "يعيد تنشيط الفرص في التوقيت المناسب."],
] as const;

export default function AutomationFlow() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % steps.length), 3200);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <div className="flow-interactive" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="flow-map" role="tablist" aria-label="مراحل أتمتة واتساب">
        {steps.map(([number, title, text], index) => (
          <button
            type="button"
            role="tab"
            aria-selected={active === index}
            className={active === index ? "is-active" : ""}
            onClick={() => setActive(index)}
            key={number}
          >
            <span>{number}</span>
            <b>{title}</b>
            <p>{text}</p>
            <i aria-hidden="true">↙</i>
          </button>
        ))}
      </div>
      <div className="flow-meter" aria-hidden="true"><span style={{ width: `${((active + 1) / steps.length) * 100}%` }} /></div>
    </div>
  );
}
