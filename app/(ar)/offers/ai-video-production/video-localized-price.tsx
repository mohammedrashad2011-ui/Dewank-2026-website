"use client";

import { resolveCurrentOfferPrice, type OfferPriceKey } from "../offer-pricing";
import { useLocalizedOfferCountry, setOfferCountry } from "../use-offer-price";

type Locale = "ar" | "en";

export function useVideoOfferCountry() {
  return useLocalizedOfferCountry(900);
}

export const setVideoOfferCountry = setOfferCountry;

export function getVideoOfferPrice(key: OfferPriceKey, country: string | null, locale: Locale) {
  const offer = resolveCurrentOfferPrice(key, country);
  const label = locale === "en" ? offer.currency : offer.currencyLabel;
  const amount = new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(offer.amount);
  return { amount: offer.amount, currency: offer.currency, currencyLabel: label, digits: amount, formatted: amount + " " + label };
}

export function VideoLocalizedOfferPrice({ priceKey, locale }: { priceKey: OfferPriceKey; locale: Locale }) {
  const country = useVideoOfferCountry();
  const { digits, currencyLabel } = getVideoOfferPrice(priceKey, country, locale);

  return <div className="offer-price"><strong>{digits}</strong><span>{currencyLabel}</span></div>;
}
