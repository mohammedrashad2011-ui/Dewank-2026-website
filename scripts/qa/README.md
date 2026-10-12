# QA scripts

These scripts were used to verify the bilingual hardening. They are not part of the build.

They need a production server and Chrome. The browser scripts also need `puppeteer-core`, installed outside the repository
(`npm i --no-save puppeteer-core` in a scratch folder), so the repository's dependencies do not change.

| Script | What it checks |
|---|---|
| `route-parity.mjs <baseUrl> <out.json>` | Status, `lang`/`dir`, title, canonical, robots, JSON-LD count, tracking IDs, H1 for every route in the route inventory (`$TEMP/routes.txt`). |
| `capture.mjs <baseUrl> <outDir> <tag>` | Deterministic full-page screenshots: animations frozen at their final frame, lazy content rendered, scroll-reveals settled. |
| `compare.mjs <dir>` | Pixel comparison of `base-*` and `exp-*` screenshots (pixelmatch, threshold 0.1). |
| `seo-check.mjs <baseUrl>` | Parses every JSON-LD block, counts Organization and WebSite nodes, checks `lang`, `dir`, canonical and robots. |
| `widget-check.mjs <baseUrl>` | WhatsApp widget: count, direction, copy, visibility, overflow, destination number. |
| `overlap-check.mjs <baseUrl>` | Overlap between the WhatsApp widget and the main call-to-action buttons. |
| `dl-check.mjs <baseUrl>` | Widget click records `sitewide_whatsapp_click` in `dataLayer` and makes no vendor requests (preview mode). |
| `net-check.mjs <baseUrl>` | Third-party hosts requested by a page, including the country lookup. |

The route inventory and the baseline JSON are produced by a run against the commit being compared. They are not committed.
