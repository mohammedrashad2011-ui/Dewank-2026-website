"use client";

import { useEffect, useSyncExternalStore } from "react";
import { normalizeOfferCountry, resolveCurrentOfferPrice, type OfferPriceKey } from "./offer-pricing";

const storageKey = "dewank_offer_country";
const updateEvent = "dewank:offer-country-updated";
let visitCountry: string | null = null;
let lookup: Promise<void> | null = null;

function readCountry(): string | null {
  try { return normalizeOfferCountry(window.localStorage.getItem(storageKey)) ?? visitCountry; }
  catch { return visitCountry; }
}
const serverCountry = () => null;

function subscribe(notify: () => void) {
  window.addEventListener("storage", notify);
  window.addEventListener("focus", notify);
  window.addEventListener(updateEvent, notify);
  return () => {
    window.removeEventListener("storage", notify);
    window.removeEventListener("focus", notify);
    window.removeEventListener(updateEvent, notify);
  };
}

export function setOfferCountry(value: string) {
  const country = normalizeOfferCountry(value);
  if (!country) return;
  visitCountry = country;
  try { window.localStorage.setItem(storageKey, country); } catch {}
  window.dispatchEvent(new Event(updateEvent));
}

function lookupCountry() {
  if (readCountry()) return;
  if (!lookup) {
    lookup = fetch("https://api.country.is/", { cache: "no-store" })
      .then(response => {
        if (!response.ok) throw new Error("Country lookup failed");
        return response.json() as Promise<{ country?: string }>;
      })
      .then(data => {
        const country = normalizeOfferCountry(data.country);
        if (country && !readCountry()) setOfferCountry(country);
      })
      .catch(() => {})
      .finally(() => { lookup = null; });
  }
}

export function useSavedOfferCountry() {
  return useSyncExternalStore(subscribe, readCountry, serverCountry);
}

/** One shared lookup across all mounted price readers; no network work during SSR. */
export function useLocalizedOfferCountry(delay = 2200, enabled = true) {
  const country = useSavedOfferCountry();
  useEffect(() => {
    if (country || !enabled) return;
    const timer = window.setTimeout(lookupCountry, delay);
    return () => window.clearTimeout(timer);
  }, [country, delay, enabled]);
  return country;
}

export function useOfferPrice(key: OfferPriceKey) {
  const country = useLocalizedOfferCountry();
  const price = resolveCurrentOfferPrice(key, country);
  return {
    ...price,
    formattedAmount: new Intl.NumberFormat("ar", { maximumFractionDigits: 0 }).format(price.amount),
  };
}
