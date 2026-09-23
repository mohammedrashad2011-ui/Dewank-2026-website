import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../components/site-shell";
import { createMetadata, organizationId, siteUrl } from "../../lib/seo";
import "./bithan-case-study.css";

const title = "BITHAN | دراسة حالة هوية بصرية لعلامة مجوهرات";
const description = "دراسة حالة BITHAN Fine Jewelry: من Original Sketch إلى Final Logo Suite، لوحة ألوان معتمدة، نسخ الشعار، Brand Applications وFinal Delivery.";

export const metadata: Metadata = createMetadata({
  title: `${title} | ديوانك`,
  description,
  path: "/work/bithan",
  keywords: [
    "تصميم هوية مجوهرات",
    "Jewelry Brand Identity",
    "Fine Jewelry Branding",
    "Arabic Logo Design",
    "Bilingual Brand Identity",
    "BITHAN",
  ],
});

const colors = [
  ["Deep Sapphire", "#234F82"],
  ["Azure Blue", "#3E74AE"],
  ["Ice Mist", "#93BFEA"],
  ["Frost Light", "#C8E4FA"],
  ["Rich Black", "#000000"],
  ["White", "#FFFFFF"],
];

const delivery = [
  ["Primary Metallic Logo", "Final approved full-color metallic logo for premium use across all brand touchpoints."],
  ["Flat Logo on Dark", "Optimized flat version for dark backgrounds, digital and print."],
  ["Flat Logo on Light", "Optimized flat version for light backgrounds, digital and print."],
  ["Monochrome Versions", "Black, white and grayscale variations for flexible use cases."],
  ["Color Palette & Print Specs", "Brand colors with precise color codes for digital and print."],
  ["Sketch Concept Page", "The original hand-drawn concept that inspired the final design."],
  ["Application Mockups", "Selected premium applications and lifestyle touchpoints."],
  ["Source File Formats", "PNG / PDF / SVG / AI / EPS"],
];

const applications = ["JEWELRY BOX", "SHOPPING BAG", "BUSINESS CARD", "SOCIAL MEDIA PROFILE"];

export default function BithanCaseStudyPage() {
  const url = `${siteUrl}/work/bithan`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${url}#case-study`,
        name: "BITHAN Fine Jewelry Brand Identity",
        description,
        url,
        creator: { "@id": organizationId },
        about: ["Visual Identity", "Logo Design", "Arabic Brand Identity", "Fine Jewelry"],
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
          <span className="section-label">FINAL APPROVED BRAND IDENTITY · SEPTEMBER 2026</span>
          <h1>BITHAN<br/><em>Fine Jewelry Brand Identity.</em></h1>
          <p>هوية بصرية نهائية لعلامة Fine Jewelry مبنية على توقيع عربي مميز، تفاصيل مستوحاة من بريق المجوهرات، ونظام متوازن يعمل عبر الخلفيات الداكنة والفاتحة والتطبيقات المختلفة.</p>
          <div className="bithan-hero-tags"><span>ORIGINAL SKETCH</span><span>LOGO SUITE</span><span>PALETTE</span><span>APPLICATIONS</span></div>
          <div className="bithan-hero-actions">
            <a className="button primary" href="#original-sketch">شاهد الهوية <span>↓</span></a>
            <Link className="button secondary" href="/branding">استكشف خدمة الهوية</Link>
          </div>
        </div>
        <div className="bithan-hero-visual" aria-label="BITHAN final approved direction">
          <span>BITHAN · FINE JEWELRY</span>
          <img src="/work/bithan-logo.svg" alt="شعار BITHAN Fine Jewelry النهائي المعتمد" />
          <small>FINAL APPROVED DIRECTION</small>
        </div>
      </section>

      <section className="shell bithan-editorial" id="original-sketch">
        <div className="bithan-editorial-number">01</div>
        <div className="bithan-editorial-copy">
          <span className="section-label">ORIGINAL SKETCH</span>
          <h2>The first hand-drawn concept<br/><em>behind the final identity.</em></h2>
          <p>بدأ الاتجاه من استكشاف يدوي عربي حافظ على روح الخط، ثم تم تطويره إلى بناء أكثر دقة ولمعانًا ومعاصرة. الفكرة المعتمدة تجمع بين ثلاثة مبادئ ظهرت في العرض النهائي: <strong>Geometric</strong>، <strong>Modern</strong> و<strong>Jewel-like</strong>.</p>
          <div className="bithan-principles"><span>GEOMETRIC<small>Rooted in structure</small></span><span>MODERN<small>A contemporary expression</small></span><span>JEWEL-LIKE<small>Inspired by brilliance</small></span></div>
        </div>
        <div className="bithan-editorial-mark">
          <img src="/work/bithan-arabic-mark.svg" alt="BITHAN refined Arabic mark" />
          <small>REFINED ARABIC MARK</small>
        </div>
      </section>

      <section className="bithan-dark-section">
        <div className="shell">
          <div className="bithan-section-head">
            <div><span className="section-label">02 / FINAL LOGO SUITE</span><h2>Primary logo and<br/><em>essential variations.</em></h2></div>
            <p>النظام النهائي صُمم ليحافظ على التعرّف والاتساق عبر استخدامات Premium، الخلفيات الفاتحة والداكنة، والاستخدامات المختصرة.</p>
          </div>
          <div className="bithan-logo-suite">
            <article className="bithan-suite-primary"><span>01 / PRIMARY LOGO</span><img src="/work/bithan-logo.svg" alt="BITHAN primary logo" /><small>Full color on dark</small></article>
            <article className="light"><span>02 / FULL COLOR LIGHT</span><img src="/work/bithan-bilingual-lockup.svg" alt="BITHAN full color light logo" /><small>For light backgrounds</small></article>
            <article><span>03 / FLAT LOGO DARK</span><img className="mono" src="/work/bithan-bilingual-lockup.svg" alt="BITHAN flat logo dark" /><small>Single color for versatile use</small></article>
            <article className="light"><span>04 / ARABIC MARK ONLY</span><img src="/work/bithan-arabic-mark.svg" alt="BITHAN Arabic mark only" /><small>For special applications</small></article>
          </div>
        </div>
      </section>

      <section className="shell bithan-palette-section">
        <div className="bithan-section-head">
          <div><span className="section-label">03 / MASTER PALETTE &amp; PRINT SPECS</span><h2>Approved flat colors<br/><em>for print and digital use.</em></h2></div>
          <p>لوحة الألوان النهائية قائمة على درجات الأزرق مع الأسود والأبيض. القيم المعروضة هنا هي القيم المعتمدة في العرض النهائي.</p>
        </div>
        <div className="bithan-palette">
          {colors.map(([name, color]) => <div key={name}><span style={{ background: color }} className={color === "#FFFFFF" ? "white" : ""} /><b>{name}</b><small>{color}</small></div>)}
        </div>
      </section>

      <section className="bithan-variants-section">
        <div className="shell">
          <div className="bithan-section-head">
            <div><span className="section-label">04 / FINAL FLAT COLOR VARIANTS</span><h2>Approved logo use<br/><em>on dark and light backgrounds.</em></h2></div>
            <p>العرض النهائي يحدد استخدام النسخة الأساسية مع الكسرة كـHero Mark، مع نسخة بديلة بدون الكسرة عند الضرورة التقنية أو قيود المساحة.</p>
          </div>
          <div className="bithan-variant-grid">
            <article className="dark"><img src="/work/bithan-logo.svg" alt="BITHAN primary logo on dark background" /><span>PRIMARY LOGO · DARK</span></article>
            <article className="light"><img src="/work/bithan-bilingual-lockup.svg" alt="BITHAN primary logo on light background" /><span>PRIMARY LOGO · LIGHT</span></article>
          </div>
        </div>
      </section>

      <section className="shell bithan-evolution">
        <div className="bithan-section-head">
          <div><span className="section-label">05 / SKETCH TO FINAL EVOLUTION</span><h2>From original concept<br/><em>to refined brand mark.</em></h2></div>
          <p>النسخة النهائية تحافظ على الشخصية العربية التعبيرية، مع تحسين النسب والبناء والتفاصيل البلورية والوصول إلى علامة مضيئة مناسبة لعالم Fine Jewelry.</p>
        </div>
        <div className="bithan-evolution-grid">
          <div className="bithan-evolution-mark"><img src="/work/bithan-arabic-mark.svg" alt="BITHAN refined Arabic wordmark" /></div>
          <div className="bithan-evolution-notes">
            <article><b>GEOMETRIC CONSTRUCTION</b><p>Rooted in precise proportions and balanced structure.</p></article>
            <article><b>JEWEL-LIKE FACETS</b><p>Refined with crystalline details to reflect the world of fine jewelry.</p></article>
            <article><b>REFINED ARABIC WORDMARK</b><p>A fluid, elegant form with contemporary sophistication.</p></article>
            <article><b>FINAL LUXURY FINISH</b><p>A luminous, timeless identity crafted for a lasting impression.</p></article>
          </div>
        </div>
      </section>

      <section className="bithan-applications">
        <div className="shell">
          <div className="bithan-section-head">
            <div><span className="section-label">06 / BRAND APPLICATIONS</span><h2>Selected premium<br/><em>applications.</em></h2></div>
            <p>في العرض النهائي المعتمد ظهرت الهوية على أربع نقاط أساسية: Jewelry Box، Shopping Bag، Business Card وSocial Media Profile.</p>
          </div>
          <div className="bithan-app-list">
            {applications.map((item, index) => <article key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></article>)}
          </div>
        </div>
      </section>

      <section className="shell bithan-delivery">
        <div className="bithan-section-head">
          <div><span className="section-label">07 / FINAL DELIVERY</span><h2>Approved brand assets<br/><em>and presentation summary.</em></h2></div>
          <p>المخرجات أدناه مأخوذة من صفحة Final Delivery في العرض المعتمد، من نسخ الشعار إلى ملفات المصدر والتطبيقات.</p>
        </div>
        <div className="bithan-delivery-grid">
          {delivery.map(([name, text], index) => <article key={name}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{name}</h3><p>{text}</p></div></article>)}
        </div>
      </section>

      <section className="shell bithan-outcome">
        <span className="section-label">BITHAN · FINE JEWELRY</span>
        <h2>A refined identity<br/><em>for a brighter tomorrow.</em></h2>
        <p>الهوية النهائية تجمع توقيعًا عربيًا مميزًا، بنية هندسية أوضح، تفاصيل Jewel-like ولوحة ألوان زرقاء مضبوطة لتعمل كمنظومة واحدة عبر نقاط الاتصال المختلفة.</p>
        <div className="bithan-outcome-links">
          <Link className="button primary" href="/branding">ناقش مشروع هوية <span>←</span></Link>
          <Link className="button secondary" href="/work">شاهد أعمال أخرى</Link>
          <Link href="/contact">تواصل معنا</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
