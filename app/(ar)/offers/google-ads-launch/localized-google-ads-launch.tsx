"use client";

import { useOfferPrice } from "../use-offer-price";
import { StickyOfferBar } from "../brand-naming/sticky-offer-bar";
import "../offer-sticky-cta.css";

export function GoogleAdsLaunchPrice() {
  const price = useOfferPrice("google-ads-launch");
  return <div className="offer-price"><strong>{price.formattedAmount}</strong><span>{price.currencyLabel}</span></div>;
}

export function GoogleAdsLaunchLink({ className, label, id }: { className: string; label: string; id?: string }) {
  const price = useOfferPrice("google-ads-launch");
  const text = `مرحبًا ديوانك، أرغب في بدء باقة إطلاق Google Ads بسعر ${price.formattedAmount} ${price.currencyLabel}. نشاطي: `;
  const href = `https://wa.me/97339066649?text=${encodeURIComponent(text)}`;
  return <a id={id} className={className} href={href} target="_blank" rel="noreferrer">{label} <span>←</span></a>;
}

export function GoogleAdsLaunchSticky({ watchIds }: { watchIds: string[] }) {
  const price = useOfferPrice("google-ads-launch");
  const text = `مرحبًا ديوانك، أرغب في بدء باقة إطلاق Google Ads بسعر ${price.formattedAmount} ${price.currencyLabel}. نشاطي: `;
  const href = `https://wa.me/97339066649?text=${encodeURIComponent(text)}`;
  return (
    <div className="offer-sticky">
      <StickyOfferBar
        watchIds={watchIds}
        alwaysWhenHidden
        ctaMinVisibleRatio={0.5}
        href={href}
        label="ابدأ حملتك"
        priceLabel="باقة الإطلاق من"
        price={`${price.formattedAmount} ${price.currencyLabel}`}
        arrow="←"
      />
    </div>
  );
}
