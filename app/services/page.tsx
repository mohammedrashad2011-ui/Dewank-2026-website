import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "../lib/seo";
import { Footer, Header, PageHero } from "../components/site-shell";
import AiWorkflowVisual from "./ai-workflow-visual";
import "./ai-control-room.css";
import "./services-overview.css";

export const metadata: Metadata = createMetadata({
  title: "خدمات ديوانك | براندينج، محتوى، إعلانات، مواقع وأتمتة",
  description: "خدمات ديوانك للشركات في السعودية والخليج: استراتيجية البراند، إدارة السوشيال ميديا وصناعة المحتوى، الإعلانات، صفحات الهبوط، المواقع، SEO وAEO، التحليلات، أتمتة واتساب وحلول الذكاء الاصطناعي.",
  path: "/services",
  keywords: [
    "خدمات التسويق الرقمي في السعودية",
    "إدارة السوشيال ميديا",
    "صناعة المحتوى",
    "تصميم صفحة هبوط",
    "شركة براندينج",
    "إدارة إعلانات ميتا وجوجل",
    "تحليلات التسويق وتتبع التحويلات",
    "SEO وAEO",
    "أتمتة واتساب وCRM",
    "حلول الذكاء الاصطناعي",
    "كتابة سيرة ذاتية ATS",
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
  {
    no: "01",
    en: "BRAND STRATEGY & IDENTITY",
    tone: "brand",
    visual: "brand",
    title: "علامتك لا تحتاج شعارًا آخر.",
    hook: "تحتاج سببًا يجعلها الاختيار.",
    text: "استراتيجية براند، تموضع، تسمية وهوية بصرية تجعل مشروعك أوضح وأسهل تذكّرًا وأكثر اتساقًا عبر كل نقطة تواصل.",
    tags: ["Strategy", "Positioning", "Identity"],
    href: "/branding",
  },
  {
    no: "02",
    en: "BRAND NAMING & AVAILABILITY RESEARCH",
    tone: "brand",
    visual: "name-monogram",
    title: "الاسم ليس مجرد كلمة.",
    hook: "هو أول قرار في العلامة.",
    text: "نطوّر أسماء مبنية على النشاط والجمهور والسوق، مع فحص لغوي وثقافي وبحث مبدئي عن العلامات المشابهة وتوفر الدومين وحسابات التواصل.",
    tags: ["Naming", "Research", "Domain"],
    href: "/services/brand-naming",
  },
  {
    no: "03",
    en: "SOCIAL MEDIA & CONTENT",
    tone: "growth",
    visual: "growth",
    title: "النشر المنتظم لا يكفي.",
    hook: "المحتوى يجب أن يبني طلبًا.",
    text: "إدارة محتوى السوشيال ميديا من الاستراتيجية والأفكار إلى التصميم والكابشنات وخطة النشر، ليظهر حسابك بصورة متناسقة ويقود العميل للخطوة التالية.",
    tags: ["Social Media", "Content", "Design"],
    href: "/offers/30-day-content-package",
    cta: "شاهد باقة المحتوى",
  },
  {
    no: "04",
    en: "DIGITAL MARKETING STRATEGY",
    tone: "growth",
    visual: "strategy-compass",
    title: "القنوات كثيرة.",
    hook: "لكن رحلة العميل واحدة.",
    text: "نبني استراتيجية تسويق رقمي تربط الرسالة والجمهور والقنوات والعرض والمتابعة، حتى تعمل الأنشطة المختلفة كمنظومة نمو واحدة.",
    tags: ["Strategy", "Journey", "Growth"],
    href: "/digital-marketing",
  },
  {
    no: "05",
    en: "META & GOOGLE ADS",
    tone: "growth",
    visual: "ad-signal",
    title: "الإعلان لا يصلح رحلة مكسورة.",
    hook: "نصلح المنظومة كلها.",
    text: "إدارة إعلانات Meta وGoogle بمنطق يربط الجمهور والإبداع والصفحة والتتبع والمتابعة لتقليل الهدر وزيادة التحويل.",
    tags: ["Meta Ads", "Google Ads", "CRO"],
    href: "/paid-ads",
  },
  {
    no: "06",
    en: "WEBSITE DESIGN & CRO",
    tone: "web",
    visual: "web",
    title: "موقعك ليس كتالوجًا.",
    hook: "هو موظف مبيعات لا ينام.",
    text: "مواقع سريعة ومتجاوبة تجمع الرسالة وتجربة المستخدم وSEO وAEO لتقود الزائر نحو تواصل أو حجز أو شراء واضح.",
    tags: ["UX/UI", "Web", "Conversion"],
    href: "/website-design",
  },
  {
    no: "07",
    en: "LANDING PAGES & SALES PAGES",
    tone: "web",
    visual: "conversion-funnel",
    title: "صفحة واحدة.",
    hook: "هدف واحد واضح.",
    text: "صفحات هبوط ومبيعات مخصصة للحملات والخدمات، تجمع النص التسويقي والتصميم والنموذج وواتساب والتتبع لتحويل الزيارة إلى استفسار.",
    tags: ["Landing Page", "Copy", "Leads"],
    href: "/offers/landing-page-package",
    cta: "شاهد عرض صفحة الهبوط",
  },
  {
    no: "08",
    en: "SEO & AEO",
    tone: "web",
    visual: "search",
    title: "لا يكفي أن تكون موجودًا.",
    hook: "كن الإجابة الأفضل.",
    text: "تحسين تقني ومحتوى وهيكلة وSchema تساعد Google ومحركات الإجابة والذكاء الاصطناعي على فهم خبرتك وإظهارها للجمهور المناسب.",
    tags: ["Technical SEO", "AEO", "Schema"],
    href: "/seo-aeo",
  },
  {
    no: "09",
    en: "ANALYTICS & CONVERSION TRACKING",
    tone: "web",
    visual: "analytics-bars",
    title: "الأرقام لا تعني شيئًا وحدها.",
    hook: "اربطها بالقرار.",
    text: "إعداد GA4 وGoogle Tag Manager والتحويلات ولوحات القياس لتحليل رحلة العميل، معرفة مصادر النتائج، وقياس العائد بدل الاكتفاء بالنقرات والوصول.",
    tags: ["GA4", "GTM", "ROI"],
    href: "/contact",
    cta: "اطلب إعداد التتبع",
  },
  {
    no: "10",
    en: "WHATSAPP AUTOMATION & CRM",
    tone: "automation",
    visual: "automation",
    title: "واتساب لا يرد فقط.",
    hook: "يفهم، يؤهّل، ويتابع.",
    text: "منظومة واتساب ذكية للرد والتأهيل والحجز والتذكير والمتابعة وربط المحادثات بنظام CRM واضح وقابل للقياس.",
    tags: ["WhatsApp", "CRM", "Follow-up"],
    href: "/whatsapp-automation",
  },
  {
    no: "11",
    en: "AI AUTOMATION",
    tone: "automation",
    visual: "ai",
    title: "لا تضف AI إلى الفوضى.",
    hook: "نظّم العملية ثم أتمتها.",
    text: "حلول أتمتة وذكاء اصطناعي تربط التسويق والمبيعات وخدمة العملاء والتشغيل لتقليل العمل اليدوي وتسريع القرار.",
    tags: ["AI Agents", "Workflows", "Integrations"],
    href: "/ai-automation",
  },
  {
    no: "12",
    en: "ATS CV & CAREER BRANDING",
    tone: "web career-card",
    visual: "document",
    title: "سيرتك ليست ورقة.",
    hook: "هي أول قرار قبل المقابلة.",
    text: "كتابة وتطوير سيرة ذاتية متوافقة مع ATS، مخصصة للوظيفة المستهدفة، مع تحسين الإنجازات والكلمات المفتاحية وLinkedIn.",
    tags: ["ATS CV", "LinkedIn", "Career Branding"],
    href: "/ats-cv",
  },
];

const faqItems = [
  ["ما خدمات ديوانك الأساسية؟", "تجمع ديوانك بين استراتيجية البراند وصناعة المحتوى والإعلانات وتصميم المواقع وصفحات الهبوط وSEO والتحليلات وأتمتة واتساب وحلول الذكاء الاصطناعي."],
  ["هل يمكن البدء بخدمة واحدة فقط؟", "نعم. نحدد نقطة الاختناق الحالية ونقترح أصغر نطاق عملي يحقق نتيجة واضحة، ثم يمكن توسيع المنظومة لاحقًا."],
  ["هل تقدم ديوانك إدارة السوشيال ميديا وصناعة المحتوى؟", "نعم، وتشمل الاستراتيجية والأفكار والتصميم والكابشنات وخطة النشر، مع إمكانية البدء بباقة محتوى محددة لمدة شهر."],
  ["هل تشمل خدمات المواقع صفحات الهبوط؟", "نعم. نقدم مواقع متكاملة وصفحات هبوط مستقلة للحملات والخدمات، مع ربط واتساب والنماذج والتحليلات وتتبع التحويلات."],
  ["هل خدمات السيرة الذاتية جزء من خدمات الشركات؟", "لا. خدمة ATS CV خدمة مهنية مستقلة للأفراد، وتظهر كآخر خدمة في قائمة الخدمات مع فصل بصري واضح."],
];

export default function ServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "خدمات ديوانك",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${service.title} ${service.hook}`,
      url: `https://dewank.com${service.href}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  const renderCard = (service: Service) => (
    <article className={`service-detail ${service.tone}`} key={service.no}>
      <div className="detail-top"><span>{service.no}</span><small>{service.en}</small></div>
      {service.visual === "ai" ? (
        <AiWorkflowVisual />
      ) : (
        <div className={`service-symbol ${service.visual}`} aria-hidden="true"><i/><i/><i/></div>
      )}
      <div className="detail-copy">
        <h2>{service.title}<br/><em>{service.hook}</em></h2>
        <p>{service.text}</p>
        <div className="tag-row">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </div>
      <Link className="detail-link" href={service.href}>{service.cta || "اكتشف الخدمة"} <span>←</span></Link>
    </article>
  );

  return (
    <main className="inner-page services-page services-page-refined">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageHero
        eyebrow="خدمات ديوانك"
        title={<>كل ما يحتاجه نموك.<br/><em>في منظومة واحدة.</em></>}
        text="من وضوح العلامة وصناعة المحتوى إلى جذب العملاء وتحويلهم ومتابعتهم. اختر المشكلة التي تريد حلها، وستجد المسار المناسب دون زحام أو خدمات غامضة."
      />

      <nav className="shell service-jump-nav" aria-label="اختر نقطة البداية">
        <span>ابدأ من احتياجك:</span>
        <a href="#brand-services">أريد علامة أوضح</a>
        <a href="#growth-services">أريد طلبًا وعملاء</a>
        <a href="#web-services">أريد موقعًا يحوّل</a>
        <a href="#automation-services">أريد متابعة وأتمتة</a>
      </nav>

      <section id="brand-services" className="shell service-group" aria-labelledby="brand-title">
        <div className="service-group-head"><span className="section-label">[ العلامة ]</span><h2 id="brand-title">ابدأ بما يجعل اختيارك منطقيًا.</h2><p>نوضح من أنت، لمن تقدم القيمة، ولماذا يجب أن يتذكرك العميل.</p></div>
        <div className="services-detail-bento services-grid-refined">{services.slice(0, 2).map(renderCard)}</div>
      </section>

      <section id="growth-services" className="shell service-group" aria-labelledby="growth-title">
        <div className="service-group-head"><span className="section-label">[ المحتوى والنمو ]</span><h2 id="growth-title">حوّل الحضور إلى طلب حقيقي.</h2><p>نربط المحتوى والاستراتيجية والإعلانات حتى لا تعمل كل قناة في جزيرة منفصلة.</p></div>
        <div className="services-detail-bento services-grid-refined">{services.slice(2, 5).map(renderCard)}</div>
      </section>

      <section id="web-services" className="shell service-group" aria-labelledby="web-title">
        <div className="service-group-head"><span className="section-label">[ الويب والقياس ]</span><h2 id="web-title">اجعل كل زيارة قابلة للفهم والتحويل.</h2><p>نبني التجربة، نحسن الظهور، ونربط الأرقام بالنتيجة التجارية.</p></div>
        <div className="services-detail-bento services-grid-refined">{services.slice(5, 9).map(renderCard)}</div>
      </section>

      <section id="automation-services" className="shell service-group" aria-labelledby="automation-title">
        <div className="service-group-head"><span className="section-label">[ الأتمتة والذكاء ]</span><h2 id="automation-title">لا تترك العميل ينتظر النظام اليدوي.</h2><p>نربط الرد والتأهيل والمتابعة والبيانات لتعمل العمليات بسرعة واتساق.</p></div>
        <div className="services-detail-bento services-grid-refined">{services.slice(9, 11).map(renderCard)}</div>
      </section>

      <section className="shell service-group career-service-group" aria-labelledby="career-services-title">
        <div className="service-group-head"><span className="section-label">[ خدمة مهنية مستقلة ]</span><h2 id="career-services-title">خبرتك قوية. يجب أن تظهر كذلك.</h2><p>خدمة منفصلة للأفراد، لكنها تظل آخر خدمة في القائمة وليست نهاية الصفحة.</p></div>
        <div className="services-detail-bento services-grid-refined career-service-last">{services.slice(11).map(renderCard)}</div>
      </section>

      <section className="shell problem-chooser" aria-labelledby="problem-chooser-title">
        <div><span className="section-label">[ لا تعرف من أين تبدأ؟ ]</span><h2 id="problem-chooser-title">اختر المشكلة.<br/><em>نقترح أصغر حل مفيد.</em></h2></div>
        <div className="problem-options">
          <Link href="/branding"><b>العلامة غير واضحة</b><span>استراتيجية البراند والهوية ←</span></Link>
          <Link href="/offers/30-day-content-package"><b>الحساب لا ينشر باستمرار</b><span>صناعة المحتوى والسوشيال ←</span></Link>
          <Link href="/offers/landing-page-package"><b>الزيارات لا تتحول</b><span>صفحة هبوط وتحسين التحويل ←</span></Link>
          <Link href="/whatsapp-automation"><b>المتابعة بطيئة أو تضيع</b><span>واتساب وCRM والأتمتة ←</span></Link>
        </div>
      </section>

      <section className="seo-content shell services-faq" aria-labelledby="services-faq-title">
        <span className="section-label">[ أسئلة شائعة ]</span>
        <h2 id="services-faq-title">صورة أوضح قبل أن تبدأ.</h2>
        <div className="services-faq-list">{faqItems.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="fit-section shell services-final-cta">
        <div><span className="section-label">[ الخطوة التالية ]</span><h2>لا تشترِ خدمة أكبر.<br/><em>حل الاختناق أولًا.</em></h2></div>
        <div className="fit-card"><p>في جلسة اكتشاف قصيرة نحدد المشكلة والنتيجة المطلوبة وأصغر نطاق يصنع فرقًا حقيقيًا، ثم نقترح المسار المناسب دون تضخيم غير ضروري.</p><Link className="button primary" href="/contact">ناقش مشروعك <span>←</span></Link></div>
      </section>
      <Footer />
    </main>
  );
}
