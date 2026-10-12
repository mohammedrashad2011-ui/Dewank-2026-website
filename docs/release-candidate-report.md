# Release candidate report: bilingual site (Arabic at `/`, English at `/en`)

**Verdict: BLOCKED pending an owner decision.** One technical regression stops merge review: on a first visit, the
Arabic homepage's mobile LCP is worse than the baseline (about 4.0 s to 6.3 s in lab runs), because the consent dialog
becomes the largest element. Every other gate passes. The English launch remains blocked by items B1 to B6 in
`docs/launch-readiness.md`. Nothing has been merged, deployed to production, or launched.

## Branch and commits

- Branch: `feat/dewank-bilingual-release-candidate`
- Base and visual baseline: `feat/dewank-unified-preview` at `54114a2`
- Rollback branch (unchanged): `rollback/unified-preview-pre-bilingual-20261012` at `8b2d9ca`
- Commits on the branch, oldest first:

| Commit | Change |
|---|---|
| `3f18ed6` | Gate English indexing on launch approval and preview builds |
| `d2baaef` | Load measurement tags only after a visitor allows them |
| `8414775` | Draft privacy notices in Arabic and English, kept out of search |
| `821a50c` | Sized logo and orbit images; brand files cached for 30 days |
| `87c4c16` | WCAG AA text contrast on English labels and paid-ads copy; 24 px WhatsApp target |
| `7a8f361` | Retire the unused `/api/og` route; cap contact request bodies at 16 KB |
| `5a67058` | Launch procedure, privacy review and readiness documents |
| `e71af33` | Correct English label contrast: restore the light-section blue |

The verified code is `e71af33`. The commit that adds this report comes after it and changes no code. The Vercel
preview check for the final pushed SHA is reported under "Vercel" below.

**Not touched:** `main`, PR #154, PR #155, `feat/dewank-unified-preview`, production DNS and hosting, analytics
accounts and IDs, production environment variables, Deployment Protection.

**Not activated:** English indexing (`ENGLISH_LAUNCH_ENABLED = false`), the English sitemap entries, and the reciprocal
hreflang. The launch configuration was built and checked in an isolated worktree, and it was not deployed.

## Blockers

### Technical (stops merge review)

**T1. Arabic homepage mobile LCP regresses on a first visit.** Measured on the same lab setup (mobile, devtools
throttling, 3 runs, median):

- Baseline (`54114a2`): LCP 4,031 ms. The LCP element is the hero paragraph (area 31,160 px²), painted at about 4.0 s.
- Candidate: LCP 6,254 ms. The LCP element is the consent dialog's paragraph (area 31,856 px²). It is about 2% larger
  than the hero paragraph and paints late, with 6.2 s of element render delay.
- With consent accepted (vendors loaded): LCP 1,303 ms median, performance 80.

The cause is the consent dialog, which appears on every first visit. Options, all of which need an owner decision:

1. Make the dialog more compact on phones, so its text block is smaller than the hero paragraph. The copy and the
   choices stay the same.
2. Keep the dialog as a bottom sheet with a shorter body, and move the full explanation behind "Manage choices"
   (the privacy notice still carries the full text).
3. Accept the regression and record it, with the consent-accepted figures as the returning-visitor experience.

The change is a design decision, so it has not been made here. The candidate is not safe to merge until one of these is
chosen.

### Launch blockers (English only; they do not stop review of this branch)

- **B1.** The English contact form is closed (`formEnabled = false`). Its endpoint `POST /en/api/contact` returns 405, and
  no route returns the `delivered: true` the form expects. Choose a delivery route before the form opens.
- **B2.** The privacy notices are drafts, pending counsel review and the owner's facts (`docs/privacy-cookies-review.md`).
- **B3.** Provider-side consent settings (GTM, GA4, Meta) are not verified from this codebase.
- **B4.** The Arabic offer pages call `api.country.is` before any consent choice. Decide whether to keep it, gate it, or
  replace it.
- **B5.** English analytics: shared IDs with `/en` segmentation, or separate properties.
- **B6.** `/en/riyadh-marketing-agency` is indexable on production today. Confirm this is intended.

## What was verified

All checks ran on the production build of `e71af33` (`npm ci` from the lockfile, then `npm run build`, 93 routes
prerendered). Each result below was measured, not inferred.

| Gate | Result |
|---|---|
| Install and build | `npm ci` and `npm run build` pass. The only warnings are Node deprecation notices from the toolchain. |
| TypeScript | `tsc --noEmit` passes. |
| ESLint (project ignore patterns) | 0 errors, 39 warnings (existing `<img>` and hook notes). |
| Route audit | 97 internal link targets, none returning a non-200 or redirect status. |
| Route parity | 94 routes compared. |
| Functional checks | Language switch, menu open/close and Escape, focus return, and the Arabic form's empty-submit validation all pass. |
| Third-party hosts (no choice) | Five routes sampled. None on the English pages sampled. On `/offers` (Arabic), `api.country.is` only. |
| Vendor requests (no choice) | Two routes sampled (`/services`, `/en/privacy`): 0 requests each. |
| Consent scenarios | First visit: 0 vendor requests and the dialog is shown. Reject all: 0. Accept all: vendors load, and the choice survives a reload. Analytics only: GTM loads, Meta does not. Withdrawal: the page reloads and measurement cookies are removed. Language switch after accept: choice kept. |
| GA4 page views | One `page_view` per load on `/` and on `/en`, using the existing GA4 ID. |
| Meta PageView | The Meta scripts load on both the baseline and the candidate. No `facebook.com/tr` beacon was seen from `localhost` on either build, so this is not a regression. Confirm in Events Manager on production. |
| Preview build (vendors) | After Accept all: 0 GA4 and 0 Meta requests. |
| Popups | Popup behaviour is identical to the baseline in all 16 checks. |
| Pricing | Prices and call counts identical to the baseline in all 32 scenarios. The page text hash differs in each scenario; the cause was not isolated. |
| Contact API | Body over 16 KB: 413, with and without `Content-Length`. Malformed JSON: 400. Valid body: 202 with `persisted: false`. |
| `/api/og` | Removed. No page references it. On the baseline build it returned an empty reply for the two titles tested. |

### Indexing, by build (same commit `e71af33`, three builds)

| Build | Launch flag | Environment | English robots | English sitemap entries | English hreflang | Vendors allowed |
|---|---|---|---|---|---|---|
| Candidate (production) | off | production | `noindex` (Riyadh indexable) | 0 (Riyadh only) | none | yes, after consent |
| Launch configuration | on | production | indexable (privacy drafts `noindex`) | 37 | reciprocal, 36 pairs | yes, after consent |
| Preview configuration | on | `VERCEL_ENV=preview` | `noindex` on all English pages | 0 | none | no |

The launch configuration returns reciprocal `en`/`ar` alternates with `x-default` on `/` and `/en`, and matching pairs on
the other sampled pages (`/services`, `/contact`, `/paid-ads`). The preview configuration keeps the flag on and still
produces no indexable English page, no English hreflang, and no vendor. The draft privacy notices stay `noindex` in every
build.

## Performance

Lab, Lighthouse, median of 3 runs. Baseline is `54114a2`; candidate is `e71af33` before the final contrast-only commit.
The contrast commit changes colours only, and it was not re-measured in the full matrix.

| Page (mobile, devtools throttling) | Performance | LCP (ms) | TBT (ms) | Transfer (KB) | JS (KB) |
|---|---|---|---|---|---|
| Arabic home | 54 → **68** | 4,031 → **6,254** (regression, T1) | 1,134 → 133 | 2,017 → 1,237 | 1,350 → 512 |
| English home | 70 → **87** | 3,459 → 2,907 | 531 → 131 | 4,018 → 1,083 | 1,330 → 492 |
| Arabic services | 58 → **83** | 3,881 → 3,233 | 967 → 127 | 2,016 → 1,223 | 1,351 → 513 |
| Arabic paid ads | 56 → **84** | 4,071 → 3,234 | 936 → 124 | 2,041 → 1,248 | 1,366 → 527 |
| English paid ads | 70 → **87** | 3,434 → 2,946 | 539 → 138 | 4,019 → 1,072 | 1,330 → 492 |
| English Riyadh | 60 → **86** | 3,960 → 2,796 | 670 → 203 | 4,106 → 1,157 | 1,345 → 506 |
| English services | 69 → **88** | 3,524 → 2,861 | 542 → 121 | 3,976 → 1,028 | 1,328 → 490 |

Desktop (simulated) improved on every page: performance 82–97 → 96–98, and LCP 1.2–2.9 s → 1.1–1.2 s. Its TBT fell to 0.

Consent accepted, mobile, 3 runs (vendors load, so this is the returning-visitor or post-choice experience):

- Arabic home: performance 80, LCP 1,303 ms, TBT 886 ms.
- English home: performance 87, LCP 1,106 ms, TBT 485 ms.

Against the targets (lab, first visit):

- **Performance 85 or more, mobile:** met on the four English pages (86–88). Not met on the Arabic home (68), Arabic
  services (83) and Arabic paid ads (84).
- **LCP under 2.5 s:** not met on any page on a first visit (best 2,796 ms). Met with consent on both homepages.
- **CLS under 0.1:** met on every page (highest 0.071 on English Riyadh).
- **TBT under 200 ms:** met on six of seven pages. English Riyadh is 203 ms.
- **No desktop regression:** no desktop page regressed in performance or LCP.

The largest English image fell from 2.16 MB to 61 KB. On English pages the logo is now a CSS `image-set()` WebP. The
Arabic page's largest image is 61 KB.

Remaining limitations: LCP on a first visit is limited by the main-thread work of the homepage and by the consent dialog
(T1). Third-party tags add TBT once a visitor consents (about 880 ms median TBT on the Arabic home with consent). There is
no Content Security Policy yet.

## Accessibility

Lighthouse accessibility, two runs per page, English pages after the final contrast commit:

- English home, desktop: 100.
- English services, desktop and mobile: 100.
- English Riyadh, desktop and mobile: 100.
- English home, mobile: 96. One item remains: the method-section label. Lighthouse reads this label against a dark
  background on a first-load mobile capture, in both runs. The live page (after scrolling) reads it on a light background,
  where `#2a4bd9` measures 5.56:1. No single blue passes on both backgrounds, so this is an open item, not a fix. The
  state-dependent capture needs an investigation of the homepage's content-visibility handling.
- Arabic home, services, paid ads: 100 on desktop and mobile (paid ads was 92–96 on the baseline).

Contrast corrections in this branch: the English section labels are back to `#2a4bd9` on light sections (dark sections keep
`#9fb4ff`). The navy services label is `#9fb4ff` (8.7:1). The Riyadh footer line is `#8a877f` (5.4:1). The paid-ads copy is
`#963f17`, measured at 4.6 to 6.5:1 on the paper and card backgrounds. The WhatsApp minimise control is 24 px.

The visual captures at 1440, 1280, 1100, 1024, 834, 390 and 360 px were taken on earlier builds of this branch, before the
final contrast commits. The consent dialog's keyboard behaviour was not separately tested in this pass.

## Vercel

- `5a67058` (push 1): Vercel reports `success` ("Deployment has completed"). Dashboard:
  https://vercel.com/dewank-marketing/dewank-2026-website/4e8YjDnNQXFyZNweeVPLqh2ob9Af
- The protected preview address could not be reached from this environment, so the preview was not browsed directly.
  The checks above ran on the same commit locally.

## Known and recorded

- `/_global-error` returns 500 when requested directly. This is Next's internal route, and it does the same on the
  baseline. It is not linked from any page.
- The root `POST /api/contact` accepts a valid body, returns 202, and stores nothing. No code calls it now. It can be
  removed with B1.
- The Arabic offers page calls `api.country.is` before any consent choice (B4).
- Pricing text hashes differ from the baseline; the prices do not. Not isolated.
- Node deprecation warnings (`module.register`) come from the toolchain.

## Rollback

Ordered from least to most change:

1. Do not merge. The branch can stay as it is.
2. English launch: revert to `ENGLISH_LAUNCH_ENABLED = false` in a new commit and redeploy (see
   `docs/english-launch-activation.md`).
3. Full rollback: deploy `feat/dewank-unified-preview` at `54114a2`, or the rollback branch at `8b2d9ca`. Production DNS,
   hosting and analytics were never changed, so no infrastructure work is needed.

## Owner actions

1. Decide T1 (banner option 1, 2 or 3), or accept the regression in writing.
2. Choose the English enquiry route (B1) and approve the copy that goes with it.
3. Counsel review and the owner's facts for both privacy notices (B2).
4. Check the provider-side consent settings in GTM, GA4 and Meta (B3).
5. Decide on the Arabic country lookup (B4), English analytics (B5) and the Riyadh page's indexing (B6).
6. Decide what to do with `public/en/brand/dewank-logo.png` (about 2.2 MB, unreferenced), unused showcase PNGs, and
   `scripts/route-group-migration.mjs` and `scripts/qa/*`.
7. Only after all of the above: approve the English launch in writing, then follow the activation procedure.
