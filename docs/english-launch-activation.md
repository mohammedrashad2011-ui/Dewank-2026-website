# English launch activation

Status: **not active.** English pages are `noindex` in every build until the owner approves the English launch and a
launch commit is merged. This document is the procedure for that commit. It does not authorise a launch.

## Current state

| Item | Value | Where |
|---|---|---|
| Launch switch | `ENGLISH_LAUNCH_ENABLED = false` | `app/(en)/en/_en/lib/seo-launch.ts` |
| Active rule | `englishLaunchActive = ENGLISH_LAUNCH_ENABLED && !isPreviewBuild` | same file |
| Preview detection | `isPreviewBuild` is true for `VERCEL_ENV` preview or development, `DEWANK_SITE_ENV=preview`, or `DEWANK_ANALYTICS_MODE=preview` | `app/lib/site-environment.ts` |

While the launch is not active:

- English pages send `robots: noindex, nofollow, nocache`.
- The sitemap has no English entries.
- Neither the English nor the Arabic pages publish hreflang alternates.
- `/en/riyadh-marketing-agency` keeps its existing production indexing. It is `noindex` in preview builds. Its current
  production state should be confirmed by the owner before launch.

A preview build stays `noindex` even when the flag is `true`. This is deliberate: a preview deployment can never be
indexed by accident.

## Gates before the launch commit

All of these must be true. The release report (`docs/release-candidate-report.md`) lists which are met.

1. The owner has approved the English launch in writing.
2. Counsel has reviewed the English and Arabic privacy notices (`docs/privacy-cookies-review.md`). Bracketed items are
   resolved and the drafts are approved for publication.
3. The English contact form can deliver an enquiry before it is opened. Today it cannot: the form is closed
   (`formEnabled = false` in `app/(en)/en/contact/page.tsx`), and its endpoint `POST /en/api/contact` returns 405. The
   form may be opened only after a delivery route exists (blocker B1 in the release report).
4. The analytics decision for English is recorded: shared production IDs with `/en` segmentation, or separate properties.
5. Provider-side settings are confirmed in the owner's accounts: Google Tag Manager consent overview, GA4 consent
   settings, and the Meta Pixel. None of these is configured from this codebase.
6. The launch build passes the verification checklist below.

## Procedure

1. Branch from the approved release-candidate commit, for example `launch/english-<yyyymmdd>`. Do not commit to `main`.
2. **Flip the flag.** In `app/(en)/en/_en/lib/seo-launch.ts`, change the line to:

   ```ts
   export const ENGLISH_LAUNCH_ENABLED = true;
   ```

   No other code change is needed for indexing. The effects follow from the flag:
   - English pages drop the `noindex` in `app/(en)/en/_en/metadata.ts`.
   - `launchHreflang()` returns reciprocal alternates for the 36 genuine pairs in `englishToArabic`. `x-default` is set on
     `/` and `/en`.
   - The Arabic pages get the reciprocal `en` alternates through `app/lib/seo.ts`, so no Arabic file is edited.
   - `app/sitemap.ts` adds the 36 English paths from `englishSitemapPaths`.
3. **Unlock the privacy notices only after counsel approval.** The Arabic draft (`app/(ar)/privacy/page.tsx`) and the
   English draft (`app/(en)/en/privacy/page.tsx`) each set `robots` to `noindex` explicitly. Remove those overrides and
   replace the draft banners only in the same commit as the approved text.
4. Build with production settings. Do not set `DEWANK_SITE_ENV`, `DEWANK_ANALYTICS_MODE` or any preview variable:

   ```bash
   npm ci
   npm run build
   ```

5. Run the verification checklist on the built output, not on the source.
6. Open a pull request against the release branch. The owner reviews and approves the merge. Deployment to production
   follows the owner's normal process. This procedure does not change DNS, hosting, analytics accounts or production
   environment variables.
7. After deployment, the owner submits the sitemap in Search Console and checks URL Inspection for the key English pages.

## Verification checklist (launch build)

- `robots` is `index, follow` on each of the 36 English paths and on `/en/riyadh-marketing-agency`. It is `noindex` on
  `/en/privacy` and on the Arabic `/privacy`.
- Each English page has a self-referencing canonical.
- Hreflang: every English pair has `en` and `ar` entries, reciprocated on the Arabic page. `/` and `/en` carry
  `x-default`. No hreflang points to a route that returns a non-200 status.
- `sitemap.xml` lists the 36 English paths and the existing Arabic paths. Every listed URL returns HTTP 200 and is
  indexable. `/en/privacy` and `/privacy` are not listed.
- Structured data: each document has one Organization and one WebSite node with the `@id` values
  `https://dewank.com/#organization` and `https://dewank.com/#website`.
- Consent: no GTM, GA4 or Meta request before a visitor chooses a category.

## Verification checklist (preview build, same commit)

Build with `DEWANK_SITE_ENV=preview` and the flag set to `true`. Then:

- Every English page is `noindex`.
- No English page or Arabic page publishes hreflang.
- `sitemap.xml` has no English entries and no Riyadh entry.
- No vendor script loads, whatever the stored choice.

## Rollback

1. Set `ENGLISH_LAUNCH_ENABLED` back to `false` in a new commit, then deploy it. The English pages return to `noindex`,
   the sitemap drops the English entries, and the Arabic pages drop the English alternates.
2. Search engines keep an indexed URL until they recrawl it. A `noindex` response removes it from the index only after
   that recrawl. Urgent removal through Search Console is a separate owner action.
3. Alternatively, revert the launch commit. The release-candidate commit remains the reference for the pre-launch state.
