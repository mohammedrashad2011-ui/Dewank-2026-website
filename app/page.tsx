import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "./lib/seo";
import { Footer, Header } from "./components/site-shell";
import MotionSystem from "./components/motion-system";
import HomeTestimonials from "./components/home-testimonials";
import HomeSelectedOffers from "./components/home-selected-offers";
import "./home-growth-upgrade.css";
import "./home-conversion-refinement.css";
import "./home-mobile-service-cards.css";

export const metadata: Metadata = createMetadata({
  title: "ديوانك | براند، تسويق، مواقع وأتمتة للشركات",
  description: "ديوانك يساعد الشركات في السعودية والخليج على بناء العلامة، جذب الطلب، تطوير المواقع، وتشغيل أتمتة واتساب وCRM ضمن منظومة نمو واحدة قابلة للقياس.",
  path: "/",
  keywords: ["شركة تسويق في السعودية", "إدارة Google Ads", "تصميم مواقع", "براندينج", "أتمتة واتساب", "أتمتة الذكاء الاصطناعي", "ديوانك"],
});

const whatsappHref = "https://wa.me/97339066649?text=" + encodeURIComponent("مرحبًا ديوانك، أريد مناقشة نمو مشروعي. النشاط: ");

const services = [
  {
    n: "01",
    title: "نجذب الطلب",
    en: "PAID GROWTH",
    text: "Google وMeta مع تتبع واضح، صفحات هبوط، وقرارات تحسين مبنية على التحويل وليس عدد النقرات.",
    tags: ["Google Ads", "Meta Ads", "Tracking"],
    tone: "growth",
    href: "/paid-ads",
  },
  {
    n: "02",
    title: "نبني المواقع",
    en: "WEB EXPERIENCES",
    text: "مواقع وصفحات هبوط سريعة تجمع الرسالة وSEO وCRO والتتبع لتقود الزائر نحو إجراء واضح.",
    tags: ["Web Design", "CRO", "SEO"],
    tone: "web",
    href: "/website-design",
  },
  {
    n: "03",
    title: "نبني البراند والمحتوى",
    en: "BRAND + CONTENT",
    text: "تموضع وهوية ومحتوى يجعل مشروعك أوضح في ذهن العميل وأكثر اتساقًا في كل نقطة تواصل.",
    tags: ["Branding", "Content", "Social"],
    tone: "brand",
    href: "/branding",
  },
  {
    n: "04",
    title: "نؤتمت المتابعة",
    en: "AI AUTOMATION",
    text: "واتساب وCRM وأتمتة ذكية تربط المحادثة بالتأهيل والحجز والمتابعة وتقلل العمل اليدوي.",
    tags: ["WhatsApp", "CRM", "AI"],
    tone: "automation",
    href: "/whatsapp-automation",
  },
];

const selectedWork = [
  { n: "01", label: "AUTOMATION", title: "من رسائل متفرقة إلى رحلة حجز قابلة للقياس", text: "نظام واتساب وCRM يربط الرد والتأهيل والحجز والتذكير والمتابعة.", href: "/work#case-studies" },
  { n: "02", label: "BRAND", title: "هويات بصرية لقطاعات مختلفة", text: "نماذج فعلية توضّح كيف يتحول التموضع إلى حضور بصري متماسك وقابل للتذكر.", href: "/work#brand-identities" },
  { n: "03", label: "STRATEGY", title: "قرارات استراتيجية قبل التنفيذ", text: "مشروعات تعرض كيف نفكر في التحدي والتموضع والتجربة قبل الوصول للشكل النهائي.", href: "/work#concept-work" },
];

export default function Home() {
  return (
    <main className="studio-home home-conversion-page">
      <Header />

      <section className="hybrid-hero shell">
        <div className="hero-copy">
          <div className="hero-meta"><span>DEWANK® CREATIVE GROWTH STUDIO</span><span>2026 / MENA</span></div>
          <h1><span>نصنع العلامة.</span><span>نحرّك الطلب.</span><span><em>ونؤتمت النمو.</em></span></h1>
          <p>ديوانك يجمع البراندينج والتسويق والمواقع والأتمتة في منظومة واحدة، حتى يعرف العميل لماذا يختارك، يصل إليك أسرع، ويتحرك نحو قرار واضح.</p>
          <div className="hero-actions">
            <a className="button primary home-whatsapp-primary" href={whatsappHref} target="_blank" rel="noopener noreferrer">أرسل نشاطك والتحدي الحالي <span>↗</span></a>
            <Link className="button secondary" href="/work">شاهد الأعمال والنتائج <span>←</span></Link>
          </div>
          <p className="cta-expectation">محادثة قصيرة لفهم المشروع وتحديد أفضل نقطة بداية، بدون التزام.</p>
        </div>

        <MotionSystem />
        <div className="hero-foot"><span>استراتيجية أولًا</span><span>تنفيذ له وظيفة</span><span>قياس قبل التوسع</span></div>
      </section>

      <section className="home-proof-hub shell" aria-labelledby="home-proof-title">
        <div className="home-proof-intro">
          <span className="section-label">دليل قبل الكلام</span>
          <h2 id="home-proof-title">النتيجة مهمة.<br/><em>وطريقة الوصول لها أهم.</em></h2>
          <p>في مشروع فعلي بالقطاع الطبي، ربطنا التسويق بالمحادثة والحجز والمتابعة بدل ترك كل خطوة تعمل وحدها.</p>
          <div className="home-proof-actions"><Link href="/work">شاهد دراسة الحالة كاملة <span>←</span></Link><Link href="/whatsapp-automation">استكشف أتمتة واتساب <span>←</span></Link></div>
        </div>
        <div className="proof-grid home-proof-metrics">
          <article><strong>+30%</strong><h3>تحسن تقريبي في التحويل إلى حجز</h3><p>رحلة أوضح من الاستفسار إلى الموعد.</p></article>
          <article><strong>+25</strong><h3>نقطة تقريبًا في معدل الحضور</h3><p>مع تذكير ومتابعة أكثر انتظامًا.</p></article>
          <article><strong>−40%</strong><h3>ضغط أقل تقريبًا على الاستقبال</h3><p>بعد أتمتة الردود والمهام المتكررة.</p></article>
        </div>
        <p className="proof-note">نتائج تشغيل فعلية تقريبية من مشروع سابق، وليست ضمانًا لنتيجة مماثلة. تختلف النتائج حسب النشاط والعرض والبيانات والتنفيذ.</p>
      </section>

      <section className="bento-section home-core-paths">
        <div className="shell">
          <div className="section-head"><div><span className="section-label">اختر نقطة البداية</span><h2>أربع بوابات.<br/><em>ونظام واحد خلفها.</em></h2></div><Link className="text-link" href="/services">استكشف كل الخدمات <span>←</span></Link></div>
          <div className="service-bento">
            {services.map((service) => (
              <Link id={`home-${service.tone}`} href={service.href} className={`service-card ${service.tone}`} key={service.n}>
                <div className="card-top"><span>{service.n}</span><small>{service.en}</small><b>↗</b></div>
                <div className={`service-symbol ${service.tone}`} aria-hidden="true"><i/><i/><i/></div>
                <div className="card-copy"><h3>{service.title}</h3><p>{service.text}</p><div className="tag-row">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
              </Link>
            ))}
          </div>
          <nav className="growth-shortcuts" aria-label="مسارات إضافية"><Link href="/services/social-media-content">إدارة المحتوى <span>↗</span></Link><Link href="/seo-aeo">SEO وAEO <span>↗</span></Link><Link href="/ai-automation">أتمتة الأعمال بالذكاء الاصطناعي <span>↗</span></Link></nav>
        </div>
      </section>

      <section className="home-work-preview shell" aria-labelledby="home-work-title">
        <div className="home-work-head"><div><span className="section-label">أعمال مختارة</span><h2 id="home-work-title">لا نعرض الشكل فقط.<br/><em>نعرض القرار خلفه.</em></h2></div><Link href="/work">شاهد صفحة الأعمال <span>←</span></Link></div>
        <div className="home-work-grid">
          {selectedWork.map((item) => <Link className="home-work-card" href={item.href} key={item.n}><small>{item.n} / {item.label}</small><h3>{item.title}</h3><p>{item.text}</p><span>شاهد المشروع ↗</span></Link>)}
        </div>
      </section>

      <div className="work-section shell home-trust-section"><HomeTestimonials /></div>

      <section className="method-section home-method-section">
        <div className="shell method-layout">
          <div className="method-intro"><span className="section-label">كيف نعمل</span><h2>أقل خطوات.<br/><em>قرارات أوضح.</em></h2><p>نبدأ بالمشكلة التجارية، ثم نحدد أقصر مسار يمكن تنفيذه وقياسه قبل إضافة أي طبقات لا تحتاجها.</p></div>
          <div className="method-list">
            {[["01","نفهم","السياق والجمهور ومكان التعطل."],["02","نحدد","الفرصة والرسالة والأولوية التجارية."],["03","نبني","البراند أو الموقع أو الحملة أو النظام المناسب."],["04","نقيس","نراجع ما يحدث ونحسن ما يصنع النتيجة."]].map(([n,t,p]) => <div key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></div>)}
          </div>
        </div>
      </section>

      <section className="home-growth-summary shell" aria-labelledby="home-growth-summary-title">
        <span className="section-label">منظومة ديوانك</span>
        <h2 id="home-growth-summary-title">من أول انطباع إلى متابعة ما بعد الاستفسار.</h2>
        <p>نربط استراتيجية العلامة والمحتوى والإعلانات والموقع وSEO وواتساب وCRM بحيث تخدم كل خطوة ما بعدها، بدل تشغيل خدمات متفرقة يصعب معرفة أثرها.</p>
        <div className="home-growth-links"><Link href="/branding">البراند <span>↗</span></Link><Link href="/paid-ads">الإعلانات <span>↗</span></Link><Link href="/website-design">المواقع <span>↗</span></Link><Link href="/whatsapp-automation">الأتمتة <span>↗</span></Link></div>
      </section>

      <section className="home-selected-offers shell" aria-labelledby="home-offers-title">
        <div className="home-selected-offers-head"><div><span className="section-label">بدايات جاهزة</span><h2 id="home-offers-title">لو احتياجك واضح، ابدأ بنطاق محدد.</h2></div></div>
        <HomeSelectedOffers />
        <div className="home-selected-offers-all"><Link href="/offers">استعرض كل العروض <span>←</span></Link></div>
      </section>

      <section className="faq-section shell" aria-labelledby="home-faq-title">
        <span className="section-label">قبل أن تبدأ</span>
        <h2 id="home-faq-title">ثلاثة أسئلة تختصر الطريق.</h2>
        <div className="faq-grid">
          <details><summary>أنا محتاج أبدأ بإيه؟</summary><p>ابدأ بالمشكلة الأقرب للإيراد أو فقدان العملاء. إذا كان الطلب ضعيفًا نراجع الجذب، وإذا الزيارات موجودة ولا تتحول نراجع العرض والموقع، وإذا الاستفسارات تضيع نراجع المتابعة والأتمتة.</p></details>
          <details><summary>هل لازم أطلب أكثر من خدمة؟</summary><p>لا. نفضل البدء بأصغر نطاق يمكنه حل المشكلة الحالية وقياس أثره، ثم نضيف ما يلزم فقط عندما تظهر حاجة واضحة.</p></details>
          <details><summary>متى تكون الأتمتة مناسبة؟</summary><p>عندما تتكرر نفس الأسئلة والمتابعات والحجوزات أو تضيع فرص بسبب بطء الرد. وقتها يمكن لواتساب وCRM والأتمتة أن تقلل العمل اليدوي وتوضح حالة كل عميل.</p></details>
        </div>
      </section>

      <section className="final-cta shell home-final-conversion">
        <div><span className="section-label">الخطوة التالية</span><h2>أرسل نشاطك.<br/><em>وقل لنا أين يتوقف النمو.</em></h2></div>
        <div><p>بدل اختيار خدمة بالاسم، أرسل لنا نشاطك والتحدي الحالي وسنحدد معك أقصر نقطة بداية عملية.</p><div className="final-actions"><a className="button primary home-whatsapp-primary" href={whatsappHref} target="_blank" rel="noopener noreferrer">ابدأ على واتساب <span>↗</span></a><Link className="button secondary" href="/work">راجع الأعمال أولًا <span>←</span></Link></div><small className="cta-expectation">محادثة قصيرة لفهم المشروع وتحديد نقطة البداية المناسبة.</small></div>
      </section>
      <Footer />
    </main>
  );
}