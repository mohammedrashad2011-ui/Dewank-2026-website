"use client";

// English version of the Arabic BrandSignal component (app/branding/brand-signal.tsx). Same tabs and panel markup,
// same CSS (branding-page.css), English text.
import { useState } from "react";

const stages = [
  {
    number: "01",
    label: "Positioning",
    title: "We define the place your brand should own.",
    text: "We study the market, the audience and the competition, then define the promise that makes your choice clear and logical.",
    decisions: ["The most valuable audience", "The promise and points of difference", "The proposed value"],
    result: "A customer who understands in seconds why you, for whom, and what sets you apart.",
  },
  {
    number: "02",
    label: "Identity",
    title: "We turn the strategy into a system people recognise.",
    text: "We build a visual language that works across the website, content, offers and the other points of contact.",
    decisions: ["The logo and how it is used", "Colours and typefaces", "Elements and applications"],
    result: "A consistent, professional presence that is easy to remember and to apply as the business grows.",
  },
  {
    number: "03",
    label: "Brand voice",
    title: "We make the way your brand speaks consistent.",
    text: "We shape the tone and core messages, so content, sales and customer service sound like one personality.",
    decisions: ["Tone of voice", "Core messages", "Content angles"],
    result: "Messages that are closer to the audience, and more consistent and persuasive in every channel.",
  },
];

export default function BrandLab() {
  const [active, setActive] = useState(0);
  const stage = stages[active];

  return (
    <section className="brand-lab" aria-label="Brand building lab">
      <div className="brand-lab-header">
        <div>
          <span>Brand building lab</span>
          <b>Choose a stage to see how an idea becomes a decision.</b>
        </div>
        <img src="/brand/mark/dewank-mark-240.webp" alt="Dewank logo" width="62" height="62" />
      </div>

      <div className="brand-lab-tabs" role="tablist" aria-label="Stages of brand building">
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
            {item.label}
          </button>
        ))}
      </div>

      <div className="brand-lab-panel" id="brand-lab-panel" role="tabpanel" aria-labelledby={`brand-lab-tab-${active}`}>
        <h3>{stage.title}</h3>
        <p>{stage.text}</p>
        <ul>
          {stage.decisions.map((decision) => <li key={decision}>{decision}</li>)}
        </ul>
        <div className="brand-lab-result"><small>Result</small><span>{stage.result}</span></div>
      </div>
    </section>
  );
}
