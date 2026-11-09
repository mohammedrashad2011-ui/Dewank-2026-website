"use client";

import { useOfferPrice } from "../use-offer-price";

export function BrandNamingOfferPrice() {
  const price = useOfferPrice("brand-naming");
  return <div className="offer-price"><strong>{price.formattedAmount}</strong><span>{price.currencyLabel}</span></div>;
}

export function BrandNamingWhatsApp({ className, label }: { className: string; label: string }) {
  const price = useOfferPrice("brand-naming");
  const text = `مرحبًا ديوانك، أرغب في استشارة مجانية بخصوص اختيار اسم تجاري لمشروعي، ومعرفة تفاصيل باقة الـ${price.formattedAmount} ${price.currencyLabel}.`;
  const href = `https://wa.me/97339066649?text=${encodeURIComponent(text)}`;
  return <a className={className} href={href} target="_blank" rel="noreferrer">{label} <span>←</span></a>;
}
