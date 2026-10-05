import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../components/site-shell";
import { createMetadata, organizationId, siteUrl, servedMarkets } from "../lib/seo";
import "./ai-automation.css";

const title = "أتمتة الأعمال بالذكاء الاصطناعي للشركات في السعودية | ديوانك";
const description = "حلول أتمتة الأعمال بالذكاء الاصطناعي للشركات: أتمتة واتساب وخدمة العملاء، تأهيل العملاء، CRM، المتابعة، الطلبات والتقارير عبر سير عمل واضح وقابل للقياس.";

export const metadata: Metadata = createMetadata({
  title,
  description,
  path: "/ai-automation",
  keywords: [
    "أتمتة الأعمال بالذكاء الاصطناعي",
    "أتمتة العمليات بالذكاء الاصطناعي",
    "حلول الذكاء الاصطناعي للشركات",
    "أتمتة خدمة العملاء",
    "أتمتة الطلبات",
    "أتمتة واتساب",
    "CRM Automation",
    "AI Automation السعودية",
    "Workflow Automation",
    "وكلاء الذكاء الاصطناعي",
  ],
});

const useCases = [
  {
    number: "01",
    title: "واتساب وخدمة العملاء",
    text: "استقبال الاستفسار، جمع البيانات الأساسية، تصنيف الطلب، إرسال الرد المناسب ثم تحويل الحالات التي تحتاج موظفًا إلى الشخص الصحيح.",
  },
  {
    number: "02",
    title: "التأهيل والمتابعة",
    text: "تأهيل الـLead حسب شروط واضحة، تسجيله في CRM، إنشاء مهمة للفريق، وإطلاق متابعة أو تذكير عند غياب الرد.",
  },
  {
    number: "03",
    title: "الطلبات والعمليات",
    text: "ربط النماذج والطلبات والأنظمة الداخلية، تحديث الحالات تلقائيًا، إرسال التنبيهات وإنشاء تقارير تساعد الإدارة على رؤية ما يحدث.",
  },
];

const workflow = [
  ["يدخل العميل", "رسالة واتساب أو نموذج أو Lead من حملة."],
  ["يتم التأهيل", "أسئلة وقواعد أو AI لتحديد نوع الطلب والأولوية."],
  ["يُحدّث CRM", "حفظ البيانات والحالة والمصدر والمسؤول عن المتابعة."],
  ["تبدأ المتابعة", "تذكير أو رسالة أو مهمة للفريق حسب حالة العميل."],
  ["تظهر النتيجة", "حجز أو طلب أو تحويل لموظف مع سجل واضح للرحلة."],
];

const faqItems = [
  ["ما المقصود بأتمتة الأعمال بالذكاء الاصطناعي؟", "هي ربط خطوات العمل والبيانات والأدوات في سير واضح، مع استخدام الذكاء الاصطناعي فقط عندما يضيف فهمًا أو تصنيفًا أو قرارًا لا تكفي له القواعد التقليدية."],
  ["هل كل عملية تحتاج ذكاء اصطناعي؟", "لا. بعض العمليات تعمل أفضل بقواعد ثابتة وأتمتة تقليدية لأنها أبسط وأقل تكلفة وأسهل في المراجعة. نستخدم AI عندما توجد فائدة حقيقية من فهم النص أو التصنيف أو التلخيص أو اتخاذ قرار ضمن حدود واضحة."],
  ["ما العمليات التي يمكن أتمتها؟", "التأهيل، المتابعة، التذكير، تحديث CRM، توزيع الطلبات، إنشاء المهام، تقارير الإدارة، وبعض خطوات خدمة العملاء والطلبات حسب نظام الشركة."],
  ["هل يمكن ربط واتساب وCRM؟", "نعم في كثير من الحالات، حسب مزود واتساب والـCRM والتكاملات المتاحة. نراجع الأدوات الحالية قبل تحديد طريقة الربط."],
  ["هل الأتمتة تستبدل الموظفين؟", "الهدف الأساسي هو إزالة المهام المتكررة وتقليل ضياع الطلبات، مع إبقاء الحالات الحساسة والاستثناءات والقرارات المهمة بيد الفريق."],
  ["كيف تبدأون مشروع الأتمتة؟", "نبدأ بعملية واحدة واضحة ومؤثرة، نرسم خطواتها الحالية، نحدد نقاط الخطأ والتكرار، ثم نبني نسخة قابلة للاختبار قبل توسيع النظام."],
  ["ما الفرق بين وكيل الذكاء الاصطناعي وأتمتة سير العمل؟", "أتمتة سير العمل تنفّذ خطوات محددة مسبقًا بالترتيب نفسه. أما وكيل الذكاء الاصطناعي فيقرر النموذج فيه الخطوة التالية والأدوات المستخدمة لتحقيق هدف. ننصح غالبًا بالبدء بسير عمل واضح، وإضافة الذكاء الاصطناعي في الخطوة التي تحتاج فهمًا، ولا ننتقل إلى وكيل إلا عند الحاجة وبحدود ومراقبة واضحة."],
  ["هل يستطيع الذكاء الاصطناعي اتخاذ القرارات وحده؟", "في الأمور الروتينية المحددة قد يصنّف أو يلخّص أو يقترح. أما الأسعار الخاصة والشكاوى الحساسة والموافقات وأي قرار تترتب عليه التزامات فتبقى بيد موظف مسؤول، مع تحويل واضح للحالة وسجل بما حدث."],
  ["ماذا عن خصوصية بيانات العملاء في الأتمتة؟", "تمر عبر الأنظمة بيانات شخصية مثل الأسماء والأرقام والرسائل، وتحكمها في السعودية أحكام نظام حماية البيانات الشخصية. نراجع معك البيانات التي ستمر عبر كل أداة وأين تُخزَّن، وننصحك بمراجعة مستشار قانوني مؤهل لمتطلبات نشاطك."],
];

export default function AiAutomationPage() {
  const url = `${siteUrl}/ai-automation`;
  const whatsappHref = "https://wa.me/97339066649?text=" + encodeURIComponent("مرحبًا ديوانك، أريد مناقشة أتمتة عملية داخل شركتي. العملية الحالية هي: ");

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "أتمتة الأعمال بالذكاء الاصطناعي",
        description,
        url,
        provider: { "@id": organizationId },
        areaServed: servedMarkets,
        serviceType: ["AI Automation", "Workflow Automation", "CRM Automation", "Customer Service Automation"],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqItems.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  return (
    <main className="ai-page">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="ai-hero shell">
        <div className="ai-hero-copy">
          <span className="ai-label">AI AUTOMATION / BUSINESS WORKFLOWS</span>
          <h1>أتمتة أعمالك بالذكاء الاصطناعي.<br/><em>دون أن تضيف AI إلى الفوضى.</em></h1>
          <p>نحلل العملية أولًا، ثم نربط واتساب وCRM والمبيعات وخدمة العملاء والعمليات داخل سير عمل واضح يقلل التكرار وضياع العملاء ويجعل المتابعة أسرع وأسهل في القياس.</p>
          <div className="ai-actions">
            <a className="button primary" href={whatsappHref} target="_blank" rel="noopener noreferrer">ناقش عملية تريد أتمتتها <span>↗</span></a>
            <Link className="button secondary" href="/whatsapp-automation">شاهد أتمتة واتساب وCRM</Link>
          </div>
          <div className="ai-proof-strip" aria-label="أهم استخدامات الأتمتة">
            <span>واتساب</span><span>CRM</span><span>Lead Qualification</span><span>Follow-up</span><span>Operations</span>
          </div>
        </div>
        <div className="ai-hero-map" aria-hidden="true">
          <div className="ai-node ai-node-main">AI</div>
          <div className="ai-node ai-node-a">واتساب</div>
          <div className="ai-node ai-node-b">CRM</div>
          <div className="ai-node ai-node-c">مبيعات</div>
          <div className="ai-node ai-node-d">تقارير</div>
          <i/><i/><i/><i/>
        </div>
      </section>

      <section className="ai-answer shell" id="quick-answer">
        <span className="ai-label">QUICK ANSWER</span>
        <h2>ما الذي نقصده بأتمتة الأعمال بالذكاء الاصطناعي؟</h2>
        <p><strong>هي ربط خطوات العمل في سير واضح لشركتك، واستخدام الذكاء الاصطناعي فقط في الخطوة التي تحتاج فهمًا أو تصنيفًا أو تلخيصًا.</strong> نخدم الشركات في السعودية ودول الخليج، ونبدأ بعملية واحدة ذات أثر واضح، ونبقي القرارات الحساسة والاستثناءات بيد الفريق.</p>
        <p>إذا كنت تقارن بين «وكيل ذكاء اصطناعي» وأتمتة تقليدية، فاقرأ <Link className="ai-link" href="/guides/ai-agent-vs-workflow-automation">الفرق بين وكيل الذكاء الاصطناعي وأتمتة سير العمل</Link> قبل أن تقرر.</p>
      </section>

      <section className="ai-usecases shell">
        <div className="ai-section-head">
          <span className="ai-label">USE CASES</span>
          <h2>أين تدخل الأتمتة فعلًا؟<br/><em>في النقاط التي يضيع فيها الوقت أو العميل.</em></h2>
          <p>بدل شراء أدوات أكثر، نبدأ من العملية نفسها ونختار أقل نظام يحقق النتيجة المطلوبة.</p>
        </div>
        <div className="ai-usecase-grid">
          {useCases.map((item) => <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
        </div>
      </section>

      <section className="ai-workflow shell">
        <div className="ai-section-head compact">
          <span className="ai-label">WORKFLOW EXAMPLE</span>
          <h2>من أول رسالة<br/><em>حتى الحجز أو الطلب.</em></h2>
        </div>
        <div className="ai-flow">
          {workflow.map(([heading, text], index) => <article key={heading}><span>0{index + 1}</span><div><h3>{heading}</h3><p>{text}</p></div></article>)}
        </div>
      </section>

      <section className="ai-logic shell">
        <div className="ai-logic-copy">
          <span className="ai-label">AI OR AUTOMATION?</span>
          <h2>ليس كل شيء يحتاج AI.</h2>
          <p>القاعدة البسيطة: إذا كان القرار ثابتًا وواضحًا فغالبًا تكفي Automation عادية. وإذا احتاج النظام إلى فهم نص أو تصنيف نية أو تلخيص أو التعامل مع مدخلات متغيرة، فقد يضيف AI قيمة حقيقية.</p>
        </div>
        <div className="ai-logic-grid">
          <article><small>Automation عادية</small><h3>قواعد ثابتة</h3><p>إرسال تنبيه، تحديث CRM، إنشاء مهمة، نقل بيانات، تذكير بعد مدة محددة.</p></article>
          <article><small>AI Automation</small><h3>فهم وتصنيف</h3><p>فهم رسالة العميل، تصنيف الطلب، تلخيص المحادثة، اقتراح الرد أو توجيه الحالة.</p></article>
          <article><small>Human-in-the-loop</small><h3>قرار يحتاج إنسان</h3><p>الشكاوى الحساسة، الموافقات، التفاوض، الاستثناءات والقرارات ذات المخاطر الأعلى.</p></article>
        </div>
      </section>

      <section className="ai-logic ai-agents shell" id="agent-vs-workflow">
        <div className="ai-logic-copy">
          <span className="ai-label">AGENT VS WORKFLOW</span>
          <h2>وكيل ذكاء اصطناعي أم سير عمل؟</h2>
          <p>تفرّق Anthropic بين سير العمل، حيث تُنسَّق النماذج والأدوات عبر مسارات محددة مسبقًا، والوكيل الذي يوجّه النموذج فيه عملياته واستخدامه للأدوات بنفسه. وتنصح بالبدء بأبسط حل ممكن وعدم زيادة التعقيد إلا عند الحاجة. <Link className="ai-link" href="/guides/ai-agent-vs-workflow-automation">اقرأ الدليل الكامل</Link>.</p>
        </div>
        <div className="ai-logic-grid">
          <article><small>Workflow</small><h3>مسار محدد مسبقًا</h3><p>خطوات مكتوبة تنفَّذ بالترتيب نفسه كل مرة. أسهل في الاختبار والمراجعة، وهي الأنسب لمعظم العمليات المتكررة.</p></article>
          <article><small>AI Agent</small><h3>نموذج يقرر الخطوة التالية</h3><p>يختار الأدوات والخطوات لتحقيق هدف. يناسب المهام المتغيرة، لكنه يحتاج حدودًا وسجلات ومراقبة أكبر.</p></article>
          <article><small>Human-in-the-loop</small><h3>نقاط تسليم للموظف</h3><p>أيًّا كان الاختيار، تبقى الأسعار الخاصة والشكاوى الحساسة والموافقات بيد موظف مسؤول.</p></article>
        </div>
      </section>

      <section className="ai-outcomes shell">
        <div className="ai-section-head">
          <span className="ai-label">BUSINESS OUTCOMES</span>
          <h2>الهدف ليس «بناء بوت».<br/><em>الهدف أن تعمل العملية بشكل أفضل.</em></h2>
        </div>
        <div className="ai-outcome-grid">
          <article><strong>رد أسرع</strong><p>يصل الاستفسار للخطوة الصحيحة بدل انتظار النقل اليدوي.</p></article>
          <article><strong>متابعة أقل ضياعًا</strong><p>كل Lead له حالة ومصدر ومسؤول وخطوة تالية واضحة.</p></article>
          <article><strong>بيانات أنظف</strong><p>تقليل النسخ واللصق والأخطاء بين الأدوات المختلفة.</p></article>
          <article><strong>رؤية إدارية أوضح</strong><p>تعرف أين تتوقف الطلبات وأين يحتاج النظام تدخلًا.</p></article>
        </div>
      </section>

      <section className="ai-bridge shell">
        <div>
          <span className="ai-label">ابدأ بعملية واحدة</span>
          <h2>عندك خطوة تتكرر كل يوم؟<br/><em>غالبًا هي نقطة البداية.</em></h2>
          <p>أرسل لنا العملية كما تعمل الآن، حتى لو كانت فوضوية. نراجع أين يضيع الوقت، وما الذي يمكن أتمتته، وما الذي يجب أن يبقى بيد الموظف.</p>
        </div>
        <a className="button primary" href={whatsappHref} target="_blank" rel="noopener noreferrer">أرسل العملية على واتساب <span>↗</span></a>
      </section>

      <section className="ai-related shell">
        <div className="ai-section-head compact">
          <span className="ai-label">RELATED SOLUTIONS</span>
          <h2>إذا كانت المشكلة أوضح من كلمة “AI”.</h2>
        </div>
        <div className="ai-related-grid">
          <Link href="/whatsapp-automation"><small>واتساب + CRM</small><h3>أتمتة واتساب وخدمة العملاء</h3><p>إذا كانت أكبر نقطة تسرب لديك في الرسائل أو التأهيل أو الحجز أو المتابعة.</p><span>راجع الخدمة ←</span></Link>
          <Link href="/guides/whatsapp-crm-automation"><small>دليل عملي</small><h3>كيف تعمل أتمتة واتساب مع CRM؟</h3><p>افهم الرحلة قبل شراء الأدوات أو بناء النظام.</p><span>اقرأ الدليل ←</span></Link>
          <Link href="/website-design"><small>مواقع + تكاملات</small><h3>ربط الموقع بالعمليات</h3><p>نماذج، حجوزات، CRM وتتبع داخل رحلة واحدة.</p><span>راجع المواقع ←</span></Link>
        </div>
      </section>

      <section className="ai-faq shell" id="faq">
        <span className="ai-label">FAQ</span>
        <h2>أسئلة قبل بناء الأتمتة.</h2>
        <div>{faqItems.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="ai-final shell">
        <span className="ai-label">NEXT STEP</span>
        <h2>لا تبدأ من الأداة.<br/><em>ابدأ من العملية.</em></h2>
        <p>أخبرنا ماذا يحدث من لحظة دخول العميل أو الطلب إلى لحظة الإغلاق، وسنحدد أين تستحق الأتمتة الاستثمار.</p>
        <a className="button primary" href={whatsappHref} target="_blank" rel="noopener noreferrer">ناقش الأتمتة مع ديوانك <span>↗</span></a>
      </section>

      <Footer />
    </main>
  );
}
