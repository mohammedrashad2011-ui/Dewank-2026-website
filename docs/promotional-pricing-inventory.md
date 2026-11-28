# Promotional pricing — Phase 2 source inventory

**PR #241 — audit only, not ready to merge.** Baseline: branch commit `bf8a00e69a301d30c98eeb8490c8b268bc135932` (includes the Phase 1 configuration, inventory script and isolated audit workflow). Read-only [GitHub Actions run 46169490352](https://github.com/mohammedrashad2011-ui/Dewank-2026-website/actions/runs/46169490352) succeeded on 2026-11-28.

## Evidence and coverage

- 616 tracked files; 434 eligible runtime text files read (189 Arabic, 93 English, 152 shared/other), zero read errors.
- 87 candidate lines across 59 files; 75 files with pricing/offer references (includes comments, CSS and tracking identifiers, not 75 distinct price renderers).
- 23 literal-price-field lines in 20 source files (one English landing page line contains two Offer amounts); 3 additional package-price prose lines in naming metadata/FAQ. Thus 26 actionable candidate lines, containing 27 amount occurrences based on inspection of the landing-page line. The naming example comment is one additional non-runtime cleanup.
- 20 editorial guide candidates are market estimates or a competitor example; retain them, not Dewank sell prices. Remaining 41 lines are CSS/SVG/incidental matches or the example comment. A hit is not automatically a defect.
- Static inventory scans tracked runtime source, styles, text/SVG assets, configuration and code; it does not prove absence of image/video-embedded price text, external/database-supplied values, or post-hydration inconsistencies. Final rendered-page and asset QA remains mandatory. GitHub code search returned incomplete/no results; the checked-out CI inventory is the source of the counts.

## Integration map for Phase 3

| Surface | Existing implementation | Required action |
|---|---|---|
| Central pricing | app/(ar)/offers/offer-pricing.ts | Keep 17 existing and 17 future package records here; one market/time quote for every consumer; no duplicate literals. |
| Arabic resolver | use-offer-price.ts | Replace independent amount selection with shared quote; preserve initial SAR, country/fallback, formatting. Existing unsupported saved-country fallback behavior needs parity check. |
| Arabic content package | localized-offer.tsx | Own country lookup and amount state; unify without changing CTA labels, URLs, order. |
| English resolver | app/(en)/en/_en/lib/localized-price.tsx | Common quote, same market/currency, keep existing markup and country semantics; no duplicated amount table. |
| Video | video-localized-price.tsx, video-order-widget.tsx, video-sticky.tsx, video-offer-from-price.tsx, video-offer-page.tsx | Shared quote for 3 packages, summary, WhatsApp, sticky, and schema. Remove/derive the three priceSAR literals in video-offer-content.ts after checking usage. |
| Home | app/components/home-selected-offers.tsx; app/(en)/en/_en/parity/offers.tsx | Replace direct config lookup / legacy English resolver; preserve ranking, links, layout and tracking. |
| Hub | offers-hub-price.tsx, offers-hub.tsx, offers-hub-summary.ts | Shared quote for cards, table, range, ordering and ItemList; ensure all locales and expiry. |
| Arabic offer panels | localized-brand-naming-offer, localized-offer, localized-mini-identity, localized-small-website, localized-landing-offer, localized-whatsapp-starter, localized-google-ads-launch, localized-name-identity, localized-seo-audit, localized-instagram-upgrade | Existing visible amount, price note, WhatsApp template amount, inline and sticky must agree; do not modify CTA wording, destination or observer. |
| English offer panels | OfferPrice on AR/EN shared consumers and English offers, EnOfferSticky | Explicit promotional rendering only where suitable; inline prices retain existing layout; CTA fixed. |
| CRO | cro-packages.tsx, cro-packages-en.tsx and both CRO pages | All 3 tiers, WhatsApp messages and displayed_amount event must use same quote. Do not change event names or measurement semantics. |
| Name + identity | localized-name-identity.tsx; bundle-saving-en.tsx | Derive bundle-vs-separate savings from same market/time; keep it distinct from campaign savings (avoid double counting). |
| Service pages and guides | branding, naming service, social extras, website, SEO, AI, paid ads, WhatsApp, related guides and EN BITHAN case study | Existing offer references must resolve centrally, no redesign or changes to market research / editorial prices. |
| Metadata/JSON-LD | Listed literal fields/prose below; existing dynamic hub and video schema | Replace only literal amount expressions with central market quote; keep schema types, URLs, currency choice, title/description wording, SEO structure and keywords. English content Offer currently uses USD 210 while most schema uses SAR; preserve existing currency unless separately authorized, validate against rendered fallback/canonical market. |
| AI-readable / CRM / tracking | agent-markdown.ts, webmcp-tools.tsx, offer-catalog.mjs, crm-offer-actions.tsx, offer-interest-tracker.tsx, offer-popularity route | Checked: no package price literals in those sources; the offer-key tracking paths are not price readers. No changes to tracking or CRM required from this finding. |

## Deadline and release gate

- Current prices remain unchanged until 2027-01-01 00:00 Asia/Riyadh. No runtime expiry is wired yet.
- Server-rendered HTML and schema must not remain stale after the deadline; verify cache/revalidation and Hostinger behavior. Use a deterministic shared timestamp per render/hydration and test the boundary, including already-open browser tabs.
- Do not add promotional text to every inline price or disturb CTA layout. Distinguish full offer price panels from inline numbers, table, sticky and service references.
- The final scan must classify every remaining hit; don't blanket replace market guides, CSS, dates, case-study art or regex group references.
- Runtime all-country checks, rendered AR/EN page checks, full build, screenshot review and performance/SEO/CTA regression checks are Phase 7–8 requirements. No merge until owner approval.

## Candidate register (baseline line numbers)

| File | Line | Classification |
|---|---:|---|
| `app/(ar)/branding/branding-conversion-fixes.css` | 27 | CSS layout / incidental numbers |
| `app/(ar)/guides/branding-identity-cost-saudi-arabia/page.tsx` | 22 | Editorial market estimate or competitor example; preserve |
| `app/(ar)/guides/branding-identity-cost-saudi-arabia/page.tsx` | 59 | Editorial market estimate or competitor example; preserve |
| `app/(ar)/guides/branding-identity-cost-saudi-arabia/page.tsx` | 62 | Editorial market estimate or competitor example; preserve |
| `app/(ar)/guides/branding-identity-cost-saudi-arabia/page.tsx` | 63 | Editorial market estimate or competitor example; preserve |
| `app/(ar)/guides/branding-identity-cost-saudi-arabia/page.tsx` | 64 | Editorial market estimate or competitor example; preserve |
| `app/(ar)/guides/branding-identity-cost-saudi-arabia/page.tsx` | 65 | Editorial market estimate or competitor example; preserve |
| `app/(ar)/guides/digital-marketing-cost-saudi-arabia/page.tsx` | 58 | Editorial market estimate or competitor example; preserve |
| `app/(ar)/guides/digital-marketing-cost-saudi-arabia/page.tsx` | 59 | Editorial market estimate or competitor example; preserve |
| `app/(ar)/guides/digital-marketing-cost-saudi-arabia/page.tsx` | 60 | Editorial market estimate or competitor example; preserve |
| `app/(ar)/guides/social-media-management-cost-saudi-arabia/cost-guide-upgrade.css` | 1 | CSS layout / incidental numbers |
| `app/(ar)/guides/social-media-management-cost-saudi-arabia/cost-guide-upgrade.css` | 2 | CSS layout / incidental numbers |
| `app/(ar)/guides/social-media-management-cost-saudi-arabia/decision-upgrade.css` | 1 | CSS layout / incidental numbers |
| `app/(ar)/guides/social-media-management-cost-saudi-arabia/page.tsx` | 13 | Editorial market estimate or competitor example; preserve |
| `app/(ar)/guides/social-media-management-cost-saudi-arabia/page.tsx` | 33 | Editorial market estimate or competitor example; preserve |
| `app/(ar)/guides/social-media-management-cost-saudi-arabia/page.tsx` | 54 | Editorial market estimate or competitor example; preserve |
| `app/(ar)/guides/social-media-management-cost-saudi-arabia/page.tsx` | 55 | Editorial market estimate or competitor example; preserve |
| `app/(ar)/guides/social-media-management-cost-saudi-arabia/page.tsx` | 56 | Editorial market estimate or competitor example; preserve |
| `app/(ar)/guides/social-media-management-cost-saudi-arabia/page.tsx` | 106 | Editorial market estimate or competitor example; preserve |
| `app/(ar)/guides/social-media-management-cost-saudi-arabia/page.tsx` | 123 | Editorial market estimate or competitor example; preserve |
| `app/(ar)/guides/social-media-management-cost-saudi-arabia/page.tsx` | 128 | Editorial market estimate or competitor example; preserve |
| `app/(ar)/guides/social-media-management-cost-saudi-arabia/page.tsx` | 129 | Editorial market estimate or competitor example; preserve |
| `app/(ar)/guides/social-media-management-cost-saudi-arabia/page.tsx` | 130 | Editorial market estimate or competitor example; preserve |
| `app/(ar)/guides/social-media-management-cost-saudi-arabia/page.tsx` | 203 | Editorial market estimate or competitor example; preserve |
| `app/(ar)/guides/website-design-cost-saudi-arabia/website-cost-guide.css` | 3 | CSS layout / incidental numbers |
| `app/(ar)/offers/30-day-content-package/page.tsx` | 83 | ACTION: package price field |
| `app/(ar)/offers/ai-video-production/video-offer-content.ts` | 9 | ACTION: package price field |
| `app/(ar)/offers/ai-video-production/video-offer-content.ts` | 32 | ACTION: package price field |
| `app/(ar)/offers/ai-video-production/video-offer-content.ts` | 55 | ACTION: package price field |
| `app/(ar)/offers/ai-video-production/video-studio.css` | 95 | CSS layout / incidental numbers |
| `app/(ar)/offers/brand-naming/brand-naming-v2.css` | 279 | CSS layout / incidental numbers |
| `app/(ar)/offers/brand-naming/localized-brand-naming-offer.tsx` | 19 | Illustrative comment; remove stale example during integration |
| `app/(ar)/offers/brand-naming/page.tsx` | 18 | ACTION: package price in metadata / FAQ text |
| `app/(ar)/offers/brand-naming/page.tsx` | 88 | ACTION: package price field |
| `app/(ar)/offers/google-ads-launch/page.tsx` | 78 | ACTION: package price field |
| `app/(ar)/offers/instagram-14-day-upgrade/page.tsx` | 62 | ACTION: package price field |
| `app/(ar)/offers/landing-page-package/page.tsx` | 55 | ACTION: package price field |
| `app/(ar)/offers/landing-page-package/page.tsx` | 56 | ACTION: package price field |
| `app/(ar)/offers/offer-sticky-cta.css` | 26 | CSS layout / incidental numbers |
| `app/(ar)/offers/offers-page.css` | 203 | CSS layout / incidental numbers |
| `app/(ar)/offers/offers-page.css` | 206 | CSS layout / incidental numbers |
| `app/(ar)/offers/offers-page.css` | 260 | CSS layout / incidental numbers |
| `app/(ar)/offers/seo-audit/page.tsx` | 89 | ACTION: package price field |
| `app/(ar)/offers/small-business-website/page.tsx` | 91 | ACTION: package price field |
| `app/(ar)/offers/visual-identity/page.tsx` | 67 | ACTION: package price field |
| `app/(ar)/offers/whatsapp-automation-starter/page.tsx` | 56 | ACTION: package price field |
| `app/(ar)/offers/whatsapp-automation-starter/whatsapp-cinematic.css` | 15 | CSS layout / incidental numbers |
| `app/(ar)/paid-ads/paid-ads-cluster.css` | 1 | CSS layout / incidental numbers |
| `app/(ar)/seo-aeo/page.tsx` | 79 | False positive: template interpolation; price component already localized |
| `app/(ar)/seo-aeo/seo-cluster.css` | 5 | CSS layout / incidental numbers |
| `app/(ar)/services/brand-naming/brand-naming-layout.css` | 122 | CSS layout / incidental numbers |
| `app/(ar)/services/brand-naming/brand-naming-layout.css` | 124 | CSS layout / incidental numbers |
| `app/(ar)/services/brand-naming/page.tsx` | 12 | ACTION: package price in metadata / FAQ text |
| `app/(ar)/services/brand-naming/page.tsx` | 34 | ACTION: package price in metadata / FAQ text |
| `app/(ar)/services/brand-naming/page.tsx` | 44 | ACTION: package price field |
| `app/(ar)/services/social-media-content/social-extras.css` | 31 | CSS layout / incidental numbers |
| `app/(ar)/website-design/website-cluster.css` | 18 | CSS layout / incidental numbers |
| `app/(ar)/whatsapp-automation/whatsapp-automation-aeo-upgrade.css` | 1 | CSS layout / incidental numbers |
| `app/(ar)/whatsapp-automation/whatsapp-automation.css` | 8 | CSS layout / incidental numbers |
| `app/(en)/en/offers/30-day-content-package/page.tsx` | 77 | ACTION: package price field |
| `app/(en)/en/offers/brand-naming/page.tsx` | 90 | ACTION: package price field |
| `app/(en)/en/offers/google-ads-launch/page.tsx` | 67 | ACTION: package price field |
| `app/(en)/en/offers/instagram-14-day-upgrade/page.tsx` | 63 | ACTION: package price field |
| `app/(en)/en/offers/landing-page-package/page.tsx` | 63 | ACTION: package price field |
| `app/(en)/en/offers/seo-audit/page.tsx` | 77 | ACTION: package price field |
| `app/(en)/en/offers/small-business-website/page.tsx` | 89 | ACTION: package price field |
| `app/(en)/en/offers/visual-identity/page.tsx` | 77 | ACTION: package price field |
| `app/(en)/en/offers/whatsapp-automation-starter/page.tsx` | 66 | ACTION: package price field |
| `app/components/bidi-text.tsx` | 10 | False positive: date, regex replacement or redirect |
| `app/home-growth-upgrade.css` | 1 | CSS layout / incidental numbers |
| `app/lib/sitemap-lastmod.json` | 56 | False positive: date, regex replacement or redirect |
| `app/lib/sitemap-lastmod.json` | 70 | False positive: date, regex replacement or redirect |
| `public/en/work/bithan/applications.svg` | 1 | Embedded SVG/base64 candidate; not an offer price in text |
| `public/en/work/bithan/evolution.svg` | 1 | Embedded SVG/base64 candidate; not an offer price in text |
| `public/en/work/bithan/hero.svg` | 1 | Embedded SVG/base64 candidate; not an offer price in text |
| `public/en/work/bithan/logo-suite.svg` | 1 | Embedded SVG/base64 candidate; not an offer price in text |
| `public/en/work/bithan/palette.svg` | 1 | Embedded SVG/base64 candidate; not an offer price in text |
| `public/en/work/bithan/sketch.svg` | 1 | Embedded SVG/base64 candidate; not an offer price in text |
| `public/work/bithan/applications.svg` | 1 | Embedded SVG/base64 candidate; not an offer price in text |
| `public/work/bithan/delivery-logos.svg` | 1 | Embedded SVG/base64 candidate; not an offer price in text |
| `public/work/bithan/evolution.svg` | 1 | Embedded SVG/base64 candidate; not an offer price in text |
| `public/work/bithan/flat-variants.svg` | 1 | Embedded SVG/base64 candidate; not an offer price in text |
| `public/work/bithan/hero.svg` | 1 | Embedded SVG/base64 candidate; not an offer price in text |
| `public/work/bithan/logo-suite.svg` | 1 | Embedded SVG/base64 candidate; not an offer price in text |
| `public/work/bithan/palette.svg` | 1 | Embedded SVG/base64 candidate; not an offer price in text |
| `public/work/bithan/sketch.svg` | 1 | Embedded SVG/base64 candidate; not an offer price in text |
| `vercel.json` | 9 | False positive: date, regex replacement or redirect |

## Pricing and offer-reference files (baseline)

These are raw references, including tracking keys and CSS; inspect actual usage before editing.

- `app/(ar)/ai-automation/page.tsx` — lines 5, 222
- `app/(ar)/branding/page.tsx` — lines 5, 224
- `app/(ar)/conversion-rate-optimization/cro-packages.tsx` — lines 5, 19, 20, 26, 27, 32
- `app/(ar)/conversion-rate-optimization/page.tsx` — lines 11, 50, 51, 52, 215, 220, 227
- `app/(ar)/guides/branding-identity-cost-saudi-arabia/page.tsx` — lines 6, 59, 75
- `app/(ar)/guides/how-to-choose-brand-name-saudi-arabia/page.tsx` — lines 6, 35, 50, 69, 70
- `app/(ar)/guides/social-media-management-cost-saudi-arabia/page.tsx` — lines 6, 106, 123, 137, 138
- `app/(ar)/guides/website-design-cost-saudi-arabia/page.tsx` — lines 6, 181
- `app/(ar)/offers/30-day-content-package/page.tsx` — lines 8, 101, 110
- `app/(ar)/offers/ai-video-production/video-localized-price.tsx` — lines 4, 55, 92, 93, 105, 106, 107
- `app/(ar)/offers/ai-video-production/video-offer-content.ts` — lines 8, 31, 54
- `app/(ar)/offers/ai-video-production/video-offer-from-price.tsx` — lines 3, 6
- `app/(ar)/offers/ai-video-production/video-offer-page.tsx` — lines 9, 120, 124
- `app/(ar)/offers/ai-video-production/video-order-widget.tsx` — lines 5, 96, 100, 105, 113, 140, 182
- `app/(ar)/offers/ai-video-production/video-sticky.tsx` — lines 4, 9, 10
- `app/(ar)/offers/brand-naming/localized-brand-naming-offer.tsx` — lines 3, 9, 14, 15, 20, 21
- `app/(ar)/offers/brand-naming/page.tsx` — lines 8, 121, 194
- `app/(ar)/offers/google-ads-launch/localized-google-ads-launch.tsx` — lines 3, 8, 13, 20
- `app/(ar)/offers/google-ads-launch/page.tsx` — lines 8, 112
- `app/(ar)/offers/inline-offer-price.tsx` — lines 4, 8, 9
- `app/(ar)/offers/instagram-14-day-upgrade/localized-instagram-upgrade.tsx` — lines 3, 8, 17, 23
- `app/(ar)/offers/instagram-14-day-upgrade/page.tsx` — lines 8, 96
- `app/(ar)/offers/landing-page-package/localized-landing-offer.tsx` — lines 3, 7, 8, 13, 21
- `app/(ar)/offers/landing-page-package/page.tsx` — lines 9, 12, 83, 91, 113, 120
- `app/(ar)/offers/localized-offer.tsx` — lines 4, 5, 9, 12, 13, 44, 45, 50, 60, 65, 66, 72
- `app/(ar)/offers/name-identity/localized-name-identity.tsx` — lines 3, 16, 21, 22, 23, 35, 41
- `app/(ar)/offers/name-identity/page.tsx` — lines 8, 11, 65, 91
- `app/(ar)/offers/offer-interest-tracker.tsx` — lines 35, 36, 45, 50, 59
- `app/(ar)/offers/offer-pricing.ts` — lines 25, 47, 49, 50, 57, 63, 104, 105, 106
- `app/(ar)/offers/offers-hub-data.ts` — lines 15, 23, 28, 33, 38, 43, 48, 53, 58, 63, 68, 73
- `app/(ar)/offers/offers-hub-price.tsx` — lines 4, 5, 9, 10, 14, 15
- `app/(ar)/offers/offers-hub-summary.ts` — lines 1, 5, 18, 29, 92
- `app/(ar)/offers/offers-hub.css` — lines 210
- `app/(ar)/offers/offers-hub.tsx` — lines 5, 80, 105, 117
- `app/(ar)/offers/seo-audit/localized-seo-audit-offer.tsx` — lines 3, 7, 8, 17, 24
- `app/(ar)/offers/seo-audit/page.tsx` — lines 8, 12, 126, 137
- `app/(ar)/offers/small-business-website/localized-small-website.tsx` — lines 3, 8, 13, 20
- `app/(ar)/offers/small-business-website/page.tsx` — lines 10, 125
- `app/(ar)/offers/use-offer-price.ts` — lines 4, 14, 18, 19, 20
- `app/(ar)/offers/visual-identity/localized-mini-identity.tsx` — lines 3, 8, 17, 25
- `app/(ar)/offers/visual-identity/page.tsx` — lines 11, 99
- `app/(ar)/offers/whatsapp-automation-starter/localized-whatsapp-starter.tsx` — lines 3, 12, 17, 22
- `app/(ar)/offers/whatsapp-automation-starter/page.tsx` — lines 8, 72
- `app/(ar)/seo-aeo/page.tsx` — lines 5, 79
- `app/(ar)/services/brand-naming/localized-naming-price.tsx` — lines 4, 6, 7, 17, 26
- `app/(ar)/services/brand-naming/page.tsx` — lines 2, 57
- `app/(ar)/services/social-media-content/page.tsx` — lines 5, 109
- `app/(ar)/services/social-media-content/social-extras.tsx` — lines 4, 6, 14, 15, 150
- `app/(ar)/website-design/page.tsx` — lines 6, 200
- `app/(en)/en/_en/lib/localized-price.tsx` — lines 10, 26, 27, 54, 88, 89, 90
- `app/(en)/en/_en/parity/offers.tsx` — lines 6, 35, 37
- `app/(en)/en/brand-naming/page.tsx` — lines 6, 97
- `app/(en)/en/branding/page.tsx` — lines 5, 62, 69, 223
- `app/(en)/en/conversion-rate-optimization/cro-packages-en.tsx` — lines 5, 12, 13, 14, 18
- `app/(en)/en/conversion-rate-optimization/page.tsx` — lines 11, 54, 55, 56, 220, 225, 232
- `app/(en)/en/offers/30-day-content-package/page.tsx` — lines 8, 96, 106, 153, 160
- `app/(en)/en/offers/brand-naming/page.tsx` — lines 8, 120, 177, 226
- `app/(en)/en/offers/google-ads-launch/page.tsx` — lines 11, 98, 109, 183
- `app/(en)/en/offers/instagram-14-day-upgrade/page.tsx` — lines 11, 94, 105, 175
- `app/(en)/en/offers/landing-page-package/page.tsx` — lines 12, 86, 94, 116, 123, 149
- `app/(en)/en/offers/name-identity/bundle-saving-en.tsx` — lines 3, 6, 8, 9, 10, 11
- `app/(en)/en/offers/name-identity/page.tsx` — lines 10, 15, 65, 92, 99, 142
- `app/(en)/en/offers/offer-sticky-en.tsx` — lines 5, 10, 20
- `app/(en)/en/offers/seo-audit/page.tsx` — lines 11, 108, 119, 174
- `app/(en)/en/offers/small-business-website/page.tsx` — lines 9, 117, 126, 176
- `app/(en)/en/offers/visual-identity/page.tsx` — lines 9, 106, 114, 168
- `app/(en)/en/offers/whatsapp-automation-starter/page.tsx` — lines 10, 96, 102, 124
- `app/(en)/en/paid-advertising/page.tsx` — lines 6, 199
- `app/(en)/en/seo-geo-aeo/page.tsx` — lines 6, 182
- `app/(en)/en/social-media-content/page.tsx` — lines 7, 101
- `app/(en)/en/website-design/page.tsx` — lines 7, 247, 253
- `app/(en)/en/whatsapp-crm-automation/page.tsx` — lines 7, 122
- `app/(en)/en/work/bithan/page.tsx` — lines 5, 397
- `app/api/offer-popularity/route.ts` — lines 21, 23
- `app/components/home-selected-offers.tsx` — lines 5, 6, 41, 121

## Re-run

`node scripts/qa/pricing-inventory.mjs` in a checked-out repository. The branch-only workflow has read-only repository permissions and no deploy, install or production mutation. This is a discovery tool, not a zero-literal enforcement gate yet.
