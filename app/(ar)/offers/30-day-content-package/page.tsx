import "@/app/components/crm-contact-preview.css";
import { crmVisible } from "@/app/lib/crm/capture-mode";
import { CrmOfferContactLink } from "@/app/components/crm-offer-contact-link";
import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../../components/site-shell";
import { createMetadata, organizationId, siteUrl, servedMarkets, serviceId } from "../../../lib/seo";
import { ContentOfferSticky, LocalizedInlinePrice, LocalizedOfferKicker, LocalizedOfferPrice, LocalizedWhatsAppLink } from "../localized-offer";
import OfferVisualProof from "./offer-visual-proof";
import ContentSystemStage from "./content-system-stage";
import { ContentSamplePlan, ContentSectors, contentExtraFaqs } from "./content-extras";
import "../offers-page.css";
import "../offer-trust.css";
import "./offer-visual-proof.css";
import "./sales-machine.css";
import "./sales-machine-arabic-polish.css";
import "./content-system-stage.css";
import "./content-extras.css";

export const metadata: Metadata = createMetadata({
  title: "صناعة محتوى وتصاميم سوشيال ميديا 30 يومًا | ديوانك",
  description: "باقة محتوى محددة المخرجات لمدة 30 يومًا: 12 بوستًا و3 ستوري وريل واحد مع الأفكار والكابشنات وخطة النشر، وليست إدارة حساب شهرية.",
  path: "/offers/30-day-content-package",
  keywords: [
    "باقة محتوى سوشيال ميديا",
    "سعر صناعة المحتوى",
    "أسعار صناعة المحتوى في السعودية",
    "إدارة محتوى السوشيال ميديا",
    "أسعار إدارة السوشيال ميديا",
    "باقة محتوى انستقرام",
    "تصميم محتوى سوشيال ميديا",
    "إدارة محتوى انستقرام",
    "تكلفة إدارة حساب انستقرام",
  ],
});

const deliverables = [
  ["تصميم 12 بوستًا", "تصاميم سوشيال ميديا متناسقة مع نشاطك، وليست قوالب جاهزة مكررة."],
  ["3 تصاميم ستوري", "قصص موجهة للتفاعل أو عرض الخدمة أو تحريك الطلب."],
  ["ريل واحد", "مونتاج ريل قصير من الصور أو الفيديوهات التي ترسلها."],
  ["الأفكار وكتابة المحتوى", "فكرة واضحة ونص جاهز للنشر لكل قطعة محتوى."],
  ["خطة نشر 30 يومًا", "ترتيب مقترح للنشر حتى تعرف ماذا تنشر ومتى."],
  ["تحسين البايو وCTA", "مراجعة الرسالة الأساسية وطريقة توجيه الزائر للخطوة التالية."],
];

const painToOutcome = [
  ["تحتار كل مرة ماذا تنشر", "نجهز أفكار الشهر والكابشنات قبل أن تبدأ دوامة البحث اليومية."],
  ["حسابك يظهر بشكل متقطع", "نبني اتجاهًا بصريًا متماسكًا يجعل المحتوى يظهر كجزء من علامة واحدة."],
  ["النشر يتوقف مع ضغط العمل", "تستلم خطة 30 يومًا و16 قطعة جاهزة بدل الاعتماد على الوقت المتاح كل أسبوع."],
];

const faqItems = [
  ["هل هذه إدارة كاملة لحساب السوشيال ميديا؟", "لا. هذه باقة إنتاج محتوى لمدة 30 يومًا: أفكار وتصميم وكابشنات وخطة نشر وتحسين البايو. لا تشمل النشر اليومي أو إدارة الرسائل أو الحملات الإعلانية."],
  ["ما الفرق بين هذه الباقة والإدارة الشهرية؟", "هذه الباقة مناسبة إذا كان احتياجك الأساسي هو تجهيز المحتوى بنطاق وسعر واضحين. الإدارة الشهرية قد تشمل النشر المستمر والمتابعة والتقارير وإدارة المجتمع حسب الاتفاق، ولذلك يكون نطاقها وسعرها مختلفين."],
  ["كيف أعرف أن الباقة مناسبة لنشاطي؟", "احصل على استشارة مبدئية مجانية عبر واتساب. نراجع احتياجك ونوضح لك إذا كانت هذه الباقة مناسبة أو إذا كنت تحتاج إدارة شهرية أو نطاقًا مختلفًا."],
  ["كم سعر إدارة المحتوى لمدة شهر؟", "السعر المعروض في الصفحة هو سعر الباقة الكامل حسب دولتك، ويشمل 12 بوستًا و3 ستوري وريل واحد مع الأفكار والكابشنات وخطة النشر. ولأسعار الإدارة الشهرية الأوسع راجع دليل أسعار إدارة السوشيال ميديا."],
  ["كم مدة التسليم؟", "عادة خلال 10 إلى 14 يوم عمل بعد استلام المعلومات والمواد المطلوبة واعتماد الاتجاه."],
  ["ماذا لو لم يناسبني الاتجاه؟", "نبدأ باتجاه واضح قبل التوسع في التنفيذ، ويشمل العرض جولتي تعديل على التصميمات ضمن نطاق الباقة."],
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

const allFaqs = [...faqItems, ...contentExtraFaqs.ar];

export default function ContentOfferPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": serviceId("/offers/30-day-content-package"),
    name: "باقة صناعة محتوى السوشيال ميديا لمدة 30 يومًا",
    description: "باقة محتوى محددة المخرجات لمدة 30 يومًا تشمل 12 بوستًا و3 ستوري وريل واحد مع الأفكار والكابشنات وخطة النشر وتحسين البايو، وليست إدارة حساب شهرية كاملة.",
    url: `${siteUrl}/offers/30-day-content-package`,
    provider: { "@id": organizationId },
    areaServed: servedMarkets,
    offers: { "@type": "Offer", price: "790", priceCurrency: "SAR", availability: "https://schema.org/InStock", url: `${siteUrl}/offers/30-day-content-package` },
  };

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: allFaqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };
  const showcaseSchema = { "@context": "https://schema.org", "@type": "ItemList", name: "نماذج تصميم سوشيال ميديا من ديوانك", itemListElement: showcaseSchemaItems.map(([name, description, image], index) => ({ "@type": "ListItem", position: index + 1, item: { "@type": "CreativeWork", name, description, image: `${siteUrl}${image}`, creator: { "@id": organizationId } } })) };

  return (
    <main className="inner-page offers-page sales-machine-page">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(showcaseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://dewank.com" }, { "@type": "ListItem", position: 2, name: "العروض", item: "https://dewank.com/offers" }, { "@type": "ListItem", position: 3, name: "باقة محتوى 30 يوم", item: "https://dewank.com/offers/30-day-content-package" }] }) }} />

      <section className="shell offer-detail-hero sales-hero">
        <div className="sales-hero-copy">
          <span className="sales-eyebrow">باقة صناعة محتوى السوشيال ميديا</span>
          <h1>صناعة محتوى سوشيال ميديا لشهر كامل<br/><em>بسعر ونطاق واضحين</em></h1>
          <p className="sales-hero-lead">تستلم 16 قطعة محتوى جاهزة للنشر مع الأفكار والكابشنات وخطة 30 يومًا، بدون عقد إدارة شهري. الباقة كاملة بـ <span className="cp-inline-price"><LocalizedInlinePrice /></span>.</p>
          <div className="cp-hero-actions">
            <LocalizedWhatsAppLink id="order-cta" className="button primary offer-consultation-cta" label="ابدأ محتوى شهرك" />
            {crmVisible && <CrmOfferContactLink locale="ar" offer="30-day-content-package" />}
            <p className="cp-microcopy">بدون أي التزام. أرسل نوع نشاطك، ونؤكد لك أولًا أن الباقة مناسبة.</p>
          </div>
          <div className="sales-proof-strip" aria-label="ملخص الباقة"><span>12 بوست</span><span>3 ستوري</span><span>1 ريل</span><span>خطة 30 يومًا</span></div>
        </div>

        <aside className="offer-price-panel sales-price-panel">
          <small>سعر الباقة الكامل</small><LocalizedOfferPrice />
          <p className="sales-price-promise">نراجع نشاطك أولًا ونوضح لك مدى مناسبة الباقة والخطوات التالية.</p>
          <div className="offer-trust-inline" aria-label="مزايا الأمان والثقة"><span>لا عقد شهري</span><span>اتجاه معتمد أولًا</span><span>جولتا تعديل</span></div>
          <p className="cp-assure">تعتمد الاتجاه قبل التنفيذ، وجولتا تعديل على التصميمات ضمن السعر.</p>
          <LocalizedWhatsAppLink id="order-panel" className="button primary sales-primary-cta offer-consultation-cta" label="ابدأ محتوى شهرك" />
          <small className="sales-cta-note">واتساب مباشر · استشارة مبدئية مجانية</small>
        </aside>

        <ContentSystemStage locale="ar" />
      </section>

      <OfferVisualProof />

      <section className="shell sales-problem-solution" aria-labelledby="sales-problem-title">
        <div className="sales-section-head"><span className="section-label">إذا كان هذا يحدث معك</span><h2 id="sales-problem-title">خدمتك جيدة، وحسابك لا يوضح ذلك باستمرار</h2></div>
        <div className="sales-three-grid">{painToOutcome.map(([title, text], index) => <article className="sales-pain-card" key={title}><b>0{index + 1}</b><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <ContentSamplePlan locale="ar" />

      <section className="shell offer-deliverables sales-deliverables">
        <div><span className="section-label">ماذا تستلم؟</span><h2>كل قطعة لها وظيفة<br/>داخل خطة الشهر</h2><p>التسليم عادة خلال 10–14 يوم عمل بعد استلام المعلومات والمواد المطلوبة واعتماد الاتجاه.</p></div>
        <div className="deliverable-list">{deliverables.map(([title, text]) => <article className="deliverable-item" key={title}><b>{title}</b><p>{text}</p></article>)}</div>
      </section>

      <section className="shell offer-fit sales-fit">
        <span className="section-label">قبل الحجز</span><h2>هل تحتاج محتوى فقط، أم إدارة كاملة؟</h2>
        <div className="offer-fit-grid">
          <article className="offer-fit-card good"><h3>هذه الباقة مناسبة لك إذا</h3><ul><li>لديك مشروع أو خدمة واضحة وتحتاج حضورًا أكثر احترافية.</li><li>احتياجك الأساسي هو الأفكار والتصميم والكابشنات واستمرارية المحتوى.</li><li>تريد شهرًا من المحتوى قبل الالتزام بإدارة شهرية كاملة.</li><li>يمكنك تزويدنا بصور أو فيديوهات مناسبة للريل عند الحاجة.</li></ul></article>
          <article className="offer-fit-card limits"><h3>اختر الإدارة الشهرية إذا</h3><ul><li>تحتاج نشرًا وجدولة مستمرة على الحساب.</li><li>تحتاج متابعة وتعليقات ورسائل أو إدارة مجتمع.</li><li>تحتاج تقارير وتحسينًا شهريًا مستمرًا.</li><li>تحتاج نطاقًا متعدد المنصات أو فريقًا أكبر.</li></ul><p><Link href="/services/social-media-content">استعرض خدمة الإدارة الكاملة</Link></p></article>
        </div>
      </section>

      <section className="shell offer-confidence sales-confidence" aria-labelledby="offer-confidence-title">
        <div className="offer-confidence-head"><span className="section-label">4 خطوات</span><h2 id="offer-confidence-title">من الرسالة الأولى إلى بداية التنفيذ</h2></div>
        <div className="offer-confidence-grid"><article><b>01</b><span>ترسل نوع نشاطك وهدفك على واتساب.</span></article><article><b>02</b><span>نراجع احتياجك، ونخبرك من البداية إذا كان خارج نطاق الباقة.</span></article><article><b>03</b><span>تعتمد الاتجاه ومواعيد التسليم قبل أن نتوسع في التنفيذ.</span></article><article><b>04</b><span>تستلم المحتوى، ومعه جولتا تعديل على التصميمات ضمن النطاق.</span></article></div>
      </section>

      <ContentSectors locale="ar" />

      <section className="shell offer-faq sales-faq" aria-labelledby="offer-faq-title">
        <div className="offer-faq-head"><span className="section-label">أسئلة قبل القرار</span><h2 id="offer-faq-title">السعر والنطاق قبل أن تبدأ</h2></div>
        <div className="offer-faq-list">{allFaqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
        <p><Link href="/guides/social-media-management-cost-saudi-arabia">قارن أسعار إدارة السوشيال ميديا والإدارة الشهرية</Link></p>
      </section>

      <section id="order-final" className="shell offer-final-cta sales-final-cta">
        <LocalizedOfferKicker /><h2>ابدأ شهرك القادم بمحتوى جاهز</h2><p>أرسل لنا نوع نشاطك. نراجع هل باقة 30 يومًا هي الأنسب، أو تحتاج إدارة شهرية أوسع، ثم نوضح لك الخطوة التالية.</p><LocalizedWhatsAppLink className="button primary offer-consultation-cta" label="ابدأ محتوى شهرك" />
      </section>

      <ContentOfferSticky watchIds={["order-cta", "order-panel", "order-final", "order-footer"]} />
      <div id="order-footer"><Footer /></div>
    </main>
  );
}
