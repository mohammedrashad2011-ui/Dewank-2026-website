# Release candidate report: bilingual site (Arabic at `/`, English at `/en`)

**Verdict.** The release candidate is ready for owner review as a preview merge. It is **not** ready for production
launch.

- **Preview merge blockers:** none. The first-visit consent regression is fixed, and no measured page regresses against
  the baseline (`54114a2`).
- **Production launch blockers:** the English launch items B1 to B6 (see "Production launch blockers" below), and
  first-visit mobile LCP is above 2.5 s on every page.

Nothing has been merged, deployed to production, or launched. English indexing is off.

## Branch and commits

Branch `feat/dewank-bilingual-release-candidate`, based on `feat/dewank-unified-preview` at `54114a2`. Rollback branch
`rollback/unified-preview-pre-bilingual-20261012` at `8b2d9ca` is unchanged.

| Commit | Change |
|---|---|
| `3f18ed6` | Gate English indexing on launch approval and preview builds |
| `d2baaef` | Load measurement tags only after a visitor allows them |
| `8414775` | Draft privacy notices in Arabic and English, kept out of search |
| `821a50c` | Sized logo and orbit images; brand files cached for 30 days |
| `87c4c16` | WCAG AA text contrast on English labels and paid-ads copy; 24 px WhatsApp target |
| `7a8f361` | Retire the unused `/api/og` route; cap contact request bodies at 16 KB |
| `5a67058` | Launch procedure, privacy review and readiness documents |
| `e71af33` | Restore the light-section English label blue |
| `070f8ef` | Release candidate report (first version) |
| `6005cfb` | **Consent: render the bootstrap inline and show a compact banner** |
| `ccb8b62` | **Arabic logo: 240 px WebP; Cookie settings at 24 px without layout change** |
| `2e317c4` | **English homepage: render the work section so the method label is not overlapped** |
| (this commit) | Release candidate report and privacy review update |

**Not touched:** `main`, PR #154, PR #155, `feat/dewank-unified-preview`, production DNS and hosting, analytics accounts
and IDs, production environment variables, Deployment Protection. The GTM, GA4 and Meta configurations are unchanged.

## What the three blockers turned out to be

**1. First-visit consent delay (the Arabic home regression).** The consent bootstrap was a `beforeInteractive` script.
Next queues those behind its client runtime, so the banner was inserted about 1.6 s after DOMContentLoaded. Measured
under throttling (4x CPU, 150 ms RTT, 1.6 Mbps), the script was added at 5,157 ms, against DOMContentLoaded at 3,500 ms.
The banner was also the largest element, so it became the LCP candidate.

- Fix: the bootstrap is an inline script at the start of `<body>`. The banner is inserted at DOMContentLoaded (about
  3.5 s in the same probe), and the consent default is set while the document parses.
- The banner is now short, so the hero paragraph stays the LCP element. In the final runs, the LCP element is the hero
  paragraph in every run.
- The preferences dialog carries the full descriptions, the withdrawal instructions and the privacy notice link.
  Accept and Reject are identical in size and style.

**2. The method-label contrast (English homepage, mobile).** The English homepage's work section was skipped with
`content-visibility: auto` and an 820 px placeholder. Its testimonials box (948 px, `overflow: hidden`) overhangs the work
section (872 px). On first load, the placeholder moved the method section up over that overhang, so the method label
was painted on the dark testimonials background.

- Evidence: axe-core (the engine Lighthouse uses) reported `#2a4bd9` on `#111214`, 2.77:1, in the unscrolled state. When
  the work section was rendered normally, the method section moved to y=6,171, below the overhang, and the violation
  went away.
- Fix: the work section is no longer skipped. The rendered layout is unchanged, and the label passes on the light
  background at 5.56:1 in both states.

**3. Pricing text differences.** The 32 cases matched on prices, currencies, call counts and the stored country. The
text hashes differed because `document.body.innerText` now includes two intentional additions: the footer legal line
(Privacy notice and Cookie settings) on every page, and the consent banner on a first visit. With those two removed, the
normalized hashes match in all 32 cases. No code change was needed, and the offer and country-lookup code is untouched.

Two further fixes came out of the investigation:

- The Arabic wordmark was a 720 x 313 PNG of 102 KB, rendered at 22 px tall. It is now a 240 px WebP of 7 KB. Compared
  on the real header and footer backgrounds, the two differ by a mean of 1.4 to 5.6 out of 255, with edge
  anti-aliasing only.
- The Cookie settings control in both footers was 10 px tall. It now has a 24 px hit area, with a matching negative margin
  so the footer keeps its original height.

## Verification

Measured on the committed code (`2e317c4`). `npm ci` from the lockfile, then `npm run build`, which prerendered 93 routes.

| Check | Result |
|---|---|
| Clean install and production build | Pass |
| TypeScript (`tsc --noEmit`) | Pass |
| ESLint, full tree, project ignore patterns | 0 errors, 39 warnings (existing `<img>` and hook notes) |
| Route audit | 97 internal link targets, none returning a non-200 or redirect status. `/api/contact` answers GET with 405, as a POST-only route should. |
| Route parity | 94 routes compared |
| Consent scenarios (Arabic and English) | First visit: 0 vendor requests and the banner shown. Reject all: 0. Accept all: vendors load, and the choice survives a reload. Analytics only: GTM and GA4 load, Meta does not. Withdrawal: 0 vendor requests after the reload and no measurement cookies. Language switch: choice kept. |
| Keyboard and focus (21 checks, Arabic and English) | All pass. Banner reachable by Tab; Accept and Reject the same size; Manage opens a labelled modal; focus moves to its heading; Tab and Shift+Tab stay inside it; Escape closes it and returns focus to the trigger; a choice moves focus to main content; returning visitors get no banner, and the footer control reopens preferences with the stored state. |
| GA4 page views | One `page_view` per load on `/` and `/en`, using the existing GA4 ID |
| Meta PageView | Meta scripts load after consent. No `facebook.com/tr` beacon is seen from `localhost`, on the baseline or the candidate. Confirm in Events Manager on production. |
| Popups | No difference from the baseline in 16 checks |
| Pricing | Prices, currencies, call counts and stored country identical in 32 of 32 cases. Normalized page-text hashes identical in 32 of 32 (raw hashes differ only by the footer legal line and banner text). |
| Contact API | Body over 16 KB: 413. Malformed JSON: 400. Valid body: 202, `persisted: false`. |
| Functional checks | Language switch, menu open and Escape, focus return, empty-form validation |
| Third-party requests with no choice | None on the English pages sampled. `api.country.is` on `/offers`, as before. |

### Preview configuration (built with `VERCEL_ENV=preview`, from `2e317c4`)

- After Accept all: 0 GTM, GA4 or Meta requests. 0 GA4 page views. 0 Meta PageView requests.
- English pages: `noindex`, no English hreflang. The English sitemap has no entries, and the Riyadh page is `noindex`.
- Vendor loading is blocked whatever the stored choice.

### Indexing gate, by build

| Build | English robots | English sitemap entries | English hreflang | Vendors |
|---|---|---|---|---|
| Candidate (production, flag off) | `noindex`; Riyadh indexable | 0 (Riyadh only) | none | after consent |
| Launch configuration (flag on, production), verified on `e71af33` in an isolated worktree; the indexing code is unchanged since | indexable; privacy drafts `noindex` | 37 | reciprocal, 36 pairs | after consent |
| Preview (`VERCEL_ENV=preview`) | `noindex` on all English pages | 0 | none | never |

The Arabic pages are indexable on the preview build as well. That is unchanged from the baseline and outside the
English-indexing brief. See the owner decisions.

### Visual captures, all seven widths

Pixel comparison of 84 full-page captures (12 pages at 1440, 1280, 1100, 1024, 834, 390 and 360 px), baseline against the
candidate, with consent set to rejected so the banner is not in the capture.

- **Desktop:** the differences are where the approved changes are. Logo bands in the header and footer; the footer legal
  line at the bottom of each page; and the paid-advertising copy, which has the contrast correction. The mid-page layout
  of the English homepage is pixel-identical. Heights match the baseline on desktop, and the largest difference on any
  page is 0.25% of pixels.
- **Phones (360 and 390 px):** every page is 20 px taller. The footer legal line wraps onto a second row. This is a
  visible change that the owner should accept or reject.

### Lab performance (Lighthouse, mobile devtools throttling unless stated, median of 3 runs)

First visit means no stored choice, which is what Lighthouse's fresh profile produces.

| Page | Perf (base → final) | LCP ms (base → final) | TBT ms (base → final) | CLS (base → final) | Transfer KB (base → final) | A11y (base → final) |
|---|---|---|---|---|---|---|
| Arabic home | 54 → **82** | 4,031 → **3,354** | 1,134 → 200 | 0 → 0 | 2,017 → 1,148 | 100 → 100 |
| English home | 70 → **87** | 3,459 → **2,971** | 531 → 153 | 0 → 0 | 4,018 → 1,091 | 96 → **100** |
| Arabic services | 58 → **85** | 3,881 → 3,236 | 967 → 148 | 0 → 0 | 2,016 → 1,134 | 100 → 100 |
| English services | 69 → **88** | 3,524 → 2,896 | 542 → 159 | 0 → 0 | 3,976 → 1,035 | 96 → **100** |
| Arabic paid ads | 56 → **84** | 4,071 → 3,288 | 936 → 146 | 0 → 0 | 2,041 → 1,159 | 92 → **100** |
| English paid ads | 70 → **87** | 3,434 → 2,988 | 539 → 162 | 0 → 0 | 4,019 → 1,079 | 96 → **100** |
| English Riyadh | 60 → **86** | 3,960 → 2,725 | 670 → 229 | 0.071 → 0.071 | 4,106 → 1,068 | 96 → **100** |

Desktop (simulated) first visit: every page improves. Performance rises from 82–97 to 96–98, LCP falls to 1.08–1.21 s,
TBT falls to 0, and accessibility is 96 to 100. Riyadh's CLS is 0.088 on desktop, unchanged from the baseline.

**First-visit LCP and consent-accepted LCP, reported separately (AR and EN homes, mobile):**

| State | Arabic home: perf / LCP | English home: perf / LCP | LCP element |
|---|---|---|---|
| First visit, no choice (baseline 54 / 4,031 ms and 70 / 3,459 ms) | 82 / **3,354 ms** | 87 / **2,971 ms** | Hero paragraph |
| Returning, rejected | 100 / 1,264 ms | 100 / 1,174 ms | Hero paragraph |
| Returning, accepted (vendors load) | 85 / 1,304 ms (TBT 594 ms) | 93 / 1,158 ms (TBT 311 ms) | Hero paragraph |

With no stored choice, no vendor is requested. In the accepted state the vendor tags load, which is the cost of
measurement and not a fault in the page.

Targets against the final numbers:

- **Performance 85 or more, mobile:** met on English services, English paid ads, English Riyadh and English home, and on
  Arabic services (85). Not met on Arabic home (82) and Arabic paid ads (84).
- **LCP under 2.5 s:** not met on any first visit. Met for returning visitors on both homes (about 1.2 s).
- **CLS under 0.1:** met on every page.
- **TBT under 200 ms:** met on six of seven pages. English Riyadh is 229 ms.
- **No desktop regression:** met. No desktop page regressed on performance, LCP, TBT or CLS.

**Why first-visit LCP is still above 2.5 s.** The hero paragraph is the LCP element, and its paint waits on two
render-blocking resources: a 102 KB stylesheet and a 144 KB HTML document, both sharing the throttled connection with the
fonts. The stylesheet finishes at about 2.8 s in the throttled probe. Shrinking it means restructuring the CSS, which
risks the approved visuals, so it was not done here.

## Blockers and decisions

### Preview merge blockers

None. The first-visit consent regression is fixed and no page regresses against the baseline. Every check above passes.

### Production launch blockers

1. **First-visit mobile LCP above 2.5 s on every page.** Arabic home 3.35 s, English home 2.97 s. The bottleneck is measured
   (102 KB render-blocking stylesheet and 144 KB HTML). Fixing it requires CSS restructuring and a fresh visual check.
2. **Arabic mobile performance below 85 on home (82) and paid ads (84).**
3. **English Riyadh TBT 229 ms** (target 200 ms).
4. **English launch items B1 to B6** (see `docs/launch-readiness.md`):
   - B1 English contact form: closed, and its endpoint returns 405. No delivery route exists, and none has been invented.
   - B2 Privacy and cookie notices are drafts pending counsel review.
   - B3 Provider-side consent settings (GTM, GA4, Meta) are not verified from this codebase.
   - B4 The Arabic offers page calls `api.country.is` before any consent choice.
   - B5 English analytics segmentation is undecided.
   - B6 The Riyadh page's indexing needs confirming.

### Owner, legal and provider decisions

- Counsel review of both privacy notices, and the owner's facts for them (legal entity, registration, address,
  retention, lawful bases, processors).
- The English enquiry route (B1), and the copy that goes with it.
- Whether to keep, consent-gate or replace the Arabic country lookup (B4).
- English analytics: shared IDs with `/en` segmentation, or separate properties (B5).
- The Riyadh page's indexing (B6).
- Provider-side configuration of GTM consent overview, GA4 consent settings, Meta consent handling and Google Ads
  conversion settings. These were not changed from this repository, and nothing here verifies them.
- Whether the footer legal line may wrap onto a second row on phones (+20 px). This is a visible change.
- Preview indexing: the Arabic pages are indexable on Vercel preview builds, as on the baseline. Confirm that Deployment
  Protection keeps previews unreachable to crawlers, or decide to add `noindex` to Arabic previews too.
- Approval of the English launch, in writing, before the activation procedure in `docs/english-launch-activation.md`.

### Optional improvements

- Reduce the 102 KB render-blocking stylesheet and the 144 KB HTML document. This is the path to first-visit LCP under
  2.5 s. It needs its own change and visual regression.
- Remove the root `POST /api/contact` route. It accepts a valid body and stores nothing, and nothing calls it. It can go
  with B1.
- Remove the unreferenced `public/en/brand/dewank-logo.png` (about 2.2 MB) and the unused showcase PNGs.
- Decide on `scripts/route-group-migration.mjs` and `scripts/qa/*`.
- `/_global-error` returns 500 when requested directly. This is Next's internal route, and the baseline does the same.
- Node deprecation warnings (`module.register`) come from the toolchain.

## Rollback

1. Do not merge. The branch can stay as it is.
2. English launch: set `ENGLISH_LAUNCH_ENABLED` back to `false` in a new commit and redeploy (see
   `docs/english-launch-activation.md`).
3. Full rollback: deploy `feat/dewank-unified-preview` at `54114a2`, or the rollback branch at `8b2d9ca`. Production DNS,
   hosting and analytics were never changed, so no infrastructure work is needed.

## Stop before merge

This report stops at the merge-review gate. Nothing has been merged into `main`, the unified preview, or production.
