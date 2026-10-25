# Mobile performance repair | 25 October 2026

## Baseline: `https://dewank.com/`
User-provided PageSpeed Insights mobile lab report captured at 02:33 Cairo time (Moto G Power, Slow 4G, Lighthouse 13.5.0):

| Metric | Before |
| --- | --- |
| Lighthouse Performance | 74/100 |
| First Contentful Paint (FCP) | 2.8 s |
| Largest Contentful Paint (LCP) | 4.7 s |
| Total Blocking Time (TBT) | 150 ms |
| Cumulative Layout Shift (CLS) | 0 |
| Speed Index | 4.1 s |
| Accessibility / Best Practices / SEO | 100 / 100 / 100 |

The report found 3 Google downloads: `gtag/js?id=G-5SKKT1NBHB` (direct), `gtag/js?id=G-5SKKT1NBHB&cx=c&gtm=...` (issued by GTM), and `gtm.js?id=GTM-PG525ZFN`. The latter two establish that the existing GTM container already loads this exact GA4 measurement ID on production. Removing the **standalone** gtag.js loader prevents a duplicate transfer and duplicate GA4 initialization while leaving GTM and current dataLayer events in place.

## Changes made
1. The homepage portfolio chapter on **both** `/` and `/en` now uses semantic, sized, `loading="lazy"`, `decoding="async"` image tags instead of CSS pseudo-element backgrounds. The original image sources and hover/reveal effects remain; cards have fixed CSS image heights to avoid CLS. This keeps three below-the-fold images from being requested unnecessarily on first paint (report showed about 206 KiB of uncached project imagery).
2. The consent bootstrap retains all existing consent, GTM and Meta Pixel logic, but no longer requests its own `gtag/js` or issues duplicate `gtag('config')`. **GTM is now the sole loader of GA4.** Existing tracking IDs and custom conversion event names are unchanged.
3. Next.js configuration now provides a 30-day reusable browser cache for image file extensions under `/work/` and `/en/work/` in addition to existing brand and font headers. HTML and dynamic pages are not cached by these new rules.

## Verification & release gates
- Run production-mode measurement QA after deployment: exactly one Google-tag download for `G-5SKKT1NBHB` from the GTM path, exactly one initial `page_view` (no doubles), and one each for `sitewide_whatsapp_click`, form/offer conversion events where applicable.
- Check GA4 real-time/DebugView and Tag Assistant on **both** language routes. GTM's existing Google tag for the original ID must remain enabled with the correct consent requirements. This cannot be proven from the repository alone.
- Confirm the image Cache-Control response headers on the **live production host**. Hostinger/CDN can override or bypass `next.config.ts` settings; the baseline showed no browser TTL even for fonts and brand files that already have a Next.js cache header. The live header test is needed to prove caching is actually fixed.
- Re-run Lighthouse mobile at the same route and profile after production publish and compare FCP/LCP/long tasks. No score improvement should be asserted without this retest.
- The remaining render-blocking/unused CSS, legacy JS and Clarity/GTM tag mix are documented as further tuning possibilities, not claimed fixed in this PR.
- Preserve visual hierarchy, SEO metadata, working CTAs, motion and conversion accuracy.

Status: **implementation in separate PR; no automatic merge**.
