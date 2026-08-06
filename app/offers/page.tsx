import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { Footer, Header } from "../components/site-shell";
import { createMetadata, siteUrl } from "../lib/seo";
import "./offers-page.css";

export const dynamic = "force-dynamic";

const availableSpots = 7;

export const metadata: Metadata = createMetadata({
  title: "عروض ديوانك | باقات تسويق ومحتوى بأسعار واضحة",
  description: "اكتشف عروض ديوانك للبراندينج والمحتوى والتسويق والأتمتة، ومنها باقة محتوى إنستقرام لمدة شهر مع سعر واضح وحجز مباشر عبر واتساب.",
  path: "/offers",
  keywords: ["عروض تسويق رقمي", "باقة محتوى انستقرام", "أسعار إدارة السوشيال ميديا", "تصميم بوستات انستقرام", "باقات سوشيال ميديا السعودية"],
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

export default async function OffersPage() {
  const localPrice = await getVisitorPrice();
  const formattedAmount = new Intl.NumberFormat("ar", { maximumFractionDigits: 0 }).format(localPrice.amount);

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "عروض ديوانك",
    itemListElement: [{
      "@type": "ListItem",
      position: 1,
      name: "باقة محتوى إنستقرام لمدة شهر",
      url: `${siteUrl}/offers/30-day-content-package`,
    }],
  };

  return (
    <main className="inner-page offers-page">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="shell offers-hero">
        <span className="offers-hero-eyebrow">عروض ديوانك</span>
        <h1>عروض واضحة.<br/><em>تساعدك تبدأ الآن.</em></h1>
        <p>اختر العرض المناسب لنشاطك بنطاق عمل محدد وسعر معروف من البداية. راجع التفاصيل وابدأ مباشرة عبر واتساب—من دون اشتراكات طويلة أو خدمات غامضة.</p>
      </section>

      <section className="shell offers-grid" aria-label="عروض ديوانك الحالية">
        <article className="offer-card">
          <div className="offer-availability" aria-label={`${availableSpots} أماكن متاحة حاليًا`}>
            <span className="offer-spots-available"><i aria-hidden="true" /><strong>{availableSpots}</strong> أماكن متاحة حاليًا</span>
          </div>
          <h2>محتوى شهر كامل.<br/><em>جاهز للنشر.</em></h2>
          <p>12 بوستًا، 3 ستوري، ريل واحد، أفكار وكابشنات وخطة نشر—ليظهر حسابك بصورة متناسقة بدل النشر العشوائي.</p>
          <div className="offer-card-meta">
            <div><small>السعر التأسيسي</small><div className="offer-price"><strong>{formattedAmount}</strong><span>{localPrice.currencyLabel}</span></div></div>
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
