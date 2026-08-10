import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../components/site-shell";
import { createMetadata, organizationId, siteUrl } from "../../lib/seo";
import "../guides.css";

const title = "كم تكلفة إعلانات Google في السعودية؟";
const description = "دليل عملي لفهم تكلفة Google Ads في السعودية: ميزانية المنصة، تكلفة الإعداد والإدارة، صفحة الهبوط والتتبع، وكيف تحدد ميزانية اختبار منطقية.";

export const metadata: Metadata = createMetadata({
  title: `${title} | دليل ديوانك`,
  description,
  path: "/guides/google-ads-cost-saudi-arabia",
  keywords: ["تكلفة إعلانات جوجل في السعودية", "سعر Google Ads", "ميزانية جوجل ادز", "إدارة إعلانات جوجل", "Google Ads السعودية"],
});

const faqs = [
  { question: "هل Google Ads لها سعر ثابت؟", answer: "لا. تكلفة النقر والمنافسة تختلف حسب الكلمة والسوق والموقع الجغرافي وجودة الإعلان والصفحة. لذلك الأفضل بناء ميزانية اختبار مرتبطة بعدد النقرات والتحويلات المطلوبة بدل البحث عن رقم موحد." },
  { question: "هل ميزانية Google تشمل أتعاب الإدارة؟", answer: "عادة لا. ميزانية الإعلانات تُدفع إلى Google، بينما الإعداد أو الإدارة أو تصميم صفحة الهبوط أو التتبع تكون بنودًا منفصلة حسب نطاق مقدم الخدمة." },
  { question: "هل أبدأ بميزانية كبيرة؟", answer: "ليس بالضرورة. البداية الأفضل هي ميزانية تكفي لجمع بيانات قابلة للقراءة على عدد محدود من الكلمات والصفحات، ثم زيادة الإنفاق بعد ظهور إشارات جودة وتحويل واضحة." },
  { question: "متى أحتاج صفحة هبوط مستقلة؟", answer: "إذا كانت الصفحة الحالية بطيئة أو عامة أو تعرض خدمات كثيرة أو لا تحتوي على CTA واضح وقياس للتحويل، فقد تكون صفحة هبوط مخصصة أكثر كفاءة للحملة." },
];

export default function GoogleAdsCostGuide() {
  const url = `${siteUrl}/guides/google-ads-cost-saudi-arabia`;
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", "@id": `${url}#article`, headline: title, description, inLanguage: "ar-SA", datePublished: "2026-08-11", dateModified: "2026-08-11", mainEntityOfPage: url, author: { "@id": organizationId }, publisher: { "@id": organizationId }, about: ["Google Ads", "تكلفة الإعلانات", "السعودية", "إعلانات البحث"] },
    { "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl }, { "@type": "ListItem", position: 2, name: "أدلة النمو", item: `${siteUrl}/guides` }, { "@type": "ListItem", position: 3, name: title, item: url }] },
  ] };

  return <main className="guides-page">
    <Header /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <article>
      <header className="article-hero shell">
        <nav className="article-breadcrumbs" aria-label="مسار الصفحة"><Link href="/">الرئيسية</Link><span>/</span><Link href="/guides">أدلة النمو</Link><span>/</span><span>Google Ads</span></nav>
        <h1>{title}</h1>
        <p>تكلفة Google Ads ليست رقمًا واحدًا. هناك إنفاق المنصة، وإعداد الحملة، والإدارة، وصفحة الوصول، والتتبع. المهم أن تعرف أي جزء تدفع مقابله ومتى يصبح الإنفاق قابلًا للقياس.</p>
        <div className="article-meta"><span>آخر تحديث: 11 أغسطس 2026</span><span>وقت القراءة: 7 دقائق</span><span>السوق: السعودية</span></div>
      </header>
      <div className="article-layout shell"><div className="article-body">
        <h2 id="short-answer">الإجابة المختصرة</h2>
        <div className="article-answer"><p>حدد تكلفة Google Ads على أربع طبقات: <strong>ميزانية المنصة + التأسيس أو الإدارة + صفحة الهبوط + القياس</strong>. لا تبدأ من سؤال «كم أدفع؟» فقط، بل من تكلفة العميل المقبولة وعدد الفرص التي تحتاجها حتى تعرف هل الميزانية منطقية.</p></div>
        <h2 id="components">مم تتكون التكلفة؟</h2>
        <div className="article-table"><table><thead><tr><th>البند</th><th>ماذا يغطي؟</th><th>لماذا يهم؟</th></tr></thead><tbody>
          <tr><td><strong>ميزانية Google</strong></td><td>النقرات والوصول داخل المنصة</td><td>هي الوقود الفعلي للحملة</td></tr>
          <tr><td><strong>الإعداد والإدارة</strong></td><td>الكلمات، الهيكل، الإعلانات، السلبية والتحسين</td><td>تحدد جودة استخدام الميزانية</td></tr>
          <tr><td><strong>صفحة الوصول</strong></td><td>الرسالة والثقة وCTA وتجربة الجوال</td><td>تحول النقرة إلى فرصة</td></tr>
          <tr><td><strong>القياس</strong></td><td>GA4 والتحويلات وواتساب والنماذج</td><td>يخبرك ما الذي يبيع فعلًا</td></tr>
        </tbody></table></div>
        <h2 id="budget">كيف تحدد ميزانية اختبار؟</h2>
        <p>ابدأ بعدد محدود من الكلمات عالية النية، ومنطقة جغرافية واضحة، وتحويل رئيسي واحد. الهدف في المرحلة الأولى ليس الوصول لأكبر جمهور، بل معرفة هل البحث الموجود في السوق يتحول إلى استفسارات بجودة مقبولة.</p>
        <p>إذا وزعت الميزانية على عشرات الكلمات والحملات من البداية، قد ينتهي الاختبار قبل أن يحصل أي مسار على بيانات كافية. لذلك نفضل اختبارًا مركزًا ثم توسيع ما يثبت نفسه.</p>
        <h2 id="expensive">متى تبدو Google Ads غالية وهي ليست المشكلة؟</h2>
        <ul><li>الكلمة صحيحة لكن صفحة الوصول لا تطابق نية الباحث.</li><li>الإعلانات تجلب نقرات فضولية لأن الرسالة عامة.</li><li>التحويل غير مضبوط، فتُحسب كل الزيارات كأنها متساوية.</li><li>لا توجد كلمات سلبية تمنع البحث غير المناسب.</li><li>زمن الرد بعد الاستفسار طويل فتضيع الفرصة بعد نجاح الإعلان.</li></ul>
        <p>لو عندك نقرات بالفعل لكن لا تتحول إلى فرص، اقرأ دليل <Link href="/guides/google-ads-clicks-no-leads">لماذا Google Ads تجلب زيارات ولا تجلب عملاء؟</Link>.</p>
        <h2 id="starting">متى تبدأ بخدمة تأسيس فقط؟</h2>
        <p>إذا عندك موقع أو صفحة جاهزة، عرض واضح، وتريد حملة Search محددة، قد يكون التأسيس المنظم كافيًا كبداية قبل الدخول في إدارة شهرية. راجع <Link href="/offers/google-ads-launch">باقة إطلاق Google Ads</Link> لمعرفة نطاق التأسيس، أو <Link href="/paid-ads">خدمة إدارة الإعلانات</Link> إذا كنت تحتاج إدارة وتحسينًا مستمرًا.</p>
        <section className="article-faq" id="faq"><h2>أسئلة شائعة</h2>{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>
        <section className="article-cta"><h2>تريد تعرف نقطة البداية المناسبة؟</h2><p>حدد هدف الحملة والصفحة الحالية والسوق، ثم اختر بين تأسيس حملة واحدة أو إدارة مستمرة حسب الحاجة.</p><Link className="button primary" href="/paid-ads">استعرض خدمة الإعلانات <span>←</span></Link></section>
      </div><aside className="article-side" aria-label="محتويات الدليل"><b>في هذا الدليل</b><a href="#short-answer">الإجابة المختصرة</a><a href="#components">مكونات التكلفة</a><a href="#budget">ميزانية الاختبار</a><a href="#expensive">متى يبدو الإعلان غاليًا</a><a href="#starting">اختيار نقطة البداية</a><a href="#faq">الأسئلة الشائعة</a><Link className="button primary" href="/offers/google-ads-launch">شاهد باقة الإطلاق</Link></aside></div>
    </article><Footer />
  </main>;
}
