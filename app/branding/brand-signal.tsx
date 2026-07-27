"use client";

import { useState } from "react";

const signalItems = [
  { label: "التموضع", title: "مكان واضح في السوق", text: "نحدد المساحة التي تملكها علامتك ولماذا يختارك العميل." },
  { label: "الهوية", title: "صورة تُعرف بك", text: "نحوّل الاستراتيجية إلى نظام بصري متماسك وسهل التطبيق." },
  { label: "الصوت", title: "رسالة تشبهك", text: "نصنع نبرة ورسائل ثابتة عبر المحتوى والمبيعات." },
];

export default function BrandSignal() {
  const [active, setActive] = useState(0);
  const item = signalItems[active];

  return (
    <div className="brand-signal" aria-label="مكونات نظام العلامة">
      <div className="brand-signal-rings" aria-hidden="true" />
      <div className="brand-signal-core" aria-hidden="true"><strong>D</strong></div>
      {signalItems.map((signal, index) => (
        <button
          type="button"
          className={`brand-signal-option ${active === index ? "active" : ""}`}
          key={signal.label}
          onClick={() => setActive(index)}
          onMouseEnter={() => setActive(index)}
          aria-pressed={active === index}
        >
          {signal.label}
        </button>
      ))}
      <div className="brand-signal-caption" aria-live="polite">
        <b>{item.title}</b>
        <p>{item.text}</p>
      </div>
    </div>
  );
}
