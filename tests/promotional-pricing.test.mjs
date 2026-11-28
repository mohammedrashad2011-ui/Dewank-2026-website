import test from "node:test";
import assert from "node:assert/strict";
import { offerPricing, offerFuturePricing, getOfferQuote, yearEndOffer } from "../app/(ar)/offers/offer-pricing.ts";

const expiry = Date.parse(yearEndOffer.endsAt);
const countries = [null, "SA", "AE", "BH", "KW", "QA", "OM", "US", "EG"];

test("all seventeen packages have an approved current price and a future market price", () => {
  assert.equal(Object.keys(offerPricing).length, 17);
  assert.deepEqual(Object.keys(offerFuturePricing).sort(), Object.keys(offerPricing).sort());
  for (const key of Object.keys(offerPricing)) {
    for (const country of countries) {
      const before = getOfferQuote(key, country, expiry - 1);
      const after = getOfferQuote(key, country, expiry);
      const config = offerPricing[key];
      const original = country ? config.prices[country] ?? config.fallback : config.initial;
      assert.equal(before.amount, original.amount);
      assert.equal(before.currencyLabel, original.currencyLabel);
      assert.equal(before.active, true);
      assert.equal(before.savings, after.amount - before.amount);
      assert.ok(before.savings > 0);
      assert.equal(before.savingsPercent, Math.round(before.savings / after.amount * 100));
      assert.equal(after.active, false);
      assert.equal(after.savings, 0);
      assert.equal(after.savingsPercent, 0);
      assert.equal(before.futureAmount, after.amount);
      assert.equal(before.currencyLabel, after.currencyLabel);
    }
  }
});

test("Riyadh midnight is the expiry boundary and naming retains its campaign price", () => {
  assert.equal(new Date(expiry).toISOString(), "2026-12-31T21:00:00.000Z");
  const quote = getOfferQuote("brand-naming", "SA", expiry - 1);
  assert.equal(quote.amount, 490);
  assert.equal(quote.futureAmount, 690);
  assert.equal(quote.savings, 200);
  assert.equal(quote.savingsPercent, 29);
  assert.equal(getOfferQuote("brand-naming", "SA", expiry).amount, 690);
  assert.equal(getOfferQuote("brand-naming", "EG", expiry - 1).amount, 130);
});

test("name and identity bundle remains cheaper than separate packages in every market", () => {
  for (const country of countries) {
    for (const at of [expiry - 1, expiry]) {
      assert.ok(getOfferQuote("name-identity-bundle", country, at).amount <
        getOfferQuote("brand-naming", country, at).amount +
        getOfferQuote("mini-visual-identity", country, at).amount);
    }
  }
});
