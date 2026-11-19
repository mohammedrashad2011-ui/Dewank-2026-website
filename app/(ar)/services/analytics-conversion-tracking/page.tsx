import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../../components/site-shell";
import { createMetadata, organizationId, siteUrl, servedMarkets } from "../../../lib/seo";
import "./analytics-service.css";

const path = "/services/analytics-conversion-tracking";
const title = "إعداد التحليلات وتتبع التحويلات لموقعك وإعلاناتك | ديوانك";
const description = "إعداد GA4 وGoogle Tag Manager وتتبع الواتساب والنماذج كتحويلات، حتى تعرف أي قناة وأي صفحة تجلب طلبات حقيقية، لا مجرد زيارات ونقرات.";

export const metadata: Metadata = createMetadata({
  title,
  description,
  path,
  keywords: ["تتبع التحويلات", "إعداد Google Analytics 4", "Google Tag Manager", "تتبع واتساب", "قياس الإعلانات", "تتبع التحويل لحملات جوجل"],
});

const setup = [
  ["GA4", "حساب الخصائص والأحداث، وتحديد التحويلات الأساسية مثل الضغط على واتساب وإرسال النموذج."],
  ["Google Tag Manager", "وسم منظّم بدون تعديل كود الموقع في كل مرة، مع اختبار قبل النشر."],
  ["تتبع الواتساب", "معرفة أي زر أو صفحة أرسلت العميل إلى المحادثة، لا مجرد أن الزيارة حدثت."],
  ["ربط الإعلانات", "تحويلات Google Ads المستوردة من GA4 بحيث تعرف تكلفة كل طلب حقيقي."],
  ["لوحة قياس بسيطة", "أهم الأرقام في مكان واحد: الطلبات والمصادر والصفحات التي تعمل وتلك التي لا تعمل."],
];

const notIncluded = [
  "لا نعد بنسبة تحويل أو عدد طلبات محدد، فالأرقام تعتمد على عرضك وسعرك وجمهورك.",
  "لا يشمل هذا إدارة الإعلانات أو كتابة المحتوى أو تصميم الصفحات، وإن كانت تُقدَّم كخدمات منفصلة.",
  "نراجع معك أي تغيير في حساباتك الحالية قبل تنفيذه.",
];

const faqs = [
  ["ما الفرق بين التحليلات وتتبع التحويلات؟", "التحليلات تخبرك بما حدث على الموقع: من زار وأين وكم بقي. تتبع التحويلات يخبرك بما يهمك فعلًا: أي زيارة انتهت بطلب أو رسالة أو حجز، ومن أين جاءت."],
  ["هل تحتاج الخدمة إلى موقع جديد؟", "لا. نعمل على الموقع الموجود، ونعدّل ما يلزم فقط. إن كان الموقع يحتاج إعادة بناء، نقول لك ذلك قبل أي تنفيذ."],
  ["هل ستصل إلى بياناتي؟", "نطلب صلاحيات محددة فقط للحسابات التي نحتاجها، ونشرح كل صلاحية قبل استخدامها."],
  ["كم تستغرق عملية الإعداد؟", "تختلف حسب عدد الصفحات والحسابات المرتبطة. نحدد المدة بعد مراجعة الموقع والحسابات الحالية."],
  ["هل تعمل الخدمة مع واتساب؟", "نعم. نتتبع الضغط على روابط واتساب في الموقع ونربطها بالصفحة ومصدر الزيارة، ولا نتحكم في محتوى المحادثة نفسها."],
];

export default function AnalyticsConversionTrackingService() {
  const url = `${siteUrl}${path}`;
  const whatsappHref = "https://wa.me/97339066649?text=" + encodeURIComponent("مرحبًا ديوانك، أريد إعداد تتبع التحويلات والتحليلات لموقعي. نشاطي: ");
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "إعداد التحليلات وتتبع التحويلات",
        description,
        serviceType: ["Analytics setup", "Conversion tracking", "Google Tag Manager", "GA4"],
        provider: { "@id": organizationId },
        areaServed: servedMarkets,
        url,
      },
      { "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "الخدمات", item: `${siteUrl}/services` },
          { "@type": "ListItem", position: 3, name: "التحليلات وتتبع التحويلات", item: url },
        ],
      },
    ],
  };

  return (
    <main className="analytics-service-page">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="shell analytics-hero">
        <nav className="analytics-breadcrumbs" aria-label="مسار الصفحة"><Link href="/">الرئيسية</Link><span>/</span><Link href="/services">الخدمات</Link><span>/</span><span>التحليلات</span></nav>
        <span className="analytics-label">التحليلات وتتبع التحويلات</span>
        <h1>الأرقام لا تعني شيئًا<br/><em>إن لم تربطها بالطلبات</em></h1>
        <p>نعدّ موقعك وإعلاناتك بحيث تعرف أي قناة وأي صفحة تجلب عملاء يتواصلون معك فعلًا، وليس فقط زيارات ونقرات.</p>
        <div className="analytics-actions">
          <a className="button primary" href={whatsappHref} target="_blank" rel="noopener noreferrer">اطلب إعداد التتبع <span>↗</span></a>
          <Link className="button secondary" href="/guides/marketing-kpis">مؤشرات التسويق التي تستحق المتابعة</Link>
        </div>
      </section>

      <section className="shell analytics-answer">
        <h2>ما الذي نعدّه بالضبط؟</h2>
        <div className="analytics-setup-grid">
          {setup.map(([label, text]) => <article key={label}><b>{label}</b><p>{text}</p></article>)}
        </div>
      </section>

      <section className="shell analytics-scope">
        <h2>ما الذي لا نعد به؟</h2>
        <ul>{notIncluded.map((item) => <li key={item}>{item}</li>)}</ul>
        <p>لذلك نبدأ بتحديد ما تحتاج قياسه، ثم نعد التتبع ونختبره قبل الاعتماد عليه.</p>
      </section>

      <section className="shell analytics-faq">
        <h2>أسئلة شائعة</h2>
        <div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="shell analytics-final">
        <h2>ابدأ بالقياس قبل الإنفاق</h2>
        <p>أرسل لنا رابط موقعك ونوع الحملات التي تشغلها، ونحدد معك ما الذي يجب قياسه أولًا.</p>
        <a className="button primary" href={whatsappHref} target="_blank" rel="noopener noreferrer">أرسل الرابط على واتساب <span>↗</span></a>
        <div className="analytics-links"><Link href="/services">كل الخدمات</Link><Link href="/paid-ads">إدارة إعلانات Google وMeta</Link><Link href="/website-design">تصميم المواقع</Link></div>
      </section>
      <Footer />
    </main>
  );
}
