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
  // Optional add-ons shown on the brand naming offer. Proposed prices, pending owner approval; the 490 package is unchanged.
  "brand-naming-addon-tagline": gcc(150, 15, 12, 40),
  "brand-naming-addon-competitors": gcc(250, 25, 21, 67),
  "brand-naming-addon-extra-names": gcc(150, 15, 12, 40),
  "brand-naming-addon-rush": gcc(150, 15, 12, 40),
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
