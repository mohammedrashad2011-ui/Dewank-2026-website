"use client";

import { useEffect, useMemo, useState } from "react";

type LocalPrice = { amount: number; currencyLabel: string };

const prices: Record<string, LocalPrice> = {
  SA: { amount: 590, currencyLabel: "ريال سعودي" },
  AE: { amount: 590, currencyLabel: "درهم إماراتي" },
  BH: { amount: 59, currencyLabel: "دينار بحريني" },
  KW: { amount: 49, currencyLabel: "دينار كويتي" },
  QA: { amount: 590, currencyLabel: "ريال قطري" },
  OM: { amount: 59, currencyLabel: "ريال عُماني" },
};

const fallback: LocalPrice = { amount: 158, currencyLabel: "دولار أمريكي" };
const storageKey = "dewank_offer_country";

function useInstagramUpgradePrice() {
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
      .catch(() => {});

    return () => controller.abort();
  }, []);

  return useMemo(() => ({
    ...price,
    formattedAmount: new Intl.NumberFormat("ar", { maximumFractionDigits: 0 }).format(price.amount),
  }), [price]);
}

export function InstagramUpgradePrice() {
  const price = useInstagramUpgradePrice();
  return <div className="offer-price"><strong>{price.formattedAmount}</strong><span>{price.currencyLabel}</span></div>;
}

export function InstagramUpgradeWhatsApp({ className, label }: { className: string; label: string }) {
  const price = useInstagramUpgradePrice();
  const text = `مرحبًا ديوانك، أريد باقة تطوير حساب إنستجرام خلال 14 يوم بسعر ${price.formattedAmount} ${price.currencyLabel}.`;
  return <a className={className} href={`https://wa.me/97339066649?text=${encodeURIComponent(text)}`} target="_blank" rel="noreferrer">{label} <span>←</span></a>;
}
