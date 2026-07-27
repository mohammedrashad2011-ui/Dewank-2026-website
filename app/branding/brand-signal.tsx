"use client";

import { useState } from "react";

const stages = [
  {
    number: "01",
    label: "التموضع",
    title: "نحدد مكانك الذي يستحق أن تملكه.",
    text: "نفهم السوق والجمهور والمنافسة، ثم نحدد الوعد الذي يجعل اختيارك منطقيًا وواضحًا.",
    decisions: ["الجمهور الأكثر قيمة", "الوعد ونقاط الاختلاف", "القيمة المقترحة"],
    result: "عميل يفهم خلال ثوانٍ: لماذا أنت، ولمن، وما الذي يميزك.",
  },
  {
    number: "02",
    label: "الهوية",
    title: "نحوّل الاستراتيجية إلى نظام يُعرف بك.",
    text: "نبني لغة بصرية متماسكة تعمل عبر الموقع والمحتوى والعروض ونقاط التواصل المختلفة.",
    decisions: ["الشعار ونظام استخدامه", "الألوان والخطوط", "العناصر والتطبيقات"],
    result: "حضور احترافي ثابت، سهل التذكر والتطبيق مع نمو المشروع.",
  },
  {
    number: "03",
    label: "صوت البراند",
    title: "نوحّد الطريقة التي تتحدث بها علامتك.",
    text: "نصوغ النبرة والرسائل الأساسية حتى يبدو المحتوى والمبيعات وخدمة العميل صادرًا عن شخصية واحدة.",
    decisions: ["نبرة الصوت", "الرسائل الرئيسية", "زوايا المحتوى"],
    result: "رسائل أقرب للجمهور وأكثر اتساقًا وإقناعًا في كل قناة.",
  },
];

const logo = "data:image/webp;base64,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";

export default function BrandSignal() {
  const [active, setActive] = useState(0);
  const stage = stages[active];

  return (
    <section className="brand-lab" aria-label="مختبر بناء البراند">
      <div className="brand-lab-header">
        <div>
          <span>مختبر بناء البراند</span>
          <b>اختر مرحلة لترى كيف تتحول الفكرة إلى قرار.</b>
        </div>
        <img src={logo} alt="علامة ديوانك" width="62" height="62" />
      </div>

      <div className="brand-lab-tabs" role="tablist" aria-label="مراحل بناء البراند">
        {stages.map((item, index) => (
          <button
            key={item.label}
            type="button"
            role="tab"
            aria-selected={active === index}
            aria-controls="brand-lab-panel"
            id={`brand-lab-tab-${index}`}
            className={active === index ? "active" : ""}
            onClick={() => setActive(index)}
          >
            <small>{item.number}</small>
            <strong>{item.label}</strong>
            <span aria-hidden="true">←</span>
          </button>
        ))}
      </div>

      <div
        className="brand-lab-panel"
        id="brand-lab-panel"
        role="tabpanel"
        aria-labelledby={`brand-lab-tab-${active}`}
        key={stage.label}
      >
        <div className="brand-lab-copy">
          <span className="brand-lab-kicker">المرحلة {stage.number}</span>
          <h2>{stage.title}</h2>
          <p>{stage.text}</p>
        </div>
        <div className="brand-lab-decisions">
          <small>ما الذي نحدده؟</small>
          <ul>{stage.decisions.map((decision) => <li key={decision}>{decision}</li>)}</ul>
        </div>
        <div className="brand-lab-result">
          <small>النتيجة</small>
          <p>{stage.result}</p>
        </div>
      </div>
    </section>
  );
}
