import assert from "node:assert/strict";
import { chromium } from "playwright";
import { getOfferQuote, pricingSnapshotTime } from "../../app/(ar)/offers/offer-pricing.ts";

const snapshot = process.env.NEXT_PUBLIC_DEWANK_PRICING_SNAPSHOT;
assert.ok(["campaign", "regular"].includes(snapshot));
const at = pricingSnapshotTime(snapshot);
const base = "http://127.0.0.1:3217";
const browser = await chromium.launch({ headless: true });
const countries = ["SA", "AE", "BH", "KW", "QA", "OM", "EG"];
const fmt = (n, lang) => new Intl.NumberFormat(lang, { maximumFractionDigits: 0 }).format(n);
const normalize = s => s.replace(/[\u061c\u200e\u200f\u2066-\u2069]/g, "").replace(/\s+/g, " ").trim();
try {
  for (const locale of ["ar", "en"]) {
    const prefix = locale === "en" ? "/en" : "";
    const context = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
    await context.route("**/*", route => {
      const url = new URL(route.request().url());
      return url.origin === base ? route.continue() : route.abort();
    });
    const page = await context.newPage();
    await page.goto(base + prefix + "/offers/brand-naming");
    for (const country of countries) {
      await page.evaluate(country => {
        localStorage.setItem("dewank_offer_country", country);
        window.dispatchEvent(new Event("dewank:offer-country-updated"));
      }, country);
      const q = getOfferQuote("brand-naming", country, at);
      const panel = page.locator(".dp-promotion").first();
      await panel.locator(".offer-price strong").waitFor();
      await page.waitForFunction(expected => document.querySelector(".dp-promotion .offer-price strong")?.textContent === expected, fmt(q.amount, locale));
      const currency = locale === "ar" ? q.currencyLabel : q.currency;
      assert.equal(normalize(await panel.locator(".offer-price span").innerText()), normalize(currency));
      assert.equal(await panel.locator(".dp-promotion-details").count(), snapshot === "campaign" ? 1 : 0);
      if (locale === "ar") {
        const href = await page.locator(".bn2-price a[href*='wa.me']").first().getAttribute("href");
        assert.ok(normalize(new URL(href).searchParams.get("text")).includes(normalize(fmt(q.amount, locale) + " " + currency)));
        const sticky = page.locator(".bn2-sticky");
        assert.ok(normalize(await sticky.locator(".bn2-sticky-price b").textContent()).includes(normalize(fmt(q.amount, locale))));
        assert.equal(await sticky.locator("a").getAttribute("href"), href);
      }
      console.log(snapshot, locale, country, "naming quote OK");
    }
    await page.goto(base + prefix + "/conversion-rate-optimization");
    for (const country of countries) {
      await page.evaluate(country => {
        localStorage.setItem("dewank_offer_country", country);
        window.dispatchEvent(new Event("dewank:offer-country-updated"));
      }, country);
      const keys = ["cro-snapshot", "cro-audit", "cro-growth-diagnostic"];
      for (const [index, key] of keys.entries()) {
        const q = getOfferQuote(key, country, at);
        const card = page.locator(".cro-package-card").nth(index);
        await card.locator(".cro-price strong").waitFor();
        await page.waitForFunction(({ index, amount }) => document.querySelectorAll(".cro-package-card .cro-price strong")[index]?.textContent === amount, { index, amount: fmt(q.amount, locale) });
        const cta = card.locator("a[href*='wa.me']").first();
        const href = await cta.getAttribute("href");
        const currency = locale === "ar" ? q.currencyLabel : q.currency;
        assert.ok(normalize(new URL(href).searchParams.get("text")).includes(normalize(fmt(q.amount, locale) + " " + currency)));
        // Keep the click inside this page; no message is sent and all third-party requests are blocked.
        await cta.evaluate(el => {
          el.addEventListener("click", e => e.preventDefault(), { once: true });
          el.click();
        });
        const event = await page.evaluate(() => [...(window.dataLayer || [])].reverse().find(e => e.event === "cro_package_select"));
        assert.equal(event?.package_id, key);
        assert.equal(event?.displayed_amount, q.amount);
        assert.equal(event?.currency, q.currency);
        assert.equal(event?.language, locale);
        console.log(snapshot, locale, country, key, "CTA and event OK");
      }
    }
    await context.close();
  }
} finally {
  await browser.close();
}
