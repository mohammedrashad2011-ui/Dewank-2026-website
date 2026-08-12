"use client";

import { useOfferPrice } from "../use-offer-price";

export function LandingOfferPrice({ kind }: { kind: "base" | "full" }) {
  const price = useOfferPrice(kind === "base" ? "landing-page-package" : "landing-page-package-full");
  return <div className="offer-price"><strong>{price.formattedAmount}</strong><span>{price.currencyLabel}</span></div>;
}

export function LandingOfferWhatsApp({ kind, className, label }: { kind: "base" | "full"; className: string; label: string }) {
  const price = useOfferPrice(kind === "base" ? "landing-page-package" : "landing-page-package-full");
  const packageName = kind === "base" ? "باقة صفحة الهبوط" : "باقة صفحة الهبوط الكاملة مع الدومين والاستضافة";
  const text = `مرحبًا ديوانك، أريد حجز ${packageName} بسعر ${price.formattedAmount} ${price.currencyLabel}.`;
  const href = `https://wa.me/97339066649?text=${encodeURIComponent(text)}`;
  return <a className={className} href={href} target="_blank" rel="noreferrer">{label} <span>←</span></a>;
}
