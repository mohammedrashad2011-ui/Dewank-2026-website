"use client";

import type { OfferPriceKey } from "./offer-pricing";
import { useOfferPrice } from "./use-offer-price";
import { OfferPrice as EnglishOfferPrice } from "../../(en)/en/_en/lib/localized-price";

// Hub prices reuse the two existing engines unchanged: the Arabic one (Saudi riyal first,
// then the visitor's country) and the English one (US dollar first).
function ArabicHubPrice({ offerKey }: { offerKey: OfferPriceKey }) {
  const price = useOfferPrice(offerKey);
  return <span className="offer-price"><strong>{price.formattedAmount}</strong><span>{price.currencyLabel}</span></span>;
}

export function HubPrice({ offerKey, locale }: { offerKey: OfferPriceKey; locale: "ar" | "en" }) {
  return locale === "ar" ? <ArabicHubPrice offerKey={offerKey} /> : <EnglishOfferPrice offerKey={offerKey} className="offer-price" />;
}
