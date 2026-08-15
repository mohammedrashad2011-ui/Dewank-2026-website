import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, organizationId, siteUrl } from "../lib/seo";
import { Footer, Header } from "../components/site-shell";
import AutomationFlow from "../components/automation-flow";
import ConnectedSystem from "../components/connected-system";
import WhatsAppHeroDemo from "../components/whatsapp-hero-demo";
import { WhatsAppStarterPrice } from "../offers/whatsapp-automation-starter/localized-whatsapp-starter";
import "./whatsapp-automation.css";
import "./whatsapp-automation-aeo-upgrade.css";

const title = "أتمتة واتساب للشركات مع CRM في السعودية | ديوانك";
const description = "خدمة أتمتة واتساب للشركات في السعودية والخليج: رد آلي، تأهيل العملاء، الحجز والمتابعة وربط WhatsApp مع CRM ونظام المبيعات.";

export const metadata: Metadata = createMetadata({
  title,
  description,
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
  { href: "/guides/whatsapp-crm-automation", title: "كيف تعمل أتمتة واتساب مع CRM؟", text: "شرح عملي للرحلة من الرسالة إلى التأهيل والحجز والمتابعة والقياس." },
  { href: "/guides/whatsapp-crm-automation-cost-saudi-arabia", title: "كم تكلفة أتمتة واتساب مع CRM في السعودية؟", text: "افهم الفرق بين تكلفة البداية ونظام CRM المتكامل والرسوم التشغيلية." },
  { href: "/guides/best-crm-whatsapp-saudi-arabia", title: "كيف تختار CRM مناسبًا لواتساب؟", text: "معايير عملية لاختيار النظام حسب الفريق ورحلة البيع والتكاملات." },
];

const useCases = [
  ["01", "العيادات والمراكز", "شرح الخدمات، جمع البيانات الأولية، الحجز، التذكير والمتابعة مع تحويل الحالات الحساسة للموظف."],
  ["02", "الصالونات والخدمات", "عرض الخدمات والأسعار والفروع، اختيار الموعد، إرسال التأكيد والمتابعة بعد الزيارة."],
  ["03", "العقارات", "تأهيل العميل حسب الميزانية والاحتياج، توزيع الفرص على الفريق، وتذكير الموظف بالخطوة التالية."],
  ["04", "التعليم والخدمات المهنية", "جمع احتياج العميل، توجيهه للخدمة المناسبة، وتنظيم المتابعة بدل الاعتماد على الذاكرة."],
];

export default function WhatsAppAutomation() {
  const url = `${siteUrl}/whatsapp-automation`;
  const whatsappHref = "https://wa.me/97339066649?text=" + encodeURIComponent("مرحبًا ديوانك، أريد مناقشة نظام أتمتة واتساب لنشاطي. نوع النشاط: ");
  const diagnosticHref = "https://wa.me/97339066649?text=" + encodeURIComponent("مرحبًا ديوانك، أريد تحديد نظام واتساب المناسب. نوع النشاط: ___ | عدد الرسائل اليومية تقريبًا: ___ | هل يوجد CRM أو حجز حاليًا؟ ___");
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "@id": `${url}#service`, name: "أتمتة واتساب مع CRM للشركات", alternateName: "WhatsApp Automation and CRM", description, serviceType: ["WhatsApp Automation", "WhatsApp CRM", "Lead Qualification Automation", "Sales Automation"], provider: { "@id": organizationId }, areaServed: ["SA", "BH", "AE", "KW", "QA", "OM"], url },
      { "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
    ],
  };

  return (
    <main className="wa-page">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="wa-hero">
        <div className="shell wa-hero-grid">
          <div className="wa-hero-copy">
            <span className="eyebrow">WHATSAPP AUTOMATION + CRM</span>
            <h1>
              <span className="wa-hero-line">خلّي واتساب يرد ويؤهّل ويتابع.</span>
              <em className="wa-hero-line wa-hero-line-accent">والفريق يدخل وقت ما يحتاجه العميل.</em>
            </h1>
            <p>نبني نظام أتمتة واتساب يربط المحادثة بالحجز وCRM والمتابعة، عشان العميل ما يضيع بين أول رسالة وآخر خطوة، والفريق ما يكررش نفس الشغل يدويًا.</p>
            <div className="wa-hero-actions">
              <a className="button primary" href={whatsappHref} target="_blank" rel="noopener noreferrer">ناقش نظام واتساب <span>↗</span></a>
              <Link className="button secondary" href="/offers/whatsapp-automation-starter">شاهد باقة البداية</Link>
            </div>
            <div className="wa-proof-strip"><span>رد وتأهيل</span><span>CRM</span><span>حجز</span><span>متابعة</span><span>تحويل للموظف</span></div>
          </div>
          <WhatsAppHeroDemo />
        </div>
      </section>

      <section className="shell wa-aeo-answer" aria-labelledby="wa-aeo-title">
        <small>الإجابة السريعة</small>
        <h2 id="wa-aeo-title">ماذا تفعل أتمتة واتساب للشركة؟</h2>
        <p>تختصر الأعمال المتكررة حول المحادثة من أول رد حتى الخطوة التالية، مع إبقاء الموظف داخل الرحلة عندما يحتاج العميل قرارًا أو تفاوضًا أو حالة خاصة.</p>
        <div className="wa-aeo-grid">
          <article><b>الرد</b><span>إجابة الأسئلة المتكررة فورًا وبنبرة واضحة.</span></article>
          <article><b>التأهيل</b><span>جمع الخدمة والاحتياج والبيانات قبل دخول الموظف.</span></article>
          <article><b>الحجز</b><span>توجيه العميل إلى موعد أو إجراء محدد عند الحاجة.</span></article>
          <article><b>CRM والمتابعة</b><span>حفظ الحالة والمصدر والخطوة التالية بدل ضياع المحادثة.</span></article>
          <article><b>التحويل البشري</b><span>تسليم المحادثة للموظف عندما تصبح بحاجة لتدخل فعلي.</span></article>
        </div>
      </section>

      <section className="shell flow-section wa-flow-section">
        <span className="section-label">رحلة العميل</span>
        <h2>من أول «مرحبًا»<br/>إلى <mark>إجراء قابل للقياس.</mark></h2>
        <p className="wa-section-intro">الأتمتة مش رد تلقائي وبس. الهدف إن كل رسالة تعرف الخطوة اللي بعدها، ومتى يتحول العميل للموظف.</p>
        <AutomationFlow />
      </section>

      <section className="automation-core wa-connected">
        <div className="shell core-grid">
          <div className="core-copy"><span className="section-label">نظام واحد متصل</span><h2>المحادثة في المنتصف.<br/><mark>وكل خطوة حولها متصلة.</mark></h2><p>واتساب يبقى واجهة العميل، وCRM والحجز والمتابعة والتقارير يبقوا النظام اللي يشتغل وراءها.</p></div>
          <ConnectedSystem />
        </div>
      </section>

      <section className="shell wa-benefits wa-benefits-polish">
        <div><b>رد أسرع</b><p>الأسئلة الأساسية ما تستناش بداية دوام الموظف.</p></div>
        <div><b>Lead أوضح</b><p>كل عميل يدخل بالحالة والمصدر والخدمة المطلوبة.</p></div>
        <div><b>متابعة أقل ضياعًا</b><p>التذكير والخطوة التالية ما يعتمدوش على الذاكرة.</p></div>
      </section>

      <section className="shell wa-commercial" aria-labelledby="wa-commercial-title">
        <div className="wa-section-head"><div><span className="section-label">اختر نقطة البداية</span><h2 id="wa-commercial-title">مش كل نشاط محتاج نفس النظام.</h2></div><p>ابدأ بأقل نطاق يحل المشكلة الحالية. لو احتجت CRM أو حجز أو تكاملات أوسع، نوسع النظام بعد ما تبقى الرحلة واضحة.</p></div>
        <div className="wa-choice-grid">
          <article className="wa-choice wa-choice-featured"><small>STARTER</small><h3>رد + تأهيل + تحويل للموظف</h3><p>مناسب لو أكبر مشكلة عندك هي بطء الرد، تكرار الأسئلة، أو وصول العميل للموظف بدون بيانات كافية.</p><WhatsAppStarterPrice /><ul><li>أسئلة وردود أساسية</li><li>جمع بيانات وتأهيل</li><li>تحويل واضح للموظف</li></ul><div className="wa-choice-actions"><Link className="button primary" href="/offers/whatsapp-automation-starter">شاهد باقة Starter</Link><Link href="/guides/whatsapp-crm-automation-cost-saudi-arabia">افهم التكلفة</Link></div></article>
          <article className="wa-choice"><small>FULL SYSTEM</small><h3>WhatsApp + CRM + حجز + متابعة</h3><p>مناسب لو عندك فريق أو مراحل مبيعات أو حجوزات، وتحتاج المحادثة تبقى جزء من نظام التشغيل والقياس.</p><div className="wa-system-tags"><span>CRM</span><span>Booking</span><span>Follow-up</span><span>Reports</span></div><ul><li>تحديث مراحل العميل</li><li>حجز وتذكير ومتابعة</li><li>تكاملات وتقارير حسب النطاق</li></ul><div className="wa-choice-actions"><a className="button primary" href={whatsappHref} target="_blank" rel="noopener noreferrer">ناقش النظام الكامل</a><Link href="/guides/whatsapp-crm-automation">كيف يعمل؟</Link></div></article>
        </div>
      </section>

      <section className="shell wa-crm-decision" aria-labelledby="wa-crm-decision-title">
        <small>أتمتة فقط أم CRM؟</small>
        <h2 id="wa-crm-decision-title">ابدأ بالمشكلة، وليس باسم الأداة.</h2>
        <p>لو الهدف فقط الرد السريع وجمع البيانات وتحويل المحادثة، قد يكفي نطاق Starter. لو عندك فريق ومراحل بيع وحجوزات ومتابعات متكررة، فالـCRM يصبح جزءًا من الحل وليس إضافة تجميلية.</p>
        <div className="wa-crm-grid">
          <article><h3>Automation فقط</h3><p>أنسب عندما تحتاج ردودًا وتأهيلًا وتسليمًا للموظف بدون إدارة مراحل معقدة أو سجل متابعة موسع.</p></article>
          <article><h3>Automation + CRM</h3><p>أنسب عندما تحتاج حفظ حالة العميل، توزيع الفرص، الحجز، التذكير، المتابعة والتقارير عبر رحلة أطول.</p></article>
        </div>
        <div className="wa-cost-note"><strong>عن التكلفة:</strong> افصل بين تكلفة التأسيس، أي رسوم تشغيل للأدوات أو القنوات، وتكلفة التكاملات مثل CRM أو الحجز. السعر النهائي يتغير حسب عدد المسارات والتكاملات وحجم التشغيل.</div>
      </section>

      <section className="method-section wa-method">
        <div className="shell method-layout">
          <div className="method-intro"><span className="section-label">طريقة التنفيذ</span><h2>لا نبدأ بالبوت.<br/><em>نبدأ برحلة العميل.</em></h2><p>نراجع المحادثات الحالية، ونحدد أين يتكرر الشغل وأين يضيع العميل، ثم نبني المسار الأقل تعقيدًا الذي يحل المشكلة.</p></div>
          <div className="method-list"><div><span>01</span><h3>نحلل المحادثات</h3><p>الأسئلة المتكررة، نقاط التعطّل، ونوايا العملاء الأساسية.</p></div><div><span>02</span><h3>نصمم المسارات</h3><p>الرد، التأهيل، الحجز، المتابعة والتحويل للموظف.</p></div><div><span>03</span><h3>نربط ونختبر</h3><p>واتساب وCRM والحجز والإشعارات حسب النطاق.</p></div><div><span>04</span><h3>نحسن</h3><p>تطوير الردود والقواعد على أساس المحادثات الحقيقية.</p></div></div>
        </div>
      </section>

      <section className="shell wa-readiness" aria-labelledby="wa-readiness-title">
        <small>متى تكون الأتمتة مفيدة فعلًا؟</small>
        <h2 id="wa-readiness-title">لو المشكلة تتكرر يوميًا، غالبًا تستحق الأتمتة.</h2>
        <p>الأتمتة تكون أكثر قيمة عندما تحذف تكرارًا واضحًا أو تمنع فرصة بيع من الضياع، وليس فقط لأنها تقنية جديدة.</p>
        <div className="wa-readiness-grid">
          <article><b>الرد بطيء</b><p>العميل ينتظر، أو السؤال نفسه يتكرر عشرات المرات.</p></article>
          <article><b>المتابعة تضيع</b><p>لا يوجد تذكير واضح بمن يجب متابعته ومتى.</p></article>
          <article><b>العميل يصل ناقص البيانات</b><p>الموظف يبدأ كل محادثة من الصفر بدل استلام Lead مؤهل.</p></article>
          <article><b>الفريق يعمل يدويًا أكثر من اللازم</b><p>الحجز والتأكيد والتذكير وتحديث الحالة كلها خطوات متكررة.</p></article>
        </div>
        <div className="wa-diagnostic-cta"><p><strong>مش عارف تبدأ منين؟</strong><br/>أرسل نوع النشاط وعدد الرسائل اليومية وهل عندك CRM أو حجز حاليًا، ونحدد لك أقل نظام مناسب للمشكلة.</p><a className="button primary" href={diagnosticHref} target="_blank" rel="noopener noreferrer">حدد النظام المناسب <span>↗</span></a></div>
      </section>

      <section className="shell wa-usecases">
        <div className="wa-section-head"><div><span className="section-label">حالات الاستخدام</span><h2>لما المحادثة جزء من البيع،<br/><em>لازم ما تضيعش بعد أول رد.</em></h2></div><p>أتمتة واتساب مفيدة أكثر عندما تتكرر الأسئلة، التأهيل، الحجز أو المتابعة يوميًا.</p></div>
        <div className="wa-usecase-grid">{useCases.map(([number, heading, text]) => <article key={number}><small>{number}</small><h3>{heading}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="wa-ai-bridge shell">
        <div><span className="section-label">أبعد من واتساب؟</span><h2>واتساب هو القناة.<br/>لكن الأتمتة ممكن تربط العملية كلها.</h2><p>لو المشكلة تمتد للمبيعات أو العمليات أو التقارير أو أكثر من نظام، راجع صفحة أتمتة الأعمال بالذكاء الاصطناعي.</p></div>
        <Link className="button primary" href="/ai-automation">استكشف AI Automation</Link>
      </section>

      <section className="shell wa-guides" aria-labelledby="wa-guides-title">
        <div className="wa-section-head"><div><span className="section-label">أدلة قبل القرار</span><h2 id="wa-guides-title">قبل ما تشتري أداة،<br/><em>افهم النظام والتكلفة.</em></h2></div><p>لو سؤالك الآن عن CRM أو الأسعار أو طريقة الربط، ابدأ بالدليل الأقرب لقرارك.</p></div>
        <div className="wa-guide-grid">{guideLinks.map((guide, index) => <Link className="wa-guide-card" href={guide.href} key={guide.href}><div className="wa-guide-card-top"><span>دليل 0{index + 1}</span><span className="wa-guide-arrow" aria-hidden="true">↗</span></div><h3>{guide.title}</h3><p>{guide.text}</p></Link>)}</div>
      </section>

      <section className="wa-faq shell" id="faq"><span className="section-label">أسئلة شائعة</span><h2>قبل أن تؤتمت واتساب.</h2><div className="faq-grid">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></section>

      <section className="wa-final"><div className="shell"><p>ابدأ من المشكلة التي تريد إزالتها، لا من اسم الأداة.</p><h2>خلّي واتساب يقود العميل<br/><mark>إلى الخطوة التالية.</mark></h2><a className="button primary" href={whatsappHref} target="_blank" rel="noopener noreferrer">ناقش خريطة الأتمتة <span>↗</span></a></div></section>
      <Footer />
    </main>
  );
}
