"use client";

import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { offerPricing, type LocalPrice, type OfferPriceKey } from "./offer-pricing";

const storageKey = "dewank_offer_country";

// The saved country is read from localStorage through useSyncExternalStore. The server snapshot is null, so the server
// render and the first client render match, and the saved price applies as soon as the client reads it.
const subscribeToNothing = () => () => {};
const readSavedCountry = () => window.localStorage.getItem(storageKey)?.toUpperCase() ?? null;
const noSavedCountryOnServer = () => null;

export function useSavedOfferCountry() {
  return useSyncExternalStore(subscribeToNothing, readSavedCountry, noSavedCountryOnServer);
}

export function useOfferPrice(key: OfferPriceKey) {
  const config = offerPricing[key];
  const savedCountry = useSavedOfferCountry();
  const [lookedUpPrice, setLookedUpPrice] = useState<LocalPrice | null>(null);

  useEffect(() => {
    const savedCountry = window.localStorage.getItem(storageKey)?.toUpperCase();
    if (savedCountry && config.prices[savedCountry]) return;

    const controller = new AbortController();
    const win = window as Window & {
      requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    let idleId: number | undefined;
    let timeoutId: number | undefined;

    const lookupCountry = () => {
      fetch("https://api.country.is/", { cache: "no-store", signal: controller.signal })
        .then((response) => {
          if (!response.ok) throw new Error("Country lookup failed");
          return response.json() as Promise<{ country?: string }>;
        })
        .then((data) => {
          const country = data.country?.toUpperCase();
          if (!country) return;
          window.localStorage.setItem(storageKey, country);
          setLookedUpPrice(config.prices[country] ?? config.fallback);
        })
        .catch(() => {});
    };

    if (win.requestIdleCallback) {
      idleId = win.requestIdleCallback(lookupCountry, { timeout: 3000 });
    } else {
      timeoutId = window.setTimeout(lookupCountry, 2200);
    }

    return () => {
      controller.abort();
      if (idleId !== undefined) win.cancelIdleCallback?.(idleId);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, [config]);

  // Same precedence as before: a looked-up price, then the saved country's price, then the initial price.
  const savedPrice = savedCountry ? config.prices[savedCountry] : undefined;
  const price = lookedUpPrice ?? savedPrice ?? config.initial;

  return useMemo(() => ({
    ...price,
    formattedAmount: new Intl.NumberFormat("ar", { maximumFractionDigits: 0 }).format(price.amount),
  }), [price]);
}
