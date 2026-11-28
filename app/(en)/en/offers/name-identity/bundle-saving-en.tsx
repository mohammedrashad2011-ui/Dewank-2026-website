"use client";

import { useOfferCountry } from "../../_en/lib/localized-price";
import { getNameIdentityBundleSaving, getPricingSnapshotTime } from "@/app/(ar)/offers/offer-pricing";

// The saving against ordering the naming and essential identity packages separately, in the visitor's currency,
// from the same English pricing engine as OfferPrice.
export function NameIdentitySavingEn() {
  const country = useOfferCountry();
  const { separate, saving, currency } = getNameIdentityBundleSaving(country, getPricingSnapshotTime());
  if (saving <= 0) return null;
  const format = (n: number) => new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(n);
  return <p className="offer-bundle-saving">You save {format(saving)} {currency} compared with ordering both packages separately ({format(separate)} {currency})</p>;
}
