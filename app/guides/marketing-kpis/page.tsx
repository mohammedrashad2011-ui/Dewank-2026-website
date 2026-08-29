import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../components/site-shell";
import { createMetadata, organizationId, siteUrl } from "../../lib/seo";
import "../guides.css";

const title = "مؤشرات الأداء في التسويق: أهم KPIs للشركات";
const description = "دليل عملي لمؤشرات الأداء التسويقي: الوصول، CTR، التحويل، تكلفة العميل المحتمل، CAC، ROAS، الإيراد، والفرق بين المؤشرات التشغيلية والتجارية.";

export const metadata: Metadata = createMetadata({
  title: `${title} | ديوانك`,
  description,
  path: "/guides/marketing-kpis",
  keywords: ["مؤشرات الأداء", "مؤشرات الأداء التسويقي", "KPIs التسويق", "مؤشرات التسويق", "قياس أداء التسويق"],
});

const metrics = [
  ["Reach / Impressions", "مفيد لمعرفة حجم الظهور، لكنه لا يثبت وحده وجود طلب أو أثر تجاري."],
  ["CTR", "يقيس قدرة الإعلان أو الرابط على تحويل الظهور إلى زيارة، ويكشف غالبًا قوة الرسالة أو مدى ملاءمتها للجمهور."],
  ["Conversion Rate", "نسبة الزوار الذين أكملوا الإجراء المطلوب. تربط جودة الزيارة بوضوح الصفحة والعرض والـCTA."],
  ["CPL", "تكلفة العميل المحتمل. يجب قراءتها مع جودة الـLead، لأن الرقم المنخفض قد يخفي فرصًا ضعيفة."],
  ["CAC", "تكلفة اكتساب عميل فعلي، وهي أهم من تكلفة الـLead عندما تتوفر بيانات المبيعات والمتابعة."],
  ["ROAS", "الإيراد المنسوب للإنفاق الإعلاني. مفيد للحملات، لكنه لا يشمل دائمًا كامل تكاليف التسويق والتشغيل."],
  ["Lead-to-Sale Rate", "نسبة الفرص التي تتحول إلى مبيعات. تكشف أثر التأهيل وسرعة الرد والمتابعة بجانب جودة التسويق."],
  ["Revenue / Pipeline", "المؤشر الأقرب للهدف التجاري: قيمة المبيعات أو الفرص الناتجة عن التسويق خلال فترة محددة."],
];

export default function MarketingKpisGuide() {
  const url = `${siteUrl}/guides/marketing-kpis`;
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", "@id": `${url}#article`, headline: title, description, inLanguage: "ar", datePublished: "2026-08-30", dateModified: "2026-08-30", mainEntityOfPage: url, author: { "@id": organizationId }, publisher: { "@id": organizationId }, about: ["مؤشرات الأداء التسويقي", "KPIs", "قياس التسويق"] },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl }, { "@type": "ListItem", position: 2, name: "أدلة النمو", item: `${siteUrl}/guides` }, { "@type": "ListItem", position: 3, name: title, item: url }] },
  ] };

  return <main className="guides-page">
    <Header /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <article>
      <header className="article-hero shell">
        <nav className="article-breadcrumbs" aria-label="مسار الصفحة"><Link href="/">الرئيسية</Link><span>/</span><Link href="/guides">أدلة النمو</Link><span>/</span><span>مؤشرات الأداء</span></nav>
        <h1>{title}</h1>
        <p>مؤشرات الأداء ليست لوحة مليئة بالأرقام. المؤشر الجيد يجيب عن سؤال: هل نتحرك نحو هدف تجاري، وأين يتسرب العميل إذا لم نصل إليه؟</p>
        <div className="article-meta"><span>آخر تحديث: 30 أغسطس 2026</span><span>وقت القراءة: 8 دقائق</span><span>التركيز: القياس والقرار</span></div>
      </header>
      <div className="article-layout shell">
        <div className="article-body">
          <h2>ما أهم مؤشرات الأداء في التسويق؟</h2>
          <div className="article-answer"><p>ابدأ من النتيجة النهائية ثم ارجع للخلف: <strong>الإيراد أو الـPipeline → العملاء → الفرص المؤهلة → التحويلات → الزيارات → الظهور.</strong> كلما اقترب المؤشر من المبيعات، زادت قيمته في اتخاذ القرار.</p></div>
          <h2>أهم KPIs التي تحتاجها الشركات</h2>
          {metrics.map(([heading, body]) => <section key={heading}><h3>{heading}</h3><p>{body}</p></section>)}
          <h2>مؤشرات حسب مرحلة رحلة العميل</h2>
          <div className="article-table"><table><thead><tr><th>المرحلة</th><th>مؤشرات مناسبة</th></tr></thead><tbody>
            <tr><td>الوعي</td><td>Reach، Impressions، Video Views</td></tr>
            <tr><td>الاهتمام</td><td>CTR، Engagement، Landing Page Views</td></tr>
            <tr><td>التحويل</td><td>Conversion Rate، CPL، Qualified Leads</td></tr>
            <tr><td>المبيعات</td><td>Lead-to-Sale Rate، CAC، Revenue، ROAS</td></tr>
            <tr><td>الاحتفاظ</td><td>Repeat Purchase، Retention، LTV عند توفر البيانات</td></tr>
          </tbody></table></div>
          <h2>لا تقرأ الإعلان بمعزل عن باقي الرحلة</h2>
          <p>إذا كان CTR جيدًا لكن المبيعات ضعيفة، فالمشكلة قد تكون في الصفحة أو العرض أو المتابعة. راجع <Link href="/paid-ads">خدمة إدارة الإعلانات</Link>، و<Link href="/seo-aeo">SEO وAEO</Link>، و<Link href="/whatsapp-automation">أتمتة واتساب وCRM</Link> كأجزاء مترابطة من نفس مسار القياس.</p>
          <h2>حوّل المؤشرات إلى قرارات</h2>
          <p>حدد مؤشرًا رئيسيًا واحدًا لكل هدف، ومجموعة صغيرة من المؤشرات التشخيصية. إذا كانت شركتك تحتاج نظامًا أشمل، ابدأ من <Link href="/digital-marketing">استراتيجية التسويق الرقمي</Link> أو راجع <Link href="/services">خدمات ديوانك</Link>.</p>
        </div>
        <aside className="article-aside"><div className="article-aside-card"><small>الأرقام كثيرة؟</small><h3>اربط القياس بالقرار.</h3><p>نحدد ما يستحق القياس وما الذي يجب تجاهله حتى تصبح التقارير أداة نمو لا أرشيفًا.</p><Link className="button primary" href="/contact">ناقش القياس <span>←</span></Link></div></aside>
      </div>
    </article>
    <Footer />
  </main>;
}
