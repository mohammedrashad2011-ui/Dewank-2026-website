import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../components/site-shell";
import { createMetadata, organizationId, siteUrl } from "../../lib/seo";
import "../guides.css";

const title = "أسعار إدارة السوشيال ميديا في السعودية: الباقات والتكلفة";
const description = "دليل أسعار إدارة السوشيال ميديا في السعودية: نطاقات التكلفة، الفرق بين الإدارة الشهرية وباقات المحتوى، وما الذي يدخل في السعر قبل التعاقد.";

export const metadata: Metadata = createMetadata({
  title: `${title} | دليل ديوانك`,
  description,
  path: "/guides/social-media-management-cost-saudi-arabia",
  keywords: ["أسعار إدارة السوشيال ميديا", "أسعار إدارة حسابات التواصل الاجتماعي في السعودية", "باقات إدارة السوشيال ميديا", "تكلفة إدارة انستقرام", "أسعار صناعة المحتوى في السعودية", "سعر إدارة حسابات التواصل الاجتماعي"],
});

const faqs = [
  { question: "كم سعر إدارة حسابات التواصل الاجتماعي شهريًا؟", answer: "تبدأ الخدمات المحدودة غالبًا من 1,500 إلى 3,500 ريال شهريًا، بينما تتراوح الإدارة المتكاملة للمشروعات الصغيرة والمتوسطة غالبًا بين 3,500 و8,000 ريال، وقد تتجاوز 8,000 ريال عند تعدد المنصات أو زيادة إنتاج الفيديو والتصوير. هذه نطاقات إرشادية وليست قائمة أسعار ديوانك." },
  { question: "هل توجد باقة أرخص إذا كنت أحتاج المحتوى فقط؟", answer: "نعم. إذا كنت لا تحتاج إدارة رسائل أو نشرًا يوميًا أو إدارة مجتمع، فقد تكون باقة محتوى محددة لمدة 30 يومًا أنسب وأوضح من التعاقد على إدارة شهرية كاملة." },
  { question: "هل تصوير المنتجات والفيديو ضمن الباقة؟", answer: "ليس دائمًا. التصميم والكتابة قد يكونان ضمن الإدارة الشهرية، لكن جلسات التصوير والموديل والموقع والمونتاج المتقدم غالبًا تسعّر كبند مستقل." },
  { question: "هل إدارة الإعلانات ضمن إدارة الحسابات؟", answer: "غالبًا تكون خدمة منفصلة، كما أن ميزانية الإعلان المدفوعة إلى Meta أو TikTok لا تدخل ضمن أتعاب إدارة السوشيال ميديا." },
  { question: "هل زيادة عدد المنشورات تعني باقة أفضل؟", answer: "لا. الباقة الأفضل هي التي تربط المحتوى بهدف تجاري واضح وتحافظ على الجودة والاستمرارية، لا التي تكدّس أكبر عدد من القطع." },
];

const scope = [
  ["الاستراتيجية وخطة المحتوى", "تحديد الجمهور، الرسائل، محاور المحتوى، المنصات المناسبة وجدول النشر."],
  ["الكتابة والتصميم", "عدد محدد من المنشورات والقصص والفيديوهات مع مستوى الإنتاج وجولات المراجعة."],
  ["النشر وإدارة الحساب", "الجدولة، تحسين النصوص والوسوم والملف، ومتابعة التنفيذ وفق التقويم."],
  ["التفاعل وخدمة المجتمع", "الردود والتعليقات وتحويل الاستفسارات، مع تحديد ساعات العمل وحدود المسؤولية."],
  ["التقارير والتحسين", "قياس الوصول والتفاعل والزيارات والاستفسارات وما يمكن ربطه بالمبيعات، ثم تعديل الخطة."],
];

export default function SocialMediaManagementCostGuide() {
  const url = `${siteUrl}/guides/social-media-management-cost-saudi-arabia`;
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", "@id": `${url}#article`, headline: title, description, inLanguage: "ar", datePublished: "2026-08-03", dateModified: "2026-08-12", mainEntityOfPage: url, author: { "@id": organizationId }, publisher: { "@id": organizationId }, about: ["إدارة السوشيال ميديا", "أسعار إدارة حسابات التواصل الاجتماعي", "باقات السوشيال ميديا", "صناعة المحتوى"] },
    { "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl }, { "@type": "ListItem", position: 2, name: "أدلة النمو", item: `${siteUrl}/guides` }, { "@type": "ListItem", position: 3, name: title, item: url }] },
  ] };

  return <main className="guides-page">
    <Header /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <article>
      <header className="article-hero shell">
        <nav className="article-breadcrumbs" aria-label="مسار الصفحة"><Link href="/">الرئيسية</Link><span>/</span><Link href="/guides">أدلة النمو</Link><span>/</span><span>أسعار السوشيال ميديا</span></nav>
        <h1>{title}</h1>
        <p>لو تبحث عن السعر، أهم سؤال بعده مباشرة هو: هل تحتاج إدارة حساب كاملة، أم تحتاج إنتاج محتوى فقط؟ الفرق بين الاثنين يغيّر التكلفة أكثر من عدد البوستات نفسه.</p>
        <div className="article-meta"><span>آخر تحديث: 12 أغسطس 2026</span><span>وقت القراءة: 9 دقائق</span><span>التركيز: السعر واختيار النطاق</span></div>
      </header>
      <div className="article-layout shell">
        <div className="article-body">
          <h2 id="short-answer">الإجابة المختصرة</h2>
          <div className="article-answer"><p><strong>الإدارة الشهرية ليست نفس باقة صناعة المحتوى.</strong> في السعودية تبدأ الإدارة المحدودة عادة من 1,500 إلى 3,500 ريال شهريًا، وتتراوح الإدارة المتكاملة غالبًا بين 3,500 و8,000 ريال، وقد تتجاوز ذلك مع تعدد المنصات والفيديو والتصوير. أما إذا كان احتياجك محتوى جاهزًا فقط، فقد تكون باقة محددة مثل <Link href="/offers/30-day-content-package">محتوى 30 يومًا</Link> أكثر كفاءة وأقل التزامًا.</p></div>

          <h2 id="choose">اختَر نوع الخدمة قبل مقارنة السعر</h2>
          <div className="article-table"><table><thead><tr><th>احتياجك</th><th>الخيار الأنسب</th><th>الخطوة التالية</th></tr></thead><tbody>
            <tr><td>أفكار + تصميم + كابشنات + خطة شهر</td><td><strong>باقة محتوى محددة</strong></td><td><Link href="/offers/30-day-content-package">راجع باقة 30 يومًا</Link></td></tr>
            <tr><td>نشر مستمر + متابعة + تطوير + تقارير</td><td><strong>إدارة شهرية</strong></td><td><Link href="/services/social-media-content">راجع خدمة الإدارة</Link></td></tr>
            <tr><td>حملات مدفوعة وجلب Leads</td><td><strong>إدارة إعلانات مستقلة</strong></td><td><Link href="/paid-ads">راجع الإعلانات المدفوعة</Link></td></tr>
          </tbody></table></div>

          <h2 id="ranges">نطاقات الأسعار المتوقعة للإدارة الشهرية</h2>
          <div className="article-table"><table><thead><tr><th>النطاق الشهري</th><th>مناسب لمن؟</th><th>ما تتوقعه واقعيًا</th></tr></thead><tbody>
            <tr><td><strong>1,500–3,500 ريال</strong></td><td>نشاط ناشئ أو حساب واحد</td><td>خطة بسيطة وعدد محدود من التصميمات والنشر</td></tr>
            <tr><td><strong>3,500–8,000 ريال</strong></td><td>مشروع يريد حضورًا منتظمًا ونموًا</td><td>استراتيجية وكتابة وتصميم وفيديو خفيف وتقارير</td></tr>
            <tr><td><strong>8,000–20,000+ ريال</strong></td><td>علامة متعددة المنصات أو عالية الإنتاج</td><td>فريق متخصص وتصوير وفيديو وإدارة مجتمع وتحليل أعمق</td></tr>
          </tbody></table></div>
          <p>هذه نطاقات سوقية إرشادية وليست تسعيرة ثابتة من ديوانك. المقارنة الصحيحة تبدأ بتوحيد نطاق العمل أولًا.</p>

          <h2 id="included">ما الذي يجب أن تتضمنه باقة الإدارة؟</h2>
          {scope.map(([heading, body]) => <section key={heading}><h3>{heading}</h3><p>{body}</p></section>)}

          <h2 id="separate">خدمات لا تفترض أنها مشمولة</h2>
          <ul>
            <li><strong>التصوير الاحترافي:</strong> الموقع والمعدات والموديل وتنسيق المنتجات والمونتاج المتقدم.</li>
            <li><strong>إدارة الإعلانات:</strong> إعداد الحملات والتتبع والتحسين، بالإضافة إلى ميزانية المنصات نفسها.</li>
            <li><strong>خدمة العملاء الكاملة:</strong> الرد على الرسائل طوال اليوم، معالجة الشكاوى، وإغلاق المبيعات.</li>
            <li><strong>المؤثرون والمسابقات:</strong> أتعاب التعاون والجوائز والشحن وإدارة الاتفاقات.</li>
          </ul>

          <h2 id="drivers">ما الذي يرفع تكلفة إدارة الحساب؟</h2>
          <p>عدد المنصات، كمية الفيديو، الحاجة إلى تصوير، سرعة النشر، عدد اللغات، حجم التفاعل، جولات المراجعة، ومدى اعتماد العمل على فريق متخصص. المنصة الثانية لا تعني نسخ المحتوى نفسه؛ لكل منصة صيغة وسلوك جمهور مختلفان.</p>

          <h2 id="compare">كيف تقارن بين الباقات؟</h2>
          <p>قارن الهدف والاستراتيجية ونوع المخرجات لا العدد فقط. اسأل بوضوح: من يكتب؟ من يصمم؟ من ينشر؟ من يرد؟ هل توجد تقارير؟ وهل التصوير والإعلانات داخل السعر أم خارجه؟ وإذا كان احتياجك الأساسي هو المحتوى فقط، لا تدفع تلقائيًا مقابل إدارة شهرية كاملة.</p>

          <h2 id="decision">متى تكون الإدارة الشهرية استثمارًا سيئًا؟</h2>
          <p>عندما لا يوجد عرض واضح أو طريقة سهلة للطلب أو قدرة على متابعة العملاء، أو عندما تكون حاجتك الفعلية مجرد تجهيز محتوى الشهر. وقتها قد يكون البدء بنطاق أصغر أكثر عقلانية.</p>
          <p><strong>لو تريد التنفيذ:</strong> راجع <Link href="/services/social-media-content">خدمة إدارة السوشيال ميديا وصناعة المحتوى</Link> للإدارة الأوسع، أو <Link href="/offers/30-day-content-package">باقة محتوى 30 يومًا</Link> إذا كنت تريد بداية محددة المخرجات ومنخفضة الالتزام.</p>

          <section className="article-faq" id="faq"><h2>أسئلة شائعة</h2>{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>
          <section className="article-cta"><h2>مش متأكد تحتاج إدارة كاملة ولا محتوى فقط؟</h2><p>ابدأ بتحديد المشكلة: هل تحتاج من ينتج المحتوى، أم من يدير الحساب يوميًا، أم من يدير الإعلانات؟ لما نفصل النطاق، يصبح السعر والقرار أوضح.</p><Link className="button primary" href="/services/social-media-content">قارن خيارات السوشيال ميديا <span>←</span></Link></section>
        </div>
        <aside className="article-side" aria-label="محتويات الدليل"><b>في هذا الدليل</b><a href="#short-answer">الإجابة المختصرة</a><a href="#choose">اختيار نوع الخدمة</a><a href="#ranges">نطاقات الأسعار</a><a href="#included">مكونات الباقة</a><a href="#separate">الخدمات المنفصلة</a><a href="#drivers">عوامل التكلفة</a><a href="#compare">مقارنة الباقات</a><a href="#decision">قبل التعاقد</a><a href="#faq">الأسئلة الشائعة</a><Link className="button primary" href="/offers/30-day-content-package">ابدأ بباقة 30 يومًا</Link></aside>
      </div>
    </article><Footer />
  </main>;
}
