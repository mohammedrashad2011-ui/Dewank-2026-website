"use client";

import { useState } from "react";

const nodes = [
  { key: "input", label: "البيانات" },
  { key: "logic", label: "القرار" },
  { key: "action", label: "التنفيذ" },
  { key: "report", label: "القياس" },
];

export default function AiWorkflowVisual() {
  const [active, setActive] = useState(1);

  return (
    <div className="ai-workflow" aria-label="مخطط تفاعلي يوضح دورة أتمتة الذكاء الاصطناعي">
      <div className="ai-flow-lines" aria-hidden="true">
        <span className="line line-1" />
        <span className="line line-2" />
        <span className="line line-3" />
        <span className="line line-4" />
      </div>

      <button
        type="button"
        className="ai-core"
        onClick={() => setActive((active + 1) % nodes.length)}
        aria-label="انتقل إلى المرحلة التالية"
      >
        <span>AI</span>
        <small>{nodes[active].label}</small>
      </button>

      {nodes.map((node, index) => (
        <button
          key={node.key}
          type="button"
          className={`ai-node node-${index + 1}${active === index ? " is-active" : ""}`}
          onClick={() => setActive(index)}
          aria-pressed={active === index}
        >
          <i aria-hidden="true" />
          <span>{node.label}</span>
        </button>
      ))}

      <p className="ai-hint">اضغط على أي مرحلة</p>
    </div>
  );
}
