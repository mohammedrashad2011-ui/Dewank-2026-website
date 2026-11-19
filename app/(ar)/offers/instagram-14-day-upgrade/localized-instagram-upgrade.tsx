"use client";

import { useOfferPrice } from "../use-offer-price";
import { StickyOfferBar } from "../brand-naming/sticky-offer-bar";
import "../offer-sticky-cta.css";

export function InstagramUpgradePrice() {
  const price = useOfferPrice("instagram-14-day-upgrade");
  return <div className="offer-price"><strong>{price.formattedAmount}</strong><span>{price.currencyLabel}</span></div>;
}

function instagramMessage(amount: string, currency: string) {
  return `مرحبًا ديوانك، أرغب في استشارة مجانية مبدئية بخصوص باقة تطوير إنستجرام خلال 14 يومًا بسعر ${amount} ${currency}. رابط حسابي: `;
}

export function InstagramUpgradeWhatsApp({ className, label, id }: { className: string; label: string; id?: string }) {
  const price = useOfferPrice("instagram-14-day-upgrade");
  const text = instagramMessage(price.formattedAmount, price.currencyLabel);
  return <a id={id} className={className} href={`https://wa.me/97339066649?text=${encodeURIComponent(text)}`} target="_blank" rel="noreferrer">{label} <span>←</span></a>;
}

export function InstagramUpgradeSticky({ watchIds }: { watchIds: string[] }) {
  const price = useOfferPrice("instagram-14-day-upgrade");
  const href = `https://wa.me/97339066649?text=${encodeURIComponent(instagramMessage(price.formattedAmount, price.currencyLabel))}`;
  return (
    <div className="offer-sticky">
      <StickyOfferBar watchIds={watchIds} alwaysWhenHidden ctaMinVisibleRatio={0.5} href={href} label="استشارة مجانية" priceLabel="باقة تطوير إنستجرام" price={`${price.formattedAmount} ${price.currencyLabel}`} arrow="←" />
    </div>
  );
}
