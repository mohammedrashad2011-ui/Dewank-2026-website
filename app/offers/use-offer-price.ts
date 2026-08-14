"use client";

import { useEffect, useMemo, useState } from "react";
import { offerPricing, type LocalPrice, type OfferPriceKey } from "./offer-pricing";

const storageKey = "dewank_offer_country";

export function useOfferPrice(key: OfferPriceKey) {
  const config = offerPricing[key];
  const [price, setPrice] = useState<LocalPrice>(config.fallback);

  useEffect(() => {
    const savedCountry = window.localStorage.getItem(storageKey)?.toUpperCase();
    if (savedCountry && config.prices[savedCountry]) {
      setPrice(config.prices[savedCountry]);
      return;
    }

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
          setPrice(config.prices[country] ?? config.fallback);
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

  return useMemo(() => ({
    ...price,
    formattedAmount: new Intl.NumberFormat("ar", { maximumFractionDigits: 0 }).format(price.amount),
  }), [price]);
}
