# Phase 3 — expiry release gate (PR #241)

Current integration deliberately uses a fixed campaign snapshot. Do not merge this draft as a completed promotion.

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
The deployment switch, cache invalidation and old-tab refresh are not implemented. No production changes have been made. The current gate remains closed.
