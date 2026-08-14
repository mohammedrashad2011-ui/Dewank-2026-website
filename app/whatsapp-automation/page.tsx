import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, organizationId, siteUrl } from "../lib/seo";
import { Footer, Header } from "../components/site-shell";
import AutomationFlow from "../components/automation-flow";
import ConnectedSystem from "../components/connected-system";
import WhatsAppHeroDemo from "../components/whatsapp-hero-demo";
import { WhatsAppStarterPrice } from "../offers/whatsapp-automation-starter/localized-whatsapp-starter";
import "./whatsapp-automation.css";

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

const useCases = [
  { label: "عيادات ومراكز", title: "حجز + تذكير + متابعة", text: "جمع البيانات الأولية، توجيه الحجز، إرسال التذكيرات، وتحويل الحالات الحساسة للموظف." },
  { label: "خدمات محلية", title: "سؤال متكرر إلى موعد", text: "عرض الخدمات والأسعار والفروع، ثم نقل العميل مباشرة إلى اختيار الموعد أو الموظف المناسب." },
  { label: "عقارات وتعليم", title: "تأهيل قبل تدخل الفريق", text: "جمع الميزانية أو الاحتياج، تصنيف الفرصة، توزيعها على المسؤول الصحيح، وتذكير الفريق بالخطوة التالية." },
  { label: "خدمات مهنية", title: "Lead أوضح داخل CRM", text: "تسجيل المصدر والخدمة المطلوبة والحالة، بدل ضياع التفاصيل داخل محادثات متفرقة." },
];

const guideLinks = [
  { href: "/guides/whatsapp-crm-automation", title: "كيف تعمل أتمتة واتساب مع CRM؟", text: "شرح عملي للرحلة من الرسالة إلى التأهيل والحجز والمتابعة والقياس." },
  { href: "/guides/whatsapp-crm-automation-cost-saudi-arabia", title: "كم تكلفة أتمتة واتساب مع CRM في السعودية؟", text: "افهم الفرق بين تكلفة البداية ونظام CRM المتكامل والرسوم التشغيلية." },
  { href: "/guides/best-crm-whatsapp-saudi-arabia", title: "كيف تختار CRM مناسبًا لواتساب؟", text: "معايير عملية لاختيار النظام حسب الفريق ورحلة البيع والتكاملات." },
];

export default function WhatsAppAutomation() {
  const url = `${siteUrl}/whatsapp-automation`;
  const whatsappHref = "https://wa.me/97339066649?text=" + encodeURIComponent("مرحبًا ديوانك، أريد مناقشة أتمتة واتساب لنشاطي. نوع النشاط هو: ");

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "أتمتة واتساب مع CRM للشركات",
        alternateName: "WhatsApp Automation and CRM",
        description,
        serviceType: ["WhatsApp Automation", "WhatsApp CRM", "Lead Qualification Automation", "Sales Automation"],
        provider: { "@id": organizationId },
        areaServed: ["SA", "BH", "AE", "KW", "QA", "OM"],
        url,
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
      },
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
            <h1>خلّي واتساب يرد ويؤهّل ويتابع.<br/><em>والفريق يدخل وقت ما يحتاجه العميل.</em></h1>
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
        <div className="wa-section-head">
          <div><span className="section-label">اختر نقطة البداية</span><h2 id="wa-commercial-title">مش كل نشاط محتاج نفس النظام.</h2></div>
          <p>ابدأ بأقل نطاق يحل المشكلة الحالية. لو احتجت CRM أو حجز أو تكاملات أوسع، نوسع النظام بعد ما تبقى الرحلة واضحة.</p>
        </div>
        <div className="wa-choice-grid">
          <article className="wa-choice wa-choice-featured">
            <small>STARTER</small>
            <h3>رد + تأهيل + تحويل للموظف</h3>
            <p>مناسب لو أكبر مشكلة عندك هي بطء الرد، تكرار الأسئلة، أو وصول العميل للموظف بدون بيانات كافية.</p>
            <WhatsAppStarterPrice />
            <ul><li>أسئلة وردود أساسية</li><li>جمع بيانات وتأهيل</li><li>تحويل واضح للموظف</li></ul>
            <div className="wa-choice-actions"><Link className="button primary" href="/offers/whatsapp-automation-starter">شاهد باقة Starter</Link><Link href="/guides/whatsapp-crm-automation-cost-saudi-arabia">افهم التكلفة</Link></div>
          </article>
          <article className="wa-choice">
            <small>FULL SYSTEM</small>
            <h3>WhatsApp + CRM + حجز + متابعة</h3>
            <p>مناسب لو عندك فريق أو مراحل مبيعات أو حجوزات، وتحتاج المحادثة تبقى جزء من نظام التشغيل والقياس.</p>
            <div className="wa-system-tags"><span>CRM</span><span>Booking</span><span>Follow-up</span><span>Reports</span></div>
            <ul><li>تحديث مراحل العميل</li><li>حجز وتذكير ومتابعة</li><li>تكاملات وتقارير حسب النطاق</li></ul>
            <div className="wa-choice-actions"><a className="button primary" href={whatsappHref} target="_blank" rel="noopener noreferrer">ناقش النظام الكامل</a><Link href="/guides/whatsapp-crm-automation">كيف يعمل؟</Link></div>
          </article>
        </div>
      </section>

      <section className="method-section wa-method">
        <div className="shell method-layout">
          <div className="method-intro"><span className="section-label">طريقة التنفيذ</span><h2>لا نبدأ بالبوت.<br/><em>نبدأ برحلة العميل.</em></h2><p>نراجع المحادثات الحالية، ونحدد أين يتكرر الشغل وأين يضيع العميل، ثم نبني المسار الأقل تعقيدًا الذي يحل المشكلة.</p></div>
          <div className="method-list">
            <div><span>01</span><h3>نحلل المحادثات</h3><p>الأسئلة المتكررة، نقاط التعطّل، ونوايا العملاء الأساسية.</p></div>
            <div><span>02</span><h3>نصمم المسارات</h3><p>الرد والتأهيل والحجز والمتابعة والتحويل للموظف.</p></div>
            <div><span>03</span><h3>نربط ونختبر</h3><p>واتساب وCRM والحجز والإشعارات حسب النطاق.</p></div>
            <div><span>04</span><h3>نحسّن</h3><p>نراجع المحادثات الحقيقية ونطور القواعد والردود.</p></div>
          </div>
        </div>
      </section>

      <section className="shell wa-usecases">
        <div className="wa-section-head">
          <div><span className="section-label">حالات الاستخدام</span><h2>لو البيع أو الحجز يبدأ من المحادثة، هنا تظهر القيمة.</h2></div>
          <p>القطاع يغيّر الأسئلة والتفاصيل، لكن المشكلة غالبًا واحدة: عميل داخل واتساب ويحتاج رحلة أقصر وأوضح.</p>
        </div>
        <div className="wa-usecase-grid">{useCases.map((item) => <article key={item.title}><small>{item.label}</small><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </section>

      <section className="shell wa-ai-bridge">
        <div><span className="section-label">واتساب قناة، مش النظام كله</span><h2>تحتاج AI أوسع من المحادثة؟</h2><p>لو المشكلة تمتد للعمليات، الطلبات، التقارير أو قرارات بين أكثر من نظام، شوف صفحة أتمتة الأعمال بالذكاء الاصطناعي.</p></div>
        <Link className="button secondary" href="/ai-automation">شاهد AI Automation <span>←</span></Link>
      </section>

      <section className="shell wa-guides" aria-labelledby="wa-guides-title">
        <div className="wa-section-head">
          <div><span className="section-label">أدلة قبل القرار</span><h2 id="wa-guides-title">السعر، CRM، وطريقة الربط.<br/><em>كل سؤال له دليل.</em></h2></div>
          <p>لو لسه في مرحلة المقارنة، ابدأ بالدليل الأقرب لسؤالك بدل ما تدخل في تفاصيل تقنية مش محتاجها.</p>
        </div>
        <div className="wa-guide-grid">
          {guideLinks.map((guide, index) => <Link className="wa-guide-card" href={guide.href} key={guide.href}><div className="wa-guide-card-top"><span>دليل 0{index + 1}</span><span className="wa-guide-arrow" aria-hidden="true">↗</span></div><h3>{guide.title}</h3><p>{guide.text}</p></Link>)}
        </div>
      </section>

      <section className="faq-section shell wa-faq" id="faq">
        <span className="section-label">أسئلة شائعة</span>
        <h2>قبل ما تؤتمت واتساب.</h2>
        <div className="faq-grid">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div>
      </section>

      <section className="wa-cta wa-final">
        <div className="shell">
          <p>ابدأ من المشكلة، مش من اسم الأداة.</p>
          <h2>قل لنا إيه اللي بيحصل من أول رسالة.<br/><mark>ونحدد أقصر نظام يوصل العميل للخطوة التالية.</mark></h2>
          <a className="button primary" href={whatsappHref} target="_blank" rel="noopener noreferrer">ناقش أتمتة واتساب <span>↗</span></a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
