"use client";

import { useOfferPrice } from "../use-offer-price";
import { StickyOfferBar } from "../brand-naming/sticky-offer-bar";
import "../offer-sticky-cta.css";

export function SeoAuditOfferPrice() {
  const price = useOfferPrice("seo-audit");
  return <div className="offer-price"><strong>{price.formattedAmount}</strong><span>{price.currencyLabel}</span></div>;
}

function seoAuditMessage(amount: string, currency: string) {
  return `مرحبًا ديوانك، أرغب في استشارة مجانية مبدئية بخصوص فحص SEO وAEO بسعر ${amount} ${currency}. رابط موقعي: `;
}

export function SeoAuditWhatsApp({ className, label, id }: { className: string; label: string; id?: string }) {
  const price = useOfferPrice("seo-audit");
  const text = seoAuditMessage(price.formattedAmount, price.currencyLabel);
  const href = `https://wa.me/97339066649?text=${encodeURIComponent(text)}`;
  return <a id={id} className={className} href={href} target="_blank" rel="noreferrer">{label} <span>←</span></a>;
}

export function SeoAuditSticky({ watchIds }: { watchIds: string[] }) {
  const price = useOfferPrice("seo-audit");
  const href = `https://wa.me/97339066649?text=${encodeURIComponent(seoAuditMessage(price.formattedAmount, price.currencyLabel))}`;
  return (
    <div className="offer-sticky">
      <StickyOfferBar watchIds={watchIds} alwaysWhenHidden ctaMinVisibleRatio={0.5} href={href} label="استشارة مجانية" priceLabel="فحص شامل من" price={`${price.formattedAmount} ${price.currencyLabel}`} arrow="←" />
    </div>
  );
}
