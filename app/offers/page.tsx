import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../components/site-shell";
import { createMetadata, siteUrl } from "../lib/seo";
import { LocalizedOfferPrice } from "./localized-offer";
import { LandingOfferPrice } from "./landing-page-package/localized-landing-offer";
import { SeoAuditOfferPrice } from "./seo-audit/localized-seo-audit-offer";
import "./offers-page.css";
import "./landing-offer.css";
import "./seo-audit/seo-audit-offer.css";

const availableSpots = 7;

export const metadata: Metadata = createMetadata({
  title: "عروض ديوانك | باقات تسويق ومحتوى وصفحات هبوط وSEO",
  description: "اكتشف عروض ديوانك الجاهزة: باقة محتوى شهرية، صفحة هبوط احترافية، وفحص SEO شامل للموقع مع تقرير وخطة تحسين واضحة.",
  path: "/offers",
  keywords: ["عروض تسويق رقمي", "باقة محتوى انستقرام", "تصميم صفحة هبوط", "فحص SEO للموقع", "أسعار إدارة السوشيال ميديا", "landing page السعودية"],
});

export default function OffersPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "عروض ديوانك",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "باقة محتوى إنستقرام لمدة شهر", url: `${siteUrl}/offers/30-day-content-package` },
      { "@type": "ListItem", position: 2, name: "باقة تصميم صفحة هبوط احترافية", url: `${siteUrl}/offers/landing-page-package` },
      { "@type": "ListItem", position: 3, name: "فحص SEO شامل للموقع", url: `${siteUrl}/offers/seo-audit` },
    ],
  };

  return (
    <main className="inner-page offers-page">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="shell offers-hero">
        <span className="offers-hero-eyebrow">عروض ديوانك</span>
        <h1>عروض واضحة.<br/><em>تساعدك تبدأ الآن.</em></h1>
        <p>اختر العرض المناسب لنشاطك بنطاق عمل محدد وسعر معروف من البداية. راجع التفاصيل وابدأ مباشرة عبر واتساب، من دون اشتراكات طويلة أو خدمات غامضة.</p>
      </section>

      <section className="shell offers-grid offers-grid-three" aria-label="عروض ديوانك الحالية">
        <article className="offer-card compact-offer-card">
          <div className="offer-availability" aria-label={`${availableSpots} أماكن متاحة حاليًا`}>
            <span className="offer-spots-available"><i aria-hidden="true" /><strong>{availableSpots}</strong> أماكن متاحة حاليًا</span>
          </div>
          <h2>محتوى شهر كامل.<br/><em>جاهز للنشر.</em></h2>
          <p>12 بوستًا، 3 ستوري، ريل واحد، أفكار وكابشنات وخطة نشر ليظهر حسابك بصورة متناسقة بدل النشر العشوائي.</p>
          <div className="offer-card-meta">
            <div><small>السعر التأسيسي</small><LocalizedOfferPrice /></div>
            <Link className="button primary" href="/offers/30-day-content-package">شاهد تفاصيل العرض <span>←</span></Link>
          </div>
        </article>

        <article className="offer-card compact-offer-card landing-offer-card">
          <div className="offer-availability"><span className="offer-spots-available"><i aria-hidden="true" /><strong>5</strong> أماكن متاحة حاليًا</span></div>
          <h2>صفحة واحدة.<br/><em>تحوّل الزائر إلى عميل.</em></h2>
          <p>صفحة هبوط مخصصة تشمل النص التسويقي والتصميم وربط واتساب والنماذج والتحليلات، مع خيار كامل للدومين والاستضافة.</p>
          <div className="offer-card-meta">
            <div><small>الباقة الأساسية من</small><LandingOfferPrice kind="base" /></div>
            <Link className="button primary" href="/offers/landing-page-package">شاهد تفاصيل العرض <span>←</span></Link>
          </div>
        </article>

        <article className="offer-card compact-offer-card seo-audit-offer-card">
          <div className="offer-availability"><span className="offer-spots-available"><i aria-hidden="true" /><strong>48</strong> ساعة للتسليم</span></div>
          <h2>اعرف المشكلة.<br/><em>قبل ما تزود الميزانية.</em></h2>
          <p>فحص SEO وAEO شامل يكشف مشاكل الفهرسة والسرعة والمحتوى والكلمات والتحويل، مع تقرير PDF وخطة تحسين مرتبة لمدة 30 يومًا.</p>
          <div className="offer-card-meta">
            <div><small>فحص شامل من</small><SeoAuditOfferPrice /></div>
            <Link className="button primary" href="/offers/seo-audit">شاهد تفاصيل الفحص <span>←</span></Link>
          </div>
        </article>

        <aside className="offers-note">
          <div><small>DEWANK OFFERS</small><h2>خدمات محددة. نتيجة مفهومة.</h2><p>كل عرض مبني حول احتياج واضح لدى أصحاب المشاريع، بنطاق تنفيذ وسعر وتسليم معروفين من البداية.</p></div>
          <span>ستُضاف عروض جديدة هنا تباعًا.</span>
        </aside>
      </section>
      <Footer />
    </main>
  );
}
