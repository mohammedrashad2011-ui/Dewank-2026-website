"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type LocalPrice = { amount: number; currencyLabel: string };
type OfferCard = {
  key: string;
  label: string;
  title: string;
  text: string;
  href: string;
  prices: Record<string, LocalPrice>;
  fallback: LocalPrice;
};

type PopularityResponse = {
  ranking?: Array<{ key: string; clicks: number }>;
  enoughData?: boolean;
};

const gcc = (sa: number, bh: number, kw: number, fallback: number): { prices: Record<string, LocalPrice>; fallback: LocalPrice } => ({
  prices: {
    SA: { amount: sa, currencyLabel: "ريال سعودي" },
    AE: { amount: sa, currencyLabel: "درهم إماراتي" },
    BH: { amount: bh, currencyLabel: "دينار بحريني" },
    KW: { amount: kw, currencyLabel: "دينار كويتي" },
    QA: { amount: sa, currencyLabel: "ريال قطري" },
    OM: { amount: bh, currencyLabel: "ريال عُماني" },
  },
  fallback: { amount: fallback, currencyLabel: "دولار أمريكي" },
});

const contentPrice = gcc(790, 79, 65, 210);
const landingPrice = gcc(1490, 149, 125, 399);
const seoPrice = gcc(490, 49, 39, 130);
const namingPrice = gcc(490, 49, 39, 130);
const whatsappPrice = gcc(890, 89, 73, 235);
const identityPrice = gcc(1190, 119, 99, 318);
const googlePrice = gcc(790, 79, 65, 211);
const instagramPrice = gcc(590, 59, 49, 158);
const websitePrice = gcc(1990, 199, 165, 530);

const offers: OfferCard[] = [
  { key: "google-ads-launch", label: "GOOGLE ADS", title: "إطلاق Google Ads", text: "حملة Search منظمة، كلمات بنية شراء، إعلانات وكلمات سلبية وتتبع تحويل أساسي.", href: "/offers/google-ads-launch", ...googlePrice },
  { key: "seo-audit", label: "SEO AUDIT", title: "فحص SEO شامل", text: "تشخيص واضح للظهور والتقنية والمحتوى والفرص قبل الدخول في تنفيذ أكبر.", href: "/offers/seo-audit", ...seoPrice },
  { key: "whatsapp-automation-starter", label: "WHATSAPP AUTOMATION", title: "واتساب أوتوميشن Starter", text: "رد وتأهيل وجمع بيانات وتحويل للموظف في مسار تأسيسي واضح.", href: "/offers/whatsapp-automation-starter", ...whatsappPrice },
  { key: "30-day-content-package", label: "CONTENT", title: "محتوى شهر كامل", text: "محتوى منظم لمدة شهر يشمل التصميم والكابشنات وخطة نشر واضحة.", href: "/offers/30-day-content-package", ...contentPrice },
  { key: "landing-page-package", label: "LANDING PAGE", title: "صفحة هبوط احترافية", text: "صفحة مخصصة للحملة تجمع الرسالة والتصميم وواتساب والتتبع في هدف واحد.", href: "/offers/landing-page-package", ...landingPrice },
  { key: "brand-naming", label: "BRAND NAMING", title: "اختيار اسم تجاري", text: "أسماء مدروسة مع فحص مبدئي للمعنى والتشابه والدومين وتوجه أولي للعلامة.", href: "/offers/brand-naming", ...namingPrice },
  { key: "mini-visual-identity", label: "VISUAL IDENTITY", title: "هوية بصرية مصغرة", text: "بداية متماسكة للشعار والألوان والخطوط والتطبيقات الأساسية للعلامة.", href: "/offers/mini-visual-identity", ...identityPrice },
  { key: "instagram-14-day-upgrade", label: "INSTAGRAM", title: "تطوير إنستجرام خلال 14 يوم", text: "تحسين حضور الحساب وهيكل المحتوى والانطباع الأول خلال نطاق تنفيذي واضح.", href: "/offers/instagram-14-day-upgrade", ...instagramPrice },
  { key: "small-business-website", label: "SMALL BUSINESS WEBSITE", title: "موقع صغير جاهز للإطلاق", text: "موقع خفيف وسريع يوضح نشاطك ويقود الزائر نحو خطوة تواصل واضحة.", href: "/offers/small-business-website", ...websitePrice },
];

const offerByKey = new Map(offers.map((offer) => [offer.key, offer]));
const fallbackKeys = ["google-ads-launch", "seo-audit", "whatsapp-automation-starter"];
const countryStorageKey = "dewank_offer_country";

export default function HomeSelectedOffers() {
  const [rankedKeys, setRankedKeys] = useState<string[]>(fallbackKeys);
  const [country, setCountry] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const savedCountry = window.localStorage.getItem(countryStorageKey)?.toUpperCase();
    if (savedCountry) setCountry(savedCountry);

    const countryController = new AbortController();
    fetch("https://api.country.is/", { cache: "no-store", signal: countryController.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Country lookup failed");
        return response.json() as Promise<{ country?: string }>;
      })
      .then((data) => {
        const next = data.country?.toUpperCase();
        if (!next || cancelled) return;
        window.localStorage.setItem(countryStorageKey, next);
        setCountry(next);
      })
      .catch(() => {});

    const loadRanking = () => {
      fetch("/api/offer-popularity", { cache: "force-cache" })
        .then((response) => response.json() as Promise<PopularityResponse>)
        .then((data) => {
          if (cancelled || !data.enoughData || !Array.isArray(data.ranking)) return;
          const validKeys = data.ranking.map((row) => row.key).filter((key) => offerByKey.has(key));
          if (!validKeys.length) return;
          const next = [...validKeys, ...fallbackKeys]
            .filter((key, index, arr) => arr.indexOf(key) === index)
            .slice(0, 3);
          if (next.length === 3) setRankedKeys(next);
        })
        .catch(() => {});
    };

    const win = window as Window & { requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number; cancelIdleCallback?: (id: number) => void };
    let idleId: number | null = null;
    let timer: number | null = null;
    if (win.requestIdleCallback) idleId = win.requestIdleCallback(loadRanking, { timeout: 1800 });
    else timer = window.setTimeout(loadRanking, 900);

    return () => {
      cancelled = true;
      countryController.abort();
      if (idleId !== null) win.cancelIdleCallback?.(idleId);
      if (timer !== null) window.clearTimeout(timer);
    };
  }, []);

  const resolved = useMemo(
    () => rankedKeys.map((key) => offerByKey.get(key)).filter((offer): offer is OfferCard => Boolean(offer)),
    [rankedKeys],
  );

  const recordHomeClick = (key: string, rank: number) => {
    (window as Window & { dataLayer?: Array<Record<string, unknown>> }).dataLayer?.push({
      event: "home_offer_select",
      offer_key: key,
      offer_rank: rank,
    });
  };

  return (
    <>
      <style>{`.home-selected-offers .section-label{font-size:14px;font-weight:900;letter-spacing:.02em}@media(max-width:640px){.home-selected-offers .section-label{font-size:13px}}`}</style>
      <div className="home-offer-grid">
        {resolved.map((offer, index) => {
          const price = country && offer.prices[country] ? offer.prices[country] : offer.fallback;
          return (
            <Link
              className={`home-offer-card${index === 0 ? " is-recommended" : ""}`}
              href={offer.href}
              key={offer.key}
              onClick={() => recordHomeClick(offer.key, index + 1)}
            >
              <div className="home-offer-top">
                <small>{offer.label}</small>
                <div className="home-offer-signals">{index === 0 && <b>الأكثر طلبًا</b>}<span>↗</span></div>
              </div>
              <h3>{offer.title}</h3>
              <p>{offer.text}</p>
              <div className="home-offer-bottom">
                <div className="home-offer-price"><strong>{new Intl.NumberFormat("ar", { maximumFractionDigits: 0 }).format(price.amount)}</strong><span>{price.currencyLabel}</span></div>
                <b>شاهد العرض</b>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
