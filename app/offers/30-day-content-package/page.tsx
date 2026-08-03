import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../components/site-shell";
import { createMetadata, organizationId, siteUrl } from "../../lib/seo";
import "../offers-page.css";

export const metadata: Metadata = createMetadata({
  title: "باقة محتوى إنستجرام لشهر كامل بـ790 ريال",
  description: "احصل على 12 بوستًا و3 ستوري وريل واحد مع الأفكار والكابشنات وخطة نشر وتحسين البايو بسعر تأسيسي 790 ريال سعودي.",
  path: "/offers/30-day-content-package",
  keywords: ["باقة محتوى انستقرام", "تصميم 12 بوست", "تصميم سوشيال ميديا السعودية", "إدارة محتوى انستقرام"],
});

const whatsappUrl = "https://wa.me/97339066649?text=%D9%85%D8%B1%D8%AD%D8%A8%D9%8B%D8%A7%20%D8%AF%D9%8A%D9%88%D8%A7%D9%86%D9%83%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%AD%D8%AC%D8%B2%20%D8%B9%D8%B1%D8%B6%20%D8%AD%D8%B6%D9%88%D8%B1%20%D8%A7%D9%84%D8%B4%D9%87%D8%B1%20%D8%A8%D9%80%20790%20%D8%B1%D9%8A%D8%A7%D9%84";

const deliverables = [
  ["12 بوستًا مخصصًا", "تصميمات متناسقة مع نشاطك وليست قوالب جاهزة مكررة."],
  ["3 تصاميم ستوري", "قصص موجهة للتفاعل أو عرض الخدمة أو تحريك الطلب."],
  ["ريل واحد", "مونتاج ريل قصير من الصور أو الفيديوهات التي ترسلها."],
  ["الأفكار والكابشنات", "فكرة واضحة ونص جاهز للنشر لكل قطعة محتوى."],
  ["خطة نشر 30 يومًا", "ترتيب مقترح للنشر حتى تعرف ماذا تنشر ومتى."],
  ["تحسين البايو وCTA", "مراجعة الرسالة الأساسية وطريقة توجيه الزائر للخطوة التالية."],
];

export default function ContentOfferPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "باقة حضور الشهر",
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

  return (
    <main className="inner-page offers-page">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="shell offer-detail-hero">
        <div>
          <span className="offer-kicker">عرض التأسيس · دفعة محدودة</span>
          <h1>شهر محتوى كامل.<br/><em>بدون حيرة كل يوم.</em></h1>
          <p>نحوّل خدماتك وأفكارك إلى 16 قطعة محتوى متناسقة وجاهزة للنشر، حتى يظهر حسابك بصورة احترافية ويصبح عندك ما تقوله خلال الشهر.</p>
        </div>
        <aside className="offer-price-panel">
          <small>السعر التأسيسي لأول 5 مشاريع</small>
          <div className="offer-price"><strong>790</strong><span>ريال سعودي</span></div>
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

      <section className="shell offer-final-cta">
        <span className="offer-kicker">16 قطعة محتوى · 790 ريال</span>
        <h2>أعطِ حسابك شهرًا يستحق أن يراه عملاؤك.</h2>
        <p>أرسل كلمة «شهر» وسنسألك عن نشاطك ثم نؤكد ملاءمة العرض قبل الدفع.</p>
        <a className="button primary" href={whatsappUrl} target="_blank" rel="noreferrer">أرسل «شهر» على واتساب <span>←</span></a>
        <div><Link href="/offers">← العودة إلى جميع العروض</Link></div>
      </section>
      <Footer />
    </main>
  );
}
