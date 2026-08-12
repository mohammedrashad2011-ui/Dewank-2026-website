import type { Metadata } from "next";
import { Footer, Header } from "../../components/site-shell";
import { createMetadata, organizationId, siteUrl } from "../../lib/seo";
import { LocalizedOfferKicker, LocalizedOfferPrice, LocalizedWhatsAppLink } from "../localized-offer";
import OfferVisualProof from "./offer-visual-proof";
import "../offers-page.css";
import "../offer-trust.css";
import "./offer-visual-proof.css";
import "./sales-machine.css";
import "./sales-machine-arabic-polish.css";

export const metadata: Metadata = createMetadata({
  title: "إدارة محتوى السوشيال ميديا لمدة 30 يوم | باقة ديوانك",
  description: "باقة إدارة محتوى السوشيال ميديا لمدة 30 يومًا: 12 بوستًا و3 ستوري وريل واحد مع الأفكار والكابشنات وخطة النشر وتحسين البايو. ابدأ بدون عقد إدارة شهري.",
  path: "/offers/30-day-content-package",
  keywords: [
    "إدارة محتوى السوشيال ميديا",
    "إدارة حسابات التواصل الاجتماعي",
    "أسعار إدارة السوشيال ميديا",
    "باقة سوشيال ميديا",
    "صناعة محتوى سوشيال ميديا",
    "تصميم محتوى سوشيال ميديا",
    "إدارة محتوى انستقرام",
    "تكلفة إدارة حساب انستقرام",
  ],
});

const deliverables = [
  ["12 بوستًا مخصصًا", "تصميمات متناسقة مع نشاطك، وليست قوالب جاهزة مكررة."],
  ["3 تصاميم ستوري", "قصص موجهة للتفاعل أو عرض الخدمة أو تحريك الطلب."],
  ["ريل واحد", "مونتاج ريل قصير من الصور أو الفيديوهات التي ترسلها."],
  ["الأفكار والكابشنات", "فكرة واضحة ونص جاهز للنشر لكل قطعة محتوى."],
  ["خطة نشر 30 يومًا", "ترتيب مقترح للنشر حتى تعرف ماذا تنشر ومتى."],
  ["تحسين البايو وCTA", "مراجعة الرسالة الأساسية وطريقة توجيه الزائر للخطوة التالية."],
];

const painToOutcome = [
  ["كل مرة تحتار: وش ننشر؟", "نجهز لك أفكار الشهر والكابشنات قبل ما تبدأ دوامة البحث اليومية."],
  ["الحساب يطلع بشكل متقطع", "نبني اتجاهًا بصريًا متماسكًا يخلي المحتوى يظهر كجزء من علامة واحدة."],
  ["النشر يتوقف مع ضغط الشغل", "تستلم خطة 30 يومًا ومواد جاهزة بدل ما تعتمد على الوقت المتاح كل أسبوع."],
];

const afterDelivery = [
  ["بنك محتوى جاهز", "16 قطعة محتوى مخططة ومصممة بدل البدء من الصفر كل أسبوع."],
  ["رسالة أوضح", "محتوى يشرح خدمتك ويعطي الزائر سببًا يفهم به نشاطك بسرعة."],
  ["حضور أكثر ثباتًا", "اتجاه بصري متناسق يرفع الإحساس بالاحتراف والثقة."],
  ["خطة تبعدك عن العشوائية", "تعرف وش تنشر ومتى، مع مساحة كافية للتعديل حسب نشاطك."],
];

const faqItems = [
  ["هل هذه إدارة كاملة لحساب السوشيال ميديا؟", "لا. هذه باقة إنتاج وإدارة محتوى لمدة 30 يومًا: أفكار وتصميم وكابشنات وخطة نشر وتحسين البايو. لا تشمل النشر اليومي أو إدارة الرسائل أو الحملات الإعلانية."],
  ["كيف أعرف أن الباقة مناسبة لنشاطي قبل الدفع؟", "أرسل لنا نشاطك على واتساب أولًا. نراجع احتياجك ونوضح لك إذا كانت هذه الباقة مناسبة أو إذا كنت تحتاج نطاقًا مختلفًا. ما تحتاج تدفع قبل هذه الخطوة."],
  ["كم سعر إدارة المحتوى لمدة شهر؟", "السعر المعروض في الصفحة هو سعر الباقة الكامل حسب دولتك، ويشمل 12 بوستًا و3 ستوري وريل واحد مع الأفكار والكابشنات وخطة النشر."],
  ["كم مدة التسليم؟", "عادة خلال 10 إلى 14 يوم عمل بعد استلام المعلومات والمواد المطلوبة واعتماد الاتجاه."],
  ["هل يمكن الدفع على دفعتين؟", "نعم. 50% لبدء العمل و50% بعد اعتماد الاتجاه وقبل تسليم الملفات النهائية."],
  ["ماذا لو لم يناسبني الاتجاه؟", "نبدأ باتجاه واضح قبل التوسع في التنفيذ، ويشمل العرض جولتي تعديل. ويمكن استرداد المبلغ كاملًا قبل بدء التنفيذ؛ وبعد بدء العمل يُخصم فقط مقابل الجزء المنفذ."],
];

const showcaseSchemaItems = [
  ["تصميم محتوى لتطبيق ترفيهي", "نموذج تصميم سوشيال ميديا لتطبيق ترفيهي بإخراج بصري حديث.", "/showcase/content/nova-play.png"],
  ["تصميم محتوى لمقهى", "نموذج محتوى إنستقرام لمقهى عربي يعرض المنتج بأسلوب دافئ واحترافي.", "/showcase/content/bunnah.png"],
  ["تصميم محتوى للسفر والسياحة", "نموذج تصميم سوشيال ميديا لعلامة سفر وسياحة وتجربة حجز.", "/showcase/content/rihla.png"],
  ["تصميم إعلان لمطعم", "نموذج إعلان سوشيال ميديا لمطعم مع تكوين بصري قوي ودعوة واضحة للطلب.", "/showcase/content/qrmsha.png"],
  ["تصميم محتوى لمخبز", "نموذج تصميم محتوى إنستقرام لمخبز وكروسان بهوية مرحة وعرض منتج احترافي.", "/showcase/content/buno.png"],
  ["تصميم محتوى لخدمات احترافية", "نموذج تصميم سوشيال ميديا لخدمات واستراتيجية أعمال موجهة للسوق الخليجي.", "/showcase/content/madar.png"],
  ["تصميم محتوى لمنتجات عناية", "نموذج تصميم إعلان سوشيال ميديا لمنتجات عناية شخصية بهوية نظيفة وواضحة.", "/showcase/content/calm-root.png"],
];

export default function ContentOfferPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "إدارة محتوى السوشيال ميديا لمدة 30 يومًا",
    description: "باقة محتوى لمدة 30 يومًا تشمل 12 بوستًا و3 ستوري وريل واحد مع الأفكار والكابشنات وخطة النشر وتحسين البايو.",
    url: `${siteUrl}/offers/30-day-content-package`,
    provider: { "@id": organizationId },
    areaServed: ["SA", "BH", "AE", "KW", "QA", "OM"],
    offers: {
      "@type": "Offer",
      price: "790",
      priceCurrency: "SAR",
      availability: "https://schema.org/InStock",
      url: `${siteUrl}/offers/30-day-content-package`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  const showcaseSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "نماذج تصميم سوشيال ميديا من ديوانك",
    itemListElement: showcaseSchemaItems.map(([name, description, image], index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name,
        description,
        image: `${siteUrl}${image}`,
        creator: { "@id": organizationId },
      },
    })),
  };

  return (
    <main className="inner-page offers-page sales-machine-page">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(showcaseSchema) }} />

      <section className="shell offer-detail-hero sales-hero">
        <div className="sales-hero-copy">
          <span className="sales-eyebrow">[ باقة إدارة محتوى السوشيال ميديا ]</span>
          <h1>إدارة محتوى السوشيال ميديا لمدة 30 يومًا.<br/><em>جاهز قبل ما تحتار: وش ننشر اليوم؟</em></h1>
          <p className="sales-hero-lead">نحوّل نشاطك إلى 16 قطعة محتوى جاهزة للنشر: أفكار، تصميم، كابشنات وخطة 30 يومًا. حل عملي إذا كان احتياجك الأساسي هو المحتوى، بدون عقد إدارة شهري طويل.</p>
          <div className="sales-proof-strip" aria-label="ملخص الباقة">
            <span>12 بوست</span><span>3 ستوري</span><span>1 ريل</span><span>خطة 30 يومًا</span>
          </div>
          <p className="sales-fit-note"><strong>مهم:</strong> إذا كنت تبحث عن نشر يومي أو إدارة رسائل أو حملات إعلانية، فهذه ليست الباقة المناسبة. نوضح لك ذلك قبل الدفع.</p>
        </div>

        <aside className="offer-price-panel sales-price-panel">
          <small>سعر الباقة الكامل</small>
          <LocalizedOfferPrice />
          <p className="sales-price-promise">ابدأ بـ50% فقط بعد ما نراجع نشاطك ونتأكد أن الباقة مناسبة لك.</p>
          <div className="offer-trust-inline" aria-label="مزايا الأمان والثقة">
            <span>لا عقد شهري</span><span>اتجاه معتمد أولًا</span><span>رابط دفع رسمي</span>
          </div>
          <LocalizedWhatsAppLink className="button primary sales-primary-cta" label="تأكد أن الباقة مناسبة لنشاطك" />
          <small className="sales-cta-note">واتساب مباشر · ما تحتاج تدفع قبل مراجعة نشاطك</small>
        </aside>
      </section>

      <OfferVisualProof />

      <section className="shell sales-problem-solution" aria-labelledby="sales-problem-title">
        <div className="sales-section-head">
          <span className="section-label">[ إذا هذا يصير عندك ]</span>
          <h2 id="sales-problem-title">المشكلة مو في خدمتك.<br/>المشكلة إن حسابك ما يوضح قيمتها باستمرار.</h2>
          <p>الباقة مصممة لمعالجة 3 أسباب تخلي الحساب يتوقف أو يظهر بصورة أقل من قيمة مشروعك.</p>
        </div>
        <div className="sales-three-grid">
          {painToOutcome.map(([title, text], index) => (
            <article className="sales-pain-card" key={title}>
              <b>0{index + 1}</b>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell sales-outcomes" aria-labelledby="sales-outcomes-title">
        <div className="sales-section-head compact">
          <span className="section-label">[ القيمة اللي تحصل عليها ]</span>
          <h2 id="sales-outcomes-title">مو 16 تصميمًا وبس.<br/>أنت تحصل على شهر جاهز للحضور.</h2>
        </div>
        <div className="sales-outcome-grid">
          {afterDelivery.map(([title, text]) => (
            <article key={title}><span>✓</span><div><h3>{title}</h3><p>{text}</p></div></article>
          ))}
        </div>
        <div className="sales-mid-cta">
          <p>إذا هذا اللي ناقص حسابك، خلّنا نتأكد من ملاءمة الباقة قبل ما تدفع أي شيء.</p>
          <LocalizedWhatsAppLink className="button primary" label="راجع الباقة معي على واتساب" />
        </div>
      </section>

      <section className="shell offer-deliverables sales-deliverables">
        <div>
          <span className="section-label">[ ماذا تستلم؟ ]</span>
          <h2>كل قطعة لها وظيفة.<br/>مو مجرد تعبئة للجدول.</h2>
          <p>التسليم عادة خلال 10–14 يوم عمل بعد استلام المعلومات والمواد المطلوبة واعتماد الاتجاه.</p>
        </div>
        <div className="deliverable-list">
          {deliverables.map(([title, text]) => (
            <article className="deliverable-item" key={title}><b>{title}</b><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="shell sales-risk-reversal" aria-labelledby="sales-risk-title">
        <div>
          <span className="section-label">[ قرار أسهل ]</span>
          <h2 id="sales-risk-title">ما نطلب منك تثق بوعود كبيرة.</h2>
          <p>نقلل قدر الإمكان من مخاطرة القرار: نراجع نشاطك أولًا، نحدد الاتجاه، وتبدأ بنصف قيمة الباقة فقط.</p>
        </div>
        <div className="sales-risk-grid">
          <article><strong>01</strong><h3>نتأكد من الملاءمة</h3><p>إذا احتياجك خارج نطاق الباقة، نقول لك قبل الدفع.</p></article>
          <article><strong>02</strong><h3>تعتمد الاتجاه</h3><p>ما نتوسع في التنفيذ قبل ما يكون الاتجاه واضحًا ومناسبًا لك.</p></article>
          <article><strong>03</strong><h3>50% للبدء</h3><p>الدفعة الثانية بعد اعتماد الاتجاه وقبل تسليم الملفات النهائية.</p></article>
          <article><strong>04</strong><h3>سياسة استرجاع واضحة</h3><p>استرداد كامل قبل بدء التنفيذ، وبعد البدء يُخصم فقط مقابل الجزء المنفذ.</p></article>
        </div>
      </section>

      <section className="shell offer-fit sales-fit">
        <span className="section-label">[ قبل الحجز ]</span>
        <h2>خلّ القرار واضح من البداية.</h2>
        <div className="offer-fit-grid">
          <article className="offer-fit-card good">
            <h3>هذه الباقة مناسبة لك إذا</h3>
            <ul>
              <li>لديك مشروع أو خدمة واضحة وتحتاج حضورًا أكثر احترافية.</li>
              <li>احتياجك الأساسي هو الأفكار والتصميم والكابشنات واستمرارية المحتوى.</li>
              <li>تبي شهرًا من المحتوى قبل الالتزام بإدارة شهرية كاملة.</li>
              <li>يمكنك تزويدنا بصور أو فيديوهات مناسبة للريل عند الحاجة.</li>
            </ul>
          </article>
          <article className="offer-fit-card limits">
            <h3>هذه ليست إدارة حساب كاملة</h3>
            <ul>
              <li>لا تشمل النشر اليومي أو إدارة الرسائل والتعليقات.</li>
              <li>لا تشمل الحملات الإعلانية أو ميزانية الإعلان.</li>
              <li>لا تشمل التصوير أو بناء هوية بصرية جديدة.</li>
              <li>تشمل منصة واحدة ولغة واحدة وجولتي تعديل على الاتجاه المتفق عليه.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="shell offer-confidence sales-confidence" aria-labelledby="offer-confidence-title">
        <div className="offer-confidence-head">
          <span className="section-label">[ 3 خطوات فقط ]</span>
          <h2 id="offer-confidence-title">من الرسالة الأولى إلى بداية التنفيذ.</h2>
        </div>
        <div className="offer-confidence-grid">
          <article><b>01</b><span>ترسل نوع نشاطك وهدفك على واتساب.</span></article>
          <article><b>02</b><span>نتأكد من ملاءمة الباقة ونرسل رابط الدفع الرسمي.</span></article>
          <article><b>03</b><span>نبدأ بعد 50% واعتماد الاتجاه الأولي.</span></article>
        </div>
      </section>

      <section className="shell offer-faq sales-faq" aria-labelledby="offer-faq-title">
        <div className="offer-faq-head">
          <span className="section-label">[ أسئلة قبل القرار ]</span>
          <h2 id="offer-faq-title">كل اللي غالبًا تفكر فيه قبل القرار.</h2>
        </div>
        <div className="offer-faq-list">
          {faqItems.map(([question, answer]) => (
            <details key={question}><summary>{question}</summary><p>{answer}</p></details>
          ))}
        </div>
      </section>

      <section className="shell offer-final-cta sales-final-cta">
        <LocalizedOfferKicker />
        <h2>خلّ الشهر الجاي يبدأ بمحتوى جاهز، مو مجرد نية للنشر.</h2>
        <p>أرسل لنا نوع نشاطك. نراجع الملاءمة أولًا، وإذا الباقة مناسبة نوضح المطلوب ونبدأ بخطوات بسيطة.</p>
        <LocalizedWhatsAppLink className="button primary" label="أرسل نشاطي وأتأكد من الملاءمة" />
        <small>لا التزام قبل المراجعة · 50% فقط عند بدء التنفيذ</small>
      </section>

      <div className="sales-mobile-sticky" aria-label="تواصل سريع عبر واتساب">
        <LocalizedWhatsAppLink className="button primary" label="اسأل عن باقة 30 يوم" />
      </div>

      <Footer />
    </main>
  );
}