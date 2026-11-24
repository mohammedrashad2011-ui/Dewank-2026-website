"use client";

import { useOfferPrice } from "../use-offer-price";
import { StickyOfferBar } from "../brand-naming/sticky-offer-bar";
import "../offer-sticky-cta.css";

export function LandingOfferPrice({ kind }: { kind: "base" | "full" }) {
  const price = useOfferPrice(kind === "base" ? "landing-page-package" : "landing-page-package-full");
  return <div className="offer-price"><strong>{price.formattedAmount}</strong><span>{price.currencyLabel}</span></div>;
}

export function LandingOfferWhatsApp({ kind, className, label, id }: { kind: "base" | "full"; className: string; label: string; id?: string }) {
  const price = useOfferPrice(kind === "base" ? "landing-page-package" : "landing-page-package-full");
  const packageName = kind === "base" ? "باقة صفحة الهبوط" : "باقة صفحة الهبوط الكاملة مع الدومين والاستضافة";
  const text = `مرحبًا ديوانك، أرغب في بدء ${packageName} بسعر ${price.formattedAmount} ${price.currencyLabel}. نشاطي: `;
  const href = `https://wa.me/97339066649?text=${encodeURIComponent(text)}`;
  return <a id={id} className={className} href={href} target="_blank" rel="noreferrer">{label} <span>←</span></a>;
}

export function LandingOfferSticky({ watchIds }: { watchIds: string[] }) {
  const price = useOfferPrice("landing-page-package");
  const text = `مرحبًا ديوانك، أرغب في بدء باقة صفحة الهبوط بسعر ${price.formattedAmount} ${price.currencyLabel}. نشاطي: `;
  const href = `https://wa.me/97339066649?text=${encodeURIComponent(text)}`;
  return (
    <div className="offer-sticky">
      <StickyOfferBar
        watchIds={watchIds}
        alwaysWhenHidden
        ctaMinVisibleRatio={0.5}
        href={href}
        label="ابدأ صفحتك"
        priceLabel="الباقة الأساسية من"
        price={`${price.formattedAmount} ${price.currencyLabel}`}
        arrow="←"
      />
    </div>
  );
}
