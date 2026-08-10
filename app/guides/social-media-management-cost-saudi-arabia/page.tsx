import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../components/site-shell";
import { createMetadata, organizationId, siteUrl } from "../../lib/seo";
import "../guides.css";

const title = "أسعار إدارة حسابات التواصل الاجتماعي في السعودية";
const description = "دليل عملي لفهم أسعار إدارة حسابات التواصل الاجتماعي في السعودية، وما الذي تشمل عليه الباقات، وعوامل التكلفة، والفرق بين الإدارة وصناعة المحتوى والإعلانات.";

export const metadata: Metadata = createMetadata({
  title: `${title} | دليل ديوانك`,
  description,
  path: "/guides/social-media-management-cost-saudi-arabia",
  keywords: ["أسعار إدارة حسابات التواصل الاجتماعي في السعودية", "باقات إدارة السوشيال ميديا", "تكلفة إدارة انستقرام", "شركة إدارة حسابات التواصل الاجتماعي", "أسعار صناعة المحتوى في السعودية"],
});

const faqs = [
  { question: "كم سعر إدارة حسابات التواصل الاجتماعي شهريًا؟", answer: "تبدأ الخدمات المحدودة غالبًا من 1,500 إلى 3,500 ريال شهريًا، بينما تتراوح الإدارة المتكاملة للمشروعات الصغيرة والمتوسطة غالبًا بين 3,500 و8,000 ريال، وقد تتجاوز 8,000 ريال عند تعدد المنصات أو زيادة إنتاج الفيديو والتصوير. هذه نطاقات إرشادية وتتغير حسب نطاق التنفيذ." },
  { question: "هل تصوير المنتجات والفيديو ضمن الباقة؟", answer: "ليس دائمًا. التصميم والكتابة قد يكونان ضمن الإدارة الشهرية، لكن جلسات التصوير والموديل والموقع والمونتاج المتقدم غالبًا تسعّر كبند مستقل. يجب أن يذكر العرض عدد القطع ونوعها بوضوح." },
  { question: "هل إدارة الإعلانات ضمن إدارة الحسابات؟", answer: "غالبًا تكون خدمة منفصلة، كما أن ميزانية الإعلان المدفوعة إلى Meta أو TikTok لا تدخل ضمن أتعاب الإدارة. الجمع بينهما ممكن، لكن يجب فصل الأتعاب والإنفاق والنتائج المطلوبة." },
  { question: "هل زيادة عدد المنشورات تعني باقة أفضل؟", answer: "لا. الباقة الأفضل هي التي تربط المحتوى بهدف تجاري واضح وتحافظ على الجودة والاستمرارية. نشر عدد كبير من القطع المتشابهة قد يرفع التكلفة من دون تحسين الثقة أو الطلبات." },
];

const scope = [
  ["الاستراتيجية وخطة المحتوى", "تحديد الجمهور، الرسائل، محاور المحتوى، المنصات المناسبة وجدول النشر."],
  ["الكتابة والتصميم", "عدد محدد من المنشورات والقصص والفيديوهات مع مستوى الإنتاج وجولات المراجعة."],
  ["النشر وإدارة الحساب", "الجدولة، تحسين النصوص والوسوم والملف، ومتابعة التنفيذ وفق التقويم."],
  ["التفاعل وخدمة المجتمع", "الردود والتعليقات وتحويل الاستفسارات؛ ويجب تحديد ساعات العمل وحدود المسؤولية."],
  ["التقارير والتحسين", "قياس الوصول والتفاعل والزيارات والاستفسارات وما يمكن ربطه بالمبيعات، ثم تعديل الخطة."],
];

export default function SocialMediaManagementCostGuide() {
  const url = `${siteUrl}/guides/social-media-management-cost-saudi-arabia`;
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", "@id": `${url}#article`, headline: title, description, inLanguage: "ar", datePublished: "2026-08-03", dateModified: "2026-08-10", mainEntityOfPage: url, author: { "@id": organizationId }, publisher: { "@id": organizationId }, about: ["إدارة حسابات التواصل الاجتماعي", "أسعار السوشيال ميديا في السعودية", "صناعة المحتوى"] },
    { "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl }, { "@type": "ListItem", position: 2, name: "أدلة النمو", item: `${siteUrl}/guides` }, { "@type": "ListItem", position: 3, name: title, item: url }] },
  ] };

  return <main className="guides-page">
    <Header /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <article>
      <header className="article-hero shell">
        <nav className="article-breadcrumbs" aria-label="مسار الصفحة"><Link href="/">الرئيسية</Link><span>/</span><Link href="/guides">أدلة النمو</Link><span>/</span><span>السوشيال ميديا</span></nav>
        <h1>{title}</h1>
        <p>السعر وحده لا يخبرك إن كانت الباقة مناسبة؛ ما يحدد القيمة هو جودة الفكرة والتنفيذ، وما إذا كان المحتوى يبني حضورًا يقود العميل إلى خطوة واضحة.</p>
        <div className="article-meta"><span>آخر تحديث: 10 أغسطس 2026</span><span>وقت القراءة: 9 دقائق</span><span>التركيز: النطاق والقيمة</span></div>
      </header>
      <div className="article-layout shell">
        <div className="article-body">
          <h2 id="short-answer">الإجابة المختصرة</h2>
          <div className="article-answer"><p>في السعودية، تبدأ الإدارة المحدودة عادة من 1,500 إلى 3,500 ريال شهريًا، وتتراوح الإدارة المتكاملة للمشروعات الصغيرة والمتوسطة غالبًا بين 3,500 و8,000 ريال. وقد تتجاوز 8,000 ريال مع تعدد المنصات أو كثافة الفيديو والتصوير. الإعلان المدفوع والإنتاج الاحترافي غالبًا لهما ميزانية منفصلة.</p></div>
          <h2 id="ranges">نطاقات الأسعار المتوقعة</h2>
          <div className="article-table"><table><thead><tr><th>النطاق الشهري</th><th>مناسب لمن؟</th><th>ما تتوقعه واقعيًا</th></tr></thead><tbody>
            <tr><td><strong>1,500–3,500 ريال</strong></td><td>نشاط ناشئ أو حساب واحد</td><td>خطة بسيطة وعدد محدود من التصميمات والنشر</td></tr>
            <tr><td><strong>3,500–8,000 ريال</strong></td><td>مشروع يريد حضورًا منتظمًا ونموًا</td><td>استراتيجية وكتابة وتصميم وفيديو خفيف وتقارير</td></tr>
            <tr><td><strong>8,000–20,000+ ريال</strong></td><td>علامة متعددة المنصات أو عالية الإنتاج</td><td>فريق متخصص وتصوير وفيديو وإدارة مجتمع وتحليل أعمق</td></tr>
          </tbody></table></div>
          <p>هذه النطاقات ليست قائمة أسعار ملزمة. الاختلاف الكبير بين العروض طبيعي عندما تختلف كمية الفيديو، مستوى التصميم، التصوير، عدد المنصات، وساعات الرد على الجمهور. المقارنة الصحيحة تبدأ بتوحيد نطاق العمل.</p>
          <h2 id="included">ما الذي يجب أن تتضمنه الباقة؟</h2>
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
          <p>قارن الهدف والاستراتيجية ونوع المخرجات لا العدد فقط. اطلب نموذج تقويم محتوى، وحدد من يكتب ويصمم وينشر ويرد، وما الذي ستملكه عند انتهاء العقد. ولرؤية الصورة الأوسع، راجع دليل <Link href="/guides/digital-marketing-cost-saudi-arabia">أسعار التسويق الرقمي في السعودية</Link>.</p>
          <h2 id="decision">متى تكون الإدارة الشهرية استثمارًا سيئًا؟</h2>
          <p>عندما لا يوجد عرض واضح أو طريقة سهلة للطلب أو قدرة على متابعة العملاء. المحتوى لا يعوض ضعف المنتج أو تأخر الرد. قبل زيادة عدد المنشورات، أصلح الرسالة ومسار التحويل وحدد كيف ستقيس الاستفسارات والطلبات.</p>
          <p><strong>مهم:</strong> النطاقات أعلاه تتحدث عن إدارة شهرية قد تشمل التخطيط والنشر والمتابعة، وليست نفس نطاق باقات المحتوى الجاهزة. لفهم الخدمة الكاملة راجع <Link href="/services/social-media-content">إدارة السوشيال ميديا وصناعة المحتوى</Link>. وإذا كنت تريد شهر محتوى محدد المخرجات كبداية، راجع <Link href="/offers/30-day-content-package">باقة محتوى 30 يومًا</Link>.</p>
          <section className="article-faq" id="faq"><h2>أسئلة شائعة</h2>{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>
          <section className="article-cta"><h2>تريد محتوى يبني حضورًا ويخدم هدفًا؟</h2><p>نحدد ما يحتاجه حسابك فعلًا، ثم نبني خطة واضحة في المحتوى والتصميم والنشر والقياس من دون حشو الباقة بمخرجات لا تخدمك.</p><Link className="button primary" href="/services/social-media-content">استعرض خدمة السوشيال ميديا <span>←</span></Link></section>
        </div>
        <aside className="article-side" aria-label="محتويات الدليل"><b>في هذا الدليل</b><a href="#short-answer">الإجابة المختصرة</a><a href="#ranges">نطاقات الأسعار</a><a href="#included">مكونات الباقة</a><a href="#separate">الخدمات المنفصلة</a><a href="#drivers">عوامل التكلفة</a><a href="#compare">مقارنة الباقات</a><a href="#decision">قبل التعاقد</a><a href="#faq">الأسئلة الشائعة</a><Link className="button primary" href="/contact">اطلب عرضًا مناسبًا</Link></aside>
      </div>
    </article><Footer />
  </main>;
}
