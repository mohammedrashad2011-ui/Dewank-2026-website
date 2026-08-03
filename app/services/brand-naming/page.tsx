import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../components/site-shell";
import { createMetadata, organizationId, siteUrl } from "../../lib/seo";
import "../../branding/branding-page.css";

const title = "خدمة اقتراح أسماء تجارية وفحص العلامة والدومين";
const description = "خدمة تسمية العلامات التجارية في السعودية والخليج: اقتراح أسماء مدروسة، فحص لغوي وثقافي، بحث مبدئي عن العلامات المشابهة، والتحقق من الدومين وحسابات التواصل.";

export const metadata: Metadata = createMetadata({
  title: `${title} | ديوانك`,
  description,
  path: "/services/brand-naming",
  keywords: ["اقتراح أسماء تجارية", "تسمية العلامات التجارية", "فحص اسم تجاري", "البحث عن علامة تجارية", "توفر الدومين", "شركة تسمية علامات تجارية في السعودية"],
});

const deliverables = [
  ["فهم المشروع والسوق", "نبدأ بنموذج أو جلسة لفهم النشاط والجمهور والمنافسين وطموح التوسع والصفات التي يجب أن يحملها الاسم."],
  ["10–15 اسمًا مدروسًا", "أسماء مبنية على اتجاهات تسمية واضحة، وليست قائمة كلمات عشوائية أو مخرجات مباشرة من أداة آلية."],
  ["المعنى ومنطق الاختيار", "شرح فكرة كل اسم، وطريقة نطقه، وما الذي يجعله ملائمًا أو قابلًا للنمو مع العلامة."],
  ["فحص لغوي وثقافي", "مراجعة أولية للمعاني والنطق والانطباعات المحتملة بالعربية والإنجليزية بحسب السوق المستهدف."],
  ["بحث مبدئي عن التشابه", "بحث أولي عن العلامات والأسماء المشابهة لتقليل احتمالات التعارض، من دون ادعاء ضمان التسجيل الرسمي."],
  ["الدومين وحسابات التواصل", "التحقق وقت البحث من توفر النطاقات وأسماء المستخدمين ذات الصلة، مع توضيح البدائل العملية."],
  ["أفضل 3 ترشيحات", "مصفوفة قرار مختصرة تقارن أقوى الخيارات حسب التميز والوضوح والمرونة وقابلية الاستخدام."],
  ["جولة تطوير واحدة", "تطوير الاتجاهات بناءً على ملاحظات محددة إذا لم يحسم العميل اختياره من الجولة الأولى."],
];

const faqs = [
  ["كم سعر خدمة اقتراح الأسماء التجارية؟", "تبدأ الخدمة من 500 ريال سعودي لنطاق أساسي يشمل 10–15 اسمًا مع المعاني والفحص المبدئي والدومين وأفضل الترشيحات. يتغير السعر عند تعدد الأسواق أو اللغات أو الحاجة إلى بحث أوسع."],
  ["هل تضمنون قبول الاسم أو تسجيل العلامة؟", "لا. نجري بحثًا مبدئيًا لتقليل احتمالات التعارض أو الرفض، لكن القبول النهائي من اختصاص الجهة الرسمية ولا يمكن ضمانه قبل تقديم الطلب وفحصه رسميًا."],
  ["هل تشمل الخدمة حجز الدومين أو تسجيل العلامة؟", "تشمل التحقق من التوفر وقت البحث. شراء الدومين وإجراءات تسجيل العلامة والرسوم الرسمية ليست ضمن السعر الأساسي إلا إذا ذُكرت صراحة في عرض مستقل."],
  ["ماذا لو لم يناسبني أي اسم؟", "تشمل الخدمة جولة تطوير واحدة بناءً على ملاحظات واضحة حول الاتجاهات المقدمة. لذلك نعتمد معايير القرار قبل البدء لتجنب التفضيلات المتغيرة بلا مرجعية."],
];

export default function BrandNamingPage() {
  const url = `${siteUrl}/services/brand-naming`;
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Service", "@id": `${url}#service`, name: title, description, serviceType: ["Brand Naming", "Preliminary Trademark Search", "Domain Availability Research"], provider: { "@id": organizationId }, areaServed: ["Saudi Arabia", "Bahrain", "GCC"], offers: { "@type": "Offer", priceCurrency: "SAR", price: "500", description: "سعر بداية إرشادي للنطاق الأساسي" }, url },
    { "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl }, { "@type": "ListItem", position: 2, name: "الخدمات", item: `${siteUrl}/services` }, { "@type": "ListItem", position: 3, name: "تسمية العلامة التجارية", item: url }] },
  ] };
  const whatsapp = "https://wa.me/97339066649?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%AE%D8%AF%D9%85%D8%A9%20%D8%AA%D8%B3%D9%85%D9%8A%D8%A9%20%D8%B9%D9%84%D8%A7%D9%85%D8%AA%D9%8A";

  return <main className="inner-page branding-page">
    <Header /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <section className="shell brand-hero"><div className="brand-hero-copy">
      <span className="section-label">[ BRAND NAMING &amp; RESEARCH ]</span>
      <h1>اسم علامتك ليس كلمة جميلة.<em>هو أصل تجاري يجب أن يتحمل النمو.</em></h1>
      <p>نطوّر أسماء علامات تجارية مبنية على فهم النشاط والجمهور والسوق، ثم نفحصها لغويًا وثقافيًا ونبحث مبدئيًا عن التشابه وتوفر الدومين قبل أن تستثمر في الهوية والإطلاق.</p>
      <div className="brand-hero-actions"><a className="button whatsapp" href={whatsapp} target="_blank" rel="noopener noreferrer">ابدأ اختيار الاسم <span>↗</span></a><Link className="button primary" href="/guides/how-to-choose-brand-name-saudi-arabia">اقرأ دليل اختيار الاسم <span>←</span></Link></div>
    </div><div className="brand-diagnosis-copy"><span className="section-label">[ سعر البداية ]</span><h2>تبدأ من<br/><em>500 ريال سعودي</em></h2><p>للنطاق الأساسي. نحدد السعر النهائي بعد معرفة السوق واللغات وطبيعة البحث المطلوبة.</p></div></section>

    <section className="shell brand-diagnosis"><div><span className="section-label">[ المشكلة ]</span><h2>الاسم الضعيف<br/><em>تكلفته تظهر لاحقًا.</em></h2></div><div className="brand-diagnosis-copy"><p>اسم يصعب نطقه، أو يشبه منافسًا، أو لا يملك نطاقًا مناسبًا قد يستهلك ميزانية الهوية والتسويق ثم يجبرك على التغيير. لذلك نعامل التسمية كقرار بحث واستراتيجية، لا جلسة عصف ذهني فقط.</p><div className="brand-symptoms"><p>اسم عام يصعب امتلاكه</p><p>تشابه يربك العميل</p><p>معنى سلبي في سوق آخر</p><p>دومين وحسابات غير متاحة</p></div></div></section>

    <section className="shell brand-deliverables"><div className="brand-section-head"><div><span className="section-label">[ ما الذي تستلمه ]</span><h2>من فكرة المشروع<br/><em>إلى قائمة قابلة للقرار.</em></h2></div></div><div className="brand-deliverables-grid">{deliverables.map(([item, text], i) => <article key={item}><span>{String(i + 1).padStart(2, "0")}</span><div><h3>{item}</h3><p>{text}</p></div></article>)}</div></section>

    <section className="brand-process"><div className="shell"><div className="brand-section-head brand-process-head"><div><span className="section-label">[ حدود البحث ]</span><h2>نقلّل المخاطر.<br/><em>ولا نبيع ضمانًا وهميًا.</em></h2></div></div><p className="brand-process-intro">البحث الذي نقدمه مبدئي وإبداعي وتجاري. قرار قبول الاسم أو تسجيل العلامة يظل للجهة الرسمية المختصة، كما أن توفر الدومين أو الحسابات قد يتغير حتى لحظة الحجز.</p></div></section>

    <section className="shell brand-faq"><span className="section-label">[ أسئلة شائعة ]</span><div className="brand-section-head"><div><h2>وضوح قبل<br/><em>بدء البحث.</em></h2></div></div>{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</section>
    <section className="shell brand-cta"><div><span className="section-label">[ ابدأ الآن ]</span><h2>ابنِ اسمًا يمكن<br/>لعلامتك أن تكبر داخله.</h2></div><div><p>أرسل نوع النشاط والسوق المستهدف وطموح التوسع، ونحدد لك نطاق الخدمة المناسب قبل البدء.</p><a className="button" href={whatsapp} target="_blank" rel="noopener noreferrer">ابدأ عبر واتساب <span>↗</span></a></div></section>
    <Footer />
  </main>;
}
