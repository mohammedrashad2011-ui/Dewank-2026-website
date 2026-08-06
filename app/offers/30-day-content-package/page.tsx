import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { Footer, Header } from "../../components/site-shell";
import { createMetadata, organizationId, siteUrl } from "../../lib/seo";
import "../offers-page.css";
import "../offer-trust.css";

export const dynamic = "force-dynamic";

export const metadata: Metadata = createMetadata({
  title: "أسعار إدارة محتوى إنستقرام | باقة شهر كامل من ديوانك",
  description: "باقة محتوى إنستقرام لمدة 30 يومًا تشمل 12 بوستًا و3 ستوري وريل واحد مع الأفكار والكابشنات وخطة النشر. سعر واضح، دفعتان، وحجز مباشر عبر واتساب.",
  path: "/offers/30-day-content-package",
  keywords: ["أسعار إدارة محتوى إنستقرام", "باقة محتوى انستقرام", "تكلفة إدارة حساب انستقرام", "أسعار إدارة السوشيال ميديا", "تصميم 12 بوست"],
});

type LocalPrice = {
  amount: number;
  currencyCode: string;
  currencyLabel: string;
};

const pricesByCountry: Record<string, LocalPrice> = {
  SA: { amount: 790, currencyCode: "SAR", currencyLabel: "ريال سعودي" },
  AE: { amount: 790, currencyCode: "AED", currencyLabel: "درهم إماراتي" },
  BH: { amount: 79, currencyCode: "BHD", currencyLabel: "دينار بحريني" },
  KW: { amount: 65, currencyCode: "KWD", currencyLabel: "دينار كويتي" },
  QA: { amount: 790, currencyCode: "QAR", currencyLabel: "ريال قطري" },
  OM: { amount: 79, currencyCode: "OMR", currencyLabel: "ريال عُماني" },
};

const fallbackPrice: LocalPrice = {
  amount: 210,
  currencyCode: "USD",
  currencyLabel: "دولار أمريكي",
};

const availableSpots = 7;

const deliverables = [
  ["12 بوستًا مخصصًا", "تصميمات متناسقة مع نشاطك وليست قوالب جاهزة مكررة."],
  ["3 تصاميم ستوري", "قصص موجهة للتفاعل أو عرض الخدمة أو تحريك الطلب."],
  ["ريل واحد", "مونتاج ريل قصير من الصور أو الفيديوهات التي ترسلها."],
  ["الأفكار والكابشنات", "فكرة واضحة ونص جاهز للنشر لكل قطعة محتوى."],
  ["خطة نشر 30 يومًا", "ترتيب مقترح للنشر حتى تعرف ماذا تنشر ومتى."],
  ["تحسين البايو وCTA", "مراجعة الرسالة الأساسية وطريقة توجيه الزائر للخطوة التالية."],
];

const faqItems = [
  ["كم سعر إدارة محتوى إنستقرام لمدة شهر؟", "السعر المعروض في الصفحة هو سعر الباقة الكامل، وتشمل 12 بوستًا و3 ستوري وريل واحد مع الأفكار والكابشنات وخطة النشر."],
  ["ماذا تشمل باقة إدارة السوشيال ميديا؟", "تشمل صناعة المحتوى والتصميم والكابشنات وخطة النشر وتحسين البايو، ولا تشمل النشر اليومي أو إدارة الرسائل أو الحملات الإعلانية."],
  ["كم مدة تسليم تصاميم السوشيال ميديا؟", "يتم التسليم عادة خلال 10 إلى 14 يوم عمل بعد استلام المعلومات والمواد المطلوبة واعتماد الاتجاه."],
  ["هل يمكن الدفع على دفعتين؟", "نعم، 50% لبدء العمل و50% بعد اعتماد الاتجاه وقبل تسليم الملفات النهائية."],
  ["هل يمكن استرجاع المبلغ؟", "يمكن استرداد المبلغ كاملًا قبل بدء التنفيذ. بعد بدء العمل يُخصم فقط مقابل الجزء المنفذ."],
];

function normalizeCountryCode(value: string | null) {
  return value?.trim().toUpperCase().slice(0, 2) || "";
}

async function getVisitorPrice() {
  const requestHeaders = await headers();
  const countryCode = normalizeCountryCode(
    requestHeaders.get("cf-ipcountry") ||
      requestHeaders.get("x-vercel-ip-country") ||
      requestHeaders.get("cloudfront-viewer-country") ||
      requestHeaders.get("x-country-code"),
  );

  return pricesByCountry[countryCode] || fallbackPrice;
}

export default async function ContentOfferPage() {
  const localPrice = await getVisitorPrice();
  const formattedAmount = new Intl.NumberFormat("ar", { maximumFractionDigits: 0 }).format(localPrice.amount);
  const whatsappText = `مرحبًا ديوانك، أريد حجز باقة محتوى إنستقرام لمدة شهر بسعر ${formattedAmount} ${localPrice.currencyLabel}.`;
  const whatsappUrl = `https://wa.me/97339066649?text=${encodeURIComponent(whatsappText)}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "باقة محتوى إنستقرام لمدة شهر",
    description: "16 قطعة محتوى لإنستجرام تشمل 12 بوستًا و3 ستوري وريل واحد مع الأفكار والكابشنات وخطة النشر.",
    url: `${siteUrl}/offers/30-day-content-package`,
    provider: { "@id": organizationId },
    areaServed: ["SA", "BH", "AE", "KW", "QA", "OM"],
    offers: {
      "@type": "Offer",
      price: "790",
      priceCurrency: "SAR",
      availability: "https://schema.org/LimitedAvailability",
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

  return (
    <main className="inner-page offers-page">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="shell offer-detail-hero">
        <div>
          <div className="offer-availability" aria-label={`${availableSpots} أماكن متاحة حاليًا`}>
            <span className="offer-spots-available"><i aria-hidden="true" /><strong>{availableSpots}</strong> أماكن متاحة حاليًا</span>
          </div>
          <h1>باقة محتوى إنستقرام لشهر كامل.<br/><em>بدون حيرة كل يوم.</em></h1>
          <p>نحوّل خدماتك وأفكارك إلى 16 قطعة محتوى متناسقة وجاهزة للنشر، حتى يظهر حسابك بصورة احترافية ويصبح عندك ما تقوله خلال الشهر.</p>
        </div>
        <aside className="offer-price-panel">
          <small>السعر التأسيسي لفترة محدودة</small>
          <div className="offer-price"><strong>{formattedAmount}</strong><span>{localPrice.currencyLabel}</span></div>
          <div className="offer-trust-inline" aria-label="مزايا الأمان والثقة">
            <span>رابط دفع رسمي</span><span>50% لبدء العمل</span><span>موافقتك قبل التنفيذ</span>
          </div>
          <p>50% لبدء العمل، و50% بعد اعتماد الاتجاه وقبل تسليم الملفات النهائية.</p>
          <a className="button primary" href={whatsappUrl} target="_blank" rel="noreferrer">احجز العرض عبر واتساب <span>←</span></a>
        </aside>
      </section>

      <section className="shell offer-deliverables">
        <div><span className="section-label">[ ماذا تستلم؟ ]</span><h2>كل ما تحتاجه لتبدأ النشر.</h2><p>التسليم خلال 10–14 يوم عمل بعد استلام المعلومات والمواد المطلوبة.</p></div>
        <div className="deliverable-list">
          {deliverables.map(([title, text]) => <article className="deliverable-item" key={title}><b>{title}</b><p>{text}</p></article>)}
        </div>
      </section>

      <section className="shell offer-fit">
        <span className="section-label">[ قبل الحجز ]</span>
        <h2>عرض واضح.<br/>بدون مفاجآت لاحقًا.</h2>
        <div className="offer-fit-grid">
          <article className="offer-fit-card good"><h3>العرض مناسب لك إذا</h3><ul><li>لديك مشروع أو خدمة واضحة وتحتاج حضورًا أكثر احترافية.</li><li>تتأخر في النشر لأن الأفكار والتصميم غير جاهزين.</li><li>تريد تجربة جودة ديوانك قبل الانتقال إلى إدارة شهرية.</li><li>يمكنك تزويدنا بصور أو فيديوهات مناسبة للريل.</li></ul></article>
          <article className="offer-fit-card limits"><h3>حدود العرض</h3><ul><li>يشمل منصة واحدة ولغة واحدة.</li><li>يشمل جولتي تعديل على الاتجاه المتفق عليه.</li><li>لا يشمل التصوير أو النشر أو إدارة الرسائل.</li><li>لا يشمل إدارة الحملات أو ميزانية الإعلان.</li><li>لا يشمل بناء هوية بصرية جديدة.</li></ul></article>
        </div>
      </section>

      <section className="shell offer-confidence" aria-labelledby="offer-confidence-title">
        <div className="offer-confidence-head">
          <span className="section-label">[ خطوات واضحة ]</span>
          <h2 id="offer-confidence-title">احجز وأنت عارف كل خطوة.</h2>
        </div>
        <div className="offer-confidence-grid">
          <article><b>01</b><span>نراجع نشاطك ونؤكد ملاءمة العرض.</span></article>
          <article><b>02</b><span>نرسل رابط دفع رسمي عبر Payoneer.</span></article>
          <article><b>03</b><span>نبدأ بعد الدفعة الأولى واعتماد الاتجاه.</span></article>
        </div>
        <details className="offer-policy">
          <summary>سياسة الحماية والاسترجاع</summary>
          <p>استرداد كامل قبل بدء التنفيذ. بعد بدء العمل يُخصم فقط مقابل الجزء المنفذ، ويشمل العرض جولتي تعديل ولا يعتمد الاتجاه النهائي قبل موافقتك.</p>
        </details>
      </section>

      <section className="shell offer-faq" aria-labelledby="offer-faq-title">
        <div className="offer-faq-head"><span className="section-label">[ أسئلة شائعة ]</span><h2 id="offer-faq-title">قبل ما تحجز.</h2></div>
        <div className="offer-faq-list">
          {faqItems.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
        </div>
      </section>

      <section className="shell offer-final-cta">
        <span className="offer-kicker">16 قطعة محتوى · {formattedAmount} {localPrice.currencyLabel}</span>
        <h2>أعطِ حسابك شهرًا يستحق أن يراه عملاؤك.</h2>
        <p>أرسل كلمة «شهر» وسنسألك عن نشاطك ثم نؤكد ملاءمة العرض قبل الدفع.</p>
        <a className="button primary" href={whatsappUrl} target="_blank" rel="noreferrer">أرسل «شهر» على واتساب <span>←</span></a>
        <div><Link href="/offers">← العودة إلى جميع العروض</Link></div>
      </section>
      <Footer />
    </main>
  );
}
