"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { offerPricing, type OfferPriceKey } from "@/app/offers/offer-pricing";

// English copy of the Arabic HomeSelectedOffers, using the approved price data (app/offers/offer-pricing.ts).
//
// USD first: every render, server and first client, shows the approved USD fallback price. A saved country
// (localStorage, same key the Arabic site uses) then switches the amount to that country's approved price.
// Unsupported, unknown or failed countries keep the USD price. No GBP/EUR conversion is ever made.
//
// Differences from the Arabic component, on purpose:
// - The third-party country lookup (api.country.is) is gated by COUNTRY_LOOKUP_APPROVED below. It stays off until the
//   English privacy page discloses it. Saved countries are still used.
// - No popularity request, no Arabic ranking and no home_offer_select dataLayer event.
// - Currency is shown as an ISO code (SAR, AED ...) because the config labels are Arabic.

const COUNTRY_LOOKUP_APPROVED: boolean = false;
const countryStorageKey = "dewank_offer_country";

const currencyCodes: Record<string, string> = {
  SA: "SAR",
  AE: "AED",
  BH: "BHD",
  KW: "KWD",
  QA: "QAR",
  OM: "OMR",
};
const fallbackCurrencyCode = "USD";

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

const amountFormatter = new Intl.NumberFormat("en", { maximumFractionDigits: 0 });

function normaliseCountry(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const code = value.trim().toUpperCase();
  return /^[A-Z]{2}$/.test(code) ? code : null;
}

function readSavedCountry(): string | null {
  try {
    return normaliseCountry(window.localStorage.getItem(countryStorageKey));
  } catch {
    // Storage can be blocked (private mode, disabled site data). Prices then fall back to the neutral text.
    return null;
  }
}

function writeSavedCountry(country: string) {
  try {
    window.localStorage.setItem(countryStorageKey, country);
  } catch {
    // Not stored; the visitor will be asked again on the next visit.
  }
}

// A country-specific approved price where one exists; otherwise the approved USD fallback. Never a SAR default.
function resolvePrice(key: OfferPriceKey, country: string | null) {
  const config = offerPricing[key];
  const local = country ? config.prices[country] : undefined;
  if (country && local) return { amount: local.amount, currency: currencyCodes[country] ?? fallbackCurrencyCode };
  return { amount: config.fallback.amount, currency: fallbackCurrencyCode };
}

const noopSubscribe = () => () => {};

export function HomeSelectedOffers() {
  // The saved country is read through useSyncExternalStore: the server and the first client render both use null,
  // so there is no hydration mismatch. A country from the lookup is kept separately and takes effect after the lookup.
  const savedCountry = useSyncExternalStore(noopSubscribe, readSavedCountry, () => null);
  const [lookedUpCountry, setLookedUpCountry] = useState<string | null>(null);
  // null = unknown (lookup pending, disabled or failed). The USD fallback is shown in that state.
  const country = savedCountry ?? lookedUpCountry;

  useEffect(() => {
    if (savedCountry || !COUNTRY_LOOKUP_APPROVED) return;

    let cancelled = false;
    let controller: AbortController | null = null;
    // Below the fold: keep the lookup off the initial mobile critical path, as the Arabic component does.
    const timer = window.setTimeout(() => {
      controller = new AbortController();
      fetch("https://api.country.is/", { cache: "no-store", signal: controller.signal })
        .then((response) => {
          if (!response.ok) throw new Error("Country lookup failed");
          return response.json() as Promise<{ country?: string }>;
        })
        .then((data) => {
          const next = normaliseCountry(data.country);
          if (!next || cancelled) return;
          writeSavedCountry(next);
          setLookedUpCountry(next);
        })
        .catch(() => {});
    }, 6500);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      controller?.abort();
    };
  }, [savedCountry]);

  const cards = useMemo(() => offers.map((offer) => ({ ...offer, price: resolvePrice(offer.key, country) })), [country]);

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
              <strong>{amountFormatter.format(offer.price.amount)}</strong>
              <span>{offer.price.currency}</span>
            </div>
            <b>View the service</b>
          </div>
        </Link>
      ))}
    </div>
  );
}
