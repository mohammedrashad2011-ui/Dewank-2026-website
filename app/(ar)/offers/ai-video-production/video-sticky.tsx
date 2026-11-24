"use client";

import { StickyOfferBar } from "../brand-naming/sticky-offer-bar";
import { getVideoOfferPrice, useVideoOfferCountry } from "./video-localized-price";
import "../offer-sticky-cta.css";

// Mobile order bar, shared with the other offers. The price follows the same market selector as the packages.
export default function VideoSticky({ locale, href, watchIds }: { locale: "ar" | "en"; href: string; watchIds: string[] }) {
  const country = useVideoOfferCountry();
  const price = getVideoOfferPrice("video-edit", country, locale);
  const ar = locale === "ar";
  return (
    <div className="offer-sticky">
      <StickyOfferBar
        watchIds={watchIds}
        alwaysWhenHidden
        ctaMinVisibleRatio={0.5}
        href={href}
        label={ar ? "ابدأ فيديوك" : "Start your video"}
        priceLabel={ar ? "باقات تبدأ من" : "Packages from"}
        price={price.formatted}
        arrow={ar ? "←" : "→"}
      />
    </div>
  );
}
