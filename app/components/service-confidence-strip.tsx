import Link from "next/link";

type Locale = "ar" | "en";
type Service = "ads" | "website";

// Every linked example already exists in the portfolio. Neither is presented as
// proof of an unrelated service or as a guaranteed performance result.
const content = {
  ar: {
    ads: {
      aria: "دليل عملي وما يحدث بعد التواصل",
      proofLabel: "مثال من أعمالنا",
      proofTitle: "من الاستفسار إلى المتابعة",
      proofText: "حالة تشغيل فعلية لعيادة في البحرين: تنظيم استفسارات واتساب والحجز والمتابعة داخل CRM. المثال يخص متابعة العملاء بعد الاستفسار، وليس نتائج حملات Google Ads.",
      proofLink: "شاهد دراسة الحالة",
      proofHref: "/work#case-studies",
      nextLabel: "بعد التواصل",
      nextTitle: "نحدد المطلوب قبل عرض الخدمة",
      nextText: "شارك نشاطك وهدفك ووضع الحملات الحالي. نحدد هل الأنسب إطلاق حملة واحدة، إدارة مستمرة، أو معالجة الصفحة والتتبع أولًا، ثم نوضح النطاق."
    },
    website: {
      aria: "طريقة تنفيذ المواقع وما يحدث بعد التواصل",
      proofLabel: "كيف ننفذ مشاريع المواقع",
      proofTitle: "من تحديد الهدف إلى إطلاق الموقع",
      proofText: "نبدأ بفهم الهدف ونطاق المشروع، ثم تصميم التجربة وتطويرها واختبارها قبل التسليم. هذه خطوات عملنا، وليست ادعاءً بنتائج مشروع عميل.",
      proofLink: "شاهد مراحل التنفيذ",
      proofHref: "#process",
      nextLabel: "بعد التواصل",
      nextTitle: "نختار نطاقًا يناسب مشروعك",
      nextText: "شارك رابط موقعك الحالي أو فكرة مشروعك. نحدد هل يكفي Landing Page أو موقع شركة أو مشروع مخصص، ونوضح ما يدخل في نطاق العمل."
    }
  },
  en: {
    ads: {
      aria: "Relevant work and what happens after contact",
      proofLabel: "Relevant operational example",
      proofTitle: "From enquiry to follow-up",
      proofText: "A real Bahrain clinic case organising WhatsApp enquiries, booking and CRM follow-up. It demonstrates the lead-handling stage, not Google Ads campaign performance.",
      proofLink: "View the case study",
      proofHref: "/en/work#case-studies",
      nextLabel: "What happens next",
      nextTitle: "Scope before commitment",
      nextText: "Share your business, goal and current campaign situation. We identify whether you need a single launch, ongoing management or a landing-page and tracking fix, then clarify the scope."
    },
    website: {
      aria: "Website delivery process and what happens after contact",
      proofLabel: "How we deliver websites",
      proofTitle: "From business goal to website launch",
      proofText: "We define the business goal and scope, design the experience, build and test it before handover. This explains our process, not an unverified client outcome.",
      proofLink: "See the delivery process",
      proofHref: "#process",
      nextLabel: "What happens next",
      nextTitle: "The right scope for your site",
      nextText: "Share your current website or project idea. We work out whether a landing page, company website or custom build fits, then clarify what the project includes."
    }
  }
} as const;

export default function ServiceConfidenceStrip({ locale, service }: { locale: Locale; service: Service }) {
  const copy = content[locale][service];

  return (
    <aside className="service-confidence-strip shell" aria-label={copy.aria} dir={locale === "ar" ? "rtl" : "ltr"}>
      <div className="service-confidence-proof">
        <small>{copy.proofLabel}</small>
        <h3>{copy.proofTitle}</h3>
        <p>{copy.proofText}</p>
        <Link href={copy.proofHref}>{copy.proofLink} <span aria-hidden="true">↗</span></Link>
      </div>
      <div className="service-confidence-next">
        <small>{copy.nextLabel}</small>
        <h3>{copy.nextTitle}</h3>
        <p>{copy.nextText}</p>
      </div>
    </aside>
  );
}
