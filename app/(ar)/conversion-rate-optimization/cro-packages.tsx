"use client";

import { pushCroPackageSelect } from "../../components/cro-package-event";
import type { OfferPriceKey } from "../offers/offer-pricing";
import { useOfferPrice } from "../offers/use-offer-price";

// ISO codes for the Arabic currency names in offer-pricing.ts. Used only for the dataLayer event, never for display.
const currencyCodes: Record<string, string> = {
  "ريال سعودي": "SAR",
  "درهم إماراتي": "AED",
  "ريال قطري": "QAR",
  "دينار بحريني": "BHD",
  "دينار كويتي": "KWD",
  "ريال عُماني": "OMR",
  "دولار أمريكي": "USD",
};

// Price and currency come from the same hook, so the amount on screen and the amount in the WhatsApp text always agree.
export function CroPackagePrice({ offerKey }: { offerKey: OfferPriceKey }) {
  const price = useOfferPrice(offerKey);
  return <div className="cro-price"><strong>{price.formattedAmount}</strong><span>{price.currencyLabel}</span></div>;
}

// Opens a prefilled WhatsApp message to confirm the scope. Opening it does not complete an order.
// The click also records a dedicated dataLayer event with the package, the displayed amount and the page path.
export function CroPackageWhatsApp({ offerKey, packageName, className, label }: { offerKey: OfferPriceKey; packageName: string; className: string; label: string }) {
  const price = useOfferPrice(offerKey);
  const text = `مرحبًا ديوانك، أريد طلب باقة ${packageName} بسعر ${price.formattedAmount} ${price.currencyLabel}. موقعي أو نشاطي: . أرجو تأكيد النطاق والخطوات التالية.`;
  const href = `https://wa.me/97339066649?text=${encodeURIComponent(text)}`;
  function trackSelect() {
    pushCroPackageSelect({
      package_id: offerKey as "cro-snapshot" | "cro-audit" | "cro-growth-diagnostic",
      language: "ar",
      displayed_amount: price.amount,
      currency: currencyCodes[price.currencyLabel] ?? "USD",
      page_path: window.location.pathname,
    });
  }
  return <a className={className} href={href} target="_blank" rel="noreferrer" onClick={trackSelect}>{label} <span>←</span></a>;
}
