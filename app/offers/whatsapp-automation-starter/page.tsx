import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../components/site-shell";
import { createMetadata, organizationId, siteUrl } from "../../lib/seo";
import { WhatsAppStarterLink, WhatsAppStarterPrice } from "./localized-whatsapp-starter";
import "../offers-page.css";
import "../offer-trust.css";
import "./whatsapp-starter.css";

const title = "واتساب أوتوميشن Starter | رد وتأهيل وتحويل للموظف";
const description = "باقة تأسيس واتساب أوتوميشن للشركات والمشاريع تشمل الردود الأساسية، تأهيل العملاء، جمع البيانات، التحويل للموظف، ومسار متابعة واضح. تبدأ من 890 ريال.";

export const metadata: Metadata = createMetadata({
  title: `${title} | ديوانك`,
  description,
  path: "/offers/whatsapp-automation-starter",
  keywords: ["واتساب أوتوميشن", "أتمتة واتساب", "رد تلقائي واتساب", "تأهيل العملاء واتساب", "واتساب للشركات", "WhatsApp automation Saudi Arabia", "شات بوت واتساب"],
});

const deliverables = [
  ["تحليل رحلة العميل", "نحدد أكثر الأسئلة تكرارًا، أين يضيع العميل، ومتى يحتاج الانتقال إلى موظف."],
  ["مسار رد أساسي", "ترحيب، تعريف بالخدمات، الإجابة عن الأسئلة الأساسية، ثم توجيه العميل للخطوة المناسبة."],
  ["تأهيل العميل", "جمع البيانات المهمة مثل نوع الطلب والميزانية أو الخدمة المطلوبة قبل تحويله للموظف."],
  ["تحويل ذكي للموظف", "نحدد الحالات التي تتوقف فيها الأتمتة وتنتقل المحادثة إلى شخص من الفريق."],
  ["رسائل متابعة أساسية", "متابعة العميل الذي توقف قبل إكمال الخطوة، ضمن المسار المتفق عليه."],
  ["قاعدة بيانات بسيطة", "تجميع بيانات العملاء وحالتهم في سجل منظم مناسب للباقة التأسيسية."],
  ["اختبار قبل التشغيل", "نجرب المسارات والردود والحالات الاستثنائية قبل إطلاق النظام فعليًا."],
  ["دعم بعد الإطلاق", "مراجعة وضبط الردود خلال أول 7 أيام بعد التشغيل لمعالجة الملاحظات المبكرة."],
];

const faqs = [
  ["ما هي باقة واتساب أوتوميشن Starter؟", "هي باقة تأسيسية لأتمتة الرد والتأهيل وجمع البيانات والتحويل للموظف، مناسبة للمشاريع التي تريد تنظيم استفسارات واتساب قبل الانتقال إلى نظام CRM أو أتمتة أكثر تعقيدًا."],
  ["هل الباقة تشمل CRM كامل؟", "لا. تشمل سجلًا بسيطًا ومنظمًا للبيانات ضمن نطاق الباقة. إذا كنت تحتاج CRM كاملًا، لوحات متابعة، مراحل مبيعات أو تكاملات متعددة، يتم تسعيرها ضمن باقة منفصلة."],
  ["هل الردود تعتمد على الذكاء الاصطناعي؟", "يمكن استخدام قواعد ثابتة أو ردود مدعومة بالذكاء الاصطناعي حسب طبيعة النشاط، لكن الهدف في باقة Starter هو بناء رحلة واضحة ومستقرة قبل إضافة تعقيد غير ضروري."],
  ["هل يمكن للموظف التدخل في أي وقت؟", "نعم. نحدد نقاط التحويل للموظف بوضوح، ويمكن جعل بعض الحالات تنتقل مباشرة للفريق بدل استمرار الأتمتة."],
  ["هل تشمل الباقة رسوم واتساب أو أدوات خارجية؟", "لا. أي رسوم تفرضها منصات واتساب أو مزودو الربط أو الأدوات الخارجية تكون منفصلة، ونوضحها قبل بدء التنفيذ إذا كانت مطلوبة."],
  ["كم يستغرق التنفيذ؟", "التنفيذ المعتاد من 3 إلى 5 أيام عمل بعد استلام معلومات النشاط والردود الأساسية واعتماد مسار المحادثة."],
];

export default function WhatsAppAutomationStarterOffer() {
  const url = `${siteUrl}/offers/whatsapp-automation-starter`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "باقة واتساب أوتوميشن Starter",
        description,
        serviceType: ["WhatsApp Automation", "Lead Qualification", "Customer Messaging Automation"],
        provider: { "@id": organizationId },
        areaServed: ["SA", "BH", "AE", "KW", "QA", "OM"],
        offers: { "@type": "Offer", price: "890", priceCurrency: "SAR", availability: "https://schema.org/InStock", url },
        url,
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqs.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "العروض", item: `${siteUrl}/offers` },
          { "@type": "ListItem", position: 3, name: "واتساب أوتوميشن Starter", item: url },
        ],
      },
    ],
  };

  return (
    <main className="inner-page offers-page whatsapp-starter-page">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="shell offer-detail-hero whatsapp-starter-hero">
        <div>
          <div className="offer-availability"><span className="offer-spots-available"><i aria-hidden="true" /><strong>3–5</strong> أيام عمل</span></div>
          <h1>خلّي واتساب<br/><em>يبدأ الشغل قبل فريقك.</em></h1>
          <p>نبني لك مسار واتساب منظم يرد على الأسئلة الأساسية، يؤهّل العميل، يجمع بياناته، ثم يوصله للموظف المناسب بدل ضياع المحادثات بين الردود اليدوية.</p>
          <div className="whatsapp-starter-answer" aria-label="الإجابة المختصرة">
            <b>الإجابة المختصرة</b>
            <span>الباقة مناسبة لو عندك استفسارات متكررة وتريد ردًا أسرع وتأهيلًا أوضح قبل أن يدخل الموظف في المحادثة.</span>
          </div>
        </div>
        <aside className="offer-price-panel whatsapp-starter-price-panel">
          <small>باقة التأسيس</small>
          <WhatsAppStarterPrice />
          <div className="offer-trust-inline"><span>رد وتأهيل</span><span>تحويل للموظف</span><span>دعم 7 أيام</span></div>
          <p>تشمل إعداد المسار الأساسي والاختبار والتشغيل. لا تشمل رسوم واتساب أو الأدوات الخارجية أو CRM كامل.</p>
          <WhatsAppStarterLink className="button primary" label="ابدأ أتمتة واتساب" />
        </aside>
      </section>

      <section className="shell whatsapp-starter-proof">
        <div className="whatsapp-starter-proof-copy">
          <span className="section-label">[ ماذا يتغير؟ ]</span>
          <h2>من رسالة ضائعة.<br/>إلى خطوة واضحة.</h2>
          <p>بدل أن يرسل العميل «أريد التفاصيل» وينتظر، يبدأ النظام رحلة قصيرة: يفهم الطلب، يعطي المعلومة المناسبة، يجمع البيانات، ثم يحدد هل يحتاج متابعة تلقائية أو تدخلًا بشريًا.</p>
        </div>
        <div className="whatsapp-flow-card" aria-label="نموذج مبسط لمسار واتساب">
          <div className="whatsapp-flow-top"><span>مسار واتساب نموذجي</span><small>Starter</small></div>
          <div className="whatsapp-flow-steps">
            <article><b>01</b><div><strong>استفسار جديد</strong><span>مرحبًا، أريد معرفة التفاصيل</span></div></article>
            <article><b>02</b><div><strong>تحديد الاحتياج</strong><span>ما الخدمة التي تهمك؟</span></div></article>
            <article><b>03</b><div><strong>جمع البيانات</strong><span>الاسم · نوع النشاط · الطلب</span></div></article>
            <article><b>04</b><div><strong>تسليم للموظف</strong><span>عميل مؤهل وجاهز للمتابعة</span></div></article>
          </div>
        </div>
      </section>

      <section className="shell offer-deliverables whatsapp-starter-deliverables">
        <div><span className="section-label">[ ماذا تستلم؟ ]</span><h2>الأساس الذي يمنع<br/>فوضى المحادثات.</h2><p>نبدأ بالمسار الضروري فقط، حتى يكون واضحًا وسهل التشغيل والتطوير لاحقًا.</p></div>
        <div className="deliverable-list">{deliverables.map(([item, text]) => <article className="deliverable-item" key={item}><b>{item}</b><p>{text}</p></article>)}</div>
      </section>

      <section className="shell whatsapp-starter-fit">
        <div className="whatsapp-starter-fit-head"><span className="section-label">[ هل تناسبك؟ ]</span><h2>ابدأ صغيرًا.<br/>ثم وسّع النظام عند الحاجة.</h2></div>
        <div className="offer-fit-grid">
          <article className="offer-fit-card good"><h3>مناسبة لك إذا</h3><ul><li>تستقبل نفس الأسئلة يوميًا</li><li>يتأخر الرد بسبب انشغال الفريق</li><li>تريد جمع بيانات العميل قبل الموظف</li><li>تحتاج نقطة بداية قبل CRM كامل</li></ul></article>
          <article className="offer-fit-card limits"><h3>تحتاج باقة أكبر إذا</h3><ul><li>لديك عدة فروع أو فرق مبيعات</li><li>تحتاج CRM كامل ومراحل بيع</li><li>تحتاج حجزًا وتذكيرات وتكاملات متعددة</li><li>تحتاج ذكاء اصطناعي متقدم وقاعدة معرفة كبيرة</li></ul></article>
        </div>
      </section>

      <section className="shell whatsapp-starter-process">
        <div className="whatsapp-starter-process-head"><span className="section-label">[ طريقة التنفيذ ]</span><h2>نفهم. نبني. نختبر. نشغّل.</h2></div>
        <div className="whatsapp-starter-process-grid">
          <article><b>01</b><h3>نفهم الأسئلة</h3><p>نجمع الأسئلة المتكررة، الخدمات، وطريقة الرد الحالية.</p></article>
          <article><b>02</b><h3>نرسم المسار</h3><p>نحدد الردود، البيانات المطلوبة، ونقاط التحويل للموظف.</p></article>
          <article><b>03</b><h3>نختبر ونطلق</h3><p>نجرب السيناريوهات الأساسية ثم نطلق النظام ونراجع أول أسبوع.</p></article>
        </div>
      </section>

      <section className="shell offer-confidence whatsapp-starter-confidence">
        <div className="offer-confidence-head"><span className="section-label">[ حدود واضحة ]</span><h2>Starter تعني بداية ذكية. لا نظامًا ضخمًا.</h2></div>
        <div className="offer-confidence-grid"><article><b>01</b><span>الباقة لا تشمل CRM كاملًا أو لوحة مبيعات متقدمة.</span></article><article><b>02</b><span>رسوم واتساب الرسمية أو مزودي الربط أو الأدوات الخارجية منفصلة إن وجدت.</span></article><article><b>03</b><span>التكاملات المعقدة مع أنظمة خارجية يتم تقييمها وتسعيرها بشكل مستقل.</span></article></div>
        <details className="offer-policy"><summary>ما الذي لا يشمله العرض؟</summary><p>لا يشمل تطوير نظام CRM مخصص، تكاملات متعددة ومعقدة، حملات إرسال جماعي، إدارة شهرية مستمرة، أو رسوم منصات الطرف الثالث.</p></details>
      </section>

      <section className="shell offer-faq" id="faq"><div className="offer-faq-head"><span className="section-label">[ أسئلة شائعة ]</span><h2>قبل ما تؤتمت.</h2></div><div className="offer-faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>

      <section className="shell offer-final-cta whatsapp-starter-final">
        <span className="offer-kicker">واتساب أوتوميشن · باقة تأسيس</span>
        <h2>كل استفسار يدخل واتساب لازم يعرف يروح فين.</h2>
        <p>أرسل نوع نشاطك وعدد الرسائل اليومية تقريبًا، ونحدد هل باقة Starter مناسبة لك قبل البدء.</p>
        <WhatsAppStarterLink className="button primary" label="ابدأ أتمتة واتساب" />
        <div className="whatsapp-starter-links"><Link href="/whatsapp-automation">تفاصيل خدمة واتساب أوتوميشن</Link><Link href="/guides/whatsapp-crm-automation">دليل أتمتة واتساب وCRM</Link><Link href="/offers">العودة إلى العروض</Link></div>
      </section>
      <Footer />
    </main>
  );
}
