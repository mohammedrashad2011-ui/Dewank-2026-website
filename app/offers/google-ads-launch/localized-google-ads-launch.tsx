"use client";

import { useOfferPrice } from "../use-offer-price";

export function GoogleAdsLaunchPrice() {
  const price = useOfferPrice("google-ads-launch");
  return <div className="offer-price"><strong>{price.formattedAmount}</strong><span>{price.currencyLabel}</span></div>;
}

export function GoogleAdsLaunchLink({ className, label }: { className: string; label: string }) {
  const price = useOfferPrice("google-ads-launch");
  const text = `مرحبًا ديوانك، أريد باقة إطلاق Google Ads بسعر ${price.formattedAmount} ${price.currencyLabel}.`;
  const href = `https://wa.me/97339066649?text=${encodeURIComponent(text)}`;
  return <a className={className} href={href} target="_blank" rel="noreferrer">{label} <span>←</span></a>;
}
