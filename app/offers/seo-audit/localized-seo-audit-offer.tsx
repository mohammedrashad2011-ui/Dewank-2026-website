"use client";

import { useEffect, useMemo, useState } from "react";

type LocalPrice = {
  amount: number;
  currencyCode: string;
  currencyLabel: string;
};

const prices: Record<string, LocalPrice> = {
  SA: { amount: 490, currencyCode: "SAR", currencyLabel: "ريال سعودي" },
  AE: { amount: 490, currencyCode: "AED", currencyLabel: "درهم إماراتي" },
  BH: { amount: 49, currencyCode: "BHD", currencyLabel: "دينار بحريني" },
  KW: { amount: 39, currencyCode: "KWD", currencyLabel: "دينار كويتي" },
  QA: { amount: 490, currencyCode: "QAR", currencyLabel: "ريال قطري" },
  OM: { amount: 49, currencyCode: "OMR", currencyLabel: "ريال عُماني" },
};

const fallback: LocalPrice = { amount: 130, currencyCode: "USD", currencyLabel: "دولار أمريكي" };
const storageKey = "dewank_offer_country";

function useSeoAuditPrice() {
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
  }, []);

  return useMemo(() => ({
    ...price,
    formattedAmount: new Intl.NumberFormat("ar", { maximumFractionDigits: 0 }).format(price.amount),
  }), [price]);
}

export function SeoAuditOfferPrice() {
  const price = useSeoAuditPrice();
  return <div className="offer-price"><strong>{price.formattedAmount}</strong><span>{price.currencyLabel}</span></div>;
}

export function SeoAuditWhatsApp({ className, label }: { className: string; label: string }) {
  const price = useSeoAuditPrice();
  const text = `مرحبًا ديوانك، أريد حجز فحص SEO شامل لموقعي بسعر ${price.formattedAmount} ${price.currencyLabel}. رابط موقعي: `;
  const href = `https://wa.me/97339066649?text=${encodeURIComponent(text)}`;

  return <a className={className} href={href} target="_blank" rel="noreferrer">{label} <span>←</span></a>;
}
