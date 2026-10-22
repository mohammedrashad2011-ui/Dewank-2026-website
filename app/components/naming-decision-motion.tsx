import "./naming-decision-motion.css";

type NamingDecisionMotionProps = { locale: "ar" | "en" };

export default function NamingDecisionMotion({ locale }: NamingDecisionMotionProps) {
  const ar = locale === "ar";
  const names = ar ? ["مدى", "أفق", "نواة", "سنا", "مدار", "أثر"] : ["NOVA", "LUMA", "VERA", "NEXA", "AVEN", "MIRA"];
  return (
    <section className="naming-motion-section" aria-label={ar ? "تصور بصري لمراحل اختيار اسم العلامة" : "Visual illustration of the naming selection process"} dir={ar ? "rtl" : "ltr"}>
      <div className="shell naming-motion-layout">
        <div className="naming-motion-copy">
          <span className="section-label">{ar ? "من الخيارات إلى القرار" : "FROM OPTIONS TO DECISION"}</span>
          <h2>{ar ? "مش كل اسم ينفع" : "Not every name fits."}<em>{ar ? "نختار الاسم لسبب" : "The right one earns its place."}</em></h2>
          <p>{ar ? "نبدأ باتجاهات متنوعة، ونختبر المعنى والنطق والتميّز وإمكانية الاستخدام، ثم نضيّق الخيارات نحو قرار يمكن الدفاع عنه." : "We explore different directions, check meaning, pronunciation and distinctiveness, then narrow the shortlist toward a defensible decision."}</p>
          <small>{ar ? "عرض توضيحي لعملية الاختيار، وليس نتيجة بحث أو فحص قانوني." : "Illustrative process only, not a trademark or legal clearance."}</small>
        </div>
        <div className="naming-motion-stage" role="img" aria-label={ar ? "ستة أسماء تجريبية يتم تصفيتها إلى اختيار واحد توضيحي" : "Six illustrative name ideas narrow toward one sample selection"}>
          <div className="naming-motion-stage-top"><span>DEWANK / NAMING</span><span>{ar ? "اختيار مدروس" : "THOUGHTFUL SELECTION"}</span></div>
          <div className="naming-motion-candidates" aria-hidden="true">
            {names.map((name, i) => <span className={"naming-motion-candidate naming-motion-candidate-" + i} key={name}>{name}</span>)}
          </div>
          <div className="naming-motion-divider" aria-hidden="true"><span/><b>{ar ? "بحث · فحص · قرار" : "RESEARCH · FILTER · DECIDE"}</b><span/></div>
          <div className="naming-motion-winner" aria-hidden="true"><span className="naming-motion-winner-kicker">{ar ? "اتجاه أوضح" : "A CLEARER DIRECTION"}</span><strong>{ar ? "مـدار" : "MIRA"}</strong><span className="naming-motion-winner-rule"/></div>
          <span className="naming-motion-stage-footer">STRATEGY BEFORE STYLE</span>
        </div>
      </div>
    </section>
  );
}
