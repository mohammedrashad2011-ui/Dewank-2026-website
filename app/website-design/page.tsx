import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../components/site-shell";
import { createMetadata, organizationId, siteUrl } from "../lib/seo";
import "./website-design-page.css";

export const metadata: Metadata = createMetadata({
  title: "تصميم وتطوير مواقع للشركات في السعودية | ديوانك",
  description:
    "تصميم وتطوير مواقع سريعة ومتجاوبة للشركات في السعودية والخليج، مع تجربة مستخدم محسّنة وSEO وCRO وربط التحليلات والأنظمة.",
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

const stages = [
  { n: "01", en: "CLARITY", title: "وضوح", text: "رسالة مباشرة تجعل الزائر يفهم ما تقدمه ولماذا يهمه خلال ثوانٍ." },
  { n: "02", en: "TRUST", title: "ثقة", text: "تصميم ومحتوى وأدلة تقلل التردد وتدعم قرار التواصل أو الشراء." },
  { n: "03", en: "JOURNEY", title: "رحلة", text: "تنقل منطقي يربط الصفحات والمعلومات بما يحتاجه المستخدم في كل خطوة." },
  { n: "04", en: "ACTION", title: "إجراء", text: "نماذج وCTA ومسارات واضحة تقلل الاحتكاك وتزيد احتمالية التحويل." },
  { n: "05", en: "GROWTH", title: "نمو", text: "تتبع وتحسين مستمر يحول الموقع إلى أصل يدعم الحملات والمبيعات." },
];

const capabilities = [
  ["استراتيجية الموقع", "تحديد دور الموقع والجمهور والصفحات والأهداف قبل بدء التصميم."],
  ["UX وبنية المعلومات", "تنظيم المحتوى والمسارات بما يساعد المستخدم على الوصول إلى القرار بسهولة."],
  ["UI وهوية رقمية", "تصميم بصري متناسق مع البراند ويعكس مستوى الخدمة والثقة المطلوبة."],
  ["تطوير سريع ومتجاوب", "تنفيذ يعمل بكفاءة على الجوال والكمبيوتر مع أساس تقني قابل للتوسع."],
  ["صفحات الهبوط", "صفحات مخصصة للحملات والعروض تركز على رسالة وإجراء واحد واضح."],
  ["CRO وتحسين التحويل", "مراجعة الرسائل والنماذج والاحتكاك لرفع الاستفسارات أو المبيعات."],
  ["SEO وAEO تقني", "بنية وعناوين وسكيما وسرعة تساعد محركات البحث وأنظمة الإجابة على فهم الموقع."],
  ["التحليلات والربط", "GA4 وMeta Pixel وربط النماذج وواتساب أو CRM حسب احتياج المشروع."],
];

const deliverables = [
  "خريطة موقع ومسارات مستخدم مرتبطة بالأهداف التجارية.",
  "Wireframes للصفحات الأساسية قبل التصميم النهائي.",
  "تصميم واجهات متجاوبة ومتسقة مع الهوية البصرية.",
  "تطوير الصفحات والمكونات والنماذج المطلوبة.",
  "إعداد أساسي لـSEO وMetadata وSchema وSitemap.",
  "ربط أدوات التحليل والتتبع والقنوات المطلوبة.",
  "اختبار السرعة والاستجابة والروابط والنماذج قبل الإطلاق.",
  "تسليم وتدريب مختصر على إدارة المحتوى عند الحاجة.",
];

const process = [
  ["نكتشف", "نفهم النشاط والجمهور والعرض والمنافسين ودور الموقع في رحلة البيع."],
  ["نخطط", "نحدد الصفحات والبنية والمسارات والمحتوى المطلوب لكل مرحلة."],
  ["نصمم", "نبني الاتجاه البصري والواجهات مع مراجعات واضحة قبل التطوير."],
  ["نطوّر", "نحوّل التصميم إلى موقع سريع ومتجاوب ونربط النماذج والأنظمة."],
  ["نختبر ونطلق", "نراجع الأداء والبحث والتتبع وتجربة الجوال ثم نطلق بثقة."],
];

const fitFor = [
  "شركة لديها موقع قديم لا يعكس مستوى الخدمة أو العلامة.",
  "نشاط يعتمد على السوشيال ميديا ويحتاج أصلًا رقميًا يملك بياناته.",
  "شركة تدفع على الإعلانات لكن صفحة الوصول لا تحول الزيارات إلى طلبات.",
  "علامة جديدة تحتاج موقعًا احترافيًا قبل الإطلاق أو التوسع.",
  "مشروع يحتاج ربط الموقع بواتساب أو CRM أو أنظمة الحجز والمتابعة.",
];

const faqs = [
  { question: "كم يستغرق تصميم وتطوير الموقع؟", answer: "تعتمد المدة على عدد الصفحات والتكاملات وجاهزية المحتوى. المواقع التعريفية المركزة قد تحتاج عدة أسابيع، بينما المشاريع الأكبر أو متعددة الأنظمة تحتاج وقتًا أطول وخطة مراحل." },
  { question: "هل تشمل الخدمة كتابة محتوى الموقع؟", answer: "يمكن أن تشمل كتابة الرسائل والعناوين والمحتوى الكامل حسب النطاق. نفضل بناء المحتوى والتصميم معًا لأن بنية الصفحة والرسالة تؤثران مباشرة في التحويل." },
  { question: "هل سيكون الموقع مناسبًا للجوال؟", answer: "نعم. نصمم ونختبر الصفحات لتعمل على الجوال والتابلت والكمبيوتر، مع إعطاء أولوية لسهولة القراءة وسرعة الوصول إلى الإجراء الأساسي." },
  { question: "هل يشمل الموقع SEO؟", answer: "يشمل الأساس التقني للصفحات مثل العناوين والوصف والروابط القانونية والسكيما وخريطة الموقع. أما المنافسة على كلمات واسعة فتحتاج استراتيجية محتوى وروابط وتحسينًا مستمرًا." },
  { question: "هل يمكن تطوير موقعي الحالي بدل بنائه من جديد؟", answer: "نعم بعد تقييم البنية والأداء والتقنية الحالية. أحيانًا يكون التطوير التدريجي أفضل، وأحيانًا تكون إعادة البناء أقل تكلفة وأكثر أمانًا على المدى الطويل." },
  { question: "هل تربطون الموقع بواتساب أو CRM؟", answer: "نعم. يمكن ربط النماذج وواتساب والحجز وCRM وأدوات التحليل والأتمتة حسب رحلة العميل والأنظمة المستخدمة في النشاط." },
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
        description: "تصميم وتطوير مواقع وصفحات هبوط وتجارب رقمية سريعة ومتجاوبة للشركات في السعودية والخليج.",
        serviceType: ["Website Design", "Web Development", "UX Design", "UI Design", "Landing Page Design", "Conversion Rate Optimization", "Technical SEO"],
        provider: { "@id": organizationId },
        areaServed: ["Saudi Arabia", "Bahrain", "GCC"],
        url: `${siteUrl}/website-design`,
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/website-design#faq`,
        mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
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
      <style>{`
        .wd-truth-label { display: block; margin-bottom: 1.5rem; }
        .wd-truth-grid-revised {
          display: grid;
          grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr);
          grid-template-areas:
            ". heading"
            "secondary primary";
          column-gap: clamp(2rem, 7vw, 7rem);
          row-gap: 1.5rem;
          align-items: start;
          direction: ltr;
        }
        .wd-truth-primary { display: contents; }
        .wd-truth-primary h2 {
          grid-area: heading;
          direction: rtl;
          margin: 0;
        }
        .wd-truth-primary > p {
          grid-area: primary;
          direction: rtl;
          max-width: 46ch;
          margin: 0;
        }
        .wd-truth-secondary {
          grid-area: secondary;
          direction: rtl;
          align-self: start;
          padding: 0;
        }
        .wd-truth-secondary > p { max-width: 50ch; margin: 0; }
        @media (max-width: 760px) {
          .wd-truth-grid-revised {
            grid-template-columns: 1fr;
            grid-template-areas: "heading" "primary" "secondary";
            row-gap: 1.25rem;
          }
        }
      `}</style>

      <section className="wd-hero shell">
        <div className="wd-hero-copy">
          <div className="wd-kicker"><span>WEBSITE DESIGN</span><span>UX / DEVELOPMENT</span></div>
          <h1>موقعك ليس واجهة فقط.<br/><em>إنه جزء من عملية البيع.</em></h1>
          <p>نصمم ونطوّر مواقع للشركات في السعودية والخليج تشرح القيمة، تبني الثقة، وتحوّل الزيارة إلى خطوة واضحة — مع سرعة، تجربة مستخدم، SEO، وتحليلات من البداية.</p>
          <div className="wd-actions"><Link className="button primary" href="/contact">ناقش مشروع موقعك <span>←</span></Link><a className="wd-text-link" href="#process">استعرض طريقة العمل</a></div>
        </div>

        <div className="wd-browser" aria-label="تصور تفاعلي لواجهة موقع احترافي">
          <div className="wd-browser-top"><div><i></i><i></i><i></i></div><span>dewank.com</span></div>
          <div className="wd-browser-nav"><b>D</b><div><span>الخدمات</span><span>الأعمال</span><span>عن ديوانك</span></div><button type="button">ابدأ مشروعك</button></div>
          <div className="wd-browser-grid">
            <div className="wd-screen-copy"><small>01 / CLARITY</small><strong>القيمة<br/><em>قبل الزخرفة.</em></strong><p>رسالة واضحة، دليل ثقة، ومسار يقود إلى الإجراء.</p><span className="wd-demo-cta">اكتشف الحل ←</span></div>
            <div className="wd-screen-cards">
              <article><b>وضوح الرسالة</b><span>ما الذي تقدمه؟</span></article>
              <article><b>دليل الثقة</b><span>لماذا يختارك العميل؟</span></article>
              <article><b>خطوة تالية</b><span>ماذا يفعل الآن؟</span></article>
            </div>
          </div>
          <div className="wd-browser-foot"><span>UX STRATEGY</span><span>RESPONSIVE</span><span>CONVERSION</span></div>
        </div>
      </section>

      <section className="wd-truth">
        <div className="shell">
          <span className="wd-label wd-truth-label">[ الفكرة الأساسية ]</span>
          <div className="wd-truth-grid wd-truth-grid-revised">
            <div className="wd-truth-primary">
              <h2>الموقع الجميل قد يجذب النظر.<br/><em>الموقع المدروس يحرّك القرار.</em></h2>
              <p>عندما لا يفهم الزائر ما تقدمه، أو لا يثق، أو لا يعرف الخطوة التالية، تصبح الزيارة رقمًا بلا قيمة.</p>
            </div>
            <div className="wd-truth-secondary">
              <p>لذلك نربط التصميم بالمحتوى وتجربة المستخدم وسرعة الموقع والتتبع؛ ليعمل الموقع مع التسويق والمبيعات بدل أن يبقى كتالوجًا جامدًا.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="wd-journey"><div className="shell"><div className="wd-section-head"><div><span className="wd-label">[ من الزيارة إلى النتيجة ]</span><h2>كل صفحة لها وظيفة.<br/><em>وكل خطوة تقلل التردد.</em></h2></div><p>نبني الرحلة من السؤال الأول في ذهن الزائر إلى الإجراء الذي يخدم هدف النشاط.</p></div><div className="wd-journey-list">{stages.map((stage) => <article key={stage.n}><div className="wd-stage-id"><span>{stage.n}</span><small>{stage.en}</small></div><h3>{stage.title}</h3><p>{stage.text}</p></article>)}</div></div></section>

      <section className="wd-capabilities shell"><div className="wd-section-head"><div><span className="wd-label">[ نطاق الخدمة ]</span><h2>تصميم، تطوير،<br/><em>وتحويل في منظومة واحدة.</em></h2></div><p>نحدد النطاق حسب حاجة المشروع بدل إضافة خصائص لا تخدم المستخدم أو النتيجة.</p></div><div className="wd-capability-grid">{capabilities.map((item, index) => <article key={item[0]}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item[0]}</h3><p>{item[1]}</p></article>)}</div></section>

      <section className="wd-deliverables"><div className="shell wd-deliverables-layout"><div className="wd-sticky-copy"><span className="wd-label">[ ما الذي تستلمه ]</span><h2>مخرجات حقيقية.<br/><em>لا مجرد رابط.</em></h2><p>من التخطيط إلى الاختبار، تعرف ما يتم بناؤه ولماذا وكيف سيخدم عملك بعد الإطلاق.</p></div><div className="wd-deliverables-list">{deliverables.map((item, index) => <div key={item}><b>{String(index + 1).padStart(2, "0")}</b><p>{item}</p></div>)}</div></div></section>

      <section className="wd-method shell" id="process"><div className="wd-section-head"><div><span className="wd-label">[ طريقة العمل ]</span><h2>من الهدف التجاري<br/><em>إلى موقع يعمل.</em></h2></div><p>لا نبدأ بالألوان. نبدأ بدور الموقع والرسالة والمسار، ثم نبني التقنية حولها.</p></div><div className="wd-method-list">{process.map((step, index) => <div key={step[0]}><span>{String(index + 1).padStart(2, "0")}</span><h3>{step[0]}</h3><p>{step[1]}</p></div>)}</div></section>

      <section className="wd-fit"><div className="shell wd-fit-layout"><div><span className="wd-label">[ لمن تناسب الخدمة ]</span><h2>تحتاج موقعًا جديدًا<br/><em>عندما يصبح الحالي عائقًا.</em></h2></div><div className="wd-fit-list">{fitFor.map((item, index) => <p key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</p>)}</div></div></section>

      <section className="wd-faq shell"><div className="wd-faq-head"><div><span className="wd-label">[ أسئلة شائعة ]</span><h2>قبل أن نبدأ.</h2></div><p>إجابات مباشرة عن النطاق والمدة والمحتوى والتطوير والربط.</p></div><div className="wd-faq-grid">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</div></section>

      <section className="wd-final shell"><div><span className="wd-label">[ الخطوة التالية ]</span><h2>لنَبْنِ موقعًا<br/><em>يستحق الزيارة.</em></h2></div><div className="wd-final-actions"><p>أرسل لنا رابط موقعك الحالي أو وصف المشروع، وسنناقش الأولوية والنطاق الأنسب.</p><Link className="button primary" href="/contact">ابدأ المحادثة <span>←</span></Link><div className="wd-related"><Link href="/branding">استراتيجية البراند</Link><Link href="/digital-marketing">التسويق والمحتوى</Link><Link href="/seo-aeo">SEO وAEO</Link></div></div></section>
      <Footer />
    </main>
  );
}
