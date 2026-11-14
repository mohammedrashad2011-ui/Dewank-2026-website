"use client";

import { useOfferPrice } from "../use-offer-price";
import { StickyOfferBar } from "./sticky-offer-bar";

// The WhatsApp message and number are unchanged. Every CTA on the page builds its link here, so the wa.me URL that GTM's
// Just Links triggers match stays identical across the hero, the price block, the sticky bar and the final CTA.
function useBrandNamingWhatsAppHref() {
  const price = useOfferPrice("brand-naming");
  const text = `مرحبًا ديوانك، أرغب في استشارة مجانية بخصوص اختيار اسم تجاري لمشروعي، ومعرفة تفاصيل باقة الـ${price.formattedAmount} ${price.currencyLabel}.`;
  return { price, href: `https://wa.me/97339066649?text=${encodeURIComponent(text)}` };
}

export function BrandNamingOfferPrice() {
  const price = useOfferPrice("brand-naming");
  return <div className="offer-price"><strong>{price.formattedAmount}</strong><span>{price.currencyLabel}</span></div>;
}

// Inline price for running text, e.g. inside the hero line "الباقة كاملة بـ 490 ريال سعودي".
export function BrandNamingInlinePrice() {
  const price = useOfferPrice("brand-naming");
  return <b className="bn2-inline-price">{price.formattedAmount} {price.currencyLabel}</b>;
}

export function BrandNamingWhatsApp({ className, label, id }: { className: string; label: string; id?: string }) {
  const { href } = useBrandNamingWhatsAppHref();
  return <a id={id} className={className} href={href} target="_blank" rel="noreferrer">{label} <span aria-hidden="true">←</span></a>;
}

export function BrandNamingStickyCta({ watchIds }: { watchIds: string[] }) {
  const { price, href } = useBrandNamingWhatsAppHref();
  return (
    <StickyOfferBar
      watchIds={watchIds}
      href={href}
      label="استشارة مجانية على واتساب"
      priceLabel="الباقة كاملة"
      price={`${price.formattedAmount} ${price.currencyLabel}`}
      arrow="←"
    />
  );
}
