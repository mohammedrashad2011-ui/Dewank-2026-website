import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../components/site-shell";
import { createMetadata, organizationId, siteUrl } from "../../lib/seo";
import "../guides.css";

const title = "نموذج خطة تسويقية جاهزة للشركات: الخطوات والمكونات";
const description = "نموذج عملي لبناء خطة تسويقية للشركات: الهدف، الجمهور، العرض، القنوات، المحتوى، الميزانية، مؤشرات الأداء وخطة التنفيذ والتحسين.";

export const metadata: Metadata = createMetadata({
  title: `${title} | ديوانك`,
  description,
  path: "/guides/marketing-plan-template",
  keywords: ["خطة تسويقية", "نموذج خطة تسويقية", "استراتيجية التسويق", "خطة تسويق رقمي", "إعداد خطة تسويقية"],
});

const steps = [
  ["1. حدّد الهدف التجاري", "ابدأ بنتيجة واضحة مثل زيادة الطلبات المؤهلة أو إطلاق خدمة أو رفع نسبة التحويل. لا تجعل الوصول أو عدد المنشورات هو الهدف النهائي."],
  ["2. عرّف الجمهور والقرار", "اكتب من يشتري، وما المشكلة التي يحاول حلها، وما الاعتراضات، ومن يؤثر في القرار."],
  ["3. صغ العرض والقيمة", "حدّد لماذا يختارك العميل، وما الذي يحصل عليه، وما الذي يقلل المخاطرة أو التردد."],
  ["4. اختر القنوات حسب الدور", "قسّم القنوات إلى اكتشاف، وطلب مباشر، وإعادة استهداف، ومتابعة واحتفاظ."],
  ["5. ابنِ نظام المحتوى", "حوّل الرسائل الرئيسية إلى محتوى يشرح المشكلة والحل والدليل والاعتراضات، ثم اربط كل قطعة بخطوة تالية واضحة."],
  ["6. وزّع الميزانية والموارد", "افصل بين إنفاق المنصات، والإنتاج، والأدوات، وأتعاب الإدارة. اترك مساحة للاختبار."],
  ["7. حدّد مؤشرات الأداء", "اربط كل مرحلة بمؤشر مثل نسبة التحويل، تكلفة الـLead، جودة الفرصة، تكلفة الاكتساب والإيراد عند توفر البيانات."],
  ["8. ضع دورة تحسين", "راجع أسبوعيًا الإشارات التشغيلية وشهريًا النتيجة التجارية. أوقف ما لا يعمل ووسّع ما يثبت أثره."],
];

export default function MarketingPlanTemplateGuide() {
  const url = `${siteUrl}/guides/marketing-plan-template`;
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", "@id": `${url}#article`, headline: title, description, inLanguage: "ar", datePublished: "2026-08-30", dateModified: "2026-08-30", mainEntityOfPage: url, author: { "@id": organizationId }, publisher: { "@id": organizationId }, about: ["خطة تسويقية", "استراتيجية التسويق", "التسويق الرقمي"] },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl }, { "@type": "ListItem", position: 2, name: "أدلة النمو", item: `${siteUrl}/guides` }, { "@type": "ListItem", position: 3, name: title, item: url }] },
  ] };

  return <main className="guides-page">
    <Header /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <article>
      <header className="article-hero shell">
        <nav className="article-breadcrumbs" aria-label="مسار الصفحة"><Link href="/">الرئيسية</Link><span>/</span><Link href="/guides">أدلة النمو</Link><span>/</span><span>الخطة التسويقية</span></nav>
        <h1>{title}</h1>
        <p>الخطة التسويقية الجيدة ليست ملفًا طويلًا. هي مجموعة قرارات واضحة تربط الهدف والجمهور والعرض والقنوات والميزانية والقياس داخل مسار واحد قابل للتنفيذ.</p>
        <div className="article-meta"><span>آخر تحديث: 30 أغسطس 2026</span><span>وقت القراءة: 9 دقائق</span><span>التركيز: التخطيط والتنفيذ</span></div>
      </header>
      <div className="article-layout shell">
        <div className="article-body">
          <h2>نموذج الخطة التسويقية في صفحة واحدة</h2>
          <div className="article-answer"><p><strong>الهدف → الجمهور → العرض → الرسالة → القنوات → المحتوى → الميزانية → KPIs → دورة التحسين.</strong> إذا لم تستطع تلخيص خطتك بهذه السلسلة، فغالبًا توجد قرارات لم تُحسم بعد.</p></div>
          <h2>الخطوات والمكونات الأساسية</h2>
          {steps.map(([heading, body]) => <section key={heading}><h3>{heading}</h3><p>{body}</p></section>)}
          <h2>مثال مختصر لشركة خدمات</h2>
          <div className="article-table"><table><thead><tr><th>المكوّن</th><th>مثال</th></tr></thead><tbody>
            <tr><td>الهدف</td><td>20 فرصة مبيعات مؤهلة شهريًا</td></tr>
            <tr><td>الجمهور</td><td>مديرو الشركات الصغيرة والمتوسطة في السعودية</td></tr>
            <tr><td>العرض</td><td>خدمة محددة النطاق مع نتيجة ومدة واضحتين</td></tr>
            <tr><td>القنوات</td><td>Google للطلب المباشر + LinkedIn/Instagram للثقة + WhatsApp للمتابعة</td></tr>
            <tr><td>المؤشر الرئيسي</td><td>تكلفة الفرصة المؤهلة ونسبة التحول إلى بيع</td></tr>
          </tbody></table></div>
          <h2>ما الفرق بين الخطة والاستراتيجية؟</h2>
          <p><Link href="/digital-marketing">استراتيجية التسويق الرقمي</Link> تحدد أين ننافس ولماذا وما الأولويات، بينما الخطة تحول هذه القرارات إلى قنوات ومحتوى وميزانية وجدول وقياس.</p>
          <h2>الخطوة التالية</h2>
          <p>إذا كنت تحتاج جهة تنفذ الخطة عبر أكثر من تخصص، راجع <Link href="/services">خدمات ديوانك كشركة تسويق في السعودية</Link>. وإذا كانت المشكلة في التخطيط نفسه، ابدأ من <Link href="/digital-marketing">خدمة استراتيجية التسويق الرقمي</Link>.</p>
        </div>
        <aside className="article-aside"><div className="article-aside-card"><small>تحتاج خطة قابلة للتنفيذ؟</small><h3>ابدأ من الهدف، لا من المنصة.</h3><p>نراجع العرض والجمهور والقنوات والقياس ونحدد أقصر مسار عملي.</p><Link className="button primary" href="/contact">ناقش خطتك <span>←</span></Link></div></aside>
      </div>
    </article>
    <Footer />
  </main>;
}
