"use client";

import { useRef, useState, type CSSProperties, type KeyboardEvent } from "react";

type Locale = "ar" | "en";

const concepts = [
  {
    id: "mada",
    name: "MADA",
    arabic: "مدى",
    meaning: { ar: "مساحة مفتوحة لما هو قادم", en: "Room for what comes next" },
    story: { ar: "اتجاه لعلامة منزلية معاصرة: مساحات هادئة تترك للأشياء اليومية قيمة أطول.", en: "A direction for a contemporary homeware brand: calm spaces that give everyday objects lasting value." },
    line: { ar: "مساحة للحياة", en: "Room to live" },
    application: { ar: "بطاقة تغليف تجريبية", en: "Sample packaging card" },
    palette: [
      { hex: "#233B38", label: { ar: "أخضر عميق", en: "Deep green" } },
      { hex: "#D8B98A", label: { ar: "رمل دافئ", en: "Warm sand" } },
      { hex: "#F2EBDD", label: { ar: "عاجي", en: "Ivory" } },
    ],
  },
  {
    id: "nawa",
    name: "NAWA",
    arabic: "نواة",
    meaning: { ar: "من أصل صغير يبدأ الكثير", en: "A small beginning with room to grow" },
    story: { ar: "اتجاه لعلامة منزلية معاصرة تحتفي بالبداية البسيطة والتفاصيل التي تصنع إحساس المكان.", en: "A direction for a contemporary homeware brand that celebrates simple beginnings and the details that make a place feel like home." },
    line: { ar: "ابدأ من الداخل", en: "Begin within" },
    application: { ar: "بطاقة تغليف تجريبية", en: "Sample packaging card" },
    palette: [
      { hex: "#593C35", label: { ar: "طين", en: "Clay" } },
      { hex: "#C78C6B", label: { ar: "نحاس ناعم", en: "Soft copper" } },
      { hex: "#F5E9DC", label: { ar: "كريمي", en: "Cream" } },
    ],
  },
  {
    id: "riwaq",
    name: "RIWAQ",
    arabic: "رواق",
    meaning: { ar: "مكان يصل الداخل بالخارج", en: "A place between inside and outside" },
    story: { ar: "اتجاه لعلامة منزلية معاصرة تستلهم الإيقاع المعماري والضوء والضيافة الهادئة.", en: "A direction for a contemporary homeware brand inspired by architectural rhythm, light and quiet hospitality." },
    line: { ar: "للأماكن التي تجمعنا", en: "For spaces that bring us together" },
    application: { ar: "بطاقة تغليف تجريبية", en: "Sample packaging card" },
    palette: [
      { hex: "#263248", label: { ar: "حبر", en: "Ink" } },
      { hex: "#B6A071", label: { ar: "ذهب مطفأ", en: "Muted gold" } },
      { hex: "#EAE5D9", label: { ar: "حجر", en: "Stone" } },
    ],
  },
] as const;

const copy = {
  ar: {
    eyebrow: "FROM IDEAS TO IDENTITY · تجربة توضيحية",
    title: "اختر اسمًا. وشاهد كيف يبدأ اتجاه العلامة.",
    instruction: "اختر واحدًا من 3 أسماء افتراضية، ثم اكشف قصة الاسم ومزاجه البصري ومثالًا تطبيقيًا.",
    tabs: "أسماء تجريبية",
    selected: "الاسم المختار",
    transform: "حوّل الاسم إلى اتجاه بصري",
    change: "اختر اسمًا آخر",
    meaning: "المعنى",
    story: "قصة الاتجاه",
    palette: "لوحة الألوان المقترحة",
    sample: "مثال تطبيقي",
    illustrative: "الأسماء واللوحات والأمثلة هنا افتراضية وغير مفحوصة. الباقة تشمل توجهًا أوليًا للعلامة؛ تصميم الشعار والهوية البصرية الكاملة خدمة منفصلة.",
  },
  en: {
    eyebrow: "FROM IDEAS TO IDENTITY · ILLUSTRATIVE DEMO",
    title: "Choose a name. See a direction take shape.",
    instruction: "Pick one of three fictional names, then reveal its story, visual mood and a sample application.",
    tabs: "Sample names",
    selected: "Selected name",
    transform: "Reveal the visual direction",
    change: "Choose another name",
    meaning: "Meaning",
    story: "Direction story",
    palette: "Suggested colour palette",
    sample: "Sample application",
    illustrative: "These names, palettes and examples are fictional and have not been screened. The package includes an initial brand direction; logo and full visual identity design are separate services.",
  },
} as const;

export function NameToIdentity({ locale }: { locale: Locale }) {
  const [selected, setSelected] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const words = copy[locale];
  const concept = concepts[selected];
  const prefix = `name-to-identity-${locale}`;

  function choose(index: number, focus = false) {
    setSelected(index);
    setRevealed(false);
    if (focus) tabs.current[index]?.focus();
  }

  function onTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const forward = locale === "ar" ? "ArrowLeft" : "ArrowRight";
    const backward = locale === "ar" ? "ArrowRight" : "ArrowLeft";
    let next = index;
    if (event.key === forward) next = (index + 1) % concepts.length;
    else if (event.key === backward) next = (index - 1 + concepts.length) % concepts.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = concepts.length - 1;
    else return;
    event.preventDefault();
    choose(next, true);
  }

  return (
    <div className="name-identity" dir={locale === "ar" ? "rtl" : "ltr"}>
      <div className="name-identity-intro">
        <span className="name-identity-eyebrow">{words.eyebrow}</span>
        <h3>{words.title}</h3>
        <p>{words.instruction}</p>
      </div>
      <div className="name-identity-tabs" role="tablist" aria-label={words.tabs}>
        {concepts.map((item, index) => (
          <button
            key={item.id}
            ref={(element) => { tabs.current[index] = element; }}
            type="button"
            role="tab"
            id={`${prefix}-tab-${item.id}`}
            aria-controls={`${prefix}-panel`}
            aria-selected={selected === index}
            tabIndex={selected === index ? 0 : -1}
            onClick={() => choose(index)}
            onKeyDown={(event) => onTabKeyDown(event, index)}
          >
            <span dir="ltr">{item.name}</span>
            <small>{item.arabic}</small>
          </button>
        ))}
      </div>
      <div
        className={`name-identity-stage${revealed ? " is-revealed" : ""}`}
        role="tabpanel"
        id={`${prefix}-panel`}
        aria-labelledby={`${prefix}-tab-${concept.id}`}
        tabIndex={0}
        key={concept.id}
      >
        {!revealed ? (
          <div className="name-identity-choice">
            <span className="name-identity-stage-label">{words.selected} / 0{selected + 1}</span>
            <div className="name-identity-wordmark" dir="ltr">{concept.name}</div>
            <p>{concept.meaning[locale]}</p>
            <button type="button" className="name-identity-action" onClick={() => setRevealed(true)}>{words.transform}<span aria-hidden="true">↗</span></button>
          </div>
        ) : (
          <div className="name-identity-result" key={`${concept.id}-result`} aria-live="polite">
            <div className="name-identity-result-head">
              <div><span className="name-identity-stage-label">{words.meaning}</span><p>{concept.meaning[locale]}</p></div>
              <button type="button" className="name-identity-reset" onClick={() => setRevealed(false)}>{words.change}</button>
            </div>
            <div className="name-identity-result-grid">
              <div className="name-identity-application" style={{ "--concept-ink": concept.palette[0].hex, "--concept-accent": concept.palette[1].hex, "--concept-paper": concept.palette[2].hex } as CSSProperties}>
                <span>{words.sample} · {concept.application[locale]}</span>
                <div className="name-identity-card"><b dir="ltr">{concept.name}</b><i aria-hidden="true" /><small>{concept.line[locale]}</small></div>
              </div>
              <div className="name-identity-details">
                <div><span className="name-identity-stage-label">{words.story}</span><p>{concept.story[locale]}</p></div>
                <div><span className="name-identity-stage-label">{words.palette}</span><div className="name-identity-swatches">{concept.palette.map((colour) => <div key={colour.hex}><span style={{ backgroundColor: colour.hex }} /><small>{colour.label[locale]}<br/><b dir="ltr">{colour.hex}</b></small></div>)}</div></div>
              </div>
            </div>
          </div>
        )}
      </div>
      <p className="name-identity-disclaimer">{words.illustrative}</p>
    </div>
  );
}
