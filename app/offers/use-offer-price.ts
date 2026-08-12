"use client";

import { useEffect, useMemo, useState } from "react";
import { offerPricing, type LocalPrice, type OfferPriceKey } from "./offer-pricing";

const storageKey = "dewank_offer_country";

export function useOfferPrice(key: OfferPriceKey) {
  const config = offerPricing[key];
  const [price, setPrice] = useState<LocalPrice>(config.fallback);

  useEffect(() => {
    const savedCountry = window.localStorage.getItem(storageKey)?.toUpperCase();
    if (savedCountry && config.prices[savedCountry]) setPrice(config.prices[savedCountry]);

    const controller = new AbortController();
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

    return () => controller.abort();
  }, [config]);

  return useMemo(() => ({
    ...price,
    formattedAmount: new Intl.NumberFormat("ar", { maximumFractionDigits: 0 }).format(price.amount),
  }), [price]);
}
