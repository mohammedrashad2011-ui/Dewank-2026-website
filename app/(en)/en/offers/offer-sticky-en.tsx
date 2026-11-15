"use client";

import { StickyOfferBar } from "../../../(ar)/offers/brand-naming/sticky-offer-bar";
import type { OfferPriceKey } from "../../../(ar)/offers/offer-pricing";
import { OfferPrice } from "../_en/lib/localized-price";
import "../../../(ar)/offers/offer-sticky-cta.css";

// English order bar. Same sticky behaviour and WhatsApp href as the Arabic offers. The href comes from the page, so the
// message stays identical to the one in the offer body.
export function EnOfferSticky({ watchIds, href, label, priceLabel, offerKey }: { watchIds: string[]; href: string; label: string; priceLabel: string; offerKey: OfferPriceKey }) {
  return (
    <div className="offer-sticky">
      <StickyOfferBar
        watchIds={watchIds}
        alwaysWhenHidden
        href={href}
        label={label}
        priceLabel={priceLabel}
        price={<OfferPrice offerKey={offerKey} className="offer-sticky-price" />}
        arrow="→"
      />
    </div>
  );
}
