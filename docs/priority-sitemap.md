# Priority sitemap V1

Production URL: https://dewank.com/sitemap-priority.xml

The main sitemap remains unchanged. The additional sitemap uses the same eligible canonical URLs and English launch gate, is generated statically, and returns 404/noindex in preview. Submit it once in Search Console only after production deployment. This is a discovery/monitoring aid, not a Google crawl-priority or indexing guarantee.

## Updating it

- New canonical paths added to the main sitemap after the 90-path baseline are included automatically. Use the existing lastmod workflow (`npm run sitemap:lastmod` in a full clone) before merging.
- For a substantial SEO change to an existing URL, the author of the SEO PR must record its actual reviewed content-change date (YYYY-MM-DD) in `app/lib/priority-sitemap.json` under `reviewedUpdates`. Include content, search intent, title/description, meaningful FAQ/schema changes; exclude style, tracking and unrelated fixes. This explicit review is deliberate: a Git timestamp alone cannot classify semantic changes. It is not fully automatic detection of SEO edits.
- Do not modify the baseline for newly introduced URLs merely to remove them from the list. Removed or redirected paths disappear when removed from the main sitemap.
- Reviewed dates override later incidental page-folder timestamps. Do not set dates to the current build date or repeatedly resubmit unchanged sitemaps.
- Initial 18 URLs use existing committed lastmod dates as the historical approximation, matched against the reviewed SEO PRs. The registry can also record other materially updated paths in future PRs.
- Keep the full sitemap as the source of truth. No need to use the general-purpose Indexing API.

## Verification before merge
1. `node --experimental-strip-types --test tests/priority-sitemap.test.mjs` (Node 22).
2. Run type check and production build; with production site env, confirm valid XML, 18 unique canonical URLs, real dates, no old mini-visual-identity, no noindex/redirect URLs, and all URLs in main sitemap. Verify deployed HTML status and canonicals.
3. Preview must return 404/noindex for the priority route. Confirm existing sitemap and robots.txt remain unchanged.
4. After production deployment, check the live XML and submit `sitemap-priority.xml` in Search Console. No automated submission or production deployment in this PR.
