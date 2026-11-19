import { offerPricing, type OfferPriceKey } from "./offer-pricing";
import { hubOffers, hubVideo, type HubLocale } from "./offers-hub-data";

// Price facts for the offers hub summary table, metadata, FAQ and schema.
// Read from offer-pricing.ts so the published numbers always match the cards.
type RowText = { title: string; hook: string; time: string };

const videoKey: OfferPriceKey = "video-edit";

// Where a card hook is a slogan rather than a deliverable, the table states the deliverable (taken from the card text).
const getOverride: Record<string, { ar: string; en: string }> = {
  "brand-naming": { ar: "10–15 اسمًا مدروسًا، فحص مبدئي وأفضل 3 ترشيحات", en: "10–15 considered names, preliminary checks and a top three" },
};

export const hubRows = [
  { key: videoKey, path: hubVideo.path, ar: hubVideo.ar as RowText, en: hubVideo.en as RowText },
  ...hubOffers.map((offer) => ({ key: offer.priceKey, path: offer.path, ar: offer.ar as RowText, en: offer.en as RowText })),
].map((row) => {
  const get = getOverride[row.key];
  return {
    ...row,
    ar: get ? { ...row.ar, hook: get.ar } : row.ar,
    en: get ? { ...row.en, hook: get.en } : row.en,
    sar: offerPricing[row.key].initial.amount,
    usd: offerPricing[row.key].fallback.amount,
  };
});

const bySar = [...hubRows].sort((a, b) => a.sar - b.sar);
const cheapest = bySar[0];
const priciest = bySar[bySar.length - 1];

export const fmt = (amount: number) => amount.toLocaleString("en-US");

export const hubFacts = {
  count: hubRows.length,
  minSar: fmt(cheapest.sar),
  maxSar: fmt(priciest.sar),
  minUsd: fmt(Math.min(...hubRows.map((row) => row.usd))),
  maxUsd: fmt(Math.max(...hubRows.map((row) => row.usd))),
  cheapest,
  priciest,
};

export function rowPrice(row: (typeof hubRows)[number], locale: HubLocale) {
  return locale === "ar" ? `${fmt(row.sar)} ريال` : `SAR ${fmt(row.sar)} · US$${fmt(row.usd)}`;
}

export const hubSummaryText = {
  ar: `تقدم ديوانك ${hubFacts.count} باقة تسويق إلكتروني بنطاق محدد وسعر بداية معلن، للشركات والمتاجر في السعودية والخليج. تبدأ الأسعار من ${hubFacts.minSar} ريال وتصل إلى ${hubFacts.maxSar} ريال حسب الباقة، والتسليم من 48 ساعة إلى نحو 14 يوم عمل. تطلب الباقة عبر واتساب، ونؤكد النطاق والسعر قبل الدفع.`,
  en: `Dewank offers ${hubFacts.count} digital marketing packages with a fixed scope and a published starting price, for small businesses in the Gulf and worldwide. Prices start at SAR ${hubFacts.minSar} (US$${hubFacts.minUsd}) and go up to SAR ${hubFacts.maxSar} (US$${hubFacts.maxUsd}), depending on the package, with delivery from 48 hours to about 14 working days. You order on WhatsApp, and we confirm the scope and price before you pay.`,
};

export const hubPriceFaq = {
  ar: {
    q: "كم أسعار باقات التسويق الإلكتروني لدى ديوانك؟",
    a: `تبدأ الأسعار من ${hubFacts.minSar} ريال (${cheapest.ar.title}) وتصل إلى ${hubFacts.maxSar} ريال (${priciest.ar.title}). هذا سعر البداية في السعودية، ويظهر سعر كل باقة بالعملة المحلية في دول الخليج الأخرى، وتجد في صفحة كل باقة ما تشمله وما لا تشمله.`,
  },
  en: {
    q: "How much do your digital marketing packages cost?",
    a: `Starting prices range from SAR ${hubFacts.minSar} (US$${hubFacts.minUsd}) for the ${cheapest.en.title.toLowerCase()} to SAR ${hubFacts.maxSar} (US$${hubFacts.maxUsd}) for the ${priciest.en.title.toLowerCase()}. Visitors in the Gulf see their local currency and everyone else sees US dollars, and each package page lists what is included.`,
  },
};

export const hubRegionFaq = {
  ar: {
    q: "هل تعملون مع شركات خارج السعودية؟",
    a: "نعم. نخدم الشركات في السعودية والإمارات والكويت والبحرين وقطر وعُمان، والعمل كله عن بعد عبر واتساب والاجتماعات أونلاين. ويظهر سعر كل باقة بعملة بلدك في دول الخليج، وبالدولار الأمريكي خارجها.",
  },
  en: {
    q: "Do you work with businesses outside the Gulf?",
    a: "Yes. We work remotely with startups and small businesses worldwide, in English and Arabic. Prices show in your local currency in the Gulf and in US dollars everywhere else.",
  },
};

/** ItemList schema with each package's name, URL and Saudi starting price. */
export function hubItemListSchema(locale: HubLocale) {
  const base = locale === "ar" ? "https://dewank.com" : "https://dewank.com/en";
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: locale === "ar" ? "باقات التسويق الإلكتروني من ديوانك" : "Dewank digital marketing packages",
    inLanguage: locale,
    numberOfItems: hubRows.length,
    itemListElement: hubRows.map((row, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: row[locale].title,
        description: row[locale].hook,
        url: base + row.path.split("#")[0],
        provider: { "@id": "https://dewank.com/#organization" },
        offers: { "@type": "Offer", price: String(row.sar), priceCurrency: "SAR", availability: "https://schema.org/InStock" },
      },
    })),
  };
}
