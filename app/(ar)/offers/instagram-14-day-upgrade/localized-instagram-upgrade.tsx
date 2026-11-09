"use client";

import { useOfferPrice } from "../use-offer-price";

export function InstagramUpgradePrice() {
  const price = useOfferPrice("instagram-14-day-upgrade");
  return <div className="offer-price"><strong>{price.formattedAmount}</strong><span>{price.currencyLabel}</span></div>;
}

export function InstagramUpgradeWhatsApp({ className, label }: { className: string; label: string }) {
  const price = useOfferPrice("instagram-14-day-upgrade");
  const text = `مرحبًا ديوانك، أرغب في استشارة مجانية مبدئية بخصوص باقة تطوير إنستجرام خلال 14 يومًا بسعر ${price.formattedAmount} ${price.currencyLabel}. رابط حسابي: `;
  return <a className={className} href={`https://wa.me/97339066649?text=${encodeURIComponent(text)}`} target="_blank" rel="noreferrer">{label} <span>←</span></a>;
}
