# Analytics by environment

Tracking is decided in one place: `app/lib/analytics-mode.ts`. The vendor scripts and their `noscript` fallbacks are
rendered by `app/components/root-document.tsx`. Nothing else loads GTM, GA4 or the Meta Pixel.

## The rule

| Mode         | When it applies                                                                 | GTM / GA4 / Meta Pixel | dataLayer events |
|--------------|----------------------------------------------------------------------------------|------------------------|------------------|
| `production` | Default. Vercel production, any non-Vercel host (for example the Hostinger site), local builds | Loaded with the existing IDs | Pushed and sent |
| `preview`    | Vercel preview and development deployments, or `DEWANK_ANALYTICS_MODE=preview`  | Not loaded             | Pushed in the browser, not sent anywhere |

Decided at build time, in this order:

1. `DEWANK_ANALYTICS_MODE=production` or `DEWANK_ANALYTICS_MODE=preview` (explicit override).
2. Vercel's `VERCEL_ENV`: `preview` or `development` gives preview mode. `production` or unset gives production mode.

A host that is not Vercel sets no `VERCEL_ENV`, so it keeps production tracking. Preview is never the default. The rule
does not depend on the hostname.

## Environments

| Environment | How it is built | Mode | Notes |
|---|---|---|---|
| Arabic production (Hostinger-served site) | No `VERCEL_ENV` | production | Unchanged. The existing IDs and events are preserved. |
| Vercel production (if promoted) | `VERCEL_ENV=production` | production | Same as above. |
| Vercel Preview (unified and experimental branches) | `VERCEL_ENV=preview` | preview | No vendor scripts. Nothing reaches production properties. |
| Local development (`next dev`) | `VERCEL_ENV` unset | production | Set `DEWANK_ANALYTICS_MODE=preview` locally to avoid sending test events. |
| Local production build (QA) | `VERCEL_ENV` unset | production | Use `DEWANK_ANALYTICS_MODE=preview` to test without transmitting. |

## Testing conversion events without sending them

In preview mode the browser still runs the instrumentation. `window.dataLayer` receives the same events, so a test can
read them without any vendor script:

- `sitewide_whatsapp_click` with `lead_intent`, `source_path` and `cta_location`.
- Existing form and offer events, unchanged.

## Duplicate-event checks

- Each document has one `RootHeadScripts` and one `RootBodyStart`, from exactly one root layout.
- The Arabic and English documents are separate, so a page never loads two GTM containers.
- Verified in the browser: every sampled route has one `GTM-PG525ZFN` container script and one GA4 config.

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
2. Consent. There is no consent banner or consent mode in this codebase. Whether analytics needs consent in the target
   markets is a legal decision for the owner.
3. Whether the English pages should keep sending to the Arabic production properties at launch.

## Changing the mode

- Set `DEWANK_ANALYTICS_MODE` in the build environment of the deployment, then rebuild. The mode is baked into the HTML.
- Production environment variables are not changed by this work. Any change to them needs the owner.
