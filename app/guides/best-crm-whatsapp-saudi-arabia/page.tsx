import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../components/site-shell";
import { createMetadata, organizationId, siteUrl } from "../../lib/seo";
import "../guides.css";

const title = "أفضل CRM لربطه بواتساب في السعودية: كيف تختار؟";
const description = "دليل عملي لاختيار CRM مناسب لواتساب في السعودية حسب رحلة العميل وحجم الفريق والتكاملات والتقارير والملكية، بعيدًا عن قوائم الأفضل العامة.";
export const metadata: Metadata = createMetadata({ title: `${title} | دليل ديوانك`, description, path: "/guides/best-crm-whatsapp-saudi-arabia", keywords: ["أفضل CRM واتساب السعودية", "ربط واتساب CRM", "نظام إدارة العملاء واتساب", "اختيار CRM السعودية"] });

const faqs = [
  { question: "هل WhatsApp Business وحده يعتبر CRM؟", answer: "لا. التصنيفات والردود السريعة مفيدة للتشغيل البسيط، لكنها لا تمنحك عادةً سجل فرصة موحدًا ومراحل بيع وصلاحيات وتقارير ومتابعات آلية بمستوى CRM." },
  { question: "هل أختار CRM مشهورًا أم نظامًا مخصصًا؟", answer: "اختر أقل نظام يحقق الرحلة المطلوبة بوضوح. المنتج الجاهز أسرع وأقل مخاطرة غالبًا، بينما التخصيص يصبح منطقيًا عند وجود عمليات أو تكاملات أو صلاحيات لا يغطيها الجاهز اقتصاديًا." },
  { question: "هل يجب أن يدعم CRM العربية؟", answer: "واجهة عربية مفيدة لبعض الفرق، لكن الأهم دعم البيانات العربية والبحث والتقارير والقوالب بصورة صحيحة، مع تدريب الفريق ومسؤوليات واضحة." },
  { question: "ما أهم اختبار قبل التعاقد؟", answer: "نفّذ سيناريو حقيقي من إعلان أو رسالة واتساب حتى إسناد العميل والمتابعة والحجز أو الإغلاق، ثم اختبر التقارير والتصدير والصلاحيات؛ العرض التوضيحي العام لا يكفي." },
];

const fit = [
  ["فريق صغير وحجم رسائل محدود", "CRM خفيف أو صندوق محادثات مشترك", "سرعة الاستخدام، التعيين، الملاحظات والتذكير."],
  ["مبيعات أو حجوزات متعددة المراحل", "CRM بمراحل وأتمتة وتقارير", "المصدر، المسؤول، SLA، المتابعة والتحويل."],
  ["فروع أو أقسام متعددة", "CRM بصلاحيات وتوجيه وحوكمة", "الفصل بين الفروع، التقارير الموحدة وسجل التغييرات."],
  ["عمليات شديدة الخصوصية", "تخصيص مدروس فوق نظام ثابت", "API، ملكية البيانات، الصيانة وخطة الخروج."],
];

export default function BestCrmWhatsappGuide() {
  const url = `${siteUrl}/guides/best-crm-whatsapp-saudi-arabia`;
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", "@id": `${url}#article`, headline: title, description, inLanguage: "ar", datePublished: "2026-08-04", dateModified: "2026-08-04", mainEntityOfPage: url, author: { "@id": organizationId }, publisher: { "@id": organizationId }, about: ["CRM", "WhatsApp", "السعودية"] },
    { "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl }, { "@type": "ListItem", position: 2, name: "أدلة النمو", item: `${siteUrl}/guides` }, { "@type": "ListItem", position: 3, name: title, item: url }] },
  ] };

  return <main className="guides-page">
    <Header /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <article>
      <header className="article-hero shell">
        <nav className="article-breadcrumbs" aria-label="مسار الصفحة"><Link href="/">الرئيسية</Link><span>/</span><Link href="/guides">أدلة النمو</Link><span>/</span><span>اختيار CRM لواتساب</span></nav>
        <h1>{title}</h1>
        <p>لا يوجد CRM هو الأفضل للجميع. الأفضل هو الذي يمنع ضياع العميل داخل رحلتك الفعلية ويستطيع فريقك تشغيله كل يوم.</p>
        <div className="article-meta"><span>آخر تحديث: 4 أغسطس 2026</span><span>وقت القراءة: 9 دقائق</span><span>التركيز: الاختيار والتشغيل</span></div>
      </header>
      <div className="article-layout shell">
        <div className="article-body">
          <h2 id="short-answer">الإجابة المختصرة</h2>
          <div className="article-answer"><p><strong>ابدأ برحلة العميل، لا باسم البرنامج.</strong> اكتب كيف تدخل رسالة واتساب، ومن يستلمها، ومتى تتحول إلى فرصة، وما المتابعة المطلوبة، ثم اختبر النظام على هذا السيناريو. كثرة الخصائص ليست قيمة إذا لم يستخدمها الفريق أو لم تُظهر أين تضيع الفرص.</p></div>
          <h2 id="requirements">7 معايير تحسم الاختيار</h2>
          <ol>
            <li><strong>تكامل واتساب الصحيح:</strong> قناة رسمية أو مزود واضح، قوالب، حالات تسليم وتحويل للموظف.</li>
            <li><strong>سجل عميل موحد:</strong> المحادثات والمصدر والملاحظات والحجوزات والصفقات في مكان واحد.</li>
            <li><strong>مراحل قابلة للقياس:</strong> جديد، مؤهل، موعد، حضر، عرض، إغلاق أو سبب خسارة.</li>
            <li><strong>التعيين والصلاحيات:</strong> توزيع تلقائي، ملكية واضحة للفرصة، وصلاحيات حسب الدور أو الفرع.</li>
            <li><strong>الأتمتة بضوابط:</strong> تذكير ومتابعة وتصعيد وإيقاف عند رد العميل، بلا إزعاج أو تكرار.</li>
            <li><strong>التقارير:</strong> زمن الرد والتحويل والحجز والحضور والإغلاق حسب المصدر والموظف.</li>
            <li><strong>الملكية والخروج:</strong> تصدير البيانات، الوصول للحسابات، النسخ الاحتياطي وتكلفة الانتقال.</li>
          </ol>
          <h2 id="fit">أي نوع يناسبك؟</h2>
          <div className="article-table"><table><thead><tr><th>الوضع</th><th>الاختيار الأقرب</th><th>الأولوية</th></tr></thead><tbody>{fit.map(([situation, choice, priority]) => <tr key={situation}><td><strong>{situation}</strong></td><td>{choice}</td><td>{priority}</td></tr>)}</tbody></table></div>
          <h2 id="demo">اختبار عملي قبل الشراء</h2>
          <p>اطلب تجربة على بيانات وهمية ومرّر عميلًا من إعلان إلى واتساب، ثم اجعله يطلب موعدًا ويتأخر عن الرد ويغيّر الموعد. راقب التعيين والتذكير وسجل المحادثة والتقرير النهائي. إذا احتاج السيناريو إلى ترقيع يدوي كبير، فالمشكلة لن تختفي بعد التعاقد.</p>
          <h2 id="mistakes">أخطاء شائعة ومكلفة</h2>
          <ul>
            <li>شراء النظام قبل تعريف مراحل البيع ومسؤولية كل مرحلة.</li>
            <li>اختيار الأرخص مع تجاهل رسوم المستخدمين والقناة والتكامل والدعم.</li>
            <li>تحويل كل رد إلى AI رغم أن القواعد الثابتة أكثر أمانًا في الحجز والبيانات الحساسة.</li>
            <li>إطلاق النظام لكل الفروع قبل نجاح تجربة محدودة قابلة للقياس.</li>
            <li>قياس عدد الرسائل بدل الحجز والحضور والإغلاق والإيراد.</li>
          </ul>
          <h2 id="decision">طريقة قرار من 4 خطوات</h2>
          <ol><li>ارسم الرحلة الحالية ونقاط التسرب.</li><li>حوّلها إلى متطلبات أساسية وأخرى مؤجلة.</li><li>اختبر خيارين أو ثلاثة بنفس السيناريو والبيانات.</li><li>ابدأ Pilot قصيرًا بمؤشرات نجاح ومسؤول تشغيل محدد.</li></ol>
          <p>لفهم البنية كاملة اقرأ <Link href="/guides/whatsapp-crm-automation">دليل أتمتة واتساب مع CRM</Link>، ولتقدير الاستثمار راجع <Link href="/guides/whatsapp-crm-automation-cost-saudi-arabia">دليل التكلفة في السعودية</Link>.</p>
          <section className="article-faq" id="faq"><h2>أسئلة شائعة</h2>{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>
          <section className="article-cta"><h2>تريد اختيار النظام قبل دفع تكلفته؟</h2><p>أرسل حجم الرسائل، عدد المستخدمين، مراحل البيع والأنظمة الحالية؛ نحدد المتطلبات ونقترح بنية تناسب التشغيل الحقيقي.</p><Link className="button primary" href="/whatsapp-automation">استعرض خدمة أتمتة واتساب <span>←</span></Link></section>
        </div>
        <aside className="article-side" aria-label="محتويات الدليل"><b>في هذا الدليل</b><a href="#short-answer">الإجابة المختصرة</a><a href="#requirements">معايير الاختيار</a><a href="#fit">النوع المناسب</a><a href="#demo">اختبار النظام</a><a href="#mistakes">الأخطاء الشائعة</a><a href="#decision">طريقة القرار</a><a href="#faq">الأسئلة الشائعة</a><Link className="button primary" href="/contact">ناقش متطلباتك</Link></aside>
      </div>
    </article><Footer />
  </main>;
}
