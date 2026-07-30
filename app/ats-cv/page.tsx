import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../components/site-shell";
import { createMetadata, organizationId, siteUrl } from "../lib/seo";
import "./ats-cv-page.css";

export const metadata: Metadata = createMetadata({
  title: "كتابة وتصميم سيرة ذاتية ATS في السعودية | ديوانك",
  description:
    "كتابة وتصميم سيرة ذاتية احترافية متوافقة مع ATS، مع تحسين LinkedIn وCover Letter وإبراز الإنجازات والكلمات المفتاحية للوظائف في السعودية والخليج.",
  path: "/ats-cv",
  keywords: [
    "كتابة سيرة ذاتية احترافية",
    "تصميم CV في السعودية",
    "سيرة ذاتية ATS",
    "تحسين السيرة الذاتية",
    "كتابة Cover Letter",
    "تحسين LinkedIn",
    "كتابة CV باللغة الإنجليزية",
  ],
});

const services = [
  ["كتابة السيرة الذاتية", "إعادة بناء العنوان والملخص والخبرات والمهارات بما يخدم الدور المستهدف."],
  ["تهيئة ATS", "بنية واضحة ونص قابل للاستخراج وكلمات مفتاحية طبيعية مرتبطة بالوظيفة."],
  ["تحسين LinkedIn", "عنوان وAbout وخبرات ومهارات تعزز الظهور وتدعم التقديم والمراسلات."],
  ["Cover Letter", "خطاب مهني مخصص يربط خبرتك باحتياج الشركة والدور المستهدف."],
  ["نسخة عربية وإنجليزية", "صياغة مناسبة للسوق واللغة بدل الترجمة الحرفية بين النسختين."],
  ["مراجعة مهنية", "تحديد الفجوات ونقاط الضعف والإنجازات التي تحتاج أدلة أو أرقامًا أو توضيحًا."],
];

const deliverables = [
  "تقييم السيرة الحالية وتحديد نقاط الضعف والفرص.",
  "نسخة أساسية موجهة لمسار وظيفي واضح وليست نسخة عامة لكل الوظائف.",
  "إعادة كتابة الملخص والخبرات والإنجازات والمهارات.",
  "تنسيق نظيف ومتوافق مع ATS وسهل القراءة لمسؤول التوظيف.",
  "نسخة Word قابلة للتعديل ونسخة PDF جاهزة للتقديم.",
  "إرشادات عملية لتخصيص السيرة حسب كل إعلان وظيفي.",
  "تحسين LinkedIn أو Cover Letter عند اختيارهما ضمن نطاق الخدمة.",
];

const process = [
  ["نحدد الهدف", "نختار الوظائف والسوق والمستوى المهني بدل كتابة سيرة بلا اتجاه."],
  ["نجمع الدليل", "نستخرج الإنجازات والأرقام والمشروعات والنتائج التي تثبت القيمة."],
  ["نكتب ونهيكل", "نرتب الأقسام ونصوغ الخبرات بلغة واضحة ومقنعة ومتوافقة مع ATS."],
  ["نراجع ونخصص", "نراجع الدقة والاتساق ونوضح طريقة تعديل النسخة حسب الإعلان الوظيفي."],
];

const fitFor = [
  "باحث عن عمل لا يحصل على مقابلات رغم امتلاكه خبرة مناسبة.",
  "محترف ينتقل إلى قطاع أو دولة أو مستوى وظيفي جديد.",
  "مدير أو متخصص لديه خبرة قوية لكنها مكتوبة كقائمة مهام.",
  "خريج يحتاج عرض مشروعاته وتدريبه ومهاراته بصورة أكثر إقناعًا.",
  "شخص يريد توحيد السيرة الذاتية وLinkedIn ضمن صورة مهنية واحدة.",
];

const faqs = [
  { question: "ما معنى سيرة ذاتية متوافقة مع ATS؟", answer: "هي سيرة ذات بنية واضحة ونص قابل للاستخراج وعناوين قياسية، وتستخدم كلمات مرتبطة بالوظيفة دون حشو أو عناصر معقدة قد تعيق القراءة الآلية." },
  { question: "هل تضمن السيرة اجتياز ATS أو الحصول على مقابلة؟", answer: "لا توجد جهة موثوقة تستطيع ضمان ذلك؛ لأن القرار يعتمد على الخبرة والمنافسة ومتطلبات الوظيفة. نحن نحسن الوضوح والملاءمة وقابلية القراءة بصورة مهنية." },
  { question: "هل يتم تخصيص السيرة لكل وظيفة؟", answer: "نبني نسخة أساسية قوية لمسار محدد، ثم نوفر طريقة واضحة لتعديل الكلمات والأولويات بما يناسب كل إعلان وظيفي." },
  { question: "هل تشمل الخدمة LinkedIn؟", answer: "يمكن إضافة تحسين العنوان والنبذة والخبرات والمهارات على LinkedIn ضمن نطاق مستقل أو باقة متكاملة مع السيرة." },
  { question: "هل أحتاج نسخة عربية أم إنجليزية؟", answer: "يعتمد ذلك على السوق والوظائف المستهدفة. كثير من وظائف السعودية والخليج تحتاج نسخة إنجليزية، ويمكن إعداد نسخة عربية عند الحاجة." },
  { question: "هل التصميم الملون أفضل؟", answer: "ليس دائمًا. الأولوية للوضوح وسهولة القراءة وملاءمة المجال. بعض الأدوار الإبداعية قد تستفيد من نسخة بصرية إضافية، لكن نسخة ATS الأساسية تبقى أبسط وأكثر أمانًا." },
];

export default function AtsCvPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteUrl}/ats-cv#service`,
        name: "كتابة وتصميم السيرة الذاتية وتهيئة LinkedIn",
        alternateName: "ATS CV Writing and LinkedIn Optimization",
        description: "كتابة وتطوير سيرة ذاتية متوافقة مع ATS وتحسين LinkedIn وCover Letter للباحثين عن عمل في السعودية والخليج.",
        serviceType: ["ATS CV Writing", "Resume Writing", "LinkedIn Optimization", "Cover Letter Writing", "Career Branding"],
        provider: { "@id": organizationId },
        areaServed: ["Saudi Arabia", "Bahrain", "GCC"],
        url: `${siteUrl}/ats-cv`,
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/ats-cv#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "الخدمات", item: `${siteUrl}/services` },
          { "@type": "ListItem", position: 3, name: "السيرة الذاتية وLinkedIn", item: `${siteUrl}/ats-cv` },
        ],
      },
    ],
  };

  return (
    <main className="cv-page">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="cv-hero shell">
        <div className="cv-hero-copy">
          <div className="cv-kicker"><span>ATS CV</span><span>LINKEDIN</span><span>CAREER BRANDING</span></div>
          <h1>خبرتك قد تكون قوية.<br/><em>لكن طريقة عرضها تحسم الانطباع الأول.</em></h1>
          <p>نكتب ونصمم سيرة ذاتية احترافية ومتوافقة مع ATS، ونوحّدها مع LinkedIn وCover Letter لتقدم صورة مهنية واضحة ومقنعة للوظائف في السعودية والخليج.</p>
          <div className="cv-actions"><Link className="button primary" href="/contact">اطلب تقييم سيرتك <span>←</span></Link><a className="cv-text-link" href="#process">استعرض طريقة العمل</a></div>
        </div>

        <div className="cv-document" aria-label="تصور لسيرة ذاتية احترافية متوافقة مع ATS">
          <div className="cv-doc-top"><div><i></i><i></i><i></i></div><span>CV_PREVIEW.pdf</span></div>
          <div className="cv-sheet">
            <div className="cv-sheet-head"><div><h3>YOUR NAME</h3><p>MARKETING &amp; GROWTH MANAGER</p></div><div className="cv-score">ATS<br/>READY</div></div>
            <div className="cv-sheet-grid">
              <aside>
                <div className="cv-mini"><b>CONTACT</b><span>Saudi Arabia<br/>email@example.com</span></div>
                <div className="cv-mini"><b>CORE SKILLS</b><span>Strategy · CRM<br/>Growth · Branding<br/>Automation</span></div>
                <div className="cv-mini"><b>LANGUAGES</b><span>Arabic · English</span></div>
              </aside>
              <main>
                <div className="cv-mini"><b>PROFESSIONAL SUMMARY</b><p>Clear positioning, targeted experience, and measurable value aligned with the role.</p></div>
                <div className="cv-exp"><b>EXPERIENCE</b><p>Improved lead-to-booking conversion through CRM automation and structured follow-up.</p></div>
                <div className="cv-exp"><b>SELECTED IMPACT</b><p>Results, scale, ownership, and business impact — not a list of daily tasks.</p></div>
              </main>
            </div>
          </div>
        </div>
      </section>

      <section className="cv-truth">
        <div className="shell cv-truth-grid">
          <div className="cv-truth-copy">
            <p>عندما تكون السيرة عامة، مزدحمة، أو مبنية على وصف المهام فقط، يصعب على مسؤول التوظيف رؤية قيمتك بسرعة.</p>
            <p>لذلك نربط خبرتك بالدور المستهدف، ونحوّل المسؤوليات إلى إنجازات وأثر، مع تنسيق واضح يخدم الإنسان ونظام ATS معًا.</p>
          </div>
          <div className="cv-truth-title"><span className="cv-label">[ الفكرة الأساسية ]</span><h2>السيرة ليست أرشيفًا للماضي.<br/><em>إنها حجة مهنية للخطوة القادمة.</em></h2></div>
        </div>
      </section>

      <section className="cv-before-after">
        <div className="shell">
          <span className="cv-label">[ من المهام إلى القيمة ]</span>
          <div className="cv-compare">
            <article><small>BEFORE</small><h3>سيرة تصف ما فعلته.</h3><ul><li>مسؤول عن إدارة الحملات.</li><li>متابعة العملاء والفريق.</li><li>إعداد التقارير الشهرية.</li></ul></article>
            <article><small>AFTER</small><h3>سيرة توضح لماذا يهم ما فعلته.</h3><ul><li>إدارة حملات مرتبطة بالتكلفة والتحويل والعائد.</li><li>بناء متابعة تقلل الفرص الضائعة وتحسن الحجز.</li><li>تحويل البيانات إلى قرارات قابلة للتنفيذ.</li></ul></article>
          </div>
        </div>
      </section>

      <section className="cv-services shell">
        <div className="cv-section-head"><div><span className="cv-label">[ نطاق الخدمة ]</span><h2>سيرة، LinkedIn، ورسالة مهنية<br/><em>تعمل في اتجاه واحد.</em></h2></div><p>نحدد النطاق حسب الوظائف المستهدفة والمرحلة المهنية بدل تقديم قالب ثابت للجميع.</p></div>
        <div className="cv-service-grid">{services.map((item, index) => <article key={item[0]}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item[0]}</h3><p>{item[1]}</p></article>)}</div>
      </section>

      <section className="cv-deliverables">
        <div className="shell cv-deliverables-layout">
          <div className="cv-sticky"><span className="cv-label">[ ما الذي تستلمه ]</span><h2>مخرجات قابلة للاستخدام.<br/><em>لا ملف جميل فقط.</em></h2><p>كل عنصر يتم بناؤه ليدعم التقديم والتخصيص والمقابلة، لا لمجرد ملء الصفحات.</p></div>
          <div className="cv-deliverables-list">{deliverables.map((item, index) => <div key={item}><b>{String(index + 1).padStart(2, "0")}</b><p>{item}</p></div>)}</div>
        </div>
      </section>

      <section className="cv-process shell" id="process">
        <div className="cv-section-head"><div><span className="cv-label">[ طريقة العمل ]</span><h2>من تاريخك المهني<br/><em>إلى قصة توظيف واضحة.</em></h2></div><p>لا نبدأ بالقالب. نبدأ بالهدف والدليل ثم نبني الصياغة والترتيب والتصميم حولهما.</p></div>
        <div className="cv-process-list">{process.map((step, index) => <article key={step[0]}><span>{String(index + 1).padStart(2, "0")}</span><h3>{step[0]}</h3><p>{step[1]}</p></article>)}</div>
      </section>

      <section className="cv-fit">
        <div className="shell cv-fit-grid"><div><span className="cv-label">[ لمن تناسب الخدمة ]</span><h2 className="cv-section-head">تحتاج إعادة بناء سيرتك<br/><em>عندما لا تعكس مستواك الحقيقي.</em></h2></div><div className="cv-fit-list">{fitFor.map((item, index) => <p key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</p>)}</div></div>
      </section>

      <section className="cv-faq shell">
        <div className="cv-section-head"><div><span className="cv-label">[ أسئلة شائعة ]</span><h2>قبل أن نبدأ.</h2></div><p>إجابات مباشرة عن ATS والتخصيص واللغة والتصميم وLinkedIn.</p></div>
        <div className="cv-faq-grid">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</div>
      </section>

      <section className="cv-final shell">
        <div><span className="cv-label">[ الخطوة التالية ]</span><h2>لا تترك خبرتك<br/><em>تُقرأ بأقل من قيمتها.</em></h2></div>
        <div className="cv-final-copy"><p>أرسل سيرتك الحالية والوظائف المستهدفة، وسنحدد نقاط الضعف والنطاق الأنسب للتطوير.</p><Link className="button primary" href="/contact">ابدأ مراجعة سيرتك <span>←</span></Link><div className="cv-related"><Link href="/branding">البراند الشخصي</Link><Link href="/digital-marketing">التسويق والمحتوى</Link><Link href="/contact">تواصل معنا</Link></div></div>
      </section>
      <Footer />
    </main>
  );
}
