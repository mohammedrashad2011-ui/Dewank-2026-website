"use client";

import { useOfferPrice } from "../use-offer-price";

export function SmallWebsitePrice() {
  const price = useOfferPrice("small-business-website");
  return <div className="offer-price"><strong>{price.formattedAmount}</strong><span>{price.currencyLabel}</span></div>;
}

export function SmallWebsiteWhatsApp({ className, label }: { className: string; label: string }) {
  const price = useOfferPrice("small-business-website");
  const text = `مرحبًا ديوانك، أريد باقة الموقع الصغير الجاهز للإطلاق بسعر ${price.formattedAmount} ${price.currencyLabel}.`;
  const href = `https://wa.me/97339066649?text=${encodeURIComponent(text)}`;
  return <a className={className} href={href} target="_blank" rel="noreferrer">{label} <span>←</span></a>;
}
