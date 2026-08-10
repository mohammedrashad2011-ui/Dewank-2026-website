import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../components/site-shell";
import { createMetadata, organizationId, siteUrl } from "../lib/seo";
import "./digital-marketing-page.css";
import "./digital-marketing-guides.css";

export const metadata: Metadata = createMetadata({
  title: "التسويق الرقمي وصناعة المحتوى في السعودية | ديوانك",
  description:
    "استراتيجية تسويق رقمي وصناعة محتوى للشركات في السعودية والخليج تربط الرسالة بالقنوات ورحلة العميل والقياس لتحويل الانتباه إلى طلب.",
  path: "/digital-marketing",
  keywords: [
    "التسويق الرقمي في السعودية",
    "صناعة المحتوى للشركات",
    "استراتيجية محتوى",
    "خطة تسويق رقمي",
    "إدارة محتوى السوشيال ميديا",
  ],
  socialImagePath: "/digital-marketing-social-preview.png",
});

const journey = [
  { n: "01", en: "ATTENTION", title: "انتباه", text: "فكرة وهوك يوقفان التمرير دون ضجيج أو مبالغة." },
  { n: "02", en: "RELEVANCE", title: "صلة", text: "رسالة تجعل العميل يرى مشكلته وسياقه داخل المحتوى." },
  { n: "03", en: "TRUST", title: "ثقة", text: "أدلة ورؤية وخبرة تقلل التردد قبل التواصل." },
  { n: "04", en: "ACTION", title: "قرار", text: "دعوة وخطوة تالية واضحتان تقودان إلى استفسار أو شراء." },
  { n: "05", en: "RETENTION", title: "استمرار", text: "متابعة ومحتوى يحافظان على العلاقة بعد أول تفاعل." },
];

const capabilities = [
  ["استراتيجية التسويق الرقمي", "تحديد الهدف والجمهور والقنوات والأولوية بدل توزيع الجهد بالتساوي."],
  ["بحث الجمهور والمنافسين", "فهم ما يحرك القرار، وما يقوله السوق، وأين توجد فجوة يمكن امتلاكها."],
  ["استراتيجية المحتوى", "أعمدة وزوايا ورسائل تربط المحتوى باحتياجات العميل ومراحل رحلته."],
  ["الرسائل والكتابة البيعية", "قيمة مقترحة وهوكات وCTA ونصوص تجعل العرض أسهل فهمًا واختيارًا."],
  ["خطط السوشيال ميديا", "نظام نشر واقعي يوازن بين الوصول والثقة والتحويل، لا جدولًا لمجرد الاستمرار."],
  ["حملات الإطلاق والعروض", "بناء الفكرة والتسلسل والرسائل والصفحات اللازمة قبل دفع الميزانية."],
  ["صفحات الهبوط والتحويل", "ربط المحتوى بصفحة تشرح القيمة وتقلل الاحتكاك وتقود إلى إجراء واضح."],
  ["القياس والتحسين", "مؤشرات مرتبطة بالهدف التجاري واختبارات تكشف ما يستحق التكرار أو الإيقاف."],
];

const deliverables = [
  "تشخيص الوضع الحالي والقنوات والمحتوى ورحلة التحويل.",
  "تعريف شرائح الجمهور واحتياجاتها ومحفزات القرار والاعتراضات.",
  "خريطة رحلة العميل من الاكتشاف إلى الطلب والمتابعة.",
  "Messaging Framework يشمل القيمة المقترحة والرسائل والحجج الرئيسية.",
  "Content Pillars وزوايا محتوى مرتبطة بأهداف ومراحل واضحة.",
  "خطة محتوى تنفيذية تشمل الصيغ والهوكات وCTA وتوزيع القنوات.",
  "مؤشرات أداء وخطة اختبار وتحسين بدل الاكتفاء بالوصول والتفاعل.",
  "توصيات ربط المحتوى بالموقع والحملات وواتساب أو CRM عند الحاجة.",
];

const process = [
  ["نكتشف", "نفهم السوق والعرض والجمهور والموارد ونحدد نقطة الاختناق الحقيقية."],
  ["نحدّد", "نختار الهدف والأولوية والرسالة والقنوات التي تستحق الاستثمار."],
  ["نبني", "نحوّل القرار إلى نظام محتوى ورسائل وتجارب قابلة للتنفيذ."],
  ["نطلق", "نبدأ بنطاق واضح واختبارات محسوبة بدل نشر كل شيء دفعة واحدة."],
  ["نُحسّن", "نقرأ الإشارات ونطوّر ما يرفع الوضوح والثقة والتحويل."],
];

const fitFor = [
  "شركة تنشر باستمرار لكن الاستفسارات أقل من حجم الجهد.",
  "علامة تدخل السوق السعودي أو الخليجي وتحتاج رسالة مناسبة للسياق.",
  "فريق محتوى لديه تنفيذ جيد لكن لا يعمل من استراتيجية واحدة.",
  "نشاط يعتمد على الإعلانات لأن المحتوى العضوي لا يبني طلبًا أو ثقة.",
  "شركة تقدم خدمة قوية لكن جمهورها لا يفهم الفرق بينها وبين البدائل.",
];

const guideLinks = [
  {
    href: "/guides/social-media-not-generating-leads",
    title: "حسابك جميل لكنه لا يجلب عملاء: أين المشكلة؟",
    text: "تشخيص عملي للرسالة والعرض والثقة والـCTA ومسار التحويل قبل زيادة النشر.",
  },
  {
    href: "/guides/social-media-management-cost-saudi-arabia",
    title: "أسعار إدارة حسابات التواصل الاجتماعي في السعودية",
    text: "افهم نطاق الإدارة الشهرية، ما يدخل في الباقة، وما يجب تسعيره بشكل منفصل.",
  },
  {
    href: "/guides/digital-marketing-cost-saudi-arabia",
    title: "أسعار التسويق الرقمي في السعودية: ماذا تشمل؟",
    text: "فرّق بين أتعاب الإدارة والإنفاق الإعلاني والإنتاج قبل مقارنة أي عرض تسويقي.",
  },
];

const faqs = [
  {
    question: "هل تشمل الخدمة إدارة حسابات التواصل الاجتماعي؟",
    answer:
      "يمكن أن تشمل الاستراتيجية فقط أو التنفيذ والإدارة الشهرية حسب نطاق المشروع. نحدد أولًا ما إذا كانت المشكلة في الاتجاه أم في القدرة على التنفيذ قبل اقتراح إدارة مستمرة.",
  },
  {
    question: "هل تصنعون المحتوى أم تقدمون الخطة فقط؟",
    answer:
      "نقدم الاستراتيجية ونظام الرسائل والخطة، ويمكن أن يشمل النطاق الكتابة والتصميم والإنتاج والنشر. المخرجات تتحدد حسب فريق العميل والميزانية والقنوات المطلوبة.",
  },
  {
    question: "كيف تختارون المنصات المناسبة؟",
    answer:
      "نختار القنوات بناءً على مكان وجود الجمهور، وطبيعة القرار الشرائي، ودور كل منصة في الرحلة، وتكلفة الوصول، وقدرة الفريق على الاستمرار بجودة.",
  },
  {
    question: "متى تظهر نتائج التسويق الرقمي والمحتوى؟",
    answer:
      "بعض المؤشرات مثل وضوح الرسالة وجودة التفاعل تتحسن سريعًا، لكن بناء الثقة والطلب المستدام يحتاج اختبارًا وتكرارًا. المدة تختلف حسب نقطة البداية والعرض والسوق والقناة.",
  },
  {
    question: "هل تضمنون عددًا محددًا من العملاء؟",
    answer:
      "لا يمكن ضمان رقم ثابت لأن النتيجة تتأثر بالعرض والسعر والمنافسة وتجربة الموقع وسرعة المتابعة. نضمن منهجًا واضحًا للبحث والتنفيذ والقياس والتحسين.",
  },
  {
    question: "هل التسويق بالمحتوى بديل عن الإعلانات؟",
    answer:
      "ليس دائمًا. المحتوى يبني الفهم والثقة ويقوي أداء الإعلان، بينما الإعلانات تسرّع الوصول والاختبار. الأفضل غالبًا هو تحديد دور واضح لكل منهما داخل رحلة واحدة.",
  },
];

export default function DigitalMarketingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteUrl}/digital-marketing#service`,
        name: "خدمات التسويق الرقمي وصناعة المحتوى",
        alternateName: "Digital Marketing and Content Strategy",
        description:
          "استراتيجية التسويق الرقمي وصناعة المحتوى والرسائل ورحلة العميل للشركات في السعودية والخليج.",
        serviceType: [
          "Digital Marketing Strategy",
          "Content Strategy",
          "Social Media Content",
          "Marketing Messaging",
          "Customer Journey",
          "Conversion Strategy",
        ],
        provider: { "@id": organizationId },
        areaServed: ["Saudi Arabia", "Bahrain", "GCC"],
        url: `${siteUrl}/digital-marketing`,
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/digital-marketing#faq`,
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
          { "@type": "ListItem", position: 3, name: "التسويق الرقمي والمحتوى", item: `${siteUrl}/digital-marketing` },
        ],
      },
    ],
  };

  return (
    <main className="dm-page">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="dm-hero shell">
        <div className="dm-hero-copy">
          <div className="dm-kicker"><span>DIGITAL MARKETING</span><span>CONTENT SYSTEMS</span></div>
          <h1>محتوى لا يملأ الجدول.<br/><em>بل يحرّك العميل نحو القرار.</em></h1>
          <p>نبني استراتيجية تسويق رقمي وصناعة محتوى تربط أهداف النشاط، سلوك الجمهور، الرسالة، القنوات، ورحلة التحويل في نظام واحد قابل للقياس.</p>
          <div className="dm-actions">
            <Link className="button primary" href="/contact">ناقش استراتيجية التسويق <span>←</span></Link>
            <a className="dm-text-link" href="#dm-method">استعرض طريقة العمل <span>↓</span></a>
          </div>
        </div>
        <div className="dm-hero-system" aria-label="رحلة المحتوى من الانتباه إلى القرار">
          <div className="dm-orbit dm-orbit-one" />
          <div className="dm-orbit dm-orbit-two" />
          <div className="dm-core"><span>CONTENT</span><strong>→</strong><span>DEMAND</span></div>
          <span className="dm-signal dm-signal-a">رسالة</span>
          <span className="dm-signal dm-signal-b">ثقة</span>
          <span className="dm-signal dm-signal-c">طلب</span>
          <span className="dm-signal dm-signal-d">قياس</span>
        </div>
      </section>

      <section className="dm-truth shell">
        <span className="dm-label">[ المشكلة التي نحلها ]</span>
        <div className="dm-truth-grid">
          <h2>كثرة النشر لا تعني نموًا.<br/><em>وكثرة الوصول لا تعني طلبًا.</em></h2>
          <div>
            <p>عندما يعمل المحتوى بلا تموضع ورسالة ورحلة واضحة، يتحول إلى مجهود يومي يصنع حركة على الشاشة لا حركة في المبيعات.</p>
            <p>نحدد أين يتوقف العميل، وما الذي يحتاج أن يفهمه أو يصدقه، ثم نبني محتوى وقنوات وصفحات تقوده إلى الخطوة التالية.</p>
          </div>
        </div>
      </section>

      <section className="dm-journey">
        <div className="shell">
          <div className="dm-section-head">
            <div><span className="dm-label">[ من المحتوى إلى الطلب ]</span><h2>كل قطعة محتوى لها وظيفة<br/><em>داخل الرحلة.</em></h2></div>
            <p>لا نقيس نجاح المنشور بمعزل عن دوره: هل جذب؟ شرح؟ بنى ثقة؟ حرّك قرارًا؟ أم أعاد العميل؟</p>
          </div>
          <div className="dm-journey-grid">
            {journey.map((item) => (
              <article key={item.n}>
                <div><span>{item.n}</span><small>{item.en}</small></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dm-capabilities shell">
        <div className="dm-section-head">
          <div><span className="dm-label">[ ماذا نبني ]</span><h2>ليس حسابًا ممتلئًا.<br/><em>بل نظام تسويق متماسك.</em></h2></div>
          <p>نختار ما يخدم الهدف ونستبعد ما يضيف ضوضاء أو عبئًا دون أثر تجاري.</p>
        </div>
        <div className="dm-capability-grid">
          {capabilities.map(([title, text], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="dm-deliverables">
        <div className="shell dm-deliverables-layout">
          <div className="dm-sticky-copy">
            <span className="dm-label">[ ما الذي تستلمه ]</span>
            <h2>مخرجات يمكن لفريقك<br/><em>استخدامها غدًا.</em></h2>
            <p>لا نقدم ملفًا نظريًا ينتهي في البريد. كل مخرج مصمم ليقود قرارًا أو يسهل تنفيذًا أو يحسن قياسًا.</p>
          </div>
          <div className="dm-deliverables-list">
            {deliverables.map((item, index) => <div key={item}><b>{String(index + 1).padStart(2, "0")}</b><p>{item}</p></div>)}
          </div>
        </div>
      </section>

      <section className="dm-method shell" id="dm-method">
        <div className="dm-section-head">
          <div><span className="dm-label">[ طريقة العمل ]</span><h2>من التشخيص<br/><em>إلى نظام قابل للتحسين.</em></h2></div>
          <p>كل مرحلة تجيب عن سؤال تجاري قبل الانتقال إلى التنفيذ التالي.</p>
        </div>
        <div className="dm-method-list">
          {process.map(([title, text], index) => (
            <div key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></div>
          ))}
        </div>
      </section>

      <section className="dm-fit">
        <div className="shell dm-fit-layout">
          <div><span className="dm-label">[ لمن تناسب ]</span><h2>هذه الخدمة مناسبة<br/><em>عندما يكون النشاط أكبر من محتواه.</em></h2></div>
          <div className="dm-fit-list">
            {fitFor.map((item) => <p key={item}><span>↙</span>{item}</p>)}
          </div>
        </div>
      </section>

      <section className="dm-guides shell" aria-labelledby="dm-guides-title">
        <div className="dm-guides-head">
          <div>
            <span className="dm-label">[ أدلة قبل القرار ]</span>
            <h2 id="dm-guides-title">افهم أين المشكلة.<br/><em>ثم اختر نطاق التسويق المناسب.</em></h2>
          </div>
          <p>ثلاثة أدلة تساعدك على تشخيص ضعف التحويل، فهم تكلفة إدارة الحسابات، ومقارنة نطاقات التسويق قبل التعاقد.</p>
        </div>
        <div className="dm-guides-grid">
          {guideLinks.map((guide, index) => (
            <Link className="dm-guide-card" href={guide.href} key={guide.href}>
              <div className="dm-guide-card-top"><span>دليل 0{index + 1}</span><span className="dm-guide-arrow" aria-hidden="true">↗</span></div>
              <h3>{guide.title}</h3>
              <p>{guide.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="dm-faq shell">
        <span className="dm-label">[ أسئلة شائعة ]</span>
        <div className="dm-faq-head"><h2>إجابات مباشرة.<br/><em>قبل أن نبدأ.</em></h2><p>نحدد النطاق بناءً على المشكلة والموارد، لا بناءً على باقة جاهزة للجميع.</p></div>
        <div className="dm-faq-grid">
          {faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}
        </div>
      </section>

      <section className="dm-final shell">
        <div>
          <span className="dm-label">[ الخطوة التالية ]</span>
          <h2>لا تبدأ بمزيد من المحتوى.<br/><em>ابدأ بسبب واضح لكل محتوى.</em></h2>
        </div>
        <div className="dm-final-actions">
          <p>محادثة قصيرة لفهم النشاط والهدف وما إذا كانت الأولوية استراتيجية، تنفيذًا، أم إصلاح رحلة التحويل.</p>
          <Link className="button primary" href="/contact">ناقش مشروعك <span>←</span></Link>
          <div className="dm-related"><Link href="/paid-ads">الإعلانات المدفوعة ↙</Link><Link href="/website-design">تصميم المواقع ↙</Link><Link href="/seo-aeo">SEO وAEO ↙</Link></div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
