import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../components/site-shell";
import { createMetadata, organizationId, siteUrl } from "../lib/seo";
import "./website-design-page.css";

export const metadata: Metadata = createMetadata({
  title: "تصميم وتطوير مواقع للشركات في السعودية | ديوانك",
  description:
    "تصميم وتطوير مواقع سريعة ومتجاوبة للشركات في السعودية والخليج، تجمع الرسالة وتجربة المستخدم وSEO وCRO والتحليلات في نظام واحد يقود إلى نتائج أوضح.",
  path: "/website-design",
  keywords: [
    "تصميم مواقع في السعودية",
    "تطوير مواقع للشركات",
    "شركة تصميم مواقع",
    "تصميم صفحات هبوط",
    "تحسين تحويل المواقع",
  ],
  socialImagePath: "/website-design-social-preview.png",
});

const journey = [
  { n: "01", en: "CLARITY", title: "وضوح", text: "رسالة تجعل الزائر يفهم من أنت وما الذي تقدمه خلال ثوانٍ." },
  { n: "02", en: "TRUST", title: "ثقة", text: "هيكل ومحتوى وأدلة تقلل التردد وتدعم قرار التواصل." },
  { n: "03", en: "FLOW", title: "رحلة", text: "تنقل منطقي بين الصفحات والمعلومات دون ارتباك أو احتكاك." },
  { n: "04", en: "ACTION", title: "إجراء", text: "دعوات واضحة تقود إلى طلب عرض أو حجز أو تواصل مباشر." },
  { n: "05", en: "GROWTH", title: "نمو", text: "قياس وتحسين مستمر يرفع كفاءة الموقع مع الوقت." },
];

const capabilities = [
  ["استراتيجية الموقع", "تحديد دور الموقع وأهدافه ومساره التجاري قبل بدء التصميم."],
  ["هيكلة المحتوى", "تنظيم الصفحات والرسائل وفق أسئلة العميل ورحلته واتخاذ القرار."],
  ["UX وواجهة الاستخدام", "تجربة واضحة وسريعة ومتجاوبة على الهاتف والكمبيوتر."],
  ["التصميم البصري", "واجهة تعكس مستوى العلامة دون تضحية بالوضوح أو سهولة الاستخدام."],
  ["التطوير التقني", "تنفيذ سريع وآمن وقابل للتوسع باستخدام بنية مناسبة للمشروع."],
  ["SEO وAEO", "تهيئة البنية والعناوين والبيانات المنظمة لفهم أفضل من محركات البحث."],
  ["CRO وصفحات الهبوط", "تقليل الاحتكاك وتحسين الرسائل والنماذج والدعوات لاتخاذ الإجراء."],
  ["التحليلات والربط", "ربط GA4 وMeta Pixel وCRM وواتساب وأدوات القياس عند الحاجة."],
];

const deliverables = [
  "تشخيص الموقع الحالي أو متطلبات المشروع الجديد وتحديد الأولويات.",
  "خريطة صفحات واضحة مع رحلة المستخدم ومسارات التحويل الأساسية.",
  "Wireframes للمراحل والصفحات الرئيسية قبل الدخول في التفاصيل البصرية.",
  "تصميم واجهة متجاوبة ومتسقة مع هوية العلامة.",
  "تطوير الموقع والصفحات والنماذج والتفاعلات المتفق عليها.",
  "تهيئة تقنية أساسية للسرعة وSEO وAEO والبيانات المنظمة.",
  "ربط أدوات التحليل والتتبع وواتساب أو CRM حسب نطاق المشروع.",
  "اختبار الإطلاق والتسليم مع توثيق واضح لما تم تنفيذه.",
];

const process = [
  ["نكتشف", "نفهم النشاط والجمهور والعرض والهدف الحقيقي من الموقع."],
  ["نهيكل", "نبني خريطة الصفحات والرسائل والمسارات قبل رسم الواجهة."],
  ["نصمم", "نحوّل الاستراتيجية إلى تجربة واضحة وهوية بصرية متماسكة."],
  ["نطوّر", "ننفذ الموقع بسرعة واستجابة وبنية تقنية قابلة للصيانة."],
  ["نختبر ونطلق", "نراجع الأداء والروابط والنماذج والقياس قبل النشر."],
];

const fitFor = [
  "شركة لديها موقع جميل لكنه لا يشرح القيمة ولا يولد استفسارات كافية.",
  "علامة جديدة تحتاج موقعًا احترافيًا قبل الإطلاق أو دخول السوق السعودي.",
  "نشاط يعتمد على واتساب فقط ويريد بناء حضور أكثر ثقة وتنظيمًا.",
  "شركة توسعت وأصبح موقعها الحالي بطيئًا أو مشتتًا أو صعب الإدارة.",
  "حملة إعلانية تحتاج صفحة هبوط مخصصة بدل إرسال الزوار إلى صفحة عامة.",
];

const faqs = [
  {
    question: "هل تشمل الخدمة التصميم والتطوير معًا؟",
    answer:
      "نعم، يمكن أن تشمل الاستراتيجية والهيكلة وUX والتصميم والتطوير والإطلاق. ويمكن أيضًا تنفيذ جزء محدد إذا كانت بقية المراحل متوفرة بجودة مناسبة.",
  },
  {
    question: "هل تبنون مواقع تعريفية فقط؟",
    answer:
      "لا. ننفذ مواقع الشركات وصفحات الهبوط والمواقع الخدمية وبعض المتاجر والأنظمة الخفيفة حسب المتطلبات والبنية المناسبة للمشروع.",
  },
  {
    question: "كم يستغرق تصميم وتطوير الموقع؟",
    answer:
      "تعتمد المدة على عدد الصفحات وتعقيد المحتوى والوظائف وسرعة الاعتمادات. بعد مرحلة الاكتشاف نقدم نطاقًا وجدولًا واضحين بدل رقم عام غير دقيق.",
  },
  {
    question: "هل تكتبون محتوى الموقع؟",
    answer:
      "يمكن أن يشمل النطاق استراتيجية الرسائل وكتابة الصفحات والعناوين وCTA. جودة المحتوى جزء أساسي من التحويل وليست إضافة جانبية.",
  },
  {
    question: "هل الموقع سيكون مهيأ لمحركات البحث؟",
    answer:
      "ننفذ التهيئة التقنية الأساسية والهيكل والعناوين والبيانات المنظمة. أما المنافسة على الكلمات وبناء المحتوى والروابط فتحتاج خطة SEO مستمرة منفصلة.",
  },
  {
    question: "هل يمكن تطوير موقعي الحالي بدل بنائه من الصفر؟",
    answer:
      "نعم، إذا كانت البنية الحالية تستحق التطوير. نراجع التقنية والمحتوى والأداء أولًا ثم نحدد هل الأنسب تحسين تدريجي أم إعادة بناء.",
  },
];

export default function WebsiteDesignPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteUrl}/website-design#service`,
        name: "خدمات تصميم وتطوير المواقع",
        alternateName: "Website Design and Development Services",
        description:
          "تصميم وتطوير مواقع الشركات وصفحات الهبوط وتجارب الويب للشركات في السعودية والخليج.",
        serviceType: [
          "Website Strategy",
          "UX Design",
          "UI Design",
          "Website Development",
          "Landing Page Design",
          "Conversion Rate Optimization",
          "Technical SEO",
        ],
        provider: { "@id": organizationId },
        areaServed: ["Saudi Arabia", "Bahrain", "GCC"],
        url: `${siteUrl}/website-design`,
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/website-design#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "الخدمات", item: `${siteUrl}/services` },
          { "@type": "ListItem", position: 3, name: "تصميم وتطوير المواقع", item: `${siteUrl}/website-design` },
        ],
      },
    ],
  };

  return (
    <main className="wd-page">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="wd-hero shell">
        <div className="wd-hero-copy">
          <div className="wd-kicker"><span>WEBSITE STRATEGY</span><span>UX / DEVELOPMENT</span></div>
          <h1>موقعك ليس واجهة فقط.<br/><em>إنه جزء من عملية البيع.</em></h1>
          <p>نصمم ونطور مواقع للشركات تجمع الرسالة، تجربة المستخدم، السرعة، SEO والتحويل في نظام واحد يقود الزائر إلى خطوة واضحة.</p>
          <div className="wd-actions">
            <Link className="button primary" href="/contact">ناقش مشروع موقعك <span>←</span></Link>
            <a className="wd-text-link" href="#process">استعرض طريقة العمل</a>
          </div>
        </div>
        <div className="wd-browser" aria-hidden="true">
          <div className="wd-browser-top"><i/><i/><i/><span>dewank.com</span></div>
          <div className="wd-browser-grid">
            <div className="wd-screen-copy"><b>MESSAGE</b><strong>وضوح يقود<br/>إلى قرار.</strong><span/></div>
            <div className="wd-screen-cards"><article/><article/><article/></div>
          </div>
          <div className="wd-browser-foot"><span>FAST</span><span>RESPONSIVE</span><span>MEASURABLE</span></div>
        </div>
      </section>

      <section className="wd-truth shell">
        <span className="wd-label">[ المشكلة التي نحلها ]</span>
        <div className="wd-truth-grid">
          <h2>المشكلة ليست أن موقعك قديم.<br/><em>المشكلة أنه لا يساعد العميل على الاختيار.</em></h2>
          <div>
            <p>الموقع قد يكون أنيقًا، لكنه يترك الزائر يسأل: ماذا تقدمون؟ لماذا أنتم؟ وما الخطوة التالية؟</p>
            <p>نبني الموقع من الرسالة والرحلة أولًا، ثم نحول ذلك إلى تصميم وتطوير يقود إلى نتيجة تجارية قابلة للقياس.</p>
          </div>
        </div>
      </section>

      <section className="wd-journey">
        <div className="shell">
          <div className="wd-section-head">
            <div><span className="wd-label">[ رحلة الموقع ]</span><h2>كل صفحة لها وظيفة.<br/><em>كل خطوة تقرّب القرار.</em></h2></div>
            <p>لا نبني صفحات منفصلة بلا رابط. نبني مسارًا يبدأ بالفهم وينتهي بإجراء واضح.</p>
          </div>
          <div className="wd-journey-grid">
            {journey.map((item) => <article key={item.n}><div><span>{item.n}</span><small>{item.en}</small></div><h3>{item.title}</h3><p>{item.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="wd-capabilities shell">
        <div className="wd-section-head">
          <div><span className="wd-label">[ ماذا نبني ]</span><h2>من الاستراتيجية<br/><em>إلى الإطلاق.</em></h2></div>
          <p>الخدمة ليست تصميم شاشة فقط، بل منظومة كاملة تربط الرسالة بالتجربة بالتقنية.</p>
        </div>
        <div className="wd-capability-grid">
          {capabilities.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="wd-deliverables">
        <div className="shell wd-deliverables-layout">
          <div className="wd-sticky-copy"><span className="wd-label">[ ما الذي تستلمه ]</span><h2>مخرجات واضحة.<br/><em>وليس مجرد رابط.</em></h2><p>كل مشروع له نطاق مختلف، لكننا نحدد من البداية ما الذي سيُبنى وما الذي سيتم قياسه.</p></div>
          <div className="wd-deliverables-list">{deliverables.map((item, index) => <div key={item}><b>{String(index + 1).padStart(2, "0")}</b><p>{item}</p></div>)}</div>
        </div>
      </section>

      <section className="wd-method shell" id="process">
        <div className="wd-section-head"><div><span className="wd-label">[ طريقة العمل ]</span><h2>أقل تخمين.<br/><em>قرارات أوضح.</em></h2></div><p>نمنع إعادة العمل المكلفة عبر اعتماد الرسالة والهيكل قبل الدخول في التفاصيل البصرية والتقنية.</p></div>
        <div className="wd-method-list">{process.map(([title, text], index) => <div key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></div>)}</div>
      </section>

      <section className="wd-fit">
        <div className="shell wd-fit-layout"><div><span className="wd-label">[ لمن تناسب ]</span><h2>هذه الخدمة مناسبة<br/><em>عندما يصبح الموقع عائقًا.</em></h2></div><div className="wd-fit-list">{fitFor.map((item) => <p key={item}><span>↙</span>{item}</p>)}</div></div>
      </section>

      <section className="wd-faq shell">
        <div className="wd-faq-head"><div><span className="wd-label">[ أسئلة شائعة ]</span><h2>إجابات مباشرة.</h2></div><p>قبل البدء نحدد النطاق والتقنية والمحتوى والمسؤوليات حتى لا تتحول عملية التطوير إلى مشروع مفتوح بلا نهاية.</p></div>
        <div className="wd-faq-grid">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</div>
      </section>

      <section className="wd-final shell">
        <div><span className="wd-label">[ الخطوة التالية ]</span><h2>ابنِ موقعًا يشرح.<br/><em>يقنع. ويقود.</em></h2></div>
        <div className="wd-final-actions"><p>نراجع وضعك الحالي ونحدد هل تحتاج موقعًا جديدًا، تطويرًا مرحليًا، أم صفحة هبوط مركزة.</p><Link className="button primary" href="/contact">ابدأ المحادثة <span>←</span></Link><div className="wd-related"><Link href="/branding">استراتيجية البراند</Link><Link href="/digital-marketing">التسويق والمحتوى</Link><Link href="/seo-aeo">SEO وAEO</Link></div></div>
      </section>
      <Footer />
    </main>
  );
}
