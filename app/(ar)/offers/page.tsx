import type { Metadata } from "next";
import { Footer, Header } from "../../components/site-shell";
import OffersHub from "./offers-hub";
import { createMetadata } from "../../lib/seo";
import { hubFacts, hubItemListSchema, hubPriceFaq, hubRegionFaq } from "./offers-hub-summary";



const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": hubPriceFaq.ar.q, "acceptedAnswer": { "@type": "Answer", "text": hubPriceFaq.ar.a } },
    {
      "@type": "Question",
      "name": "ما الفرق بين العروض والخدمة الكاملة؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "كل عرض له نطاق محدد وسعر يبدأ منه، وتجد في صفحته ما يشمله وما لا يشمله. الخدمات الأوسع، مثل إدارة السوشيال ميديا الشهرية أو إدارة الحملات، تُناقش بشكل منفصل."
      }
    },
    {
      "@type": "Question",
      "name": "كيف أختار العرض المناسب لي؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "اختر حسب هدفك: محتوى، إعلانات، موقع، هوية، أو أتمتة. ولو لم تحدد هدفك بعد، أرسل نشاطك والنتيجة التي تريدها عبر واتساب، ونرشح لك البداية الأنسب."
      }
    },
    {
      "@type": "Question",
      "name": "هل الأسعار المعروضة نهائية؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "السعر الظاهر في كل بطاقة هو سعر البداية، وتفاصيل كل عرض وما يشمله موضحة في صفحته. وقد تختلف الأسعار حسب السوق وطبيعة المشروع، وتؤكد قبل بدء التنفيذ."
      }
    },
    {
      "@type": "Question",
      "name": "كم تستغرق مدة التنفيذ؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "تختلف المدة حسب العرض، وتظهر على كل بطاقة. تتراوح بين يومين و14 يوم عمل تقريبًا، ويبدأ التنفيذ بعد استلام المعلومات المطلوبة."
      }
    },
    {
      "@type": "Question",
      "name": "هل تشمل الأسعار الدومين أو الاستضافة أو رسوم واتساب؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "في أغلب العروض لا تشمل. رسوم الدومين والاستضافة وأدوات واتساب ومنصات الإعلانات تكون منفصلة، ونوضحها قبل بدء أي تنفيذ."
      }
    },
    {
      "@type": "Question",
      "name": "هل تضمنون نتائج المبيعات أو ترتيب البحث؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "لا نضمن أرقام المبيعات أو ترتيب محركات البحث، لكن كل عرض يحدد مخرجاته بوضوح، ونلتزم بالنطاق المتفق عليه."
      }
    },
    { "@type": "Question", "name": hubRegionFaq.ar.q, "acceptedAnswer": { "@type": "Answer", "text": hubRegionFaq.ar.a } }
  ]
};

export const metadata: Metadata = createMetadata({
  title: "باقات التسويق الإلكتروني وأسعارها | عروض ديوانك",
  description: `باقات تسويق إلكتروني بسعر بداية واضح للشركات في السعودية والخليج، من ${hubFacts.minSar} ريال: فيديو AI وريلز، محتوى سوشيال ميديا، إعلانات Google، صفحات هبوط ومواقع، SEO، هوية بصرية وأتمتة واتساب.`,
  path: "/offers",
  keywords: ["باقات التسويق الالكتروني", "اسعار التسويق الالكتروني", "خدمات التسويق الالكتروني", "باقات تسويق", "عروض تسويق", "اسعار باقات التسويق الالكتروني", "عروض تسويق رقمي", "باقة محتوى انستقرام", "تطوير حساب انستقرام", "تصميم موقع شركة", "موقع صغير للشركات", "تصميم صفحة هبوط", "فحص SEO للموقع", "واتساب أوتوميشن", "إعداد حملة Google Ads", "إنتاج فيديوهات بالذكاء الاصطناعي", "مونتاج ريلز", "تصميم فيديوهات إعلانية"],
});

export default function OffersPage() {
  const schema = hubItemListSchema("ar");

  return (
    <main className="inner-page oh-page">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <OffersHub
        locale="ar"
        faq={<>
          <details><summary>{hubPriceFaq.ar.q}</summary><p>{hubPriceFaq.ar.a}</p></details>
          <details><summary>ما الفرق بين العروض والخدمة الكاملة؟</summary><p>كل عرض له نطاق محدد وسعر يبدأ منه، وتجد في صفحته ما يشمله وما لا يشمله. الخدمات الأوسع، مثل إدارة السوشيال ميديا الشهرية أو إدارة الحملات، تُناقش بشكل منفصل.</p></details>
          <details><summary>كيف أختار العرض المناسب لي؟</summary><p>اختر حسب هدفك: محتوى، إعلانات، موقع، هوية، أو أتمتة. ولو لم تحدد هدفك بعد، أرسل نشاطك والنتيجة التي تريدها عبر واتساب، ونرشح لك البداية الأنسب.</p></details>
          <details><summary>هل الأسعار المعروضة نهائية؟</summary><p>السعر الظاهر في كل بطاقة هو سعر البداية، وتفاصيل كل عرض وما يشمله موضحة في صفحته. وقد تختلف الأسعار حسب السوق وطبيعة المشروع، وتؤكد قبل بدء التنفيذ.</p></details>
          <details><summary>كم تستغرق مدة التنفيذ؟</summary><p>تختلف المدة حسب العرض، وتظهر على كل بطاقة. تتراوح بين يومين و14 يوم عمل تقريبًا، ويبدأ التنفيذ بعد استلام المعلومات المطلوبة.</p></details>
          <details><summary>هل تشمل الأسعار الدومين أو الاستضافة أو رسوم واتساب؟</summary><p>في أغلب العروض لا تشمل. رسوم الدومين والاستضافة وأدوات واتساب ومنصات الإعلانات تكون منفصلة، ونوضحها قبل بدء أي تنفيذ.</p></details>
          <details><summary>هل تضمنون نتائج المبيعات أو ترتيب البحث؟</summary><p>لا نضمن أرقام المبيعات أو ترتيب محركات البحث، لكن كل عرض يحدد مخرجاته بوضوح، ونلتزم بالنطاق المتفق عليه.</p></details>
          <details><summary>{hubRegionFaq.ar.q}</summary><p>{hubRegionFaq.ar.a}</p></details>
        </>}
      />
      <Footer />
    </main>
  );
}
