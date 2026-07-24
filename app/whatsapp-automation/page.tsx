import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "../lib/seo";
import { Footer, Header } from "../components/site-shell";
import AutomationFlow from "../components/automation-flow";
import ConnectedSystem from "../components/connected-system";\nimport WhatsAppHeroDemo from "../components/whatsapp-hero-demo";

export const metadata: Metadata = createMetadata({
  title: "أتمتة واتساب مع CRM للشركات | ديوانك",
  description: "نظام واتساب أوتوميشن ذكي يرد على العملاء 24/7، يؤهلهم، يوجّههم للحجز، يرسل التذكيرات ويربط المحادثات بنظام CRM.",
  path: "/whatsapp-automation",
  keywords: ["واتساب أوتوميشن", "WhatsApp Automation", "CRM واتساب", "شات بوت واتساب", "أتمتة المبيعات"],
});

const faqs = [
  { question: "ما هي أتمتة واتساب؟", answer: "هي نظام يربط محادثات واتساب بقواعد وذكاء اصطناعي وCRM لتنفيذ الرد والتأهيل والحجز والمتابعة والتذكير بصورة تلقائية ومنظمة." },
  { question: "هل يشعر العميل أنه يتحدث مع روبوت؟", answer: "لا يجب أن يحدث ذلك. نصمم النبرة ومسارات الحوار ونقاط التحويل للموظف بحيث تبقى التجربة طبيعية وواضحة." },
  { question: "هل يمكن ربط النظام بالحجز وCRM؟", answer: "نعم، حسب الأدوات المستخدمة يمكن ربط واتساب بالحجز وCRM والنماذج والتقارير والإشعارات الداخلية." },
  { question: "هل يدعم النظام العربية والإنجليزية؟", answer: "نعم، يمكن تصميم ردود ومسارات متعددة اللغات بما يناسب جمهور النشاط في السعودية والخليج." },
  { question: "هل الأتمتة مناسبة للعيادات والصالونات؟", answer: "نعم، كما تناسب العقارات والتعليم والخدمات والشركات التي تستقبل عددًا متكررًا من الاستفسارات وتحتاج تأهيلًا ومتابعة أسرع." },
  { question: "هل يمكن للموظف التدخل في المحادثة؟", answer: "نعم. نحدد الحالات التي تنتقل فيها المحادثة إلى موظف، مثل الشكاوى أو الحالات الخاصة أو العميل الجاهز للشراء." },
];

export default function WhatsAppAutomation() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "WhatsApp Automation and CRM",
    description: "أتمتة واتساب للرد والتأهيل والحجز والمتابعة وربط المحادثات بنظام CRM للشركات في السعودية والخليج.",
    provider: { "@type": "ProfessionalService", name: "Dewank | ديوانك", url: "https://dewank.com" },
    areaServed: ["Saudi Arabia", "Bahrain", "GCC"],
    url: "https://dewank.com/whatsapp-automation",
    mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
  };

  return (
    <main>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="wa-hero">
        <div className="shell wa-hero-grid">
          <div>
            <span className="eyebrow">[ WHATSAPP NEXT‑GEN ]</span>
            <h1>واتساب لا يرد فقط.<br/><em>يفهم، يؤهّل، ويتحرّك.</em></h1>
            <p>منظومة واتساب أوتوميشن مع CRM تربط التسويق بالمبيعات وخدمة العملاء، وتحوّل كل رسالة إلى خطوة واضحة بدل أن تظل مجرد إشعار.</p>
            <Link className="button primary" href="/contact">صمّم منظومتك <span>↙</span></Link>
          </div>
          <WhatsAppHeroDemo />
        </div>
      </section>

      <section className="shell flow-section">
        <span className="section-label">[ THE FLOW ]</span>
        <h2>من أول «مرحبًا»<br/>إلى <mark>إجراء قابل للقياس.</mark></h2>
        <AutomationFlow />
      </section>

      <section className="automation-core">
        <div className="shell core-grid">
          <div className="core-copy"><span className="section-label">[ ONE CONNECTED SYSTEM ]</span><h2>المحادثة في المنتصف.<br/><mark>كل شيء حولها متصل.</mark></h2></div>
          <ConnectedSystem />
        </div>
      </section>

      <section className="shell wa-benefits">
        <div><b>24/7</b><p>استجابة فورية دون انتظار ساعات العمل.</p></div>
        <div><b>1→1</b><p>رحلات مختلفة حسب نية كل عميل.</p></div>
        <div><b>360°</b><p>سجل موحّد يساعد فريقك على إكمال الحوار.</p></div>
      </section>

      <section className="seo-content shell" aria-labelledby="wa-capabilities-title">
        <span className="section-label">[ ماذا يفعل النظام ]</span>
        <h2 id="wa-capabilities-title">من الرد السريع<br/><em>إلى رحلة مبيعات منظمة.</em></h2>
        <div className="seo-content-grid">
          <p>يستقبل النظام استفسارات العملاء ويحدد نيتهم، ثم يعرض الخدمة أو المعلومات المناسبة ويجمع البيانات الأساسية قبل توجيه العميل إلى الحجز أو الموظف المختص.</p>
          <p>يمكن إرسال تذكيرات بالمواعيد، متابعة العملاء المهتمين، إعادة التواصل مع من لم يكملوا الحجز، وتحديث حالة العميل داخل CRM دون نقل يدوي متكرر.</p>
          <p>تظهر للإدارة صورة أوضح عن عدد المحادثات والعملاء المؤهلين والحجوزات والمتابعات، ما يساعد على اكتشاف الفرص الضائعة وتحسين الرحلة بمرور الوقت.</p>
        </div>
      </section>

      <section className="method-section">
        <div className="shell method-layout">
          <div className="method-intro"><span className="section-label">[ طريقة التنفيذ ]</span><h2>لا نبدأ بالبوت.<br/><em>نبدأ بالرحلة.</em></h2><p>نرسم ما يحدث اليوم، ثم نحدد أين تحتاج الأتمتة وأين يجب أن يتدخل الإنسان.</p></div>
          <div className="method-list">
            <div><span>01</span><h3>تحليل المحادثات</h3><p>الأسئلة المتكررة، نقاط التعطّل، ونوايا العملاء الأساسية.</p></div>
            <div><span>02</span><h3>تصميم المسارات</h3><p>الرد والتأهيل والحجز والمتابعة والتحويل للموظف.</p></div>
            <div><span>03</span><h3>الربط والاختبار</h3><p>تكامل واتساب وCRM والحجز والإشعارات والتقارير.</p></div>
            <div><span>04</span><h3>التحسين</h3><p>مراجعة الأداء وتطوير الردود والقواعد حسب المحادثات الحقيقية.</p></div>
          </div>
        </div>
      </section>

      <section className="seo-content shell">
        <span className="section-label">[ حالات الاستخدام ]</span>
        <h2>مناسب للأعمال التي<br/><em>تعيش داخل المحادثات.</em></h2>
        <div className="seo-content-grid">
          <p>العيادات والمراكز الطبية: شرح الخدمات، جمع البيانات الأولية، توجيه الحجز، التذكير وتقليل عدم الحضور مع الحفاظ على التصعيد البشري للحالات الحساسة.</p>
          <p>الصالونات والخدمات المحلية: عرض الخدمات والأسعار وساعات العمل والفروع، ثم اختيار الموعد وإرسال التأكيد والمتابعة بعد الزيارة.</p>
          <p>العقارات والتعليم والخدمات المهنية: تأهيل العميل حسب الميزانية أو الاحتياج، توزيع الفرص على الفريق، وتذكير الموظفين والعملاء بالخطوة التالية.</p>
        </div>
      </section>

      <section className="faq-section shell">
        <span className="section-label">[ أسئلة شائعة ]</span>
        <h2>قبل أن تؤتمت واتساب.</h2>
        <div className="faq-grid">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div>
      </section>

      <section className="wa-cta">
        <div className="shell">
          <p>الأتمتة الجيدة لا تجعل العميل يشعر أنه يتحدث مع روبوت.</p>
          <h2>تجعل الطريق إلى القرار<br/><mark>أقصر وأسهل.</mark></h2>
          <Link className="button primary" href="/contact">ابدأ خريطة الأتمتة <span>↙</span></Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
