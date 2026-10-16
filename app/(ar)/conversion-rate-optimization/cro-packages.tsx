"use client";

import type { OfferPriceKey } from "../offers/offer-pricing";
import { useOfferPrice } from "../offers/use-offer-price";

// Price and currency come from the same hook, so the amount on screen and the amount in the WhatsApp text always agree.
export function CroPackagePrice({ offerKey }: { offerKey: OfferPriceKey }) {
  const price = useOfferPrice(offerKey);
  return <div className="cro-price"><strong>{price.formattedAmount}</strong><span>{price.currencyLabel}</span></div>;
}

// Opens a prefilled WhatsApp message. Opening it does not complete an order; the order is confirmed after the scope is agreed.
export function CroPackageWhatsApp({ offerKey, packageName, className, label }: { offerKey: OfferPriceKey; packageName: string; className: string; label: string }) {
  const price = useOfferPrice(offerKey);
  const text = `مرحبًا ديوانك، أريد طلب باقة ${packageName} بسعر ${price.formattedAmount} ${price.currencyLabel}. موقعي أو نشاطي: . أرجو تأكيد النطاق والخطوات التالية.`;
  const href = `https://wa.me/97339066649?text=${encodeURIComponent(text)}`;
  return <a className={className} href={href} target="_blank" rel="noreferrer">{label} <span>←</span></a>;
}
