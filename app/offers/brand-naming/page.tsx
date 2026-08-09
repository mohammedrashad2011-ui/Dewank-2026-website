import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../components/site-shell";
import { createMetadata, organizationId, siteUrl } from "../../lib/seo";
import { BrandNamingOfferPrice, BrandNamingWhatsApp } from "./localized-brand-naming-offer";
import "../offers-page.css";
import "../offer-trust.css";
import "./brand-naming-offer.css";

const title = "اختيار اسم تجاري + توجه أولي للعلامة | باقة جاهزة";
const description = "باقة اختيار اسم تجاري للعلامات الجديدة تشمل 10–15 اسمًا مدروسًا، فحصًا لغويًا وثقافيًا، توفر الدومين، أفضل 3 ترشيحات وتوجهًا أوليًا للعلامة. تبدأ من 490 ريال.";

export const metadata: Metadata = createMetadata({
  title: `${title} | ديوانك`,
  description,
  path: "/offers/brand-naming",
  keywords: ["اختيار اسم تجاري", "اقتراح اسم تجاري", "اسم براند", "تسمية علامة تجارية", "Brand Naming السعودية", "Brand Direction", "فحص اسم تجاري", "اختيار اسم شركة"],
});

const deliverables = [
  ["10–15 اسمًا مدروسًا", "أسماء مبنية على نشاطك والجمهور والسوق وطموح التوسع، وليست قائمة كلمات عشوائية."],
  ["المعنى ومنطق الاختيار", "شرح فكرة كل اسم وطريقة نطقه ولماذا يمكن أن يعمل تجاريًا مع مشروعك."],
  ["فحص لغوي وثقافي", "مراجعة أولية للمعنى والنطق والانطباعات المحتملة بالعربية والإنجليزية حسب السوق."],
  ["فحص مبدئي للتشابه", "بحث أولي عن أسماء وعلامات مشابهة لتقليل احتمالات التعارض، دون ضمان التسجيل الرسمي."],
  ["الدومين والحسابات", "التحقق وقت البحث من توفر نطاقات وأسماء مستخدمين مناسبة واقتراح بدائل عملية عند الحاجة."],
  ["أفضل 3 ترشيحات", "قائمة نهائية مختصرة تضم أفضل 3 أسماء، مع مقارنة حسب التميز والوضوح وقابلية التوسع والاستخدام."],
  ["توجه أولي للعلامة", "توجه مبدئي للشخصية ونبرة التواصل والمزاج البصري والكلمات المفتاحية التي تناسب الاسم المختار."],
  ["جولة تطوير واحدة", "تطوير اتجاه واحد بناءً على ملاحظات محددة إذا لم يُحسم الاختيار من الجولة الأولى."],
];

const faqs = [
  ["كم سعر اختيار اسم تجاري؟", "الباقة الجاهزة تبدأ من 490 ريال سعودي. السعر يشمل البحث والتسمية والقائمة النهائية المختصرة والتوجه الأولي للعلامة، ولا يشمل الرسوم الحكومية أو تسجيل العلامة."],
  ["كم اسمًا سأستلم؟", "تستلم عادة 10–15 اسمًا مدروسًا، ثم نرشح أفضل 3 خيارات بناءً على معايير واضحة تساعدك على اتخاذ القرار."],
  ["ما المقصود بالتوجه الأولي للعلامة؟", "هو تصور مبدئي للعلامة بعد اختيار الاسم، يحدد الشخصية ونبرة التواصل والمزاج البصري والكلمات التي يجب أن تعكسها الهوية لاحقًا. لا يشمل تصميم شعار أو هوية بصرية كاملة."],
  ["هل تضمنون قبول الاسم أو تسجيل العلامة؟", "لا. نقدم فحصًا أوليًا للتشابه والمعنى والتوفر لتقليل المخاطر، لكن قرار القبول والتسجيل النهائي للجهة الرسمية المختصة."],
  ["هل تشمل الخدمة حجز الدومين؟", "تشمل التحقق من توفر الدومين وقت البحث. شراء الدومين ورسومه ليست ضمن الباقة، لأن التوفر قد يتغير حتى لحظة الحجز."],
  ["كم مدة التسليم؟", "التسليم عادة خلال 3–5 أيام عمل بعد استلام معلومات النشاط والسوق والجمهور والاتجاهات المفضلة."],
];

export default function BrandNamingOfferPage() {
  const url = `${siteUrl}/offers/brand-naming`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "باقة اختيار اسم تجاري + توجه أولي للعلامة",
        description,
        serviceType: ["Brand Naming", "Brand Direction", "Domain Availability Research"],
        provider: { "@id": organizationId },
        areaServed: ["SA", "BH", "AE", "KW", "QA", "OM"],
        offers: { "@type": "Offer", price: "490", priceCurrency: "SAR", availability: "https://schema.org/InStock", url },
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
          { "@type": "ListItem", position: 3, name: "اختيار اسم تجاري", item: url },
        ],
      },
    ],
  };

  return (
    <main className="inner-page offers-page brand-naming-offer-page">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="shell offer-detail-hero brand-naming-hero">
        <div>
          <div className="offer-availability"><span className="offer-spots-available"><i aria-hidden="true" /><strong>3–5</strong> أيام عمل</span></div>
          <h1>اسم لا يملأ خانة.<br/><em>بل يفتح مساحة للنمو.</em></h1>
          <p>نطوّر لك اسمًا تجاريًا يمكن فهمه وتذكره واستخدامه، ثم نمنحك توجهًا أوليًا للعلامة حتى لا تبدأ الهوية من فراغ.</p>
          <div className="brand-naming-answer" aria-label="الإجابة المختصرة">
            <b>الإجابة المختصرة</b>
            <span>تحصل على 10–15 اسمًا مدروسًا، أفضل 3 ترشيحات، فحصًا مبدئيًا للمعنى والتشابه والدومين، وتوجهًا أوليًا للعلامة للاسم المختار.</span>
          </div>
        </div>
        <aside className="offer-price-panel brand-naming-price-panel">
          <small>الباقة الجاهزة</small>
          <BrandNamingOfferPrice />
          <div className="offer-trust-inline"><span>10–15 اسمًا</span><span>أفضل 3 ترشيحات</span><span>توجه أولي للعلامة</span></div>
          <p>لا تشمل الباقة تسجيل العلامة أو شراء الدومين أو تصميم الهوية البصرية الكاملة.</p>
          <BrandNamingWhatsApp className="button primary" label="ابدأ اختيار الاسم" />
        </aside>
      </section>

      <section className="shell brand-naming-proof">
        <div className="brand-naming-proof-copy">
          <span className="section-label">[ كيف نقرر؟ ]</span>
          <h2>الاسم الجيد يمر عبر أكثر من ذوق.</h2>
          <p>نقارن الخيارات وفق التميز، سهولة النطق، قابلية التذكر، ملاءمة السوق، المرونة المستقبلية، والتوفر الرقمي. الهدف ليس اسمًا يعجبنا فقط، بل اسمًا يمكن بناء علامة حوله.</p>
        </div>
        <div className="brand-direction-board" aria-label="نموذج توضيحي لاتجاه العلامة">
          <div className="brand-direction-top"><span>نموذج التوجه الأولي للعلامة</span><small>بعد اختيار الاسم</small></div>
          <div className="brand-direction-name">NOVA<span>FIELD</span></div>
          <div className="brand-direction-tags"><span>واضح</span><span>واثق</span><span>حديث</span><span>قابل للتوسع</span></div>
          <div className="brand-direction-grid"><article><small>نبرة التواصل</small><b>مباشر · ذكي · هادئ</b></article><article><small>المزاج البصري</small><b>بسيط · تحريري · جريء</b></article><article><small>التموضع</small><b>علامة مرنة تنمو مع النشاط</b></article></div>
        </div>
      </section>

      <section className="shell offer-deliverables brand-naming-deliverables">
        <div><span className="section-label">[ ماذا تستلم؟ ]</span><h2>من الفكرة.<br/>إلى قرار يمكنك الدفاع عنه.</h2><p>كل عنصر مصمم لتقليل التخمين قبل أن تبدأ في الشعار والهوية والإطلاق.</p></div>
        <div className="deliverable-list">{deliverables.map(([item, text]) => <article className="deliverable-item" key={item}><b>{item}</b><p>{text}</p></article>)}</div>
      </section>

      <section className="shell brand-naming-process">
        <div className="brand-naming-process-head"><span className="section-label">[ 3 خطوات ]</span><h2>ملخص صغير. بحث عميق. قرار واضح.</h2></div>
        <div className="brand-naming-process-grid">
          <article><b>01</b><h3>نفهم المشروع</h3><p>النشاط، السوق، الجمهور، المنافسون، طبيعة الاسم المطلوبة وطموح التوسع.</p></article>
          <article><b>02</b><h3>نبحث ونبني</h3><p>ننشئ اتجاهات تسمية مختلفة ثم نفلترها بالمعنى والنطق والتشابه والتوفر الرقمي.</p></article>
          <article><b>03</b><h3>نحسم الاتجاه</h3><p>تستلم قائمة الأسماء، ثم أفضل 3 ترشيحات، وبعد اختيار الاسم نجهز لك التوجه الأولي للعلامة.</p></article>
        </div>
      </section>

      <section className="shell offer-confidence brand-naming-confidence">
        <div className="offer-confidence-head"><span className="section-label">[ حدود واضحة ]</span><h2>البحث يقلل المخاطر. لا يلغيها.</h2></div>
        <div className="offer-confidence-grid"><article><b>01</b><span>الفحص القانوني الذي نقدمه مبدئي وليس رأيًا قانونيًا أو ضمان تسجيل.</span></article><article><b>02</b><span>توفر الدومين والحسابات يُراجع وقت البحث وقد يتغير قبل الحجز.</span></article><article><b>03</b><span>تصميم الشعار والهوية البصرية الكاملة خدمة منفصلة بعد اعتماد الاسم.</span></article></div>
        <details className="offer-policy"><summary>ما الذي لا يشمله العرض؟</summary><p>لا يشمل رسوم الجهات الرسمية، تسجيل العلامة، شراء الدومين، تصميم الشعار أو الهوية الكاملة، أو بحثًا قانونيًا متخصصًا في عدة فئات وأسواق.</p></details>
      </section>

      <section className="shell offer-faq" id="faq"><div className="offer-faq-head"><span className="section-label">[ أسئلة شائعة ]</span><h2>قبل ما تختار اسمك.</h2></div><div className="offer-faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>

      <section className="shell offer-final-cta brand-naming-final">
        <span className="offer-kicker">اختيار اسم تجاري · توجه أولي للعلامة</span>
        <h2>قبل ما تصمم الشعار، اختر اسمًا يستحق أن يوضع عليه.</h2>
        <p>أرسل نوع النشاط والسوق المستهدف، وسنبدأ بملخص قصير عن مشروعك قبل البحث.</p>
        <BrandNamingWhatsApp className="button primary" label="ابدأ اختيار اسم علامتك" />
        <div className="brand-naming-links"><Link href="/services/brand-naming">تفاصيل خدمة التسمية</Link><Link href="/guides/how-to-choose-brand-name-saudi-arabia">دليل اختيار الاسم التجاري</Link><Link href="/offers">العودة إلى العروض</Link></div>
      </section>
      <Footer />
    </main>
  );
}
