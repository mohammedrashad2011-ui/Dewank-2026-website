"use client";

import Link from "next/link";
import { useMemo } from "react";
import type { OfferPriceKey } from "@/app/offers/offer-pricing";
import { resolveOfferPrice, useOfferCountry } from "../lib/localized-price";

// English copy of the Arabic HomeSelectedOffers. Prices come from the shared English pricing engine (USD first, then the
// saved or looked-up country where an approved price exists). No popularity request and no home_offer_select event.
const offers: Array<{ key: OfferPriceKey; label: string; title: string; text: string; href: string }> = [
  {
    key: "brand-naming",
    label: "BRAND NAMING",
    title: "Brand naming",
    text: "Names shaped by meaning, with preliminary checks for similarity and domain availability, and an initial direction for the brand.",
    href: "/en/brand-naming",
  },
  {
    key: "google-ads-launch",
    label: "GOOGLE ADS",
    title: "Google Ads launch",
    text: "An organised Search campaign: tight keyword groups, negative keywords and basic conversion tracking.",
    href: "/en/paid-advertising",
  },
  {
    key: "whatsapp-automation-starter",
    label: "WHATSAPP AUTOMATION",
    title: "WhatsApp automation starter",
    text: "Response, qualification, data capture and handover to your team, within a clear foundation scope.",
    href: "/en/whatsapp-crm-automation",
  },
];

export function HomeSelectedOffers() {
  const country = useOfferCountry();
  const cards = useMemo(
    () => offers.map((offer) => ({ ...offer, price: resolveOfferPrice(offer.key, country) })),
    [country],
  );

  return (
    <div className="en-offer-grid">
      {cards.map((offer, index) => (
        <Link className={`home-offer-card${index === 0 ? " is-recommended" : ""}`} href={offer.href} key={offer.key}>
          <div className="home-offer-top">
            <small>{offer.label}</small>
            <div className="home-offer-signals">
              {index === 0 && <b>Starting point</b>}
              <span aria-hidden="true">↗</span>
            </div>
          </div>
          <h3>{offer.title}</h3>
          <p>{offer.text}</p>
          <div className="home-offer-bottom">
            <div className="home-offer-price">
              <strong>{new Intl.NumberFormat("en", { maximumFractionDigits: 0 }).format(offer.price.amount)}</strong>
              <span>{offer.price.currency}</span>
            </div>
            <b>View the service</b>
          </div>
        </Link>
      ))}
    </div>
  );
}
