"use client";

import { useEffect, useMemo, useState } from "react";

type LocalPrice = {
  amount: number;
  currencyCode: string;
  currencyLabel: string;
};

const pricesByCountry: Record<string, LocalPrice> = {
  SA: { amount: 790, currencyCode: "SAR", currencyLabel: "ريال سعودي" },
  AE: { amount: 790, currencyCode: "AED", currencyLabel: "درهم إماراتي" },
  BH: { amount: 79, currencyCode: "BHD", currencyLabel: "دينار بحريني" },
  KW: { amount: 65, currencyCode: "KWD", currencyLabel: "دينار كويتي" },
  QA: { amount: 790, currencyCode: "QAR", currencyLabel: "ريال قطري" },
  OM: { amount: 79, currencyCode: "OMR", currencyLabel: "ريال عُماني" },
};

const saudiFallback = pricesByCountry.SA;
const storageKey = "dewank_offer_country";

function useLocalizedPrice() {
  const [price, setPrice] = useState<LocalPrice>(saudiFallback);

  useEffect(() => {
    const savedCountry = window.localStorage.getItem(storageKey)?.toUpperCase();
    if (savedCountry && pricesByCountry[savedCountry]) {
      setPrice(pricesByCountry[savedCountry]);
    }

    const controller = new AbortController();

    fetch("https://api.country.is/", {
      cache: "no-store",
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error("Country lookup failed");
        return response.json() as Promise<{ country?: string }>;
      })
      .then((data) => {
        const country = data.country?.toUpperCase();
        if (!country) return;

        window.localStorage.setItem(storageKey, country);
        setPrice(pricesByCountry[country] ?? { amount: 210, currencyCode: "USD", currencyLabel: "دولار أمريكي" });
      })
      .catch(() => {
        // Keep the Saudi fallback when the lookup service is blocked or unavailable.
      });

    return () => controller.abort();
  }, []);

  return useMemo(
    () => ({
      ...price,
      formattedAmount: new Intl.NumberFormat("ar", { maximumFractionDigits: 0 }).format(price.amount),
    }),
    [price],
  );
}

export function LocalizedOfferPrice() {
  const price = useLocalizedPrice();

  return (
    <div className="offer-price" data-currency={price.currencyCode}>
      <strong>{price.formattedAmount}</strong>
      <span>{price.currencyLabel}</span>
    </div>
  );
}

export function LocalizedOfferKicker() {
  const price = useLocalizedPrice();
  return <span className="offer-kicker">16 قطعة محتوى · {price.formattedAmount} {price.currencyLabel}</span>;
}

export function LocalizedWhatsAppLink({ className, label }: { className: string; label: string }) {
  const price = useLocalizedPrice();
  const text = `مرحبًا ديوانك، أريد حجز باقة محتوى إنستقرام لمدة شهر بسعر ${price.formattedAmount} ${price.currencyLabel}.`;
  const href = `https://wa.me/97339066649?text=${encodeURIComponent(text)}`;

  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {label} <span>←</span>
    </a>
  );
}
