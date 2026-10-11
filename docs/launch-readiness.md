# Bilingual launch readiness (experimental branch)

Branch: `experiment/bilingual-root-layout`. Nothing here is merged or released. English indexing stays off.

## Fixed in this hardening pass

- **WhatsApp widget on English pages.** The widget copy and direction follow the page language. Same destination
  (`+97339066649`), same `lead_intent` keys and event names. It is hidden on phones on the Riyadh landing page, where it
  covered the primary button. The English stylesheet still hides it on the approved English pages, as before.
- **Structured data for English.** English pages carry an English Organization and WebSite node with the same `@id`
  values as the Arabic graph. Descriptions and names come from copy already on the site. No Gulf-only geography is stated
  on English pages. Each document has one Organization and one WebSite node, and every sampled page parses.
- **Unknown URLs.** `/en/...` unknown paths return HTTP 404 with `lang="en" dir="ltr"`. Unknown Arabic paths return HTTP 404
  with `lang="ar" dir="rtl"`. Implemented as route handlers behind the static routes, so valid pages match first.
- **Analytics by environment.** Vendor scripts load only in production mode (see `analytics-environments.md`). Preview and
  development builds record `dataLayer` events without sending them anywhere.
- **Accessible name of the WhatsApp link** now matches its visible text (a Lighthouse label-in-name failure).
- **Lint.** English internal links use `Link` where that changes no markup. The approved MotionSystem anchors keep a
  documented exception. Five `set-state-in-effect` errors remain (see below).

## Intentionally unchanged

- Approved visual designs: English homepage, English service cards and their animations, English services hub, Arabic
  homepage, orbit and service cards. Pixel comparison: identical to the previous experiment and to the original baseline.
- Arabic pricing and the Arabic country lookup (`api.country.is`) on Arabic offer pages. Protected behaviour.
- English `noindex` while `ENGLISH_LAUNCH_ENABLED` is false.
- Conversion event names and fields.

## Blockers and decisions before production

1. **Owner decision: English WhatsApp widget.** The approved English pages hide it. Only the Riyadh landing page shows it.
   Showing it on all English pages changes approved designs, so it needs owner approval.
2. **Owner decision: separate English tracking.** Not created. English and Arabic share the production GTM, GA4 and Meta IDs.
   Segment by `/en` path and `lang`, as described in `analytics-environments.md`.
3. **Owner decision: consent.** No consent banner or consent mode exists. This is a legal question for the target markets.
4. **Legacy ESLint errors (5), not changed.** `react-hooks/set-state-in-effect` in `localized-offer.tsx`,
   `use-offer-price.ts`, `home-selected-offers.tsx`, `instagram-follow-card.tsx` and `mobile-offers-rail.tsx`. They sit in
   offer pricing, the country lookup and popups. Rewriting them could change pricing behaviour, which is protected. They
   need a separate, reviewed change.
5. **Arabic colour contrast.** Testimonial translation text fails the contrast check. Fixing it changes an approved Arabic
   visual, so it needs owner approval.
6. **English structured data policy.** English pages keep the existing Organization identity. Adding English-only
   properties such as `areaServed` or award data needs owner-supplied facts.
7. **English hreflang and sitemap.** Prepared in `app/(en)/en/_en/lib/seo-launch.ts`. They stay off until the launch commit
   flips the flag, and Arabic pages need reciprocal entries at that point.
8. **Experimental route handling.** Unknown-URL handling uses route handlers, not an experimental Next.js flag. This
   removes `experimental.globalNotFound`.

## Verification

- TypeScript: passes.
- ESLint: 5 errors, all in item 4 above. No new errors.
- Production build: passes.
- Route parity (93 routes): no unexpected differences. Only `lang` and `dir` change, on the 38 English routes.
- Visual regression (deterministic captures, 9 pages x 5 widths): identical on the homepages, services, contact and offers.
  The Riyadh page differs by 0.01 to 0.05% because of the widget copy change.
- Lighthouse, English homepage: Accessibility 100, Best Practices 77, SEO 66.
  - Best Practices: one third-party cookie from the production Google tags.
  - SEO: `noindex` on English pages, which is intended.
- Lighthouse, Arabic homepage: Accessibility 96, Best Practices 77, SEO 100.
  - Accessibility: testimonial colour contrast (blocker 5).
  - Best Practices: the same third-party cookie.
- Preview mode: no GTM, GA4 or Meta requests. Widget click still records `sitewide_whatsapp_click`.
