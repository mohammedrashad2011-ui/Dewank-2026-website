"use client";

import type { OfferPriceKey } from "./offer-pricing";
import { useOfferPrice } from "./use-offer-price";

// An offer price inside running Arabic text (guides, service pages), from the same localization engine as the offer
// cards: the visitor's country price where one is approved, otherwise the fallback. Never write offer prices as text.
export function InlineOfferPrice({ offerKey }: { offerKey: OfferPriceKey }) {
  const price = useOfferPrice(offerKey);
  return <span className="inline-offer-price">{price.formattedAmount} {price.currencyLabel}</span>;
}
