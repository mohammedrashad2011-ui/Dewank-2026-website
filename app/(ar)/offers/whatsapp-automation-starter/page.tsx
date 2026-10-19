import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../../components/site-shell";
import { createMetadata, organizationId, siteUrl, servedMarkets } from "../../../lib/seo";
import { WhatsAppStarterLink, WhatsAppStarterPrice } from "./localized-whatsapp-starter";
import { AutomationHeroArt, AutomationJourney, AutomationContrast } from "./whatsapp-cinematic";
import "../offers-page.css";
import "../offer-trust.css";
import "./whatsapp-starter.css";
import "./whatsapp-cinematic.css";

const title = "أتمتة واتساب للشركات | الباقة التأسيسية";
const description = "باقة تأسيس أتمتة واتساب للشركات تشمل الرد والتأهيل وجمع البيانات والتحويل للموظف والمتابعة الأساسية والاختبار قبل التشغيل. تعرّف على السعر المعروض حسب السوق.";

export const metadata: Metadata = createMetadata({
  title: `${title} | ديوانك`,
  description,
  path: "/offers/whatsapp-automation-starter",
  keywords: ["سعر أتمتة واتساب", "تكلفة واتساب أوتوميشن", "أتمتة واتساب للشركات", "رد آلي واتساب للشركات", "بوت واتساب للشركات", "واتساب أوتوميشن السعودية", "WhatsApp automation Saudi Arabia", "تأهيل العملاء واتساب"],
});

const deliverables = [
  ["تحليل رحلة العميل", "نحدد أكثر الأسئلة تكرارًا، أين يتوقف العميل، ومتى يحتاج الانتقال إلى موظف"],
  ["مسار رد أساسي", "ترحيب، تعريف بالخدمات، إجابات أساسية، ثم توجيه العميل إلى الخطوة المناسبة"],
  ["تأهيل العميل", "جمع البيانات المهمة مثل نوع الطلب أو الخدمة أو الميزانية قبل تحويله للفريق"],
  ["تحويل ذكي للموظف", "نحدد الحالات التي تتوقف فيها الأتمتة وينتقل الحوار إلى شخص من الفريق"],
  ["رسائل متابعة أساسية", "متابعة العميل الذي توقف قبل إكمال الخطوة ضمن المسار المتفق عليه"],
  ["قاعدة بيانات بسيطة", "تجميع بيانات العملاء وحالتهم في سجل منظم مناسب للباقة التأسيسية"],
  ["اختبار قبل التشغيل", "نجرب المسارات والردود والحالات الاستثنائية قبل إطلاق النظام فعليًا"],
  ["دعم بعد الإطلاق", "مراجعة وضبط الردود خلال أول 7 أيام لمعالجة الملاحظات المبكرة"],
];

const faqs = [
  ["كم تكلفة باقة أتمتة واتساب التأسيسية؟", "السعر المبدئي ظاهر في بطاقة السعر أعلى الصفحة، وقد يختلف حسب السوق. تشمل الباقة إعداد مسار الرد والتأهيل وجمع البيانات وتحويل المحادثة للموظف والاختبار قبل التشغيل، وتبقى رسوم واتساب والأدوات الخارجية منفصلة عند الحاجة"],
  ["ماذا تشمل باقة أتمتة واتساب التأسيسية؟", "تشمل إعداد مسار أساسي للرد والتأهيل وجمع البيانات والتحويل للموظف والمتابعة الأساسية، مع اختبار قبل التشغيل ودعم أولي بعد الإطلاق"],
  ["هل تشمل نظامًا كاملًا لإدارة العملاء؟", "لا، تشمل سجلًا بسيطًا ومنظمًا ضمن نطاق الباقة التأسيسية. إذا كنت تحتاج نظامًا كاملًا لإدارة العملاء ومراحل مبيعات ولوحات متابعة وحجزًا وتكاملات متعددة فالأفضل مراجعة خدمة أتمتة واتساب الكاملة"],
  ["هل الردود تعتمد على الذكاء الاصطناعي؟", "يمكن استخدام قواعد ثابتة أو ردود مدعومة بالذكاء الاصطناعي حسب طبيعة النشاط، لكن الهدف في الباقة التأسيسية هو بناء رحلة واضحة ومستقرة قبل إضافة تعقيد غير ضروري"],
  ["هل يمكن للموظف التدخل في أي وقت؟", "نعم، نحدد نقاط التحويل للموظف بوضوح ويمكن جعل بعض الحالات تنتقل مباشرة للفريق بدل استمرار الأتمتة"],
  ["هل تشمل رسوم واتساب أو الأدوات الخارجية؟", "لا، أي رسوم تفرضها منصات واتساب أو مزودو الربط أو الأدوات الخارجية تكون منفصلة، ونوضحها قبل بدء التنفيذ إذا كانت مطلوبة"],
  ["كم يستغرق التنفيذ؟", "التنفيذ المعتاد من 3 إلى 5 أيام عمل بعد استلام معلومات النشاط والردود الأساسية واعتماد مسار المحادثة"],
];

export default function WhatsAppAutomationStarterOffer() {
  const url = `${siteUrl}/offers/whatsapp-automation-starter`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "@id": `${url}#service`, name: "باقة أتمتة واتساب التأسيسية", alternateName: "WhatsApp Automation Starter", description, serviceType: ["WhatsApp Automation", "Lead Qualification", "Customer Messaging Automation"], provider: { "@id": organizationId }, areaServed: servedMarkets, url },
      { "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl }, { "@type": "ListItem", position: 2, name: "العروض", item: `${siteUrl}/offers` }, { "@type": "ListItem", position: 3, name: "أتمتة واتساب التأسيسية", item: url }] },
    ],
  };

  return (
    <main className="inner-page offers-page whatsapp-starter-page wa-cinema-page">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="shell offer-detail-hero whatsapp-starter-hero wa-cinema-hero">
        <div>
          <div className="offer-availability"><span className="offer-spots-available"><i aria-hidden="true" /><strong>3–5</strong> أيام عمل</span></div>
          <h1>أتمتة واتساب للشركات<br/><em>ابدأ بالمسار الذي يمنع ضياع العميل المحتمل</em></h1>
          <p>نجهز لك مسار أتمتة واتساب يرد على الأسئلة الأساسية، يؤهّل العميل، يجمع بياناته، ويتابع الخطوة التالية قبل تحويله للموظف المناسب</p>
          <div className="whatsapp-starter-answer" aria-label="الإجابة المختصرة"><b>الإجابة المختصرة</b><span>هذه باقة تأسيسية وليست نظامًا كاملًا لإدارة العملاء، ومناسبة لو مشكلتك الأساسية هي بطء الرد وتكرار الأسئلة وضياع العملاء قبل وصولهم للفريق</span></div>
          <AutomationHeroArt locale="ar" />
        </div>
        <aside className="offer-price-panel whatsapp-starter-price-panel"><small>باقة التأسيس</small><WhatsAppStarterPrice /><div className="offer-trust-inline"><span>رد وتأهيل</span><span>تحويل للموظف</span><span>دعم 7 أيام</span></div><p>تشمل إعداد المسار الأساسي والاختبار والتشغيل، ولا تشمل رسوم واتساب أو الأدوات الخارجية أو نظامًا كاملًا لإدارة العملاء</p><WhatsAppStarterLink className="button primary" label="ابدأ أتمتة واتساب" /></aside>
      </section>

      <AutomationJourney locale="ar" />

      <section className="shell offer-deliverables whatsapp-starter-deliverables"><div><span className="section-label">ماذا تستلم؟</span><h2>نطاق واضح<br/>من غير نظام معقد لإدارة العملاء</h2><p>نبدأ بالمسار الضروري فقط حتى يكون سريع الفهم وسهل التشغيل والتطوير لاحقًا</p></div><div className="deliverable-list">{deliverables.map(([item, text]) => <article className="deliverable-item" key={item}><b>{item}</b><p>{text}</p></article>)}</div></section>

      <section className="shell whatsapp-starter-fit"><div className="whatsapp-starter-fit-head"><span className="section-label">هل تناسبك؟</span><h2>الباقة التأسيسية أم نظام كامل لإدارة العملاء عبر واتساب؟</h2></div><div className="offer-fit-grid"><article className="offer-fit-card good"><h3>التأسيسية مناسبة لك إذا</h3><ul><li>تستقبل نفس الأسئلة يوميًا</li><li>يتأخر الرد بسبب انشغال الفريق</li><li>تريد جمع بيانات العميل قبل الموظف</li><li>تحتاج نقطة بداية قبل نظام متكامل لإدارة العملاء</li></ul></article><article className="offer-fit-card limits"><h3>تحتاج النظام الكامل إذا</h3><ul><li>لديك عدة فروع أو فرق مبيعات</li><li>تحتاج نظامًا كاملًا لإدارة العملاء ومراحل بيع</li><li>تحتاج حجزًا وتذكيرات وتكاملات متعددة</li><li>تحتاج تقارير أو ذكاء اصطناعي وقاعدة معرفة أوسع</li></ul></article></div></section>

      <AutomationContrast locale="ar" />

      <section className="shell whatsapp-starter-process"><div className="whatsapp-starter-process-head"><span className="section-label">طريقة التنفيذ</span><h2>نفهم احتياجك، ونبني المسار، ونختبره ثم نشغّله</h2></div><div className="whatsapp-starter-process-grid"><article><h3>تحليل الأسئلة</h3><p>نحدد النوايا والردود الأساسية وما يجب جمعه من العميل</p></article><article><h3>بناء المسار</h3><p>نرتب الرد والتأهيل والمتابعة ونقاط التحويل للموظف</p></article><article><h3>الاختبار</h3><p>نجرب الحالات الطبيعية والاستثنائية قبل تشغيل النظام</p></article><article><h3>الإطلاق</h3><p>نشغل المسار ونراجع الملاحظات التقنية خلال أول 7 أيام</p></article></div></section>

      <section className="shell offer-confidence whatsapp-starter-confidence"><div><span className="section-label">قبل الشراء</span><h2>اعرف بالضبط<br/>ما الذي تدفع مقابله</h2></div><div className="offer-confidence-list"><p><b>الباقة التأسيسية:</b> نقطة دخول منخفضة الاحتكاك لأتمتة الرد والتأهيل والتحويل</p><p><b>لا تشمل:</b> نظامًا كاملًا لإدارة العملاء، وحجزًا متقدمًا، تكاملات متعددة، رسوم واتساب أو الأدوات الخارجية</p><p><b>لو تحتاج نظامًا أكبر:</b> راجع <Link href="/whatsapp-automation">خدمة أتمتة واتساب وإدارة العملاء</Link> أو اقرأ <Link href="/guides/whatsapp-crm-automation-cost-saudi-arabia">دليل تكلفة أتمتة واتساب في السعودية</Link></p></div></section>

      <section className="shell offer-faq whatsapp-starter-faq" id="faq"><div><span className="section-label">أسئلة سريعة</span><h2>قبل ما تبدأ</h2></div><div className="offer-faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>

      <section className="shell offer-final-cta whatsapp-starter-final wa-cinema-final"><div><span className="section-label">ابدأ من هنا</span><h2>خلّي أول رسالة<br/>تتحول إلى خطوة واضحة</h2><p>أرسل لنا نوع نشاطك وأكثر الأسئلة التي تصلك يوميًا، ونحدد هل التأسيسية تكفيك أم تحتاج نظامًا أكبر</p></div><WhatsAppStarterLink className="button primary" label="ابدأ عبر واتساب" /><div className="whatsapp-starter-links"><Link href="/whatsapp-automation">تحتاج نظام إدارة عملاء وتكاملات أكبر؟</Link><Link href="/guides/whatsapp-crm-automation-cost-saudi-arabia">كم تكلفة النظام الكامل؟</Link></div></section>
      <Footer />
    </main>
  );
}
