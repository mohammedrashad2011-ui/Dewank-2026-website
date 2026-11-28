import "@/app/components/crm-contact-preview.css";
import { crmVisible } from "@/app/lib/crm/capture-mode";
import { CrmOfferActions } from "@/app/components/crm-offer-actions";
import type { Metadata } from "next";
import Link from "next/link";
import { OfferGuide, OfferMicro, OfferSample } from "../offer-extras";
import { offerExtras } from "../offer-extras-data";
import { InlineOfferPrice } from "../inline-offer-price";
import { Footer, Header } from "../../../components/site-shell";
import { createMetadata, organizationId, siteUrl, servedMarkets } from "../../../lib/seo";
import { resolveCurrentOfferPrice } from "../offer-pricing";
import { OfferClientProof } from "../offer-client-proof";
import { NameIdentityPrice, NameIdentitySaving, NameIdentitySticky, NameIdentityWhatsApp } from "./localized-name-identity";
import "../offers-page.css";
import "../offer-trust.css";

const title = "اسم تجاري وتصميم شعار وهوية تجارية في باقة واحدة | ديوانك";
const description = "باقة تجمع اختيار اسم تجاري وتصميم هوية بصرية أساسية لمشروعك: 10–15 اسمًا مدروسًا وفحص مبدئي وأفضل 3 ترشيحات، ثم شعار وألوان وخطوط و3 تطبيقات عملية، بسعر أقل من طلب الباقتين منفصلتين.";

export const metadata: Metadata = createMetadata({
  title,
  description,
  path: "/offers/name-identity",
  keywords: ["اسم تجاري وشعار", "تصميم هوية تجارية", "اسم تجاري وهوية بصرية", "تسمية وتصميم هوية", "اختيار اسم تجاري وتصميم شعار", "باقة اسم وشعار", "تصميم هوية تجارية لمشروع جديد"],
});

const namingSteps = [
  ["10–15 اسمًا مدروسًا", "أسماء مبنية على نشاطك وجمهورك وطموح التوسع، لا قائمة عشوائية."],
  ["فحص مبدئي", "للمعنى والتشابه والدومين وحسابات التواصل، قبل أن تتعلق باسم يصعب امتلاكه."],
  ["أفضل 3 ترشيحات", "مع منطق واضح لكل اسم يساعدك على القرار."],
  ["3 شعارات لفظية", "للاسم الذي تختاره، مع سبب كل شعار."],
  ["توجه أولي للعلامة", "للاسم الذي تختاره، ليكون أساس مرحلة الهوية."],
];

const identitySteps = [
  ["شعار أساسي ونسخة مبسطة", "للقنوات الرقمية والمطبوعات الأساسية والمساحات الصغيرة."],
  ["ألوان وخطوط", "لوحة ألوان بأكوادها وخطوط مقترحة بالعربية والإنجليزية."],
  ["توجه بصري و3 تطبيقات", "اتجاه واضح للصور والعناصر، مطبق على 3 أمثلة متفق عليها."],
  ["ملف إرشادي مختصر وجولتا تعديل", "يوضح الاستخدام الأساسي، مع جولتين مجمعتين للتعديل."],
];

const faqs = [
  ["كم سعر باقة الاسم التجاري والهوية البصرية؟", "يظهر سعر الباقة في أعلى الصفحة بعملة بلدك، وهو أقل من مجموع سعري باقة الاسم التجاري وباقة الهوية البصرية الأساسية عند طلبهما منفصلتين."],
  ["كم تستغرق الباقة؟", "تعمل على مرحلتين: 3–5 أيام عمل للاسم، ثم 7–10 أيام عمل للهوية بعد اعتماد الاسم واستلام معلومات المشروع."],
  ["هل يمكن أن أطلب الاسم فقط أو الهوية فقط؟", "نعم. باقة اختيار الاسم التجاري متاحة وحدها، وكذلك باقة الهوية البصرية الأساسية إذا كان لديك اسم معتمد. الباقة المجمعة مناسبة لمن يبدأ المشروع من الصفر."],
  ["هل تشمل حجز الاسم التجاري أو تسجيل العلامة؟", "لا. الفحص مبدئي وليس استشارة قانونية، والحجز والتسجيل والرسوم الرسمية خارج الباقة وتتم لدى الجهات المختصة."],
  ["هل هذه هوية كاملة؟", "لا. هي هوية أساسية تكفي لبداية متماسكة، ولا تشمل استراتيجية براند كاملة أو دليل هوية مفصلًا أو تطبيقات موسعة. للهوية الكاملة راجع خدمة البراند والهوية."],
];

const allFaqs = [...faqs, ...offerExtras.ar.bundle.faqs];

export default function NameIdentityBundle() {
  const url = `${siteUrl}/offers/name-identity`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "باقة اسم تجاري + هوية بصرية أساسية",
        description,
        serviceType: ["Brand Naming", "Visual Identity Design", "Logo Design"],
        provider: { "@id": organizationId },
        areaServed: servedMarkets,
        offers: { "@type": "Offer", price: String(resolveCurrentOfferPrice("name-identity-bundle", null).amount), priceCurrency: "SAR", availability: "https://schema.org/InStock", url },
        url,
      },
      { "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: allFaqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "العروض", item: `${siteUrl}/offers` },
          { "@type": "ListItem", position: 3, name: "اسم تجاري + هوية بصرية", item: url },
        ],
      },
    ],
  };

  return (
    <main className="inner-page offers-page oe-page">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

      <section className="shell offer-detail-hero">
        <div>
          <div className="offer-availability"><span className="offer-spots-available"><i aria-hidden="true" />مرحلتان: الاسم ثم الهوية</span></div>
          <h1>اسم تجاري وشعار وهوية بصرية<br/><em>بداية علامتك في باقة واحدة</em></h1>
          <p>نختار مع مشروعك اسمه أولًا، ثم نبني على الاسم المختار هوية بصرية أساسية متماسكة. خطوتان مرتبطتان مع فريق واحد يفهم مشروعك من البداية، بسعر أقل من طلب الباقتين منفصلتين.</p>
          <div className="oe-hero-actions">
            <p className="oe-price">الباقة المجمعة <InlineOfferPrice offerKey="name-identity-bundle" /></p>
            <NameIdentityWhatsApp id="order-hero" className="button primary offer-consultation-cta" label="ابدأ اسمك وهويتك" />
            <OfferMicro offer="bundle" locale="ar" />
          </div>
        </div>
        <aside className="offer-price-panel">
          <small>الباقة المجمعة</small>
          <NameIdentityPrice />
          <NameIdentitySaving />
          <div className="offer-trust-inline"><span>10–15 اسمًا</span><span>شعار وهوية أساسية</span><span>3 تطبيقات</span></div>
          <p>لا تشمل حجز الاسم أو تسجيل العلامة أو الرسوم الرسمية، ولا استراتيجية براند كاملة.</p>
          <NameIdentityWhatsApp id="order-cta" className="button primary offer-consultation-cta" label="ابدأ اسمك وهويتك" />
        </aside>
      </section>

      <OfferSample offer="bundle" locale="ar" />

      <section className="shell offer-deliverables">
        <div><span className="section-label">المرحلة الأولى · 3–5 أيام عمل</span><h2>نختار الاسم</h2><p>نفس نطاق باقة اختيار الاسم التجاري.</p></div>
        <div className="deliverable-list">{namingSteps.map(([item, text]) => <article className="deliverable-item" key={item}><b>{item}</b><p>{text}</p></article>)}</div>
      </section>

      <section className="shell offer-deliverables">
        <div><span className="section-label">المرحلة الثانية · 7–10 أيام عمل</span><h2>نبني الهوية على الاسم المختار</h2><p>نفس نطاق باقة الهوية البصرية الأساسية.</p></div>
        <div className="deliverable-list">{identitySteps.map(([item, text]) => <article className="deliverable-item" key={item}><b>{item}</b><p>{text}</p></article>)}</div>
      </section>

      <section className="shell offer-confidence">
        <div className="offer-confidence-head"><span className="section-label">لماذا معًا؟</span><h2>الاسم والهوية قرار واحد</h2></div>
        <div className="offer-confidence-grid">
          <article><b>01</b><span>الهوية تُبنى على اسم اخترته وفحصته مبدئيًا، فلا تصمم شعارًا لاسم قد تغيّره لاحقًا.</span></article>
          <article><b>02</b><span>فريق واحد يفهم نشاطك وجمهورك من أول يوم، فينتقل المنطق نفسه من الاسم إلى الشكل.</span></article>
          <article><b>03</b><span>سعر الباقة أقل من طلب باقة الاسم وباقة الهوية منفصلتين.</span></article>
        </div>
        <details className="offer-policy"><summary>ما الذي لا تشمله الباقة؟</summary><p>حجز الاسم التجاري وتسجيل العلامة والرسوم الرسمية، الاستشارة القانونية، استراتيجية البراند الكاملة، دليل الهوية المفصل، التغليف وتصميم الموقع وإدارة الحسابات، والتطبيقات الإضافية خارج الثلاثة المتفق عليها.</p></details>
      </section>

      <OfferClientProof review="bithan" locale="ar" />

      <OfferGuide offer="bundle" locale="ar" />

      <section className="shell offer-faq" id="faq"><div className="offer-faq-head"><span className="section-label">أسئلة شائعة</span><h2>قبل أن تبدأ</h2></div><div className="offer-faq-list">{allFaqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>

      <section id="order-final" className="shell offer-final-cta">
        <span className="offer-kicker">اسم تجاري + هوية بصرية</span>
        <h2>ابدأ علامتك باسم واضح وشكل متماسك</h2>
        <p>أرسل لنا نشاطك وجمهورك والسوق الذي تستهدفه، ونبدأ بمرحلة الاسم.</p>
        <CrmOfferActions enabled={crmVisible} locale="ar" offer="name-identity"><NameIdentityWhatsApp className="button primary offer-consultation-cta" label="ابدأ اسمك وهويتك" /></CrmOfferActions>
        <div className="offer-bundle-links"><Link href="/offers/brand-naming">الاسم التجاري فقط</Link><Link href="/offers/visual-identity">الهوية الأساسية فقط</Link><Link href="/offers">العودة إلى العروض</Link></div>
      </section>
      <NameIdentitySticky watchIds={["order-hero", "order-cta", "order-final", "order-footer"]} />
      <div id="order-footer"><Footer /></div>
    </main>
  );
}
