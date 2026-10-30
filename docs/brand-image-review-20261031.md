# Brand image review — 2026-10-31

Base: main b1af2c3 (merged PR #204). Review only; no production release.

## Evidence and scope

The supplied Google-result screenshot shows a cropped Arabic wordmark on the right, distinct from the intact D favicon beside the site name. The crop visually resembles the existing 1200x630 `dewank-social-preview-2026-07.png`. Live homepage HTML was checked: OG/Twitter and Organization.image referenced that image, while Organization.logo referenced `dewank-logo.png`. This does not prove which image Google used or reproduce the current personalized result. No guaranteed thumbnail replacement or timing is claimed.

All three original attached PNGs were accessible through the referenced chat's temporary attachment paths and inspected. The selected original is `1(2).png` (2000x2000), preserving its monogram, ring, colors and texture. Generated alternatives under /mnt/data were not accessible and were not used. The bilingual wordmark is reused from the existing published social image without redrawing or retyping it.

## Assets and metadata

- `public/brand/dewank-organization-1200.png`: opaque navy 1200x1200 PNG, original monogram above the existing Arabic/English wordmark. Artwork centered, approximately 15% top and at least 12% bottom clearance; horizontal clearance exceeds 18% because the composition is tall. No stretching or generated logo detail.
- `public/brand/dewank-home-og-1200x630.png`: separate navy 1200x630 PNG with the existing bilingual wordmark centered inside a 450px-wide area. A centered 630x630 crop retains the complete lockup with approximately 14% side clearance. Arbitrary off-center crops are outside our control.
- AR and EN Organization nodes share the square image for logo (ImageObject with URL, contentUrl and dimensions) and image. Existing entity IDs, WebSite nodes, language rules, canonicals, hreflang and robots remain intact.
- Only the Arabic homepage opts into the new OG/Twitter card through the existing metadata override. Other Arabic page cards, English OG/Twitter, favicons, visible header/footer logos, copy, CTA, analytics and layouts are unchanged.
- Assets are metadata-only; no extra image request is added to the visible page by this change. Existing robots rules allow /brand/; preview indexing protection is unchanged.

Google guidance: https://developers.google.com/search/docs/appearance/structured-data/organization

After an approved merge and release, verify the domain image URLs, then optionally request homepage reindexing in Search Console. Neither reindexing nor markup forces Google's right-side image selection.

## Validation

- Node 22.23.4 production build passed (94/94 static pages), including TypeScript. Initial restricted build hit a OneDrive EPERM; rerun with writable access passed.
- Browser checks of / and /en at 390px and 1440px passed: HTTP 200, correct RTL/LTR, no horizontal overflow, valid parsed JSON-LD, shared 1200px logo/image, intended OG/Twitter URLs. Screenshots inspected.
- Both new local image URLs return HTTP 200 and image/png: square 406,150 bytes; OG 35,055 bytes. These images are metadata references, not visible page payload.
- git diff --check passed. No PageSpeed score or Google Rich Results Test result is claimed.
