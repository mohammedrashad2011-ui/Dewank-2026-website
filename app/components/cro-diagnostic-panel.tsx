type CroDiagnosticPanelProps = { locale: "ar" | "en" };

const content = {
  ar: {
    label: "FROM FRICTION TO CLARITY",
    title: "من الاحتكاك إلى الوضوح",
    sample: "صفحة توضيحية خيالية",
    before: "قبل التشخيص",
    after: "بعد التحسين",
    oldHeading: "حلول لأعمالك",
    newHeading: "استشارة أعمال بخطوة تالية واضحة",
    oldButton: "المزيد",
    newButton: "احجز استشارة",
    detail: "ما الذي ستحصل عليه؟",
    process: "كيف نعمل؟",
    findings: "محاور التشخيص",
    issues: ["دعوة غير محددة", "إشارات الثقة غائبة", "ترتيب المحتوى مشتّت"],
    resolved: "رسالة أوضح · ثقة ظاهرة · خطوة واحدة",
  },
  en: {
    label: "FROM FRICTION TO CLARITY",
    title: "From friction to clarity",
    sample: "Fictional sample page",
    before: "Before diagnosis",
    after: "After refinement",
    oldHeading: "Solutions for your business",
    newHeading: "Business advice with a clear next step",
    oldButton: "Learn more",
    newButton: "Book a consultation",
    detail: "What is included?",
    process: "How does it work?",
    findings: "Diagnostic focus",
    issues: ["Vague call to action", "Missing trust signals", "Unclear content hierarchy"],
    resolved: "Clearer message · visible trust · one next step",
  },
} as const;

export function CroDiagnosticPanel({ locale }: CroDiagnosticPanelProps) {
  const copy = content[locale];

  return (
    <div className="cro-diagnostic">
      <div className="cro-diagnostic-heading">
        <span>{copy.label}</span>
        <strong>{copy.title}</strong>
      </div>
      <div className="cro-diagnostic-stage" aria-hidden="true">
        <div className="cro-diagnostic-browser">
          <div className="cro-diagnostic-browserbar"><i /><i /><i /><span>{copy.sample}</span></div>
          <div className="cro-diagnostic-landing">
            <div className="cro-diagnostic-page-top"><span className="cro-diagnostic-mark" /><span className="cro-diagnostic-nav" /><span className="cro-diagnostic-nav short" /></div>
            <div className="cro-diagnostic-page-body">
              <span className="cro-diagnostic-eyebrow" />
              <div className="cro-diagnostic-copy">
                <b className="cro-diagnostic-before">{copy.oldHeading}</b>
                <b className="cro-diagnostic-after">{copy.newHeading}</b>
              </div>
              <div className="cro-diagnostic-lines"><span /><span /></div>
              <div className="cro-diagnostic-button"><span className="cro-diagnostic-before">{copy.oldButton}</span><span className="cro-diagnostic-after">{copy.newButton}</span></div>
              <div className="cro-diagnostic-proof"><span>{copy.detail}</span><span>{copy.process}</span></div>
            </div>
          </div>
        </div>
        <div className="cro-diagnostic-status"><span className="cro-diagnostic-before">{copy.before}</span><span className="cro-diagnostic-after">{copy.after}</span></div>
      </div>
      <div className="cro-diagnostic-findings" aria-hidden="true">
        <span className="cro-diagnostic-findings-label">{copy.findings}</span>
        <ol>{copy.issues.map((issue, index) => <li key={issue}><span>0{index + 1}</span>{issue}</li>)}</ol>
        <p>{copy.resolved}</p>
      </div>
      <p className="sr-only">{copy.sample}. {copy.issues.join("، ")}. {copy.resolved}.</p>
    </div>
  );
}
