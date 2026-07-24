"use client";

import { useState } from "react";

const stages = ["Manual", "Structured", "Automated", "Measured"];

const inputs = [
  { label: "رسائل متفرقة", tone: "chaos-a" },
  { label: "ملفات Excel", tone: "chaos-b" },
  { label: "مهام يدوية", tone: "chaos-c" },
  { label: "Leads بلا متابعة", tone: "chaos-d" },
];

const outputs = [
  { label: "Qualified Lead", tone: "result-a" },
  { label: "CRM Updated", tone: "result-b" },
  { label: "Follow-up Sent", tone: "result-c" },
  { label: "Report Ready", tone: "result-d" },
];

export default function AiWorkflowVisual() {
  const [stage, setStage] = useState(0);
  const [running, setRunning] = useState(false);

  function runFlow() {
    if (running) return;
    setRunning(true);
    setStage(0);

    [1, 2, 3].forEach((nextStage, index) => {
      window.setTimeout(() => setStage(nextStage), 650 * (index + 1));
    });

    window.setTimeout(() => setRunning(false), 2900);
  }

  return (
    <div className={`ai-control-room stage-${stage}${running ? " is-running" : ""}`} aria-label="لوحة تحكم تفاعلية توضّح تحويل الفوضى إلى عملية مؤتمتة">
      <div className="ai-room-top">
        <span>AI CONTROL ROOM</span>
        <b>{stages[stage]}</b>
      </div>

      <div className="ai-room-grid">
        <div className="ai-side ai-inputs" aria-label="قبل التنظيم">
          <small>BEFORE</small>
          {inputs.map((item, index) => (
            <button
              key={item.label}
              type="button"
              className={`ai-ticket ${item.tone}`}
              onClick={() => setStage(Math.min(index, 3))}
            >
              <i aria-hidden="true" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        <button type="button" className="ai-orchestrator" onClick={runFlow} aria-label="شغّل الأتمتة التفاعلية">
          <span className="ai-ring ring-one" aria-hidden="true">RULES</span>
          <span className="ai-ring ring-two" aria-hidden="true">DATA</span>
          <span className="ai-ring ring-three" aria-hidden="true">ACTIONS</span>
          <strong>AI</strong>
          <small>ORCHESTRATION</small>
        </button>

        <div className="ai-side ai-outputs" aria-label="بعد الأتمتة">
          <small>AFTER</small>
          {outputs.map((item, index) => (
            <button
              key={item.label}
              type="button"
              className={`ai-ticket ${item.tone}${stage === index ? " is-active" : ""}`}
              onClick={() => setStage(index)}
            >
              <i aria-hidden="true" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="ai-flow-track" aria-hidden="true">
        <span className="flow-before" />
        <span className="flow-after" />
        <i />
      </div>

      <button type="button" className="ai-run" onClick={runFlow} disabled={running}>
        {running ? "جاري التنظيم..." : "شغّل المنظومة"}
      </button>
    </div>
  );
}
