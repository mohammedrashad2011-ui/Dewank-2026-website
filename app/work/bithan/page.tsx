import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../components/site-shell";
import { createMetadata, organizationId, siteUrl } from "../../lib/seo";
import "./bithan-case-study.css";

const title = "BITHAN | دراسة حالة تسمية وهوية علامة مجوهرات";
const description = "دراسة حالة BITHAN: مشروع فعلي في قطر انتقل من استراتيجية التسمية والاختيار إلى تطوير هوية بصرية ثنائية اللغة ونظام علامة متكامل لدار Fine Jewelry.";

export const metadata: Metadata = createMetadata({
  title: `${title} | ديوانك`,
  description,
  path: "/work/bithan",
  keywords: [
    "دراسة حالة تسمية علامة تجارية",
    "تصميم هوية مجوهرات",
    "Brand Naming Case Study",
    "Fine Jewelry Branding",
    "Bilingual Brand Identity",
    "BITHAN",
  ],
});

const territories = [
  ["A", "تراث عربي شاعري", "جذور عربية نادرة، عمق ثقافي وصوت أنيق."],
  ["B", "هيبة هادئة", "حضور وقيمة من دون لغة فخامة مباشرة أو صاخبة."],
  ["C", "عربي - دولي مبتكر", "تركيبات قابلة للامتلاك بمنطق لغوي وصوتي واضح، لا حروف عشوائية."],
  ["D", "اسم قصصي رمزي", "الإرث والضوء والذاكرة والزمن والقيمة الدائمة كمصادر للمعنى."],
];

const shortlist = ["TAFAROD", "MAKNOUNAH", "KUNNH", "NAFAYS", "TeLaAD", "AZAREON", "ARSINA", "HAMSINA", "ORSINA", "AURSINA", "AUSINA", "KLEOSINA"];

const colors = [
  ["Deep Sapphire", "#234F82"],
  ["Azure Blue", "#3E74AE"],
  ["Ice Mist", "#93BFEA"],
  ["Frost Light", "#C8E4FA"],
  ["Rich Black", "#000000"],
  ["White", "#FFFFFF"],
];

const applications = [
  ["Jewelry Box", "box"],
  ["Shopping Bag", "bag"],
  ["Business Card", "card"],
  ["Social Media", "social"],
];

export default function BithanCaseStudyPage() {
  const url = `${siteUrl}/work/bithan`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${url}#case-study`,
        name: "BITHAN Fine Jewelry Brand Naming, Strategy & Visual Identity",
        description,
        url,
        creator: { "@id": organizationId },
        about: ["Brand Naming", "Brand Strategy", "Visual Identity", "Fine Jewelry"],
        spatialCoverage: "Qatar",
        dateCreated: "2026",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "الأعمال", item: `${siteUrl}/work` },
          { "@type": "ListItem", position: 3, name: "BITHAN", item: url },
        ],
      },
    ],
  };

  return (
    <main className="bithan-case-page" dir="rtl">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bithan-hero shell">
        <div className="bithan-hero-copy">
          <span className="section-label">دراسة حالة فعلية · قطر · 2026</span>
          <h1>من تحدي تسمية<br/><em>إلى علامة مجوهرات متكاملة.</em></h1>
          <p>بدأ المشروع بالحاجة إلى اسم يمكن أن يعيش كأصل تجاري طويل المدى لدار Fine Jewelry تنطلق أونلاين في قطر، ثم امتد بعد اختيار الاسم إلى بناء توقيع بصري ثنائي اللغة ونظام هوية متكامل.</p>
          <div className="bithan-hero-tags"><span>NAMING</span><span>STRATEGY</span><span>LOGO</span><span>IDENTITY</span></div>
          <div className="bithan-hero-actions">
            <a className="button primary" href="#journey">شاهد الرحلة <span>↓</span></a>
            <Link className="button secondary" href="/services/brand-naming">خدمة التسمية</Link>
          </div>
        </div>
        <div className="bithan-hero-visual" aria-label="شعار BITHAN المعتمد">
          <div className="bithan-crystal bithan-crystal-one" />
          <div className="bithan-crystal bithan-crystal-two" />
          <span>BITHAN · FINE JEWELRY</span>
          <img src="/work/bithan-logo.svg" alt="شعار BITHAN Fine Jewelry النهائي" />
          <small>FINAL APPROVED DIRECTION</small>
        </div>
      </section>

      <section className="shell bithan-brief" id="journey">
        <div>
          <span className="section-label">01 / الموجز</span>
          <h2>الاسم كان يجب أن يكون<br/><em>أصلًا للعلامة، لا كلمة جميلة فقط.</em></h2>
        </div>
        <div className="bithan-brief-grid">
          <article><b>Quiet Luxury</b><p>فخامة هادئة وواثقة بدل الظهور الصاخب أو المباشر.</p></article>
          <article><b>Bilingual Ease</b><p>راحة في النطق والحضور عبر العربية والإنجليزية.</p></article>
          <article><b>Category Distance</b><p>من دون الاعتماد على كلمات Gold أو Diamond أو Jewels.</p></article>
          <article><b>Scalability</b><p>اسم صالح للنمو أبعد من حجر أو مجموعة أو منتج واحد.</p></article>
        </div>
      </section>

      <section className="bithan-territories">
        <div className="shell">
          <span className="section-label">02 / استراتيجية التسمية</span>
          <div className="bithan-section-head"><h2>أربع مساحات قبل<br/><em>أن تبدأ الأسماء.</em></h2><p>بدأنا بتحديد المساحة اللغوية والعاطفية حتى تكون عملية التوليد مترابطة، وحتى يتحول feedback العميل إلى قرار استراتيجي بدل تفضيل عشوائي.</p></div>
          <div className="bithan-territory-grid">
            {territories.map(([letter, name, text]) => <article key={letter}><span>{letter}</span><h3>{name}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="shell bithan-selection">
        <div className="bithan-section-head">
          <div><span className="section-label">03 / التصفية والتطوير</span><h2>نولّد على نطاق واسع.<br/><em>ونعرض بانتقائية.</em></h2></div>
          <p>القائمة الداخلية كانت أوسع من المعروض للعميل. تم استبعاد الخيارات التي ضعفت في النطق، ملاءمة الفئة، قابلية التوسع، التميز أو التوفر العملي وقت المراجعة.</p>
        </div>
        <div className="bithan-shortlist">{shortlist.map((name) => <span key={name}>{name}</span>)}</div>
        <div className="bithan-process">
          {["Discovery & brief","Broad generation","Aggressive filtering","Shortlist + rationale","Client feedback","Domain & digital checks","Preliminary conflict screening","Final recommendation"].map((item, index) => <div key={item}><b>{String(index + 1).padStart(2, "0")}</b><span>{item}</span></div>)}
        </div>
        <div className="bithan-selected">
          <small>SELECTED NAME</small>
          <strong>BITHAN</strong>
          <p>اختار العميل BITHAN بعد الاستكشاف الاستراتيجي وجولات التطوير والتصفية، ثم أصبح الاسم نقطة الانطلاق للهوية البصرية.</p>
        </div>
        <p className="bithan-disclaimer">البحث عن التعارضات كان فحصًا مبدئيًا وليس تصريحًا قانونيًا للعلامة التجارية. التحقق القانوني النهائي يظل من اختصاص الجهة أو المستشار المؤهل قبل الإطلاق.</p>
      </section>

      <section className="bithan-identity">
        <div className="shell bithan-identity-grid">
          <div className="bithan-identity-copy">
            <span className="section-label">04 / من الاسم إلى الهوية</span>
            <h2>التوقيع اليدوي أصبح<br/><em>نظامًا بصريًا مضبوطًا.</em></h2>
            <p>بعد اختيار BITHAN استمر المشروع إلى هوية كاملة. بدأ الاتجاه من رسم خطي عربي ذي silhouette مميز، ثم تم ضبط النسب والمسافات والتفاصيل المستوحاة من الألماس قبل حل العلاقة بين العربية والإنجليزية في توقيع واحد.</p>
            <div className="bithan-evolution-list">
              <div><b>01</b><span><strong>Original Sketch</strong> فكرة خطية عربية بشرية ومميزة.</span></div>
              <div><b>02</b><span><strong>Structural Refinement</strong> ضبط النسب والمسافات والتفاصيل البلورية.</span></div>
              <div><b>03</b><span><strong>Bilingual Lockup</strong> موازنة العربية والإنجليزية في توقيع Premium متماسك.</span></div>
            </div>
          </div>
          <div className="bithan-logo-stage">
            <span>APPROVED BILINGUAL SIGNATURE</span>
            <img src="/work/bithan-logo.svg" alt="نظام شعار BITHAN باللغتين العربية والإنجليزية" />
            <div className="bithan-logo-stage-foot"><i>GEOMETRIC</i><i>MODERN</i><i>JEWEL-LIKE</i></div>
          </div>
        </div>
      </section>

      <section className="shell bithan-system">
        <div className="bithan-section-head">
          <div><span className="section-label">05 / نظام الهوية</span><h2>مرونة كافية للتطبيق.<br/><em>وضبط كافٍ للحفاظ على العلامة.</em></h2></div>
          <p>تم تصميم الهوية لتعمل على الخلفيات الداكنة والفاتحة وفي تطبيقات Premium ومقاسات مختلفة من دون فقدان التعرف عليها.</p>
        </div>
        <div className="bithan-logo-contrast">
          <div className="dark"><img src="/work/bithan-logo.svg" alt="شعار BITHAN على خلفية داكنة" /></div>
          <div className="light"><img src="/work/bithan-logo.svg" alt="شعار BITHAN على خلفية فاتحة" /></div>
        </div>
        <div className="bithan-palette">
          {colors.map(([name, color]) => <div key={name}><span style={{ background: color }} className={color === "#FFFFFF" ? "white" : ""} /><b>{name}</b><small>{color}</small></div>)}
        </div>
      </section>

      <section className="bithan-applications">
        <div className="shell">
          <div className="bithan-section-head">
            <div><span className="section-label">06 / Brand Applications</span><h2>من قرار تسمية<br/><em>إلى نظام يلمس نقاط العلامة.</em></h2></div>
            <p>نُقلت الهوية إلى تطبيقات مجوهرات وتغليف ونقاط تواصل تحافظ على نفس التوقيع اللوني والبصري.</p>
          </div>
          <div className="bithan-app-grid">
            {applications.map(([label, kind]) => <article className={`bithan-app bithan-app-${kind}`} key={label}><div className="bithan-app-surface"><img src="/work/bithan-logo.svg" alt="" /></div><span>{label}</span></article>)}
          </div>
        </div>
      </section>

      <section className="shell bithan-outcome">
        <span className="section-label">الخلاصة</span>
        <h2>الإبداع كان جزءًا من العملية.<br/><em>لكن الفلترة التجارية هي ما جعلته قابلًا للاستخدام.</em></h2>
        <p>توضح BITHAN كيف يمكن لمشروع التسمية أن يجمع التموضع، مساحات تسمية واضحة، قوائم منتقاة، فحوصات عملية، تطويرًا قائمًا على feedback حقيقي، ثم يتحول إلى نظام هوية متكامل بدل أن يتوقف عند الاسم.</p>
        <div className="bithan-outcome-links">
          <Link className="button primary" href="/services/brand-naming">ابدأ مشروع تسمية <span>←</span></Link>
          <Link className="button secondary" href="/branding">استكشف البراند والهوية</Link>
          <Link href="/contact">ناقش مشروعك معنا</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
