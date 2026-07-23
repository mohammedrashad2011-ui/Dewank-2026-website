"use client";

import { useState } from "react";

const systems = [
  { label: "البراند", title: "نحدد لماذا يجب أن يختارك السوق.", text: "التموضع، القيمة المقترحة، الرسائل والهوية التي تجعل العلامة أوضح وأسهل تذكّرًا." },
  { label: "التسويق", title: "نحوّل الوضوح إلى طلب.", text: "محتوى، حملات، قنوات ورحلة عميل مبنية حول هدف تجاري قابل للقياس." },
  { label: "الموقع", title: "نحوّل الاهتمام إلى خطوة.", text: "تجربة رقمية سريعة تشرح القيمة وتقود الزائر إلى تواصل أو حجز أو شراء." },
  { label: "الأتمتة", title: "نمنع الفرص من الضياع بعد الوصول.", text: "واتساب وCRM وسير عمل ذكي يربط الرد والتأهيل والمتابعة والتقارير." },
];

export default function AboutExperience() {
  const [active, setActive] = useState(0);
  const item = systems[active];

  return (
    <section className="about-system shell" aria-labelledby="about-system-title">
      <div className="about-system-copy">
        <span className="section-label">[ منظومة واحدة ]</span>
        <h2 id="about-system-title">النمو لا يتعطل بسبب نقص خدمة.<br/><em>بل بسبب أن الخدمات لا تتحدث معًا.</em></h2>
        <p>اختر كل جزء لترى كيف نربطه بالجزء التالي داخل رحلة واحدة.</p>
      </div>

      <div className="system-interactive">
        <div className="system-tabs" role="tablist" aria-label="مكونات منظومة ديوانك">
          {systems.map((system, index) => (
            <button
              key={system.label}
              type="button"
              role="tab"
              aria-selected={active === index}
              className={active === index ? "active" : ""}
              onClick={() => setActive(index)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {system.label}
            </button>
          ))}
        </div>
        <div className="system-panel" role="tabpanel" aria-live="polite">
          <small>{systems[active].label}</small>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <div className="system-progress" aria-hidden="true"><span style={{ width: `${((active + 1) / systems.length) * 100}%` }} /></div>
        </div>
      </div>
    </section>
  );
}
