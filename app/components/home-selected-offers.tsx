"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type CountryCode = "SA" | "AE" | "BH" | "KW" | "QA" | "OM";
type OfferKey = "google" | "seo" | "whatsapp";
type LocalPrice = { amount: number; currencyLabel: string };

const prices: Record<OfferKey, Record<CountryCode, LocalPrice>> = {
  google: {
    SA: { amount: 790, currencyLabel: "ريال سعودي" },
    AE: { amount: 790, currencyLabel: "درهم إماراتي" },
    BH: { amount: 79, currencyLabel: "دينار بحريني" },
    KW: { amount: 65, currencyLabel: "دينار كويتي" },
    QA: { amount: 790, currencyLabel: "ريال قطري" },
    OM: { amount: 79, currencyLabel: "ريال عُماني" },
  },
  seo: {
    SA: { amount: 490, currencyLabel: "ريال سعودي" },
    AE: { amount: 490, currencyLabel: "درهم إماراتي" },
    BH: { amount: 49, currencyLabel: "دينار بحريني" },
    KW: { amount: 39, currencyLabel: "دينار كويتي" },
    QA: { amount: 490, currencyLabel: "ريال قطري" },
    OM: { amount: 49, currencyLabel: "ريال عُماني" },
  },
  whatsapp: {
    SA: { amount: 890, currencyLabel: "ريال سعودي" },
    AE: { amount: 890, currencyLabel: "درهم إماراتي" },
    BH: { amount: 89, currencyLabel: "دينار بحريني" },
    KW: { amount: 73, currencyLabel: "دينار كويتي" },
    QA: { amount: 890, currencyLabel: "ريال قطري" },
    OM: { amount: 89, currencyLabel: "ريال عُماني" },
  },
};

const fallbacks: Record<OfferKey, LocalPrice> = {
  google: { amount: 211, currencyLabel: "دولار أمريكي" },
  seo: { amount: 130, currencyLabel: "دولار أمريكي" },
  whatsapp: { amount: 235, currencyLabel: "دولار أمريكي" },
};

const offers = [
  { key: "google" as const, label: "GOOGLE ADS", title: "إطلاق Google Ads", text: "حملة Search منظمة، كلمات بنية شراء، إعلانات، كلمات سلبية وتتبع تحويل أساسي.", href: "/offers/google-ads-launch" },
  { key: "seo" as const, label: "SEO AUDIT", title: "فحص SEO شامل", text: "تشخيص واضح للظهور، التقنية، المحتوى والفرص قبل الدخول في تنفيذ أكبر.", href: "/offers/seo-audit" },
  { key: "whatsapp" as const, label: "WHATSAPP AUTOMATION", title: "واتساب أوتوميشن Starter", text: "رد وتأهيل وجمع بيانات وتحويل للموظف في مسار تأسيسي واضح.", href: "/offers/whatsapp-automation-starter" },
];

const storageKey = "dewank_offer_country";

export default function HomeSelectedOffers() {
  const [country, setCountry] = useState<CountryCode | null>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey)?.toUpperCase() as CountryCode | undefined;
    if (saved && ["SA", "AE", "BH", "KW", "QA", "OM"].includes(saved)) setCountry(saved);

    const controller = new AbortController();
    fetch("https://api.country.is/", { cache: "no-store", signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Country lookup failed");
        return response.json() as Promise<{ country?: string }>;
      })
      .then((data) => {
        const next = data.country?.toUpperCase() as CountryCode | undefined;
        if (!next || !["SA", "AE", "BH", "KW", "QA", "OM"].includes(next)) return;
        window.localStorage.setItem(storageKey, next);
        setCountry(next);
      })
      .catch(() => {});

    return () => controller.abort();
  }, []);

  const resolved = useMemo(() => offers.map((offer) => ({
    ...offer,
    price: country ? prices[offer.key][country] : fallbacks[offer.key],
  })), [country]);

  return (
    <div className="home-offer-grid">
      {resolved.map((offer) => (
        <Link className="home-offer-card" href={offer.href} key={offer.key}>
          <div className="home-offer-top"><small>{offer.label}</small><span>↗</span></div>
          <h3>{offer.title}</h3>
          <p>{offer.text}</p>
          <div className="home-offer-bottom">
            <div className="home-offer-price"><strong>{new Intl.NumberFormat("ar", { maximumFractionDigits: 0 }).format(offer.price.amount)}</strong><span>{offer.price.currencyLabel}</span></div>
            <b>شاهد العرض</b>
          </div>
        </Link>
      ))}
    </div>
  );
}
