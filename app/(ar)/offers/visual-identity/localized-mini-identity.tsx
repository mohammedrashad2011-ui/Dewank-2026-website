"use client";

import { useOfferPrice } from "../use-offer-price";
import { StickyOfferBar } from "../brand-naming/sticky-offer-bar";
import "../offer-sticky-cta.css";

export function MiniIdentityPrice() {
  const price = useOfferPrice("mini-visual-identity");
  return <div className="offer-price"><strong>{price.formattedAmount}</strong><span>{price.currencyLabel}</span></div>;
}

function miniIdentityMessage(amount: string, currency: string) {
  return `مرحبًا ديوانك، أرغب في بدء تصميم هوية بصرية لمشروعي، ومعرفة تفاصيل الباقة الأساسية بسعر ${amount} ${currency}. نشاطي: `;
}

export function MiniIdentityWhatsApp({ className, label, id }: { className: string; label: string; id?: string }) {
  const price = useOfferPrice("mini-visual-identity");
  const text = miniIdentityMessage(price.formattedAmount, price.currencyLabel);
  const href = `https://wa.me/97339066649?text=${encodeURIComponent(text)}`;
  return <a id={id} className={className} href={href} target="_blank" rel="noreferrer">{label} <span>←</span></a>;
}

// Mobile order bar: shows whenever the price-panel CTA, the final CTA and the footer are all off screen.
export function MiniIdentitySticky({ watchIds }: { watchIds: string[] }) {
  const price = useOfferPrice("mini-visual-identity");
  const href = `https://wa.me/97339066649?text=${encodeURIComponent(miniIdentityMessage(price.formattedAmount, price.currencyLabel))}`;
  return (
    <div className="offer-sticky">
      <StickyOfferBar
        watchIds={watchIds}
        alwaysWhenHidden
        ctaMinVisibleRatio={0.5}
        href={href}
        label="ابدأ هويتك"
        priceLabel="الباقة الأساسية"
        price={`${price.formattedAmount} ${price.currencyLabel}`}
        arrow="←"
      />
    </div>
  );
}
