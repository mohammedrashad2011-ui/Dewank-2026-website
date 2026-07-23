import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "../lib/seo";
import { Footer, Header, PageHero } from "../components/site-shell";

export const metadata: Metadata = createMetadata({
  title: "خدمات ديوانك | براندينج، تسويق، مواقع وأتمتة AI",
  description: "اكتشف خدمات ديوانك للشركات في السعودية والخليج: استراتيجية البراند، التسويق الرقمي، الإعلانات، تصميم المواقع، SEO وAEO، أتمتة الذكاء الاصطناعي وخدمات ATS CV.",
  path: "/services",
  keywords: ["خدمات التسويق الرقمي", "شركة براندينج في السعودية", "تصميم مواقع", "إدارة إعلانات ميتا", "SEO وAEO", "أتمتة الذكاء الاصطناعي", "كتابة سيرة ذاتية ATS"],
});

const services = [
  {
    no: "01",
    en: "BRAND STRATEGY & IDENTITY",
    tone: "brand",
    title: "علامتك لا تحتاج شعارًا آخر.",
    hook: "تحتاج سببًا يجعلها الاختيار.",
    text: "استراتيجية براند، تموضع، تسمية وهوية بصرية تجعل مشروعك أوضح وأسهل تذكّرًا وأكثر اتساقًا عبر كل نقطة تواصل.",
    tags: ["Strategy", "Naming", "Identity"],
    href: "/branding",
  },
  {
    no: "02",
    en: "DIGITAL MARKETING",
    tone: "growth",
    title: "المحتوى يلفت النظر.",
    hook: "الاستراتيجية تحرّك القرار.",
    text: "نربط الرسالة بالقناة ورحلة العميل لبناء حضور رقمي يصنع طلبًا حقيقيًا بدل نشر محتوى جميل بلا أثر تجاري واضح.",
    tags: ["Content", "Journey", "Growth"],
    href: "/digital-marketing",
  },
  {
    no: "03",
    en: "META & GOOGLE ADS",
    tone: "growth",
    title: "الإعلان لا يصلح رحلة مكسورة.",
    hook: "نصلح المنظومة كلها.",
    text: "إدارة إعلانات Meta وGoogle بمنطق يربط الجمهور والإبداع والصفحة والتتبع والمتابعة لتقليل الهدر وزيادة التحويل.",
    tags: ["Meta Ads", "Google Ads", "CRO"],
    href: "/paid-ads",
  },
  {
    no: "04",
    en: "WEBSITE DESIGN & CRO",
    tone: "web",
    title: "موقعك ليس كتالوجًا.",
    hook: "هو موظف مبيعات لا ينام.",
    text: "مواقع سريعة ومتجاوبة تجمع الرسالة وتجربة المستخدم وSEO وAEO لتقود الزائر نحو تواصل أو حجز أو شراء واضح.",
    tags: ["UX/UI", "Web", "Conversion"],
    href: "/website-design",
  },
  {
    no: "05",
    en: "SEO & AEO",
    tone: "web",
    title: "لا يكفي أن تكون موجودًا.",
    hook: "كن الإجابة الأفضل.",
    text: "تحسين تقني ومحتوى وهيكلة وSchema تساعد Google ومحركات الإجابة والذكاء الاصطناعي على فهم خبرتك وإظهارها للجمهور المناسب.",
    tags: ["Technical SEO", "AEO", "Schema"],
    href: "/seo-aeo",
  },
  {
    no: "06",
    en: "WHATSAPP AUTOMATION & CRM",
    tone: "automation",
    title: "واتساب لا يرد فقط.",
    hook: "يفهم، يؤهّل، ويتابع.",
    text: "منظومة واتساب ذكية للرد والتأهيل والحجز والتذكير والمتابعة وربط المحادثات بنظام CRM واضح وقابل للقياس.",
    tags: ["WhatsApp", "CRM", "Follow-up"],
    href: "/whatsapp-automation",
  },
  {
    no: "07",
    en: "AI AUTOMATION",
    tone: "automation",
    title: "لا تضف AI إلى الفوضى.",
    hook: "نظّم العملية ثم أتمتها.",
    text: "حلول أتمتة وذكاء اصطناعي تربط التسويق والمبيعات وخدمة العملاء والتشغيل لتقليل العمل اليدوي وتسريع القرار.",
    tags: ["AI Agents", "Workflows", "Integrations"],
    href: "/ai-automation",
  },
];

const careerServices = [
  {
    no: "C01",
    en: "ATS CV & CAREER BRANDING",
    tone: "web",
    title: "سيرتك ليست ورقة.",
    hook: "هي أول قرار قبل المقابلة.",
    text: "كتابة وتطوير سيرة ذاتية متوافقة مع ATS، مخصصة للوظيفة المستهدفة، مع تحسين الإنجازات والكلمات المفتاحية وLinkedIn.",
    tags: ["ATS CV", "LinkedIn", "Career Branding"],
    href: "/ats-cv",
  },
];

export default function ServicesPage() {
  const allServices = [...services, ...careerServices];
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Dewank Services",
    itemListElement: allServices.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: `https://dewank.com${service.href}`,
    })),
  };

  const renderCard = (service: (typeof allServices)[number]) => (
    <article className={`service-detail ${service.tone}`} key={service.href}>
      <div className="detail-top"><span>{service.no}</span><small>{service.en}</small></div>
      <div className={`service-symbol ${service.tone}`} aria-hidden="true"><i/><i/><i/></div>
      <div className="detail-copy">
        <h2>{service.title}<br/><em>{service.hook}</em></h2>
        <p>{service.text}</p>
        <div className="tag-row">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </div>
      <Link className="detail-link" href={service.href}>اكتشف الخدمة <span>←</span></Link>
    </article>
  );

  return (
    <main className="inner-page services-page">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero
        eyebrow="خدمات ديوانك"
        title={<>خدمات كثيرة.<br/><em>منظومة واحدة.</em></>}
        text="ابدأ من المشكلة، لا من اسم الخدمة. كل مسار هنا يقودك إلى صفحة تشرح ما الذي نحلّه، ما الذي تستلمه، وكيف نربط التنفيذ بهدف واضح."
      />

      <section className="shell services-detail-bento" aria-label="خدمات ديوانك للشركات">
        {services.map(renderCard)}
      </section>

      <section className="seo-content shell" aria-labelledby="career-services-title">
        <span className="section-label">[ خدمات مهنية للأفراد ]</span>
        <h2 id="career-services-title">خبرتك قوية.<br/><em>يجب أن تظهر كذلك.</em></h2>
        <p>خدمة مستقلة للباحثين عن عمل والمحترفين، منفصلة عن خدمات الشركات، وتركز على تقديم الخبرة بصورة أوضح لأنظمة التوظيف ومديري الموارد البشرية.</p>
      </section>
      <section className="shell services-detail-bento" aria-label="خدمات السيرة الذاتية والتوظيف">
        {careerServices.map(renderCard)}
      </section>

      <section className="seo-content shell" aria-labelledby="services-approach-title">
        <span className="section-label">[ كيف تختار الخدمة ]</span>
        <h2 id="services-approach-title">الخدمة المناسبة ليست الأكبر.<br/><em>بل الأقرب لمشكلتك.</em></h2>
        <div className="seo-content-grid">
          <p>إذا كانت المشكلة في وضوح العلامة أو اختلاف الرسائل، ابدأ باستراتيجية البراند والهوية. إذا كان الظهور جيدًا لكن الطلب ضعيف، راجع التسويق والإعلانات وتجربة الموقع قبل زيادة الميزانية.</p>
          <p>إذا كان العملاء يصلون لكن المتابعة بطيئة أو غير منظمة، فالأولوية لأتمتة واتساب وCRM. وإذا كان فريقك يكرر مهامًا يدوية بين أدوات مختلفة، فحلول AI Automation قد تستعيد وقتًا كبيرًا وتقلل الأخطاء.</p>
          <p>أما SEO وAEO فهما استثمار طويل الأجل يساعد موقعك على الظهور عندما يبحث العميل أو يسأل محركات الإجابة عن حل تقدمه بالفعل.</p>
        </div>
      </section>

      <section className="fit-section shell">
        <div><span className="section-label">[ قبل أن نبدأ ]</span><h2>لا تعرف من أين تبدأ؟<br/><em>ابدأ من نقطة الاختناق.</em></h2></div>
        <div className="fit-card"><p>في جلسة اكتشاف قصيرة نحدد المشكلة والنتيجة المطلوبة وأصغر نطاق يصنع فرقًا حقيقيًا، ثم نقترح المسار المناسب دون تضخيم غير ضروري.</p><Link className="button primary" href="/contact">ناقش مشروعك <span>←</span></Link></div>
      </section>
      <Footer />
    </main>
  );
}
