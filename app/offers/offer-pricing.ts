export type LocalPrice = {
  amount: number;
  currencyLabel: string;
};

export type OfferPriceConfig = {
  prices: Record<string, LocalPrice>;
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
  fallback: { amount: fallback, currencyLabel: "دولار أمريكي" },
});

export const offerPricing = {
  "30-day-content-package": gcc(790, 79, 65, 210),
  "landing-page-package": gcc(1490, 149, 125, 399),
  "landing-page-package-full": gcc(1890, 189, 159, 505),
  "seo-audit": gcc(490, 49, 39, 130),
  "brand-naming": gcc(490, 49, 39, 130),
  "whatsapp-automation-starter": gcc(890, 89, 73, 235),
  "mini-visual-identity": gcc(1190, 119, 99, 318),
  "google-ads-launch": gcc(790, 79, 65, 211),
  "instagram-14-day-upgrade": gcc(590, 59, 49, 158),
  "small-business-website": gcc(1990, 199, 165, 530),
} as const satisfies Record<string, OfferPriceConfig>;

export type OfferPriceKey = keyof typeof offerPricing;

export function getOfferPriceConfig(key: OfferPriceKey): OfferPriceConfig {
  return offerPricing[key];
}
