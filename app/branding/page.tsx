import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "../lib/seo";
import { Footer, Header } from "../components/site-shell";
import "./branding-page.css";

export const metadata: Metadata = createMetadata({
  title: "استراتيجية البراند وتصميم الهوية البصرية في السعودية | ديوانك",
  description: "نبني استراتيجية البراند والتموضع والتسمية والهوية البصرية للشركات في السعودية والخليج، لتصبح علامتك أوضح وأكثر تميزًا واتساقًا.",
  path: "/branding",
  keywords: ["استراتيجية البراند", "تصميم هوية بصرية", "شركة براندينج في السعودية", "بناء العلامة التجارية", "تصميم شعار وهوية", "تسمية العلامات التجارية"],
});

const outcomes = [
  ["تموضع واضح", "تحديد موقع علامتك في السوق، وما الذي يجعلها مختلفة وملائمة للجمهور المستهدف."],
  ["رسالة مقنعة", "قيمة مقترحة ورسائل رئيسية تساعد العميل على فهم سبب اختيارك بسرعة."],
  ["هوية متماسكة", "نظام بصري ولغوي يحافظ على شخصية واحدة عبر الموقع والمحتوى والعروض."],
];

const deliverables = [
  ["بحث وتشخيص البراند", "مراجعة السوق والجمهور والمنافسين والعلامة الحالية لاكتشاف الفجوة الحقيقية."],
  ["التموضع والقيمة المقترحة", "صياغة مكان العلامة في السوق، وعدها، أسباب تصديقها، وأهم نقاط الاختلاف."],
  ["التسمية والسلوجن", "تطوير اسم أو شعار لفظي عند الحاجة، بمعايير الوضوح والتميّز وقابلية الاستخدام."],
  ["نظام الرسائل", "رسالة رئيسية، نبرة صوت، عبارات تعريفية، وزوايا تواصل قابلة للتطبيق."],
  ["الهوية البصرية", "الشعار والألوان والخطوط والعناصر المساندة واتجاه الصور والتطبيقات الأساسية."],
  ["دليل استخدام الهوية", "قواعد عملية تحافظ على الاتساق وتساعد فريقك ومورديك على التنفيذ الصحيح."],
];

const process = [
  ["الاكتشاف", "جلسة مركزة لفهم المشروع والسوق والجمهور والأهداف والتحديات الحالية."],
  ["البحث والتشخيص", "تحليل المنافسة والسياق واستخراج الفرصة التي يمكن للعلامة امتلاكها."],
  ["الاستراتيجية", "بناء التموضع والقيمة المقترحة والشخصية والرسائل الأساسية قبل التصميم."],
  ["التصميم والتطوير", "تحويل القرارات إلى اتجاه بصري، ثم تطوير النظام والتطبيقات المتفق عليها."],
  ["التسليم والتفعيل", "تسليم الملفات والدليل وشرح كيفية تطبيق الهوية عبر نقاط التواصل."],
];

const faqs = [
  ["ما الفرق بين استراتيجية البراند والهوية البصرية؟", "استراتيجية البراند تحدد من أنت، لمن، ولماذا يختارك العميل. الهوية البصرية تحوّل هذه القرارات إلى نظام مرئي من شعار وألوان وخطوط وعناصر. التصميم دون استراتيجية قد يكون جميلًا لكنه لا يبني تميّزًا واضحًا."],
  ["هل تشمل الخدمة تصميم الشعار؟", "نعم، عندما يكون تصميم الشعار والهوية ضمن النطاق المتفق عليه. لكننا لا نبدأ بالرسم؛ نبدأ بالبحث والتموضع حتى يعكس الشعار معنى تجاريًا واضحًا."],
  ["هل يمكن تطوير هوية موجودة بدل تغييرها بالكامل؟", "نعم. نراجع قيمة الأصول الحالية ومدى تعرّف الجمهور عليها، ثم نحدد هل الأنسب تطوير الهوية تدريجيًا أم إعادة بنائها."],
  ["كم يستغرق بناء استراتيجية وهوية البراند؟", "تعتمد المدة على نطاق البحث وعدد صناع القرار والمخرجات. بعد جلسة الاكتشاف نقدم جدولًا واضحًا بالمراحل ونقاط الاعتماد."],
  ["كم تكلفة تصميم الهوية البصرية؟", "تتحدد التكلفة حسب ما إذا كان المطلوب هوية بصرية فقط أم استراتيجية متكاملة تشمل البحث والتموضع والتسمية ودليل الاستخدام. نتفق على نطاق واضح قبل البدء دون رسوم مبهمة."],
  ["هل تخدمون الشركات خارج السعودية؟", "نعم. نخدم الشركات والمشروعات في السعودية والبحرين ودول الخليج، ويمكن تنفيذ كامل مراحل المشروع عن بُعد."],
];

export default function BrandingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://dewank.com/branding#service",
        name: "استراتيجية البراند وتصميم الهوية البصرية",
        description: "خدمات استراتيجية البراند والتموضع والتسمية والهوية البصرية للشركات في السعودية والخليج.",
        serviceType: ["Brand Strategy", "Visual Identity Design", "Brand Naming"],
        provider: { "@type": "ProfessionalService", name: "Dewank | ديوانك", url: "https://dewank.com" },
        areaServed: ["Saudi Arabia", "Bahrain", "GCC"],
        url: "https://dewank.com/branding",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(([question, answer]) => ({
          "@type": "Question", name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://dewank.com" },
          { "@type": "ListItem", position: 2, name: "الخدمات", item: "https://dewank.com/services" },
          { "@type": "ListItem", position: 3, name: "استراتيجية البراند والهوية", item: "https://dewank.com/branding" },
        ],
      },
    ],
  };

  return (
    <main className="inner-page branding-page">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="shell brand-hero">
        <div className="brand-hero-copy">
          <span className="section-label">[ BRAND STRATEGY &amp; IDENTITY ]</span>
          <h1>استراتيجية براند تجعل علامتك<em>واضحة، مختلفة، وجديرة بالاختيار.</em></h1>
          <p>نساعد الشركات في السعودية والخليج على بناء استراتيجية البراند والتموضع والهوية البصرية كنظام واحد—حتى يفهم العميل قيمتك، يتذكرك، ويثق بك قبل أن تبدأ المقارنة بالسعر.</p>
          <div className="brand-hero-actions">
            <Link className="button primary" href="/contact">ناقش مشروع هويتك <span>←</span></Link>
            <a className="button whatsapp" href="https://wa.me/97339066649?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A8%D9%86%D8%A7%D8%A1%20%D8%A7%D8%B3%D8%AA%D8%B1%D8%A7%D8%AA%D9%8A%D8%AC%D9%8A%D8%A9%20%D9%88%D9%87%D9%88%D9%8A%D8%A9%20%D9%84%D8%B9%D9%84%D8%A7%D9%85%D8%AA%D9%8A" target="_blank" rel="noopener noreferrer">تواصل عبر واتساب <span>↗</span></a>
          </div>
        </div>
        <div className="brand-signal" aria-hidden="true">
          <div className="brand-signal-core">D</div>
          <span>POSITIONING</span><span>IDENTITY</span><span>VOICE</span>
        </div>
      </section>

      <section className="shell brand-diagnosis">
        <div><span className="section-label">[ المشكلة التي نحلها ]</span><h2>السوق يراك.<br/><em>لكن هل يفهمك؟</em></h2></div>
        <div className="brand-diagnosis-copy">
          <p>عندما لا تمتلك العلامة تموضعًا ورسالة وهوية متماسكة، تبدو مثل غيرها—even لو كانت خدمتها أفضل. النتيجة عادةً محتوى متغير، حملات أغلى، وفريق يشرح المشروع كل مرة من الصفر.</p>
          <div className="brand-symptoms">
            <p>العملاء يقارنونك بالسعر فقط</p><p>الهوية لا تعكس مستوى الخدمة</p>
            <p>الرسائل تختلف من قناة لأخرى</p><p>المحتوى يبدأ كل مرة من الصفر</p>
          </div>
        </div>
      </section>

      <section className="brand-system-section">
        <div className="shell">
          <div className="brand-section-head">
            <div><span className="section-label">[ النتيجة ]</span><h2>لا نسلمك شعارًا.<br/><em>نبني نظام علامة.</em></h2></div>
            <p>كل عنصر مرتبط بقرار استراتيجي، حتى تعمل الهوية في التسويق والمبيعات وتجربة العميل—not في ملف العرض فقط.</p>
          </div>
          <div className="brand-system-grid">{outcomes.map(([title,text],i)=><article className="brand-system-card" key={title}><b>0{i+1} / OUTCOME</b><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="shell brand-deliverables">
        <div className="brand-section-head"><div><span className="section-label">[ ما الذي تتضمنه الخدمة ]</span><h2>من الفكرة الغامضة<br/><em>إلى نظام قابل للاستخدام.</em></h2></div></div>
        <div className="brand-deliverables-grid">{deliverables.map(([title,text],i)=><article key={title}><span>0{i+1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </section>

      <section className="brand-process">
        <div className="shell">
          <div className="brand-section-head"><div><span className="section-label">[ مراحل بناء الهوية ]</span><h2>استراتيجية أولًا.<br/><em>تصميم له سبب.</em></h2></div><p>نقاط اعتماد واضحة تقلل التخمين والتعديلات العشوائية، وتضمن أن كل مرحلة مبنية على قرار سابق.</p></div>
          <div className="brand-process-list">{process.map(([title,text],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="shell brand-fit">
        <div><span className="section-label">[ لمن تناسب الخدمة ]</span><h2>الوقت المناسب<br/><em>لبناء البراند.</em></h2></div>
        <div className="brand-fit-list">
          <p>مشروع جديد يحتاج أساسًا قويًا قبل الإطلاق.</p>
          <p>شركة نمت لكن صورتها لم تعد تعكس حجمها أو سعرها.</p>
          <p>علامة تتوسع إلى السعودية أو سوق خليجي جديد.</p>
          <p>فريق يعاني من اختلاف الرسائل والتصاميم بين القنوات.</p>
        </div>
      </section>

      <section className="shell brand-faq" aria-labelledby="branding-faq-title">
        <span className="section-label">[ أسئلة شائعة ]</span>
        <div className="brand-section-head"><div><h2 id="branding-faq-title">إجابات واضحة<br/><em>قبل أن نبدأ.</em></h2></div></div>
        {faqs.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}
        <div className="brand-related"><Link href="/website-design">تصميم مواقع الشركات ←</Link><Link href="/digital-marketing">استراتيجية التسويق الرقمي ←</Link><Link href="/services">عرض جميع الخدمات ←</Link></div>
      </section>

      <section className="shell brand-cta">
        <div><span className="section-label">[ نقطة البداية ]</span><h2>علامتك تستحق<br/>سببًا يجعلها الاختيار.</h2></div>
        <div><p>أخبرنا أين تقف علامتك الآن، وسنحدد معك هل تحتاج استراتيجية كاملة، تطوير الهوية الحالية، أم بداية أصغر وأكثر منطقية.</p><Link className="button" href="/contact">ابدأ محادثة قصيرة <span>←</span></Link></div>
      </section>
      <Footer />
    </main>
  );
}
