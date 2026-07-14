"use client";

import { useEffect, useState } from "react";

const nodes = [
  { name: "الإعلانات", detail: "يلتقط العميل من الحملة ويبدأ الحوار فورًا.", x: 300, y: 62, position: "node-1" },
  { name: "CRM", detail: "يسجل البيانات والاهتمام ومرحلة كل فرصة.", x: 505, y: 175, position: "node-2" },
  { name: "الحجوزات", detail: "يعرض المواعيد ويؤكد الحجز تلقائيًا.", x: 505, y: 425, position: "node-3" },
  { name: "الدفع", detail: "يرسل رابط الدفع ويتابع حالة العملية.", x: 300, y: 538, position: "node-4" },
  { name: "فريق المبيعات", detail: "يحوّل الفرصة للموظف المناسب مع ملخص كامل.", x: 95, y: 425, position: "node-5" },
  { name: "التقارير", detail: "يجمع النتائج والتحويلات في رؤية واضحة.", x: 95, y: 175, position: "node-6" },
] as const;

export default function ConnectedSystem() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % nodes.length), 3600);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <div className="connected-system" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <svg className="network-lines" viewBox="0 0 600 600" aria-hidden="true">
        {nodes.map((node, index) => <line className={active === index ? "is-active" : ""} x1="300" y1="300" x2={node.x} y2={node.y} key={node.name} />)}
      </svg>

      <div className="system-hub" aria-live="polite">
        <small>WHATSAPP NEXT‑GEN</small>
        <strong>{nodes[active].name}</strong>
        <p>{nodes[active].detail}</p>
      </div>

      {nodes.map((node, index) => (
        <button
          type="button"
          className={`network-node ${node.position}${active === index ? " is-active" : ""}`}
          aria-pressed={active === index}
          onClick={() => setActive(index)}
          key={node.name}
        >
          <i aria-hidden="true" />{node.name}
        </button>
      ))}
    </div>
  );
}
