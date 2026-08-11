"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type OfferCard = {
  key: string;
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
const fallbackKeys = ["google-ads-launch", "seo-audit", "whatsapp-automation-starter"];

export default function HomeSelectedOffers() {
  const [rankedKeys, setRankedKeys] = useState<string[]>(fallbackKeys);

  useEffect(() => {
    let cancelled = false;

    const loadRanking = () => {
      fetch("/api/offer-popularity", { cache: "force-cache" })
        .then((response) => response.json() as Promise<PopularityResponse>)
        .then((data) => {
          if (cancelled || !data.enoughData || !Array.isArray(data.ranking)) return;
          const validKeys = data.ranking
            .map((row) => row.key)
            .filter((key) => offerByKey.has(key));
          if (!validKeys.length) return;
          const next = [...validKeys, ...fallbackKeys]
            .filter((key, index, arr) => arr.indexOf(key) === index)
            .slice(0, 3);
          if (next.length === 3) setRankedKeys(next);
        })
        .catch(() => {});
    };

    const win = window as Window & { requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number; cancelIdleCallback?: (id: number) => void };
    if (win.requestIdleCallback) {
      const id = win.requestIdleCallback(loadRanking, { timeout: 1800 });
      return () => {
        cancelled = true;
        win.cancelIdleCallback?.(id);
      };
    }

    const timer = window.setTimeout(loadRanking, 900);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
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
      {resolved.map((offer, index) => (
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
            <b>شاهد العرض</b>
          </div>
        </Link>
      ))}
    </div>
  );
}
