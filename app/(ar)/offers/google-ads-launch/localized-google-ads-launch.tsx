"use client";

import { useOfferPrice } from "../use-offer-price";
import { StickyOfferBar } from "../brand-naming/sticky-offer-bar";
import "../offer-sticky-cta.css";

export function GoogleAdsLaunchPrice() {
  const price = useOfferPrice("google-ads-launch");
  return <div className="offer-price"><strong>{price.formattedAmount}</strong><span>{price.currencyLabel}</span></div>;
}

export function GoogleAdsLaunchLink({ className, label }: { className: string; label: string }) {
  const price = useOfferPrice("google-ads-launch");
  const text = `مرحبًا ديوانك، أرغب في استشارة مجانية مبدئية بخصوص باقة إطلاق Google Ads بسعر ${price.formattedAmount} ${price.currencyLabel}. نشاطي: `;
  const href = `https://wa.me/97339066649?text=${encodeURIComponent(text)}`;
  return <a className={className} href={href} target="_blank" rel="noreferrer">{label} <span>←</span></a>;
}

export function GoogleAdsLaunchSticky({ watchIds }: { watchIds: string[] }) {
  const price = useOfferPrice("google-ads-launch");
  const text = `مرحبًا ديوانك، أرغب في استشارة مجانية مبدئية بخصوص باقة إطلاق Google Ads بسعر ${price.formattedAmount} ${price.currencyLabel}. نشاطي: `;
  const href = `https://wa.me/97339066649?text=${encodeURIComponent(text)}`;
  return (
    <div className="offer-sticky">
      <StickyOfferBar
        watchIds={watchIds}
        href={href}
        label="احصل على استشارة مجانية الآن"
        priceLabel="باقة الإطلاق من"
        price={`${price.formattedAmount} ${price.currencyLabel}`}
        arrow="←"
      />
    </div>
  );
}
