import "./website-build-motion.css";

/** Decorative, accessible, CSS-only sequence. No JS or video requests. */
export function WebsiteBuildMotion({ locale }: { locale: "ar" | "en" }) {
  const ar = locale === "ar";
  return (
    <div className="wd-build-motion" dir={ar ? "rtl" : "ltr"} role="img" aria-label={ar ? "عرض توضيحي متحرك ينتقل من هيكل الصفحة إلى موقع متكامل يحتوي على محتوى واضح وعناصر ثقة ودعوة لاتخاذ إجراء" : "Animated illustration of a wireframe becoming a complete website with content, trust signals and a call to action"}>
      <div className="wd-build-caption">
        <span className="wd-build-pulse" aria-hidden="true" />
        <span>{ar ? "من الفكرة إلى تجربة مكتملة" : "From wireframe to working experience"}</span>
      </div>
      <div className="wd-build-browser" aria-hidden="true">
        <div className="wd-build-toolbar"><span className="wd-build-dots"><i /><i /><i /></span><span className="wd-build-url">yourbrand.com</span><span className="wd-build-status">{ar ? "تجربة حية" : "LIVE PREVIEW"}</span></div>
        <div className="wd-build-page">
          <div className="wd-build-navigation"><span className="wd-build-mark">D.</span><span className="wd-build-nav-lines"><i /><i /><i /></span><span className="wd-build-nav-cta" /></div>
          <div className="wd-build-columns">
            <div className="wd-build-copy">
              <span className="wd-build-eyebrow">{ar ? "صُمم لهدف واضح" : "BUILT WITH PURPOSE"}</span>
              <div className="wd-build-title"><span>{ar ? "موقع واضح." : "Clear message."}</span><span>{ar ? "قرار أسهل." : "Better decisions."}</span></div>
              <div className="wd-build-skeleton"><i /><i /><i /></div>
              <div className="wd-build-cta">{ar ? "ابدأ رحلتك" : "Explore the experience"} <span aria-hidden="true">↗</span></div>
            </div>
            <div className="wd-build-preview"><div className="wd-build-preview-glow" /><div className="wd-build-photo-shape"><span /></div><div className="wd-build-floating-card"><i /><span><b /><b /></span></div></div>
          </div>
          <div className="wd-build-proof"><span>{ar ? "وضوح" : "Clarity"}</span><span>{ar ? "ثقة" : "Trust"}</span><span>{ar ? "تحويل" : "Conversion"}</span></div>
        </div>
      </div>
      <div className="wd-build-footnote"><span>{ar ? "التخطيط" : "Structure"}</span><span className="wd-build-progress"><i /></span><span>{ar ? "التجربة المكتملة" : "Finished experience"}</span></div>
    </div>
  );
}
