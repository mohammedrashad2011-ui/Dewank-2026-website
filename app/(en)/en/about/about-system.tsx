"use client";

// English version of the Arabic about-experience component (app/about/about-experience.tsx). Same tabs and panel.
import { useState } from "react";

const systems = [
  { label: "Brand", title: "We define why the market should choose you.", text: "Positioning, proposed value, messages and identity that make the brand clearer and easier to remember." },
  { label: "Marketing", title: "We turn clarity into demand.", text: "Content, campaigns, channels and a customer journey built around a measurable business goal." },
  { label: "Website", title: "We turn interest into a next step.", text: "A fast digital experience that explains the value and leads the visitor to an enquiry, a booking or a purchase." },
  { label: "Automation", title: "We stop opportunities being lost after they arrive.", text: "WhatsApp, CRM and smart workflows that connect replies, qualification, follow-up and reporting." },
];

export default function AboutSystem() {
  const [active, setActive] = useState(0);
  const item = systems[active];

  return (
    <section className="about-system shell" aria-labelledby="about-system-title">
      <div className="about-system-copy">
        <span className="section-label">One system</span>
        <h2 id="about-system-title">Growth is rarely held back by a missing service.<br /><em>It is held back when the services do not work together.</em></h2>
        <p>Choose each part to see how we connect it to the next one inside a single customer journey.</p>
      </div>

      <div className="system-interactive">
        <div className="system-tabs" role="tablist" aria-label="Parts of the Dewank system">
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
          <small>{item.label}</small>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <div className="system-progress" aria-hidden="true"><span style={{ width: `${((active + 1) / systems.length) * 100}%` }} /></div>
        </div>
      </div>
    </section>
  );
}
