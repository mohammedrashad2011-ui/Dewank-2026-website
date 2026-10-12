# Bilingual launch readiness

Branch: `feat/dewank-bilingual-release-candidate`, based on `feat/dewank-unified-preview` at `54114a2`.

Status: **release candidate for owner review. Not merged, not launched.** English indexing is off. The production site,
`main`, the unified preview and the existing pull requests are not changed by this branch.

The release decision, the measured results and the rollback plan are in `docs/release-candidate-report.md`. This file
lists what is done, what is blocked and what only the owner can decide.

## What this branch changes

- **Indexing gate.** One switch, `ENGLISH_LAUNCH_ENABLED` (`app/(en)/en/_en/lib/seo-launch.ts`), is combined with a preview
  check (`app/lib/site-environment.ts`). English stays `noindex`, and English hreflang and sitemap entries stay out, until
  the owner approves the launch commit. Preview builds never index English. The legacy English Riyadh page keeps its
  current production indexing. See `docs/english-launch-activation.md`.
- **Consent.** A bilingual consent dialog replaces the unconditional tag loading. Nothing loads before a visitor
  chooses. Accept, reject, manage and withdraw are available, with a footer control. See
  `docs/privacy-cookies-review.md`.
- **Analytics modes.** Preview builds never load vendor scripts. Production loads them only after consent. The IDs
  and event names are unchanged. See `docs/analytics-environments.md`.
- **Privacy notices.** Arabic (`/privacy`) and English (`/en/privacy`) drafts. Both are `noindex`, both carry bracketed
  owner and counsel items, and neither makes a compliance claim.
- **Performance.** The logo and orbit images are served as sized WebP files, with PNG fallbacks in CSS. The two large
  Arabic brand PNGs (`dewank-mark-ar.png`, `dewank-sun-ar.png`) are removed. The source logo stays, because structured data
  refers to it. Files under `/brand/` get a 30-day cache header. Captures at 1x to 3x device pixel ratio match the
  baseline except for anti-aliased edge pixels.
- **Accessibility.** English section-label and Arabic paid-advertising text colours now meet WCAG AA. The WhatsApp
  minimise control is 24 px. Measured results are in the release report.
- **API hardening.** `/api/og` is removed. No page references it, and on the unified baseline build it returned an empty
  reply for both titles tested. `/api/contact` rejects bodies over 16 KB with HTTP 413. `X-Powered-By` is disabled.

## Blockers for the English launch

These stop the English launch. They do not stop review of this branch.

- **B1. English contact form: resolved in the production release branch.** The form now opens WhatsApp with the enquiry,
  the same route as the Arabic form. Nothing is posted to a server, and no enquiry is reported as sent until the visitor
  presses Send in WhatsApp. The options below are the record of the decision. The chosen route is Option A.
  - **Option A (WhatsApp hand-off, recommended for speed).** Mirror the Arabic contact form, which opens a WhatsApp message
    built from the fields. No new processor is needed. WhatsApp (Meta) receives the message. The English copy and privacy
    notice must describe this.
  - **Option B (email).** Appoint an email delivery provider, add a route that sends the enquiry, and update the privacy
    notice with the processor and its data region.
- **B2. Privacy and cookie notices.** Both drafts need counsel review and the owner's facts: legal entity, registration
  number, address, retention periods, lawful bases and processors. See `docs/privacy-cookies-review.md` items 1 to 13.
- **B3. Provider-side consent setup.** GTM consent overview, GA4 consent settings and Meta consent handling are not
  configured from this codebase. The owner must confirm them in the accounts. Nothing here verifies those accounts.
- **B4. Country lookup before consent.** The Arabic offer pages call `api.country.is` before any choice, and the
  request includes the visitor's IP address. The owner must decide whether to keep it, require consent for it, or
  replace it. English pages make no such call.
- **B5. Analytics segmentation for English.** English and Arabic share the production GTM, GA4 and Meta IDs. The owner
  decides whether English gets separate properties. Until then, reporting uses `/en` paths and the `lang` attribute.
- **B6. Riyadh page.** `/en/riyadh-marketing-agency` is indexable on production today and stays so. The owner should
  confirm that this is intended before English launches.

## Not blocking, recorded for follow-up

- **Content Security Policy.** No CSP header is set. Adding one needs an inventory of inline scripts (the consent
  bootstrap and JSON-LD) and of the vendor hosts. It is a separate change.
- **Legacy asset.** `public/en/brand/dewank-logo.png` (about 2.2 MB) is unreferenced. Showcase PNGs that nothing
  references remain in `public/`. Removing them is an owner decision, because they were not part of this branch's review.
- **Route scripts.** `scripts/route-group-migration.mjs` and `scripts/qa/*` remain in the repository. The owner decides
  whether to keep them.
- **Lint warnings.** ESLint reports zero errors with the project's ignore patterns. Remaining warnings are existing
  `<img>` usage and hook dependency notes, not introduced here.

## Owner decisions in one list

1. Option A or B for B1, and the English copy that goes with it.
2. Counsel review and owner facts for both privacy notices (B2).
3. Provider-side consent configuration (B3).
4. Country lookup: keep, consent-gate or replace (B4).
5. English analytics: shared IDs or separate properties (B5).
6. Confirm the Riyadh page's indexing (B6).
7. Approval to launch English, in writing.
8. Disposition of the legacy assets and scripts above.
