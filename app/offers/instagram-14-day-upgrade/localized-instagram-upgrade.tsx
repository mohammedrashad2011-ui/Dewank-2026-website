"use client";

import { useOfferPrice } from "../use-offer-price";

export function InstagramUpgradePrice() {
  const price = useOfferPrice("instagram-14-day-upgrade");
  return <div className="offer-price"><strong>{price.formattedAmount}</strong><span>{price.currencyLabel}</span></div>;
}

export function InstagramUpgradeWhatsApp({ className, label }: { className: string; label: string }) {
  const price = useOfferPrice("instagram-14-day-upgrade");
  const text = `مرحبًا ديوانك، أريد باقة تطوير حساب إنستجرام خلال 14 يوم بسعر ${price.formattedAmount} ${price.currencyLabel}.`;
  return <a className={className} href={`https://wa.me/97339066649?text=${encodeURIComponent(text)}`} target="_blank" rel="noreferrer">{label} <span>←</span></a>;
}
