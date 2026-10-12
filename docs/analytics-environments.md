# Analytics by environment

Two decisions are made at build time, in two small modules:

- `app/lib/analytics-mode.ts` decides whether the build is in **production** or **preview** analytics mode.
- `app/lib/site-environment.ts` decides whether the build is a **production** or **preview** site, for indexing.

Vendor loading is decided in one place, the consent bootstrap (`app/components/consent-bootstrap.ts`), which is rendered
by `app/components/root-document.tsx` in `<head>` before any other script. Nothing else loads GTM, GA4 or the Meta Pixel.

## The mode rule

| Mode         | When it applies                                                                 | Vendor loading | dataLayer events |
|--------------|----------------------------------------------------------------------------------|----------------|------------------|
| `production` | Default. Vercel production, any non-Vercel host (for example the Hostinger site), local builds | Only after the visitor allows the matching category (see Consent) | Pushed in the browser, dropped until a category is allowed, then sent |
| `preview`    | Vercel preview and development deployments, or `DEWANK_ANALYTICS_MODE=preview`  | Never                                  | Pushed in the browser, sent nowhere |

Decided at build time, in this order:

1. `DEWANK_ANALYTICS_MODE=production` or `DEWANK_ANALYTICS_MODE=preview` (explicit override).
2. Vercel's `VERCEL_ENV`: `preview` or `development` gives preview mode. `production` or unset gives production mode.

A host that is not Vercel sets no `VERCEL_ENV`, so it keeps production mode. Preview is never the default. The rule does
not depend on the hostname.

The mode is baked into the HTML at build time. Changing it needs a rebuild.

## Consent (production mode only)

- Google Consent Mode v2 starts denied. Analytics storage follows the usage category. Ad storage, ad user data and ad
  personalisation follow the advertising category.
- Usage measurement loads GTM (`GTM-PG525ZFN`) and GA4. Advertising measurement loads GTM and the Meta Pixel.
- With no choice, or after Reject all, no vendor request is made, and `dataLayer` event objects are dropped. This means
  no conversion event (for example `sitewide_whatsapp_click` or `contact_whatsapp_submit`) is recorded for those visitors.
- The choice is stored under `dewank-consent-v1`. Withdrawal reloads the page when a vendor had loaded, and measurement
  cookies are removed on every load where no category is allowed.
- The full rules, the owner items and the verification results are in `docs/privacy-cookies-review.md`.

## Environments

| Environment | How it is built | Analytics mode | Site mode | Notes |
|---|---|---|---|---|
| Arabic production (Hostinger-served site) | No `VERCEL_ENV` | production | production | Existing IDs and events are preserved. Vendors load only after consent. |
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

## Pending decisions for the owner

1. Separate GA4 and Meta properties for English. Not created. Only the owner can create them.
2. Provider-side consent configuration in GTM, GA4 and Meta. Not verified from this codebase.
3. Whether the English pages should send to the Arabic production properties at launch.
4. Whether the Arabic country lookup needs consent, since it runs before any choice (see `docs/privacy-cookies-review.md`).

## Changing the mode

- Set `DEWANK_ANALYTICS_MODE` in the build environment of the deployment, then rebuild.
- Production environment variables are not changed by this work. Any change to them needs the owner.
