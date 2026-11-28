import assert from "node:assert/strict";
import { getOfferQuote, pricingSnapshotTime } from "../../app/(ar)/offers/offer-pricing.ts";

const snapshot = process.env.NEXT_PUBLIC_DEWANK_PRICING_SNAPSHOT;
assert.ok(snapshot === "campaign" || snapshot === "regular");
const base = process.env.PRICING_TEST_BASE_URL || "http://127.0.0.1:3217";
const at = pricingSnapshotTime(snapshot);
const cases = [
  ["30-day-content-package", null], ["brand-naming", null],
  ["google-ads-launch", null], ["instagram-14-day-upgrade", null],
  ["landing-page-package", null], ["seo-audit", null],
  ["small-business-website", null], ["visual-identity", null],
  ["whatsapp-automation-starter", null], ["name-identity", null],
];
const aliases = { "visual-identity": "mini-visual-identity", "name-identity": "name-identity-bundle" };
const response = await fetch(base + "/api/pricing-snapshot");
assert.equal(response.status, 200);
assert.match(response.headers.get("cache-control") || "", /no-store/i);
assert.equal((await response.json()).snapshot, snapshot);
for (const locale of ["ar", "en"]) {
  for (const [slug] of cases) {
    const key = aliases[slug] || slug;
    const market = locale === "en" && slug === "30-day-content-package" ? "US" : null;
    const expected = getOfferQuote(key, market, at);
    const path = (locale === "en" ? "/en" : "") + "/offers/" + slug;
    const res = await fetch(base + path);
    assert.equal(res.status, 200, path);
    const html = await res.text();
    const schemas = [...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)].map(m => JSON.parse(m[1]));
    const offers = [];
    function visit(node) {
      if (!node || typeof node !== "object") return;
      if (node["@type"] === "Offer") offers.push(node);
      for (const value of Object.values(node)) visit(value);
    }
    schemas.forEach(visit);
    assert.ok(offers.some(o => String(o.price) === String(expected.amount) && o.priceCurrency === expected.currency), path + " missing expected schema offer");
    if (slug === "landing-page-package") {
      const full = getOfferQuote("landing-page-package-full", null, at);
      assert.ok(offers.some(o => String(o.price) === String(full.amount) && o.priceCurrency === full.currency), path + " missing full landing offer");
    }
    console.log(snapshot, path, expected.amount, expected.currency, "OK");
  }
}
