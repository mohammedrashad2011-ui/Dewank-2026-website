"use client";

import { useEffect, useMemo, useState } from "react";

type LocalPrice = {
  amount: number;
  currencyCode: string;
  currencyLabel: string;
};

const basePrices: Record<string, LocalPrice> = {
  SA: { amount: 1490, currencyCode: "SAR", currencyLabel: "ريال سعودي" },
  AE: { amount: 1490, currencyCode: "AED", currencyLabel: "درهم إماراتي" },
  BH: { amount: 149, currencyCode: "BHD", currencyLabel: "دينار بحريني" },
  KW: { amount: 125, currencyCode: "KWD", currencyLabel: "دينار كويتي" },
  QA: { amount: 1490, currencyCode: "QAR", currencyLabel: "ريال قطري" },
  OM: { amount: 149, currencyCode: "OMR", currencyLabel: "ريال عُماني" },
};

const fullPrices: Record<string, LocalPrice> = {
  SA: { amount: 1890, currencyCode: "SAR", currencyLabel: "ريال سعودي" },
  AE: { amount: 1890, currencyCode: "AED", currencyLabel: "درهم إماراتي" },
  BH: { amount: 189, currencyCode: "BHD", currencyLabel: "دينار بحريني" },
  KW: { amount: 159, currencyCode: "KWD", currencyLabel: "دينار كويتي" },
  QA: { amount: 1890, currencyCode: "QAR", currencyLabel: "ريال قطري" },
  OM: { amount: 189, currencyCode: "OMR", currencyLabel: "ريال عُماني" },
};

const baseFallback: LocalPrice = { amount: 399, currencyCode: "USD", currencyLabel: "دولار أمريكي" };
const fullFallback: LocalPrice = { amount: 505, currencyCode: "USD", currencyLabel: "دولار أمريكي" };
const storageKey = "dewank_offer_country";

function useLandingPrice(kind: "base" | "full") {
  const prices = kind === "base" ? basePrices : fullPrices;
  const fallback = kind === "base" ? baseFallback : fullFallback;
  const [price, setPrice] = useState<LocalPrice>(fallback);

  useEffect(() => {
    const savedCountry = window.localStorage.getItem(storageKey)?.toUpperCase();
    if (savedCountry && prices[savedCountry]) setPrice(prices[savedCountry]);

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
        setPrice(prices[country] ?? fallback);
      })
      .catch(() => {
        // Keep the USD fallback when country detection is unavailable.
      });

    return () => controller.abort();
  }, [fallback, prices]);

  return useMemo(() => ({
    ...price,
    formattedAmount: new Intl.NumberFormat("ar", { maximumFractionDigits: 0 }).format(price.amount),
  }), [price]);
}

export function LandingOfferPrice({ kind }: { kind: "base" | "full" }) {
  const price = useLandingPrice(kind);
  return <div className="offer-price"><strong>{price.formattedAmount}</strong><span>{price.currencyLabel}</span></div>;
}

export function LandingOfferWhatsApp({ kind, className, label }: { kind: "base" | "full"; className: string; label: string }) {
  const price = useLandingPrice(kind);
  const packageName = kind === "base" ? "باقة صفحة الهبوط" : "باقة صفحة الهبوط الكاملة مع الدومين والاستضافة";
  const text = `مرحبًا ديوانك، أريد حجز ${packageName} بسعر ${price.formattedAmount} ${price.currencyLabel}.`;
  const href = `https://wa.me/97339066649?text=${encodeURIComponent(text)}`;

  return <a className={className} href={href} target="_blank" rel="noreferrer">{label} <span>←</span></a>;
}
