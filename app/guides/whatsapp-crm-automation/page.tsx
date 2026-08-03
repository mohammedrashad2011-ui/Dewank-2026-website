import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../components/site-shell";
import { createMetadata, organizationId, siteUrl } from "../../lib/seo";
import "../guides.css";

const title = "كيف تعمل أتمتة واتساب مع CRM لتقليل ضياع العملاء؟";
const description = "دليل عملي لربط واتساب مع CRM وتنظيم الرد والتأهيل والمتابعة والحجز والتذكيرات، مع مؤشرات القياس والأخطاء التي تجعل الأتمتة بلا أثر تجاري.";

export const metadata: Metadata = createMetadata({
  title: `${title} | دليل ديوانك`,
  description,
  path: "/guides/whatsapp-crm-automation",
  keywords: ["أتمتة واتساب CRM", "ربط واتساب مع CRM", "متابعة العملاء واتساب", "واتساب أوتوميشن", "تقليل ضياع العملاء"],
});

const faqs = [
  { question: "هل أحتاج إلى CRM إذا كان عدد الرسائل قليلًا؟", answer: "إذا كان شخص واحد يستطيع متابعة كل عميل بوضوح فقد تبدأ بنظام بسيط. يصبح CRM مهمًا عندما تتعدد المحادثات أو الموظفون أو مراحل البيع، أو عندما تضيع المتابعات ولا تعرف مصدر العميل وحالته." },
  { question: "هل يجب أن يرد الذكاء الاصطناعي على كل الرسائل؟", answer: "لا. كثير من الرحلات تعمل أفضل بقواعد واضحة وقوائم ورسائل معتمدة، خصوصًا للأسعار والحجوزات والمعلومات الحساسة. استخدم الذكاء الاصطناعي فقط عندما توجد حاجة حقيقية لفهم أسئلة متنوعة، مع حدود وتحويل سريع للموظف." },
  { question: "هل الأتمتة تعني إرسال رسائل جماعية؟", answer: "لا. الأتمتة الجيدة تربط رسالة أو حدثًا بخطوة مناسبة للعميل، مثل تأكيد الطلب أو تذكير الموعد أو متابعة عرض. الإرسال العشوائي يضر التجربة وقد يخالف سياسات المنصة." },
  { question: "ما أهم مؤشر لنجاح النظام؟", answer: "لا يوجد مؤشر واحد. راقب زمن الرد، نسبة العملاء المؤهلين، التحويل إلى حجز أو بيع، زمن الانتقال بين المراحل، الحضور، وعدد الفرص التي توقفت بلا متابعة." },
];

const journey = [
  ["1. دخول الرسالة", "تسجيل المصدر والحملة والخدمة المطلوبة بدل بقاء العميل داخل محادثة مجهولة."],
  ["2. الرد الأول", "ترحيب سريع وسؤال أو سؤالان يجمعان الحد الأدنى اللازم، دون استجواب طويل."],
  ["3. التأهيل", "تصنيف العميل حسب الحاجة والموقع والميزانية أو موعد الشراء، ثم توجيهه للمسار المناسب."],
  ["4. إنشاء سجل CRM", "حفظ البيانات والحالة والمسؤول وآخر تواصل والخطوة التالية في مكان واحد."],
  ["5. الحجز أو العرض", "إرسال رابط أو مواعيد أو عرض مناسب، وتسجيل النتيجة تلقائيًا."],
  ["6. المتابعة", "تنبيه الموظف أو إرسال متابعة محسوبة إذا لم يكمل العميل، مع إيقافها عند الرد أو الرفض."],
  ["7. ما بعد الإجراء", "تأكيد وتذكير وطلب تقييم أو إعادة تواصل في الوقت الملائم."],
];

export default function WhatsappCrmAutomationGuide() {
  const url = `${siteUrl}/guides/whatsapp-crm-automation`;
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", "@id": `${url}#article`, headline: title, description, inLanguage: "ar", datePublished: "2026-08-04", dateModified: "2026-08-04", mainEntityOfPage: url, author: { "@id": organizationId }, publisher: { "@id": organizationId }, about: ["أتمتة واتساب", "CRM", "متابعة العملاء", "تحسين التحويل"] },
    { "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl }, { "@type": "ListItem", position: 2, name: "أدلة النمو", item: `${siteUrl}/guides` }, { "@type": "ListItem", position: 3, name: title, item: url }] },
  ] };

  return <main className="guides-page">
    <Header /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <article>
      <header className="article-hero shell">
        <nav className="article-breadcrumbs" aria-label="مسار الصفحة"><Link href="/">الرئيسية</Link><span>/</span><Link href="/guides">أدلة النمو</Link><span>/</span><span>واتساب وCRM</span></nav>
        <h1>{title}</h1>
        <p>الرد السريع وحده لا يمنع ضياع العميل. النظام الحقيقي يعرف من تواصل، ماذا يريد، من يتابعه، وما الخطوة التالية—ثم يقيس أين توقفت الفرصة.</p>
        <div className="article-meta"><span>آخر تحديث: 4 أغسطس 2026</span><span>وقت القراءة: 9 دقائق</span><span>التركيز: الأتمتة والتحويل</span></div>
      </header>
      <div className="article-layout shell">
        <div className="article-body">
          <h2 id="short-answer">الإجابة المختصرة</h2>
          <div className="article-answer"><p><strong>أتمتة واتساب مع CRM تحول المحادثة إلى مسار قابل للإدارة.</strong> تستقبل الرسالة، تجمع البيانات الضرورية، تسجل العميل ومرحلته، توجهه للحجز أو البيع، وتطلق متابعة أو تذكيرًا مناسبًا. القيمة ليست في الروبوت نفسه؛ بل في منع الفرص من السقوط بين الرد الأول والمتابعة.</p></div>
          <h2 id="journey">رحلة العميل من الرسالة إلى البيع</h2>
          {journey.map(([heading, body]) => <section key={heading}><h3>{heading}</h3><p>{body}</p></section>)}
          <h2 id="components">ما الذي يتكوّن منه النظام؟</h2>
          <ul>
            <li><strong>قناة واتساب رسمية ومناسبة للحجم:</strong> مع قوالب وسياسات موافقة واضحة عند الحاجة.</li>
            <li><strong>CRM:</strong> حقول ومراحل ومسؤوليات تعكس رحلة البيع الحقيقية، لا قاعدة بيانات ممتلئة بلا استخدام.</li>
            <li><strong>منطق أتمتة:</strong> قواعد تربط الأحداث بالرسائل والمهام والتحديثات مع منع التكرار.</li>
            <li><strong>الحجز أو الطلب:</strong> تكامل مع التقويم أو المتجر أو نظام المواعيد بحسب النشاط.</li>
            <li><strong>لوحة قياس:</strong> تعرض المصدر والزمن والتحويل والتسرب بدل الاكتفاء بعدد الرسائل.</li>
          </ul>
          <h2 id="ai-or-rules">متى تستخدم AI ومتى تكفي القواعد؟</h2>
          <div className="article-table"><table><thead><tr><th>الحالة</th><th>الاختيار الأنسب</th></tr></thead><tbody>
            <tr><td><strong>حجز وتأكيد وتذكير</strong></td><td>قواعد ورسائل محددة أكثر دقة وأسهل في المراجعة.</td></tr>
            <tr><td><strong>جمع بيانات وتأهيل ثابت</strong></td><td>تدفق أسئلة قصير مع اختيارات واضحة.</td></tr>
            <tr><td><strong>أسئلة كثيرة بصياغات متنوعة</strong></td><td>AI مقيد بمصدر معرفة وحدود وتحويل للموظف.</td></tr>
            <tr><td><strong>سعر أو تشخيص أو قرار حساس</strong></td><td>معلومة معتمدة أو موظف؛ لا تترك القرار للنموذج وحده.</td></tr>
          </tbody></table></div>
          <h2 id="leaks">أين تضيع الفرص عادة؟</h2>
          <ul>
            <li>رد أول سريع ثم لا توجد متابعة إذا صمت العميل.</li>
            <li>جمع بيانات كثيرة قبل تقديم قيمة أو خطوة مفيدة.</li>
            <li>عدم تعيين مسؤول أو موعد واضح للخطوة التالية.</li>
            <li>استمرار الرسائل الآلية بعد رد العميل أو طلبه التوقف.</li>
            <li>عدم مزامنة الإلغاء أو إعادة الجدولة مع CRM والتذكيرات.</li>
            <li>قياس عدد المحادثات بدل الحجز والحضور والبيع.</li>
          </ul>
          <h2 id="metrics">مؤشرات يجب قياسها</h2>
          <p>قِس زمن الرد الأول، نسبة اكتمال التأهيل، التحويل من محادثة إلى حجز أو عرض، نسبة الحضور، زمن بقاء العميل في كل مرحلة، وعدد الفرص التي مرّ عليها وقت المتابعة دون إجراء. اربط النتائج بالمصدر والحملة لتعرف أي قناة تجلب عملاء لا رسائل فقط.</p>
          <h2 id="implementation">خطة تنفيذ آمنة</h2>
          <ol>
            <li>ارسم الرحلة الحالية وحدد نقاط التسرب قبل اختيار الأدوات.</li>
            <li>ابدأ بخدمة واحدة ومسار واحد ومؤشرات أساسية.</li>
            <li>اكتب الرسائل وقواعد الإيقاف والتحويل للموظف والانسحاب.</li>
            <li>اختبر الحالات الطبيعية والاستثناءات: الرد المتأخر، التكرار، الإلغاء، والخطأ.</li>
            <li>شغّل Pilot محدودًا، راجع المحادثات والنتائج، ثم وسّع النظام.</li>
          </ol>
          <p>إذا كان التسرب يبدأ من الحساب قبل وصول العميل إلى واتساب، راجع دليل <Link href="/guides/social-media-not-generating-leads">حسابك جميل لكنه لا يجلب عملاء</Link>.</p>
          <section className="article-faq" id="faq"><h2>أسئلة شائعة</h2>{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>
          <section className="article-cta"><h2>تريد تحويل واتساب إلى نظام متابعة؟</h2><p>نراجع رحلة العميل، نقاط التسرب، CRM والحجز، ثم نبني تدفقًا يناسب فريقك ويقيس النتيجة التجارية.</p><Link className="button primary" href="/whatsapp-automation">استعرض خدمة أتمتة واتساب <span>←</span></Link></section>
        </div>
        <aside className="article-side" aria-label="محتويات الدليل"><b>في هذا الدليل</b><a href="#short-answer">الإجابة المختصرة</a><a href="#journey">رحلة العميل</a><a href="#components">مكونات النظام</a><a href="#ai-or-rules">AI أم قواعد؟</a><a href="#leaks">نقاط التسرب</a><a href="#metrics">مؤشرات القياس</a><a href="#implementation">خطة التنفيذ</a><a href="#faq">الأسئلة الشائعة</a><Link className="button primary" href="/contact">اطلب مراجعة النظام</Link></aside>
      </div>
    </article><Footer />
  </main>;
}
