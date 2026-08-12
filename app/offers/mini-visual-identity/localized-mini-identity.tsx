"use client";

import { useOfferPrice } from "../use-offer-price";

export function MiniIdentityPrice() {
  const price = useOfferPrice("mini-visual-identity");
  return <div className="offer-price"><strong>{price.formattedAmount}</strong><span>{price.currencyLabel}</span></div>;
}

export function MiniIdentityWhatsApp({ className, label }: { className: string; label: string }) {
  const price = useOfferPrice("mini-visual-identity");
  const text = `مرحبًا ديوانك، أريد حجز باقة الهوية البصرية المصغرة بسعر ${price.formattedAmount} ${price.currencyLabel}. نوع نشاطي: `;
  const href = `https://wa.me/97339066649?text=${encodeURIComponent(text)}`;
  return <a className={className} href={href} target="_blank" rel="noreferrer">{label} <span>←</span></a>;
}
