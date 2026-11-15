"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { offerPricing, type OfferPriceKey } from "../offer-pricing";

type Locale = "ar" | "en";
const storageKey = "dewank_offer_country";
const updateEvent = "dewank:offer-country-updated";
const codes: Record<string, string> = {
  SA: "SAR", AE: "AED", BH: "BHD", KW: "KWD", QA: "QAR", OM: "OMR",
};

function safeCountry(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const code = value.trim().toUpperCase();
  return /^[A-Z]{2}$/.test(code) ? code : null;
}

function readStoredCountry() {
  try { return safeCountry(window.localStorage.getItem(storageKey)); }
  catch { return null; }
}

function subscribeToCountry(notify: () => void) {
  window.addEventListener("storage", notify);
  window.addEventListener("focus", notify);
  window.addEventListener(updateEvent, notify);
  return () => {
    window.removeEventListener("storage", notify);
    window.removeEventListener("focus", notify);
    window.removeEventListener(updateEvent, notify);
  };
}

let lookup: Promise<string | null> | null = null;

function lookupCountry(): Promise<string | null> {
  if (!lookup) {
    lookup = fetch("https://api.country.is/", { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error("Country lookup unavailable");
        return res.json() as Promise<{ country?: string | null }>;
      })
      .then(({ country }) => safeCountry(country))
      .catch(() => null);
  }
  return lookup;
}

/**
 * Mirrors Dewank's existing offer pricing config and dewank_offer_country override.
 * Server + hydration: the shared Saudi initial price. Country is resolved after paint.
 * Unsupported countries: the existing USD fallback. No client-side FX conversions.
 */
export function useVideoOfferCountry() {
  const savedCountry = useSyncExternalStore(subscribeToCountry, readStoredCountry, () => null);
  const [resolvedCountry, setResolvedCountry] = useState<string | null>(null);

  useEffect(() => {
    if (savedCountry) return;
    let cancelled = false;
    const timer = window.setTimeout(() => {
      void lookupCountry().then((country) => {
        if (cancelled || !country) return;
        try {
          window.localStorage.setItem(storageKey, country);
          window.dispatchEvent(new Event(updateEvent));
        } catch {
          // Private browsing: still use the resolved price during this visit.
        }
        setResolvedCountry(country);
      });
    }, 900);
    return () => { cancelled = true; window.clearTimeout(timer); };
  }, [savedCountry]);

  return savedCountry ?? resolvedCountry;
}

/** Manual country correction when IP-based geolocation is inaccurate. Shared across existing offers. */
export function setVideoOfferCountry(country: string) {
  const selected = safeCountry(country);
  if (!selected) return;
  try {
    window.localStorage.setItem(storageKey, selected);
    window.dispatchEvent(new Event(updateEvent));
  } catch {
    // The visitor may have storage blocked; automatic fallback remains available.
  }
}

export function getVideoOfferPrice(key: OfferPriceKey, country: string | null, locale: Locale) {
  const config = offerPricing[key];
  const offer = country ? config.prices[country] ?? config.fallback : config.initial;
  const isFallback = !!country && !config.prices[country];
  const code = isFallback ? "USD" : country ? (codes[country] ?? "SAR") : "SAR";
  const label = locale === "en" ? code : offer.currencyLabel;
  const amount = new Intl.NumberFormat(locale === "ar" ? "ar" : "en", {
    maximumFractionDigits: 0,
  }).format(offer.amount);

  return { amount: offer.amount, currency: code, currencyLabel: label, digits: amount, formatted: amount + " " + label };
}

export function VideoLocalizedOfferPrice({ priceKey, locale }: { priceKey: OfferPriceKey; locale: Locale }) {
  const country = useVideoOfferCountry();
  const { digits, currencyLabel } = getVideoOfferPrice(priceKey, country, locale);

  return <div className="offer-price"><strong>{digits}</strong><span>{currencyLabel}</span></div>;
}
