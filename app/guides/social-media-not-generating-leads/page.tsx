import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../components/site-shell";
import { createMetadata, organizationId, siteUrl } from "../../lib/seo";
import "../guides.css";

const title = "حسابك جميل لكنه لا يجلب عملاء: أين المشكلة؟";
const description = "دليل عملي لتشخيص أسباب ضعف الاستفسارات والمبيعات من حسابات التواصل الاجتماعي، من الرسالة والعرض والثقة إلى الدعوة للإجراء ومسار متابعة العملاء.";

export const metadata: Metadata = createMetadata({
  title: `${title} | دليل ديوانك`,
  description,
  path: "/guides/social-media-not-generating-leads",
  keywords: ["حساب انستقرام لا يجلب عملاء", "زيادة مبيعات انستقرام", "تحويل المتابعين إلى عملاء", "تحسين حساب التواصل الاجتماعي", "إدارة حسابات التواصل الاجتماعي"],
});

const faqs = [
  { question: "لماذا يوجد تفاعل ولا توجد مبيعات؟", answer: "لأن التفاعل ليس نية شراء بالضرورة. قد يجذب المحتوى جمهورًا غير مناسب، أو يفتقد عرضًا واضحًا وثقة كافية وخطوة سهلة للطلب. قِس زيارات الملف والاستفسارات والعملاء المؤهلين، لا الإعجابات وحدها." },
  { question: "هل المشكلة في قلة المتابعين؟", answer: "ليس غالبًا. حساب صغير بجمهور مناسب ورسالة واضحة قد يبيع أكثر من حساب كبير بجمهور غير مؤهل. افحص جودة الجمهور ومسار التحويل قبل شراء نمو أو زيادة النشر." },
  { question: "هل أحتاج إلى نشر محتوى أكثر؟", answer: "ليس قبل معرفة نقطة التسرب. إذا كانت الرسالة أو العرض أو طريقة الطلب ضعيفة، فزيادة النشر ستضاعف الوصول إلى تجربة غير مقنعة. أصلح الأساس ثم اختبر وتيرة النشر." },
  { question: "متى أستخدم الإعلانات؟", answer: "بعد التأكد من وضوح العرض ووجود صفحة أو محادثة قادرة على تحويل الاهتمام إلى طلب. الإعلان يسرّع النظام الموجود؛ لا يصلح نظامًا ضعيفًا بمفرده." },
];

const problems = [
  ["العميل لا يفهم ما الذي تقدمه", "يجب أن يوضح الاسم والوصف والمحتوى خلال ثوانٍ: لمن تخدم، ما النتيجة، ولماذا يختارك العميل."],
  ["المحتوى جميل لكنه بلا رسالة", "التصميم يجذب الانتباه، لكن القرار يحتاج مشكلة واضحة وفائدة ودليلًا وخطوة تالية."],
  ["العرض عام أو قابل للاستبدال", "عبارات مثل جودة عالية وأفضل خدمة لا تصنع فرقًا. اربط العرض بنتيجة محددة وسياق عميل واضح."],
  ["الثقة غير كافية", "أظهر أعمالًا حقيقية، شهادات، طريقة العمل، أشخاص الفريق، وإجابات صريحة عن الأسئلة والاعتراضات."],
  ["الدعوة للإجراء ضعيفة", "لا تترك العميل يخمّن. اطلب خطوة واحدة بسيطة: إرسال النشاط، حجز مكالمة، أو طلب تقييم."],
  ["مسار الطلب مرهق", "كثرة الروابط والأسئلة وتأخر الرد تقتل النية. اختصر الطريق واضبط الرد والمتابعة."],
  ["الجمهور غير مناسب", "الوصول المرتفع لا يفيد إذا جاء من مناطق أو اهتمامات لا تطابق العميل الذي يستطيع الشراء."],
  ["لا يوجد قياس للتحويل", "من دون تتبع الزيارات والمحادثات والعملاء المؤهلين لن تعرف هل الخلل في المحتوى أم العرض أم المبيعات."],
];

export default function SocialMediaNotGeneratingLeadsGuide() {
  const url = `${siteUrl}/guides/social-media-not-generating-leads`;
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", "@id": `${url}#article`, headline: title, description, inLanguage: "ar", datePublished: "2026-08-03", dateModified: "2026-08-03", mainEntityOfPage: url, author: { "@id": organizationId }, publisher: { "@id": organizationId }, about: ["تحويل المتابعين إلى عملاء", "التسويق عبر التواصل الاجتماعي", "تحسين التحويل"] },
    { "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl }, { "@type": "ListItem", position: 2, name: "أدلة النمو", item: `${siteUrl}/guides` }, { "@type": "ListItem", position: 3, name: title, item: url }] },
  ] };

  return <main className="guides-page">
    <Header /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <article>
      <header className="article-hero shell">
        <nav className="article-breadcrumbs" aria-label="مسار الصفحة"><Link href="/">الرئيسية</Link><span>/</span><Link href="/guides">أدلة النمو</Link><span>/</span><span>السوشيال ميديا</span></nav>
        <h1>{title}</h1>
        <p>المشكلة ليست دائمًا في التصميم أو الخوارزمية. غالبًا توجد فجوة بين ما يراه العميل، وما يفهمه، وما يثق به، والخطوة التي تطلبها منه.</p>
        <div className="article-meta"><span>آخر تحديث: 3 أغسطس 2026</span><span>وقت القراءة: 8 دقائق</span><span>التركيز: التحويل</span></div>
      </header>
      <div className="article-layout shell">
        <div className="article-body">
          <h2 id="short-answer">الإجابة المختصرة</h2>
          <div className="article-answer"><p>الحساب الجميل لا يبيع تلقائيًا. لكي يتحول الاهتمام إلى عميل، يجب أن يجتمع جمهور مناسب مع رسالة واضحة، عرض مقنع، دليل ثقة، خطوة طلب سهلة، ورد سريع. أي كسر في هذه السلسلة قد يترك لك تفاعلًا بلا استفسارات أو استفسارات بلا مبيعات.</p></div>
          <h2 id="diagnosis">8 أسباب تمنع حسابك من جلب العملاء</h2>
          {problems.map(([heading, body], index) => <section key={heading}><h3>{index + 1}. {heading}</h3><p>{body}</p></section>)}
          <h2 id="test">اختبار الخمس ثواني</h2>
          <p>اعرض الملف على شخص لا يعرف نشاطك لخمس ثوانٍ، ثم اسأله: ماذا نبيع؟ لمن؟ لماذا أثق بنا؟ وكيف أطلب؟ إذا لم يستطع الإجابة، فالمشكلة في الوضوح قبل أن تكون في الوصول.</p>
          <h2 id="metrics">الأرقام التي تكشف نقطة التسرب</h2>
          <div className="article-table"><table><thead><tr><th>المؤشر</th><th>ماذا يكشف؟</th></tr></thead><tbody>
            <tr><td><strong>الوصول ← زيارة الملف</strong></td><td>هل المحتوى يخلق فضولًا مناسبًا؟</td></tr>
            <tr><td><strong>زيارة الملف ← رسالة</strong></td><td>هل العرض والثقة والـCTA مقنعة؟</td></tr>
            <tr><td><strong>رسالة ← عميل مؤهل</strong></td><td>هل الجمهور والرسالة يجذبان الشخص الصحيح؟</td></tr>
            <tr><td><strong>عميل مؤهل ← بيع</strong></td><td>هل الرد والمتابعة والسعر والعرض تعمل معًا؟</td></tr>
          </tbody></table></div>
          <h2 id="plan">خطة إصلاح مرتبة</h2>
          <ol>
            <li>اختر خدمة أو عرضًا رئيسيًا بدل محاولة بيع كل شيء في الوقت نفسه.</li>
            <li>أعد كتابة الوصف وأول المحتوى حول العميل والنتيجة، لا حول الشركة فقط.</li>
            <li>أضف أدلة ثقة واعتراضات وأسئلة شراء حقيقية إلى خطة المحتوى.</li>
            <li>اجعل الـCTA خطوة واحدة، واختبر سرعة الرد والمتابعة.</li>
            <li>تتبّع التحويل أسبوعيًا، ثم عدّل الحلقة الأضعف بدل زيادة المنشورات عشوائيًا.</li>
          </ol>
          <h2 id="ads">هل الإعلانات هي الحل؟</h2>
          <p>إذا كان الحساب لا يحوّل الزيارة إلى رسالة، فالإعلان سيشتري لك زيارات أكثر إلى نفس التسرب. أصلح العرض والمسار أولًا، ثم استخدم الإعلان لاختبار الرسالة وتوسيع ما ثبت نجاحه.</p>
          <p>وإذا كنت تقارن نطاق التنفيذ والتكلفة، راجع دليل <Link href="/guides/social-media-management-cost-saudi-arabia">أسعار إدارة حسابات التواصل الاجتماعي في السعودية</Link>.</p>
          <section className="article-faq" id="faq"><h2>أسئلة شائعة</h2>{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>
          <section className="article-cta"><h2>تريد معرفة أين يتسرب عملاؤك؟</h2><p>نراجع الرسالة والمحتوى والعرض ومسار الطلب، ثم نرتب التحسينات حسب أثرها بدل زيادة النشر بلا تشخيص.</p><Link className="button primary" href="/digital-marketing">استعرض حلول التسويق الرقمي <span>←</span></Link></section>
        </div>
        <aside className="article-side" aria-label="محتويات الدليل"><b>في هذا الدليل</b><a href="#short-answer">الإجابة المختصرة</a><a href="#diagnosis">أسباب ضعف التحويل</a><a href="#test">اختبار الخمس ثواني</a><a href="#metrics">مؤشرات التسرب</a><a href="#plan">خطة الإصلاح</a><a href="#ads">دور الإعلانات</a><a href="#faq">الأسئلة الشائعة</a><Link className="button primary" href="/contact">اطلب مراجعة حسابك</Link></aside>
      </div>
    </article><Footer />
  </main>;
}
