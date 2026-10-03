# CLAUDE.md

Operating rules for Claude Code in this repository. Durable execution rules only; business context lives outside the repo.

## Before starting

- Before any important task (revenue, CRO, website, SEO, mobile, analytics, production), inspect the available skills and tools and use every relevant one.
- If a missing skill or tool would materially affect quality, safety, measurement or revenue impact, say so before implementing.
- Never install untrusted third-party skills or plugins without explicit approval.

## Priorities

- Prioritize changes by revenue and conversion impact.
- Make the smallest safe change that achieves the goal.
- No unrelated refactors, cleanups or redesigns in the same change.

## Regression safety

- Mobile-first by default: design and verify for phone widths first, then desktop.
- Preserve existing working behavior, including:
  - tracking (dataLayer events, GTM/GA4, Meta Pixel, WhatsApp click tracking)
  - offer pricing and currency logic (`app/offers/offer-pricing.ts` and its consumers)
  - SEO (titles, meta descriptions, canonicals, structured data, internal links, sitemap)
  - accessibility (semantics, labels, focus states, contrast)
- State explicitly what a change does not touch.

## Before merge

- Work on a separate branch and open a pull request; never commit directly to `main`.
- Run a production build (`npm run build`) with dependencies installed from the lockfile (`npm ci`), not a stale `node_modules`.
- Check the rendered HTML or a preview for every affected page.
- Test affected flows on mobile and desktop.
- Do not merge until the change has been built, tested and previewed, and merging has been explicitly approved.
