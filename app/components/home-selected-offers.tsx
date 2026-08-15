"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { offerPricing, type OfferPriceKey } from "../offers/offer-pricing";

type OfferCard = {
  key: OfferPriceKey;
  label: string;
  title: string;
  text: string;
  href: string;
};

type PopularityResponse = {
  ranking?: Array<{ key: string; clicks: number }>;
  enoughData?: boolean;
};

const offers: OfferCard[] = [
  { key: "google-ads-launch", label: "GOOGLE ADS", title: "إطلاق Google Ads", text: "حملة Search منظمة، كلمات بنية شراء، إعلانات وكلمات سلبية وتتبع تحويل أساسي.", href: "/offers/google-ads-launch" },
  { key: "seo-audit", label: "SEO AUDIT", title: "فحص SEO شامل", text: "تشخيص واضح للظهور والتقنية والمحتوى والفرص قبل الدخول في تنفيذ أكبر.", href: "/offers/seo-audit" },
  { key: "whatsapp-automation-starter", label: "WHATSAPP AUTOMATION", title: "واتساب أوتوميشن Starter", text: "رد وتأهيل وجمع بيانات وتحويل للموظف في مسار تأسيسي واضح.", href: "/offers/whatsapp-automation-starter" },
  { key: "30-day-content-package", label: "CONTENT", title: "محتوى شهر كامل", text: "محتوى منظم لمدة شهر يشمل التصميم والكابشنات وخطة نشر واضحة.", href: "/offers/30-day-content-package" },
  { key: "landing-page-package", label: "LANDING PAGE", title: "صفحة هبوط احترافية", text: "صفحة مخصصة للحملة تجمع الرسالة والتصميم وواتساب والتتبع في هدف واحد.", href: "/offers/landing-page-package" },
  { key: "brand-naming", label: "BRAND NAMING", title: "اختيار اسم تجاري", text: "أسماء مدروسة مع فحص مبدئي للمعنى والتشابه والدومين وتوجه أولي للعلامة.", href: "/offers/brand-naming" },
  { key: "mini-visual-identity", label: "VISUAL IDENTITY", title: "هوية بصرية مصغرة", text: "بداية متماسكة للشعار والألوان والخطوط والتطبيقات الأساسية للعلامة.", href: "/offers/mini-visual-identity" },
  { key: "instagram-14-day-upgrade", label: "INSTAGRAM", title: "تطوير إنستجرام خلال 14 يوم", text: "تحسين حضور الحساب وهيكل المحتوى والانطباع الأول خلال نطاق تنفيذي واضح.", href: "/offers/instagram-14-day-upgrade" },
  { key: "small-business-website", label: "SMALL BUSINESS WEBSITE", title: "موقع صغير جاهز للإطلاق", text: "موقع خفيف وسريع يوضح نشاطك ويقود الزائر نحو خطوة تواصل واضحة.", href: "/offers/small-business-website" },
];

const offerByKey = new Map(offers.map((offer) => [offer.key, offer]));
const fallbackKeys: OfferPriceKey[] = ["google-ads-launch", "seo-audit", "whatsapp-automation-starter"];
const countryStorageKey = "dewank_offer_country";

export default function HomeSelectedOffers() {
  const [rankedKeys, setRankedKeys] = useState<OfferPriceKey[]>(fallbackKeys);
  const [country, setCountry] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const savedCountry = window.localStorage.getItem(countryStorageKey)?.toUpperCase();
    if (savedCountry) setCountry(savedCountry);

    let countryTimer: number | null = null;
    let countryController: AbortController | null = null;

    // Country pricing is below the fold on the homepage, so do not put the
    // third-party lookup on the initial mobile critical path. Returning visitors
    // use the saved country immediately and do not need another network request.
    if (!savedCountry) {
      countryTimer = window.setTimeout(() => {
        if (cancelled) return;
        countryController = new AbortController();
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
      }, 6500);
    }

    const loadRanking = () => {
      fetch("/api/offer-popularity", { cache: "force-cache" })
        .then((response) => response.json() as Promise<PopularityResponse>)
        .then((data) => {
          if (cancelled || !data.enoughData || !Array.isArray(data.ranking)) return;
          const validKeys = data.ranking
            .map((row) => row.key)
            .filter((key): key is OfferPriceKey => offerByKey.has(key as OfferPriceKey));
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
      if (countryTimer !== null) window.clearTimeout(countryTimer);
      countryController?.abort();
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
    <div className="home-offer-grid">
      {resolved.map((offer, index) => {
        const config = offerPricing[offer.key];
        const price = country && config.prices[country] ? config.prices[country] : config.fallback;
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
  );
}
