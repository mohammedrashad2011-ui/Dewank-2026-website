# Release report: bilingual site (Arabic at `/`, English at `/en`)

Branch `release/bilingual-production-20261012`. Draft PR #157 against `main`. Code last changed in `0d79958` (privacy
notices). Nothing has been merged, deployed, or changed on the live site, in DNS, or in any provider account.

## Final decision

| Area | Status | Evidence and what is missing |
|---|---|---|
| 1. Hostinger | **BLOCKED** | The hosting account cannot be reached from this session (hPanel sends to sign-in). Not confirmed: the deployed commit, the deployment mechanism (Git integration or upload), the plan, the Node.js app settings (Node 22, root, start command, port), the environment variables, and how the CDN cache is purged. Verified from outside: HTTPS, redirects, security headers, and the TLS certificate (expires 29 November 2026). Verified locally: Node 22 build and `npm start` on port 3000. |
| 2. GTM, GA4, Meta, Google Ads | **PARTIALLY VERIFIED** | GA4 (verified in the owner's account): property `a139422952p536531439`, stream `https://dewank.com`, Measurement ID `G-5SKKT1NBHB`, Enhanced measurement on. Meta (verified in the owner's account): Pixel `2274266710087331`, `PageView` is the only active event, no lead events. GTM container `GTM-PG525ZFN` is not in the owner's GTM accounts visible here: **BLOCKED**. Google Ads conversion `768813020` is behind an account sign-in: **BLOCKED**. Consent behaviour on the site is verified (section 3). |
| 3. Privacy | **MISSING ESSENTIAL DISCLOSURE** (two items) | The notices are short, accurate and ready for owner review. Two retention periods are not known and are marked in the text: how long enquiries and WhatsApp conversations are kept, and the hosting provider's server-log period. See section 4. |
| 4. Final release | **NO-GO** | The three points above are open: Hostinger configuration, two GTM and Google Ads checks, and the retention periods. The release also fixes a live problem: production measures visitors before any choice (section 3). |

## 1. Hostinger: what was verified and what remains

**Verified from outside (12 October 2026):**

- The site is served by Hostinger: `platform: hostinger`, `panel: hpanel`, `Server: hcdn`, and `X-Powered-By: Next.js`.
- `http://dewank.com` and `https://www.dewank.com` redirect with 301 to `https://dewank.com/`.
- The certificate is Let's Encrypt for `dewank.com`, expiring **29 November 2026**.
- The live homepage renders the same text as `main` at `b4edc70`. Its JavaScript chunk names match no commit I built (`b4edc70`, `e80752e`, `b32733c`, `99a866a`, `397d124`, `67c2c12`, `9b168b9`), so the exact deployed commit is not confirmed.
- The live HTML is cached at the CDN with `Cache-Control: s-maxage=31536000`. The homepage was served from cache at an age of about 4.5 days. **A deployment is not visible to visitors until the cache is purged or expires.**

**Verified locally, on Node 22.23.3:** `npm ci` from the lockfile, `npm run build`, and `npm start` (`next start -p 3000`). All launch routes return 200. `X-Powered-By` is absent. The sitemap has 83 URLs.

**Not verified (owner, in hPanel):** the plan (Business Web Hosting or Cloud is required); the deployed commit and its history; the deployment mechanism; the Node.js version (select 22); the application root; the build and start commands; that `DEWANK_SITE_ENV`, `DEWANK_ANALYTICS_MODE` and `VERCEL_ENV` are unset; the CDN purge method; the TLS renewal; and a backup before the merge.

**Rollback, verified in Git:** a merge of this branch into `b4edc70` followed by `git revert -m 1` gives a tree identical to `b4edc70`. Hostinger has no per-commit rollback, so a revert is pushed to `main` and Hostinger rebuilds it. Details and commands are in `docs/production-deployment-runbook.md`.

## 2. Analytics and consent: what was verified and what remains

**Live production today (verified by observation, 12 October 2026):** a first visit with no choice sends requests to
`googletagmanager.com`, `analytics.google.com` (GA4), `googleads.g.doubleclick.net` and `google.com` conversion
endpoints for `768813020`, and `connect.facebook.net` (Meta). No consent banner is shown. The live HTML also includes a
Meta `PageView` beacon in a `noscript` element, which fires without JavaScript.

**Release build (verified locally on the production build, earlier matrix on `d04decc`, code unchanged for consent):**

| Case | Result |
|---|---|
| First visit, no choice | 0 vendor requests. Banner shown. Consent Mode v2 defaults: analytics and ad storage denied; functionality and security granted |
| Reject all | 0 vendor requests |
| Accept all | GTM, GA4, Google Ads and Meta load; the choice survives a reload |
| Analytics only | GTM and GA4 load; Meta does not |
| Advertising consent | Meta loads (`fbevents.js`, signals config) |
| Withdrawal | 0 vendor requests after reload; measurement cookies removed |
| Arabic to English | Choice kept; no banner on the English page |
| Returning visitor | No banner |
| Preview build (`VERCEL_ENV=preview`) | No vendor request in any scenario, including Accept all |

**Duplicates:** one GA4 `page_view` per load. The noscript Meta and GTM fallbacks are removed. Each conversion-type event is pushed once per user action (one `contact_whatsapp_submit` per form submit, one `sitewide_whatsapp_click` per click). Meta receives `PageView` only.

**Not verified:**

- GTM `GTM-PG525ZFN`: the container, its triggers, the Consent Overview and tag firing. Not reachable from this session.
- GA4: data retention, consent settings, DebugView, and whether the event names above are marked as key events.
- Google Ads: conversion `768813020`, its definitions, and whether any conversion is counted twice.
- Meta: Test events and Pixel Helper output on the live site.
- Whether the GTM container forwards the site's events to Google Analytics or Google Ads, and whether a remarketing audience is built from them.

## 3. Privacy notices

Both notices are short and written from the code: what is submitted and how it reaches WhatsApp, the Google and Meta
measurement (only after consent), the cookie table, consent and withdrawal, the country lookup (timing and the three price
outcomes), recipients, transfers, rights, the complaint route (SDAIA in Saudi Arabia), children, and the last-updated date
(12 October 2026). The draft banner and the "for review" notes are removed. Nothing claims legal approval.

- **Public access** is on: both pages are linked from the footer and the consent banner.
- **Search indexing** is a separate setting. Both pages stay `noindex` until the owner decides.
- **Counsel** has not reviewed the text. That remains an owner decision before the notices are relied on.

## 4. Essential disclosures still missing

The notices state two retention periods that the owner must provide. Both are marked in the text:

1. **Enquiries and WhatsApp conversations:** how long they are kept after the last message.
2. **Server logs:** the period set by the hosting provider. Check in the Hostinger account or its privacy policy.

Measurement retention is stated by reference to the GA4 and Meta retention settings. Those settings must be checked in the
accounts, but the notice does not need a number.

## 5. Remaining actions, owner and sequence

| # | Action | Who |
|---|---|---|
| 1 | Give the enquiry and WhatsApp retention period (section 4, item 1). | Owner |
| 2 | Give the hosting server-log retention period (section 4, item 2). | Owner |
| 3 | Confirm the deployed commit and the deployment mechanism in hPanel. Record the commit in the runbook. | Owner |
| 4 | Confirm the Hostinger Node.js app: plan, Node 22, root, `npm run build`, `npm start`, port 3000, no `DEWANK_*` or `VERCEL_ENV` variables. | Owner |
| 5 | Confirm the CDN cache purge method and the TLS renewal before the 29 November 2026 expiry. | Owner |
| 6 | Check the GTM container `GTM-PG525ZFN`: the Consent Overview, that tags fire only after consent, that the Google Ads conversion for `768813020` counts once, and whether any remarketing audience is used. | Owner, in GTM and Google Ads |
| 7 | Check the GA4 data-retention setting and the consent settings for `G-5SKKT1NBHB`. | Owner, in GA4 |
| 8 | Check Meta Test events for `PageView` after a consent. Confirm the domain list (it includes `localhost`). | Owner, in Events Manager |
| 9 | Counsel review of the notices, if the owner requires it before launch. | Owner, with counsel |
| 10 | Written approval to merge PR #157 and to deploy. | Owner |

**Merge and deployment sequence** (only after items 1 to 5 and 10):

1. Record the live commit and create a rollback tag: `git tag -a prod-before-launch-<sha> <sha>`.
2. Merge PR #157 into `main` with a merge commit: `git merge --no-ff release/bilingual-production-20261012`, then push.
3. Hostinger rebuilds (Git integration) or the owner uploads a build made with `npm ci && npm run build` on Node 22.
4. Check the deployment log and the runtime log (port 3000).
5. Purge the CDN cache. Run the post-deploy checks in the runbook (routes, indexing, sitemap, `X-Powered-By`).
6. Owner: fresh-profile first visit (no vendor request before consent), Accept all (GA4 `page_view` once), Meta `PageView` after consent.

**Rollback:** `git revert -m 1 <merge-commit>` on `main`, then push. Hostinger rebuilds the pre-launch state. The English launch alone can be turned off with `ENGLISH_LAUNCH_ENABLED = false`.

## 6. Checks already passed on this branch (not repeated)

| Check | Result |
|---|---|
| Node 22.23.3 production build (`npm ci`, `npm run build`) | Pass (89 static and 3 dynamic routes) |
| TypeScript and ESLint on the changed files | Pass, 0 errors |
| Arabic and English routes, route parity, internal links | Pass: 97 link targets, none non-200 or redirect |
| English contact form to WhatsApp | 18 of 18 (earlier matrix); the form sends nothing to a server |
| SEO, canonical, hreflang, sitemap | Pass: English indexable with reciprocal hreflang; 83 URLs (37 English); privacy `noindex`; Riyadh indexable |
| Existing prices and offers | 32 of 32 identical to the baseline (prices, call counts, stored country) |
| Consent scenarios | As in section 2 |
| Core mobile interactions | Language switch, menu focus and Escape, empty-form validation (earlier matrix) |
| Analytics isolation, preview and production | No vendor request on preview; production only after consent |
| Privacy pages, both languages | 20 of 20 checks on the rewritten notices (Node 22) |
| axe-core on the notices | `/en/privacy`: 0 violations. `/privacy`: one moderate (the shared WhatsApp bridge outside any landmark) |

**Performance:** the owner accepts the current mobile baseline. First-visit mobile LCP is above 2.5 s on every page
(best 2.80 s), and mobile performance is below 85 on five of seven pages. No further Lighthouse work is planned.

## 7. Known, not blocking

- Footer legal line wraps on phones (about +20 px per page at 360 and 390 px).
- `/privacy`: one axe moderate from the shared WhatsApp bridge.
- Pricing inconsistency for an unrecognised saved country (pre-existing): the homepage shows US dollars; offer pages show riyals when the lookup fails.
- Content Security Policy is not set.
- Arabic pages are indexable on preview builds, as on the baseline. Confirm that Deployment Protection keeps previews from crawlers.

## 8. Not touched

`main` (still at `b4edc70`), production DNS and hosting, the live site, the GTM, GA4, Meta and Google Ads settings, the
production environment variables, and Deployment Protection. Tracking IDs are unchanged: GTM `GTM-PG525ZFN`, GA4
`G-5SKKT1NBHB`, Meta `2274266710087331`, Google Ads conversion `768813020`.
