import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../components/site-shell";
import { createMetadata, organizationId, siteUrl } from "../../lib/seo";
import "../guides.css";

const title = "لماذا Google Ads تجلب زيارات ولا تجلب عملاء؟";
const description = "تشخيص عملي لأسباب حصول حملات Google Ads على نقرات بدون عملاء: نية الكلمات، الإعلان، صفحة الهبوط، التتبع، سرعة الرد وجودة الاستفسارات.";

export const metadata: Metadata = createMetadata({
  title: `${title} | دليل ديوانك`,
  description,
  path: "/guides/google-ads-clicks-no-leads",
  keywords: ["Google Ads بدون عملاء", "جوجل ادز لا يجيب عملاء", "نقرات بدون تحويلات", "تحسين Google Ads", "تحسين حملات جوجل"],
});

const faqs = [
  { question: "هل كثرة النقرات تعني أن الحملة جيدة؟", answer: "لا. النقرات تعني أن الإعلان جذب اهتمامًا، لكن النجاح التجاري يتطلب أن تكون الكلمة مناسبة والصفحة مقنعة والتحويل مضبوطًا والاستفسار ذا جودة." },
  { question: "هل أغير الكلمات أولًا أم الصفحة؟", answer: "ابدأ بتقسيم البيانات. إذا الكلمات غير تجارية أو Search Terms غير مناسبة فابدأ بالاستهداف. إذا الزيارات ذات نية واضحة لكن لا تتواصل، فراجع الصفحة والعرض والثقة وCTA." },
  { question: "هل انخفاض التحويل يعني أن Google Ads لا تناسب نشاطي؟", answer: "ليس بالضرورة. قد تكون المشكلة في الإعداد أو الصفحة أو القياس. الحكم على القناة يحتاج اختبارًا مركزًا ببيانات كافية ومسار تحويل واضح." },
  { question: "ماذا أفعل إذا تأتي استفسارات كثيرة لكنها غير مؤهلة؟", answer: "راجع الكلمات ورسالة الإعلان والصفحة والأسئلة أو شروط العرض. أحيانًا يكون عدد التحويلات مرتفعًا لكن تعريف التحويل نفسه أو الرسالة يجذب جمهورًا غير مناسب." },
];

const causes = [
  ["1. الكلمات تجلب بحثًا لا شراء", "قد تبدو الكلمة مرتبطة بالخدمة لكنها معلوماتية أو واسعة. راجع Search Terms الفعلية، وافصل بين من يريد معرفة عامة ومن يبحث عن تنفيذ أو سعر أو مزود خدمة."],
  ["2. الإعلان يعد بشيء والصفحة تقول شيئًا آخر", "كلما قل التطابق بين نية البحث والعنوان والصفحة، زاد احتمال الخروج. اجعل أول شاشة تكمل نفس الوعد الذي ضغط عليه المستخدم."],
  ["3. الصفحة تحمل كل خدمات الشركة", "صفحة عامة تجبر الزائر على البحث داخل الموقع. الحملة الأفضل توجهه إلى صفحة تخدم نفس القرار بكلام وثقة وCTA واحد واضح."],
  ["4. العرض لا يزيل التردد", "الزائر قد يفهم الخدمة لكنه لا يجد نطاقًا أو دليل ثقة أو سببًا للتواصل الآن. وضّح ما الذي سيحدث بعد الضغط وما الذي سيحصل عليه."],
  ["5. تجربة الجوال أو السرعة تعطل القرار", "النقر المدفوع مكلف بما يكفي لعدم إهداره على زر صغير أو صفحة بطيئة أو نموذج مزعج. اختبر الصفحة على الهاتف الحقيقي قبل زيادة الميزانية."],
  ["6. التحويل مضبوط على حدث ضعيف", "إذا اعتبرت مشاهدة صفحة أو نقرة غير مهمة تحويلًا أساسيًا، قد تتعلم الحملة نحو نشاط لا يساوي عميلًا. اجعل الهدف أقرب إلى الاستفسار الحقيقي."],
  ["7. الكلمات السلبية ناقصة", "الاستعلامات غير المناسبة قد تستهلك جزءًا من الميزانية بصمت. راجعها دوريًا وأضف الاستبعادات التي لا تمثل عميلك."],
  ["8. الرد بعد الاستفسار بطيء", "نجاح الإعلان لا يضمن البيع. إذا وصل العميل إلى واتساب ثم انتظر طويلًا أو لم يجد تأهيلًا ومتابعة، ستظهر المشكلة وكأنها من Google وهي في آخر الرحلة."],
];

export default function GoogleAdsNoLeadsGuide() {
  const url = `${siteUrl}/guides/google-ads-clicks-no-leads`;
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", "@id": `${url}#article`, headline: title, description, inLanguage: "ar", datePublished: "2026-08-11", dateModified: "2026-08-11", mainEntityOfPage: url, author: { "@id": organizationId }, publisher: { "@id": organizationId }, about: ["Google Ads", "Conversion Rate Optimization", "Paid Search", "توليد العملاء"] },
    { "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl }, { "@type": "ListItem", position: 2, name: "أدلة النمو", item: `${siteUrl}/guides` }, { "@type": "ListItem", position: 3, name: title, item: url }] },
  ] };

  return <main className="guides-page"><Header /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <article><header className="article-hero shell"><nav className="article-breadcrumbs" aria-label="مسار الصفحة"><Link href="/">الرئيسية</Link><span>/</span><Link href="/guides">أدلة النمو</Link><span>/</span><span>Google Ads</span></nav><h1>{title}</h1><p>الحملة قد تنجح في شراء النقرات وتفشل في صناعة العميل. المشكلة غالبًا ليست زرًا واحدًا داخل Google Ads، بل فجوة بين البحث والإعلان والصفحة والقياس وما يحدث بعد الاستفسار.</p><div className="article-meta"><span>آخر تحديث: 11 أغسطس 2026</span><span>وقت القراءة: 8 دقائق</span><span>التركيز: التحويل</span></div></header>
    <div className="article-layout shell"><div className="article-body">
      <h2 id="short-answer">الإجابة المختصرة</h2><div className="article-answer"><p>لو عندك نقرات ولا يوجد عملاء، شخّص الرحلة بهذا الترتيب: <strong>Search Terms → الإعلان → صفحة الوصول → التحويل → جودة الاستفسار → سرعة المتابعة</strong>. لا تزود الميزانية قبل معرفة أي حلقة تتسرب منها الفرصة.</p></div>
      <h2 id="diagnosis">اقرأ الأرقام كرحلة</h2><div className="article-table"><table><thead><tr><th>ما تراه</th><th>المشكلة الأقرب</th><th>الفحص الأول</th></tr></thead><tbody><tr><td><strong>CTR جيد ولا تحويل</strong></td><td>الصفحة أو العرض</td><td>تطابق الرسالة وCTA</td></tr><tr><td><strong>نقرات من استعلامات غريبة</strong></td><td>الكلمات والمطابقة</td><td>Search Terms + Negative Keywords</td></tr><tr><td><strong>تحويلات كثيرة وجودة ضعيفة</strong></td><td>تعريف الهدف أو الرسالة</td><td>نوع التحويل + التأهيل</td></tr><tr><td><strong>استفسارات جيدة ولا مبيعات</strong></td><td>ما بعد الإعلان</td><td>زمن الرد والمتابعة</td></tr></tbody></table></div>
      <h2 id="causes">8 أسباب شائعة</h2>{causes.map(([heading, body]) => <section key={heading}><h3>{heading}</h3><p>{body}</p></section>)}
      <h2 id="order">ترتيب الإصلاح قبل زيادة الميزانية</h2><ol><li><strong>راجع Search Terms</strong> واحذف النية غير المناسبة.</li><li><strong>ثبت تحويلًا رئيسيًا</strong> يعكس استفسارًا حقيقيًا.</li><li><strong>طابق الإعلان بالصفحة</strong> من العنوان إلى CTA.</li><li><strong>اختبر الجوال والسرعة</strong> ونقاط الثقة.</li><li><strong>راجع جودة العملاء</strong> لا عدد التحويلات فقط.</li><li><strong>قِس زمن الرد والمتابعة</strong> بعد وصول العميل.</li><li><strong>ثم وسّع الميزانية</strong> على الكلمات والمسارات التي أثبتت نفسها.</li></ol>
      <p>إذا اكتشفت أن الصفحة نفسها هي نقطة التسرب، راجع <Link href="/guides/why-website-does-not-generate-leads">دليل لماذا موقعك لا يجلب عملاء</Link> أو <Link href="/offers/landing-page-package">عرض صفحة الهبوط</Link>. وإذا المشكلة في تأسيس الحملة من البداية، راجع <Link href="/offers/google-ads-launch">باقة إطلاق Google Ads</Link>.</p>
      <section className="article-faq" id="faq"><h2>أسئلة شائعة</h2>{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>
      <section className="article-cta"><h2>عندك حملة شغالة والنتيجة مش واضحة؟</h2><p>راجع الحملة كمنظومة من الكلمة حتى المتابعة، ثم أصلح الحلقة الأضعف قبل شراء نقرات إضافية.</p><Link className="button primary" href="/paid-ads">استعرض إدارة الإعلانات <span>←</span></Link></section>
    </div><aside className="article-side" aria-label="محتويات الدليل"><b>في هذا الدليل</b><a href="#short-answer">الإجابة المختصرة</a><a href="#diagnosis">تشخيص الأرقام</a><a href="#causes">الأسباب</a><a href="#order">ترتيب الإصلاح</a><a href="#faq">الأسئلة الشائعة</a><Link className="button primary" href="/contact">راجع حملتك معنا</Link></aside></div></article><Footer /></main>;
}
