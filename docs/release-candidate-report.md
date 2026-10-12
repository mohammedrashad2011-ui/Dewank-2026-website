# Release report: bilingual site (Arabic at `/`, English at `/en`)

Branch `release/bilingual-production-20261012`, draft PR #157 against `main`. The code was last changed in
`f705f8f` (privacy text only). Nothing has been merged, deployed, or changed on the live site, in DNS, or in any
provider account.

## Verdict

| Decision | Verdict | Basis |
|---|---|---|
| Owner review of PR #157 as a draft | **GO** | Build, lint, the functional, consent, form, privacy and indexing checks pass on the final code. |
| Merge into `main` | **NO-GO** | Blockers 1 to 5 below must be closed, and the owner must approve the merge in writing. |
| Production launch of the bilingual site, and English indexing on dewank.com | **NO-GO** | The same blockers. Mobile performance is accepted as the launch baseline (owner decision). |

## Launch blockers (genuine)

1. **Counsel approval of both privacy notices.** Counsel decides the applicable laws (Bahrain PDPL, Saudi PDPL, and GDPR
   where it applies), the lawful basis for each purpose, the response period for each country served, whether a data
   protection officer is required, and whether the operator's name must be given in addition to the brand. After approval,
   remove the draft banner and the `noindex` overrides at the same time. Owner, after counsel.
2. **Owner facts that the notices must state.** Each is bracketed in both notices (11 facts per notice):
   - Retention of WhatsApp conversations and enquiries (mandatory disclosure).
   - Retention of server logs at Hostinger (check in the hosting account).
   - Retention of measurement data (the GA4 data-retention setting, and Meta).
   - Location of the hosting servers and of the team (international transfers).
   - Whether custom audiences or remarketing are used in Google Ads or Meta (check the ad accounts).
   - Confirmation that personal data is not sold (the notices say it is not).
   - Team access controls.
   - The Bahrain complaint contact, from pdp.gov.bh or the Ministry of Justice (the sources conflict).
   - The data protection officer decision (see blocker 1).
3. **Provider-side consent settings, verified in the accounts.** GTM consent overview and tag firing, GA4 consent settings,
   Meta consent handling, and Google Ads conversion settings. None of these is verifiable from the code. The owner checks
   them before launch.
4. **Hostinger configuration, verified in the hosting account.** Node.js **22**; build command `npm run build`; start
   command `npm start` (port 3000); no environment variables for `DEWANK_SITE_ENV`, `DEWANK_ANALYTICS_MODE` or
   `VERCEL_ENV`; the Node.js app on the plan that supports it (Business Web Hosting or a Cloud plan); the branch mapping.
   See `docs/production-deployment-runbook.md`.
5. **Written owner approval to launch,** after blockers 1 to 4.

## Decided in this pass (not blockers)

- **Country lookup:** kept as it is, with accurate disclosure, pending further privacy review (owner decision). The notices
  describe the timing (about 6.5 s on the Arabic homepage; at most about 3 s on Arabic offer pages), and the three outcomes:
  a saved country with an approved price; a country without one (US dollars); and a country that cannot be determined
  (Saudi riyals). The English site makes no lookup request and uses the same saved country. No code changed.
- **Analytics:** one shared GA4 property (`G-5SKKT1NBHB`) and one Meta Pixel (`2274266710087331`), with English separated by
  page path (`/en`). No new property, ID or event. See `docs/analytics-environments.md`.
- **Riyadh indexing:** `/en/riyadh-marketing-agency` stays indexable, as it is now.
- **English enquiries:** WhatsApp hand-off, the same route as the Arabic form. The page never reports the enquiry as sent.
- **Mobile performance:** the measured numbers below are the launch baseline. No further Lighthouse optimisation round.

## Known, not blocking (follow-up)

- **Footer legal line on phones.** It wraps onto a second row, adding about 20 px to most pages at 360 and 390 px. A visible
  change, which the owner should acknowledge.
- **`/privacy`, axe moderate.** "Content not contained by landmarks": the sitewide WhatsApp bridge is mounted under `<body>`
  by both root layouts. The fix is a landmark wrapper in the shared layout. Only the `/privacy` run reports it.
- **Pricing inconsistency for an unrecognised saved country (pre-existing, unchanged).** The homepage shows US dollars.
  Offer pages show Saudi riyals when the lookup fails, and US dollars when it succeeds. Decide whether to align them.
- **Content Security Policy:** not set. A separate change, with an inventory of inline scripts.
- **Legacy assets and route scripts** (`public/en/brand/dewank-logo.png`, unused showcase images, `scripts/qa/*`): owner
  decision on removal.
- **Preview indexing:** Arabic pages are indexable on Vercel preview builds, as on the baseline. Confirm that Deployment
  Protection keeps previews from crawlers before merge.
- **Meta PageView:** not visible from `localhost`. Confirm it in Events Manager after deployment.

## Placeholders in the privacy notices

- **Before this pass:** 21 bracketed groups in each notice. The earlier report said 27 (15 Arabic, 12 English). That count
  came from a line-by-line search and missed brackets that span lines. The correct starting count was 21 per notice.
- **After this pass:** 11 per notice. They are the 11 owner or counsel facts in blocker 2 and blocker 1. The two notices
  ask the same 11 questions.
- **Resolved in wording (10 per notice):** the legal entity, the commercial registration and the registered address
  (DEWANK is an independently operated, unregistered brand, with no commercial registration and no registered office);
  the hosting provider (Hostinger); the English enquiry route; the cookie lifetimes (referred to each provider's policy and
  the browser's cookie details); the country-lookup wording (now accurate); the postal address (none is published); the
  note on future processors; and the effective date (the version takes effect when published).

## Production configuration (as committed)

| Setting | Value | Where |
|---|---|---|
| English launch switch | `ENGLISH_LAUNCH_ENABLED = true` | `app/(en)/en/_en/lib/seo-launch.ts` |
| Analytics mode | production (no override) | `app/lib/analytics-mode.ts` |
| Site mode | production (no override, no `VERCEL_ENV`) | `app/lib/site-environment.ts` |
| Tracking IDs | GTM `GTM-PG525ZFN`, GA4 `G-5SKKT1NBHB`, Meta `2274266710087331`. Unchanged from the baseline | `app/lib/tracking-ids.ts` and the layouts |
| Sitemap | 83 URLs, 37 English. Privacy pages excluded | `app/sitemap.ts` |
| Privacy pages | `noindex, nofollow, nocache` | both privacy pages |
| Headers | HSTS, nosniff, Referrer-Policy, frame, Permissions-Policy; `X-Powered-By` off | `next.config.ts` |
| Node.js | 22.x | `package.json` engines |
| Start | `npm start` (`next start -p 3000`) | `package.json` |

## Verification status

**Final code (`f705f8f`):** the two privacy pages changed. Everything else is unchanged since the matrix below.

| Check | Node | Result |
|---|---|---|
| `npm ci` from the lockfile | 22.23.3 (the project's `22.x`) | Pass |
| `npm run build` | 22.23.3 | Pass. 89 static, 3 dynamic routes |
| ESLint on the two privacy pages | 22.23.3 | 0 errors |
| Privacy pages (both languages, 20 checks) | 22.23.3 | 20 of 20 pass: `noindex`, `lang`/`dir`, heading outline, cookie table caption, footer links, cookie-settings control, no overflow at 390 px |
| axe on `/en/privacy` | 22.23.3 | 0 violations |
| axe on `/privacy` | 22.23.3 | One moderate (the shared WhatsApp bridge; see above) |
| Indexing configuration | 22.23.3 | English pages `index, follow` with reciprocal hreflang; Riyadh indexable; privacy `noindex`; 83 sitemap URLs, 37 English |
| `npm start` on port 3000 | 22.23.3 | Every launch route returns 200; `X-Powered-By` absent; sitemap 83 URLs |
| Visual check, `/en/privacy` at 390 px | 22.23.3 | Text reflows with no overflow |

**Matrix on `d04decc`** (code identical to `f705f8f` apart from the privacy text). Not rerun, per the brief:

| Check | Result |
|---|---|
| Route audit (97 link targets) and route parity (94 routes) | Pass; no non-200 or redirect internal target |
| Functional checks | Language switch, menu focus and Escape, and empty-form validation pass |
| Consent (Arabic and English) | First visit: 0 vendor requests. Reject: 0. Accept: vendors load. Analytics only: GTM and GA4, not Meta. Withdrawal: 0 vendor requests after reload, no measurement cookies |
| Keyboard and focus (consent) | 21 of 21 in each language |
| English contact form | 18 of 18 |
| dataLayer and network | No vendor request before consent. `api.country.is` only on the Arabic offers hub, as documented |
| GA4 page view | One `page_view` per load to `G-5SKKT1NBHB` after Accept all |
| Meta PageView | 0 beacons from `localhost` (not visible there). Confirm in production |
| Pricing (32 cases) | Prices, call counts and stored country identical to the baseline in 32 of 32. Normalised text hashes identical in 32 of 32 |
| Popups (16 checks) | Identical to the earlier run |
| Preview configuration (`VERCEL_ENV=preview`) | English `noindex`; English sitemap 0; no English hreflang; no vendor request in any consent scenario |
| Seven widths, 84 captures | 77 pixel-identical to the earlier candidate. The 7 others are the English contact page, whose height changed with the form |
| Lighthouse, mobile first visit (median of 3) | Arabic home 73, English home 85, Arabic services 82, English services 86, Arabic paid 81, English paid 84, English Riyadh 84. Accessibility 100 on every page |
| Lighthouse, desktop (simulated) | Performance 96 to 98 on every page. TBT 0. LCP 1.08 to 1.21 s |

**Mobile performance, stated plainly.** First-visit mobile LCP is above 2.5 s on every page (best 2.80 s, English Riyadh),
and mobile performance is below 85 on five of seven pages. The causes are a 102 KB render-blocking stylesheet and a 144 KB
HTML document. An interleaved A/B on the same machine state showed the pre-round commit and the final commit within noise
on the homepages. The owner accepts these numbers as the launch baseline.

## Not touched

`main`, `feat/dewank-unified-preview`, production DNS and hosting, the live site, the live analytics accounts and IDs,
production environment variables, Deployment Protection. No provider-side configuration was changed.
