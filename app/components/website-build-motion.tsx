import "./website-build-motion.css";

/** A cinematic, CSS-only blueprint-to-launch sequence with a complete static reduced-motion state. */
export function WebsiteBuildMotion({ locale }: { locale: "ar" | "en" }) {
  const ar = locale === "ar";
  return (
    <div className="wd-cinema" dir={ar ? "rtl" : "ltr"}>
      <div className="wd-cinema-heading">
        <div><span className="wd-cinema-eyebrow">{ar ? "من التصور إلى الإطلاق" : "FROM CONCEPT TO LAUNCH"}</span><strong>{ar ? "شاهد الموقع وهو يتحول." : "Watch an idea become a website."}</strong></div>
        <span className="wd-cinema-live"><i /> {ar ? "معاينة التصميم" : "DESIGN IN MOTION"}</span>
      </div>
      <div className="wd-cinema-stage" role="img" aria-label={ar ? "موشن يوضح تحول مخطط هيكلي مرسوم إلى موقع ويب أنيق ومكتمل وجاهز للإطلاق" : "A cinematic transition from website blueprint to a polished, launch-ready website"}>
        <div className="wd-cinema-halo" aria-hidden="true" />
        <div className="wd-cinema-grid" aria-hidden="true" />
        <div className="wd-cinema-browser">
          <div className="wd-cinema-top"><div className="wd-cinema-dots"><i /><i /><i /></div><span>studio.preview</span><span className="wd-cinema-top-action">↗</span></div>
          <div className="wd-cinema-canvas">
            <div className="wd-cinema-blueprint" aria-hidden="true">
              <div className="wd-cinema-wire-nav"><i /><i /><i /><i /></div>
              <div className="wd-cinema-wire-body"><div><i /><i /><i /><i /><i /></div><div className="wd-cinema-wire-image"><span /><span /></div></div>
              <div className="wd-cinema-wire-cards"><i /><i /><i /></div>
              <span className="wd-cinema-measure wd-cinema-measure-a">GRID / 12 COL</span><span className="wd-cinema-measure wd-cinema-measure-b">UX → UI</span>
            </div>
            <div className="wd-cinema-reveal" aria-hidden="true">
              <div className="wd-cinema-site-nav"><span className="wd-cinema-monogram"><img src="/dewank-mark.svg" alt="Dewank" width="28" height="28" /></span><div><b>{ar ? "الرئيسية" : "Home"}</b><b>{ar ? "خدماتنا" : "Services"}</b><b>{ar ? "أعمالنا" : "Work"}</b></div><span className="wd-cinema-pill">{ar ? "ابدأ مشروعك" : "Let's talk"} ↗</span></div>
              <div className="wd-cinema-site-main"><div className="wd-cinema-site-copy"><span className="wd-cinema-kicker">CREATIVE DIGITAL STUDIO</span><h3>{ar ? <>حضور يلفت<br /><em>وتجربة تقنع</em></> : <>Designed to stand out<br /><em>Built to convert</em></>}</h3><p>{ar ? "تصميم مدروس، رسالة واضحة، وتجربة تأخذ زائرك للخطوة التالية." : "Thoughtful design. A sharper message. A journey built for action."}</p><span className="wd-cinema-site-cta">{ar ? "اكتشف التجربة" : "Explore the experience"} <span>↗</span></span></div><div className="wd-cinema-art"><div className="wd-cinema-art-orbit" /><div className="wd-cinema-art-core" /><div className="wd-cinema-art-shine" /><span className="wd-cinema-art-tag">MADE TO MATTER <b>✦</b></span></div></div>
              <div className="wd-cinema-site-footer"><span>STRATEGY</span><span>DESIGN</span><span>EXPERIENCE</span></div>
            </div>
            <div className="wd-cinema-scan" aria-hidden="true" />
          </div>
        </div>
        <div className="wd-cinema-cursor" aria-hidden="true"><span>↖</span><small>{ar ? "نُصمّم" : "Designing"}</small></div>
        <div className="wd-cinema-toast" aria-hidden="true"><i>✓</i><span>{ar ? "التجربة أصبحت جاهزة" : "Ready for launch"}</span></div>
        <span className="wd-cinema-index wd-cinema-index-a">01 / WIREFRAME</span><span className="wd-cinema-index wd-cinema-index-b">02 / EXPERIENCE</span>
      </div>
      <div className="wd-cinema-timeline"><span>{ar ? "هيكل مدروس" : "STRUCTURE"}</span><div><i /></div><span>{ar ? "تصميم وإطلاق" : "DESIGN & LAUNCH"}</span></div>
    </div>
  );
}
