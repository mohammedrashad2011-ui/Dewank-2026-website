import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../components/site-shell";
import { createMetadata, organizationId, siteUrl, servedMarkets } from "../../lib/seo";
// Reuses the Arabic SEO/AEO page's section system (hero, service grid, process, FAQ). Those classes are layout only.
import "../seo-aeo/seo-aeo-page.css";
import "../seo-aeo/seo-cluster.css";
import { CroPackagePrice, CroPackageWhatsApp } from "./cro-packages";
import "./cro.css";

export const metadata: Metadata = createMetadata({
  title: "تحسين معدل التحويل ومسارات العملاء | ديوانك",
  description: "تحسين معدل التحويل لموقعك وصفحات الهبوط ومسار الاستفسار. تدقيق مدفوع يحدد أين يتوقف الزائر المؤهل قبل أن يتحول إلى عميل، مع أولويات تنفيذ واضحة.",
  path: "/conversion-rate-optimization",
  keywords: ["تحسين معدل التحويل", "خدمات تحسين معدل التحويل", "تدقيق مسار التحويل", "تدقيق الموقع ومسار التحويل", "تحسين صفحات الهبوط", "زيادة العملاء المحتملين", "تحسين تحويل زوار الموقع"],
});

const wrongPlaces = [
  ["الرسالة لا تطابق سبب الزيارة", "الإعلان أو نتيجة البحث تعد بشيء محدد، والصفحة تبدأ بكلام عام لا يجيب عن السؤال الذي جاء به الزائر."],
  ["الخطوة التالية غير واضحة", "أكثر من زر ومسار دون أن يعرف الزائر أيهما يختار. كل خيار زائد يؤخر الاستفسار."],
  ["الثقة ناقصة لحظة القرار", "لا توجد تفاصيل عن النطاق وطريقة العمل والأسئلة المتوقعة، فيؤجل الزائر أو يغادر."],
  ["الاحتكاك في النموذج أو واتساب", "حقول أكثر مما يلزم، أو رسالة فارغة لا يعرف الزائر ماذا يكتب فيها."],
  ["تجربة الجوال أضعف من الكمبيوتر", "الزر أو النص أو النموذج يصعب استخدامه على الهاتف، وهنا يأتي معظم الزوار."],
  ["الاستفسار يصل ولا يُتابع بسرعة", "لا يوجد من يرد، أو لا توجد قاعدة لتوزيع المحادثات وتأهيلها. الفرصة تبرد قبل أن يبدأ أحد."],
];

const steps = [
  ["01", "نحدد الهدف", "ماذا تريد أن يحدث بعد الزيارة: استفسار، أو حجز، أو طلب عرض سعر."],
  ["02", "نتتبع الرحلة", "من الإعلان أو البحث أو الرابط المباشر حتى أول رسالة أو نموذج يصل إليك."],
  ["03", "نشخّص المرحلة الأضعف", "أين يغادر الزائر، ولماذا، وما الذي كان ينقصه ليكمل."],
  ["04", "نرتب الإصلاحات", "حسب الأثر المتوقع والجهد المطلوب، مع توصيات يمكن تنفيذها فعليًا."],
];

const scopes = [
  { title: "تدقيق الموقع ومسار التحويل", tag: "Website & Funnel Audit", problem: "زوار يصلون ولا يطلبون ولا يحجزون.", covers: "الرسالة والعنوان والدليل البصري والدعوة لاتخاذ إجراء والنموذج وتجربة الجوال، وخطوة الانتقال من الصفحة إلى الاستفسار.", inputs: "رابط الصفحة أو المسار، والخدمة المستهدفة، والمصدر الأساسي للزيارات." },
  { title: "تدقيق توليد العملاء وCRM", tag: "Lead Generation & CRM Audit", problem: "استفسارات تصل، لكن التأهيل والتوزيع والمتابعة ضعيفة.", covers: "نقاط استقبال الاستفسارات، وقواعد الرد والتوزيع، ومراحل المتابعة، والبيانات التي تُسجَّل عن كل عميل محتمل.", inputs: "وصف مختصر لطريقة استقبال الاستفسارات ومن يتابعها، وأي أداة CRM مستخدمة إن وجدت." },
  { title: "تدقيق الأداء التسويقي", tag: "Marketing Performance Audit", problem: "إنفاق تسويقي لا يمكن ربطه بنتائج تجارية واضحة.", covers: "الرسائل والقنوات والقياس، وتحديد الأرقام التي تعكس قرارًا حقيقيًا وتلك التي تبدو جيدة فقط.", inputs: "قنوات التسويق المستخدمة، والنتيجة التجارية التي تريد قياسها، وما هو متاح من بيانات." },
];

const inputs = ["رابط الموقع أو الصفحة الأساسية، ونوع النشاط والسوق المستهدف.", "المسار أو الخدمة التي تريد فحصها، والمصادر الرئيسية للزيارات.", "وصف لما يحدث بعد الاستفسار: من يرد، وكم يستغرق الرد.", "وصول اختياري إلى بيانات القياس للباقتين الثانية والثالثة عند الحاجة، ونوضح قبل استخدامه ما نحتاجه بالضبط."];

const deliverables = ["تقرير مكتوب بأولويات الإصلاح مرتبة حسب الأثر والثقة والجهد.", "دليل على كل ملاحظة: لقطة للصفحة أو وصف للمسار أو بيانات متاحة.", "ما تحصل عليه بالتحديد في كل باقة مذكور في قسم الباقات أدناه."];

// One-time packages. Each one states its own limits, so no package promises what another one includes.
const packages = [
  { offerKey: "cro-snapshot" as const, label: "صفحة واحدة", name: "فحص التحويل السريع", purpose: "فحص سريع لصفحة عامة واحدة أو صفحة هبوط واحدة، لتعرف أول ما يعطل الزائر عن الاستفسار.", delivery: "يومان عمل بعد تأكيد الدفع واستلام المدخلات المطلوبة", includes: ["صفحة عامة واحدة أو صفحة هبوط واحدة", "مراجعة إرشادية للرسالة والدعوة لاتخاذ إجراء والثقة وسهولة الاستخدام على الجوال واحتكاك الاستفسار", "حتى ثلاث ملاحظات موثقة", "إصلاحات مرتبة حسب الأولوية", "تقرير PDF قصير"], excludes: ["لا تشمل مكالمة استراتيجية", "لا تحتاج صلاحية تحليلات", "لا تشمل التنفيذ", "ليست مبنية على بيانات سلوك فعلي للزوار", "ليست تدقيقًا كاملًا لمسار التحويل"], cta: "تأكيد نطاق الفحص السريع عبر واتساب", recommended: false },
  { offerKey: "cro-audit" as const, label: "مسار كامل", name: "تدقيق الموقع ومسار التحويل", purpose: "مراجعة مسار عميل واحد محدد، من أول صفحة حتى الاستفسار ومتابعته.", delivery: "من 3 إلى 5 أيام عمل بعد تأكيد الدفع واستلام المدخلات المطلوبة", includes: ["مسار عميل واحد محدد", "حتى ثلاث صفحات أو مراحل تحويل", "مراجعة الرسالة وتجربة الاستخدام والدعوة لاتخاذ إجراء والثقة والنماذج ومعالجة الاستفسار", "حتى خمس ملاحظات موثقة", "توصيات مرتبة حسب الأثر والثقة والجهد", "تقرير PDF احترافي وخطة تحسين عملية لمدة 30 يومًا", "جولة توضيح واحدة مكتوبة وغير متزامنة", "مراجعة بيانات التحليلات فقط إذا توفرت وسمح النطاق", "في حالات الاستفسارات وCRM: مسار واحد محدد من الاستفسار حتى المتابعة"], excludes: ["لا تشمل التنفيذ", "لا تشمل الإدارة المستمرة للحملات أو الموقع", "لا تشمل تطوير نظام CRM"], cta: "تأكيد نطاق التدقيق عبر واتساب", recommended: true },
  { offerKey: "cro-growth-diagnostic" as const, label: "تحليل أعمق", name: "تحليل النمو والتحويل المتقدم", purpose: "مسار أوسع ومحدد، مع مراجعة أعمق لمعالجة الاستفسارات والقياس عند توفر البيانات.", delivery: "من 5 إلى 7 أيام عمل بعد تأكيد الدفع واستلام المدخلات المطلوبة", includes: ["مسار تحويل واحد أوسع ومحدد", "حتى خمس صفحات أو مراحل", "حتى عشر ملاحظات موثقة بأدلة", "مراجعة أعمق لمعالجة الاستفسارات والقياس ذي الصلة", "مراجعة بيانات GA4 أو مسار التحويل عند توفر الصلاحية والبيانات الكافية", "خطة تحسين مرتبة وتقرير PDF احترافي", "جلسة عرض للنتائج مدتها 30 دقيقة"], excludes: ["لا تشمل التنفيذ", "لا تشمل تطوير نظام CRM", "لا تشمل إدارة الحملات", "لا تشمل تنفيذ اختبارات A/B"], cta: "تأكيد نطاق التحليل عبر واتساب", recommended: false },
];

const notIncluded = ["تنفيذ التعديلات على الموقع أو الصفحات.", "إدارة الإعلانات أو تشغيل الحملات.", "بناء نظام CRM أو أتمتة واتساب.", "تصميم موقع جديد أو إعادة بناء صفحات الهبوط.", "تشغيل اختبارات A/B أو تحليل سلوك الزوار بالتسجيل."];

const afterAudit = [
  ["أتمتة واتساب وCRM", "إذا كانت المتابعة هي الضعف، ويمكن للفريق الرد والتأهيل بشكل أسرع.", "/whatsapp-automation"],
  ["صفحة هبوط مخصصة", "إذا كانت حملة أو عرض واحد يحتاج صفحة تقوده من البداية.", "/offers/landing-page-package"],
  ["تصميم أو تحسين الموقع", "إذا كانت المشكلة في بنية الموقع وتجربة الاستخدام نفسها.", "/website-design"],
];

const faqs = [
  { question: "ما الفرق بين تدقيق التحويل وتدقيق SEO؟", answer: "تدقيق SEO يسأل: لماذا لا يظهر الموقع في نتائج البحث؟ أما تدقيق التحويل فيسأل: لماذا لا يتحول الزائر المهتم إلى استفسار؟ الاثنان قد يتقاطعان، لكنهما سؤالان مختلفان ولكل منهما خدمته." },
  { question: "هل أحتاج صلاحية الوصول إلى Google Analytics؟", answer: "لا تحتاج باقة فحص التحويل السريع أي صلاحية. في الباقتين الثانية والثالثة نراجع بيانات التحليلات فقط إذا توفرت وسمح النطاق، ولا نفترض أرقامًا لم نرها." },
  { question: "كم يستغرق التدقيق؟", answer: "تختلف المدة حسب الباقة: يومان عمل لفحص التحويل السريع، ومن 3 إلى 5 أيام لتدقيق الموقع ومسار التحويل، ومن 5 إلى 7 أيام لتحليل النمو والتحويل. تبدأ المدة بعد تأكيد الدفع واستلام المدخلات المطلوبة." },
  { question: "هل يشمل التدقيق تنفيذ الإصلاحات؟", answer: "لا. التدقيق يحدد الأولويات والتوصيات. التنفيذ خدمة منفصلة تُقترح بعد مراجعة التقرير إذا كانت مناسبة لك." },
  { question: "هل يضمن التدقيق زيادة المبيعات؟", answer: "لا تستطيع أي جهة ضمان ذلك. الهدف أن تعرف أين تضيع الفرص، وما الإصلاحات الأعلى أثرًا التي تستحق التجربة أولًا." },
  { question: "لمن لا يناسب هذا التدقيق؟", answer: "لمن لا يحصل على زيارات أو طلبات بعد. في هذه الحالة يكون التركيز على الظهور أو الإعلان أولًا، ثم يصبح التحويل موضوعًا مفيدًا." },
];

const relatedGuides = [
  { href: "/guides/why-website-does-not-generate-leads", title: "موقعك يستقبل زيارات ولا يجلب عملاء؟", text: "شخّص المرحلة التي تتسرب عندها الفرص قبل أن تزيد الميزانية." },
  { href: "/guides/ad-to-whatsapp-booking-journey", title: "من الإعلان إلى واتساب إلى الحجز", text: "كيف تربط الرسالة والمحادثة والمتابعة في مسار واحد يمكن قياسه." },
  { href: "/guides/whatsapp-crm-automation", title: "أتمتة واتساب وCRM تقلل فقدان العملاء", text: "ما الذي يُؤتمت، وما الذي يبقى بيد فريقك، ومتى يكون ذلك مناسبًا." },
];

const whatsappAudit = `https://wa.me/97339066649?text=${encodeURIComponent("مرحبًا ديوانك، أريد الاستفسار عن تدقيق الموقع ومسار التحويل لنشاطي. رابط الموقع ونوع النشاط: ")}`;

export default function ConversionRateOptimizationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteUrl}/conversion-rate-optimization#service`,
        name: "تحسين معدل التحويل ومسارات العملاء",
        alternateName: "Conversion Rate Optimization (CRO)",
        description: "تدقيق مدفوع وتوصيات لتحسين مسار التحويل من الزيارة إلى الاستفسار، يشمل الموقع وصفحات الهبوط ومعالجة الاستفسارات ومتابعتها.",
        serviceType: ["Conversion Rate Optimization", "Website Conversion Audit", "Landing Page Review", "Lead Follow-up Review"],
        provider: { "@id": organizationId },
        areaServed: servedMarkets,
        url: `${siteUrl}/conversion-rate-optimization`,
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/conversion-rate-optimization#faq`,
        mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "الخدمات", item: `${siteUrl}/services` },
          { "@type": "ListItem", position: 3, name: "تحسين معدل التحويل", item: `${siteUrl}/conversion-rate-optimization` },
        ],
      },
    ],
  };

  return (
    <main className="sa-page cro-page">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="sa-hero shell">
        <div className="sa-hero-copy">
          <div className="sa-kicker"><span>CRO</span><span>مسار التحويل</span><span>استفسارات مؤهلة</span></div>
          <h1>تحسين معدل التحويل ومسارات العملاء.<br/><em>حوّل الزيارات المؤهلة إلى فرص بيع.</em></h1>
          <p>إذا كان موقعك يستقبل زيارات من أشخاص مهتمين، لكنها لا تتحول إلى استفسارات أو حجوزات، فالمشكلة غالبًا ليست في عدد الزيارات. نشخّص أين يتوقف الزائر: في الرسالة، أو الثقة، أو الخطوة التالية، أو طريقة متابعة الاستفسار بعد وصوله.</p>
          <div className="sa-actions">
            <a className="button primary" href="#pricing">اختر الباقة المناسبة <span>←</span></a>
            <a href="#audit">اعرف ما يشمله التدقيق</a>
          </div>
        </div>
      </section>

      <section className="sa-truth">
        <div className="shell sa-truth-grid">
          <div><span className="sa-label">[ الفكرة ]</span><h2>الزيارة ليست الهدف.<br/><em>الاستفسار المؤهل هو الهدف.</em></h2></div>
          <div>
            <p>كثير من الشركات تنفق على الوصول إلى الجمهور، ثم تفقد الفرصة بعد الزيارة مباشرة: رسالة لا تطابق الحاجة، أو خطوة غير واضحة، أو استفسار لا يجد من يرد عليه بسرعة.</p>
            <p>نفحص هذا المسار كاملًا، ونقدم خطة تحسين مرتبة حسب الأثر، بدون وعود بترتيب أو نتائج محددة.</p>
          </div>
        </div>
      </section>

      <section className="sa-services shell">
        <div className="sa-section-head"><div><span className="sa-label">[ أين تضيع الفرص ]</span><h2>ستة أماكن تتسرب منها الاستفسارات.<br/><em>عادةً ما يكون أحدها.</em></h2></div><p>هذه أكثر الأسباب شيوعًا، وليست قائمة تتحقق منها بشكل آلي. التدقيق يحدد أيها يخص موقعك فعلًا.</p></div>
        <div className="sa-service-grid">{wrongPlaces.map((item, index) => <article key={item[0]}><span>0{index + 1}</span><h3>{item[0]}</h3><p>{item[1]}</p></article>)}</div>
      </section>

      <section className="sa-fit shell">
        <div className="sa-fit-grid">
          <div><span className="sa-label">[ لمن؟ ]</span><h2>لمن هذه الخدمة؟<br/><em>ولمن ليست مناسبة.</em></h2></div>
          <div>
            <p><span>01</span>مواقع وصفحات هبوط تستقبل زيارات من إعلانات أو بحث أو وسائل تواصل، ولا تنتج استفسارات كافية.</p>
            <p><span>02</span>شركات تستقبل استفسارات واتساب أو نماذج، لكن نسبة ضعيفة منها تتحول إلى مواعيد أو مبيعات.</p>
            <p><span>03</span>فرق تنفذ تسويقًا منتظمًا، لكنها لا تعرف أي صفحة أو رسالة تعطّل قرار الزائر.</p>
            <p><span>04</span>إذا كان هدفك ظهور موقعك في Google، فهذا سؤال مختلف. راجع <Link href="/seo-aeo">خدمة SEO وAEO</Link>.</p>
          </div>
        </div>
      </section>

      <section id="process" className="sa-process">
        <div className="shell">
          <div className="sa-section-head"><div><span className="sa-label">[ المنهج ]</span><h2>نتتبع الرحلة قبل أن نقترح أي تعديل.<br/><em>ثم نرتب ما يستحق الإصلاح.</em></h2></div><p>لا نبدأ بتغيير الألوان أو النصوص. نبدأ بمعرفة أين يخرج الزائر، ولماذا.</p></div>
          <div className="sa-process-list">{steps.map((item) => <article key={item[0]}><span>{item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p></article>)}</div>
        </div>
      </section>

      <section id="audit" className="sa-deliverables shell cro-audit" aria-labelledby="cro-audit-title">
        <div className="sa-section-head">
          <div><span className="sa-label">[ التدقيق المدفوع ]</span><h2 id="cro-audit-title">تدقيق الموقع ومسار التحويل.<br/><em>لمسار محدد، لا لكل الموقع.</em></h2></div>
          <p>نختار معًا المسار الذي يستحق الفحص، من أول نقطة دخول حتى الاستفسار أو الحجز. هكذا يكون التقرير قابلًا للتنفيذ ولا يتحول إلى قائمة ملاحظات عامة. حدود كل مسار تحددها الباقة التي تختارها، والباقات في قسم الأسعار أدناه.</p>
        </div>
        <div className="cro-scope-grid">
          {scopes.map((scope) => (
            <article key={scope.tag} className="cro-scope-card">
              <small>{scope.tag}</small>
              <h3>{scope.title}</h3>
              <p><strong>المشكلة التي يعالجها:</strong> {scope.problem}</p>
              <p><strong>ما يشمله:</strong> {scope.covers}</p>
              <p><strong>المدخلات المطلوبة:</strong> {scope.inputs}</p>
            </article>
          ))}
        </div>

        <div className="cro-audit-columns">
          <div>
            <h3>ما نحتاجه منك</h3>
            <ul className="cro-list">{inputs.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div>
            <h3>ما ستستلمه</h3>
            <ul className="cro-list">{deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </div>

        <div className="cro-audit-columns">
          <div>
            <h3>ما لا يشمله التدقيق</h3>
            <ul className="cro-list">{notIncluded.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div>
            <h3>السعر والخطوات التالية</h3>
            <p>الأسعار لمرة واحدة، وتجدها في قسم الباقات أدناه. لا نقدم تدقيقًا مجانيًا كاملًا، ولا تبدأ أي باقة قبل تأكيد نطاقها وسعرها ومدتها كتابيًا.</p>
            <p>طريقة الطلب خطوة بخطوة موضحة في قسم «كيف يتم الطلب» أسفل الباقات.</p>
          </div>
        </div>

        <p className="cro-honesty">التدقيق يحدد أين تضيع الفرص، لكنه لا يضمن زيادة المبيعات تلقائيًا. النتيجة تعتمد على تنفيذ الإصلاحات وعلى ما يحدث بعد الاستفسار.</p>
      </section>

      <section id="pricing" className="shell cro-pricing" aria-labelledby="cro-pricing-title">
        <div className="sa-section-head">
          <div><span className="sa-label">[ الباقات ]</span><h2 id="cro-pricing-title">ثلاث باقات لمرة واحدة.<br/><em>كل باقة تحدد حدودها قبل البدء.</em></h2></div>
          <p>اختر حسب حجم المسار الذي تريد فحصه. السعر يظهر بالعملة المحلية لدولتك، وبالدولار الأمريكي للدول الأخرى. إذا كنت خارج دول الخليج الست، قد يتحول السعر إلى الدولار الأمريكي بعد لحظات من تحميل الصفحة.</p>
        </div>
        <div className="cro-package-grid">
          {packages.map((pkg) => (
            <article key={pkg.offerKey} className={pkg.recommended ? "cro-package-card cro-package-recommended" : "cro-package-card"}>
              {pkg.recommended ? <span className="cro-package-badge">موصى به</span> : null}
              <small>{pkg.label}</small>
              <h3>{pkg.name}</h3>
              <p className="cro-package-purpose">{pkg.purpose}</p>
              <CroPackagePrice offerKey={pkg.offerKey} />
              <p className="cro-package-payment">دفعة واحدة</p>
              <p className="cro-package-delivery"><strong>مدة التسليم:</strong> {pkg.delivery}</p>
              <h4>ما تحصل عليه</h4>
              <ul className="cro-list">{pkg.includes.map((item) => <li key={item}>{item}</li>)}</ul>
              <h4>ما لا يشمله</h4>
              <ul className="cro-list cro-package-excluded">{pkg.excludes.map((item) => <li key={item}>{item}</li>)}</ul>
              <CroPackageWhatsApp offerKey={pkg.offerKey} packageName={pkg.name} className="button primary cro-package-cta" label={pkg.cta} />
            </article>
          ))}
        </div>
        <p className="cro-pricing-note">الأسعار لمرة واحدة. فتح واتساب لا يعني أن الطلب تم؛ يتأكد الطلب بعد الاتفاق على النطاق والسعر والمدة كتابيًا. أي نطاق يتجاوز حدود هذه الباقات يحتاج عرضًا مخصصًا يُتفق عليه قبل البدء.</p>
      </section>

      <section className="shell cro-order" aria-labelledby="cro-order-title">
        <div className="sa-section-head">
          <div><span className="sa-label">[ كيف يتم الطلب ]</span><h2 id="cro-order-title">من الباقة إلى التسليم.<br/><em>أربع خطوات بالترتيب.</em></h2></div>
          <p>الضغط على زر واتساب يفتح محادثة لتأكيد النطاق، ولا يعني أن الطلب تم أو أن الدفع تم.</p>
        </div>
        <ol className="cro-steps cro-order-steps">
          <li><strong>اختر الباقة.</strong> تحدد الباقة حدودها، والسعر الظاهر لدولتك، ومدة التسليم بعد الدفع.</li>
          <li><strong>أكّد النطاق.</strong> نراجع معك الصفحة أو المسار والمدخلات المطلوبة عبر واتساب، ونكتب النطاق قبل أي التزام.</li>
          <li><strong>اتفق على الدفع.</strong> نؤكد السعر النهائي وطريقة الدفع كتابيًا. لا يبدأ العمل قبل هذه الخطوة.</li>
          <li><strong>ابدأ التسليم.</strong> تبدأ مدة التسليم بعد الدفع واستلام المدخلات المطلوبة، ثم نرسل التقرير وفق الباقة.</li>
        </ol>
      </section>

      <section className="sa-fit shell">
        <div className="sa-fit-grid">
          <div><span className="sa-label">[ بعد التدقيق ]</span><h2>التدقيق يحدد الخطوة.<br/><em>التنفيذ قرار منفصل.</em></h2></div>
          <div>
            <p>لا نقترح تنفيذًا قبل أن تفهم المشكلة. بعد التقرير، قد تكون إحدى هذه الخدمات مناسبة، وقد لا تحتاج أيًا منها:</p>
            {afterAudit.map((item, index) => <p key={item[0]}><span>0{index + 1}</span><Link href={item[2]}>{item[0]}</Link>: {item[1]}</p>)}
          </div>
        </div>
      </section>

      <section className="sa-cluster shell" aria-labelledby="cro-guides-title">
        <div className="sa-cluster-head">
          <div><span className="sa-label">[ قبل القرار ]</span><h2 id="cro-guides-title">افهم المشكلة أولًا.<em>ثم قرر ما يستحق الإصلاح.</em></h2></div>
          <p>أدلة قصيرة تشرح أين تتسرب الفرص في الزيارة والاستفسار والمتابعة.</p>
        </div>
        <div className="sa-guide-grid">
          {relatedGuides.map((guide, index) => (
            <Link className="sa-guide-card" href={guide.href} key={guide.href}>
              <div className="sa-guide-top"><span>دليل 0{index + 1}</span><span className="sa-guide-arrow" aria-hidden="true">↗</span></div>
              <h3>{guide.title}</h3>
              <p>{guide.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="sa-faq shell">
        <div className="sa-section-head"><div><span className="sa-label">[ الأسئلة الشائعة ]</span><h2>قبل أن تطلب التدقيق.<br/><em>هذه أهم الإجابات.</em></h2></div><p>التفاصيل النهائية تتحدد بعد تحديد النطاق، وليس بقائمة عامة.</p></div>
        <div className="sa-faq-grid">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</div>
      </section>

      <section className="sa-final shell">
        <div><span className="sa-label">[ الخطوة التالية ]</span><h2>أرسل رابط الصفحة.<br/><em>لنحدد أين تتوقف الزيارة.</em></h2></div>
        <div>
          <p>أرسل رابط الموقع أو الصفحة ونوع النشاط، وسنحدد معك المسار الأنسب للفحص وما يحتاجه التدقيق.</p>
          <a className="button primary" href={whatsappAudit} target="_blank" rel="noreferrer">تحدث معنا عن الباقة المناسبة <span>←</span></a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
