"use client";

import type { OfferPriceKey } from "@/app/(ar)/offers/offer-pricing";
import { resolveOfferPrice, useOfferCountry } from "../_en/lib/localized-price";
import { whatsappHref } from "../_en/lib/site";

// The message uses the same resolved amount and currency as the price shown on the card, so they never disagree.
// The saved country follows the existing USD-first rule. Opening WhatsApp does not complete an order.
const amountFormatter = new Intl.NumberFormat("en", { maximumFractionDigits: 0 });

export function CroPackageWhatsAppEn({ offerKey, packageName, className, label }: { offerKey: OfferPriceKey; packageName: string; className: string; label: string }) {
  const country = useOfferCountry();
  const price = resolveOfferPrice(offerKey, country);
  const text = `Hello Dewank, I would like to order the ${packageName} package at ${amountFormatter.format(price.amount)} ${price.currency}. My website/business is: . I would like to confirm the scope and next steps.`;
  return <a className={className} href={whatsappHref(text)} target="_blank" rel="noopener noreferrer">{label} <span>→</span></a>;
}
