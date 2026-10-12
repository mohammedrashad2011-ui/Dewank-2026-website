"use client";

// English versions of the Arabic WhatsApp demo components (app/components/whatsapp-hero-demo.tsx, automation-flow.tsx,
// connected-system.tsx). Same behaviour, same CSS, English text. The sample conversations are illustrative examples.
import { useEffect, useState } from "react";
import styles from "../../../../components/whatsapp-hero-demo.module.css";

const stages = ["Instant reply", "Qualify", "Book", "Follow up"];

const journeys = [
  {
    id: "qualify",
    label: "Qualify a lead",
    stage: 2,
    messages: [
      { from: "user", text: "Which package suits a salon like mine?" },
      { from: "bot", text: "Happy to help. Roughly how many messages do you receive each day?" },
      { from: "user", text: "Between 40 and 60." },
      { from: "bot", text: "An automation and CRM setup suits you. I have prepared the next step." },
    ],
    crm: "Qualified lead • salon • 40–60 messages",
  },
  {
    id: "booking",
    label: "Book an appointment",
    stage: 3,
    messages: [
      { from: "user", text: "I would like an appointment on Thursday." },
      { from: "bot", text: "Available at 5:30 or 7:00 pm. Which time suits you?" },
      { from: "user", text: "5:30 works." },
      { from: "bot", text: "Booked. The confirmation and reminder are sent automatically." },
    ],
    crm: "Confirmed booking • Thursday 5:30 pm",
  },
  {
    id: "followup",
    label: "Automatic follow-up",
    stage: 4,
    messages: [
      { from: "bot", text: "I noticed you did not finish the booking yesterday. Shall we continue from the last step?" },
      { from: "user", text: "Yes, please continue." },
      { from: "bot", text: "Done. I moved you straight to confirming the appointment, without repeating the questions." },
      { from: "bot", text: "If you need a team member, I can transfer you right away." },
    ],
    crm: "Follow-up successful • customer back on track",
  },
];

export function WhatsAppHeroDemo() {
  const [active, setActive] = useState(0);
  const journey = journeys[active];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % journeys.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className={styles.demo} aria-label="Interactive example of WhatsApp automation">
      <div className={styles.glow} aria-hidden="true" />

      <aside className={styles.pipeline} aria-label="Automation stages">
        <small>LIVE FLOW</small>
        <ol>
          {stages.map((stage, index) => {
            const step = index + 1;
            const isActive = step === journey.stage;
            const isDone = step <= journey.stage;
            return (
              <li key={stage} className={isActive ? styles.activeStage : isDone ? styles.doneStage : ""}>
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
            <strong>Dewank AI</strong>
            <small><i /> Online now</small>
          </span>
          <b aria-label="WhatsApp">WA</b>
        </header>

        <div className={styles.chat} key={journey.id}>
          {journey.messages.map((message, index) => (
            <p
              key={`${journey.id}-${index}`}
              className={message.from === "bot" ? styles.bot : styles.user}
              style={{ animationDelay: `${index * 110}ms` }}
            >
              {message.text}
              <time>{message.from === "bot" ? "now" : "✓✓"}</time>
            </p>
          ))}
        </div>

        <div className={styles.crmCard}>
          <span><i /> CRM UPDATED</span>
          <strong>{journey.crm}</strong>
        </div>
      </section>

      <nav className={styles.controls} role="tablist" aria-label="Try a different journey">
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

const flowSteps = [
  ["01", "Message arrives", "From an advert, website, QR code or Instagram."],
  ["02", "Instant understanding", "The system reads the intent and asks the right question."],
  ["03", "Smart qualification", "It collects the need, budget and priority without a long questionnaire."],
  ["04", "Real action", "It books, sends a proposal, updates the CRM or hands over to a team member."],
  ["05", "Automatic follow-up", "It re-engages open opportunities at the right time."],
] as const;

export function AutomationFlow() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % flowSteps.length), 3200);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <div className="flow-interactive" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="flow-map" role="tablist" aria-label="WhatsApp automation stages">
        {flowSteps.map(([number, title, text], index) => (
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
      <div className="flow-meter" aria-hidden="true"><span style={{ width: `${((active + 1) / flowSteps.length) * 100}%` }} /></div>
    </div>
  );
}

const nodes = [
  { name: "Advertising", detail: "Captures the customer from the campaign and starts the conversation at once.", x: 300, y: 62, position: "node-1" },
  { name: "CRM", detail: "Records the details, the interest and the stage of each opportunity.", x: 505, y: 175, position: "node-2" },
  { name: "Bookings", detail: "Shows available slots and confirms the booking automatically.", x: 505, y: 425, position: "node-3" },
  { name: "Payments", detail: "Sends a payment link and tracks the status of the transaction.", x: 300, y: 538, position: "node-4" },
  { name: "Sales team", detail: "Passes the opportunity to the right person with a full summary.", x: 95, y: 425, position: "node-5" },
  { name: "Reporting", detail: "Brings results and conversions together in one clear view.", x: 95, y: 175, position: "node-6" },
] as const;

export function ConnectedSystem() {
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
        <small>WHATSAPP NEXT-GEN</small>
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
