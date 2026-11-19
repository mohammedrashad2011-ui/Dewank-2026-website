"use client";

import { resolveOfferPrice, useOfferCountry } from "../../_en/lib/localized-price";

// The saving against ordering the naming and essential identity packages separately, in the visitor's currency,
// from the same English pricing engine as OfferPrice.
export function NameIdentitySavingEn() {
  const country = useOfferCountry();
  const bundle = resolveOfferPrice("name-identity-bundle", country);
  const naming = resolveOfferPrice("brand-naming", country);
  const identity = resolveOfferPrice("mini-visual-identity", country);
  const separate = naming.amount + identity.amount;
  const saving = separate - bundle.amount;
  if (saving <= 0 || naming.currency !== bundle.currency || identity.currency !== bundle.currency) return null;
  const format = (n: number) => new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(n);
  return <p className="offer-bundle-saving">You save {format(saving)} {bundle.currency} compared with ordering both packages separately ({format(separate)} {bundle.currency})</p>;
}
