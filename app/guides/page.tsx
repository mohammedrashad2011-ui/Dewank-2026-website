import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../components/site-shell";
import { createMetadata, organizationId, siteUrl } from "../lib/seo";
import "./guides.css";

export const metadata: Metadata = createMetadata({
  title: "أدلة التسويق والنمو للشركات | ديوانك",
  description: "أدلة عملية تساعد الشركات في السعودية والخليج على اتخاذ قرارات أفضل في التسويق الرقمي وتصميم المواقع وSEO والإعلانات والأتمتة.",
  path: "/guides",
  keywords: ["أدلة التسويق الرقمي", "دليل نمو الشركات", "التسويق في السعودية", "تصميم المواقع", "SEO", "أتمتة واتساب"],
});

const guides = [
  {
    category: "WHATSAPP AUTOMATION + CRM · GCC",
    title: "كيف تعمل أتمتة واتساب مع CRM لتقليل ضياع العملاء؟",
    description: "رحلة عملية من الرسالة إلى التأهيل والحجز والمتابعة، مع الفرق بين القواعد وAI ومؤشرات قياس أثر النظام.",
    href: "/guides/whatsapp-crm-automation",
  },
  {
    category: "SEO + AEO · GCC",
    title: "الفرق بين SEO وAEO: كيف تظهر في Google وإجابات الذكاء الاصطناعي؟",
    description: "شرح عملي للتكامل بين تحسين محركات البحث ومحركات الإجابة، وخطوات تهيئة المحتوى للظهور دون وعود مضللة.",
    href: "/guides/seo-vs-aeo",
  },
  {
    category: "SOCIAL MEDIA CONVERSION · GCC",
    title: "حسابك جميل لكنه لا يجلب عملاء: أين المشكلة؟",
    description: "تشخيص الفجوة بين الوصول والبيع: الرسالة والعرض والثقة والدعوة للإجراء ومسار متابعة العملاء.",
    href: "/guides/social-media-not-generating-leads",
  },
  {
    category: "SOCIAL MEDIA MANAGEMENT · SAUDI ARABIA",
    title: "أسعار إدارة حسابات التواصل الاجتماعي في السعودية",
    description: "نطاقات الأسعار، وما الذي يجب أن تتضمنه الباقة، والفرق بين الإدارة وصناعة المحتوى والتصوير والإعلانات.",
    href: "/guides/social-media-management-cost-saudi-arabia",
  },
  {
    category: "DIGITAL MARKETING COST · SAUDI ARABIA",
    title: "أسعار التسويق الرقمي في السعودية: ماذا تشمل؟",
    description: "نطاقات إرشادية للميزانية، وما يجب أن تتضمنه الباقة، والفرق بين أتعاب الإدارة والإنفاق الإعلاني وكيف تقارن العروض.",
    href: "/guides/digital-marketing-cost-saudi-arabia",
  },
  {
    category: "DIGITAL MARKETING · SAUDI ARABIA",
    title: "كيف تختار شركة تسويق رقمي في السعودية؟",
    description: "معايير عملية لتقييم الاستراتيجية والخبرة والقياس والعقد، مع أسئلة تكشف الفرق بين شريك نمو حقيقي وبائع وعود.",
    href: "/guides/choose-digital-marketing-company-saudi-arabia",
  },
  {
    category: "WEBSITE CONVERSION · GCC",
    title: "لماذا موقعك لا يجلب عملاء؟",
    description: "تشخيص عملي لأكثر نقاط التسرب شيوعًا: الرسالة، الثقة، تجربة الجوال، الدعوة للإجراء والقياس، مع خطة إصلاح مرتبة حسب الأولوية.",
    href: "/guides/why-website-does-not-generate-leads",
  },
  {
    category: "WEBSITE DESIGN · SAUDI ARABIA",
    title: "كم تكلفة تصميم موقع إلكتروني في السعودية؟",
    description: "دليل لفهم نطاقات التكلفة، وما الذي يرفع السعر، وكيف تقارن بين العروض من دون أن تدفع مقابل شكل لا يخدم المبيعات.",
    href: "/guides/website-design-cost-saudi-arabia",
  },
];

export default function GuidesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "CollectionPage", "@id": `${siteUrl}/guides#page`, name: "أدلة النمو من ديوانك", description: "أدلة عملية في التسويق والنمو والبراند وتصميم المواقع وSEO والأتمتة.", url: `${siteUrl}/guides`, isPartOf: { "@id": `${siteUrl}/#website` }, publisher: { "@id": organizationId } },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl }, { "@type": "ListItem", position: 2, name: "أدلة النمو", item: `${siteUrl}/guides` }] },
    ],
  };

  return <main className="guides-page">
    <Header />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <section className="guides-hero shell">
      <div><span className="guides-label">[ أدلة النمو ]</span><h1>وضوح قبل القرار.<br/><em>ونمو بعده.</em></h1></div>
      <p>محتوى عملي لأصحاب الأعمال وصنّاع القرار؛ يشرح التكلفة والاختيار والمشكلات الشائعة بلغة واضحة، ويربط كل سؤال بالخطوة المناسبة.</p>
    </section>
    <section className="guides-grid shell" aria-label="أدلة ديوانك">
      {guides.map((guide) => <article className="guide-card" key={guide.href}><small>{guide.category}</small><h2>{guide.title}</h2><p>{guide.description}</p><Link href={guide.href}>اقرأ الدليل <span>←</span></Link></article>)}
    </section>
    <section className="guides-note shell"><h2>هذه ليست مدونة أخبار.</h2><p>كل دليل مبني حول سؤال حقيقي يسبق قرارًا تجاريًا، ويرتبط بخدمة واضحة. نحدّث ما يستحق التحديث ولا ننشر لمجرد زيادة عدد الصفحات.</p></section>
    <Footer />
  </main>;
}
