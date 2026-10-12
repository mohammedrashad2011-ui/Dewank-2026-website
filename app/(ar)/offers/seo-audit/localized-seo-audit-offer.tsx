"use client";

import { useOfferPrice } from "../use-offer-price";

export function SeoAuditOfferPrice() {
  const price = useOfferPrice("seo-audit");
  return <div className="offer-price"><strong>{price.formattedAmount}</strong><span>{price.currencyLabel}</span></div>;
}

export function SeoAuditWhatsApp({ className, label }: { className: string; label: string }) {
  const price = useOfferPrice("seo-audit");
  const text = `مرحبًا ديوانك، أريد حجز فحص SEO شامل لموقعي بسعر ${price.formattedAmount} ${price.currencyLabel}. رابط موقعي: `;
  const href = `https://wa.me/97339066649?text=${encodeURIComponent(text)}`;
  return <a className={className} href={href} target="_blank" rel="noreferrer">{label} <span>←</span></a>;
}
