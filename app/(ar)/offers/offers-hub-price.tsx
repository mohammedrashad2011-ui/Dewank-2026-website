"use client";

import { resolveCurrentOfferPrice, type OfferPriceKey } from "./offer-pricing";
import { useLocalizedOfferCountry } from "./use-offer-price";

// Use separate class names for inline text and cards so CSS loaded by other
// offer routes cannot turn a sentence price into a large hero price on Back.
export function HubPrice({ offerKey, locale, inline = false }: { offerKey: OfferPriceKey; locale: "ar" | "en"; inline?: boolean }) {
  const country = useLocalizedOfferCountry(locale === "ar" ? 2200 : 6500);
  const price = resolveCurrentOfferPrice(offerKey, country);
  const amount = new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(price.amount);
  const currency = locale === "ar" ? price.currencyLabel : price.currency;
  return <span className={inline ? "oh-inline-amount" : "oh-card-amount"}><strong>{amount}</strong><span>{currency}</span></span>;
}
