import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "../lib/seo";
import { Footer, Header } from "../components/site-shell";
import AutomationFlow from "../components/automation-flow";
import ConnectedSystem from "../components/connected-system";
import WhatsAppHeroDemo from "../components/whatsapp-hero-demo";
import { WhatsAppStarterPrice } from "../offers/whatsapp-automation-starter/localized-whatsapp-starter";

export const metadata: Metadata = createMetadata({
  title: "أتمتة واتساب للشركات مع CRM في السعودية | ديوانك",
  description: "خدمة أتمتة واتساب للشركات في السعودية والخليج: رد آلي، تأهيل العملاء، الحجز والمتابعة وربط WhatsApp مع CRM ونظام المبيعات.",
  path: "/whatsapp-automation",
  keywords: [
    "أتمتة واتساب للشركات",
    "واتساب أوتوميشن السعودية",
    "WhatsApp Automation Saudi Arabia",
    "CRM واتساب",
    "ربط واتساب CRM",
    "الرد الآلي واتساب للشركات",
    "بوت واتساب للحجز",
    "أتمتة المبيعات واتساب",
    "شركة أتمتة واتساب",
  ],
});

const faqs = [
  { question: "ما هي أتمتة واتساب للشركات؟", answer: "هي نظام يربط محادثات واتساب بقواعد عمل وCRM وتكاملات تساعد على الرد والتأهيل والحجز والمتابعة والتذكير بصورة تلقائية ومنظمة، مع تحويل المحادثة للموظف عندما تحتاج تدخلًا بشريًا." },
  { question: "هل يمكن ربط واتساب مع CRM؟", answer: "نعم. يمكن حفظ بيانات العميل وحالته ومصدره داخل CRM، وتحديث مراحل المتابعة وربط الحجز أو النماذج أو الإشعارات حسب الأدوات المستخدمة ونطاق المشروع." },
  { question: "كم تكلفة أتمتة واتساب في السعودية؟", answer: "التكلفة تعتمد على عدد المسارات والتكاملات ووجود CRM والحجز والذكاء الاصطناعي وحجم التشغيل. يوجد عرض Starter بنطاق تأسيسي واضح، بينما الأنظمة المتكاملة تُسعّر بعد مراجعة رحلة العميل والتكاملات المطلوبة." },
  { question: "هل يشعر العميل أنه يتحدث مع روبوت؟", answer: "لا يجب أن يحدث ذلك. نصمم النبرة ومسارات الحوار ونقاط التحويل للموظف بحيث تكون التجربة واضحة وطبيعية ولا تُجبر العميل على مسار غير مناسب." },
  { question: "هل يدعم النظام العربية والإنجليزية؟", answer: "نعم، يمكن تصميم ردود ومسارات متعددة اللغات بما يناسب جمهور النشاط في السعودية والخليج." },
  { question: "هل الأتمتة مناسبة للعيادات والعقارات والخدمات؟", answer: "نعم، وتناسب أيضًا التعليم والصالونات والخدمات المهنية والشركات التي تستقبل استفسارات متكررة وتحتاج تأهيلًا أو حجزًا أو متابعة أسرع." },
  { question: "هل يمكن للموظف التدخل في المحادثة؟", answer: "نعم. نحدد نقاط التحويل البشري بوضوح، مثل الشكاوى والحالات الخاصة والعملاء الجاهزين للشراء أو أي موقف يحتاج قرارًا من الفريق." },
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
    text: "افهم الفرق بين تكلفة البداية ونظام CRM المتكامل والرسوم التشغيلية.",
  },
  {
    href: "/guides/best-crm-whatsapp-saudi-arabia",
    title: "كيف تختار CRM مناسبًا لواتساب؟",
    text: "معايير عملية لاختيار النظام حسب الفريق ورحلة البيع والتكاملات.",
  },
];

export default function WhatsAppAutomation() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "أتمتة واتساب مع CRM للشركات",
        alternateName: "WhatsApp Automation and CRM",
        description: "خدمة أتمتة واتساب للشركات للرد والتأهيل والحجز والمتابعة وربط المحادثات بنظام CRM في السعودية والخليج.",
        serviceType: ["WhatsApp Automation", "WhatsApp CRM", "Lead Qualification Automation", "Sales Automation"],
        provider: { "@type": "ProfessionalService", name: "Dewank | ديوانك", url: "https://dewank.com" },
        areaServed: ["Saudi Arabia", "Bahrain", "GCC"],
        url: "https://dewank.com/whatsapp-automation",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
      },
    ],
  };

  return (
    <main>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <style>{`
        .section-label{font-family:inherit!important;font-size:clamp(14px,1.05vw,17px)!important;line-height:1.4!important;font-weight:800!important;letter-spacing:.01em!important;text-transform:none!important}
        .seo-content h2,.method-intro h2{font-size:clamp(36px,4.15vw,56px);line-height:1.4;letter-spacing:-.035em}
        .method-intro h2{margin-top:18px;margin-bottom:22px}
        .wa-commercial{padding-block:clamp(64px,7vw,100px);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
        .wa-commercial-head{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(260px,.7fr);gap:clamp(30px,6vw,88px);align-items:start;margin-bottom:30px}
        .wa-commercial-head h2{margin:14px 0 0;font-size:clamp(34px,4vw,54px);line-height:1.42;letter-spacing:-.035em;max-width:760px}
        .wa-commercial-head h2 em{font-style:normal;color:var(--blue)}
        .wa-commercial-head>p{margin:3.1rem 0 0;color:var(--muted);line-height:1.9;max-width:430px}
        .wa-choice-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}
        .wa-choice{display:flex;flex-direction:column;min-height:250px;padding:26px;border:1px solid var(--line);border-radius:22px;background:#fff}
        .wa-choice small{font:800 11px/1.2 Arial,sans-serif;letter-spacing:.06em;color:var(--blue)}
        .wa-choice h3{font-size:clamp(22px,2vw,30px);line-height:1.45;margin:14px 0 8px}
        .wa-choice p{color:var(--muted);line-height:1.85;margin:0 0 22px}
        .wa-choice .offer-price{margin-bottom:18px}
        .wa-choice-actions{display:flex;gap:12px;align-items:center;flex-wrap:wrap;margin-top:auto}
        .wa-choice-actions a:not(.button){font-weight:800;color:var(--ink);text-decoration:none;border-bottom:1px solid var(--line);padding-bottom:3px}
        .wa-guides{padding-block:clamp(70px,7vw,100px);border-top:1px solid var(--line)}
        .wa-guides-head{display:grid;grid-template-columns:minmax(220px,.68fr) minmax(0,1.32fr);gap:clamp(36px,6vw,92px);align-items:start;margin-bottom:34px}
        .wa-guides-head h2{margin:16px 0 0;font-size:clamp(34px,4vw,54px);line-height:1.42;letter-spacing:-.035em;max-width:720px}
        .wa-guides-head h2 em{font-style:normal;color:var(--blue)}
        .wa-guides-intro{margin:3rem 0 0;max-width:430px;color:var(--muted);font-size:15px;line-height:1.9}
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
        @media(max-width:900px){.wa-commercial-head,.wa-guides-head{grid-template-columns:1fr;gap:18px}.wa-commercial-head>p,.wa-guides-intro{margin-top:0}.wa-choice-grid,.wa-guide-grid{grid-template-columns:1fr 1fr}.wa-guide-card:last-child{grid-column:1/-1}.wa-guides-head h2{max-width:680px}.seo-content h2,.method-intro h2{font-size:clamp(34px,6vw,48px);line-height:1.42}}
        @media(max-width:640px){.section-label{font-size:14px!important}.wa-commercial,.wa-guides{padding-block:64px}.wa-commercial-head h2,.wa-guides-head h2{font-size:32px;line-height:1.46}.wa-choice-grid,.wa-guide-grid{grid-template-columns:1fr}.wa-guide-card:last-child{grid-column:auto}.wa-choice,.wa-guide-card{min-height:auto;padding:21px}.wa-guide-card h3{font-size:19px}.wa-guides-intro{font-size:14px}.seo-content h2,.method-intro h2{font-size:34px;line-height:1.46;letter-spacing:-.025em}}
        @media(prefers-reduced-motion:reduce){.wa-guide-card,.wa-guide-arrow{transition:none}}
      `}</style>

      <section className="wa-hero">
        <div className="shell wa-hero-grid">
          <div>
            <span className="eyebrow">WHATSAPP AUTOMATION + CRM</span>
            <h1>أتمتة واتساب للشركات.<br/><em>من الرسالة إلى فرصة بيع.</em></h1>
            <p>نبني نظام WhatsApp Automation يرد ويؤهّل العميل ويجمع بياناته ويربط المحادثة بالحجز أو CRM والمتابعة، مع تحويل واضح للموظف عندما تحتاج المحادثة تدخلًا بشريًا.</p>
            <Link className="button primary" href="/contact">ناقش نظامك <span>↙</span></Link>
          </div>
          <WhatsAppHeroDemo />
        </div>
      </section>

      <section className="shell flow-section">
        <span className="section-label">رحلة العميل</span>
        <h2>من أول «مرحبًا»<br/>إلى <mark>إجراء قابل للقياس.</mark></h2>
        <AutomationFlow />
      </section>

      <section className="automation-core">
        <div className="shell core-grid">
          <div className="core-copy"><span className="section-label">نظام واحد متصل</span><h2>المحادثة في المنتصف.<br/><mark>وكل خطوة حولها متصلة.</mark></h2></div>
          <ConnectedSystem />
        </div>
      </section>

      <section className="shell wa-benefits">
        <div><b>24/7</b><p>استجابة فورية للاستفسارات الأساسية دون انتظار ساعات العمل.</p></div>
        <div><b>1→1</b><p>مسارات مختلفة حسب نية العميل والخدمة المطلوبة.</p></div>
        <div><b>360°</b><p>بيانات وحالة أوضح تساعد الفريق على إكمال الحوار.</p></div>
      </section>

      <section className="seo-content shell" aria-labelledby="wa-capabilities-title">
        <span className="section-label">ماذا يفعل النظام</span>
        <h2 id="wa-capabilities-title">من الرد الآلي على واتساب<br/><em>إلى رحلة مبيعات منظمة.</em></h2>
        <div className="seo-content-grid">
          <p>يستقبل النظام استفسارات العملاء ويحدد نيتهم، ثم يعرض الخدمة أو المعلومات المناسبة ويجمع البيانات الأساسية قبل توجيه العميل إلى الحجز أو الموظف المختص.</p>
          <p>يمكن إرسال تذكيرات بالمواعيد، متابعة العملاء المهتمين، إعادة التواصل مع من لم يكملوا الحجز، وتحديث حالة العميل داخل CRM دون نقل يدوي متكرر.</p>
          <p>تظهر للإدارة صورة أوضح عن المحادثات والعملاء المؤهلين والحجوزات والمتابعات، ما يساعد على اكتشاف نقاط التسرب وتحسين الرحلة مع الوقت.</p>
        </div>
      </section>

      <section className="shell wa-commercial" aria-labelledby="wa-commercial-title">
        <div className="wa-commercial-head">
          <div><span className="section-label">اختر نقطة البداية</span><h2 id="wa-commercial-title">تحتاج بداية محدودة؟<br/><em>أم نظامًا متكاملًا مع CRM؟</em></h2></div>
          <p>نفصل بين نية العميل الذي يريد أتمتة أساسية سريعة وبين الشركة التي تحتاج حجزًا وCRM وتكاملات ومتابعة أوسع، حتى لا تدفع مقابل تعقيد لا تحتاجه.</p>
        </div>
        <div className="wa-choice-grid">
          <article className="wa-choice">
            <small>STARTER</small>
            <h3>رد + تأهيل + تحويل للموظف</h3>
            <p>مناسب إذا كانت مشكلتك الأساسية هي بطء الرد وتكرار الأسئلة وضياع بيانات العملاء قبل وصولهم للفريق.</p>
            <WhatsAppStarterPrice />
            <div className="wa-choice-actions"><Link className="button primary" href="/offers/whatsapp-automation-starter">شاهد باقة Starter</Link><Link href="/guides/whatsapp-crm-automation-cost-saudi-arabia">افهم التكلفة</Link></div>
          </article>
          <article className="wa-choice">
            <small>FULL SYSTEM</small>
            <h3>WhatsApp + CRM + حجز + متابعة</h3>
            <p>مناسب إذا لديك فريق أو مراحل مبيعات أو حجوزات وتحتاج أن تصبح المحادثة جزءًا من نظام التشغيل والقياس، لا مجرد رد تلقائي.</p>
            <div className="wa-choice-actions"><Link className="button primary" href="/contact">اطلب نطاق النظام</Link><Link href="/guides/whatsapp-crm-automation">كيف يعمل النظام؟</Link></div>
          </article>
        </div>
      </section>

      <section className="method-section">
        <div className="shell method-layout">
          <div className="method-intro"><span className="section-label">طريقة التنفيذ</span><h2>لا نبدأ بالبوت.<br/><em>نبدأ برحلة العميل.</em></h2><p>نراجع ما يحدث اليوم، ثم نحدد أين تستحق الأتمتة وأين يجب أن يتدخل الإنسان.</p></div>
          <div className="method-list">
            <div><span>01</span><h3>تحليل المحادثات</h3><p>الأسئلة المتكررة، نقاط التعطّل، ونوايا العملاء الأساسية.</p></div>
            <div><span>02</span><h3>تصميم المسارات</h3><p>الرد والتأهيل والحجز والمتابعة والتحويل للموظف.</p></div>
            <div><span>03</span><h3>الربط والاختبار</h3><p>تكامل واتساب وCRM والحجز والإشعارات والتقارير حسب النطاق.</p></div>
            <div><span>04</span><h3>التحسين</h3><p>مراجعة الأداء وتطوير الردود والقواعد حسب المحادثات الحقيقية.</p></div>
          </div>
        </div>
      </section>

      <section className="seo-content shell">
        <span className="section-label">حالات الاستخدام</span>
        <h2>مناسب للأعمال التي<br/><em>تعيش داخل المحادثات.</em></h2>
        <div className="seo-content-grid">
          <p>العيادات والمراكز الطبية: شرح الخدمات، جمع البيانات الأولية، توجيه الحجز، التذكير والمتابعة مع الحفاظ على التصعيد البشري للحالات الحساسة.</p>
          <p>الصالونات والخدمات المحلية: عرض الخدمات والأسعار وساعات العمل والفروع، ثم اختيار الموعد وإرسال التأكيد والمتابعة بعد الزيارة.</p>
          <p>العقارات والتعليم والخدمات المهنية: تأهيل العميل حسب الميزانية أو الاحتياج، توزيع الفرص على الفريق، وتذكير الموظفين والعملاء بالخطوة التالية.</p>
        </div>
      </section>

      <section className="shell wa-guides" aria-labelledby="wa-guides-title">
        <div className="wa-guides-head">
          <div>
            <span className="section-label">أدلة قبل القرار</span>
            <h2 id="wa-guides-title">ابحث عن التكلفة أو CRM؟<br/><em>ابدأ بالدليل المناسب.</em></h2>
          </div>
          <p className="wa-guides-intro">المقالات هنا تخدم نوايا البحث المعلوماتية والتجارية، ثم تنقلك إلى باقة Starter أو النظام الكامل حسب احتياجك.</p>
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
        <span className="section-label">أسئلة شائعة</span>
        <h2>قبل أن تؤتمت واتساب.</h2>
        <div className="faq-grid">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div>
      </section>

      <section className="wa-cta">
        <div className="shell">
          <p>ابدأ من المشكلة التي تريد إزالتها، لا من اسم الأداة.</p>
          <h2>خلّي واتساب يقود العميل<br/><mark>إلى الخطوة التالية.</mark></h2>
          <Link className="button primary" href="/contact">ابدأ خريطة الأتمتة <span>↙</span></Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
