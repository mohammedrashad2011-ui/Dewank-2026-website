import "./landing-conversion-motion.css";

export function LandingConversionMotion({locale}:{locale:"ar"|"en"}) {
 const ar=locale==="ar";
 return <section className="lc-section shell" dir={ar?"rtl":"ltr"} aria-labelledby="lc-title">
  <div className="lc-heading"><div><span className="lc-eyebrow">{ar?"من الزيارة إلى الطلب":"FROM CLICK TO ENQUIRY"}</span><h2 id="lc-title">{ar?<>مش مجرد صفحة جميلة<br/><em>صفحة تقود للخطوة التالية</em></>:<>Not just a beautiful page<br/><em>A clearer path to action</em></>}</h2></div><p>{ar?"شاهد رحلة توضيحية: من إعلان يجذب الزائر، لرسالة توضح القيمة، ثم خطوة تواصل سهلة.":"Watch an illustrative journey: an ad brings a visitor, a clear offer builds confidence, and a simple next step captures an enquiry."}</p></div>
  <div className="lc-stage" role="img" aria-label={ar?"رسم متحرك توضيحي يربط نقرة الإعلان بصفحة الهبوط ثم إرسال طلب تواصل":"Illustrated animation showing an ad click, a landing page, and an enquiry"}>
   <div className="lc-flow lc-flow-a"><span className="lc-chip">{ar?"إعلان الحملة":"CAMPAIGN AD"}</span><div className="lc-ad"><small>{ar?"خدمة تناسب احتياجك":"A service worth exploring"}</small><b>{ar?"حل واضح لنشاطك":"A clearer way forward"}</b><span>{ar?"اعرف التفاصيل ←":"Explore the offer →"}</span></div></div>
   <div className="lc-connector"><span>↗</span><i/></div>
   <div className="lc-browser"><div className="lc-browser-top"><span className="lc-browser-dots">● ● ●</span><span>yourbusiness.com</span></div><div className="lc-browser-body"><div className="lc-browser-nav"><b>{ar?"نشاطك":"YOUR BRAND"}</b><span>{ar?"التواصل":"Contact"}</span></div><div className="lc-browser-hero"><div><small>{ar?"حل مناسب. بدون تشتيت":"ONE OFFER. ONE CLEAR NEXT STEP"}</small><h3>{ar?<>خدمتك<br/><em>تستحق صفحة تقنع</em></>:<>Your offer<br/><em>made crystal clear</em></>}</h3><p>{ar?"رسالة مركزة، أسباب للثقة، وطريقة سهلة للتواصل":"Focused messaging, reasons to trust, and an easy way to reach you"}</p><span className="lc-hero-button">{ar?"اطلب التفاصيل":"Request details"} ↗</span></div><div className="lc-hero-art"><span/><i/></div></div><div className="lc-trust"><span>✓ {ar?"رسالة واضحة":"Clear offer"}</span><span>✓ {ar?"ثقة":"Trust"}</span><span>✓ {ar?"إجراء سهل":"Easy action"}</span></div></div></div>
   <div className="lc-spark">✦</div>
   <div className="lc-lead"><span className="lc-success">✓</span><div><small>{ar?"طلب جديد":"NEW ENQUIRY"}</small><strong>{ar?"عميل طلب التواصل":"A visitor reached out"}</strong><p>{ar?"جاهز للمتابعة":"Ready for follow-up"}</p></div></div>
  </div>
  <div className="lc-footer"><span>{ar?"نقرة":"CLICK"}</span><i/><span>{ar?"رسالة واضحة":"CLEAR OFFER"}</span><i/><span>{ar?"طلب تواصل":"ENQUIRY"}</span></div>
  <p className="lc-note">{ar?"المشهد توضيحي لرحلة المستخدم ولا يمثل نتائج أو طلبات فعلية.":"Illustrative user journey, not actual campaign or lead results."}</p>
 </section>;
}
