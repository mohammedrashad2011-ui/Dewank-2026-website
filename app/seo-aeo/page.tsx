import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../components/site-shell";
import { createMetadata, organizationId, siteUrl } from "../lib/seo";
import { SeoAuditOfferPrice } from "../offers/seo-audit/localized-seo-audit-offer";
import "./seo-aeo-page.css";
import "./seo-cluster.css";

export const metadata: Metadata = createMetadata({
  title: "تحسين SEO وAEO للمواقع في السعودية | ديوانك",
  description: "تحسين ظهور المواقع في Google ومحركات الإجابة عبر Technical SEO وتهيئة المحتوى وSchema وبناء السلطة الموضوعية وتحسين التحويل للشركات في السعودية والخليج.",
  path: "/seo-aeo",
  keywords: ["تحسين SEO في السعودية", "خدمات SEO", "تحسين محركات البحث", "AEO", "تحسين الظهور في جوجل", "Technical SEO", "شركة SEO في السعودية", "Schema Markup"],
});

const services = [
  ["Technical SEO", "مراجعة الفهرسة والزحف والسرعة والروابط والهيكل التقني الذي تعتمد عليه محركات البحث."],
  ["Search Intent", "ربط كل صفحة بما يبحث عنه المستخدم فعلًا بدل استهداف كلمات لا تخدم قرارًا واضحًا."],
  ["On-page SEO", "تحسين العناوين والمحتوى والروابط والوسائط بما يرفع الوضوح والملاءمة والتحويل."],
  ["Content Architecture", "بناء خريطة موضوعات وصفحات تمنح الموقع عمقًا وسلطة بدل نشر مقالات متفرقة."],
  ["Schema & Entities", "تعريف الخدمات والمنظمة والأسئلة والكيانات بطريقة تساعد أنظمة البحث والإجابة على الفهم."],
  ["AEO Formatting", "صياغة المحتوى ليقدم إجابات مباشرة، منظمة، قابلة للاقتباس، ومدعومة بسياق موثوق."],
];

const process = [
  ["01", "تدقيق", "نفحص البنية التقنية والمحتوى والفهرسة والسرعة والفرص المهدرة."],
  ["02", "خريطة", "نحدد الكلمات والنيات والصفحات الحالية والجديدة وفق الأولوية التجارية."],
  ["03", "إصلاح", "نعالج المشكلات التقنية والعناوين والروابط والصفحات الأضعف."],
  ["04", "توسّع", "نبني محتوى وصفحات تدعم السلطة الموضوعية والأسئلة التي يطرحها السوق."],
  ["05", "تهيئة AEO", "نضيف البنية الدلالية وSchema وإجابات واضحة تسهّل الفهم والاستخدام."],
  ["06", "قياس", "نراجع Search Console وGA4 والتحويلات ونرتب الخطوات التالية حسب الأثر."],
];

const deliverables = ["تقرير SEO Audit مرتب حسب الأولوية والأثر.", "Keyword Map تربط الكلمات بالصفحات والنية.", "خطة محتوى وصفحات جديدة قابلة للتنفيذ.", "قائمة إصلاحات Technical SEO واضحة.", "تحسينات On-page للصفحات الأساسية.", "Schema Plan وتهيئة الأسئلة والكيانات.", "خريطة ربط داخلي تدعم الصفحات المهمة.", "تقارير Search Console وGA4 مع قرارات عملية."];
const fitFor = ["شركة موقعها لا يظهر رغم وجود خدمة قوية.", "موقع يحصل على زيارات لكن الاستفسارات ضعيفة.", "نشاط يريد تقليل الاعتماد على الإعلانات على المدى الطويل.", "شركة تستهدف السعودية أو الخليج وتحتاج بنية محلية أو موضوعية أقوى.", "موقع لديه محتوى كثير لكن بدون استراتيجية أو ربط واضح.", "علامة تريد الاستعداد لمحركات البحث وأنظمة الإجابة المدعومة بالذكاء الاصطناعي."];
const faqs = [
  { question: "متى تظهر نتائج SEO؟", answer: "تختلف المدة حسب قوة الموقع والمنافسة والمشكلات الحالية. بعض الإصلاحات تظهر إشاراتها مبكرًا، بينما النمو المستقر يحتاج تنفيذًا وتراكمًا وقياسًا مستمرًا." },
  { question: "هل AEO يضمن الظهور في إجابات الذكاء الاصطناعي؟", answer: "لا توجد جهة تستطيع ضمان الاقتباس أو الظهور، لكن يمكن تحسين وضوح المحتوى وبنيته وموثوقيته والبيانات المنظمة لرفع فرص فهمه واستخدامه." },
  { question: "هل نحتاج محتوى جديدًا؟", answer: "ليس دائمًا. نبدأ بتحسين الصفحات الحالية، ثم نحدد الفجوات التي تستحق صفحات أو محتوى جديدًا وفق الطلب والنية التجارية." },
  { question: "هل تشمل الخدمة الإصلاحات التقنية؟", answer: "يمكن أن تشمل التنفيذ أو تسليم قائمة تفصيلية لفريق التطوير، حسب التقنية الحالية ونطاق المشروع." },
  { question: "هل تعملون على موقع قائم؟", answer: "نعم. نراجع الوضع الحالي أولًا ثم نقرر ما يمكن تحسينه تدريجيًا وما يحتاج إعادة بناء أو إعادة هيكلة." },
  { question: "ما الفرق بين التدقيق وخدمة SEO الشهرية؟", answer: "التدقيق يشخّص ويحدد الأولويات، بينما الخدمة المستمرة تشمل التنفيذ والمحتوى والقياس والتحسين على مراحل." },
];

const seoGuides = [
  { href: "/guides/seo-vs-aeo", title: "ما الفرق بين SEO وAEO؟", text: "افهم كيف يتكامل الظهور في Google مع وضوح المحتوى لمحركات الإجابة والذكاء الاصطناعي." },
  { href: "/guides/why-website-does-not-generate-leads", title: "موقعك يظهر لكن لا يجلب عملاء؟", text: "لو المشكلة بعد الزيارة، شخّص الرسالة والثقة والـCTA والقياس قبل زيادة الزيارات." },
];

export default function SeoAeoPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "@id": `${siteUrl}/seo-aeo#service`, name: "خدمات تحسين SEO وAEO", alternateName: "SEO and Answer Engine Optimization Services", description: "تحسين ظهور المواقع في محركات البحث وأنظمة الإجابة عبر التحسين التقني والمحتوى والبيانات المنظمة.", serviceType: ["SEO", "AEO", "Technical SEO", "Content SEO", "Schema Markup"], provider: { "@id": organizationId }, areaServed: ["Saudi Arabia", "Bahrain", "GCC"], url: `${siteUrl}/seo-aeo` },
      { "@type": "FAQPage", "@id": `${siteUrl}/seo-aeo#faq`, mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl }, { "@type": "ListItem", position: 2, name: "الخدمات", item: `${siteUrl}/services` }, { "@type": "ListItem", position: 3, name: "SEO وAEO", item: `${siteUrl}/seo-aeo` }] },
    ],
  };

  return (
    <main className="sa-page">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="sa-hero shell"><div className="sa-hero-copy"><div className="sa-kicker"><span>SEO</span><span>AEO</span><span>SEARCH SYSTEMS</span></div><h1>لا نطارد ترتيبًا فقط.<br/><em>نبني حضورًا يُفهم ويُختار.</em></h1><p>نحسّن موقعك ليظهر في Google ويصبح أوضح لمحركات الإجابة والذكاء الاصطناعي، عبر بنية تقنية قوية، محتوى منظم، Schema، وربط بين الظهور والتحويل.</p><div className="sa-actions"><Link className="button primary" href="/contact">اطلب مراجعة موقعك <span>←</span></Link><a href="#process">استعرض المنهج</a></div></div><div className="sa-search-board" aria-label="تصور لظهور الموقع في البحث والإجابات"><div className="sa-board-top"><span>SEARCH VISIBILITY</span><b>LIVE MAP</b></div><div className="sa-query">كيف أختار شركة SEO في السعودية؟</div><div className="sa-answer"><small>ANSWER SIGNAL</small><strong>صفحة واضحة + خبرة + Schema + سياق موثوق</strong><p>ليست كثافة الكلمات هي الهدف؛ بل سهولة الفهم والاختيار.</p></div><div className="sa-signals"><div><small>INDEXING</small><b>Healthy</b></div><div><small>TOPICS</small><b>Connected</b></div><div><small>ANSWERS</small><b>Structured</b></div></div></div></section>
      <section className="sa-truth"><div className="shell sa-truth-grid"><div><span className="sa-label">[ المشهد الجديد ]</span><h2>SEO يجلب الزيارة.<br/><em>AEO يساعد على أن تكون الإجابة.</em></h2></div><div><p>الظهور لم يعد محصورًا في قائمة روابط. المستخدم قد يحصل على إجابة مباشرة قبل أن يزور أي موقع.</p><p>لذلك نبني صفحات مفهومة للبشر والأنظمة معًا، ونربطها بعلامة موثوقة وتجربة تقود إلى إجراء واضح.</p></div></div></section>
      <section className="sa-services shell"><div className="sa-section-head"><div><span className="sa-label">[ نطاق التحسين ]</span><h2>من التقنية إلى المحتوى.<br/><em>من الفهم إلى التحويل.</em></h2></div><p>النتيجة لا تأتي من تعديل عنوان واحد، بل من منظومة صفحات وموضوعات وإشارات تعمل معًا.</p></div><div className="sa-service-grid">{services.map((item, index) => <article key={item[0]}><span>0{index + 1}</span><h3>{item[0]}</h3><p>{item[1]}</p></article>)}</div></section>
      <section id="process" className="sa-process"><div className="shell"><div className="sa-section-head"><div><span className="sa-label">[ رحلة العمل ]</span><h2>نرتب الأولويات.<br/><em>ثم ننفذ ما يصنع الأثر.</em></h2></div><p>لا نوزع الجهد بالتساوي؛ نبدأ بما يمنع الظهور أو يضعف الصفحات التجارية الأساسية.</p></div><div className="sa-process-list">{process.map((item) => <article key={item[0]}><span>{item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p></article>)}</div></div></section>
      <section className="sa-measure"><div className="shell sa-measure-grid"><div><span className="sa-label">[ القياس الحقيقي ]</span><h2>الزيارات وحدها لا تكفي.<br/><em>نقيس الظهور الذي يخدم النمو.</em></h2></div><div className="sa-measure-list">{["نمو الظهور والكلمات ذات القيمة", "النقرات والزيارات المؤهلة", "الصفحات التي تولد استفسارات", "تحسن الفهرسة والنتائج الغنية", "التحويل من البحث العضوي", "وضوح المحتوى لمحركات الإجابة"].map((item, index) => <p key={item}><span>0{index + 1}</span>{item}</p>)}</div></div></section>
      <section className="sa-deliverables shell"><div className="sa-section-head"><div><span className="sa-label">[ ما تستلمه ]</span><h2>خطة قابلة للتنفيذ.<br/><em>لا تقرير يُنسى.</em></h2></div><p>كل مخرج مرتبط بأولوية ومسؤولية وخطوة تالية واضحة.</p></div><div className="sa-deliverables-list">{deliverables.map((item, index) => <div key={item}><b>0{index + 1}</b><p>{item}</p></div>)}</div></section>
      <section className="sa-fit"><div className="shell sa-fit-grid"><div><span className="sa-label">[ مناسبة لمن؟ ]</span><h2>عندما يكون لديك موقع.<br/><em>لكن البحث لا يعمل لصالحك.</em></h2></div><div>{fitFor.map((item, index) => <p key={item}><span>0{index + 1}</span>{item}</p>)}</div></div></section>

      <section className="sa-cluster shell" aria-labelledby="sa-cluster-title"><div className="sa-cluster-head"><div><span className="sa-label">[ قبل القرار ]</span><h2 id="sa-cluster-title">شخّص الظهور أولًا.<em>ثم اختر مستوى التنفيذ.</em></h2></div><p>دليلان يوضحان الفرق بين SEO وAEO ومتى تكون المشكلة في الظهور أو التحويل، ثم عرض تدقيق لمن يريد نقطة بداية محددة.</p></div><div className="sa-guide-grid">{seoGuides.map((guide,index)=><Link className="sa-guide-card" href={guide.href} key={guide.href}><div className="sa-guide-top"><span>دليل 0{index+1}</span><span className="sa-guide-arrow" aria-hidden="true">↗</span></div><h3>{guide.title}</h3><p>{guide.text}</p></Link>)}</div><Link className="sa-audit-card" href="/offers/seo-audit"><small>لبداية تشخيصية محددة</small><strong>SEO + AEO Audit</strong><p>فحص للفهرسة والسرعة والمحتوى والكلمات والتحويل مع تقرير وخطة تحسين مرتبة.</p><span className="sa-audit-price"><SeoAuditOfferPrice/><span className="sa-audit-link">شاهد العرض ↗</span></span></Link></section>

      <section className="sa-faq shell"><div className="sa-section-head"><div><span className="sa-label">[ الأسئلة الشائعة ]</span><h2>قبل أن تبدأ.<br/><em>هذه أهم الإجابات.</em></h2></div><p>نحدد النطاق بعد مراجعة الموقع والسوق والهدف، وليس وفق باقة عامة فقط.</p></div><div className="sa-faq-grid">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</div></section>
      <section className="sa-final shell"><div><span className="sa-label">[ الخطوة التالية ]</span><h2>أرسل رابط موقعك.<br/><em>لنحدد أين تضيع فرصة الظهور.</em></h2></div><div><p>أرسل نوع النشاط والسوق المستهدف، وسنبدأ بمراجعة المشكلات والفرص الأعلى تأثيرًا.</p><Link className="button primary" href="/contact">ابدأ مراجعة موقعك <span>←</span></Link></div></section>
      <Footer />
    </main>
  );
}
