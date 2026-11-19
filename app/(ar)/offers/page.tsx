import type { Metadata } from "next";
import { Footer, Header } from "../../components/site-shell";
import OffersHub from "./offers-hub";
import { createMetadata, siteUrl } from "../../lib/seo";



const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
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
    }
  ]
};

export const metadata: Metadata = createMetadata({
  title: "عروض ديوانك | فيديوهات AI ومحتوى وإعلانات ومواقع",
  description: "عروض ديوانك للشركات في السعودية والخليج: إنتاج فيديوهات AI ومونتاج ريلز وإعلانات قصيرة، محتوى شهري، صفحات هبوط، SEO، أسماء تجارية، أتمتة واتساب والمزيد.",
  path: "/offers",
  keywords: ["عروض تسويق رقمي", "باقة محتوى انستقرام", "تطوير حساب انستقرام", "تصميم موقع شركة", "موقع صغير للشركات", "تصميم صفحة هبوط", "فحص SEO للموقع", "واتساب أوتوميشن", "إعداد حملة Google Ads", "إنتاج فيديوهات بالذكاء الاصطناعي", "مونتاج ريلز", "تصميم فيديوهات إعلانية"],
});

export default function OffersPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "عروض ديوانك",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "باقة محتوى إنستقرام لمدة شهر", url: `${siteUrl}/offers/30-day-content-package` },
      { "@type": "ListItem", position: 2, name: "باقة تصميم صفحة هبوط احترافية", url: `${siteUrl}/offers/landing-page-package` },
      { "@type": "ListItem", position: 3, name: "فحص SEO شامل للموقع", url: `${siteUrl}/offers/seo-audit` },
      { "@type": "ListItem", position: 4, name: "اختيار اسم تجاري + توجه أولي للعلامة", url: `${siteUrl}/offers/brand-naming` },
      { "@type": "ListItem", position: 5, name: "باقة واتساب أوتوميشن Starter", url: `${siteUrl}/offers/whatsapp-automation-starter` },
      { "@type": "ListItem", position: 6, name: "باقة هوية بصرية أساسية", url: `${siteUrl}/offers/mini-visual-identity` },
      { "@type": "ListItem", position: 7, name: "باقة إطلاق Google Ads", url: `${siteUrl}/offers/google-ads-launch` },
      { "@type": "ListItem", position: 8, name: "تطوير حساب إنستجرام خلال 14 يوم", url: `${siteUrl}/offers/instagram-14-day-upgrade` },
      { "@type": "ListItem", position: 9, name: "موقع صغير جاهز للإطلاق", url: `${siteUrl}/offers/small-business-website` },
      { "@type": "ListItem", position: 10, name: "فحص التحويل وتدقيق المسار", url: `${siteUrl}/conversion-rate-optimization` },
      { "@type": "ListItem", position: 11, name: "إنتاج فيديوهات AI وريلز إعلانية قصيرة", url: `${siteUrl}/offers/ai-video-production` },
    ],
  };

  return (
    <main className="inner-page oh-page">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <OffersHub
        locale="ar"
        faq={<>
          <details><summary>ما الفرق بين العروض والخدمة الكاملة؟</summary><p>كل عرض له نطاق محدد وسعر يبدأ منه، وتجد في صفحته ما يشمله وما لا يشمله. الخدمات الأوسع، مثل إدارة السوشيال ميديا الشهرية أو إدارة الحملات، تُناقش بشكل منفصل.</p></details>
          <details><summary>كيف أختار العرض المناسب لي؟</summary><p>اختر حسب هدفك: محتوى، إعلانات، موقع، هوية، أو أتمتة. ولو لم تحدد هدفك بعد، أرسل نشاطك والنتيجة التي تريدها عبر واتساب، ونرشح لك البداية الأنسب.</p></details>
          <details><summary>هل الأسعار المعروضة نهائية؟</summary><p>السعر الظاهر في كل بطاقة هو سعر البداية، وتفاصيل كل عرض وما يشمله موضحة في صفحته. وقد تختلف الأسعار حسب السوق وطبيعة المشروع، وتؤكد قبل بدء التنفيذ.</p></details>
          <details><summary>كم تستغرق مدة التنفيذ؟</summary><p>تختلف المدة حسب العرض، وتظهر على كل بطاقة. تتراوح بين يومين و14 يوم عمل تقريبًا، ويبدأ التنفيذ بعد استلام المعلومات المطلوبة.</p></details>
          <details><summary>هل تشمل الأسعار الدومين أو الاستضافة أو رسوم واتساب؟</summary><p>في أغلب العروض لا تشمل. رسوم الدومين والاستضافة وأدوات واتساب ومنصات الإعلانات تكون منفصلة، ونوضحها قبل بدء أي تنفيذ.</p></details>
          <details><summary>هل تضمنون نتائج المبيعات أو ترتيب البحث؟</summary><p>لا نضمن أرقام المبيعات أو ترتيب محركات البحث، لكن كل عرض يحدد مخرجاته بوضوح، ونلتزم بالنطاق المتفق عليه.</p></details>
        </>}
      />
      <Footer />
    </main>
  );
}
