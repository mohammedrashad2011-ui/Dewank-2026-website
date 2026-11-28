"use client";

import { useEffect } from "react";
import { getPricingSnapshotTime, isYearEndOfferActive, yearEndOffer } from "../(ar)/offers/offer-pricing";

const expiry = Date.parse(yearEndOffer.endsAt);
const retryMs = 30_000;
const reloadCooldownMs = 120_000;
const reloadKey = "dewank-pricing-snapshot-reload";

export default function PricingSnapshotRefresh() {
  useEffect(() => {
    // Regular builds never need the one-way campaign expiry refresh.
    if (!isYearEndOfferActive(getPricingSnapshotTime())) return;
    let disposed = false;
    let timer: number | undefined;
    let pending: AbortController | null = null;
    let reloading = false;

    function schedule(delay: number) {
      if (disposed || reloading) return;
      if (timer !== undefined) window.clearTimeout(timer);
      // Avoid browser timeout overflow for a deadline more than 24 days away.
      timer = window.setTimeout(check, Math.min(Math.max(delay, 0), 86_400_000));
    }

    function check() {
      if (disposed || reloading || pending) return;
      const remaining = expiry - Date.now();
      if (remaining > 0) {
        schedule(remaining);
        return;
      }
      if (document.visibilityState === "hidden") {
        schedule(retryMs);
        return;
      }
      const controller = new AbortController();
      pending = controller;
      const requestTimeout = window.setTimeout(() => controller.abort(), 8_000);
      void fetch("/api/pricing-snapshot", { cache: "no-store", signal: controller.signal })
        .then(response => response.ok ? response.json() : null)
        .then((data: unknown) => {
          if (disposed || !data || typeof data !== "object" || !("snapshot" in data) || data.snapshot !== "regular") return;
          // Only refresh after the serving deployment confirms regular pricing.
          // A cooldown protects against stale intermediary HTML causing reload loops.
          try {
            const now = Date.now();
            const last = Number(window.sessionStorage.getItem(reloadKey) ?? "0");
            if (now - last < reloadCooldownMs) return;
            window.sessionStorage.setItem(reloadKey, String(now));
          } catch {
            // If the loop guard cannot be stored, leave refresh to the visitor.
            return;
          }
          reloading = true;
          window.location.reload();
        })
        .catch(() => {})
        .finally(() => {
          window.clearTimeout(requestTimeout);
          pending = null;
          schedule(retryMs);
        });
    }

    const onVisible = () => { if (document.visibilityState === "visible") check(); };
    window.addEventListener("focus", onVisible);
    window.addEventListener("pageshow", onVisible);
    document.addEventListener("visibilitychange", onVisible);
    schedule(expiry - Date.now());
    return () => {
      disposed = true;
      if (timer !== undefined) window.clearTimeout(timer);
      pending?.abort();
      window.removeEventListener("focus", onVisible);
      window.removeEventListener("pageshow", onVisible);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);
  return null;
}
