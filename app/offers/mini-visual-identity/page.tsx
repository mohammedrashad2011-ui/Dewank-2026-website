import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../components/site-shell";
import { createMetadata, organizationId, siteUrl } from "../../lib/seo";
import { MiniIdentityPrice, MiniIdentityWhatsApp } from "./localized-mini-identity";
import "../offers-page.css";
import "../offer-trust.css";
import "./mini-visual-identity.css";

const title = "هوية بصرية مصغرة للشركات والمشاريع";
const description = "باقة هوية بصرية مصغرة تشمل شعارًا أساسيًا، لوحة ألوان، خطوطًا مقترحة، واتجاهًا بصريًا مع 3 تطبيقات عملية. مناسبة للمشاريع التي تريد بداية احترافية واضحة دون بناء هوية كاملة.";

export const metadata: Metadata = createMetadata({
  title: `${title} | ديوانك`,
  description,
  path: "/offers/mini-visual-identity",
  keywords: ["هوية بصرية مصغرة", "تصميم هوية بصرية", "تصميم شعار وهوية", "هوية بصرية للشركات", "سعر تصميم هوية بصرية", "تصميم لوجو وهوية", "هوية بصرية السعودية"],
});

const deliverables = [
  ["شعار أساسي", "تصميم شعار رئيسي واضح وقابل للاستخدام على القنوات الرقمية والمطبوعات الأساسية."],
  ["نسخة مبسطة للشعار", "نسخة مختصرة أو رمز مساعد للاستخدام في الصور الشخصية والأيقونات والمساحات الصغيرة."],
  ["لوحة ألوان", "اختيار مجموعة ألوان رئيسية ومساندة مع أكوادها للاستخدام بشكل متناسق."],
  ["خطوط مقترحة", "تحديد خطوط مناسبة للعناوين والنصوص بالعربية والإنجليزية بحسب شخصية العلامة."],
  ["توجه بصري", "اتجاه واضح للصور والعناصر والزخارف وطريقة ظهور العلامة حتى لا يبدأ المحتوى من الصفر كل مرة."],
  ["3 تطبيقات عملية", "تطبيق الهوية على 3 نماذج متفق عليها، مثل بطاقة أعمال أو قالب سوشيال ميديا أو غلاف أو توقيع بريد."],
  ["ملف إرشادي مختصر", "صفحة أو ملف مختصر يوضح الاستخدام الأساسي للشعار والألوان والخطوط."],
  ["جولتا تعديل", "جولتا تعديل مجمعتان بعد عرض الاتجاه الأولي لضبط الهوية قبل التسليم النهائي."],
];

const faqs = [
  ["كم سعر الهوية البصرية المصغرة؟", "تبدأ الباقة من 1,190 ريال سعودي وتشمل الشعار الأساسي، لوحة الألوان، الخطوط، التوجه البصري، 3 تطبيقات عملية وملف إرشادي مختصر."],
  ["ما الفرق بينها وبين الهوية البصرية الكاملة؟", "الباقة المصغرة مناسبة لمن يحتاج أساسًا بصريًا احترافيًا وسريعًا. الهوية الكاملة تشمل عادة بحثًا أوسع، استراتيجية البراند، نظام رسائل، تطبيقات أكثر ودليل استخدام تفصيلي."],
  ["هل تشمل اختيار الاسم التجاري؟", "لا. يجب أن يكون الاسم معتمدًا قبل بدء التصميم. إذا لم يتم اختيار الاسم بعد، يمكن استخدام باقة اختيار الاسم التجاري أولًا."],
  ["هل تشمل كتابة المحتوى أو إدارة السوشيال ميديا؟", "لا. الباقة تبني النظام البصري الأساسي، بينما صناعة المحتوى وإدارة الحسابات خدمات مستقلة."],
  ["كم مدة التنفيذ؟", "التسليم عادة خلال 7–10 أيام عمل بعد استلام معلومات المشروع واعتماد الاتجاه الأولي."],
  ["ما الملفات التي أستلمها؟", "تستلم ملفات الشعار الأساسية للاستخدام الرقمي والطباعة، أكواد الألوان، الخطوط المقترحة، التطبيقات المتفق عليها والملف الإرشادي المختصر."],
];

export default function MiniVisualIdentityOffer() {
  const url = `${siteUrl}/offers/mini-visual-identity`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "باقة الهوية البصرية المصغرة",
        description,
        serviceType: ["Visual Identity Design", "Logo Design", "Brand Identity"],
        provider: { "@id": organizationId },
        areaServed: ["SA", "BH", "AE", "KW", "QA", "OM"],
        offers: { "@type": "Offer", price: "1190", priceCurrency: "SAR", availability: "https://schema.org/InStock", url },
        url,
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqs.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "العروض", item: `${siteUrl}/offers` },
          { "@type": "ListItem", position: 3, name: "هوية بصرية مصغرة", item: url },
        ],
      },
    ],
  };

  return (
    <main className="inner-page offers-page mini-identity-page">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="shell offer-detail-hero mini-identity-hero">
        <div>
          <div className="offer-availability"><span className="offer-spots-available"><i aria-hidden="true" /><strong>7–10</strong> أيام عمل</span></div>
          <h1>مش مجرد لوجو.<br/><em>بداية شكل يتعرف عليك.</em></h1>
          <p>نجهز لك أساسًا بصريًا متماسكًا يجعل علامتك تظهر بصورة احترافية من أول يوم، من الشعار والألوان إلى الخطوط والتطبيقات الأساسية.</p>
          <div className="mini-identity-answer" aria-label="الإجابة المختصرة">
            <b>الإجابة المختصرة</b>
            <span>تحصل على شعار أساسي ونسخة مبسطة، لوحة ألوان، خطوط مقترحة، توجه بصري، 3 تطبيقات عملية وملف إرشادي مختصر.</span>
          </div>
        </div>
        <aside className="offer-price-panel mini-identity-price-panel">
          <small>الباقة المصغرة</small>
          <MiniIdentityPrice />
          <div className="offer-trust-inline"><span>شعار أساسي</span><span>3 تطبيقات</span><span>جولتا تعديل</span></div>
          <p>لا تشمل استراتيجية براند كاملة أو اختيار الاسم أو إدارة المحتوى أو تطبيقات موسعة خارج النطاق المتفق عليه.</p>
          <MiniIdentityWhatsApp className="button primary" label="ابدأ هويتك" />
        </aside>
      </section>

      <section className="shell mini-identity-proof">
        <div className="mini-identity-proof-copy">
          <span className="section-label">[ لماذا هوية مصغرة؟ ]</span>
          <h2>لأن الشكل المرتجل<br/>يتعب العلامة بسرعة.</h2>
          <p>المشروع في بدايته لا يحتاج دائمًا إلى نظام براند ضخم. لكنه يحتاج قواعد بصرية كافية تمنع كل تصميم جديد من أن يبدو وكأنه تابع لشركة مختلفة.</p>
        </div>
        <div className="identity-board" aria-label="نموذج توضيحي لمكونات الهوية البصرية">
          <div className="identity-board-top"><span>MINI IDENTITY / SAMPLE</span><small>نظام بصري قابل للاستخدام</small></div>
          <div className="identity-logo-mark">NOVA<span>CO.</span></div>
          <div className="identity-colors"><i /><i /><i /><i /></div>
          <div className="identity-board-grid">
            <article><small>الشعار</small><b>رئيسي + مبسط</b></article>
            <article><small>الألوان</small><b>رئيسية + مساندة</b></article>
            <article><small>الخطوط</small><b>عناوين + نصوص</b></article>
          </div>
        </div>
      </section>

      <section className="shell offer-deliverables mini-identity-deliverables">
        <div><span className="section-label">[ ماذا تستلم؟ ]</span><h2>الأساس الذي يحتاجه<br/>مشروعك ليظهر بثبات.</h2><p>نركز على العناصر التي ستستخدمها فعلًا في بداية العلامة، بدل تضخيم الباقة بعناصر لا تحتاجها الآن.</p></div>
        <div className="deliverable-list">{deliverables.map(([item, text]) => <article className="deliverable-item" key={item}><b>{item}</b><p>{text}</p></article>)}</div>
      </section>

      <section className="shell mini-identity-process">
        <div className="mini-identity-process-head"><span className="section-label">[ 3 مراحل ]</span><h2>نفهم. نحدد الاتجاه. ثم نبني النظام.</h2></div>
        <div className="mini-identity-process-grid">
          <article><b>01</b><h3>نفهم المشروع</h3><p>النشاط، الجمهور، المنافسون، شخصية العلامة وما يجب أن يشعر به العميل عند رؤيتها.</p></article>
          <article><b>02</b><h3>نحدد الاتجاه</h3><p>نقترح توجهًا بصريًا يربط الشعار بالألوان والخطوط بدل تصميم كل عنصر بشكل منفصل.</p></article>
          <article><b>03</b><h3>نطبّق ونسلّم</h3><p>نطور العناصر المعتمدة ونطبقها على 3 نماذج عملية ثم نسلّم الملفات والمرجع المختصر.</p></article>
        </div>
      </section>

      <section className="shell offer-confidence mini-identity-confidence">
        <div className="offer-confidence-head"><span className="section-label">[ مناسبة لمن؟ ]</span><h2>بداية قوية بدون تعقيد الهوية الكاملة.</h2></div>
        <div className="offer-confidence-grid"><article><b>01</b><span>مشروع جديد لديه اسم معتمد ويحتاج شكلًا احترافيًا قبل الإطلاق.</span></article><article><b>02</b><span>نشاط صغير يستخدم شعارًا ضعيفًا أو غير متناسق ويريد أساسًا أوضح.</span></article><article><b>03</b><span>مؤسس يريد توحيد شكل الموقع والسوشيال ميديا والعروض قبل التوسع.</span></article></div>
        <details className="offer-policy"><summary>ما الذي لا يشمله العرض؟</summary><p>لا يشمل استراتيجية براند متكاملة، بحث تسمية، كتابة نظام رسائل، دليل هوية تفصيلي، موشن جرافيك، تغليف منتجات، تصميم موقع، إدارة سوشيال ميديا أو عددًا مفتوحًا من التطبيقات والتعديلات.</p></details>
      </section>

      <section className="shell offer-faq" id="faq"><div className="offer-faq-head"><span className="section-label">[ أسئلة شائعة ]</span><h2>قبل ما نرسم أول خط.</h2></div><div className="offer-faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>

      <section className="shell offer-final-cta mini-identity-final">
        <span className="offer-kicker">هوية بصرية مصغرة · 7–10 أيام</span>
        <h2>خلي مشروعك يبدو كعلامة، مش مجموعة تصميمات منفصلة.</h2>
        <p>أرسل نوع النشاط والاسم والسوق المستهدف، ونبدأ بتحديد الاتجاه قبل تصميم الشعار.</p>
        <MiniIdentityWhatsApp className="button primary" label="ابدأ الهوية البصرية" />
        <div className="mini-identity-links"><Link href="/branding">خدمة البراند والهوية الكاملة</Link><Link href="/offers/brand-naming">لم تختر الاسم بعد؟</Link><Link href="/offers">العودة إلى العروض</Link></div>
      </section>
      <Footer />
    </main>
  );
}
