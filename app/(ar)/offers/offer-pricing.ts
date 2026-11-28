export type LocalPrice = {
  amount: number;
  currencyLabel: string;
};

export type OfferPriceConfig = {
  prices: Record<string, LocalPrice>;
  initial: LocalPrice;
  fallback: LocalPrice;
};

const gcc = (sa: number, bh: number, kw: number, fallback: number): OfferPriceConfig => ({
  prices: {
    SA: { amount: sa, currencyLabel: "ريال سعودي" },
    AE: { amount: sa, currencyLabel: "درهم إماراتي" },
    BH: { amount: bh, currencyLabel: "دينار بحريني" },
    KW: { amount: kw, currencyLabel: "دينار كويتي" },
    QA: { amount: sa, currencyLabel: "ريال قطري" },
    OM: { amount: bh, currencyLabel: "ريال عُماني" },
  },
  initial: { amount: sa, currencyLabel: "ريال سعودي" },
  fallback: { amount: fallback, currencyLabel: "دولار أمريكي" },
});

export const offerPricing = {
  "30-day-content-package": gcc(790, 79, 65, 210),
  // Video packages: fixed-scope pilot prices; no live FX conversion.
  "video-edit": gcc(990, 99, 82, 265),
  "video-ai": gcc(1290, 129, 107, 345),
  "video-ads": gcc(1890, 189, 156, 505),
  "landing-page-package": gcc(1490, 149, 125, 399),
  "landing-page-package-full": gcc(1890, 189, 159, 505),
  "seo-audit": gcc(490, 49, 39, 130),
  "brand-naming": gcc(490, 49, 39, 130),
  "whatsapp-automation-starter": gcc(890, 89, 73, 235),
  "mini-visual-identity": gcc(1190, 119, 99, 318),
  // Brand naming + essential visual identity bundle, approved by the owner 2026-11-19 (less than 490 + 1,190 separately).
  "name-identity-bundle": gcc(1490, 149, 125, 399),
  "google-ads-launch": gcc(790, 79, 65, 211),
  "instagram-14-day-upgrade": gcc(590, 59, 49, 158),
  "small-business-website": gcc(1990, 199, 165, 530),
  "cro-snapshot": gcc(290, 29, 23, 79),
  "cro-audit": gcc(590, 59, 49, 159),
  "cro-growth-diagnostic": gcc(1190, 119, 99, 319),
} as const satisfies Record<string, OfferPriceConfig>;

export type OfferPriceKey = keyof typeof offerPricing;

export function getOfferPriceConfig(key: OfferPriceKey): OfferPriceConfig {
  return offerPricing[key];
}

/**
 * Year-end campaign. The approved SAR prices are explicit; the other market prices
 * below are proposed fixed amounts, preserving the existing local pricing ratios
 * (whole units for BH/OM and KW, nearest 5 for USD). No exchange-rate API.
 * This table and offerPricing are the only sources of package amounts.
 *
 * Integration gate: the legacy exports above deliberately still return the current
 * amounts until ALL display, message, metadata and cache paths use the same quote.
 * Do not publish/merge a partially integrated campaign.
 */
export const offerFuturePricing = {
  "30-day-content-package": gcc(970, 97, 80, 260),
  "video-edit": gcc(1270, 127, 105, 340),
  "video-ai": gcc(1670, 167, 139, 445),
  "video-ads": gcc(2470, 247, 204, 660),
  "landing-page-package": gcc(1740, 174, 146, 465),
  "landing-page-package-full": gcc(2240, 224, 188, 600),
  "seo-audit": gcc(650, 65, 52, 170),
  "brand-naming": gcc(690, 69, 55, 185),
  "whatsapp-automation-starter": gcc(1170, 117, 96, 310),
  "mini-visual-identity": gcc(1470, 147, 122, 395),
  "name-identity-bundle": gcc(1870, 187, 157, 500),
  "google-ads-launch": gcc(1070, 107, 88, 285),
  "instagram-14-day-upgrade": gcc(740, 74, 61, 200),
  "small-business-website": gcc(2470, 247, 205, 660),
  "cro-snapshot": gcc(390, 39, 31, 105),
  "cro-audit": gcc(770, 77, 64, 210),
  "cro-growth-diagnostic": gcc(1470, 147, 122, 395),
} as const satisfies Record<OfferPriceKey, OfferPriceConfig>;

export const yearEndOffer = {
  endDate: "2026-12-31",
  // Exclusive end: midnight on 1 January in Asia/Riyadh.
  endsAt: "2027-01-01T00:00:00+03:00",
  timeZone: "Asia/Riyadh",
} as const;

export function isYearEndOfferActive(at: number): boolean {
  if (!Number.isFinite(at)) throw new RangeError("Invalid quote timestamp");
  return at < Date.parse(yearEndOffer.endsAt);
}

function marketPrice(config: OfferPriceConfig, country: string | null): LocalPrice {
  if (!country) return config.initial;
  const code = country.trim().toUpperCase();
  return Object.prototype.hasOwnProperty.call(config.prices, code)
    ? config.prices[code]
    : config.fallback;
}

/** Explicit time input lets server, client and tests share a consistent quote. */
export function getOfferQuote(key: OfferPriceKey, country: string | null, at: number) {
  const campaignPrice = marketPrice(offerPricing[key], country);
  const futurePrice = marketPrice(offerFuturePricing[key], country);
  const active = isYearEndOfferActive(at);
  const price = active ? campaignPrice : futurePrice;
  const savings = active ? futurePrice.amount - campaignPrice.amount : 0;
  return {
    ...price,
    active,
    futureAmount: futurePrice.amount,
    savings,
    savingsPercent: active ? Math.round(savings / futurePrice.amount * 100) : 0,
    endDate: yearEndOffer.endDate,
  };
}

/** Shared market selection, deliberately pinned to current pricing until the release gate is complete. */
export function normalizeOfferCountry(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const code = value.trim().toUpperCase();
  return /^[A-Z]{2}$/.test(code) ? code : null;
}

export function resolveCurrentOfferPrice(key: OfferPriceKey, country: string | null) {
  const normalized = normalizeOfferCountry(country);
  const config = offerPricing[key];
  const codes: Record<string, string> = { SA: "SAR", AE: "AED", BH: "BHD", KW: "KWD", QA: "QAR", OM: "OMR" };
  return { ...marketPrice(config, normalized), currency: normalized ? (codes[normalized] ?? "USD") : "SAR" };
}
