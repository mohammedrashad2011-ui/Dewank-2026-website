import "@/app/components/crm-contact-preview.css";
import { crmVisible } from "@/app/lib/crm/capture-mode";
import { CrmOfferActions } from "@/app/components/crm-offer-actions";
import { LandingConversionMotion } from "../../../components/landing-conversion-motion";
import type { Metadata } from "next";
import Link from "next/link";
import { OfferGuide, OfferMicro, OfferSample } from "../offer-extras";
import { offerExtras } from "../offer-extras-data";
import { InlineOfferPrice } from "../inline-offer-price";
import { Footer, Header } from "../../../components/site-shell";
import { createMetadata, organizationId, siteUrl, servedMarkets, serviceId } from "../../../lib/seo";
import { LandingOfferPrice, LandingOfferSticky, LandingOfferWhatsApp } from "./localized-landing-offer";
import { OfferClientProof } from "../offer-client-proof";
import "../offers-page.css";
import "../offer-trust.css";
import "../landing-offer.css";

export const metadata: Metadata = createMetadata({
  title: "تصميم صفحة هبوط Landing Page (لاندنج بيج) لإعلاناتك | ديوانك",
  description: "صفحة هبوط احترافية تعرض خدمتك بوضوح، تربط واتساب والنماذج والتحليلات، وتُسلّم خلال 7 إلى 10 أيام. خيار أساسي وخيار كامل مع دومين واستضافة لمدة عام.",
  path: "/offers/landing-page-package",
  keywords: ["صفحة هبوط", "صفحات هبوط", "لاندنج بيج", "تصميم صفحة هبوط", "سعر تصميم لاندنج بيج", "صفحة مبيعات", "تصميم موقع صفحة واحدة", "landing page السعودية"],
});

const deliverables = [
  ["صفحة هبوط مخصصة", "تصميم صفحة واحدة حول خدمتك وهدفك، وليست قالبًا عامًا مكررًا."],
  ["كتابة النص التسويقي", "ترتيب الرسالة والعناوين والمزايا والدعوة لاتخاذ الإجراء."],
  ["تصميم متوافق مع الموبايل", "تجربة سريعة وواضحة على الهاتف والكمبيوتر."],
  ["واتساب ونموذج بيانات", "زر تواصل مباشر ونموذج لجمع بيانات العملاء المحتملين."],
  ["التحليلات والتتبع", "ربط GA4 وGoogle Tag Manager وتتبع ضغطات واتساب والنماذج."],
  ["SEO أساسي", "إعداد العنوان والوصف والبنية الأساسية لمحركات البحث."],
];

const faqItems = [
  ["هل يشمل السعر الدومين والاستضافة؟", "الباقة الأساسية لا تشمل رسوم الدومين والاستضافة. يمكنك اختيار الباقة الكاملة لتشمل دومينًا واستضافة لمدة عام مع الربط والإعداد."],
  ["من يملك الدومين؟", "يُسجّل الدومين باسم العميل وبريده الإلكتروني، حتى تظل الملكية كاملة وواضحة من البداية."],
  ["ماذا لو كان لدي دومين واستضافة بالفعل؟", "نراجع الاستضافة أولًا، وإذا كانت مناسبة ننشر الصفحة ونربط الدومين وSSL ضمن الباقة الأساسية دون رسوم إعداد إضافية."],
  ["كم مدة التنفيذ؟", "يتم التسليم عادة خلال 7 إلى 10 أيام عمل بعد استلام المعلومات والمواد واعتماد الاتجاه."],
  ["هل تشمل الصفحة متجرًا أو بوابة دفع؟", "لا. العرض مخصص لصفحة هبوط واحدة بهدف التواصل أو الحجز، ولا يشمل متجرًا إلكترونيًا أو بوابة دفع أو تعدد اللغات."],
];

const allFaqs = [...faqItems, ...offerExtras.ar.landing.faqs];

export default function LandingPageOffer() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": serviceId("/offers/landing-page-package"),
    name: "تصميم صفحة هبوط احترافية",
    description: "صفحة هبوط مخصصة تشمل النص التسويقي والتصميم وربط واتساب والنماذج والتحليلات وSEO أساسي.",
    url: `${siteUrl}/offers/landing-page-package`,
    provider: { "@id": organizationId },
    areaServed: servedMarkets,
    offers: [
      { "@type": "Offer", name: "باقة صفحة الهبوط", price: "1490", priceCurrency: "SAR" },
      { "@type": "Offer", name: "الباقة الكاملة مع دومين واستضافة", price: "1890", priceCurrency: "SAR" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <main className="inner-page offers-page oe-page">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://dewank.com" }, { "@type": "ListItem", position: 2, name: "العروض", item: "https://dewank.com/offers" }, { "@type": "ListItem", position: 3, name: "تصميم صفحة هبوط", item: "https://dewank.com/offers/landing-page-package" }] }) }} />

      <section className="shell offer-detail-hero">
        <div>
          <div className="offer-availability"><span className="offer-spots-available"><i aria-hidden="true" /><strong>7–10</strong> أيام عمل</span></div>
          <h1>تصميم صفحة هبوط لإعلاناتك<br/><em>صفحة واحدة تحوّل الزائر إلى عميل</em></h1>
          <p>نكتب النص ونصمم الصفحة ونربط واتساب والنموذج والتحليلات، ليصل زائر إعلانك إلى طلب واحد واضح. التسليم خلال 7–10 أيام عمل.</p>
          <div className="oe-hero-actions">
            <p className="oe-price">الباقة الأساسية من <InlineOfferPrice offerKey="landing-page-package" /></p>
            <LandingOfferWhatsApp kind="base" id="order-hero" className="button primary offer-consultation-cta" label="ابدأ صفحتك" />
            <OfferMicro offer="landing" locale="ar" />
          </div>
          <Link className="offer-work-link" href="/work">شاهد أعمال ديوانك ودراسات الحالة ←</Link>
        </div>
        <aside id="order-panel" className="offer-price-panel">
          <small>الباقة الأساسية</small>
          <LandingOfferPrice kind="base" />
          <div className="offer-trust-inline"><span>صفحة مخصصة</span><span>50% لبدء العمل</span><span>تتبع كامل</span></div>
          <p>تشمل التصميم والكتابة والربط والتتبع. لا تشمل رسوم الدومين أو الاستضافة.</p>
          <LandingOfferWhatsApp kind="base" id="order-cta" className="button primary offer-consultation-cta" label="ابدأ صفحتك" />
        </aside>
      </section>

      <LandingConversionMotion locale="ar" />
      <OfferSample offer="landing" locale="ar" />

      <section className="shell offer-deliverables">
        <div><span className="section-label">ماذا تستلم؟</span><h2>كل ما تحتاجه لتبدأ البيع</h2><p>التسليم خلال 7–10 أيام عمل بعد استلام المعلومات واعتماد الاتجاه.</p></div>
        <div className="deliverable-list">{deliverables.map(([title, text]) => <article className="deliverable-item" key={title}><b>{title}</b><p>{text}</p></article>)}</div>
      </section>

      <section className="shell offer-fit">
        <span className="section-label">اختر ما يناسبك</span>
        <h2>صفحة فقط<br/>أو انطلاقة كاملة</h2>
        <div className="offer-fit-grid landing-package-grid">
          <article className="offer-fit-card good landing-package-card">
            <small>لمن لديه دومين واستضافة</small>
            <h3>باقة صفحة الهبوط</h3>
            <LandingOfferPrice kind="base" />
            <ul><li>تصميم وكتابة صفحة واحدة</li><li>ربط واتساب ونموذج البيانات</li><li>GA4 وGTM وتتبع التحويلات</li><li>SEO أساسي وSSL والنشر</li><li>جولتا تعديل</li></ul>
            <LandingOfferWhatsApp kind="base" className="button secondary offer-consultation-cta" label="ابدأ صفحتك" />
          </article>
          <article className="offer-fit-card limits landing-package-card featured">
            <small>لمن يبدأ من الصفر</small>
            <h3>الباقة الكاملة</h3>
            <LandingOfferPrice kind="full" />
            <ul><li>كل ما في الباقة الأساسية</li><li>دومين لمدة عام باسم العميل</li><li>استضافة لمدة عام</li><li>ربط الدومين وSSL والإعداد</li><li>بريد مهني واحد عند توفره</li></ul>
            <LandingOfferWhatsApp kind="full" className="button primary offer-consultation-cta" label="ابدأ بالباقة الكاملة" />
          </article>
        </div>
      </section>

      <section className="shell offer-confidence">
        <div className="offer-confidence-head"><span className="section-label">ملكية واضحة</span><h2>الدومين باسمك. والقرار في يدك</h2></div>
        <div className="offer-confidence-grid"><article><b>01</b><span>نسجّل الدومين باسم العميل وبريده الإلكتروني.</span></article><article><b>02</b><span>نجهز الاستضافة ونربط SSL وننشر الصفحة.</span></article><article><b>03</b><span>نسلم بيانات الدخول وتعليمات التجديد بوضوح.</span></article></div>
        <details className="offer-policy"><summary>ما الذي لا يشمله العرض؟</summary><p>لا يشمل متجرًا إلكترونيًا، بوابة دفع، تعدد اللغات، نظام حجز مخصص، كتابة صفحات إضافية، إدارة الإعلانات، أو رسوم تجديد الدومين والاستضافة بعد السنة الأولى.</p></details>
      </section>

      <OfferClientProof review="bithan" locale="ar" />

      <OfferGuide offer="landing" locale="ar" />

      <section className="shell offer-faq"><div className="offer-faq-head"><span className="section-label">أسئلة شائعة</span><h2>قبل أن تبدأ</h2></div><div className="offer-faq-list">{allFaqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>

      <section id="order-final" className="shell offer-final-cta">
        <span className="offer-kicker">صفحة مخصصة · تسليم خلال 7–10 أيام</span>
        <h2>اجعل خدمتك واضحة قبل أن تطلب من العميل شراءها</h2>
        <p>اختر الباقة المناسبة وسنسألك عن نشاطك وهدف الصفحة قبل بدء التنفيذ.</p>
        <CrmOfferActions enabled={crmVisible} locale="ar" offer="landing-page-package"><LandingOfferWhatsApp kind="base" className="button primary offer-consultation-cta" label="ابدأ صفحتك" /></CrmOfferActions>
        <div><Link href="/offers/small-business-website">تحتاج موقعًا من عدة صفحات؟</Link> · <Link href="/guides/website-design-cost-saudi-arabia">قارن أسعار تصميم المواقع</Link> · <Link href="/offers">← العودة إلى جميع العروض</Link></div>
      </section>
      <LandingOfferSticky watchIds={["order-hero", "order-cta", "order-final", "order-footer"]} />
      <div id="order-footer"><Footer /></div>
    </main>
  );
}
