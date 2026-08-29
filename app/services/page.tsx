import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, organizationId, siteUrl } from "../lib/seo";
import { Footer, Header, PageHero } from "../components/site-shell";
import AiWorkflowVisual from "./ai-workflow-visual";
import "./ai-control-room.css";
import "./services-overview.css";
import "./services-conversion-hub.css";
import "./services-aeo-upgrade.css";

export const metadata: Metadata = createMetadata({
  title: "شركة تسويق ووكالة نمو رقمي في السعودية | ديوانك",
  description: "ديوانك شركة تسويق ووكالة نمو رقمي للشركات في السعودية والخليج، تجمع الاستراتيجية والمحتوى والإعلانات والمواقع وSEO والأتمتة في منظومة واحدة قابلة للقياس.",
  path: "/services",
  keywords: [
    "شركة تسويق",
    "وكالة تسويق",
    "شركة تسويق في السعودية",
    "وكالة تسويق في السعودية",
    "خدمات التسويق الرقمي في السعودية",
    "شركة تسويق رقمي في السعودية",
    "إدارة السوشيال ميديا",
    "صناعة المحتوى",
    "تصميم مواقع في السعودية",
    "إدارة Google Ads",
    "إدارة إعلانات ميتا",
    "SEO وAEO",
    "أتمتة واتساب وCRM",
    "حلول الذكاء الاصطناعي",
    "شركة براندينج",
  ],
});

type Service = {
  no: string;
  en: string;
  tone: string;
  visual: string;
  title: string;
  hook: string;
  text: string;
  tags: string[];
  href: string;
  cta?: string;
};

const services: Service[] = [
  { no: "01", en: "BRAND STRATEGY & IDENTITY", tone: "brand", visual: "brand", title: "علامتك لا تحتاج شعارًا آخر.", hook: "تحتاج سببًا يجعلها الاختيار.", text: "استراتيجية براند، تموضع، تسمية وهوية بصرية تجعل مشروعك أوضح وأسهل تذكّرًا وأكثر اتساقًا عبر كل نقطة تواصل.", tags: ["Strategy", "Positioning", "Identity"], href: "/branding" },
  { no: "02", en: "BRAND NAMING & AVAILABILITY RESEARCH", tone: "brand", visual: "name-monogram", title: "الاسم ليس مجرد كلمة.", hook: "هو أول قرار في العلامة.", text: "نطوّر أسماء مبنية على النشاط والجمهور والسوق، مع فحص لغوي وثقافي وبحث مبدئي عن العلامات المشابهة وتوفر الدومين وحسابات التواصل.", tags: ["Naming", "Research", "Domain"], href: "/services/brand-naming" },
  { no: "03", en: "SOCIAL MEDIA & CONTENT", tone: "growth", visual: "growth", title: "النشر المنتظم لا يكفي.", hook: "المحتوى يجب أن يبني طلبًا.", text: "إدارة محتوى السوشيال ميديا من الاستراتيجية والأفكار إلى التصميم والكابشنات وخطة النشر، ليظهر حسابك بصورة متناسقة ويقود العميل للخطوة التالية.", tags: ["Social Media", "Content", "Design"], href: "/services/social-media-content" },
  { no: "04", en: "DIGITAL MARKETING STRATEGY", tone: "growth", visual: "strategy-compass", title: "القنوات كثيرة.", hook: "لكن رحلة العميل واحدة.", text: "نبني استراتيجية تسويق رقمي تربط الرسالة والجمهور والقنوات والعرض والمتابعة، حتى تعمل الأنشطة المختلفة كمنظومة نمو واحدة.", tags: ["Strategy", "Journey", "Growth"], href: "/digital-marketing" },
  { no: "05", en: "META & GOOGLE ADS", tone: "growth", visual: "ad-signal", title: "الإعلان لا يصلح رحلة مكسورة.", hook: "نصلح المنظومة كلها.", text: "إدارة إعلانات Meta وGoogle بمنطق يربط الجمهور والإبداع والصفحة والتتبع والمتابعة لتقليل الهدر وزيادة التحويل.", tags: ["Meta Ads", "Google Ads", "CRO"], href: "/paid-ads" },
  { no: "06", en: "WEBSITE DESIGN & CRO", tone: "web", visual: "web", title: "موقعك ليس كتالوجًا.", hook: "هو موظف مبيعات لا ينام.", text: "مواقع سريعة ومتجاوبة تجمع الرسالة وتجربة المستخدم وSEO وAEO لتقود الزائر نحو تواصل أو حجز أو شراء واضح.", tags: ["UX/UI", "Web", "Conversion"], href: "/website-design" },
  { no: "07", en: "LANDING PAGES & SALES PAGES", tone: "web", visual: "conversion-funnel", title: "صفحة واحدة.", hook: "هدف واحد واضح.", text: "صفحات هبوط ومبيعات مخصصة للحملات والخدمات، تجمع النص التسويقي والتصميم والنموذج وواتساب والتتبع لتحويل الزيارة إلى استفسار.", tags: ["Landing Page", "Copy", "Leads"], href: "/offers/landing-page-package", cta: "شاهد عرض صفحة الهبوط" },
  { no: "08", en: "SEO & AEO", tone: "web", visual: "search", title: "لا يكفي أن تكون موجودًا.", hook: "كن الإجابة الأفضل.", text: "تحسين تقني ومحتوى وهيكلة وSchema تساعد Google ومحركات الإجابة والذكاء الاصطناعي على فهم خبرتك وإظهارها للجمهور المناسب.", tags: ["Technical SEO", "AEO", "Schema"], href: "/seo-aeo" },
  { no: "09", en: "ANALYTICS & CONVERSION TRACKING", tone: "web", visual: "analytics-bars", title: "الأرقام لا تعني شيئًا وحدها.", hook: "اربطها بالقرار.", text: "إعداد GA4 وGoogle Tag Manager والتحويلات ولوحات القياس لتحليل رحلة العميل، معرفة مصادر النتائج، وقياس العائد بدل الاكتفاء بالنقرات والوصول.", tags: ["GA4", "GTM", "ROI"], href: "/contact", cta: "اطلب إعداد التتبع" },
  { no: "10", en: "WHATSAPP AUTOMATION & CRM", tone: "automation", visual: "automation", title: "واتساب لا يرد فقط.", hook: "يفهم، يؤهّل، ويتابع.", text: "منظومة واتساب ذكية للرد والتأهيل والحجز والتذكير والمتابعة وربط المحادثات بنظام CRM واضح وقابل للقياس.", tags: ["WhatsApp", "CRM", "Follow-up"], href: "/whatsapp-automation" },
  { no: "11", en: "AI AUTOMATION", tone: "automation", visual: "ai", title: "لا تضف AI إلى الفوضى.", hook: "نظّم العملية ثم أتمتها.", text: "حلول أتمتة وذكاء اصطناعي تربط التسويق والمبيعات وخدمة العملاء والتشغيل لتقليل العمل اليدوي وتسريع القرار.", tags: ["AI Agents", "Workflows", "Integrations"], href: "/ai-automation" },
  { no: "12", en: "ATS CV & CAREER BRANDING", tone: "web career-card", visual: "document", title: "سيرتك ليست ورقة.", hook: "هي أول قرار قبل المقابلة.", text: "كتابة وتطوير سيرة ذاتية متوافقة مع ATS، مخصصة للوظيفة المستهدفة، مع تحسين الإنجازات والكلمات المفتاحية وLinkedIn.", tags: ["ATS CV", "LinkedIn", "Career Branding"], href: "/ats-cv" },
];

const primaryPaths = [
  { label: "جذب العملاء", title: "إدارة الإعلانات", text: "Google Ads وMeta Ads مع تتبع وتحسين التحويل بدل شراء نقرات فقط.", href: "/paid-ads", cta: "استكشف الإعلانات" },
  { label: "تحويل الزيارات", title: "تصميم المواقع", text: "موقع أو Landing Page يربط الرسالة والثقة وSEO والـCTA في رحلة واحدة.", href: "/website-design", cta: "استكشف المواقع" },
  { label: "إدارة الحضور", title: "المحتوى والسوشيال", text: "استراتيجية وأفكار وتصميم وكابشنات وخطة نشر تجعل الحساب أكثر اتساقًا ووضوحًا.", href: "/services/social-media-content", cta: "استكشف المحتوى" },
  { label: "تسريع المتابعة", title: "واتساب والأتمتة", text: "رد وتأهيل وحجز ومتابعة وربط CRM، ثم أتمتة أوسع عند الحاجة.", href: "/whatsapp-automation", cta: "استكشف الأتمتة" },
];

const faqItems = [
  ["هل ديوانك شركة تسويق أم وكالة متخصصة؟", "ديوانك شركة تسويق ووكالة نمو رقمي تعمل بنموذج متكامل: نحدد نقطة الاختناق أولًا، ثم نجمع التخصصات المطلوبة فقط من الاستراتيجية والمحتوى والإعلانات والمواقع والقياس والأتمتة."],
  ["ما خدمات ديوانك الأساسية؟", "تجمع ديوانك بين استراتيجية البراند وصناعة المحتوى والإعلانات وتصميم المواقع وصفحات الهبوط وSEO والتحليلات وأتمتة واتساب وحلول الذكاء الاصطناعي."],
  ["كيف أعرف الخدمة الأنسب لنشاطي؟", "ابدأ بالمشكلة الأقرب للنتيجة: جذب العملاء، تحويل الزيارات، انتظام المحتوى، أو بطء المتابعة. وإذا كانت المشكلة غير واضحة نراجع الرحلة ونقترح أصغر نطاق عملي."],
  ["هل يمكن البدء بخدمة واحدة فقط؟", "نعم. نحدد نقطة الاختناق الحالية ونقترح أصغر نطاق عملي يحقق نتيجة واضحة، ثم يمكن توسيع المنظومة لاحقًا."],
  ["هل تقدم ديوانك إدارة السوشيال ميديا وصناعة المحتوى؟", "نعم، وتشمل الاستراتيجية والأفكار والتصميم والكابشنات وخطة النشر، مع إمكانية البدء بباقة محتوى محددة لمدة شهر."],
  ["هل تشمل خدمات المواقع صفحات الهبوط؟", "نعم. نقدم مواقع متكاملة وصفحات هبوط مستقلة للحملات والخدمات، مع ربط واتساب والنماذج والتحليلات وتتبع التحويلات."],
];

export default function ServicesPage() {
  const whatsappHref = "https://wa.me/97339066649?text=" + encodeURIComponent("مرحبًا ديوانك، أريد تحديد الخدمة الأنسب لنشاطي. النشاط: ");
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/services#webpage`,
        url: `${siteUrl}/services`,
        name: "خدمات ديوانك",
        about: { "@id": organizationId },
        mainEntity: { "@id": `${siteUrl}/services#catalog` },
      },
      {
        "@type": "OfferCatalog",
        "@id": `${siteUrl}/services#catalog`,
        name: "خدمات ديوانك للتسويق والنمو والأتمتة",
        itemListElement: services.slice(0, 11).map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `${service.title} ${service.hook}`,
            url: `${siteUrl}${service.href}`,
            provider: { "@id": organizationId },
          },
        })),
      },
      {
        "@type": "ItemList",
        name: "كل خدمات ديوانك",
        itemListElement: services.map((service, index) => ({ "@type": "ListItem", position: index + 1, name: `${service.title} ${service.hook}`, url: `${siteUrl}${service.href}` })),
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
      },
    ],
  };

  const renderCard = (service: Service) => (
    <article className={`service-detail ${service.tone}`} key={service.no}>
      <div className="detail-top"><span>{service.no}</span><small>{service.en}</small></div>
      {service.visual === "ai" ? <AiWorkflowVisual /> : <div className={`service-symbol ${service.visual}`} aria-hidden="true"><i/><i/><i/></div>}
      <div className="detail-copy"><h2>{service.title}<br/><em>{service.hook}</em></h2><p>{service.text}</p><div className="tag-row">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
      <Link className="detail-link" href={service.href}>{service.cta || "اكتشف الخدمة"} <span>←</span></Link>
    </article>
  );

  return (
    <main className="inner-page services-page services-page-refined services-conversion-hub">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero eyebrow="خدمات ديوانك" title={<>لا تبدأ من اسم الخدمة.<br/><em>ابدأ من النتيجة التي تحتاجها.</em></>} text="إعلانات، مواقع، محتوى، براند وأتمتة تعمل كمنظومة واحدة. اختر نقطة الاختناق الحالية، وخذ أقصر طريق للخدمة المناسبة." />

      <section className="shell services-aeo-answer" aria-labelledby="services-aeo-title">
        <small>الإجابة السريعة</small>
        <h2 id="services-aeo-title">ماذا تقدم شركة ديوانك للتسويق؟</h2>
        <p>ديوانك شركة تسويق ووكالة نمو رقمي تخدم الشركات في السعودية والخليج. نجمع التسويق والويب والقياس والأتمتة في منظومة واحدة، لكن نقطة البداية تتحدد حسب المشكلة التي تمنع النمو الآن، لا حسب باقة ثابتة.</p>
        <div className="services-aeo-grid">
          <article><b>جذب العملاء</b><span>Google Ads وMeta Ads عندما تحتاج طلبًا أو Leads قابلة للقياس.</span></article>
          <article><b>تحويل الزيارات</b><span>مواقع وصفحات هبوط وCRO عندما يدخل الزائر ولا يتخذ خطوة.</span></article>
          <article><b>المحتوى والحضور</b><span>استراتيجية ومحتوى وتصميم عندما يكون الظهور غير منتظم أو غير مقنع.</span></article>
          <article><b>العلامة</b><span>تموضع وهوية وتسمية عندما يحتاج المشروع وضوحًا واتساقًا أكبر.</span></article>
          <article><b>الأتمتة والمتابعة</b><span>WhatsApp وCRM وAI عندما يتأخر الرد أو تضيع المتابعة والعملاء.</span></article>
        </div>
      </section>

      <section className="shell primary-service-paths" aria-labelledby="primary-paths-title">
        <div className="primary-paths-head"><span className="section-label">أسرع نقطة بداية</span><h2 id="primary-paths-title">أربع بوابات لمعظم مشاكل النمو.</h2><p>بدل استعراض قائمة طويلة، ابدأ بالنتيجة الأقرب لما تريد إصلاحه الآن.</p></div>
        <div className="primary-path-grid">{primaryPaths.map((path,index)=><Link href={path.href} className="primary-path-card" key={path.href}><small>0{index+1} · {path.label}</small><h3>{path.title}</h3><p>{path.text}</p><span>{path.cta} ↗</span></Link>)}</div>
        <p className="services-decision-note">قاعدة سريعة: تحتاج Leads؟ ابدأ بالإعلانات. الزيارات لا تتحول؟ ابدأ بالموقع. الرد والمتابعة يضيعان؟ ابدأ بواتساب وCRM. الحضور نفسه غير واضح؟ ابدأ بالمحتوى أو البراند.</p>
      </section>

      <section className="shell services-mid-cta" aria-label="تحديد الخدمة المناسبة">
        <div><small>غير متأكد من نقطة البداية؟</small><h2>أرسل النشاط والمشكلة فقط.</h2><p>نحدد لك أقرب مسار عملي بدل ما تبدأ بخدمة أكبر أو أعقد من احتياجك الحالي.</p></div>
        <a className="button primary" href={whatsappHref} target="_blank" rel="noopener noreferrer">حدد الخدمة على واتساب <span>↗</span></a>
      </section>

      <nav className="shell service-jump-nav" aria-label="كل مسارات الخدمات"><span>كل المسارات:</span><a href="#brand-services">العلامة</a><a href="#growth-services">المحتوى والنمو</a><a href="#web-services">الويب والقياس</a><a href="#automation-services">الأتمتة والذكاء</a></nav>

      <section id="brand-services" className="shell service-group" aria-labelledby="brand-title"><div className="service-group-head"><span className="section-label">العلامة</span><h2 id="brand-title">ابدأ بما يجعل اختيارك منطقيًا.</h2><p>نوضح من أنت، لمن تقدم القيمة، ولماذا يجب أن يتذكرك العميل.</p></div><div className="services-detail-bento services-grid-refined">{services.slice(0, 2).map(renderCard)}</div></section>
      <section id="growth-services" className="shell service-group" aria-labelledby="growth-title"><div className="service-group-head"><span className="section-label">المحتوى والنمو</span><h2 id="growth-title">حوّل الحضور إلى طلب حقيقي.</h2><p>نربط المحتوى والاستراتيجية والإعلانات حتى لا تعمل كل قناة في جزيرة منفصلة.</p></div><div className="services-detail-bento services-grid-refined">{services.slice(2, 5).map(renderCard)}</div></section>
      <section id="web-services" className="shell service-group" aria-labelledby="web-title"><div className="service-group-head"><span className="section-label">الويب والقياس</span><h2 id="web-title">اجعل كل زيارة قابلة للفهم والتحويل.</h2><p>نبني التجربة، نحسن الظهور، ونربط الأرقام بالنتيجة التجارية.</p></div><div className="services-detail-bento services-grid-refined">{services.slice(5, 9).map(renderCard)}</div></section>
      <section id="automation-services" className="shell service-group" aria-labelledby="automation-title"><div className="service-group-head"><span className="section-label">الأتمتة والذكاء</span><h2 id="automation-title">لا تترك العميل ينتظر النظام اليدوي.</h2><p>نربط الرد والتأهيل والمتابعة والبيانات لتعمل العمليات بسرعة واتساق.</p></div><div className="services-detail-bento services-grid-refined">{services.slice(9, 11).map(renderCard)}</div></section>
      <section className="shell service-group career-service-group" aria-labelledby="career-services-title"><div className="service-group-head"><span className="section-label">خدمة مهنية مستقلة</span><h2 id="career-services-title">خبرتك قوية. يجب أن تظهر كذلك.</h2></div><div className="services-detail-bento services-grid-refined career-service-last">{services.slice(11).map(renderCard)}</div></section>

      <section className="shell problem-chooser" aria-labelledby="problem-chooser-title"><div><span className="section-label">لو المشكلة لسه مش واضحة</span><h2 id="problem-chooser-title">قل لنا أين يتعطل العميل.<br/><em>ونبدأ من هناك.</em></h2></div><div className="problem-options"><Link href="/branding"><b>العلامة غير واضحة</b><span>استراتيجية البراند والهوية ←</span></Link><Link href="/paid-ads"><b>أحتاج عملاء أكثر</b><span>الإعلانات واكتساب العملاء ←</span></Link><Link href="/website-design"><b>الزيارات لا تتحول</b><span>الموقع وCRO والقياس ←</span></Link><Link href="/whatsapp-automation"><b>المتابعة بطيئة أو تضيع</b><span>واتساب وCRM والأتمتة ←</span></Link></div></section>

      <section className="seo-content shell services-faq" aria-labelledby="services-faq-title"><span className="section-label">أسئلة شائعة</span><h2 id="services-faq-title">صورة أوضح قبل أن تبدأ.</h2><div className="services-faq-list">{faqItems.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>

      <section className="fit-section shell services-final-cta"><div><span className="section-label">الخطوة التالية</span><h2>مش عارف تختار؟<br/><em>ابعت النشاط والمشكلة فقط.</em></h2></div><div className="fit-card"><p>نراجع أين توجد نقطة الاختناق ونرشح أصغر نطاق منطقي بدل تحميلك بخدمات أكبر من احتياجك الحالي.</p><a className="button primary" href={whatsappHref} target="_blank" rel="noopener noreferrer">حدد الخدمة على واتساب <span>↗</span></a></div></section>
      <Footer />
    </main>
  );
}
