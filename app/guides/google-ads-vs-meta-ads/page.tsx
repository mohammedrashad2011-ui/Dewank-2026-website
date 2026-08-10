import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../components/site-shell";
import { createMetadata, organizationId, siteUrl } from "../../lib/seo";
import "../guides.css";

const title = "Google Ads أم Meta Ads: أيهما أفضل لنشاطك؟";
const description = "مقارنة عملية بين Google Ads وMeta Ads حسب نية العميل، نوع العرض، الميزانية، دورة الشراء والقياس، مع طريقة اختيار القناة المناسبة لنشاطك.";

export const metadata: Metadata = createMetadata({
  title: `${title} | دليل ديوانك`,
  description,
  path: "/guides/google-ads-vs-meta-ads",
  keywords: ["Google Ads أم Meta Ads", "جوجل ادز ولا ميتا", "أفضل منصة إعلانية", "إعلانات جوجل", "إعلانات ميتا"],
});

const faqs = [
  { question: "هل Google Ads أفضل دائمًا للخدمات؟", answer: "لا. تكون قوية عندما يوجد بحث واضح بنية شراء، لكن بعض الخدمات تحتاج بناء وعي وثقة قبل أن يبدأ العميل بالبحث المباشر، وهنا قد تكون Meta أكثر فاعلية في بداية الرحلة." },
  { question: "هل يمكن استخدام Google وMeta معًا؟", answer: "نعم عندما تسمح الميزانية والقياس. يمكن أن تلتقط Google الطلب الموجود بينما تبني Meta الاهتمام وإعادة الاستهداف، لكن لا يجب تقسيم ميزانية صغيرة على قنوات كثيرة بلا بيانات كافية." },
  { question: "كيف أختار لو ميزانيتي محدودة؟", answer: "ابدأ بالقناة الأقرب إلى نية العميل الحالية. إذا الناس تبحث عن خدمتك بالاسم أو المشكلة، اختبر Search. إذا العرض بصري أو يحتاج اكتشافًا وشرحًا، اختبر Meta برسالة محددة." },
  { question: "هل القناة أهم من العرض؟", answer: "لا. عرض ضعيف وصفحة ضعيفة يمكن أن يهدرا الميزانية على أي منصة. اختيار القناة يجب أن يأتي مع رسالة واضحة ومسار تحويل قابل للقياس." },
];

export default function GoogleVsMetaGuide() {
  const url = `${siteUrl}/guides/google-ads-vs-meta-ads`;
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", "@id": `${url}#article`, headline: title, description, inLanguage: "ar", datePublished: "2026-08-11", dateModified: "2026-08-11", mainEntityOfPage: url, author: { "@id": organizationId }, publisher: { "@id": organizationId }, about: ["Google Ads", "Meta Ads", "Paid Media", "اختيار القناة"] },
    { "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl }, { "@type": "ListItem", position: 2, name: "أدلة النمو", item: `${siteUrl}/guides` }, { "@type": "ListItem", position: 3, name: title, item: url }] },
  ] };

  return <main className="guides-page"><Header /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <article><header className="article-hero shell"><nav className="article-breadcrumbs" aria-label="مسار الصفحة"><Link href="/">الرئيسية</Link><span>/</span><Link href="/guides">أدلة النمو</Link><span>/</span><span>الإعلانات المدفوعة</span></nav><h1>{title}</h1><p>السؤال ليس أي منصة أقوى في المطلق. السؤال: أين توجد نية العميل الآن، وهل نريد التقاط طلب موجود أم صناعة اهتمام ثم نقله إلى القرار؟</p><div className="article-meta"><span>آخر تحديث: 11 أغسطس 2026</span><span>وقت القراءة: 7 دقائق</span><span>التركيز: اختيار القناة</span></div></header>
    <div className="article-layout shell"><div className="article-body">
      <h2 id="short-answer">الإجابة المختصرة</h2><div className="article-answer"><p><strong>Google Ads</strong> تميل لأن تكون أقوى عندما يبحث العميل بالفعل عن الحل. <strong>Meta Ads</strong> تميل لأن تكون أقوى عندما تحتاج لخلق الانتباه واختبار الرسائل والوصول لجمهور لم يبدأ البحث بعد. الاختيار الصحيح يبدأ من نية العميل، لا من شهرة المنصة.</p></div>
      <h2 id="compare">مقارنة سريعة</h2><div className="article-table"><table><thead><tr><th>العنصر</th><th>Google Ads</th><th>Meta Ads</th></tr></thead><tbody><tr><td><strong>النية</strong></td><td>طلب موجود وبحث مباشر</td><td>اكتشاف واهتمام وإعادة استهداف</td></tr><tr><td><strong>أفضل مدخل</strong></td><td>كلمات بحث تجارية</td><td>زاوية إعلانية وCreative قوي</td></tr><tr><td><strong>الصفحة</strong></td><td>تطابق قوي مع الاستعلام</td><td>شرح وإقناع سريع من أول شاشة</td></tr><tr><td><strong>الاختبار</strong></td><td>كلمات وإعلانات وصفحات</td><td>جمهور ورسالة وتصميم وعرض</td></tr><tr><td><strong>الخطر الشائع</strong></td><td>دفع مقابل بحث غير مناسب</td><td>وصول كبير بلا نية كافية</td></tr></tbody></table></div>
      <h2 id="google">اختر Google عندما...</h2><ul><li>العميل يكتب اسم الخدمة أو المشكلة في البحث.</li><li>لديك صفحة واضحة تستقبل نفس نية الكلمة.</li><li>تريد التقاط طلب قريب من قرار التواصل أو الشراء.</li><li>يمكنك قياس واتساب أو نموذج أو مكالمة كتحويل.</li></ul>
      <h2 id="meta">اختر Meta عندما...</h2><ul><li>المنتج أو الخدمة تحتاج اكتشافًا بصريًا أو شرحًا قبل البحث.</li><li>لديك Creative ورسائل مختلفة تريد اختبارها بسرعة.</li><li>تريد بناء جمهور وإعادة استهداف من تفاعل أو زار الموقع.</li><li>رحلة العميل تبدأ بالاهتمام أكثر من البحث المباشر.</li></ul>
      <h2 id="both">متى تستخدمهما معًا؟</h2><p>إذا كانت البيانات والميزانية كافيتين، يمكن لـMeta أن تخلق الاهتمام وتعيد الاستهداف، بينما تلتقط Google من وصل إلى مرحلة البحث. لكن تشغيل القناتين معًا لا يكون ميزة إذا كان التتبع ضعيفًا أو الميزانية لا تسمح لكل قناة بجمع بيانات مفيدة.</p>
      <p>لو قررت أن Google هي نقطة البداية، راجع <Link href="/guides/google-ads-cost-saudi-arabia">دليل تكلفة Google Ads في السعودية</Link> ثم <Link href="/offers/google-ads-launch">باقة إطلاق Google Ads</Link> إذا كنت تحتاج تأسيس حملة Search محددة. ولو تحتاج إدارة أكثر شمولًا للقنوات، راجع <Link href="/paid-ads">خدمة إدارة الإعلانات المدفوعة</Link>.</p>
      <section className="article-faq" id="faq"><h2>أسئلة شائعة</h2>{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>
      <section className="article-cta"><h2>مش عارف تبدأ من أي قناة؟</h2><p>ابدأ من نية العميل والعرض ومسار التحويل، وبعدها اختر المنصة التي تخدم المرحلة بدل تشغيل الاثنين لمجرد الحضور.</p><Link className="button primary" href="/paid-ads">استعرض خدمة الإعلانات <span>←</span></Link></section>
    </div><aside className="article-side" aria-label="محتويات الدليل"><b>في هذا الدليل</b><a href="#short-answer">الإجابة المختصرة</a><a href="#compare">المقارنة</a><a href="#google">متى تختار Google</a><a href="#meta">متى تختار Meta</a><a href="#both">استخدام القناتين</a><a href="#faq">الأسئلة الشائعة</a><Link className="button primary" href="/contact">ناقش حملتك</Link></aside></div></article><Footer /></main>;
}
