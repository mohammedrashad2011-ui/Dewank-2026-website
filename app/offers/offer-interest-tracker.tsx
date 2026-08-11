"use client";

import { useEffect } from "react";

const allowedOfferKeys = new Set([
  "30-day-content-package",
  "landing-page-package",
  "seo-audit",
  "brand-naming",
  "whatsapp-automation-starter",
  "mini-visual-identity",
  "google-ads-launch",
  "instagram-14-day-upgrade",
  "small-business-website",
]);

const dedupeWindowMs = 30 * 60 * 1000;
const storagePrefix = "dewank_offer_interest_";

export default function OfferInterestTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const link = target?.closest<HTMLAnchorElement>('a.offer-card-hit[href^="/offers/"]');
      if (!link) return;

      const offerKey = link.pathname.split("/").filter(Boolean).pop() || "";
      if (!allowedOfferKeys.has(offerKey)) return;

      const card = link.closest<HTMLElement>(".offer-card");
      const category = card?.dataset.category || card?.dataset.filter || "";
      const cards = Array.from(document.querySelectorAll<HTMLAnchorElement>('a.offer-card-hit[href^="/offers/"]'));
      const rank = cards.indexOf(link) + 1;

      (window as Window & { dataLayer?: Array<Record<string, unknown>> }).dataLayer?.push({
        event: "offer_select",
        offer_key: offerKey,
        offer_category: category,
        offer_rank: rank,
      });

      const storageKey = `${storagePrefix}${offerKey}`;
      const lastRecorded = Number(window.localStorage.getItem(storageKey) || 0);
      const now = Date.now();
      if (lastRecorded && now - lastRecorded < dedupeWindowMs) return;
      window.localStorage.setItem(storageKey, String(now));

      fetch("/api/offer-popularity", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ offer_key: offerKey, offer_category: category }),
        keepalive: true,
      }).catch(() => {});
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
