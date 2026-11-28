import { resolveCurrentOfferPrice, type OfferPriceKey } from "./offer-pricing";
import { hubOffers, hubVideo, type HubLocale } from "./offers-hub-data";

// Rows and facts for the offers hub summary table, FAQ and schema.
// Visible prices are never written here as text: the page renders them with HubPrice, the same localized
// engine as the cards (visitor's country price, then the fallback). This file only orders the rows by price.
type RowText = { title: string; hook: string; time: string };

const videoKey: OfferPriceKey = "video-edit";

// Where a card hook is a slogan rather than a deliverable, the table states the deliverable (taken from the card text).
const getOverride: Record<string, { ar: string; en: string }> = {
  "brand-naming": { ar: "10–15 اسمًا مدروسًا، فحص مبدئي، أفضل 3 ترشيحات و3 شعارات لفظية", en: "10–15 considered names, preliminary checks, a top three and 3 taglines" },
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
  };
});

// Approved prices keep the same order in every market, so the Saudi starting price decides cheapest and dearest.
const bySar = [...hubRows].sort((a, b) => resolveCurrentOfferPrice(a.key, null).amount - resolveCurrentOfferPrice(b.key, null).amount);

export const hubFacts = {
  count: hubRows.length,
  cheapest: bySar[0],
  priciest: bySar[bySar.length - 1],
};

/** The summary paragraph around the localized starting price: [before] min [after]. */
export const hubSummaryParts = {
  ar: {
    before: `تقدم ديوانك ${hubFacts.count} باقة تسويق إلكتروني بنطاق محدد وسعر بداية معلن، للشركات والمتاجر في السعودية والخليج. تبدأ الأسعار من `,
    after: "، والتسليم من 48 ساعة إلى نحو 14 يوم عمل. تطلب الباقة عبر واتساب، ونؤكد النطاق والسعر قبل الدفع.",
  },
  en: {
    before: `Dewank offers ${hubFacts.count} digital marketing packages with a fixed scope and a published starting price, for small businesses in the Gulf and worldwide. Prices start at `,
    after: ", with delivery from 48 hours to about 14 working days. You order on WhatsApp, and we confirm the scope and price before you pay.",
  },
};

// FAQ text is identical in the visible FAQ and the FAQPage schema, so it names packages, not amounts.
export const hubPriceFaq = {
  ar: {
    q: "كم أسعار باقات التسويق الإلكتروني لدى ديوانك؟",
    a: `أقل باقة سعرًا هي ${hubFacts.cheapest.ar.title}، وأعلاها ${hubFacts.priciest.ar.title}. يظهر سعر بداية كل باقة في جدول الأسعار وعلى بطاقتها بعملة بلدك تلقائيًا، وتجد في صفحة كل باقة ما تشمله وما لا تشمله.`,
  },
  en: {
    q: "How much do your digital marketing packages cost?",
    a: `The lowest-priced package is the ${hubFacts.cheapest.en.title.toLowerCase()} and the highest is the ${hubFacts.priciest.en.title.toLowerCase()}. Each package's starting price appears in the price table and on its card in your local currency, and each package page lists what is included.`,
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

/** ItemList schema: each package's name, URL and base (Saudi) starting price, with its currency stated. */
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
        offers: { "@type": "Offer", price: String(resolveCurrentOfferPrice(row.key, null).amount), priceCurrency: "SAR", availability: "https://schema.org/InStock" },
      },
    })),
  };
}
