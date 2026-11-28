"use client";

import { useOfferPrice } from "./use-offer-price";
import { StickyOfferBar } from "./brand-naming/sticky-offer-bar";
import "./offer-sticky-cta.css";

function useLocalizedPrice() {
  return useOfferPrice("30-day-content-package");
}

export function LocalizedOfferPrice() {
  const price = useLocalizedPrice();
  return <div className="offer-price"><strong>{price.formattedAmount}</strong><span>{price.currencyLabel}</span></div>;
}

export function LocalizedOfferKicker() {
  const price = useLocalizedPrice();
  return <span className="offer-kicker">16 قطعة محتوى · {price.formattedAmount} {price.currencyLabel}</span>;
}

function contentOfferHref(amount: string, currency: string) {
  const text = `مرحبًا ديوانك، أرغب في بدء باقة محتوى 30 يومًا لنشاطي بسعر ${amount} ${currency}. نشاطي: `;
  return `https://wa.me/97339066649?text=${encodeURIComponent(text)}`;
}

export function LocalizedWhatsAppLink({ className, label, id }: { className: string; label: string; id?: string }) {
  const price = useLocalizedPrice();
  return <a id={id} className={className} href={contentOfferHref(price.formattedAmount, price.currencyLabel)} target="_blank" rel="noreferrer">{label} <span>←</span></a>;
}

// Price inside running text, from the same localized price as the panel.
export function LocalizedInlinePrice() {
  const price = useLocalizedPrice();
  return <span>{price.formattedAmount} {price.currencyLabel}</span>;
}

// Mobile order bar: shows whenever the hero CTA, the price-panel CTA, the final CTA and the footer are all off screen.
export function ContentOfferSticky({ watchIds }: { watchIds: string[] }) {
  const price = useLocalizedPrice();
  return (
    <div className="offer-sticky">
      <StickyOfferBar
        watchIds={watchIds}
        alwaysWhenHidden
        ctaMinVisibleRatio={0.5}
        href={contentOfferHref(price.formattedAmount, price.currencyLabel)}
        label="ابدأ شهرك"
        priceLabel="الباقة كاملة"
        price={`${price.formattedAmount} ${price.currencyLabel}`}
        arrow="←"
      />
    </div>
  );
}
