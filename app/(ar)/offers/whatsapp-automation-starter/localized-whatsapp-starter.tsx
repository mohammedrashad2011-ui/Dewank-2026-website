"use client";

import { useOfferPrice } from "../use-offer-price";

export function WhatsAppStarterPrice() {
  const price = useOfferPrice("whatsapp-automation-starter");
  return <div className="offer-price"><strong>{price.formattedAmount}</strong><span>{price.currencyLabel}</span></div>;
}

export function WhatsAppStarterLink({ className, label }: { className: string; label: string }) {
  const price = useOfferPrice("whatsapp-automation-starter");
  const text = `مرحبًا ديوانك، أريد حجز باقة واتساب أوتوميشن Starter بسعر ${price.formattedAmount} ${price.currencyLabel}. نوع نشاطي: `;
  const href = `https://wa.me/97339066649?text=${encodeURIComponent(text)}`;
  return <a className={className} href={href} target="_blank" rel="noreferrer">{label} <span>←</span></a>;
}
