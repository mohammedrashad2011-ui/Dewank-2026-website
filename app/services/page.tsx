import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "../lib/seo";
import { Footer, Header, PageHero } from "../components/site-shell";
import AiWorkflowVisual from "./ai-workflow-visual";
import "./ai-control-room.css";
import "./services-overview.css";
import "./service-icons.css";

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
    en: "BRAND SYSTEMS",
    tone: "brand",
    visual: "brand",
    title: "استراتيجية البراند والهوية البصرية",
    hook: "خلّي السوق يفهمك قبل ما تحاول تقنعه.",
    text: "نحدد التموضع والرسالة والشخصية ونحوّلها إلى هوية بصرية ونظام واضح يساعد العميل على تذكرك واختيارك.",
    tags: ["Brand Strategy", "Naming", "Visual Identity"],
    href: "/branding",
  },
  {
    no: "02",
    en: "SOCIAL & CONTENT",
    tone: "growth",
    visual: "social",
    title: "إدارة السوشيال ميديا وصناعة المحتوى",
    hook: "حوّل الحساب من واجهة صامتة إلى قناة تبني طلبًا.",
    text: "استراتيجية محتوى، أفكار، كتابة وتصميم ونشر يربط حضورك اليومي بأهداف البراند والبيع بدل النشر لمجرد الظهور.",
    tags: ["Content Strategy", "Social Media", "Creative"],
    href: "/social-media-content",
  },
  {
    no: "03",
    en: "PAID GROWTH",
    tone: "growth",
    visual: "ads",
    title: "إدارة الإعلانات وLead Generation",
    hook: "كل ريال إعلاني لازم يعرف طريقه إلى نتيجة.",
    text: "نبني الحملات على نية العميل، الرسالة، الصفحة والتتبع، ثم نحسنها بالبيانات بدل الاعتماد على التخمين.",
    tags: ["Meta Ads", "Google Ads", "Lead Generation"],
    href: "/digital-marketing",
  },
  {
    no: "04",
    en: "WEB EXPERIENCES",
    tone: "web",
    visual: "web",
    title: "تصميم وتطوير المواقع وصفحات الهبوط",
    hook: "لا يكفي أن يصل الزائر. لازم يعرف ماذا يفعل بعدها.",
    text: "نصمم مواقع وصفحات سريعة ومتجاوبة تجمع الرسالة وتجربة المستخدم والتحويل وSEO في مسار واحد واضح.",
    tags: ["Web Design", "Landing Pages", "UX / CRO"],
    href: "/website-design",
  },
  {
    no: "05",
    en: "SEARCH GROWTH",
    tone: "web",
    visual: "search",
    title: "SEO وAEO والظهور في البحث",
    hook: "خلّي العميل يلاقيك عندما يبدأ بالسؤال.",
    text: "نبني بنية ومحتوى وتجربة تساعد محركات البحث ومحركات الإجابة على فهم موقعك وربطه بنية البحث الصحيحة.",
    tags: ["SEO", "AEO", "Content Architecture"],
    href: "/seo-services",
  },
  {
    no: "06",
    en: "AI AUTOMATION",
    tone: "automation",
    visual: "automation",
    title: "أتمتة واتساب وCRM والذكاء الاصطناعي",
    hook: "خلي النظام يرد ويتابع قبل ما تضيع الفرصة.",
    text: "نربط واتساب والـCRM والحجز والمتابعة والذكاء الاصطناعي في مسار يقلل العمل اليدوي ويرفع سرعة الاستجابة.",
    tags: ["WhatsApp", "CRM", "AI Agents"],
    href: "/whatsapp-automation",
  },
  {
    no: "07",
    en: "ANALYTICS",
    tone: "growth",
    visual: "analytics",
    title: "التحليلات وقياس التحويل",
    hook: "الأرقام لازم تقول لك ماذا تفعل بعد ذلك.",
    text: "نرتب التتبع والـKPIs ولوحات القياس حتى تعرف من أين تأتي الفرص، أين تتسرب، وما الذي يستحق زيادة الاستثمار.",
    tags: ["GA4", "GTM", "Conversion Tracking"],
    href: "/analytics",
  },
  {
    no: "08",
    en: "ATS CV",
    tone: "brand",
    visual: "document",
    title: "كتابة وتصميم CV متوافق مع ATS",
    hook: "خلّي خبرتك تُقرأ قبل أن تُرفض آليًا.",
    text: "نرتب السيرة الذاتية بصياغة واضحة وكلمات مناسبة وهيكل يساعد أنظمة ATS ومسؤولي التوظيف على فهم قيمتك بسرعة.",
    tags: ["ATS", "CV Writing", "LinkedIn"],
    href: "/ats-cv",
  },
];

export default function ServicesPage() {
  return (
    <main className="inner-page services-page">
      <Header />
      <PageHero eyebrow="خدمات ديوانك" title={<>من العلامة إلى النمو.<br/><em>خدمات تعمل كنظام واحد.</em></>} text="اختر نقطة البداية المناسبة: براند، محتوى، إعلانات، موقع، ظهور في البحث، أتمتة أو قياس. كل خدمة يمكن تنفيذها منفردة، والأفضل عندما ترتبط بما قبلها وما بعدها." />

      <section className="shell service-list">
        {services.map((service) => (
          <article className={`service-detail ${service.tone}`} key={service.no}>
            <div className="service-list-head"><span>{service.no}</span><small>{service.en}</small></div>
            {service.visual === "automation" ? <AiWorkflowVisual /> : <div className={`service-symbol ${service.visual}`} aria-hidden="true"><i/><i/><i/></div>}
            <div className="detail-copy">
              <h2>{service.title}</h2>
              <h3>{service.hook}</h3>
              <p>{service.text}</p>
              <div className="tag-row">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <Link className="text-link" href={service.href}>{service.cta || "اكتشف الخدمة"} <span>↙</span></Link>
            </div>
          </article>
        ))}
      </section>

      <section className="fit-section shell">
        <div><span className="section-label">[ كيف تبدأ؟ ]</span><h2>ابدأ من المشكلة.<br/><em>مش من اسم الخدمة.</em></h2></div>
        <div><p>لو عندك تحدي واضح لكن مش عارف أي خدمة تناسبه، ابعت لنا وصفًا مختصرًا للمشروع والهدف الحالي. نحدد لك نقطة البداية والمسار المناسب بدون تحميل المشروع خدمات لا يحتاجها.</p><Link className="button primary" href="/contact">ناقش مشروعك معنا <span>←</span></Link></div>
      </section>

      <Footer />
    </main>
  );
}
