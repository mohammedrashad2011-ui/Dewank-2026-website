import type { Metadata } from "next";
import { Footer, Header } from "../../components/site-shell";
import { BithanTrackedLink } from "./tracked-link";
import { createMetadata, organizationId, siteName, siteUrl } from "../../lib/seo";
import "./bithan-case-study.css";

const title = "BITHAN | دراسة حالة تسمية علامة وهوية بصرية للمجوهرات";
const description = "دراسة حالة BITHAN لعلامة مجوهرات في قطر: استراتيجية تسمية وفحص مبدئي، اختيار الاسم، ثم تصميم شعار عربي وإنجليزي، لوحة ألوان، تطبيقات وهوية بصرية متكاملة.";
const socialImagePath = "/branding-social-preview.png";
const whatsappHref = "https://wa.me/97339066649?text=" + encodeURIComponent("مرحبًا ديوانك، شاهدت دراسة حالة BITHAN وأرغب في مناقشة مشروع تسمية أو هوية لعلامتي.");
const emailHref = "mailto:hello@dewank.com?subject=" + encodeURIComponent("استفسار مشروع براند — دراسة حالة BITHAN");

const baseMetadata = createMetadata({
  title: `${title} | ديوانك`,
  description,
  path: "/work/bithan",
  socialImagePath,
  keywords: [
    "تسمية علامة تجارية",
    "تصميم هوية بصرية للمجوهرات",
    "تصميم شعار عربي",
    "تصميم شعار عربي وانجليزي",
    "براندينج مجوهرات",
    "استراتيجية العلامة التجارية",
    "هوية بصرية قطر",
    "هوية بصرية السعودية",
    "Fine Jewelry Branding",
    "Brand Naming Case Study",
    "Arabic Logo Design",
    "BITHAN",
  ],
});

export const metadata: Metadata = {
  ...baseMetadata,
  category: "دراسة حالة براندينج",
  alternates: {
    canonical: `${siteUrl}/work/bithan`,
    languages: {
      ar: `${siteUrl}/work/bithan`,
      "x-default": `${siteUrl}/work/bithan`,
    },
  },
  openGraph: {
    ...baseMetadata.openGraph,
    type: "article",
    locale: "ar_SA",
    publishedTime: "2026-09-23T00:00:00+03:00",
    modifiedTime: "2026-09-23T00:00:00+03:00",
  },
};

const successCriteria = [
  ["فخامة هادئة", "اسم راقٍ وواثق من دون الاعتماد على لغة فخامة مباشرة أو صاخبة."],
  ["سهولة عربية وإنجليزية", "سهل في النطق والقراءة والاستخدام عبر اللغتين."],
  ["مسافة عن كلمات الفئة", "تميّز من دون الاعتماد على كلمات مباشرة مثل Gold أو Diamond أو Jewels."],
  ["قابلية للتوسع", "يصلح للنمو إلى مجموعات ومنتجات وقنوات جديدة، لا لمنتج واحد فقط."],
  ["عمق قصصي", "يمتلك طبقة معنى يمكن أن تدعم قصة العلامة واتصالها العاطفي."],
  ["حضور بصري", "قادر على حمل شعار وهوية وتغليف وبناء قيمة للعلامة على المدى الطويل."],
];

const namingTerritories = [
  ["A", "تراث عربي شاعري", "جذور عربية نادرة، عمق ثقافي وصوت أنيق."],
  ["B", "هيبة هادئة", "حضور وقيمة من دون استخدام لغة فخامة مباشرة."],
  ["C", "عربي دولي مبتكر", "تركيبات قابلة للامتلاك بمنطق لغوي وصوتي واضح، وليست حروفًا عشوائية."],
  ["D", "اسم رمزي قابل للسرد", "أسماء تُبنى حول الإرث والضوء والذاكرة والزمن والقيمة الدائمة."],
];

const namingProcess = [
  "Discovery & Strategic Brief",
  "Broad Internal Generation",
  "Aggressive Filtering",
  "Shortlist + Rationale",
  "Client Feedback & Refinement",
  "Domain & Digital Checks",
  "Preliminary Conflict Screening",
  "Final Recommendation",
];

const firstShortlist = ["TAFAROD", "MAKNOUNAH", "KUNNH", "NAFAYS", "TeLaAD", "AZAREON"];
const refinement = ["ARSINA", "HAMSINA", "ORSINA", "AURSINA", "AUSINA", "KLEOSINA"];

const logoSuite = [
  ["01", "الشعار الأساسي", "Full color on dark — الاستخدام المفضّل"],
  ["02", "النسخة الملونة الفاتحة", "للخلفيات الفاتحة"],
  ["03", "Flat Logo داكن", "نسخة لون واحد للاستخدامات المرنة"],
  ["04", "Monochrome داكن", "للطباعة والاستخدامات أحادية اللون"],
  ["05", "Monochrome فاتح", "للخلفيات الداكنة"],
  ["06", "العلامة العربية فقط", "للتطبيقات الخاصة"],
  ["07", "Icon / Symbol", "للسوشيال، favicon والمساحات الصغيرة"],
];

const colors = [
  { name: "Deep Sapphire", hex: "#234F82", rgb: "35 · 79 · 130", cmyk: "73 · 39 · 0 · 49" },
  { name: "Azure Blue", hex: "#3E74AE", rgb: "62 · 116 · 174", cmyk: "64 · 33 · 0 · 32" },
  { name: "Ice Mist", hex: "#93BFEA", rgb: "147 · 191 · 234", cmyk: "37 · 18 · 0 · 8" },
  { name: "Frost Light", hex: "#C8E4FA", rgb: "200 · 228 · 250", cmyk: "20 · 9 · 0 · 2" },
  { name: "Rich Black", hex: "#000000", rgb: "0 · 0 · 0", cmyk: "0 · 0 · 0 · 100" },
  { name: "White", hex: "#FFFFFF", rgb: "255 · 255 · 255", cmyk: "0 · 0 · 0 · 0" },
];

const applications = [
  ["علبة المجوهرات", "Jewelry Box"],
  ["حقيبة التسوق", "Shopping Bag"],
  ["بطاقة الأعمال", "Business Card"],
  ["صورة الحساب", "Social Media Profile"],
];

const delivery = [
  ["Primary Metallic Logo", "الشعار المعدني النهائي المعتمد للاستخدامات الـPremium."],
  ["Flat Logo on Dark", "نسخة مسطحة محسّنة للخلفيات الداكنة والطباعة والرقمي."],
  ["Flat Logo on Light", "نسخة مسطحة محسّنة للخلفيات الفاتحة والطباعة والرقمي."],
  ["Monochrome Versions", "نسخ سوداء وبيضاء وأحادية اللون لاستخدامات متعددة."],
  ["Color Palette & Print Specs", "ألوان معتمدة مع قيم HEX وRGB وCMYK للطباعة والرقمي."],
  ["Sketch Concept Page", "الاسكتش اليدوي الأصلي الذي بدأ منه اتجاه الهوية."],
  ["Application Mockups", "تطبيقات مختارة للتغليف وبطاقة الأعمال والحضور الرقمي."],
  ["Source File Formats", "ملفات عالية الدقة وقابلة للاستخدام: PNG / PDF / SVG / AI / EPS."],
];

const faqs = [
  ["ما الذي شمله مشروع BITHAN؟", "شمل المشروع استراتيجية التسمية ومسارات الأسماء والقوائم المختصرة والتطوير والفحص المبدئي، ثم الاسم الذي اختاره العميل، وبعده تطوير الهوية البصرية من الاسكتش إلى الشعار النهائي ونظام الألوان والتطبيقات والملفات المصدرية."],
  ["هل اختار العميل اسم BITHAN فعلًا؟", "نعم. دراسة حالة التسمية توثق أن العميل اختار BITHAN بعد استكشاف استراتيجي لمسارات التسمية والقوائم المختصرة وجولات التطوير."],
  ["هل الفحص المبدئي يعني ضمان تسجيل العلامة التجارية؟", "لا. فحص الدومين والتواجد الرقمي والتعارضات كان فحصًا عمليًا مبدئيًا، وليس تصريحًا قانونيًا. التحقق القانوني النهائي يجب أن يتم عبر جهة أو مستشار مؤهل قبل التسجيل والإطلاق."],
  ["ما الذي تم تسليمه في الهوية النهائية؟", "شمل التسليم الشعار المعدني الأساسي، نسخ Flat للخلفيات الداكنة والفاتحة، نسخ Monochrome، لوحة الألوان ومواصفات الطباعة، صفحة الاسكتش، تطبيقات الهوية وملفات المصدر PNG وPDF وSVG وAI وEPS."],
];

export default function BithanCaseStudyPage() {
  const url = `${siteUrl}/work/bithan`;
  const image = `${siteUrl}${socialImagePath}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#case-study`,
        headline: title,
        description,
        url,
        mainEntityOfPage: url,
        image,
        datePublished: "2026-09-23",
        dateModified: "2026-09-23",
        inLanguage: "ar",
        author: { "@id": organizationId },
        publisher: { "@id": organizationId },
        about: [
          "تسمية علامة تجارية",
          "استراتيجية البراند",
          "تصميم هوية بصرية",
          "تصميم شعار عربي",
          "Fine Jewelry Branding",
          "Qatar",
        ],
        keywords: "تسمية علامة تجارية، تصميم هوية بصرية للمجوهرات، تصميم شعار عربي، براندينج مجوهرات، BITHAN",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: siteName, item: siteUrl },
          { "@type": "ListItem", position: 2, name: "الأعمال", item: `${siteUrl}/work` },
          { "@type": "ListItem", position: 3, name: "دراسة حالة BITHAN", item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  return (
    <main className="bithan-case-page">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="bithan-case-content" dir="rtl" lang="ar">
        <section className="bithan-hero shell">
          <div className="bithan-hero-copy">
            <span className="bithan-kicker" dir="ltr">FINE JEWELRY · QATAR · 2026</span>
            <h1>دراسة حالة BITHAN:<br/><em>من تسمية علامة مجوهرات إلى هوية بصرية متكاملة.</em></h1>
            <p className="bithan-hero-lede">مشروع لدار مجوهرات راقية في قطر بدأ من استراتيجية التسمية والفحص والتطوير، ثم انتقل بعد اختيار الاسم إلى بناء هوية عربية وإنجليزية قابلة للعمل على التغليف والطباعة والحضور الرقمي والتوسع المستقبلي.</p>
            <div className="bithan-hero-actions">
              <a className="button primary" href="#case-overview">شاهد دراسة الحالة <span>↓</span></a>
              <BithanTrackedLink className="button secondary" href={whatsappHref} target="_blank" rel="noopener noreferrer" eventName="bithan_cta_click" eventLocation="hero_whatsapp">ناقش مشروع براند <span>↗</span></BithanTrackedLink>
            </div>
            <dl className="bithan-facts" aria-label="بيانات المشروع">
              <div><dt>النطاق</dt><dd>Naming · Strategy · Visual Identity</dd></div>
              <div><dt>السوق</dt><dd>Fine Jewelry · Qatar</dd></div>
              <div><dt>النتيجة</dt><dd>اختيار BITHAN من العميل</dd></div>
              <div><dt>النظام</dt><dd>هوية عربية + إنجليزية</dd></div>
            </dl>
          </div>
          <figure className="bithan-hero-visual">
            <img src="/work/bithan/hero.svg" width={1126} height={1591} alt="الغلاف النهائي المعتمد لهوية BITHAN Fine Jewelry" fetchPriority="high" decoding="async" />
            <figcaption>Final Approved Direction · September 2026</figcaption>
          </figure>
        </section>

        <div className="bithan-proof-strip shell" aria-label="إثباتات المشروع">
          <span>اسم اختاره العميل</span>
          <span>هوية نهائية معتمدة</span>
          <span dir="ltr">PNG · PDF · SVG · AI · EPS</span>
        </div>

        <nav className="bithan-jump shell" aria-label="أقسام دراسة الحالة">
          <a href="#case-overview">التحدي</a>
          <a href="#naming">التسمية</a>
          <a href="#original-sketch">الاسكتش</a>
          <a href="#logo-suite">نظام الشعار</a>
          <a href="#palette">الألوان</a>
          <a href="#evolution">التطوير</a>
          <a href="#applications">التطبيقات</a>
          <a href="#delivery">التسليم</a>
        </nav>

        <section className="bithan-overview shell" id="case-overview">
          <div className="bithan-section-copy">
            <span className="bithan-eyebrow" dir="ltr">01 / THE CHALLENGE</span>
            <h2>الهدف لم يكن العثور على اسم جميل.<br/><em>بل بناء أصل يمكن للعلامة أن تكبر داخله.</em></h2>
            <p>كان المشروع لدار Fine Jewelry تنطلق أونلاين في قطر مع طموح واضح لحضور تجاري ومادي أوسع. لذلك كان الاسم مطلوبًا أن يحمل الهيبة، يعمل لفظيًا وبصريًا، ويظل مناسبًا مع نمو العلامة.</p>
          </div>
          <div className="bithan-criteria-grid">
            {successCriteria.map(([titleText, text]) => (
              <article key={titleText}><h3>{titleText}</h3><p>{text}</p></article>
            ))}
          </div>
        </section>

        <section className="bithan-naming" id="naming">
          <div className="shell">
            <div className="bithan-section-head">
              <div><span className="bithan-eyebrow" dir="ltr">02 / NAMING STRATEGY</span><h2>أربع مساحات استراتيجية<br/><em>قبل أن تبدأ الأسماء.</em></h2></div>
              <p>بدل القفز مباشرة إلى توليد أسماء، حدد المشروع أولًا أنواع المساحات اللغوية والعاطفية التي تستحق الاستكشاف. هذا جعل العمل أكثر تماسكًا، وجعل ملاحظات العميل تغيّر منطق التسمية نفسه لا مجرد ترتيب القائمة.</p>
            </div>

            <div className="bithan-territories">
              {namingTerritories.map(([letter, name, text]) => (
                <article key={letter}><span>{letter}</span><h3>{name}</h3><p>{text}</p></article>
              ))}
            </div>

            <div className="bithan-process-block">
              <div>
                <span className="bithan-eyebrow" dir="ltr">PROCESS &amp; SCREENING</span>
                <h3>نولّد على نطاق واسع.<br/>نستبعد بقسوة.<br/>ونعرض بانتقائية.</h3>
                <p>تم استبعاد الأسماء قبل عرضها إذا ضعفت في النطق، ملاءمة الفئة، التوسع، التميز أو التوفر العملي.</p>
              </div>
              <ol>
                {namingProcess.map((step, index) => <li key={step}><b>{String(index + 1).padStart(2, "0")}</b><span dir="ltr">{step}</span></li>)}
              </ol>
            </div>

            <details className="bithan-shortlist">
              <summary>نماذج من القائمة الأولى وجولة التطوير</summary>
              <div>
                <span dir="ltr">FIRST SHORTLIST</span>
                <p dir="ltr">{firstShortlist.join(" · ")}</p>
                <span dir="ltr">REFINEMENT ROUND</span>
                <p dir="ltr">{refinement.join(" · ")}</p>
              </div>
            </details>

            <div className="bithan-selected-name">
              <small dir="ltr">FINAL NAME SELECTED BY THE CLIENT</small>
              <strong dir="ltr">BITHAN</strong>
              <p>اختار العميل اسم BITHAN في النهاية بعد الاستكشاف الاستراتيجي لمساحات التسمية والقوائم المختصرة وجولات التطوير.</p>
            </div>
            <p className="bithan-legal-note">فحوص الدومين والتواجد الرقمي والتعارضات كانت فحوصًا عملية مبدئية فقط وليست تصريحًا قانونيًا. التحقق القانوني النهائي للعلامة التجارية يجب أن يتم عبر جهة أو مستشار مؤهل قبل التسجيل والإطلاق.</p>
          </div>
        </section>

        <section className="bithan-sketch shell" id="original-sketch">
          <figure className="bithan-page-visual">
            <img src="/work/bithan/sketch.svg" width={1126} height={1591} alt="صفحة Original Sketch المعتمدة لهوية BITHAN وتطورها إلى الشعار النهائي" loading="lazy" decoding="async" />
            <a className="bithan-visual-zoom" href="/work/bithan/sketch.svg" target="_blank" rel="noopener noreferrer">عرض التصميم بالحجم الكامل <span>↗</span></a>
          </figure>
          <div className="bithan-section-copy">
            <span className="bithan-eyebrow" dir="ltr">03 / ORIGINAL SKETCH</span>
            <h2>بدأت الهوية بخط يدوي.<br/><em>وانتهت بنظام أكثر دقة ولمعانًا.</em></h2>
            <p>حافظت الهوية النهائية على الروح العربية والشكل المميز للاتجاه الأول، ثم تم ضبط البناء والنسب والتفاصيل ليصبح التعبير أكثر معاصرة وملاءمة لعالم المجوهرات الراقية.</p>
            <div className="bithan-principles">
              <div><b dir="ltr">GEOMETRIC</b><span>بناء منظم ونِسب أوضح</span></div>
              <div><b dir="ltr">MODERN</b><span>تعبير معاصر دون فقد الروح</span></div>
              <div><b dir="ltr">JEWEL-LIKE</b><span>تفاصيل مستوحاة من اللمعان والأحجار</span></div>
            </div>
            <blockquote>نفس الجوهر. بصياغة أكثر نضجًا.</blockquote>
          </div>
        </section>

        <section className="bithan-dark-panel" id="logo-suite">
          <div className="shell">
            <div className="bithan-section-head">
              <div><span className="bithan-eyebrow" dir="ltr">04 / FINAL LOGO SUITE</span><h2>توقيع واحد.<br/><em>وسبع صيغ قابلة للاستخدام.</em></h2></div>
              <p>النظام النهائي يعطي الهوية مرونة للعمل على التغليف الفاخر، الطباعة، السوشيال، المساحات الرقمية الصغيرة والخلفيات الفاتحة أو الداكنة من دون فقد التعرف على العلامة.</p>
            </div>
            <figure className="bithan-page-visual on-dark">
              <img src="/work/bithan/logo-suite.svg" width={1126} height={1591} alt="صفحة Final Logo Suite المعتمدة وتعرض سبع نسخ من شعار BITHAN" loading="lazy" decoding="async" />
            <a className="bithan-visual-zoom" href="/work/bithan/logo-suite.svg" target="_blank" rel="noopener noreferrer">عرض التصميم بالحجم الكامل <span>↗</span></a>
            </figure>
            <div className="bithan-signature-note">
              <span className="bithan-eyebrow" dir="ltr">OUR SIGNATURE</span>
              <p>الشعار يجمع بين جذور الخط العربي وإحساس حديث بالرفاهية. البنية المصقولة والتفاصيل الشبيهة بالأحجار تعكس الدقة واللمعان، بينما يضمن نظام النسخ المختلفة اتساق العلامة عبر نقاط التواصل.</p>
              <strong>Legacy in every detail.</strong>
            </div>
            <div className="bithan-logo-legend">
              {logoSuite.map(([n, name, use]) => <article key={n}><span>{n}</span><h3>{name}</h3><p>{use}</p></article>)}
            </div>
          </div>
        </section>

        <section className="bithan-palette-section shell" id="palette">
          <div className="bithan-section-head">
            <div><span className="bithan-eyebrow" dir="ltr">05 / MASTER PALETTE &amp; PRINT SPECS</span><h2>ألوان معتمدة<br/><em>للطباعة والاستخدام الرقمي.</em></h2></div>
            <p>تعتمد الهوية على Deep Sapphire ودرجات أفتح من الأزرق لتكوين إحساس بارد وبلوري، مع الأسود والأبيض لتحقيق التباين والمرونة في الاستخدام.</p>
          </div>
          <figure className="bithan-page-visual palette-page">
            <img src="/work/bithan/palette.svg" width={1126} height={1591} alt="صفحة Master Palette & Print Specs المعتمدة لهوية BITHAN" loading="lazy" decoding="async" />
            <a className="bithan-visual-zoom" href="/work/bithan/palette.svg" target="_blank" rel="noopener noreferrer">عرض التصميم بالحجم الكامل <span>↗</span></a>
          </figure>
          <div className="bithan-palette">
            {colors.map((color) => (
              <article key={color.name}>
                <span className="bithan-swatch" style={{ background: color.hex }} data-light={color.hex === "#FFFFFF" ? "true" : undefined} />
                <h3 dir="ltr">{color.name}</h3>
                <dl dir="ltr">
                  <div><dt>HEX</dt><dd>{color.hex}</dd></div>
                  <div><dt>RGB</dt><dd>{color.rgb}</dd></div>
                  <div><dt>CMYK</dt><dd>{color.cmyk}</dd></div>
                </dl>
              </article>
            ))}
          </div>
          <aside className="bithan-approved-use">
            <b>الاستخدام المعتمد</b>
            <p>هذه الألوان المسطحة معتمدة لمواد الطباعة والسوشيال ميديا، ويجب الحفاظ على القيم المحددة لضمان اتساق الهوية.</p>
          </aside>
        </section>

        <section className="bithan-variants">
          <div className="shell bithan-variants-grid">
            <div className="bithan-section-copy">
              <span className="bithan-eyebrow" dir="ltr">06 / FINAL FLAT COLOR VARIANTS</span>
              <h2>استخدام معتمد للشعار<br/><em>على الخلفيات الداكنة والفاتحة.</em></h2>
              <p>النسخة الأساسية المعتمدة Hero Mark هي التي تحتوي على الكسرة في حرف الباء. النسخة من دون الكسرة بديل معتمد عند وجود ضرورة تقنية أو قيود في المساحة.</p>
              <div className="bithan-usage-note">
                <b>Primary</b><span>بالكسرة — الاستخدام الأساسي والمفضّل</span>
                <b>Alternate</b><span>من دون الكسرة — عند الضرورة التقنية فقط</span>
              </div>
            </div>
            <figure className="bithan-page-visual">
              <img src="/work/bithan/flat-variants.svg" width={1126} height={1591} alt="صفحة Final Flat Color Variants المعتمدة لشعار BITHAN على خلفيات داكنة وفاتحة" loading="lazy" decoding="async" />
            <a className="bithan-visual-zoom" href="/work/bithan/flat-variants.svg" target="_blank" rel="noopener noreferrer">عرض التصميم بالحجم الكامل <span>↗</span></a>
            </figure>
          </div>
        </section>

        <section className="bithan-evolution shell" id="evolution">
          <figure className="bithan-page-visual">
            <img src="/work/bithan/evolution.svg" width={1126} height={1591} alt="صفحة Sketch to Final Evolution توضح تطور شعار BITHAN من الاسكتش إلى العلامة النهائية" loading="lazy" decoding="async" />
            <a className="bithan-visual-zoom" href="/work/bithan/evolution.svg" target="_blank" rel="noopener noreferrer">عرض التصميم بالحجم الكامل <span>↗</span></a>
          </figure>
          <div className="bithan-section-copy">
            <span className="bithan-eyebrow" dir="ltr">07 / SKETCH TO FINAL EVOLUTION</span>
            <h2>من الفكرة الأصلية<br/><em>إلى علامة أكثر دقة وقابلية للاستخدام.</em></h2>
            <div className="bithan-evolution-notes">
              <article><b dir="ltr">GEOMETRIC CONSTRUCTION</b><p>نِسب أكثر دقة وبناء بصري متوازن.</p></article>
              <article><b dir="ltr">JEWEL-LIKE FACETS</b><p>تفاصيل بلورية تربط العلامة بعالم المجوهرات الراقية.</p></article>
              <article><b dir="ltr">REFINED ARABIC WORDMARK</b><p>حركة عربية انسيابية بصياغة أكثر تحكمًا وحداثة.</p></article>
              <article><b dir="ltr">FINAL LUXURY FINISH</b><p>هوية مضيئة ومتماسكة مصممة لانطباع طويل الأمد.</p></article>
            </div>
          </div>
        </section>

        <section className="bithan-applications" id="applications">
          <div className="shell">
            <div className="bithan-section-head">
              <div><span className="bithan-eyebrow" dir="ltr">08 / BRAND APPLICATIONS</span><h2>تطبيقات Premium<br/><em>تثبت أن النظام يعمل خارج ملف العرض.</em></h2></div>
              <p>تم اختبار الهوية على نقاط تواصل أساسية للتأكد من أن العلامة واللون والإحساس الفاخر يظلون متماسكين في الاستخدام الواقعي.</p>
            </div>
            <figure className="bithan-page-visual on-dark">
              <img src="/work/bithan/applications.svg" width={1126} height={1591} alt="صفحة Brand Applications المعتمدة وتعرض علبة المجوهرات وحقيبة التسوق وبطاقة الأعمال وصورة السوشيال" loading="lazy" decoding="async" />
            <a className="bithan-visual-zoom" href="/work/bithan/applications.svg" target="_blank" rel="noopener noreferrer">عرض التصميم بالحجم الكامل <span>↗</span></a>
            </figure>
            <div className="bithan-application-captions">
              {applications.map(([name, en], index) => <article key={name}><span>{String(index + 1).padStart(2, "0")}</span><h3>{name}</h3><p dir="ltr">{en}</p></article>)}
            </div>
          </div>
        </section>

        <section className="bithan-mid-cta shell" aria-label="ابدأ مشروعًا مشابهًا">
          <div>
            <span className="bithan-eyebrow">هل تعمل على اسم أو هوية جديدة؟</span>
            <h2>نقدر نبدأ من قرار الاسم، أو من البراند الموجود بالفعل.</h2>
            <p>لو محتاج تسمية، Brand Strategy أو Visual Identity، ابعت لنا نبذة قصيرة عن المشروع ونحدد أنسب نقطة بداية.</p>
          </div>
          <BithanTrackedLink className="button primary" href={whatsappHref} target="_blank" rel="noopener noreferrer" eventName="bithan_cta_click" eventLocation="mid_whatsapp">ناقش مشروعك <span>↗</span></BithanTrackedLink>
        </section>

        <section className="bithan-delivery shell" id="delivery">
          <div className="bithan-section-head">
            <div><span className="bithan-eyebrow" dir="ltr">09 / FINAL DELIVERY</span><h2>أصول العلامة المعتمدة<br/><em>جاهزة للاستخدام الفعلي.</em></h2></div>
            <p>التسليم النهائي لم يتوقف عند الشعار، بل شمل النسخ المعدنية والمسطحة والأحادية، مواصفات الطباعة، التطبيقات وملفات المصدر.</p>
          </div>
          <figure className="bithan-page-visual delivery-page">
            <img src="/work/bithan/delivery-logos.svg" width={1126} height={1591} alt="صفحة Final Delivery المعتمدة لهوية BITHAN وتفاصيل الملفات والتطبيقات" loading="lazy" decoding="async" />
            <a className="bithan-visual-zoom" href="/work/bithan/delivery-logos.svg" target="_blank" rel="noopener noreferrer">عرض التصميم بالحجم الكامل <span>↗</span></a>
          </figure>
          <div className="bithan-delivery-grid">
            {delivery.map(([name, text], index) => <article key={name}><span>{String(index + 1).padStart(2, "0")}</span><div><h3 dir="ltr">{name}</h3><p>{text}</p></div></article>)}
          </div>
        </section>

        <section className="bithan-faq shell" aria-labelledby="bithan-faq-title">
          <div className="bithan-section-head">
            <div><span className="bithan-eyebrow" dir="ltr">10 / CASE STUDY FAQ</span><h2 id="bithan-faq-title">أسئلة مهمة<br/><em>قبل بدء مشروع تسمية أو هوية.</em></h2></div>
            <p>إجابات مباشرة على أكثر النقاط التي يحتاجها عميل يقارن بين مزودين لخدمات Naming وBrand Strategy وVisual Identity.</p>
          </div>
          <div className="bithan-faq-list">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="bithan-outcome shell">
          <div>
            <span className="bithan-eyebrow" dir="ltr">THE RESULT</span>
            <h2>مشروع بدأ من قرار اسم.<br/><em>وانتهى بنظام علامة متكامل.</em></h2>
          </div>
          <div>
            <p>انتقل BITHAN من تحدي تسمية إلى اسم اختاره العميل، ثم إلى هوية كاملة بتوقيع عربي مميز، استخدام ثنائي اللغة، نسخ شعار مضبوطة، مواصفات ألوان للإنتاج وتطبيقات Premium.</p>
            <p className="bithan-outcome-note">لا ندّعي هنا أرقام أداء أو نتائج تجارية غير موثقة. قيمة دراسة الحالة في اكتمال المنهج من القرار الاستراتيجي إلى النظام البصري القابل للتطبيق.</p>
            <div className="bithan-outcome-links">
              <BithanTrackedLink className="button primary" href={whatsappHref} target="_blank" rel="noopener noreferrer" eventName="bithan_cta_click" eventLocation="final_whatsapp">ناقش مشروعك معنا <span>↗</span></BithanTrackedLink>
              <BithanTrackedLink className="button secondary" href={emailHref} eventName="bithan_cta_click" eventLocation="final_email">راسل ديوانك</BithanTrackedLink>
              <BithanTrackedLink className="button secondary" href="/services/brand-naming" eventName="bithan_service_click" eventLocation="final_naming">خدمة تسمية العلامة</BithanTrackedLink>
              <BithanTrackedLink className="button secondary" href="/branding" eventName="bithan_service_click" eventLocation="final_branding">استراتيجية البراند والهوية</BithanTrackedLink>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
