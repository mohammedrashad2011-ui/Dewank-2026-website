import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "../lib/seo";
import { Footer, Header } from "../components/site-shell";
import AboutExperience from "./about-experience";
import "./about-page.css";

export const metadata: Metadata = createMetadata({
  title: "عن ديوانك | استراتيجية البراند والتسويق والأتمتة",
  description: "تعرّف على ديوانك: كيان نمو رقمي يجمع استراتيجية البراند، التسويق، المواقع، البيانات والأتمتة داخل منظومة واحدة للشركات في الخليج.",
  path: "/about",
  keywords: ["عن ديوانك", "شركة تسويق في السعودية", "استراتيجية البراند", "التسويق والأتمتة", "Digital Growth GCC"],
});

const values = [
  { no: "01", title: "الاستراتيجية أولًا", text: "لا نبدأ بالتصميم أو الإعلان قبل فهم السوق والعرض ونقطة التعطّل الحقيقية." },
  { no: "02", title: "منظومة واحدة", text: "الهوية والمحتوى والموقع والإعلان والأتمتة تعمل حول هدف مشترك." },
  { no: "03", title: "التقنية تخدم الإنسان", text: "نستخدم الذكاء الاصطناعي لتقليل الهدر دون إفساد تجربة العميل أو تعقيدها." },
  { no: "04", title: "النتيجة قبل المظهر", text: "نهتم بالوضوح والتحويل والكفاءة، وليس بالشكل أو أرقام الوصول وحدها." },
];

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Dewank",
    url: "https://dewank.com/about",
    description: "ديوانك كيان نمو رقمي يجمع البراند والتسويق والمواقع والأتمتة للشركات في الخليج.",
    mainEntity: {
      "@type": "ProfessionalService",
      name: "Dewank | ديوانك",
      url: "https://dewank.com",
      areaServed: ["Saudi Arabia", "Bahrain", "United Arab Emirates", "GCC"],
      knowsAbout: ["Brand Strategy", "Digital Marketing", "Website Design", "SEO", "AI Automation", "WhatsApp Automation", "CRM"],
    },
  };

  return (
    <main className="about-page" dir="rtl">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="about-hero shell">
        <div>
          <span className="section-label">[ عن ديوانك ]</span>
          <h1>لسنا وكالة خدمات.<br/><em>نبني منظومة نمو أوضح.</em></h1>
          <p>نجمع استراتيجية البراند، التسويق، المواقع، البيانات والأتمتة داخل مسار واحد، لأن النمو لا يتعطل غالبًا بسبب نقص خدمة، بل بسبب عدم اتصال الخدمات ببعضها.</p>
          <Link className="button primary" href="/contact">ناقش مشروعك معنا <span>←</span></Link>
        </div>
        <aside className="about-hero-card">
          <small>BRAND × GROWTH × AI</small>
          <strong>نبدأ من المشكلة، لا من اسم الخدمة.</strong>
          <span>نحدد الأولوية أولًا، ثم نبني أصغر نظام يصنع فرقًا حقيقيًا وقابلًا للقياس.</span>
        </aside>
      </section>

      <section className="about-origin shell">
        <div className="about-origin-copy">
          <span className="section-label">[ لماذا ديوانك؟ ]</span>
          <h2>بدأت الفكرة من مشكلة نراها كل يوم.</h2>
          <p>شركة تتعامل مع مصمم لا يعرف هدف التسويق، ومسوق لا يفهم البراند، ومطور يبني موقعًا بلا رحلة تحويل، وأتمتة تعمل بعيدًا عن المبيعات. النتيجة: مجهود وأدوات كثيرة، لكن رحلة العميل ما زالت مفككة.</p>
          <p>ديوانك بُنيت لتربط القرار الاستراتيجي بالتنفيذ والتقنية والقياس داخل نظام واحد.</p>
        </div>
        <div className="fragment-grid">
          <article className="fragment-card"><b>تصميم بلا استراتيجية</b><p>هوية جميلة، لكن السوق لا يفهم لماذا يختارها.</p></article>
          <article className="fragment-card"><b>تسويق بلا رحلة</b><p>وصول وتفاعل، لكن انتقال ضعيف نحو الطلب أو الشراء.</p></article>
          <article className="fragment-card"><b>موقع بلا تحويل</b><p>صفحات أنيقة لا تقود الزائر إلى خطوة واضحة.</p></article>
          <article className="fragment-card"><b>أتمتة بلا تنظيم</b><p>تقنية تسرّع الفوضى بدل أن تقللها.</p></article>
        </div>
      </section>

      <AboutExperience />

      <section className="about-values shell">
        <span className="section-label">[ ما الذي يجعلنا مختلفين ]</span>
        <h2>قرارات واضحة قبل التنفيذ.</h2>
        <div className="values-grid">
          {values.map((value) => (
            <article className="value-card" key={value.no}>
              <span>{value.no}</span><h3>{value.title}</h3><p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-market">
        <div className="shell market-grid">
          <div>
            <span className="section-label">[ خبرة الكيان ]</span>
            <h2>خبرة بُنيت داخل السوق،<br/>لا داخل العروض التقديمية.</h2>
            <p>ديوانك تجمع خبرات عملية في استراتيجية البراند، التسويق الرقمي، تطوير المواقع، إدارة الحملات، رحلة العميل، CRM والأتمتة داخل أسواق الخليج.</p>
            <p>نعمل على ربط التسويق بالمبيعات وخدمة العملاء، وتحويل نقاط التواصل المتفرقة إلى منظومات أوضح وأسهل في القياس والتطوير.</p>
            <div className="market-tags">
              <span>السعودية</span><span>البحرين</span><span>الإمارات</span><span>السوق الخليجي</span>
            </div>
          </div>
          <div className="market-map" aria-label="خبرة ديوانك في أسواق الخليج">
            <small>GCC MARKET EXPERIENCE</small>
            <strong>نفهم أن الثقة، السرعة، واتساب، واللغة ليست تفاصيل جانبية.</strong>
            <p>هي أجزاء أساسية من قرار العميل الخليجي وطريقة انتقاله من الاهتمام إلى التواصل.</p>
          </div>
        </div>
      </section>

      <section className="about-fit shell">
        <span className="section-label">[ هل نحن مناسبون؟ ]</span>
        <h2>الشراكة الجيدة تبدأ من وضوح التوقعات.</h2>
        <div className="fit-grid">
          <div className="fit-box">
            <h3>ديوانك مناسبة لك عندما...</h3>
            <ul>
              <li>لديك خدمة جيدة لكن رسالتها غير واضحة.</li>
              <li>تنفق على التسويق دون منظومة متماسكة.</li>
              <li>تفقد العملاء بين الإعلان والرد والمتابعة.</li>
              <li>تريد شريكًا يفهم البراند والتسويق والتقنية معًا.</li>
            </ul>
          </div>
          <div className="fit-box dark">
            <h3>وقد لا نكون الخيار المناسب عندما...</h3>
            <ul>
              <li>تبحث عن تنفيذ سريع بلا تشخيص أو استراتيجية.</li>
              <li>تريد أرخص سعر بدل الحل الأقرب للمشكلة.</li>
              <li>تفضّل الوعود الكبيرة على القياس الواقعي.</li>
              <li>تريد أتمتة عملية غير منظمة من الأساس.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="about-final">
        <div>
          <span className="section-label">[ الخطوة التالية ]</span>
          <h2>لا تحتاج خدمة أخرى.<br/><em>تحتاج أن تعرف أين تبدأ.</em></h2>
        </div>
        <div>
          <p>شاركنا التحدي الحالي، وسنساعدك على تحديد أقصر مسار عملي بدل تشتيت الميزانية بين حلول منفصلة.</p>
          <Link className="button primary" href="/contact">ابدأ المحادثة <span>←</span></Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
