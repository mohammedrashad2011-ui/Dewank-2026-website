import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "../../lib/seo";
import { Footer, Header } from "../../components/site-shell";
import "./social-media-content.css";
import "./content-spacing-fix.css";

export const metadata: Metadata = createMetadata({
  title: "إدارة السوشيال ميديا وصناعة المحتوى | ديوانك",
  description: "خدمة إدارة السوشيال ميديا وصناعة المحتوى للشركات في السعودية والخليج: استراتيجية محتوى، أفكار، تصميم، كابشنات، خطة نشر وتقارير تطوير مستمرة.",
  path: "/services/social-media-content",
  keywords: [
    "إدارة السوشيال ميديا",
    "صناعة المحتوى للشركات",
    "إدارة حسابات التواصل الاجتماعي",
    "تصميم محتوى سوشيال ميديا",
    "خطة محتوى شهرية",
    "شركة إدارة محتوى في السعودية",
  ],
});

const deliverables = [
  ["استراتيجية المحتوى", "نحدد الرسالة، الجمهور، محاور المحتوى، النبرة والهدف التجاري قبل بدء التصميم."],
  ["الأفكار والتخطيط", "نحوّل أهدافك إلى تقويم محتوى منظم يجمع التوعية والثقة والطلب بدل النشر العشوائي."],
  ["التصميم والكابشن", "تصميمات متناسقة مع الهوية، ونصوص واضحة تقود المتابع إلى خطوة مفهومة."],
  ["النشر والتطوير", "تنظيم النشر، مراجعة النتائج، وتطوير الاتجاهات بناءً على التفاعل والاستفسارات والنتائج."],
];

const faqItems = [
  ["هل الخدمة مجرد تصميم منشورات؟", "لا. التصميم جزء من منظومة تبدأ بالاستراتيجية والأفكار، وتشمل الكابشنات وخطة النشر والتطوير المستمر."],
  ["هل يمكن البدء بباقة شهر واحد؟", "نعم. توجد باقة محتوى جاهزة لمدة 30 يومًا لمن يريد بداية سريعة بنطاق وتسليمات واضحة."],
  ["هل تشمل الخدمة إدارة الإعلانات؟", "إدارة الإعلانات خدمة مستقلة ويمكن ربطها بخطة المحتوى عندما يكون الهدف جذب العملاء وتحسين التحويل."],
  ["هل تعملون مع نشاطات مختلفة؟", "نعم. تُبنى الخطة حسب طبيعة النشاط والجمهور والسوق، وليست قالبًا واحدًا لكل المشاريع."],
];

export default function SocialMediaContentPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "إدارة السوشيال ميديا وصناعة المحتوى",
    provider: { "@type": "Organization", name: "ديوانك", url: "https://dewank.com" },
    areaServed: ["SA", "BH", "AE", "KW", "QA", "OM"],
    url: "https://dewank.com/services/social-media-content",
    description: "استراتيجية محتوى، أفكار، تصميم، كابشنات، خطة نشر وتقارير تطوير للشركات.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <main className="inner-page content-service-page">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="content-hero shell">
        <div className="content-hero-copy">
          <span className="section-label">[ إدارة السوشيال ميديا وصناعة المحتوى ]</span>
          <h1>محتوى لا يملأ الحساب.<br/><em>يبني الطلب.</em></h1>
          <p>نحوّل حسابك من منشورات متفرقة إلى منظومة محتوى واضحة: رسالة، أفكار، تصميم، كابشنات وخطة نشر تقود العميل للخطوة التالية.</p>
          <div className="content-actions">
            <Link className="button primary" href="/contact">اطلب خطة مناسبة <span>←</span></Link>
            <Link className="button secondary" href="/offers/30-day-content-package">شاهد باقة 30 يومًا</Link>
          </div>
        </div>
        <div className="content-orbit" aria-hidden="true"><i/><i/><i/><i/></div>
      </section>

      <section className="content-steps shell">
        <div className="content-section-head"><span className="section-label">[ ماذا تشمل الخدمة؟ ]</span><h2>من الفكرة إلى النشر.<br/><em>من غير فجوات.</em></h2></div>
        <div className="content-step-grid">{deliverables.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="content-system shell">
        <div><span className="section-label">[ طريقة العمل ]</span><h2>المحتوى جزء من رحلة العميل،<br/><em>وليس جزيرة منفصلة.</em></h2></div>
        <div className="content-system-card"><p>نربط ما تنشره بما تريد أن يفعله العميل بعد المشاهدة: متابعة، حفظ، استفسار، زيارة موقع أو طلب خدمة. لذلك تبدأ الخطة من الهدف التجاري، لا من عدد المنشورات.</p><Link href="/digital-marketing">اكتشف استراتيجية التسويق الرقمي <span>←</span></Link></div>
      </section>

      <section className="content-offer shell">
        <div><span className="section-label">[ بداية جاهزة ]</span><h2>تحتاج شهرًا كاملًا<br/><em>بنطاق واضح؟</em></h2></div>
        <div className="content-offer-card"><strong>باقة محتوى 30 يومًا</strong><p>خيار جاهز لمن يريد بدء التنفيذ سريعًا بسعر وتسليمات محددة، من دون أن تختصر الخدمة الكاملة في عرض واحد.</p><Link className="button primary" href="/offers/30-day-content-package">اكتشف العرض <span>←</span></Link></div>
      </section>

      <section className="content-faq shell">
        <span className="section-label">[ أسئلة شائعة ]</span><h2>قبل أن تبدأ.</h2>
        <div>{faqItems.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="content-final shell"><h2>دع المحتوى يعمل<br/><em>داخل خطة واضحة.</em></h2><Link className="button primary" href="/contact">ناقش مشروعك <span>←</span></Link></section>
      <Footer />
    </main>
  );
}
