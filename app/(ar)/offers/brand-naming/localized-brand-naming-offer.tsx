"use client";

import { useOfferPrice } from "../use-offer-price";

export function BrandNamingOfferPrice() {
  const price = useOfferPrice("brand-naming");
  return <div className="offer-price"><strong>{price.formattedAmount}</strong><span>{price.currencyLabel}</span></div>;
}

export function BrandNamingWhatsApp({ className, label }: { className: string; label: string }) {
  const price = useOfferPrice("brand-naming");
  const text = `مرحبًا ديوانك، أريد حجز باقة اختيار اسم تجاري + Brand Direction بسعر ${price.formattedAmount} ${price.currencyLabel}. نشاطي هو: `;
  const href = `https://wa.me/97339066649?text=${encodeURIComponent(text)}`;
  return <a className={className} href={href} target="_blank" rel="noreferrer">{label} <span>←</span></a>;
}
