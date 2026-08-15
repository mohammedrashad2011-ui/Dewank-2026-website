import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, organizationId, siteUrl } from "../lib/seo";
import { Footer, Header } from "../components/site-shell";
import AboutExperience from "./about-experience";
import "./about-page.css";
import "./about-entity-aeo.css";

export const metadata: Metadata = createMetadata({
  title: "عن ديوانك | شركة نمو رقمي في السعودية والخليج",
  description: "ديوانك شركة نمو رقمي تخدم الشركات في السعودية والخليج عبر البراند، التسويق، المواقع، SEO، أتمتة واتساب وCRM والذكاء الاصطناعي ضمن منظومة واحدة قابلة للقياس.",
  path: "/about",
  keywords: ["عن ديوانك", "شركة نمو رقمي في السعودية", "شركة تسويق في السعودية", "استراتيجية البراند", "تصميم مواقع", "SEO", "أتمتة واتساب", "CRM", "AI Automation GCC"],
});

const values = [
  { no: "01", title: "الاستراتيجية أولًا", text: "لا نبدأ بالتصميم أو الإعلان قبل فهم السوق والعرض ونقطة التعطّل الحقيقية." },
  { no: "02", title: "منظومة واحدة", text: "الهوية والمحتوى والموقع والإعلان والأتمتة تعمل حول هدف مشترك." },
  { no: "03", title: "التقنية تخدم الإنسان", text: "نستخدم الذكاء الاصطناعي لتقليل الهدر دون إفساد تجربة العميل أو تعقيدها." },
  { no: "04", title: "النتيجة قبل المظهر", text: "نهتم بالوضوح والتحويل والكفاءة، وليس بالشكل أو أرقام الوصول وحدها." },
];

const serviceMap = [
  { title: "البراند والهوية", text: "تموضع، تسمية وهوية بصرية تجعل العلامة أوضح وأسهل تذكّرًا.", href: "/branding" },
  { title: "الإعلانات المدفوعة", text: "Google Ads وMeta Ads مع تتبع وتحسين التحويل بدل شراء النقرات فقط.", href: "/paid-ads" },
  { title: "المواقع وصفحات الهبوط", text: "تجارب سريعة تجمع الرسالة وSEO وCRO وتدفع الزائر نحو إجراء واضح.", href: "/website-design" },
  { title: "المحتوى والسوشيال", text: "استراتيجية وأفكار وتصميم وكابشنات وخطة نشر تربط الحضور بالطلب.", href: "/services/social-media-content" },
  { title: "SEO وAEO", text: "تحسين تقني ومحتوى وهيكلة تساعد محركات البحث والإجابة على فهم خبرتك.", href: "/seo-aeo" },
  { title: "واتساب وCRM", text: "رد وتأهيل وحجز ومتابعة وربط المحادثة بمراحل واضحة وقابلة للقياس.", href: "/whatsapp-automation" },
  { title: "أتمتة الذكاء الاصطناعي", text: "سير عمل وتكاملات تقلل العمل اليدوي وتربط التسويق والمبيعات والتشغيل.", href: "/ai-automation" },
];

const faqs = [
  { question: "ما هي ديوانك؟", answer: "ديوانك شركة نمو رقمي تخدم الشركات في السعودية والخليج، وتجمع استراتيجية البراند والتسويق والمواقع وSEO والبيانات وأتمتة واتساب وCRM والذكاء الاصطناعي داخل منظومة واحدة." },
  { question: "أين تعمل ديوانك؟", answer: "تركز ديوانك على الشركات في السعودية والخليج، مع خبرة عملية في أسواق السعودية والبحرين والإمارات وإمكانية تنفيذ المشروعات عن بُعد بحسب نطاق العمل." },
  { question: "ما الفرق بين ديوانك ووكالة تسويق تقليدية؟", answer: "نبدأ من المشكلة التجارية ونقطة التعطّل في رحلة العميل، ثم نختار أصغر نطاق عملي مناسب بدل بيع خدمات منفصلة لا تعمل معًا." },
  { question: "هل يمكن البدء بخدمة واحدة فقط؟", answer: "نعم. يمكن البدء بخدمة واحدة مثل الإعلانات أو الموقع أو المحتوى أو أتمتة واتساب، ثم توسيع المنظومة عندما تظهر حاجة واضحة ومقاسة." },
];

export default function AboutPage() {
  const whatsappHref = "https://wa.me/97339066649?text=" + encodeURIComponent("مرحبًا ديوانك، أريد مناقشة التحدي الحالي في مشروعي. النشاط: ");
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${siteUrl}/about#page`,
        name: "عن ديوانك",
        url: `${siteUrl}/about`,
        description: "ديوانك شركة نمو رقمي تجمع البراند والتسويق والمواقع وSEO والأتمتة للشركات في السعودية والخليج.",
        mainEntity: { "@id": organizationId },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/about#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "OfferCatalog",
        "@id": `${siteUrl}/about#services`,
        name: "خدمات ديوانك الأساسية",
        itemListElement: serviceMap.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.text,
            url: `${siteUrl}${service.href}`,
            provider: { "@id": organizationId },
            areaServed: ["SA", "BH", "AE", "KW", "QA", "OM"],
          },
        })),
      },
    ],
  };

  return (
    <main className="about-page about-entity-page" dir="rtl">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="about-hero shell">
        <div>
          <span className="section-label">عن ديوانك</span>
          <h1>لسنا وكالة خدمات.<br/><em>نبني منظومة نمو أوضح.</em></h1>
          <p>نجمع استراتيجية البراند، التسويق، المواقع، البيانات والأتمتة داخل مسار واحد، لأن النمو لا يتعطل غالبًا بسبب نقص خدمة، بل بسبب عدم اتصال الخدمات ببعضها.</p>
          <div className="about-hero-actions">
            <a className="button primary" href={whatsappHref} target="_blank" rel="noopener noreferrer">ناقش التحدي على واتساب <span>↗</span></a>
            <Link className="button secondary" href="/work">شاهد الأعمال <span>←</span></Link>
          </div>
        </div>
        <aside className="about-hero-card">
          <small>BRAND × GROWTH × AI</small>
          <strong>نبدأ من المشكلة، لا من اسم الخدمة.</strong>
          <span>نحدد الأولوية أولًا، ثم نبني أصغر نظام يصنع فرقًا حقيقيًا وقابلًا للقياس.</span>
        </aside>
      </section>

      <section className="about-entity-definition shell" aria-labelledby="about-definition-title">
        <span className="section-label">تعريف مباشر</span>
        <div>
          <h2 id="about-definition-title">من هي ديوانك؟</h2>
          <p><strong>ديوانك شركة نمو رقمي تخدم الشركات في السعودية والخليج.</strong> نربط البراند والمحتوى والإعلانات والمواقع وSEO وواتساب وCRM والذكاء الاصطناعي بحيث تخدم كل خطوة ما بعدها، بدل تشغيل أدوات وخدمات متفرقة يصعب قياس أثرها.</p>
        </div>
      </section>

      <section className="about-origin shell">
        <div className="about-origin-copy">
          <span className="section-label">لماذا ديوانك؟</span>
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

      <section className="about-services-map shell" aria-labelledby="about-services-title">
        <div className="about-services-head">
          <div><span className="section-label">ماذا تقدم ديوانك؟</span><h2 id="about-services-title">سبعة مسارات.<br/><em>هدف واحد: نمو أوضح.</em></h2></div>
          <Link href="/services">كل الخدمات <span>←</span></Link>
        </div>
        <div className="about-services-grid">
          {serviceMap.map((service, index) => (
            <Link className="about-service-card" href={service.href} key={service.href}>
              <small>{String(index + 1).padStart(2, "0")}</small>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <span>استكشف الخدمة ↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="about-values shell">
        <span className="section-label">ما الذي يجعلنا مختلفين</span>
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
            <span className="section-label">خبرة السوق</span>
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
            <span className="gcc-word" aria-hidden="true">GCC</span>
          </div>
        </div>
      </section>

      <section className="about-fit shell">
        <span className="section-label">هل نحن مناسبون؟</span>
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

      <section className="about-faq shell" aria-labelledby="about-faq-title">
        <span className="section-label">إجابات سريعة</span>
        <h2 id="about-faq-title">أسئلة تساعدك تفهم ديوانك بسرعة.</h2>
        <div className="about-faq-grid">
          {faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
        </div>
      </section>

      <section className="about-final about-final-upgraded">
        <div>
          <span className="section-label">الخطوة التالية</span>
          <h2>لا تحتاج خدمة أخرى.<br/><em>تحتاج أن تعرف أين تبدأ.</em></h2>
        </div>
        <div>
          <p>شاركنا التحدي الحالي، وسنساعدك على تحديد أقصر مسار عملي بدل تشتيت الميزانية بين حلول منفصلة.</p>
          <div className="about-final-actions">
            <a className="button primary" href={whatsappHref} target="_blank" rel="noopener noreferrer">ابدأ على واتساب <span>↗</span></a>
            <Link className="button secondary" href="/services">راجع الخدمات أولًا <span>←</span></Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
