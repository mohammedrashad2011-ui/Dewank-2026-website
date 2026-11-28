# Phase 3 — expiry release gate (PR #241)

Current integration supports deterministic campaign and regular build snapshots; campaign is the default. Do not merge this draft as a completed promotion.

## Recommended approach
Preserve static rendering and current caching wherever possible. Use two immutable pricing snapshots (campaign and regular), selected centrally for a build, with an atomic production artifact switch at the approved deadline (2027-01-01 00:00 Asia/Riyadh, 2026-12-31 21:00 UTC). This approach needs verified scheduling and rollback on Hostinger and is not yet implemented. Vercel preview must exercise both snapshots. If exact atomic switching cannot be guaranteed, implement request-scoped server pricing and a shared client snapshot instead; do not silently use client-only Date.now().

## Acceptance checks
- Verify current and future market prices in all 17 packages; non-SAR future prices still require owner approval.
- Audit module-level metadata, FAQ and hub facts: they cannot follow a live clock without regeneration.
- Test fresh HTML and JSON-LD in both languages on each deployment platform, including CDN/browser caching and all linked price-bearing routes.
- Test open tabs at expiry and back/forward navigation, WhatsApp hrefs, CRO displayed_amount events, sticky CTA and country changes.
- Verify no hydration mismatch, stale price or performance regression.
- Verify checkout/build and unit tests at the actual PR head. A missing workflow result is not a passing check.
- No merge or production scheduling before owner approval.

## Open items
The production deployment switch and cache invalidation are not implemented. A deferred client refresh and uncached snapshot endpoint are implemented, but not yet verified in a browser or deployment. Campaign tabs check the serving deployment only after expiry; refresh when regular is confirmed, with a reload cooldown. A delayed switch, unavailable network, blocked session storage or stale cached HTML can still leave campaign content visible. No production changes have been made. The current gate remains closed.

## Verified CI baseline
At commit eff8112ff32c547f5fa2381cff445ae773a86887, run 46182414607 passed both Next.js builds and both sets of seven pricing tests. The 434-file inventory returned 60 candidates with zero read errors: 21 CSS, 20 market/competitor editorial lines, 14 SVG, and five other incidental/template matches. The non-SVG results were reviewed; visual asset QA and fresh checks of the new client/API code remain outstanding.

## Served HTML verification
Run 46183176367 at aa025550bf12eb42fd92b8b6c76603415aafa719 passed both standalone builds, both seven-test suites and all 40 route/snapshot schema checks (including both landing packages and the existing English content USD schema). Both uncached snapshot API checks passed. This is not a browser or production-cache test.

## Hostinger cutover runbook (not authorized or executed)
1. Identify the actual service supervisor, document root, release directory, CDN cache settings and supported restart/switch mechanism through read-only inspection. Do not assume a symlink or systemd deployment.
2. Prepare two immutable artifacts from the same approved commit, with NEXT_PUBLIC_DEWANK_PRICING_SNAPSHOT explicitly set at build time to campaign or regular. Preserve CRM runtime configuration outside artifacts. Record checksums and retain both releases.
3. Verify both artifacts in isolated staging using scripts/qa/check-pricing-snapshot.mjs and browser QA. Confirm assets, contact forms, locale, CTA, tracking and cache policy. Check that /api/pricing-snapshot identifies the actual serving artifact.
4. Only after owner approval, schedule the verified platform-specific switch for 2026-12-31T21:00:00Z. Use a server UTC clock and a single-execution lock. Never deploy the regular snapshot early. Keep secrets out of logs.
5. Switch the serving release, restart if required, and invalidate HTML/RSC caches (not immutable hashed assets); check both locales externally. Verify regular snapshot, expected prices and WhatsApp links. Observe availability and error logs.
6. On failure, restore the last healthy service artifact to recover availability, alert owner immediately and treat any restored campaign price after expiry as a commercial incident; do not silently extend the campaign. Reattempt only after diagnosis and approval. Record actual switch time and verification results.

Blocking evidence: GitHub repository search for Hostinger deployment and standalone restart returned no results. No live Hostinger shell/supervisor inspection has been performed. Consequently exact switch, scheduler and rollback commands remain unverified and must not be installed or run yet.
