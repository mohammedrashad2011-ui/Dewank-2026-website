"use client";

// One English pricing engine for every English offer presentation. It reads the approved configuration in
// app/offers/offer-pricing.ts and applies the same rule as the Arabic site:
// - Server and first client render: the Saudi riyal price (the canonical base market).
// - A saved country (localStorage key shared with the Arabic site) switches the amount to that country's approved price
//   where one exists. A country without an approved price gets the USD fallback. No currency is converted.
// - The country lookup uses api.country.is, the same provider as the Arabic site. The English privacy notice describes it.
import { useSyncExternalStore, useEffect, useState } from "react";
import { offerPricing, type OfferPriceKey } from "@/app/(ar)/offers/offer-pricing";

export const COUNTRY_LOOKUP_APPROVED: boolean = true;
const countryStorageKey = "dewank_offer_country";

// ISO codes replace the Arabic currency names in the configuration. Every country in offer-pricing.ts is listed here.
const currencyCodes: Record<string, string> = { SA: "SAR", AE: "AED", BH: "BHD", KW: "KWD", QA: "QAR", OM: "OMR" };
const fallbackCurrencyCode = "USD";
const amountFormatter = new Intl.NumberFormat("en", { maximumFractionDigits: 0 });

export function normaliseCountry(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const code = value.trim().toUpperCase();
  return /^[A-Z]{2}$/.test(code) ? code : null;
}

export function resolveOfferPrice(key: OfferPriceKey, country: string | null) {
  const config = offerPricing[key];
  if (!country) return { amount: config.initial.amount, currency: currencyCodes.SA };
  const local = config.prices[country];
  if (local) return { amount: local.amount, currency: currencyCodes[country] ?? fallbackCurrencyCode };
  return { amount: config.fallback.amount, currency: fallbackCurrencyCode };
}

function readSavedCountry(): string | null {
  try {
    return normaliseCountry(window.localStorage.getItem(countryStorageKey));
  } catch {
    return null;
  }
}

function writeSavedCountry(country: string) {
  try {
    window.localStorage.setItem(countryStorageKey, country);
  } catch {
    // Storage is blocked; the visitor sees USD until the next lookup.
  }
}

const noopSubscribe = () => () => {};

// The saved country is read through useSyncExternalStore: the server and the first client render use null (USD),
// so there is no hydration mismatch.
export function useOfferCountry(): string | null {
  const saved = useSyncExternalStore(noopSubscribe, readSavedCountry, () => null);
  const [lookedUp, setLookedUp] = useState<string | null>(null);

  useEffect(() => {
    if (saved || !COUNTRY_LOOKUP_APPROVED) return;
    let cancelled = false;
    let controller: AbortController | null = null;
    const timer = window.setTimeout(() => {
      controller = new AbortController();
      fetch("https://api.country.is/", { cache: "no-store", signal: controller.signal })
        .then((response) => {
          if (!response.ok) throw new Error("Country lookup failed");
          return response.json() as Promise<{ country?: string }>;
        })
        .then((data) => {
          const next = normaliseCountry(data.country);
          if (!next || cancelled) return;
          writeSavedCountry(next);
          setLookedUp(next);
        })
        .catch(() => {});
    }, 6500);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      controller?.abort();
    };
  }, [saved]);

  return saved ?? lookedUp;
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
