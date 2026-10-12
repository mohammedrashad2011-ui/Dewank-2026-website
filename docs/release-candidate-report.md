# Release candidate report: bilingual site (Arabic at `/`, English at `/en`)

Branch `release/bilingual-production-20261012`, head `d04decc`, draft PR #157 against `main`. Measured on this exact
commit: a clean `npm ci`, a production build, and a preview-configuration build of the same commit.

## Verdict

| Decision | Verdict | Why |
|---|---|---|
| Owner review of PR #157 as a draft | **GO** | Build, types, lint, and the functional, consent, form, privacy, pricing and indexing checks pass on this commit. No functional blocker is open. The open items are owner decisions and performance targets (below). |
| Merge PR #157 into `main` | **NO-GO** | Owner decisions 1 to 6 below are open. Merging needs the owner's written approval. |
| Production launch, and English indexing on dewank.com | **NO-GO** | Same decisions, plus the mobile performance targets (decision 7) are not met on first visit. |

Nothing has been merged, deployed, or changed on the live site or in DNS. English indexing is on in this branch's
production build, and off in the preview build.

## What changed in this round

| Commit | Change |
|---|---|
| `c2a07d9` | English contact form hands the enquiry to WhatsApp. The unused `/api/contact` route, which returned a false 202, is removed. |
| `11f8834` | Privacy and cookie notices in Arabic and English. Drafts pending counsel and owner facts; both `noindex`. |
| `4502ff7` | English indexing enabled on this branch (`ENGLISH_LAUNCH_ENABLED = true`). |
| `8abc474` | Launch documentation: country-lookup decision record and deployment runbook. |
| `8ce363a` | Privacy cookie tables are keyboard-scrollable and named (axe scrollable-region finding). |
| `5e95b9f` | Arabic `/services`: the two serious axe findings fixed with no visual change (see below). |
| `d04decc` | Privacy notices and decision record state the country-lookup timing as the code runs it. |

**Services fixes (`5e95b9f`).** The AI orchestrator button had an `aria-label` that did not contain its visible text, so
the accessible name was not what sighted users read. The label is removed; the visible ring words are now read as part
of the name. The growth-tag contrast failed because the tag had no background of its own, so axe measured the blue section behind
it (text `#1c2966` on `#3155ff`, 2.48:1). An explicit tag background, equal to the card background, fixes it. Pixel comparison of the services pages at seven widths
against the earlier candidate captures: identical.

## Build and static checks

| Check | Result |
|---|---|
| `npm ci` from the lockfile | Pass (506 packages). Warning: the project declares Node `22.x`; this machine has only Node `26.0.0`. |
| `npm run build` | Pass. 89 static and 3 dynamic routes. |
| Preview-configuration build (`VERCEL_ENV=preview`, same commit) | Pass |
| TypeScript (`tsc --noEmit`) | Pass |
| ESLint, full tree | 0 errors, 39 warnings (the same existing `<img>` and hook notes as before) |

## Automated QA on the production build (`d04decc`, port 3960)

| Check | Result |
|---|---|
| Route audit | 97 internal link targets; none return a non-200 or redirect status |
| Route parity | 94 routes compared (script exit 0) |
| Functional checks | Language switch keeps the route and direction; menu opens, traps focus, closes on Escape and returns focus; empty Arabic form shows 5 field errors and sends nothing |
| dataLayer, no consent | No vendor request on `/services` or `/en/privacy` |
| Third-party requests, no choice | None on the sampled English and Arabic pages, except `api.country.is` on the Arabic offers hub, as documented |
| SEO structure | JSON-LD parses on every sampled page (Organization, WebSite); canonicals and `lang`/`dir` match each language |
| WhatsApp widget and overlap | No CTA overlap at 390 or 1280 px; no horizontal overflow |
| Consent (Arabic and English) | First visit: banner shown, 0 vendor requests. Reject all: 0. Accept all: vendors load and the choice survives a reload. Analytics only: GTM and GA4 load, Meta does not. Withdrawal: 0 vendor requests after reload, no measurement cookies. |
| Keyboard and focus, consent | 21 of 21 checks pass in Arabic; 21 of 21 in English |
| English contact form | 18 of 18: validation, a single WhatsApp link to +973 3906 6649, the status says the enquiry is not complete, the blocked-window fallback, and no tracking event without consent |
| Privacy pages | 20 of 20 checks pass in both languages: `noindex`, `lang` and `dir`, heading outline, cookie table caption, footer links, inline cookie-settings control, no overflow at 390 px |
| GA4 page views | One `page_view` per load on `/` and `/en`, to the existing `G-5SKKT1NBHB` |
| Meta PageView | 0 `PageView` beacons in the page-view check after Accept all. The Meta script loads after consent (`fbevents.js` in the consent run). The `PageView` beacon is not seen from `localhost`, on the baseline either, so confirm it in Events Manager on production. |
| Popups | Identical to the earlier run in all 16 checks |
| Pricing (32 cases) | Prices, call counts and stored country identical to the baseline `54114a2` in 32 of 32 cases. Normalized text hashes identical in 32 of 32. Raw hashes differ in all 32 because of the footer legal line and the consent banner. |
| Launch configuration (candidate build) | English pages `index, follow` with reciprocal hreflang. Privacy pages `noindex, nofollow, nocache`. English sitemap entries: 37. Total sitemap: 83. |
| axe-core (7 pages) | 0 violations on `/en`, `/en/contact`, `/en/privacy`, `/services`, `/en/services`, `/contact`. One **moderate** finding on `/privacy` (see open items). |

## Preview configuration (`VERCEL_ENV=preview`, same commit)

| Check | Result |
|---|---|
| English robots | `noindex, nofollow` on every English page sampled; Arabic pages `index, follow`, as on the baseline |
| English sitemap entries | 0 |
| English hreflang | None |
| Vendor requests in any consent scenario | 0. Accept all, analytics only, and withdrawal included. GTM, GA4 and Meta do not load. |

## Seven-width visual check

84 full-page captures (12 pages at 1440, 1280, 1100, 1024, 834, 390 and 360 px) with the consent banner hidden.

- **Against the earlier candidate captures from this session:** 77 of 84 identical pixel for pixel, including every
  services page and the Arabic contact page. The 7 others are the English contact page, whose height changed because the
  form was rewritten (see below).
- **Against the baseline (`54114a2`):** the approved differences only. On desktop, the logo bands in the header and
  footer, the footer legal line, and the paid-advertising copy contrast. At 360 and 390 px, every other page is 20 px
  taller because the footer legal line wraps onto a second row (decision 8).
- **English contact page:** 100 px shorter at desktop and 131 px shorter at 390 px than the baseline. The old closed
  form is replaced by the WhatsApp form. The 390 px capture was reviewed: the form, brief section, CTA, and footer render
  complete with no clipping.

## Lab performance (Lighthouse, production build `d04decc`, median of 3 runs)

Mobile, devtools throttling, first visit (no stored choice):

| Page | Perf (base → final) | LCP ms (base → final) | TBT ms (base → final) | CLS (base → final) | Transfer KB (base → final) | A11y (base → final) |
|---|---|---|---|---|---|---|
| Arabic home | 54 → 73 | 4,031 → 3,344 | 1,134 → 531 | 0 → 0 | 2,017 → 1,150 | 100 → 100 |
| English home | 70 → 85 | 3,459 → 3,004 | 531 → 200 | 0 → 0 | 4,018 → 1,092 | 96 → 100 |
| Arabic services | 58 → 82 | 3,881 → 3,323 | 967 → 203 | 0 → 0 | 2,016 → 1,136 | 100 → 100 |
| English services | 69 → 86 | 3,524 → 2,975 | 542 → 190 | 0 → 0 | 3,976 → 1,036 | 96 → 100 |
| Arabic paid ads | 56 → 81 | 4,071 → 3,359 | 936 → 200 | 0 → 0 | 2,041 → 1,160 | 92 → 100 |
| English paid ads | 70 → 84 | 3,434 → 3,112 | 539 → 206 | 0 → 0 | 4,019 → 1,080 | 96 → 100 |
| English Riyadh | 60 → 84 | 3,960 → 2,803 | 670 → 291 | 0.071 → 0.071 | 4,106 → 1,070 | 96 → 100 |

Desktop (simulated), first visit: performance 97–98 on Arabic pages and 96–98 on English pages (baseline 82–97), LCP
1.08 to 1.21 s, TBT 0 on every page, accessibility 100 on every page (baseline 96 on the English and paid pages).
English Riyadh CLS is 0.088, unchanged from the baseline.

Stored choice, mobile, homes (median of 3):

| State | Arabic home: perf / LCP / TBT | English home: perf / LCP / TBT |
|---|---|---|
| Returning, rejected | 100 / 1,202 ms / 33 ms | 98 / 1,128 ms / 0 ms |
| Returning, accepted (vendors load) | 81 / 1,232 ms / 797 ms | 90 / 1,166 ms / 418 ms |

The LCP element is the hero paragraph in every run.

**How much of the mobile number is this machine.** The final matrix ran on a slower CPU state than the earlier session
(Lighthouse's benchmark index was 2,222–2,904 in this matrix, against 2,517–2,904 earlier), and every page read 2 to 9
points lower than the earlier session. To separate code from machine load, the pre-round commit (`c2a07d9`) was built and measured
interleaved with `d04decc`, mobile, three runs each:

| Page | Pre-round (`c2a07d9`) perf / TBT / LCP medians | Final (`d04decc`) perf / TBT / LCP medians |
|---|---|---|
| Arabic home | 78 / 296 ms / 3,383 ms | 82 / 173 ms / 3,353 ms |
| English home | 86 / 170 ms / 3,007 ms | 86 / 180 ms / 3,021 ms |

The two builds are within run-to-run noise on the homepages. This round did not regress performance.

**Targets against the final numbers:**

- Mobile performance 85 or more: met on English home (85) and English services (86). Not met on Arabic home (73 in
  this matrix, 82 in the interleaved run), Arabic services (82), Arabic paid ads (81), English paid ads (84) and English
  Riyadh (84).
- First-visit mobile LCP under 2.5 s: **not met on any page.** The best is 2.80 s (English Riyadh). Returning visitors
  are at about 1.2 s.
- CLS under 0.1: met on every page.
- TBT under 200 ms: met on English services (190 ms). English home is at the limit (200 ms). Not met on the other five
  pages (206 to 531 ms).
- Desktop: no page regresses on performance, LCP, TBT or CLS.

**Why first-visit LCP is above 2.5 s.** The hero paragraph is the LCP element, and its paint waits on two
render-blocking resources: a 102 KB stylesheet and a 144 KB HTML document, sharing the throttled connection with the
fonts. Shrinking the stylesheet means restructuring the CSS, which risks the approved visuals. It is not done here.

## Owner, counsel and provider decisions (open)

These are the only items that stop the merge and the launch. Each one needs the owner, counsel, or an account
administrator.

1. **Privacy notices, counsel review and owner facts.** The Arabic notice has 15 bracketed items, the English 12. They
   need: the full legal entity name, the commercial registration number and registry, the registered address, the postal
   address if different, the hosting provider and data location, retention periods (enquiries, WhatsApp conversations,
   server logs, GA4, Meta and Google Ads data), measurement-cookie lifetimes from the provider settings, whether custom
   audiences or remarketing are used, team access controls, whether a data protection officer is appointed, the Bahrain
   complaint authority and its contact details, the per-country response periods, international transfer locations, the
   confirmation that personal data is not sold, the effective date, and the version number. Counsel decides which laws
   apply (Bahrain PDPL, Saudi PDPL, and GDPR where applicable) and the lawful bases. Neither notice is marked as legally
   approved. Both stay `noindex` until then.
2. **Country lookup (`api.country.is`).** Options and a recommendation are in `docs/country-lookup-decision.md`. Launch
   with option A (keep and disclose) only if counsel accepts the disclosure. If counsel requires consent, move to option B
   before launch. Check option C (a host country header) in the hosting account. The request is not changed in this
   branch.
3. **Provider-side settings, not verifiable from the code.** GTM consent overview, GA4 consent and data-retention
   settings, Meta consent handling, and Google Ads conversion settings. The Google Ads conversion ID `768813020` appears
   in network traffic from the GTM container, not from this repository. Confirm in each account.
4. **English indexing and Riyadh.** This branch enables English indexing (37 English URLs in the sitemap, reciprocal
   hreflang). Confirm the approval in writing. Confirm the English Riyadh page's indexing (B6).
5. **English analytics segmentation.** English pages send to the same GA4 property and Meta pixel as Arabic pages. Decide
   whether to keep shared IDs with `/en` segmentation, or use separate properties (B5).
6. **Node version for the deploy.** The project declares Node `22.x`. This verification ran on Node `26.0.0`, because no
   Node 22 is installed here. Build the production artifact with Node 22.
7. **Mobile performance targets.** Not met on first visit (see above). Accept for launch, or fund the CSS restructuring
   and a fresh visual check.
8. **Footer legal line on phones.** It wraps onto a second row, adding 20 px to every page at 360 and 390 px. Accept or
   reject. This is a visible change.
9. **Preview indexing.** The Arabic pages are indexable on Vercel preview builds, as on the baseline. Confirm that
   Deployment Protection keeps previews out of reach of crawlers, or add `noindex` to Arabic previews too.
10. **Written approval of the launch,** before the steps in `docs/english-launch-activation.md`.

## Open technical items (not blocking the review)

- **`/privacy`, axe moderate: "content not contained by landmarks."** The sitewide WhatsApp bridge is mounted directly
  under `<body>` by both root layouts, outside any landmark, so the finding can appear on any page where it is visible.
  Only the `/privacy` run reported it. The fix is a landmark wrapper in the shared layout, which touches every page. It
  is left for a separate change.
- **Arabic and English pages in the seven-width check** differ from the baseline by the footer legal line (decision 8).

## Not touched

`main`, `feat/dewank-unified-preview`, production DNS and hosting, live analytics accounts and IDs (GA4 `G-5SKKT1NBHB`,
GTM `GTM-PG525ZFN`, Meta `2274266710087331`, all unchanged), production environment variables, Deployment Protection,
and the live site. No provider-side configuration was changed.
