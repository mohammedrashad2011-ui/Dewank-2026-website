import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../../components/site-shell";
import { createMetadata, organizationId, siteUrl, servedMarkets } from "../../../lib/seo";
import { BrandNamingInlinePrice, BrandNamingOfferPrice, BrandNamingStickyCta, BrandNamingWhatsApp } from "./localized-brand-naming-offer";
import { NameToIdentity } from "./name-to-identity";
import "../offers-page.css";
import "../offer-trust.css";
import "./brand-naming-offer.css";
import "./brand-naming-v2.css";

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
  ["هل باقة الاسم هي نفس مشروع BITHAN؟", "لا. BITHAN دراسة حالة لمشروع تسمية وهوية بصرية لدار مجوهرات في قطر، والهوية البصرية خارج هذه الباقة. نطاق باقة 490 ريال هو المذكور في هذه الصفحة: 10–15 اسمًا، فحص مبدئي، أفضل 3 ترشيحات، توجه أولي للعلامة، وجولة تطوير واحدة."],
  ["هل تشمل الخدمة حجز الدومين؟", "تشمل التحقق من توفر الدومين وقت البحث. شراء الدومين ورسومه ليست ضمن الباقة، لأن التوفر قد يتغير حتى لحظة الحجز."],
  ["كم مدة التسليم؟", "التسليم عادة خلال 3–5 أيام عمل بعد استلام معلومات النشاط والسوق والجمهور والاتجاهات المفضلة."],
];

// Illustrative names only. They show the format of the shortlist and are labelled on the page as an example, not as
// client work.
const sampleNames = [
  { name: "وَهَج", latin: "Wahaj", note: "حضور دافئ وسهل النطق" },
  { name: "سَمار", latin: "Samar", note: "طابع ليلي هادئ للضيافة" },
  { name: "نَجد", latin: "Najd", note: "جذر محلي قابل للتوسع" },
];

const fits = [
  ["تفتح مشروعك الأول", "مطعم، مقهى، متجر إلكتروني أو خدمة جديدة، وتحتاج اسمًا قبل السجل والشعار."],
  ["اسمك الحالي لا يمثلك", "اسم مكرر أو صعب النطق أو لا يناسب السوق الذي تريد التوسع فيه."],
  ["تحتاج اسمًا عربيًا وإنجليزيًا", "اسم يُكتب ويُنطق بسهولة باللغتين ويصلح للدومين وحسابات التواصل."],
  ["محتار بين أسماء كثيرة", "عندك أفكار ولا تعرف أيها أقوى تجاريًا وأقل تشابهًا مع الموجود."],
];

const steps = [
  ["اليوم 1", "ترسل فكرة مشروعك", "نوع النشاط، المدينة أو السوق، والجمهور. رسالة واتساب واحدة تكفي للبدء."],
  ["الأيام 2–4", "نبحث ونبني ونفحص", "اتجاهات تسمية مختلفة، ثم تصفية بالمعنى والنطق والتشابه والدومين."],
  ["اليوم 5", "تستلم قرارًا واضحًا", "10–15 اسمًا، أفضل 3 ترشيحات بمقارنة واضحة، وتوجه أولي للاسم المختار."],
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
        areaServed: servedMarkets,
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
    <main className="inner-page offers-page brand-naming-offer-page bn2">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* On a phone the headline, the price and the WhatsApp CTA all sit in the first screen. */}
      <section className="shell bn2-hero" aria-labelledby="bn2-title">
        <div className="bn2-hero-copy">
          <p className="bn2-kicker"><i aria-hidden="true" />باقة جاهزة · التسليم خلال 3–5 أيام عمل</p>
          <h1 id="bn2-title">اختيار اسم تجاري <em>يتذكره عميلك من أول مرة</em></h1>
          <p className="bn2-lede">نقترح لك 10–15 اسمًا مدروسًا لنشاطك، ونرشح أفضل 3 بعد فحص المعنى والنطق والتشابه وتوفر الدومين. الباقة كاملة بـ <BrandNamingInlinePrice />.</p>
          <div className="bn2-hero-actions">
            <BrandNamingWhatsApp id="bn2-hero-cta" className="button primary offer-consultation-cta bn2-cta" label="احصل على استشارة مجانية على واتساب" />
            <p className="bn2-microcopy">بدون أي التزام. اكتب نوع نشاطك والمدينة، ونخبرك بالخطوة التالية.</p>
          </div>
          <ul className="bn2-facts" aria-label="ما تشمله الباقة">
            <li><b>10–15</b><span>اسمًا مدروسًا</span></li>
            <li><b>3</b><span>ترشيحات نهائية</span></li>
            <li><b>1</b><span>جولة تطوير</span></li>
          </ul>
        </div>

        <figure className="bn2-deck" aria-label="مثال توضيحي لشكل القائمة المختصرة">
          <figcaption className="bn2-deck-head"><span>القائمة المختصرة</span><small>مثال توضيحي</small></figcaption>
          <div className="bn2-deck-brief"><small>موجز المشروع</small><p>مقهى مختص في الرياض · جمهور شاب · يخطط لفتح فروع</p></div>
          <ol className="bn2-deck-list">
            {sampleNames.map((item, index) => (
              <li key={item.latin} style={{ ["--i" as string]: index }}>
                <span className="bn2-deck-rank">0{index + 1}</span>
                <span className="bn2-deck-name"><b>{item.name}</b><small>{item.latin}</small></span>
                <span className="bn2-deck-note">{item.note}</span>
                <span className="bn2-deck-checks" aria-label="فحوصات مبدئية"><i>المعنى</i><i>النطق</i><i>الدومين</i></span>
              </li>
            ))}
          </ol>
        </figure>
      </section>

      <section className="shell bn2-fit" aria-labelledby="bn2-fit-title">
        <h2 id="bn2-fit-title">الباقة مناسبة لك إذا كنت</h2>
        <div className="bn2-fit-grid">
          {fits.map(([head, text]) => <article key={head}><h3>{head}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="shell bn2-steps" aria-labelledby="bn2-steps-title">
        <div className="bn2-section-head">
          <h2 id="bn2-steps-title">من رسالة واتساب إلى اسم تختاره بثقة</h2>
          <p>لا نماذج طويلة ولا اجتماعات. ملخص قصير عن مشروعك يكفي لنبدأ البحث.</p>
        </div>
        <ol className="bn2-steps-list">
          {steps.map(([when, head, text]) => <li key={head}><small>{when}</small><h3>{head}</h3><p>{text}</p></li>)}
        </ol>
      </section>

      <section className="shell bn2-offer" aria-labelledby="bn2-offer-title">
        <div className="bn2-offer-copy">
          <h2 id="bn2-offer-title">ماذا تستلم بالضبط</h2>
          <ul className="bn2-deliverables">
            {deliverables.map(([item, text]) => <li key={item}><b>{item}</b><p>{text}</p></li>)}
          </ul>
        </div>
        <aside className="offer-price-panel brand-naming-price-panel bn2-price" aria-label="سعر الباقة">
          <small>الباقة الجاهزة</small>
          <BrandNamingOfferPrice />
          <p className="bn2-price-note">سعر ثابت يشمل البحث والتسمية والقائمة المختصرة والتوجه الأولي للعلامة.</p>
          <BrandNamingWhatsApp className="button primary offer-consultation-cta bn2-cta" label="احصل على استشارة مجانية على واتساب" />
          <details className="bn2-excludes">
            <summary>ما الذي لا يشمله العرض؟</summary>
            <p>لا يشمل رسوم الجهات الرسمية، تسجيل العلامة، شراء الدومين، تصميم الشعار أو الهوية الكاملة، أو بحثًا قانونيًا متخصصًا في عدة فئات وأسواق. الفحص الذي نقدمه مبدئي وليس رأيًا قانونيًا أو ضمان تسجيل.</p>
          </details>
        </aside>
      </section>

      <section className="shell brand-naming-case bn2-case" aria-labelledby="brand-naming-case-title">
        <div>
          <h2 id="brand-naming-case-title">BITHAN: علامة مجوهرات راقية في قطر</h2>
          <p>اختار العميل اسم BITHAN بعد موجز استراتيجي وقائمة مختصرة وجولة تطوير وفحص مبدئي للدومين والتشابه، وهو فحص ليس تصريحًا قانونيًا. والهوية البصرية التي تلت الاسم خارج نطاق هذه الباقة.</p>
        </div>
        <div>
          <ul className="brand-naming-case-steps" aria-label="مراحل مشروع التسمية">
            <li>موجز استراتيجي</li><li>توليد وتصفية</li><li>قائمة مختصرة</li><li>تطوير مع العميل</li><li>فحص مبدئي</li><li>اختيار العميل</li>
          </ul>
          <Link className="brand-naming-case-link" href="/work/bithan">اطّلع على دراسة الحالة كاملة ↗</Link>
        </div>
      </section>

      <section className="shell brand-naming-proof">
        <div className="brand-naming-proof-copy">
          <h2>الاسم الجيد يمر عبر أكثر من ذوق</h2>
          <p>نقارن الخيارات وفق التميز، سهولة النطق، قابلية التذكر، ملاءمة السوق، المرونة المستقبلية، والتوفر الرقمي. الهدف ليس اسمًا يعجبنا فقط، بل اسمًا يمكن بناء علامة حوله.</p>
        </div>
        <NameToIdentity locale="ar" />
      </section>

      <section className="shell offer-faq" id="faq"><div className="offer-faq-head"><h2>قبل ما تختار اسمك</h2></div><div className="offer-faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>

      <section className="shell offer-final-cta brand-naming-final bn2-final">
        <span className="offer-kicker">اختيار اسم تجاري · توجه أولي للعلامة</span>
        <h2>قبل ما تصمم الشعار، اختر اسمًا يستحق أن يوضع عليه</h2>
        <p>أرسل نوع النشاط والسوق المستهدف، وسنبدأ بملخص قصير عن مشروعك قبل البحث.</p>
        <BrandNamingWhatsApp id="bn2-final-cta" className="button primary offer-consultation-cta bn2-cta" label="احصل على استشارة مجانية على واتساب" />
        <div className="brand-naming-links"><Link href="/services/brand-naming">تفاصيل خدمة التسمية</Link><Link href="/guides/how-to-choose-brand-name-saudi-arabia">دليل اختيار الاسم التجاري</Link><Link href="/offers">العودة إلى العروض</Link></div>
      </section>

      <BrandNamingStickyCta watchIds={["bn2-hero-cta", "bn2-final-cta"]} />
      <Footer />
    </main>
  );
}
