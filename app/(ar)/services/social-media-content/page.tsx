import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, servedMarkets, serviceId, organizationId } from "../../../lib/seo";
import { Footer, Header } from "../../../components/site-shell";
import { InlineOfferPrice } from "../../offers/inline-offer-price";
import { SocialPaths, SocialProblems, SocialSamples, SocialSectors, socialExtraFaqs } from "./social-extras";
import "./social-media-content.css";
import "./content-spacing-fix.css";
import "./content-guides.css";
import "./social-extras.css";

export const metadata: Metadata = createMetadata({
  title: "إدارة حسابات السوشيال ميديا وصناعة المحتوى في السعودية | ديوانك",
  description: "إدارة حسابات السوشيال ميديا والتواصل الاجتماعي للشركات في السعودية والخليج: استراتيجية، تصميم، كابشنات، نشر وتقارير. ابدأ بباقة محتوى 30 يومًا أو إدارة شهرية.",
  path: "/services/social-media-content",
  keywords: [
    "إدارة السوشيال ميديا في السعودية",
    "إدارة حسابات التواصل الاجتماعي",
    "أسعار إدارة السوشيال ميديا",
    "باقات إدارة السوشيال ميديا",
    "صناعة المحتوى للشركات",
    "تصميم محتوى سوشيال ميديا",
    "إدارة محتوى انستقرام",
    "إدارة حسابات السوشيال ميديا",
    "إدارة محتوى السوشيال ميديا",
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


const scopeItems = [
  ["المنصات والنطاق", "نحدد المنصات التي تخدم هدفك فعلًا بدل إدارة كل منصة. ويُحدَّد عددها في عرض النطاق حسب النشاط والجمهور."],
  ["حجم المحتوى والنشر", "لا نعتمد رقمًا ثابتًا لكل الأنشطة. نحدد عدد المنشورات والستوري والفيديو الذي يمكن الاستمرار فيه بجودة ثابتة."],
  ["الكتابة والتصميم والفيديو", "نوضح من يكتب ومن يصمم ومن ينشر، وعدد جولات المراجعة، ومتى يحتاج الفيديو إلى مواد منك."],
  ["ما يُسعَّر منفصلًا", "التصوير الاحترافي وميزانية الإعلانات المدفوعة وإدارة الحملات بنود مستقلة، وتُحدَّد بوضوح قبل البدء."],
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
  ["كم منشورًا أحتاج شهريًا؟", "لا يوجد عدد يناسب كل نشاط. نحدد العدد حسب هدفك والمنصة وقدرتك على توفير المواد والاستمرار بجودة ثابتة، ثم نعدّله بعد مراجعة النتائج."],
  ["هل إدارة السوشيال ميديا تجلب مبيعات؟", "قد تدعم المبيعات لكنها لا تضمنها. النتيجة تعتمد على وضوح العرض والثقة وسرعة الرد وسهولة الطلب، لذلك نقيس الاستفسارات والعملاء المؤهلين لا الإعجابات وحدها."],
  ["لدي حساب قائم فقط يحتاج ترتيبًا، فهل أحتاج إدارة؟", "ليس بالضرورة. إذا كان الحساب موجودًا ويحتاج بايو ودعوة إجراء وهايلايتس واتجاهًا بصريًا، فباقة تطوير الحساب خلال 14 يومًا أنسب من الإدارة الشهرية."],
];

const allFaqs = [...faqItems, ...socialExtraFaqs.ar];

const whatsappHref = "https://wa.me/97339066649?text=" + encodeURIComponent("مرحبًا ديوانك، أرغب في بدء إدارة حسابات السوشيال ميديا لنشاطي. نشاطي ورابط الحساب: ");

export default function SocialMediaContentPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": serviceId("/services/social-media-content"),
    name: "إدارة السوشيال ميديا وصناعة المحتوى",
    provider: { "@id": organizationId },
    areaServed: servedMarkets,
    url: "https://dewank.com/services/social-media-content",
    description: "إدارة حسابات التواصل وصناعة المحتوى للشركات: استراتيجية، أفكار، تصميم، كابشنات، خطة نشر وتقارير تطوير.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://dewank.com" },
      { "@type": "ListItem", position: 2, name: "الخدمات", item: "https://dewank.com/services" },
      { "@type": "ListItem", position: 3, name: "إدارة السوشيال ميديا", item: "https://dewank.com/services/social-media-content" },
    ],
  };

  return (
    <main className="inner-page content-service-page">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="content-hero shell">
        <div className="content-hero-copy">
          <span className="section-label">إدارة السوشيال ميديا وصناعة المحتوى</span>
          <h1>إدارة حسابات السوشيال ميديا<br/><em>تبني حضورًا وطلبًا</em></h1>
          <p>نحوّل حسابك من منشورات متفرقة إلى منظومة محتوى واضحة: رسالة، أفكار، تصميم، كابشنات وخطة نشر تخدم هدفًا تجاريًا، لا مجرد ملء التقويم.</p>
          <div className="content-actions">
            <a className="button primary offer-consultation-cta" href={whatsappHref} target="_blank" rel="noopener noreferrer">ابدأ إدارة حسابك <span>←</span></a>
            <Link className="button secondary" href="/offers/30-day-content-package"><span>باقة 30 يومًا · <InlineOfferPrice offerKey="30-day-content-package" /></span></Link>
          </div>
          <p className="sm-microcopy">بدون أي التزام. أرسل نشاطك ورابط حسابك، ونكتب لك النطاق والسعر قبل الدفع.</p>
        </div>
        <div className="content-orbit" aria-hidden="true"><i/><i/><i/><i/></div>
      </section>

      <SocialSamples locale="ar" />

      <SocialPaths locale="ar" cta={<a className="button primary offer-consultation-cta" href={whatsappHref} target="_blank" rel="noopener noreferrer">ابدأ إدارة حسابك <span>←</span></a>} />

      <section className="content-steps shell">
        <div className="content-section-head"><span className="section-label">ماذا تشمل الخدمة؟</span><h2>من الاستراتيجية إلى النشر<br/><em>كل خطوة لها وظيفة</em></h2></div>
        <div className="content-step-grid">{deliverables.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        <SocialProblems locale="ar" />
      </section>

      <section className="content-steps content-scope shell" aria-labelledby="content-scope-title">
        <div className="content-section-head"><span className="section-label">قبل التعاقد</span><h2 id="content-scope-title">نطاق واضح مكتوب<br/><em>قبل أن تدفع أي شيء</em></h2></div>
        <div className="content-step-grid">{scopeItems.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="content-system shell">
        <div><span className="section-label">طريقة العمل</span><h2>المحتوى جزء من رحلة العميل،<br/><em>وليس جزيرة منفصلة</em></h2></div>
        <div className="content-system-card"><p>نربط ما تنشره بما تريد أن يفعله العميل بعد المشاهدة: متابعة، حفظ، استفسار، زيارة موقع أو طلب خدمة. لذلك تبدأ الخطة من الهدف التجاري، لا من عدد المنشورات.</p><Link href="/digital-marketing">اكتشف استراتيجية التسويق الرقمي <span>←</span></Link></div>
      </section>

      <section className="content-guides shell" aria-labelledby="content-guides-title">
        <div className="content-guides-head">
          <div><span className="section-label">أدلة قبل القرار</span><h2 id="content-guides-title">ابدأ بالسؤال الذي يواجهك<br/><em>ثم اختر نطاق المحتوى المناسب</em></h2></div>
          <p>إذا بحثك يبدأ من السعر، أو من مشكلة ضعف العملاء، أو من ميزانية التسويق كاملة، هذه الأدلة تنقلك للصفحة المناسبة بدل خلط النوايا في عرض واحد.</p>
        </div>
        <div className="content-guides-grid">{guideLinks.map((guide) => <Link className="content-guide-card" href={guide.href} key={guide.href}><div className="content-guide-top"><span>دليل</span><span className="content-guide-arrow" aria-hidden="true">↗</span></div><h3>{guide.title}</h3><p>{guide.text}</p></Link>)}</div>
      </section>

      <SocialSectors locale="ar" />

      <section className="content-faq shell">
        <span className="section-label">أسئلة شائعة</span><h2>قبل أن تختار الباقة</h2>
        <div>{allFaqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="content-final shell"><h2>اجعل المحتوى يعمل<br/><em>داخل خطة واضحة</em></h2><div className="content-final-actions"><a className="button primary offer-consultation-cta" href={whatsappHref} target="_blank" rel="noopener noreferrer">ابدأ إدارة حسابك <span>←</span></a><Link href="/contact">أو راسلنا من صفحة التواصل</Link></div></section>
      <Footer />
    </main>
  );
}
