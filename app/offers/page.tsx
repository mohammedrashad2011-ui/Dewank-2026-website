import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header, PageHero } from "../components/site-shell";
import { createMetadata, siteUrl } from "../lib/seo";
import "./offers-page.css";

export const metadata: Metadata = createMetadata({
  title: "عروض ديوانك | باقات تسويق ومحتوى بأسعار تأسيسية",
  description: "اكتشف عروض ديوانك المحدودة للبراندينج والمحتوى والتسويق والأتمتة. ابدأ بعرض حضور الشهر: 16 قطعة محتوى جاهزة للنشر بسعر 790 ريال.",
  path: "/offers",
  keywords: ["عروض تسويق رقمي", "باقة محتوى انستقرام", "تصميم بوستات انستقرام", "باقات سوشيال ميديا السعودية"],
});

export default function OffersPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "عروض ديوانك",
    itemListElement: [{
      "@type": "ListItem",
      position: 1,
      name: "باقة حضور الشهر",
      url: `${siteUrl}/offers/30-day-content-package`,
    }],
  };

  return (
    <main className="inner-page offers-page">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero eyebrow="عروض ديوانك" title={<>قيمة أكبر.<br/><em>وبداية أسهل.</em></>} text="عروض محدودة صممناها لتأخذ خطوة واضحة الآن، بنطاق وتسليم وسعر معروفين من البداية." />
      <p className="shell offers-intro">كل عرض هنا له نتيجة محددة وحدود واضحة. لا اشتراك طويل ولا خدمات غامضة؛ اختر العرض المناسب، راجع تفاصيله، ثم ابدأ مباشرة عبر واتساب.</p>

      <section className="shell offers-grid" aria-label="عروض ديوانك الحالية">
        <article className="offer-card">
          <span className="offer-card-badge">عرض التأسيس · 5 مشاريع فقط</span>
          <h2>محتوى شهر كامل.<br/><em>جاهز للنشر.</em></h2>
          <p>12 بوستًا، 3 ستوري، ريل واحد، أفكار وكابشنات وخطة نشر—ليظهر حسابك بصورة متناسقة بدل النشر العشوائي.</p>
          <div className="offer-card-meta">
            <div><small>السعر التأسيسي</small><div className="offer-price"><strong>790</strong><span>ريال سعودي</span></div></div>
            <Link className="button primary" href="/offers/30-day-content-package">شاهد تفاصيل العرض <span>←</span></Link>
          </div>
        </article>

        <aside className="offers-note">
          <div><small>DEWANK OFFERS</small><h2>ليس خصمًا على خدمة ناقصة.</h2><p>نبني كل عرض حول احتياج متكرر لدى أصحاب المشاريع، ثم نحدد نطاقه بدقة حتى تحصل على قيمة عملية ويظل التنفيذ بجودة ديوانك.</p></div>
          <span>ستُضاف عروض جديدة هنا تباعًا.</span>
        </aside>
      </section>
      <Footer />
    </main>
  );
}
