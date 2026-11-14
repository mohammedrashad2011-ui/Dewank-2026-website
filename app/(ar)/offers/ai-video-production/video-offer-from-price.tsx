"use client";

import { VideoLocalizedOfferPrice } from "./video-localized-price";

export default function VideoOfferFromPrice({ locale = "ar" }: { locale?: "ar" | "en" }) {
  return <VideoLocalizedOfferPrice priceKey="video-edit" locale={locale} />;
}
