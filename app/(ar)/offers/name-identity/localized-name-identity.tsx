"use client";

import { useOfferPrice } from "../use-offer-price";
import { StickyOfferBar } from "../brand-naming/sticky-offer-bar";
import "../offer-sticky-cta.css";

// Name + identity bundle: every amount comes from the localization engine (offer-pricing.ts), never written as text.
// The saving is the bundle price compared with ordering the naming and essential identity packages separately,
// all three in the visitor's own currency.

function bundleMessage(amount: string, currency: string) {
  return `مرحبًا ديوانك، أرغب في استشارة مجانية مبدئية بخصوص باقة الاسم التجاري + الهوية البصرية بسعر ${amount} ${currency}. نشاطي: `;
}

export function NameIdentityPrice() {
  const price = useOfferPrice("name-identity-bundle");
  return <div className="offer-price"><strong>{price.formattedAmount}</strong><span>{price.currencyLabel}</span></div>;
}

export function NameIdentitySaving() {
  const bundle = useOfferPrice("name-identity-bundle");
  const naming = useOfferPrice("brand-naming");
  const identity = useOfferPrice("mini-visual-identity");
  const saving = naming.amount + identity.amount - bundle.amount;
  if (saving <= 0 || naming.currencyLabel !== bundle.currencyLabel || identity.currencyLabel !== bundle.currencyLabel) return null;
  const format = (n: number) => new Intl.NumberFormat("ar", { maximumFractionDigits: 0 }).format(n);
  return (
    <p className="offer-bundle-saving">
      توفر {format(saving)} {bundle.currencyLabel} مقارنة بطلب الباقتين منفصلتين ({format(naming.amount + identity.amount)} {bundle.currencyLabel})
    </p>
  );
}

export function NameIdentityWhatsApp({ className, label, id }: { className: string; label: string; id?: string }) {
  const price = useOfferPrice("name-identity-bundle");
  const href = `https://wa.me/97339066649?text=${encodeURIComponent(bundleMessage(price.formattedAmount, price.currencyLabel))}`;
  return <a id={id} className={className} href={href} target="_blank" rel="noreferrer">{label} <span>←</span></a>;
}

export function NameIdentitySticky({ watchIds }: { watchIds: string[] }) {
  const price = useOfferPrice("name-identity-bundle");
  const href = `https://wa.me/97339066649?text=${encodeURIComponent(bundleMessage(price.formattedAmount, price.currencyLabel))}`;
  return (
    <div className="offer-sticky">
      <StickyOfferBar watchIds={watchIds} alwaysWhenHidden ctaMinVisibleRatio={0.5} href={href} label="استشارة مجانية" priceLabel="الاسم + الهوية" price={`${price.formattedAmount} ${price.currencyLabel}`} arrow="←" />
    </div>
  );
}
