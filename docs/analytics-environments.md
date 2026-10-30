# Analytics by environment

Two decisions are made at build time, in two small modules:

- `app/lib/analytics-mode.ts` decides whether the build is in **production** or **preview** analytics mode.
- `app/lib/site-environment.ts` decides whether the build is a **production** or **preview** site, for indexing.

Vendor loading is decided in one place, the consent bootstrap (`app/components/consent-bootstrap.ts`), which is rendered
by `app/components/root-document.tsx` at the start of `<body>`. It loads GTM and Meta Pixel when permitted; the published
GTM container loads GA4. The site does not load a separate `gtag.js` or configure a second initial page view.

## The mode rule

| Mode         | When it applies                                                                 | Vendor loading | dataLayer events |
|--------------|----------------------------------------------------------------------------------|----------------|------------------|
| `production` | Default. Vercel production, any non-Vercel host (for example the Hostinger site), local builds | Usage measurement defaults on; advertising defaults off; stored preferences override both | Accepted while either category is on; event objects dropped when both are off |
| `preview`    | Vercel preview and development deployments, or `DEWANK_ANALYTICS_MODE=preview`  | Never                                  | Pushed in the browser, sent nowhere |

Decided at build time, in this order:

1. `DEWANK_ANALYTICS_MODE=production` or `DEWANK_ANALYTICS_MODE=preview` (explicit override).
2. Vercel's `VERCEL_ENV`: `preview` or `development` gives preview mode. `production` or unset gives production mode.

A host that is not Vercel sets no `VERCEL_ENV`, so it keeps production mode. Preview is never the default. The rule does
not depend on the hostname.

The mode is baked into the HTML at build time. Changing it needs a rebuild.

## Consent (production mode only)

- With no stored choice, Google Consent Mode v2 starts with analytics storage granted and ad storage, ad user data and
  ad personalisation denied. A stored choice replaces these defaults. This describes the current implementation,
  not a legal assessment or a change to the production policy.
- Usage measurement loads GTM (`GTM-PG525ZFN`) and GA4. Advertising measurement loads GTM and the Meta Pixel.
- With no choice, usage measurement loads. After Reject all (both categories off), no vendor loads on the next page
  load and `dataLayer` event objects are dropped. Withdrawal reloads the page to stop already loaded vendors.
- The choice is stored under `dewank-consent-v1`. Withdrawal reloads the page when a vendor had loaded, and measurement
  cookies are removed on every load where no category is allowed.
- The full rules, the owner items and the verification results are in `docs/privacy-cookies-review.md`.

## Environments

| Environment | How it is built | Analytics mode | Site mode | Notes |
|---|---|---|---|---|
| Arabic production (Hostinger-served site) | No `VERCEL_ENV` | production | production | Existing IDs and events are preserved. Usage defaults on; stored preferences override it. |
| Vercel production (if promoted) | `VERCEL_ENV=production` | production | production | Same as above. |
| Vercel Preview (release candidate) | `VERCEL_ENV=preview` | preview | preview | No vendor loads. English pages are `noindex`. |
| Local development (`next dev`) | `VERCEL_ENV` unset | production | production | Set `DEWANK_ANALYTICS_MODE=preview` locally to avoid any vendor request. |
| Local production build (QA) | `VERCEL_ENV` unset | production | production | Use `DEWANK_ANALYTICS_MODE=preview` to test without vendor requests. |

## Testing conversion events without sending them

In preview mode the browser still runs the instrumentation. `window.dataLayer` receives the same events, so a test can
read them without any vendor script:

- `sitewide_whatsapp_click` with `lead_intent`, `source_path` and `cta_location`.
- `contact_whatsapp_submit` on the Arabic contact form.
- The offer events, unchanged.

## Duplicate-event checks

- Each document has one `RootHeadScripts` and one `RootBodyStart`, from exactly one root layout. The consent bootstrap
  is the only place that adds vendor tags.
- The Arabic and English documents are separate, so a page never loads two GTM containers.
- The noscript fallbacks (GTM iframe and Meta pixel image) were removed. They made requests before any consent.
- Results from the release-candidate build are recorded in `docs/release-candidate-report.md`.

## Segmenting English and Arabic in reporting (no new IDs)

Both languages share the production IDs, which is a business decision still pending. Until it is made, use these
existing signals:

- Page path. English pages are `/en/...`, Arabic pages are everything else. In GA4, filter on `page_path` with
  `begins with /en`.
- The `lang` attribute of the document is `en` or `ar`. A GTM variable can read `document.documentElement.lang`.
- `source_path` on `sitewide_whatsapp_click`, which carries the same path.

No new GA4 property, measurement ID or Meta pixel has been created.

## Decision for launch: one shared property with `/en` segmentation

Recommended, and the basis for the launch: English and Arabic send to the existing GA4 property (`G-5SKKT1NBHB`) and
the existing Meta Pixel (`2274266710087331`). English is separated in reports by page path (`/en/...`). No new property,
ID or event is created, so the existing reporting history and the conversion setup are unchanged.

- Reports: in each exploration, add a filter on Page path that begins with `/en` for English, and one that does not for
  Arabic. Save both as comparisons.
- Meta: the Pixel does not add a language field. Split by page URL where Meta's reporting allows it, and use the
  `source_path` parameter on the WhatsApp events.
- Separate English properties remain an option for later. They would start with no history, so they are not recommended
  for launch.

## Open items for the owner

1. Provider-side consent configuration in GTM, GA4 and Meta. Not verified from this codebase. The owner checks it in the
   accounts before launch (see `docs/release-candidate-report.md`).
2. The GA4 data-retention setting. The owner checks it in GA4 and states the period in the privacy notice.

## Changing the mode

- Set `DEWANK_ANALYTICS_MODE` in the build environment of the deployment, then rebuild.
- Production environment variables are not changed by this work. Any change to them needs the owner.
