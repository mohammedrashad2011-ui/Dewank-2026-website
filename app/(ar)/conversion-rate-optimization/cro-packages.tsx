"use client";

import { pushCroPackageSelect } from "../../components/cro-package-event";
import type { OfferPriceKey } from "../offers/offer-pricing";
import { useOfferPrice } from "../offers/use-offer-price";

// Price and currency come from the same hook, so the amount on screen and the amount in the WhatsApp text always agree.
export function CroPackagePrice({ offerKey }: { offerKey: OfferPriceKey }) {
  const price = useOfferPrice(offerKey);
  return <div className="cro-price"><strong>{price.formattedAmount}</strong><span>{price.currencyLabel}</span></div>;
}

// Opens a prefilled WhatsApp message to confirm the scope. Opening it does not complete an order.
// The click also records a dedicated dataLayer event with the package, the displayed amount and the page path.
export function CroPackageWhatsApp({ offerKey, packageName, className, label }: { offerKey: OfferPriceKey; packageName: string; className: string; label: string }) {
  const price = useOfferPrice(offerKey);
  const text = `مرحبًا ديوانك، أرغب في استشارة مجانية مبدئية لتحديد مدى مناسبة باقة ${packageName} بسعر ${price.formattedAmount} ${price.currencyLabel}. موقعي أو نشاطي: . أرجو توضيح نطاق العمل والخطوات التالية.`;
  const href = `https://wa.me/97339066649?text=${encodeURIComponent(text)}`;
  function trackSelect() {
    pushCroPackageSelect({
      package_id: offerKey as "cro-snapshot" | "cro-audit" | "cro-growth-diagnostic",
      language: "ar",
      displayed_amount: price.amount,
      currency: price.currency,
      page_path: window.location.pathname,
    });
  }
  return <a className={className} href={href} target="_blank" rel="noreferrer" onClick={trackSelect}>{label} <span>←</span></a>;
}
