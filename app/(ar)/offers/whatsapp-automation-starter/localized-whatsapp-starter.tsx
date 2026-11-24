"use client";

import { useOfferPrice } from "../use-offer-price";
import { StickyOfferBar } from "../brand-naming/sticky-offer-bar";
import "../offer-sticky-cta.css";

function starterHref(amount: string, currency: string) {
  return `https://wa.me/97339066649?text=${encodeURIComponent(`مرحبًا ديوانك، أرغب في بدء باقة أتمتة واتساب التأسيسية بسعر ${amount} ${currency}. نشاطي: `)}`;
}

export function WhatsAppStarterPrice() {
  const price = useOfferPrice("whatsapp-automation-starter");
  return <div className="offer-price"><strong>{price.formattedAmount}</strong><span>{price.currencyLabel}</span></div>;
}

export function WhatsAppStarterLink({ className, label, id }: { className: string; label: string; id?: string }) {
  const price = useOfferPrice("whatsapp-automation-starter");
  return <a id={id} className={className} href={starterHref(price.formattedAmount, price.currencyLabel)} target="_blank" rel="noreferrer">{label} <span>←</span></a>;
}

export function WhatsAppStarterSticky({ watchIds }: { watchIds: string[] }) {
  const price = useOfferPrice("whatsapp-automation-starter");
  return (
    <div className="offer-sticky">
      <StickyOfferBar watchIds={watchIds} alwaysWhenHidden ctaMinVisibleRatio={0.5} href={starterHref(price.formattedAmount, price.currencyLabel)} label="ابدأ أتمتة واتساب" priceLabel="باقة التأسيس من" price={`${price.formattedAmount} ${price.currencyLabel}`} arrow="←" />
    </div>
  );
}
