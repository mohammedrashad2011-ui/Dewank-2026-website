"use client";

import { normalizeOfferCountry, resolveCurrentOfferPrice, type OfferPriceKey } from "@/app/(ar)/offers/offer-pricing";
import { useLocalizedOfferCountry } from "@/app/(ar)/offers/use-offer-price";

export const COUNTRY_LOOKUP_APPROVED: boolean = true;
const amountFormatter = new Intl.NumberFormat("en", { maximumFractionDigits: 0 });

export const normaliseCountry = normalizeOfferCountry;

export function resolveOfferPrice(key: OfferPriceKey, country: string | null) {
  const { amount, currency } = resolveCurrentOfferPrice(key, country);
  return { amount, currency };
}

export function useOfferCountry(): string | null {
  return useLocalizedOfferCountry(6500, COUNTRY_LOOKUP_APPROVED);
}

// Renders the amount and currency for one offer, e.g. "130" and "USD" or "490" and "SAR".
export function OfferPrice({ offerKey, className }: { offerKey: OfferPriceKey; className?: string }) {
  const country = useOfferCountry();
  const price = resolveOfferPrice(offerKey, country);
  return (
    <span className={className ?? "offer-price"}>
      <strong>{amountFormatter.format(price.amount)}</strong>
      <span>{price.currency}</span>
    </span>
  );
}
