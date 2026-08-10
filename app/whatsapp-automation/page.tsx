import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "../lib/seo";
import { Footer, Header } from "../components/site-shell";
import AutomationFlow from "../components/automation-flow";
import ConnectedSystem from "../components/connected-system";
import WhatsAppHeroDemo from "../components/whatsapp-hero-demo";

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

const guideLinks = [
  {
    href: "/guides/whatsapp-crm-automation",
    title: "كيف تعمل أتمتة واتساب مع CRM؟",
    text: "شرح عملي للرحلة من الرسالة إلى التأهيل والحجز والمتابعة والقياس.",
  },
  {
    href: "/guides/whatsapp-crm-automation-cost-saudi-arabia",
    title: "كم تكلفة أتمتة واتساب مع CRM في السعودية؟",
    text: "لفهم بنود التكلفة والفرق بين نظام متكامل وبداية محدودة.",
  },
  {
    href: "/guides/best-crm-whatsapp-saudi-arabia",
    title: "كيف تختار CRM مناسبًا لواتساب؟",
    text: "معايير عملية لاختيار النظام حسب الفريق والرحلة والتكاملات.",
  },
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
      <style>{`
        .seo-content h2,.method-intro h2{font-size:clamp(36px,4.15vw,56px);line-height:1.34;letter-spacing:-.035em}
        .method-intro h2{margin-top:18px;margin-bottom:22px}
        .wa-guides{padding-block:clamp(70px,7vw,100px);border-top:1px solid var(--line)}
        .wa-guides-head{display:grid;grid-template-columns:minmax(220px,.68fr) minmax(0,1.32fr);gap:clamp(36px,6vw,92px);align-items:end;margin-bottom:34px}
        .wa-guides-head h2{margin:16px 0 0;font-size:clamp(34px,4vw,54px);line-height:1.36;letter-spacing:-.035em;max-width:720px}
        .wa-guides-head h2 em{font-style:normal;color:var(--blue)}
        .wa-guides-intro{margin:0;max-width:430px;color:var(--muted);font-size:15px;line-height:1.9}
        .wa-guide-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
        .wa-guide-card{display:flex;flex-direction:column;min-height:210px;padding:24px;border:1px solid var(--line);border-radius:22px;background:#fff;color:inherit;text-decoration:none;transition:transform .2s ease,border-color .2s ease,box-shadow .2s ease}
        .wa-guide-card:hover{transform:translateY(-3px);border-color:rgba(0,77,255,.28);box-shadow:0 16px 36px rgba(10,20,45,.06)}
        .wa-guide-card:focus-visible{outline:3px solid rgba(0,77,255,.24);outline-offset:3px}
        .wa-guide-card-top{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:26px}
        .wa-guide-card-top span:first-child{font:700 10px/1 Arial,sans-serif;letter-spacing:.08em;color:var(--blue)}
        .wa-guide-arrow{width:34px;height:34px;border:1px solid var(--line);border-radius:50%;display:grid;place-items:center;font-size:18px;transition:background .2s ease,color .2s ease,border-color .2s ease}
        .wa-guide-card:hover .wa-guide-arrow{background:var(--ink);color:#fff;border-color:var(--ink)}
        .wa-guide-card h3{margin:0 0 12px;font-size:clamp(18px,1.5vw,23px);line-height:1.55;letter-spacing:-.02em}
        .wa-guide-card p{margin:auto 0 0;color:var(--muted);font-size:14px;line-height:1.85}
        @media(max-width:900px){.wa-guides-head{grid-template-columns:1fr;gap:18px}.wa-guide-grid{grid-template-columns:1fr 1fr}.wa-guide-card:last-child{grid-column:1/-1}.wa-guides-head h2{max-width:680px}.seo-content h2,.method-intro h2{font-size:clamp(34px,6vw,48px);line-height:1.36}}
        @media(max-width:640px){.wa-guides{padding-block:64px}.wa-guides-head h2{font-size:32px;line-height:1.42}.wa-guide-grid{grid-template-columns:1fr}.wa-guide-card:last-child{grid-column:auto}.wa-guide-card{min-height:190px;padding:21px}.wa-guide-card h3{font-size:19px}.wa-guides-intro{font-size:14px}.seo-content h2,.method-intro h2{font-size:34px;line-height:1.42;letter-spacing:-.025em}}
        @media(prefers-reduced-motion:reduce){.wa-guide-card,.wa-guide-arrow{transition:none}}
      `}</style>

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

      <section className="shell wa-guides" aria-labelledby="wa-guides-title">
        <div className="wa-guides-head">
          <div>
            <span className="section-label">[ أدلة قبل القرار ]</span>
            <h2 id="wa-guides-title">افهم الرحلة أولًا.<br/><em>ثم اختر النطاق المناسب.</em></h2>
          </div>
          <p className="wa-guides-intro">ثلاثة أدلة مختصرة تساعدك على فهم التنفيذ والتكلفة واختيار النظام قبل اتخاذ القرار.</p>
        </div>
        <div className="wa-guide-grid">
          {guideLinks.map((guide, index) => (
            <Link className="wa-guide-card" href={guide.href} key={guide.href}>
              <div className="wa-guide-card-top"><span>دليل 0{index + 1}</span><span className="wa-guide-arrow" aria-hidden="true">↗</span></div>
              <h3>{guide.title}</h3>
              <p>{guide.text}</p>
            </Link>
          ))}
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