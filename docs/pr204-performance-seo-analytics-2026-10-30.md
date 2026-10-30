# PR #204 technical audit — 30 October 2026

**OPEN / UNMERGED. No production deployment or account configuration changes.**
This public report contains technical observations only. Private GA4 extracts and the complete account review remain
in the local `pr204-evidence` directory outside the repository; they are not committed or published.

## Exact application revision

- Application SHA: `221944bb1cfaa602ec3aaebce5fa3272419c3292`.
- Existing branch: `cro/home-service-direct-whatsapp-20261030`.
- Matching READY Vercel deployment: `dpl_EDUoohBkUbAD2x5ydb3M5cVagrBS`.
- Preview: https://dewank-2026-website-rjc5bun3o-dewank-marketing.vercel.app/
- Production responds from Hostinger/HCDN; its application SHA was not established.
- This audit changes documentation only; previous application code and QA remain intact.

## Findings

| Priority | Finding | Disposition |
| --- | --- | --- |
| P0 | None confirmed in the tested scope | Not exhaustive site/integration coverage. |
| P1, measurement review | Public GTM v11 uses current WhatsApp event names while conversion-marking rules still name a legacy event not emitted by an active event tag in that resource | Reconcile intended key event and Google Ads imports through a separately authorized account change. No production change from this PR. |
| P2 | Published mobile homepage LCP is slow in returned lab data | Diagnose actual waterfall before choosing an application/hosting fix; no guessed optimization. |
| P2, fixed | Environment/measurement documentation described obsolete consent defaults and v7 configuration | Corrected against current source/bootstrap and public GTM resource. No consent-policy or tag change. |

## SEO and links

Eight core routes were examined: `/`, `/en`, `/services`, `/en/services`, `/paid-ads`, `/en/paid-advertising`,
`/website-design`, `/en/website-design`.

- Authenticated Preview HTML: all eight return 200, with distinct titles/descriptions, one H1 each and
  production-domain self-canonicals. HTTP `X-Robots-Tag: noindex` protects Preview, including Arabic pages whose HTML
  metadata says index. English metadata is also noindex/nofollow.
- English hreflang and sitemap entries are intentionally suppressed in Preview by the existing build guard.
  Production's eight pages have self-canonicals and reciprocal AR/EN alternates. English services returned 200 on
  retry after one timeout. Paid-advertising language routes correctly differ.
- Both hosts' robots/sitemap endpoints return 200. Preview robots allows crawling except `/api/` and points at
  production sitemap. Preview sitemap has 47 production URLs, intentionally excluding English. Production includes
  English. Not every sitemap entry was crawled.
- Extracted JSON-LD parses on all eight routes. Organization/WebSite and appropriate service/catalog/FAQ/breadcrumb
  nodes are present. All 58 FAQ question names occur in page content. Rich Results eligibility was not validated.
- All 92 distinct internal path/fragment targets from the eight Preview documents resolve locally on the same app
  SHA and referenced IDs exist. This is local runtime coverage, not 92 authenticated Vercel fetches.

References: [Google multilingual guidance](https://developers.google.com/search/docs/specialty/international/localized-versions)
and [Web Vitals](https://web.dev/articles/vitals).

## Performance

Ubersuggest `pagespeed_audit` with `forceUpdate=true` for `dewank.com` returned:

| Lab metric | Mobile | Desktop |
| --- | --- | --- |
| LCP / FCP | 5.2 s / 5.2 s | 362 ms / 362 ms |
| CLS | 0 | 0 |
| TBT | 6 ms | 186 ms |
| Speed Index | 5.7 s | 1.3 s |

Earlier mobile result: LCP 5.3 s. Returned mobile opportunities: unused JS 123 KiB (estimated 600 ms), unused CSS
20 KiB (150 ms), redirects (630 ms). Estimates overlap; do not add them into a promised improvement. The connector
does not expose raw Lighthouse final URL, run timestamp, scores or waterfall. These are returned lab metrics only.

**Preview PageSpeed numbers were discarded.** Unauthenticated deployment requests redirect 302 to Vercel SSO.
The audit connector did not identify its final measured URL, so its numbers cannot prove candidate performance.
Authenticated HTML fetches succeeded through Vercel. Protection was not disabled and no access credential was sent
to an external auditor. Numeric field INP, p75 LCP and CrUX window/sample were not established. No full Core Web
Vitals pass or candidate-vs-live performance improvement is claimed.

## Measurement implementation

Read-only public [GTM resource](https://www.googletagmanager.com/gtm.js?id=GTM-PG525ZFN) reports version 11. It contains
the existing Google tag, history-page-view handling, generic WhatsApp link rules and query-stripped link URLs for
contact intent. The site does not load/configure a second initial GA tag. `whatsapp_click` and `contact_intent`
overlap in click triggers: they must not be summed as unique enquiries. WhatsApp clicks indicate intent, not sent
messages or qualified leads. Selected-service attribution on homepage CTAs is not established by the generic,
path-based service-family mapping.

On an isolated local preview-mode build, all eight routes have `VENDORS=false` and no loaded vendor scripts.
The harness blocked external requests; a country lookup to `api.country.is` was attempted and aborted, with no
analytics-vendor request recorded. Real Arabic floating-widget clicks emit one `sitewide_whatsapp_click` with
source path, intent and CTA location. English styles hide this widget on these routes, so no English widget click
is claimed. Core CTAs remain WhatsApp links covered by the public generic GTM rule (configuration inspection only).
WhatsApp navigation was prevented and no message sent. Live candidate GA4/Tag Assistant delivery is untested because
Preview disables vendor loading. Private account observations are retained locally only.

## Verification

- Build and TypeScript passed; 94/94 pages generated. Reconfirmed with declared Node 22 (`v22.23.4`) after an initial
  Node 26 build.
- Isolated browser: eight routes at 390×844 return 200, correct RTL/LTR and document language, one H1 each, zero
  horizontal overflow and no page errors observed. Above-fold screenshots retained locally; not exhaustive visual QA.
- Local evidence: Preview and production HTML, browser JSON, link/FAQ checks, screenshots and public GTM script.
  Audit helpers are outside the repository and are not shipped.
- Documentation diff check passes. No application or performance change is claimed. Original checkout's unrelated
  dirty work-page changes remain untouched. Previous QA is not overwritten or promoted into a broader sign-off.

Remaining priorities: measurement-definition review; authenticated candidate performance capture; waterfall-based
diagnosis of published mobile LCP. Keep PR #204 unmerged.
