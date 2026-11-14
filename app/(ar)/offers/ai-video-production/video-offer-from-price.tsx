"use client";

import { offerPricing } from "../offer-pricing";
import { useOfferCountry } from "../../../(en)/en/_en/lib/localized-price";

export default function VideoOfferFromPrice() {
  const country = useOfferCountry();
  const config = offerPricing["video-edit"];
  const price = country ? config.prices[country] ?? config.initial : config.initial;
  return (
    <div className="offer-price">
      <strong>{new Intl.NumberFormat("ar", { maximumFractionDigits: 0 }).format(price.amount)}</strong>
      <span>{price.currencyLabel}</span>
    </div>
  );
}
