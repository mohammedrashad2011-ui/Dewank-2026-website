import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "../../lib/seo";
import { Footer, Header } from "../../components/site-shell";
import "./social-media-content.css";
import "./content-spacing-fix.css";
import "./content-guides.css";

export const metadata: Metadata = createMetadata({
  title: "إدارة السوشيال ميديا وصناعة المحتوى في السعودية | ديوانك",
  description: "خدمة إدارة السوشيال ميديا وصناعة المحتوى للشركات في السعودية والخليج: استراتيجية، أفكار، تصميم، كابشنات، خطة نشر وتقارير، مع خيار باقة محتوى 30 يومًا للبداية.",
  path: "/services/social-media-content",
  keywords: [
    "إدارة السوشيال ميديا في السعودية",
    "إدارة حسابات التواصل الاجتماعي",
    "أسعار إدارة السوشيال ميديا",
    "باقات إدارة السوشيال ميديا",
    "صناعة المحتوى للشركات",
    "تصميم محتوى سوشيال ميديا",
    "إدارة محتوى انستقرام",
    "شركة إدارة حسابات التواصل الاجتماعي",
    "خطة محتوى شهرية",
  ],
});

const deliverables = [
  ["استراتيجية المحتوى", "نحدد الرسالة، الجمهور، محاور المحتوى، النبرة والهدف التجاري قبل بدء التصميم."],
  ["الأفكار والتخطيط", "نحوّل أهدافك إلى تقويم محتوى منظم يجمع التوعية والثقة والطلب بدل النشر العشوائي."],
  ["التصميم والكابشن", "تصميمات متناسقة مع الهوية، ونصوص واضحة تقود المتابع إلى خطوة مفهومة."],
  ["النشر والتطوير", "تنظيم النشر، مراجعة النتائج، وتطوير الاتجاهات بناءً على التفاعل والاستفسارات والنتائج."],
];

const guideLinks = [
  { href: "/guides/social-media-management-cost-saudi-arabia", title: "كم تكلفة إدارة السوشيال ميديا في السعودية؟", text: "افهم نطاقات الأسعار والفرق بين الإدارة الشهرية وباقة المحتوى المحددة." },
  { href: "/guides/social-media-not-generating-leads", title: "حسابك جميل لكنه لا يجلب عملاء: أين المشكلة؟", text: "اعرف هل الخلل في الرسالة أو العرض أو الثقة أو الـCTA قبل زيادة عدد المنشورات." },
  { href: "/guides/digital-marketing-cost-saudi-arabia", title: "أسعار التسويق الرقمي في السعودية: ماذا تشمل؟", text: "افصل بين إدارة المحتوى والحملات والإنفاق الإعلاني والإنتاج قبل تحديد ميزانيتك." },
];

const faqItems = [
  ["كم تكلفة إدارة السوشيال ميديا في السعودية؟", "تختلف حسب عدد المنصات ونوع المحتوى والفيديو والتصوير والنشر وإدارة المجتمع. إذا كان احتياجك إنتاج محتوى فقط، فباقة 30 يومًا قد تكون نقطة دخول أبسط من الإدارة الشهرية الكاملة."],
  ["هل الخدمة مجرد تصميم منشورات؟", "لا. التصميم جزء من منظومة تبدأ بالاستراتيجية والأفكار، وتشمل الكابشنات وخطة النشر والتطوير المستمر."],
  ["هل يمكن البدء بباقة شهر واحد؟", "نعم. توجد باقة محتوى جاهزة لمدة 30 يومًا لمن يريد بداية سريعة بنطاق وتسليمات واضحة من دون عقد إدارة شهري طويل."],
  ["ما الفرق بين إدارة الحساب وباقة 30 يومًا؟", "الإدارة الشهرية قد تشمل النشر المستمر والمتابعة والتقارير وإدارة المجتمع حسب النطاق، بينما باقة 30 يومًا تركّز على إنتاج المحتوى والأفكار والكابشنات وخطة النشر بنطاق محدد."],
  ["هل تشمل الخدمة إدارة الإعلانات؟", "إدارة الإعلانات خدمة مستقلة ويمكن ربطها بخطة المحتوى عندما يكون الهدف جذب العملاء وتحسين التحويل."],
];

export default function SocialMediaContentPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "إدارة السوشيال ميديا وصناعة المحتوى",
    provider: { "@type": "Organization", name: "ديوانك", url: "https://dewank.com" },
    areaServed: ["SA", "BH", "AE", "KW", "QA", "OM"],
    url: "https://dewank.com/services/social-media-content",
    description: "إدارة حسابات التواصل وصناعة المحتوى للشركات: استراتيجية، أفكار، تصميم، كابشنات، خطة نشر وتقارير تطوير.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
  };

  return (
    <main className="inner-page content-service-page">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="content-hero shell">
        <div className="content-hero-copy">
          <span className="section-label">[ إدارة السوشيال ميديا وصناعة المحتوى ]</span>
          <h1>إدارة سوشيال ميديا<br/><em>تبني حضورًا وطلبًا.</em></h1>
          <p>نحوّل حسابك من منشورات متفرقة إلى منظومة محتوى واضحة: رسالة، أفكار، تصميم، كابشنات وخطة نشر تخدم هدفًا تجاريًا، لا مجرد ملء التقويم.</p>
          <div className="content-actions">
            <Link className="button primary" href="/contact">اطلب نطاق الإدارة <span>←</span></Link>
            <Link className="button secondary" href="/offers/30-day-content-package">شاهد باقة 30 يومًا</Link>
          </div>
        </div>
        <div className="content-orbit" aria-hidden="true"><i/><i/><i/><i/></div>
      </section>

      <section className="content-steps shell">
        <div className="content-section-head"><span className="section-label">[ ماذا تشمل الخدمة؟ ]</span><h2>من الاستراتيجية إلى النشر.<br/><em>كل خطوة لها وظيفة.</em></h2></div>
        <div className="content-step-grid">{deliverables.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="content-system shell">
        <div><span className="section-label">[ طريقة العمل ]</span><h2>المحتوى جزء من رحلة العميل،<br/><em>وليس جزيرة منفصلة.</em></h2></div>
        <div className="content-system-card"><p>نربط ما تنشره بما تريد أن يفعله العميل بعد المشاهدة: متابعة، حفظ، استفسار، زيارة موقع أو طلب خدمة. لذلك تبدأ الخطة من الهدف التجاري، لا من عدد المنشورات.</p><Link href="/digital-marketing">اكتشف استراتيجية التسويق الرقمي <span>←</span></Link></div>
      </section>

      <section className="content-offer shell">
        <div><span className="section-label">[ إدارة شهرية أم بداية محددة؟ ]</span><h2>اختر النطاق على حسب احتياجك.<br/><em>مو على عدد البوستات فقط.</em></h2></div>
        <div className="content-offer-card"><strong>باقة محتوى 30 يومًا</strong><p>إذا كان احتياجك الأساسي أفكارًا وتصميمًا وكابشنات وخطة نشر، ابدأ بالباقة المحددة. إذا كنت تحتاج نشرًا مستمرًا ومتابعة وتقارير وإدارة أوسع، نحدد لك نطاق الإدارة الشهرية.</p><Link className="button primary" href="/offers/30-day-content-package">شاهد باقة 30 يومًا <span>←</span></Link><br/><Link href="/guides/social-media-management-cost-saudi-arabia">قارن الأسعار والنطاقات</Link></div>
      </section>

      <section className="content-guides shell" aria-labelledby="content-guides-title">
        <div className="content-guides-head">
          <div><span className="section-label">[ أدلة قبل القرار ]</span><h2 id="content-guides-title">ابدأ بالسؤال اللي عندك.<br/><em>ثم اختر نطاق المحتوى المناسب.</em></h2></div>
          <p>إذا بحثك يبدأ من السعر، أو من مشكلة ضعف العملاء، أو من ميزانية التسويق كاملة، هذه الأدلة تنقلك للصفحة المناسبة بدل خلط النوايا في عرض واحد.</p>
        </div>
        <div className="content-guides-grid">{guideLinks.map((guide, index) => <Link className="content-guide-card" href={guide.href} key={guide.href}><div className="content-guide-top"><span>دليل 0{index + 1}</span><span className="content-guide-arrow" aria-hidden="true">↗</span></div><h3>{guide.title}</h3><p>{guide.text}</p></Link>)}</div>
      </section>

      <section className="content-faq shell">
        <span className="section-label">[ أسئلة شائعة ]</span><h2>قبل أن تختار الباقة.</h2>
        <div>{faqItems.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="content-final shell"><h2>خلّ المحتوى يعمل<br/><em>داخل خطة واضحة.</em></h2><Link className="button primary" href="/contact">ناقش احتياجك <span>←</span></Link></section>
      <Footer />
    </main>
  );
}
