import type { Metadata } from "next";
import { createMetadata } from "./lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Dewank Saudi Creative Growth Studio | Branding, Web & AI",
  description: "ديوانك استوديو نمو إبداعي يخدم الشركات في السعودية والخليج عبر استراتيجية البراند، التسويق الرقمي، تصميم المواقع، SEO وأتمتة الذكاء الاصطناعي.",
  path: "/",
  keywords: ["شركة تسويق في السعودية", "براندينج", "تصميم مواقع", "أتمتة الذكاء الاصطناعي", "ديوانك"],
});
import Link from "next/link";
import { Footer, Header } from "./components/site-shell";
import MotionSystem from "./components/motion-system";

const services = [
  {
    n: "01",
    title: "نبني العلامة",
    en: "BRAND SYSTEMS",
    text: "استراتيجية وتموضع وهوية تجعل مشروعك واضحًا، متماسكًا، وصعب التقليد.",
    tags: ["Strategy", "Naming", "Identity"],
    tone: "brand",
  },
  {
    n: "02",
    title: "نصنع الطلب",
    en: "DIGITAL GROWTH",
    text: "محتوى وحملات وتجارب رقمية تنقل العميل من الانتباه إلى القرار.",
    tags: ["Content", "Campaigns", "SEO + AEO"],
    tone: "growth",
  },
  {
    n: "03",
    title: "نؤتمت النمو",
    en: "AI AUTOMATION",
    text: "أنظمة ذكية تربط التسويق والمبيعات والتشغيل وتستعيد وقت فريقك.",
    tags: ["WhatsApp", "CRM", "AI Agents"],
    tone: "automation",
  },
  {
    n: "04",
    title: "نبني المواقع",
    en: "WEB EXPERIENCES",
    text: "مواقع سريعة ومتجاوبة تجمع الرسالة والتجربة وSEO وAEO لتقود الزائر نحو إجراء واضح.",
    tags: ["Web Design", "UX / CRO", "SEO + AEO"],
    tone: "web",
  },
];

const projects = [
  { n: "01", sector: "LUXURY HOSPITALITY / ALULA", title: "NOMAÏ", subtitle: "Stay beyond time", tone: "nomai" },
  { n: "02", sector: "ARCHITECTURE / COPENHAGEN", title: "KOVA", subtitle: "Form follows feeling", tone: "kova" },
  { n: "03", sector: "SKINCARE / PARIS", title: "LUME", subtitle: "Proof over promises", tone: "lume" },
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
            <Link className="button primary" href="/contact">ابدأ مشروعك <span>←</span></Link>
            <Link className="text-link" href="/work">استكشف الأعمال <span>↙</span></Link>
          </div>
        </div>

        <MotionSystem />
        <div className="hero-foot"><span>استراتيجية أولًا</span><span>إبداع له وظيفة</span><span>تقنية تخدم الإنسان</span></div>
      </section>

      <section className="belief shell">
        <span className="section-label">[ ما نؤمن به ]</span>
        <h2>لا تحتاج إلى مزيد من الضجيج.<br/>تحتاج إلى علامة <em>تُفهم، تُذكر، وتتحرك.</em></h2>
        <p>لهذا لا نفصل الهوية عن التسويق، ولا نضيف الذكاء الاصطناعي كزينة. نبني رحلة واحدة من الفكرة إلى النتيجة.</p>
      </section>

      <section className="bento-section">
        <div className="shell">
          <div className="section-head"><div><span className="section-label">[ ماذا نصنع ]</span><h2>أربع قدرات.<br/><em>منظومة واحدة.</em></h2></div><Link className="text-link" href="/services">كل الخدمات <span>↙</span></Link></div>
          <div className="service-bento">
            {services.map((service) => (
              <Link id={`home-${service.tone}`} href={service.tone === "automation" ? "/whatsapp-automation" : service.tone === "web" ? "/services#web" : "/services"} className={`service-card ${service.tone}`} key={service.n}>
                <div className="card-top"><span>{service.n}</span><small>{service.en}</small><b>↗</b></div>
                <div className={`service-symbol ${service.tone}`} aria-hidden="true"><i/><i/><i/></div>
                <div className="card-copy"><h3>{service.title}</h3><p>{service.text}</p><div className="tag-row">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="work-section shell">
        <div className="section-head"><div><span className="section-label">[ أعمال مختارة ]</span><h2>هويات لها عالم.<br/><em>لا مجرد شعار.</em></h2></div><Link className="text-link" href="/work">شاهد كل الأعمال <span>↙</span></Link></div>
        <div className="project-bento">
          {projects.map((project) => (
            <Link href="/work" className={`project-card ${project.tone}`} key={project.n} dir="ltr">
              <div className="project-meta"><span>{project.n}</span><small>{project.sector}</small><b>↗</b></div>
              <div className="project-art" aria-hidden="true"><span>{project.title.charAt(0)}</span><i>{project.title}</i></div>
              <div className="project-name"><h3>{project.title}</h3><p>{project.subtitle}</p></div>
            </Link>
          ))}
        </div>
        <p className="concept-line">الأعمال المعروضة مشروعات مفاهيمية أصلية توضح مستوى التفكير والتنفيذ الإبداعي في ديوانك.</p>
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
          <details><summary>هل يمكن البدء بخدمة واحدة؟</summary><p>نعم. يمكن البدء بالهوية أو الموقع أو الأتمتة، لكننا نراجع دائمًا كيف ستتصل الخدمة بباقي رحلة العميل حتى لا تكون النتيجة معزولة.</p></details>
          <details><summary>كيف يتم تحديد التكلفة؟</summary><p>تعتمد التكلفة على الهدف، حجم النطاق، عدد الصفحات أو الأنظمة المطلوبة، ومدة التنفيذ. بعد مراجعة المشروع نقدم نطاقًا واضحًا ومخرجات وجدولًا زمنيًا.</p></details>
        </div>
      </section>

      <section className="final-cta shell">
        <div><span className="section-label">[ مشروعك التالي ]</span><h2>لنصنع شيئًا<br/><em>يستحق الانتباه.</em></h2></div>
        <div><p>إذا كانت علامتك مستعدة لمرحلة أوضح وأذكى، فلنبدأ من التحدي الحقيقي.</p><Link className="button primary" href="/contact">ابدأ المحادثة <span>←</span></Link></div>
      </section>
      <Footer />
    </main>
  );
}
