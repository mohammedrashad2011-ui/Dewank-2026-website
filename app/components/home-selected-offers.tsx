"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type CountryCode = "SA" | "AE" | "BH" | "KW" | "QA" | "OM";
type OfferKey = "google" | "seo" | "whatsapp";
type LocalPrice = { amount: number; currencyLabel: string };
type InterestMap = Record<OfferKey, number>;

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

const countryStorageKey = "dewank_offer_country";
const interestStorageKey = "dewank_home_offer_interest_v1";
const zeroInterest: InterestMap = { google: 0, seo: 0, whatsapp: 0 };
const defaultPopularity: InterestMap = { google: 3, seo: 2, whatsapp: 1 };

function inferInterestFromReferrer(): OfferKey | null {
  if (!document.referrer) return null;
  try {
    const referrer = new URL(document.referrer);
    if (referrer.origin !== window.location.origin) return null;
    const path = referrer.pathname.toLowerCase();
    if (path.includes("paid-ads") || path.includes("google-ads")) return "google";
    if (path.includes("seo-aeo") || path.includes("seo-audit") || path.includes("/guides/seo")) return "seo";
    if (path.includes("whatsapp") || path.includes("automation") || path.includes("crm")) return "whatsapp";
  } catch {}
  return null;
}

export default function HomeSelectedOffers() {
  const [country, setCountry] = useState<CountryCode | null>(null);
  const [interest, setInterest] = useState<InterestMap>(zeroInterest);
  const [hasPersonalSignal, setHasPersonalSignal] = useState(false);

  useEffect(() => {
    const savedCountry = window.localStorage.getItem(countryStorageKey)?.toUpperCase() as CountryCode | undefined;
    if (savedCountry && ["SA", "AE", "BH", "KW", "QA", "OM"].includes(savedCountry)) setCountry(savedCountry);

    try {
      const savedInterest = JSON.parse(window.localStorage.getItem(interestStorageKey) || "{}") as Partial<InterestMap>;
      const nextInterest: InterestMap = {
        google: Number(savedInterest.google || 0),
        seo: Number(savedInterest.seo || 0),
        whatsapp: Number(savedInterest.whatsapp || 0),
      };
      const inferred = inferInterestFromReferrer();
      if (inferred) nextInterest[inferred] += 3;
      if (inferred || Object.values(nextInterest).some((value) => value > 0)) setHasPersonalSignal(true);
      setInterest(nextInterest);
    } catch {
      setInterest(zeroInterest);
    }

    const controller = new AbortController();
    fetch("https://api.country.is/", { cache: "no-store", signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Country lookup failed");
        return response.json() as Promise<{ country?: string }>;
      })
      .then((data) => {
        const next = data.country?.toUpperCase() as CountryCode | undefined;
        if (!next || !["SA", "AE", "BH", "KW", "QA", "OM"].includes(next)) return;
        window.localStorage.setItem(countryStorageKey, next);
        setCountry(next);
      })
      .catch(() => {});

    return () => controller.abort();
  }, []);

  const resolved = useMemo(() => offers
    .map((offer) => ({
      ...offer,
      price: country ? prices[offer.key][country] : fallbacks[offer.key],
      score: defaultPopularity[offer.key] + interest[offer.key] * 4,
    }))
    .sort((a, b) => b.score - a.score), [country, interest]);

  const recordInterest = (key: OfferKey) => {
    const next = { ...interest, [key]: interest[key] + 1 };
    setInterest(next);
    setHasPersonalSignal(true);
    window.localStorage.setItem(interestStorageKey, JSON.stringify(next));
    (window as Window & { dataLayer?: Array<Record<string, unknown>> }).dataLayer?.push({
      event: "home_offer_select",
      offer_key: key,
      offer_rank: resolved.findIndex((offer) => offer.key === key) + 1,
    });
  };

  return (
    <div className="home-offer-grid">
      {resolved.map((offer, index) => (
        <Link
          className={`home-offer-card${index === 0 ? " is-recommended" : ""}`}
          href={offer.href}
          key={offer.key}
          onClick={() => recordInterest(offer.key)}
        >
          <div className="home-offer-top">
            <small>{offer.label}</small>
            <div className="home-offer-signals">{index === 0 && <b>{hasPersonalSignal ? "مقترح لك" : "الأكثر طلبًا"}</b>}<span>↗</span></div>
          </div>
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
