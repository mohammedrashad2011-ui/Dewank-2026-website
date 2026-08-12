import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../components/site-shell";
import { createMetadata, organizationId, siteUrl } from "../../lib/seo";
import { WhatsAppStarterLink, WhatsAppStarterPrice } from "./localized-whatsapp-starter";
import "../offers-page.css";
import "../offer-trust.css";
import "./whatsapp-starter.css";

const title = "أتمتة واتساب للشركات Starter بـ 890 ريال";
const description = "باقة تأسيس أتمتة واتساب للشركات: رد آلي، تأهيل العملاء، جمع البيانات، تحويل للموظف، متابعة أساسية واختبار قبل التشغيل. تبدأ من 890 ريال.";

export const metadata: Metadata = createMetadata({
  title: `${title} | ديوانك`,
  description,
  path: "/offers/whatsapp-automation-starter",
  keywords: ["سعر أتمتة واتساب", "تكلفة واتساب أوتوميشن", "أتمتة واتساب للشركات", "رد آلي واتساب للشركات", "بوت واتساب للشركات", "واتساب أوتوميشن السعودية", "WhatsApp automation Saudi Arabia", "تأهيل العملاء واتساب"],
});

const deliverables = [
  ["تحليل رحلة العميل", "نحدد أكثر الأسئلة تكرارًا، أين يتوقف العميل، ومتى يحتاج الانتقال إلى موظف."],
  ["مسار رد أساسي", "ترحيب، تعريف بالخدمات، إجابات أساسية، ثم توجيه العميل إلى الخطوة المناسبة."],
  ["تأهيل العميل", "جمع البيانات المهمة مثل نوع الطلب أو الخدمة أو الميزانية قبل تحويله للفريق."],
  ["تحويل ذكي للموظف", "نحدد الحالات التي تتوقف فيها الأتمتة وينتقل الحوار إلى شخص من الفريق."],
  ["رسائل متابعة أساسية", "متابعة العميل الذي توقف قبل إكمال الخطوة ضمن المسار المتفق عليه."],
  ["قاعدة بيانات بسيطة", "تجميع بيانات العملاء وحالتهم في سجل منظم مناسب للباقة التأسيسية."],
  ["اختبار قبل التشغيل", "نجرب المسارات والردود والحالات الاستثنائية قبل إطلاق النظام فعليًا."],
  ["دعم بعد الإطلاق", "مراجعة وضبط الردود خلال أول 7 أيام لمعالجة الملاحظات المبكرة."],
];

const faqs = [
  ["كم سعر أتمتة واتساب Starter؟", "تبدأ الباقة من 890 ريال حسب السوق المحلي المعروض على الموقع، وتشمل تأسيس المسار الأساسي والاختبار والتشغيل ضمن النطاق الموضح. رسوم واتساب أو الأدوات الخارجية منفصلة إذا كانت مطلوبة."],
  ["ماذا تشمل باقة واتساب أوتوميشن Starter؟", "تشمل إعداد مسار أساسي للرد والتأهيل وجمع البيانات والتحويل للموظف والمتابعة الأساسية، مع اختبار قبل التشغيل ودعم أولي بعد الإطلاق."],
  ["هل تشمل CRM كامل؟", "لا. تشمل سجلًا بسيطًا ومنظمًا ضمن نطاق Starter. إذا كنت تحتاج CRM كاملًا ومراحل مبيعات ولوحات متابعة وحجزًا وتكاملات متعددة فالأفضل مراجعة خدمة أتمتة واتساب الكاملة."],
  ["هل الردود تعتمد على الذكاء الاصطناعي؟", "يمكن استخدام قواعد ثابتة أو ردود مدعومة بالذكاء الاصطناعي حسب طبيعة النشاط، لكن الهدف في Starter هو بناء رحلة واضحة ومستقرة قبل إضافة تعقيد غير ضروري."],
  ["هل يمكن للموظف التدخل في أي وقت؟", "نعم. نحدد نقاط التحويل للموظف بوضوح ويمكن جعل بعض الحالات تنتقل مباشرة للفريق بدل استمرار الأتمتة."],
  ["هل تشمل رسوم WhatsApp أو الأدوات الخارجية؟", "لا. أي رسوم تفرضها منصات واتساب أو مزودو الربط أو الأدوات الخارجية تكون منفصلة، ونوضحها قبل بدء التنفيذ إذا كانت مطلوبة."],
  ["كم يستغرق التنفيذ؟", "التنفيذ المعتاد من 3 إلى 5 أيام عمل بعد استلام معلومات النشاط والردود الأساسية واعتماد مسار المحادثة."],
];

export default function WhatsAppAutomationStarterOffer() {
  const url = `${siteUrl}/offers/whatsapp-automation-starter`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "@id": `${url}#service`, name: "باقة أتمتة واتساب Starter", alternateName: "WhatsApp Automation Starter", description, serviceType: ["WhatsApp Automation", "Lead Qualification", "Customer Messaging Automation"], provider: { "@id": organizationId }, areaServed: ["SA", "BH", "AE", "KW", "QA", "OM"], offers: { "@type": "Offer", price: "890", priceCurrency: "SAR", availability: "https://schema.org/InStock", url }, url },
      { "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl }, { "@type": "ListItem", position: 2, name: "العروض", item: `${siteUrl}/offers` }, { "@type": "ListItem", position: 3, name: "أتمتة واتساب Starter", item: url }] },
    ],
  };

  return (
    <main className="inner-page offers-page whatsapp-starter-page">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="shell offer-detail-hero whatsapp-starter-hero">
        <div>
          <div className="offer-availability"><span className="offer-spots-available"><i aria-hidden="true" /><strong>3–5</strong> أيام عمل</span></div>
          <h1>أتمتة واتساب للشركات.<br/><em>ابدأ بالمسار الذي يمنع ضياع الـLead.</em></h1>
          <p>نجهز لك مسار WhatsApp Automation يرد على الأسئلة الأساسية، يؤهّل العميل، يجمع بياناته، ويتابع الخطوة التالية قبل تحويله للموظف المناسب.</p>
          <div className="whatsapp-starter-answer" aria-label="الإجابة المختصرة"><b>الإجابة المختصرة</b><span>هذه باقة تأسيسية، وليست CRM كاملًا. مناسبة لو مشكلتك الأساسية هي بطء الرد وتكرار الأسئلة وضياع العملاء قبل وصولهم للفريق.</span></div>
        </div>
        <aside className="offer-price-panel whatsapp-starter-price-panel"><small>باقة التأسيس</small><WhatsAppStarterPrice /><div className="offer-trust-inline"><span>رد وتأهيل</span><span>تحويل للموظف</span><span>دعم 7 أيام</span></div><p>تشمل إعداد المسار الأساسي والاختبار والتشغيل. لا تشمل رسوم واتساب أو الأدوات الخارجية أو CRM كامل.</p><WhatsAppStarterLink className="button primary" label="ابدأ أتمتة واتساب" /></aside>
      </section>

      <section className="shell whatsapp-starter-proof">
        <div className="whatsapp-starter-proof-copy"><span className="section-label">ماذا يتغير؟</span><h2>من «أريد التفاصيل».<br/>إلى Lead أوضح للفريق.</h2><p>بدل أن ينتظر العميل ردًا عامًا، يبدأ مسار قصير يفهم احتياجه ويقدم المعلومة المناسبة ويجمع البيانات ثم يحدد هل يحتاج متابعة تلقائية أو تدخلًا بشريًا.</p></div>
        <div className="whatsapp-flow-card" aria-label="نموذج مبسط لمسار واتساب"><div className="whatsapp-flow-top"><span>مسار واتساب نموذجي</span><small>Starter</small></div><div className="whatsapp-flow-steps"><article><b>01</b><div><strong>استفسار جديد</strong><span>مرحبًا، أريد معرفة التفاصيل</span></div></article><article><b>02</b><div><strong>تحديد الاحتياج</strong><span>ما الخدمة التي تهمك؟</span></div></article><article><b>03</b><div><strong>جمع البيانات</strong><span>الاسم · النشاط · الطلب</span></div></article><article><b>04</b><div><strong>تسليم للموظف</strong><span>عميل مؤهل وجاهز للمتابعة</span></div></article></div></div>
      </section>

      <section className="shell offer-deliverables whatsapp-starter-deliverables"><div><span className="section-label">ماذا تستلم؟</span><h2>نطاق واضح.<br/>بدون CRM كامل لا تحتاجه.</h2><p>نبدأ بالمسار الضروري فقط حتى يكون سريع الفهم وسهل التشغيل والتطوير لاحقًا.</p></div><div className="deliverable-list">{deliverables.map(([item, text]) => <article className="deliverable-item" key={item}><b>{item}</b><p>{text}</p></article>)}</div></section>

      <section className="shell whatsapp-starter-fit"><div className="whatsapp-starter-fit-head"><span className="section-label">هل تناسبك؟</span><h2>Starter أم نظام WhatsApp + CRM كامل؟</h2></div><div className="offer-fit-grid"><article className="offer-fit-card good"><h3>Starter مناسبة لك إذا</h3><ul><li>تستقبل نفس الأسئلة يوميًا</li><li>يتأخر الرد بسبب انشغال الفريق</li><li>تريد جمع بيانات العميل قبل الموظف</li><li>تحتاج نقطة بداية قبل CRM كامل</li></ul></article><article className="offer-fit-card limits"><h3>تحتاج النظام الكامل إذا</h3><ul><li>لديك عدة فروع أو فرق مبيعات</li><li>تحتاج CRM كامل ومراحل بيع</li><li>تحتاج حجزًا وتذكيرات وتكاملات متعددة</li><li>تحتاج تقارير أو ذكاء اصطناعي وقاعدة معرفة أوسع</li></ul></article></div></section>

      <section className="shell whatsapp-starter-process"><div className="whatsapp-starter-process-head"><span className="section-label">طريقة التنفيذ</span><h2>نفهم. نبني. نختبر. نشغّل.</h2></div><div className="whatsapp-starter-process-grid"><article><b>01</b><h3>تحليل الأسئلة</h3><p>نحدد النوايا والردود الأساسية وما يجب جمعه من العميل.</p></article><article><b>02</b><h3>بناء المسار</h3><p>نرتب الرد والتأهيل والمتابعة ونقاط التحويل للموظف.</p></article><article><b>03</b><h3>الاختبار</h3><p>نجرب الحالات الطبيعية والاستثنائية قبل تشغيل النظام.</p></article><article><b>04</b><h3>الإطلاق</h3><p>نشغل المسار ونراجع الملاحظات التقنية خلال أول 7 أيام.</p></article></div></section>

      <section className="shell offer-confidence whatsapp-starter-confidence"><div><span className="section-label">قبل الشراء</span><h2>اعرف بالضبط<br/>ما الذي تدفع مقابله.</h2></div><div className="offer-confidence-list"><p><b>Starter:</b> نقطة دخول منخفضة الاحتكاك لأتمتة الرد والتأهيل والتحويل.</p><p><b>لا تشمل:</b> CRM كامل، حجزًا متقدمًا، تكاملات متعددة، رسوم واتساب أو الأدوات الخارجية.</p><p><b>لو تحتاج نظامًا أكبر:</b> راجع <Link href="/whatsapp-automation">خدمة أتمتة واتساب مع CRM</Link> أو اقرأ <Link href="/guides/whatsapp-crm-automation-cost-saudi-arabia">دليل تكلفة أتمتة واتساب في السعودية</Link>.</p></div></section>

      <section className="shell offer-faq whatsapp-starter-faq" id="faq"><div><span className="section-label">أسئلة سريعة</span><h2>قبل ما تبدأ.</h2></div><div className="offer-faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>

      <section className="shell offer-final-cta whatsapp-starter-final"><div><span className="section-label">ابدأ من هنا</span><h2>خلّي أول رسالة<br/>تتحول إلى خطوة واضحة.</h2><p>أرسل لنا نوع نشاطك وأكثر الأسئلة التي تصلك يوميًا، ونحدد هل Starter تكفيك أم تحتاج نظامًا أكبر.</p></div><WhatsAppStarterLink className="button primary" label="ابدأ عبر واتساب" /><div className="whatsapp-starter-links"><Link href="/whatsapp-automation">تحتاج CRM وتكاملات أكبر؟</Link><Link href="/guides/whatsapp-crm-automation-cost-saudi-arabia">كم تكلفة النظام الكامل؟</Link></div></section>
      <Footer />
    </main>
  );
}
