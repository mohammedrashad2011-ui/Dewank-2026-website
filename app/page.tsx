import type { Metadata } from "next";
import { createMetadata } from "./lib/seo";

export const metadata: Metadata = createMetadata({
  title: "ديوانك | حلول نمو ذكية للشركات",
  description: "ديوانك استوديو نمو إبداعي يخدم الشركات في السعودية والخليج عبر استراتيجية البراند، التسويق الرقمي، تصميم المواقع، SEO وأتمتة الذكاء الاصطناعي.",
  path: "/",
  keywords: ["شركة تسويق في السعودية", "براندينج", "تصميم مواقع", "أتمتة الذكاء الاصطناعي", "ديوانك"],
});
import Link from "next/link";
import { Footer, Header } from "./components/site-shell";
import MotionSystem from "./components/motion-system";
import HomeTestimonials from "./components/home-testimonials";

const services = [
  {
    n: "01",
    title: "نبني العلامة",
    en: "BRAND SYSTEMS",
    text: "استراتيجية وتموضع وهوية تجعل مشروعك واضحًا، متماسكًا، وصعب التقليد.",
    tags: ["Strategy", "Naming", "Identity"],
    tone: "brand",
    href: "/branding",
  },
  {
    n: "02",
    title: "نصنع الطلب",
    en: "DIGITAL GROWTH",
    text: "محتوى وحملات وتجارب رقمية تنقل العميل من الانتباه إلى القرار.",
    tags: ["Content", "Campaigns", "SEO + AEO"],
    tone: "growth",
    href: "/digital-marketing",
  },
  {
    n: "03",
    title: "نؤتمت النمو",
    en: "AI AUTOMATION",
    text: "أنظمة ذكية تربط التسويق والمبيعات والتشغيل وتستعيد وقت فريقك.",
    tags: ["WhatsApp", "CRM", "AI Agents"],
    tone: "automation",
    href: "/whatsapp-automation",
  },
  {
    n: "04",
    title: "نبني المواقع",
    en: "WEB EXPERIENCES",
    text: "مواقع سريعة ومتجاوبة تجمع الرسالة والتجربة وSEO وAEO لتقود الزائر نحو إجراء واضح.",
    tags: ["Web Design", "UX / CRO", "SEO + AEO"],
    tone: "web",
    href: "/website-design",
  },
];

export default function Home() {
  return (
    <main className="studio-home">
      <Header />

      <section className="hybrid-hero shell">
        <div className="hero-copy">
          <div className="hero-meta"><span>DEWANK® CREATIVE GROWTH STUDIO</span><span>2026 / MENA</span></div>
          <h1><span>نصنع العلامة.</span><span>نحرّك الطلب.</span><span><em>ونؤتمت النمو.</em></span></h1>
          <p>ديوانك يجمع البراندينج والتسويق والذكاء الاصطناعي في منظومة واحدة، لأن النمو لا يحتاج خدمات متفرقة—بل قرارات تعمل معًا.</p>
          <div className="hero-actions">
            <Link className="button primary" href="/contact">ناقش مشروعك معنا <span>←</span></Link>
            <a className="button whatsapp" href="https://wa.me/97339066649?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D9%85%D9%86%D8%A7%D9%82%D8%B4%D8%A9%20%D9%85%D8%B4%D8%B1%D9%88%D8%B9%D9%8A%20%D9%85%D8%B9%20%D8%AF%D9%8A%D9%88%D8%A7%D9%86%D9%83" target="_blank" rel="noopener noreferrer">تواصل عبر واتساب <span>↗</span></a>
            <Link className="text-link" href="/work">استكشف الأعمال <span>↙</span></Link>
          </div>
          <p className="cta-expectation">محادثة قصيرة لفهم مشروعك وتحديد أفضل نقطة بداية—بدون التزام.</p>
        </div>

        <MotionSystem />
        <div className="hero-foot"><span>استراتيجية أولًا</span><span>إبداع له وظيفة</span><span>تقنية تخدم الإنسان</span></div>
      </section>

      <section className="belief shell">
        <span className="section-label">[ ما نؤمن به ]</span>
        <h2>لا تحتاج إلى مزيد من الضجيج.<br/>تحتاج إلى علامة <em>تُفهم، تُذكر، وتتحرك.</em></h2>
        <p>لهذا لا نفصل الهوية عن التسويق، ولا نضيف الذكاء الاصطناعي كزينة. نبني رحلة واحدة من الفكرة إلى النتيجة.</p>
      </section>

      <section className="trust-strip shell" aria-label="منهج ديوانك">
        {["استراتيجية", "تنفيذ", "قياس", "أتمتة"].map((item, index) => <span key={item}><b>0{index + 1}</b>{item}</span>)}
      </section>

      <section className="proof-section shell" aria-labelledby="proof-title">
        <div className="proof-copy">
          <span className="section-label">[ نتائج من مشروع فعلي ]</span>
          <h2 id="proof-title">النمو لا يُقاس<br/><em>بالانطباع وحده.</em></h2>
          <p>نتائج تحققت بعد ربط التسويق والحجز والمتابعة الآلية في مشروع بالقطاع الطبي.</p>
        </div>
        <div className="proof-grid">
          <article><strong>+30%</strong><h3>تحسّن التحويل إلى حجز</h3><p>رحلة أسرع من الاستفسار إلى الموعد.</p></article>
          <article><strong>+25</strong><h3>نقطة تحسّن في الحضور</h3><p>بفضل التذكير والمتابعة المنظمة.</p></article>
          <article><strong>−40%</strong><h3>ضغط أقل على الاستقبال</h3><p>عبر أتمتة الردود والمهام المتكررة.</p></article>
        </div>
        <p className="proof-note">هذه نتائج مشروع سابق وليست ضمانًا لنتائج مماثلة؛ تختلف النتيجة حسب النشاط والبيانات والتنفيذ.</p>
      </section>

      <section className="bento-section">
        <div className="shell">
          <div className="section-head"><div><span className="section-label">[ ماذا نصنع ]</span><h2>أربع قدرات.<br/><em>منظومة واحدة.</em></h2></div><Link className="text-link" href="/services">كل الخدمات <span>↙</span></Link></div>
          <div className="service-bento">
            {services.map((service) => (
              <Link id={`home-${service.tone}`} href={service.href} className={`service-card ${service.tone}`} key={service.n}>
                <div className="card-top"><span>{service.n}</span><small>{service.en}</small><b>↗</b></div>
                <div className={`service-symbol ${service.tone}`} aria-hidden="true"><i/><i/><i/></div>
                <div className="card-copy"><h3>{service.title}</h3><p>{service.text}</p><div className="tag-row">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="work-section shell"><HomeTestimonials /></div>

      <section className="case-study shell" aria-labelledby="case-study-title">
        <div className="case-study-head">
          <span className="section-label">[ دراسة حالة مختصرة ]</span>
          <span className="case-sector">HEALTHCARE / GCC</span>
        </div>
        <div className="case-study-grid">
          <div>
            <h2 id="case-study-title">من رسائل متفرقة<br/>إلى <em>رحلة حجز مترابطة.</em></h2>
          </div>
          <div className="case-story">
            <article><b>01</b><h3>التحدي</h3><p>استفسارات كثيرة، متابعة يدوية، وضغط مستمر على فريق الاستقبال.</p></article>
            <article><b>02</b><h3>ما نفذناه</h3><p>ربط الردود والتأهيل والحجز والتذكير والمتابعة في نظام واحد.</p></article>
            <article><b>03</b><h3>الأثر</h3><p>تحويل أعلى، حضور أفضل، ووقت أكبر للفريق للتركيز على الحالات المهمة.</p></article>
          </div>
        </div>
        <Link className="text-link case-link" href="/whatsapp-automation">اكتشف نظام أتمتة واتساب <span>↙</span></Link>
      </section>

      <section className="method-section">
        <div className="shell method-layout">
          <div className="method-intro"><span className="section-label">[ كيف نعمل ]</span><h2>أقل خطوات.<br/><em>قرارات أوضح.</em></h2><p>لا طبقات إدارية، ولا حلول جاهزة. كل مرحلة تجيب عن سؤال حقيقي قبل الانتقال لما بعدها.</p></div>
          <div className="method-list">
            {[["01","نكتشف","السياق والجمهور والمشكلة الحقيقية."],["02","نحدّد","الفرصة والرسالة والأولوية التجارية."],["03","نصنع","نظامًا إبداعيًا قابلًا للتطبيق والنمو."],["04","نُحسّن","نقيس ونتعلم ونضاعف ما يصنع النتيجة."]].map(([n,t,p]) => <div key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></div>)}
          </div>
        </div>
      </section>

      <section className="seo-content shell" aria-labelledby="dewank-growth-title">
        <span className="section-label">[ DEWANK GROWTH SYSTEM ]</span>
        <h2 id="dewank-growth-title">من استراتيجية البراند إلى نظام نمو يعمل.</h2>
        <div className="seo-content-grid">
          <p>نساعد الشركات في السعودية والخليج على توضيح تموضعها، بناء هوية متماسكة، وتطوير حضور رقمي يحوّل الاهتمام إلى طلبات حقيقية. يبدأ العمل بفهم السوق والجمهور والعرض، ثم نربط الرسالة بالتصميم والمحتوى وتجربة الموقع.</p>
          <p>لا نتعامل مع التسويق والموقع والأتمتة كخدمات منفصلة. نبني بينها رحلة واحدة: إعلان أو محتوى يجذب العميل، صفحة توضّح القيمة، ونظام واتساب أو CRM يتابع المحادثة بسرعة ويقودها إلى الحجز أو البيع.</p>
          <p>تشمل خدمات ديوانك استراتيجية العلامة والتسمية والهوية البصرية، التسويق الرقمي، تصميم وتطوير المواقع، تحسين الظهور في محركات البحث، وأتمتة خدمة العملاء والمبيعات باستخدام الذكاء الاصطناعي.</p>
        </div>
      </section>

      <section className="faq-section shell" aria-labelledby="home-faq-title">
        <span className="section-label">[ أسئلة شائعة ]</span>
        <h2 id="home-faq-title">قبل أن نبدأ.</h2>
        <div className="faq-grid">
          <details><summary>هل تعملون مع الشركات داخل السعودية فقط؟</summary><p>نركز على السوق السعودي والخليجي، ويمكننا تنفيذ مشروعات عن بُعد لعلامات وشركات في أسواق أخرى عندما يكون نطاق العمل مناسبًا.</p></details>
          <details><summary>هل يمكن البدء بخدمة واحدة؟</summary><p>نعم، بالتأكيد. يمكنك البدء بخدمة واحدة حسب أولويتك وميزانيتك، مثل الهوية البصرية أو الموقع أو الأتمتة، ثم إضافة الخدمات الأخرى لاحقًا مع نمو مشروعك. وسنساعدك في اختيار أفضل نقطة بداية لتحقيق نتيجة واضحة من أول خطوة.</p></details>
          <details><summary>كيف يتم تحديد التكلفة؟</summary><p>تعتمد التكلفة على الهدف، حجم النطاق، عدد الصفحات أو الأنظمة المطلوبة، ومدة التنفيذ. بعد مراجعة المشروع نقدم نطاقًا واضحًا ومخرجات وجدولًا زمنيًا.</p></details>
        </div>
      </section>

      <section className="final-cta shell">
        <div><span className="section-label">[ مشروعك التالي ]</span><h2>لنصنع شيئًا<br/><em>يستحق الانتباه.</em></h2></div>
        <div><p>إذا كانت علامتك مستعدة لمرحلة أوضح وأذكى، فلنبدأ من التحدي الحقيقي.</p><div className="final-actions"><Link className="button primary" href="/contact">ناقش مشروعك معنا <span>←</span></Link><a className="button whatsapp" href="https://wa.me/97339066649?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D9%85%D9%86%D8%A7%D9%82%D8%B4%D8%A9%20%D9%85%D8%B4%D8%B1%D9%88%D8%B9%D9%8A%20%D9%85%D8%B9%20%D8%AF%D9%8A%D9%88%D8%A7%D9%86%D9%83" target="_blank" rel="noopener noreferrer">واتساب <span>↗</span></a></div><small className="cta-expectation">محادثة قصيرة لفهم المشروع وتحديد نقطة البداية المناسبة.</small></div>
      </section>
      <Footer />
    </main>
  );
}
