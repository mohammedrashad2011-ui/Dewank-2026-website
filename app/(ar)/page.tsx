import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "../lib/seo";
import { Footer, Header } from "../components/site-shell";
import GrowthExperience from "../components/growth-experience";
import HomeSectionChoreography from "../components/home-section-choreography";
import "../home-hierarchy-refinement.css";
import HomeTestimonials from "../components/home-testimonials";
import HomeServiceExperience from "../components/home-service-experience";
import HomeSelectedOffers from "../components/home-selected-offers";
import "../home-growth-upgrade.css";
import "../home-conversion-refinement.css";
import "../home-mobile-service-cards.css";
import "../arabic-home-polish.css";
import "../arabic-service-cards.css";

import "../home-editorial-sections.css";
export const metadata: Metadata = createMetadata({
  title: "وكالة تسويق رقمي وبراندينج في السعودية | ديوانك",
  description: "وكالة تسويق رقمي في السعودية والخليج: بناء العلامة، جذب الطلب، تطوير المواقع، وأتمتة واتساب وCRM ضمن منظومة نمو واحدة قابلة للقياس.",
  path: "/",
  keywords: ["شركة تسويق في السعودية", "إدارة Google Ads", "تصميم مواقع", "براندينج", "أتمتة واتساب", "أتمتة الذكاء الاصطناعي", "ديوانك"],
});

const whatsappHref = "https://wa.me/97339066649?text=" + encodeURIComponent("مرحبًا ديوانك، أريد مناقشة نمو مشروعي. النشاط: ");

const workImages = ["/work/clinika-remastered.webp", "/work/bithan/hero.svg", "/work/arab-sun-remastered.webp"] as const;

const selectedWork = [
  { n: "01", title: "من رسائل متفرقة إلى رحلة حجز قابلة للقياس", text: "نظام واتساب وCRM يربط الرد والتأهيل والحجز والتذكير والمتابعة.", href: "/work#case-studies" },
  { n: "02", title: "من قرار التسمية إلى هوية Fine Jewelry متكاملة", text: "BITHAN: تموضع وتسمية وفحص، ثم اسم اختاره العميل وهوية عربية-إنجليزية كاملة بتطبيقات Premium.", href: "/work/bithan" },
  { n: "03", title: "قرارات استراتيجية قبل التنفيذ", text: "مشروعات تعرض كيف نفكر في التحدي والتموضع والتجربة قبل الوصول للشكل النهائي.", href: "/work#concept-work" },
];

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "هل ديوانك مناسبة للشركات الناشئة والمشروعات الصغيرة؟", "acceptedAnswer": { "@type": "Answer", "text": "نعم. نساعد الشركات الناشئة والصغيرة والمتوسطة، وكذلك الشركات القائمة التي تريد تطوير حضورها أو تحسين رحلة عملائها. نبدأ بفهم التحدي والموارد المتاحة، ثم نحدد نطاقًا يناسب مرحلة النشاط بدل افتراض أنه يحتاج منظومة كاملة." } },
    { "@type": "Question", "name": "هل أحتاج ميزانية تسويق كبيرة للعمل مع ديوانك؟", "acceptedAnswer": { "@type": "Answer", "text": "ليس بالضرورة. يمكن أن تبدأ بمشروع محدد، مثل الهوية أو صفحة هبوط أو حملة أو تحسين المتابعة. تختلف التكلفة بحسب المخرجات والتعقيد، ونوضح النطاق والتكلفة قبل بدء أي عمل مدفوع." } },
    {
      "@type": "Question",
      "name": "من أين أبدأ لتطوير نشاطي التجاري؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ابدأ من المشكلة الأقرب إلى الإيراد أو إلى فقدان العملاء. إذا كان الطلب ضعيفًا، نراجع الجذب. وإذا كانت الزيارات موجودة ولا تتحوّل إلى عملاء، نراجع العرض والموقع. وإذا كانت الاستفسارات تضيع، نراجع المتابعة والأتمتة."
      }
    },
    {
      "@type": "Question",
      "name": "هل أحتاج إلى أكثر من خدمة في البداية؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "لا. نختار معك خدمة محددة تعالج نقطة التعطّل الحالية ونوضح مخرجاتها، ثم نتوسع فقط عندما تظهر حاجة قابلة للقياس."
      }
    },
    {
      "@type": "Question",
      "name": "متى تكون أتمتة واتساب مناسبة لشركتي؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "عندما تتكرر الأسئلة نفسها والمتابعات والحجوزات، أو عندما تضيع فرص بسبب بطء الرد. عندها يمكن لواتساب وCRM والأتمتة أن تقلل العمل اليدوي وتوضح حالة كل عميل."
      }
    }
  ]
};

export default function Home() {
  return (
    <main className="studio-home home-conversion-page arabic-home-polish growth-home-experiment">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }} />
      <HomeSectionChoreography />

      <GrowthExperience locale="ar" whatsappHref={whatsappHref} />

      <section className="home-proof-hub shell" aria-labelledby="home-proof-title">
        <div className="home-proof-intro">
          <h2 id="home-proof-title">حالة تشغيل فعلية<br/><em>من الاستفسار إلى المتابعة</em></h2>
          <p>في مشروع فعلي بالقطاع الطبي، ربطنا التسويق بالمحادثة والحجز والمتابعة بدل ترك كل خطوة تعمل وحدها.</p>
          <div className="home-proof-actions"><Link href="/work#case-studies">شاهد دراسة الحالة كاملة <span>←</span></Link><Link href="/whatsapp-automation">استكشف أتمتة واتساب <span>←</span></Link></div>
        </div>
        <div className="proof-grid home-proof-metrics home-proof-operations">
          <article><strong>رد</strong><h3>تنظيم استفسارات واتساب</h3><p>ربط المحادثة ببيانات العميل داخل CRM.</p></article>
          <article><strong>حجز</strong><h3>مسار واضح للموعد</h3><p>ربط التأهيل بالحجز والتذكير.</p></article>
          <article><strong>متابعة</strong><h3>استمرار التواصل بعد الاستفسار</h3><p>تنظيم المتابعة وتسليم المحادثة للفريق.</p></article>
        </div>
        <p className="proof-note">المثال يوضح نطاق التنفيذ في مشروع سابق؛ لا يثبت نسبة تحسن أو يضمن نتيجة مماثلة.</p>
      </section>

      <section className="bento-section home-core-paths">
        <div className="shell">
          <div className="section-head"><div><span className="section-label">اختر نقطة البداية</span><h2>أربع بوابات<br/><em>ونظام واحد خلفها</em></h2></div><Link className="text-link" href="/services">استكشف كل الخدمات <span>←</span></Link></div>
          <HomeServiceExperience locale="ar" />
          <nav className="growth-shortcuts" aria-label="مسارات إضافية"><Link href="/services/social-media-content">إدارة المحتوى <span>↗</span></Link><Link href="/seo-aeo">SEO وAEO <span>↗</span></Link><Link href="/ai-automation">أتمتة الأعمال بالذكاء الاصطناعي <span>↗</span></Link></nav>
        </div>
      </section>

      <section className="home-work-preview shell" aria-labelledby="home-work-title">
        <div className="home-work-head"><div><h2 id="home-work-title">لا نعرض الشكل فقط<br/><em>نعرض القرار خلفه</em></h2></div><Link href="/work">شاهد صفحة الأعمال <span>←</span></Link></div>
        <div className="home-work-grid">
          {selectedWork.map((item, index) => <Link className="home-work-card" href={item.href} key={item.n}><img className="home-work-art" src={workImages[index]} alt="" width={index === 1 ? 1126 : 1200} height={index === 1 ? 1591 : 900} loading="lazy" decoding="async" /><h3>{item.title}</h3><p>{item.text}</p><span>شاهد المشروع ↗</span></Link>)}
        </div>
      </section>

      <div className="work-section shell home-trust-section"><HomeTestimonials locale="ar" /></div>

      <section className="method-section home-method-section">
        <div className="shell method-layout">
          <div className="method-intro"><span className="section-label">كيف نعمل</span><h2>أقل خطوات<br/><em>قرارات أوضح</em></h2><p>نبدأ بالمشكلة التجارية، ونربط ما تحتاجه من استراتيجية العلامة والمحتوى والإعلانات والموقع وSEO وواتساب وCRM في نطاق يمكن تنفيذه وقياسه.</p></div>
          <div className="method-list">
            {[["نفهم","السياق والجمهور ومكان التعطل."],["نحدد","الفرصة والرسالة والأولوية التجارية."],["نبني","البراند أو الموقع أو الحملة أو النظام المناسب."],["نقيس","نراجع ما يحدث ونحسن ما يصنع النتيجة."]].map(([t,p]) => <div key={t}><h3>{t}</h3><p>{p}</p></div>)}
          </div>
        </div>
      </section>

      <section className="home-selected-offers shell" aria-labelledby="home-offers-title">
        <div className="home-selected-offers-head"><div><span className="section-label">بدايات جاهزة</span><h2 id="home-offers-title">لو احتياجك واضح، ابدأ بنطاق محدد</h2></div></div>
        <HomeSelectedOffers />
        <div className="home-selected-offers-all"><Link href="/offers">استعرض كل العروض <span>←</span></Link></div>
      </section>

      <section className="faq-section shell" aria-labelledby="home-faq-title">
        <span className="section-label">قبل أن تبدأ</span>
        <h2 id="home-faq-title">خمسة أسئلة تختصر الطريق</h2>
        <div className="faq-grid">
          <details><summary>هل ديوانك مناسبة للشركات الناشئة والمشروعات الصغيرة؟</summary><p>نعم. نساعد الشركات الناشئة والصغيرة والمتوسطة، وكذلك الشركات القائمة التي تريد تطوير حضورها أو تحسين رحلة عملائها. نبدأ بفهم التحدي والموارد المتاحة، ثم نحدد نطاقًا يناسب مرحلة النشاط بدل افتراض أنه يحتاج منظومة كاملة.</p></details>
          <details><summary>هل أحتاج ميزانية تسويق كبيرة للعمل مع ديوانك؟</summary><p>ليس بالضرورة. يمكن أن تبدأ بمشروع محدد، مثل الهوية أو صفحة هبوط أو حملة أو تحسين المتابعة. تختلف التكلفة بحسب المخرجات والتعقيد، ونوضح النطاق والتكلفة قبل بدء أي عمل مدفوع.</p></details>
          <details><summary>من أين أبدأ لتطوير نشاطي التجاري؟</summary><p>ابدأ من المشكلة الأقرب إلى الإيراد أو إلى فقدان العملاء. إذا كان الطلب ضعيفًا، نراجع الجذب. وإذا كانت الزيارات موجودة ولا تتحوّل إلى عملاء، نراجع العرض والموقع. وإذا كانت الاستفسارات تضيع، نراجع المتابعة والأتمتة.</p></details>
          <details><summary>هل أحتاج إلى أكثر من خدمة في البداية؟</summary><p>لا. نفضّل البدء بأصغر نطاق يمكنه حل المشكلة الحالية وقياس أثره، ثم نضيف ما يلزم فقط عندما تظهر حاجة واضحة.</p></details>
          <details><summary>متى تكون أتمتة واتساب مناسبة لشركتي؟</summary><p>عندما تتكرر الأسئلة نفسها والمتابعات والحجوزات، أو عندما تضيع فرص بسبب بطء الرد. عندها يمكن لواتساب وCRM والأتمتة أن تقلل العمل اليدوي وتوضح حالة كل عميل.</p></details>
        </div>
      </section>

      <section className="final-cta shell home-final-conversion">
        <div><span className="section-label">الخطوة التالية</span><h2>أرسل نشاطك<br/><em>وقل لنا أين يتوقف النمو</em></h2></div>
        <div><p>بدل اختيار خدمة بالاسم، أرسل لنا نشاطك والتحدي الحالي وسنحدد معك أقصر نقطة بداية عملية.</p><div className="final-actions"><a className="button primary home-whatsapp-primary" href={whatsappHref} target="_blank" rel="noopener noreferrer">ابدأ على واتساب <span>↗</span></a><Link className="button secondary" href="/work">راجع الأعمال أولًا <span>←</span></Link></div><small className="cta-expectation">محادثة قصيرة لفهم المشروع وتحديد نقطة البداية المناسبة.</small></div>
      </section>
      <Footer />
    </main>
  );
}