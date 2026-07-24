"use client";

import { useEffect, useState } from "react";
import styles from "./whatsapp-hero-demo.module.css";

const stages = ["رد فوري", "تأهيل", "حجز", "متابعة"];

const journeys = [
  {
    id: "qualify",
    label: "تأهيل عميل",
    stage: 2,
    messages: [
      { from: "user", text: "أبغى أعرف الباقات المناسبة لصالوني." },
      { from: "bot", text: "أكيد. تقريبًا كم رسالة توصلكم يوميًا؟" },
      { from: "user", text: "بين 40 و60 رسالة." },
      { from: "bot", text: "مناسب لكم نظام الأتمتة + CRM. جهزت لك الخطوة التالية." },
    ],
    crm: "عميل مؤهل • صالون • 40–60 رسالة",
  },
  {
    id: "booking",
    label: "حجز موعد",
    stage: 3,
    messages: [
      { from: "user", text: "أبغى موعد يوم الخميس." },
      { from: "bot", text: "متاح 5:30 أو 7:00 مساءً. أي وقت يناسبك؟" },
      { from: "user", text: "5:30 مناسب." },
      { from: "bot", text: "تم الحجز وإرسال التأكيد والتذكير تلقائيًا." },
    ],
    crm: "موعد مؤكد • الخميس 5:30",
  },
  {
    id: "followup",
    label: "متابعة تلقائية",
    stage: 4,
    messages: [
      { from: "bot", text: "لاحظت أنك ما كملت الحجز أمس. تحب نكمل من آخر خطوة؟" },
      { from: "user", text: "نعم، كمّل." },
      { from: "bot", text: "تم. نقلتك مباشرة إلى تأكيد الموعد بدون إعادة الأسئلة." },
      { from: "bot", text: "وإذا احتجت موظف، أحوّلك فورًا." },
    ],
    crm: "متابعة ناجحة • عاد العميل للمسار",
  },
];

export default function WhatsAppHeroDemo() {
  const [active, setActive] = useState(0);
  const journey = journeys[active];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % journeys.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className={styles.demo} aria-label="تجربة تفاعلية توضح أتمتة واتساب">
      <div className={styles.glow} aria-hidden="true" />

      <aside className={styles.pipeline} aria-label="مراحل الأتمتة">
        <small>LIVE FLOW</small>
        <ol>
          {stages.map((stage, index) => {
            const step = index + 1;
            const isActive = step === journey.stage;
            const isDone = step <= journey.stage;

            return (
              <li
                key={stage}
                className={isActive ? styles.activeStage : isDone ? styles.doneStage : ""}
              >
                <i aria-hidden="true">{isDone ? "✓" : step}</i>
                <span>{stage}</span>
              </li>
            );
          })}
        </ol>
      </aside>

      <section className={styles.phone} aria-live="polite">
        <header className={styles.phoneHead}>
          <span className={`mark-frame ${styles.brandMark}`} aria-hidden="true" />
          <span>
            <strong>ديوانك AI</strong>
            <small><i /> متصل الآن</small>
          </span>
          <b aria-label="واتساب">WA</b>
        </header>

        <div className={styles.chat} key={journey.id}>
          {journey.messages.map((message, index) => (
            <p
              key={`${journey.id}-${index}`}
              className={message.from === "bot" ? styles.bot : styles.user}
              style={{ animationDelay: `${index * 110}ms` }}
            >
              {message.text}
              <time>{message.from === "bot" ? "الآن" : "✓✓"}</time>
            </p>
          ))}
        </div>

        <div className={styles.crmCard}>
          <span><i /> CRM UPDATED</span>
          <strong>{journey.crm}</strong>
        </div>
      </section>

      <nav className={styles.controls} role="tablist" aria-label="جرّب مسارًا مختلفًا">
        {journeys.map((item, index) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={active === index}
            className={active === index ? styles.activeControl : ""}
            onClick={() => setActive(index)}
          >
            <span>0{index + 1}</span>
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
