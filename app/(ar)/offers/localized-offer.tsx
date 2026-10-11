"use client";

import { useEffect, useMemo, useState } from "react";
import { offerPricing, type LocalPrice } from "./offer-pricing";
import { useSavedOfferCountry } from "./use-offer-price";

const config = offerPricing["30-day-content-package"];
const storageKey = "dewank_offer_country";

function useLocalizedPrice() {
  const savedCountry = useSavedOfferCountry();
  const [lookedUpPrice, setLookedUpPrice] = useState<LocalPrice | null>(null);

  useEffect(() => {
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
        setLookedUpPrice(config.prices[country] ?? config.fallback);
      })
      .catch(() => {});

    return () => controller.abort();
  }, []);

  // Same precedence as before: a looked-up price, then the saved country's price, then the initial price.
  const savedPrice = savedCountry ? config.prices[savedCountry] : undefined;
  const price = lookedUpPrice ?? savedPrice ?? config.initial;

  return useMemo(() => ({
    ...price,
    formattedAmount: new Intl.NumberFormat("ar", { maximumFractionDigits: 0 }).format(price.amount),
  }), [price]);
}

export function LocalizedOfferPrice() {
  const price = useLocalizedPrice();
  return <div className="offer-price"><strong>{price.formattedAmount}</strong><span>{price.currencyLabel}</span></div>;
}

export function LocalizedOfferKicker() {
  const price = useLocalizedPrice();
  return <span className="offer-kicker">16 قطعة محتوى · {price.formattedAmount} {price.currencyLabel}</span>;
}

export function LocalizedWhatsAppLink({ className, label }: { className: string; label: string }) {
  const price = useLocalizedPrice();
  const text = `مرحبًا ديوانك، مهتم بباقة محتوى 30 يوم بسعر ${price.formattedAmount} ${price.currencyLabel}. أريد التأكد هل الباقة مناسبة لنشاطي وما المطلوب للبدء.`;
  const href = `https://wa.me/97339066649?text=${encodeURIComponent(text)}`;
  return <a className={className} href={href} target="_blank" rel="noreferrer">{label} <span>←</span></a>;
}
