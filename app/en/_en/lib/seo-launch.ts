// English launch data. Nothing here is emitted yet: English pages stay noindex in Preview, and no English sitemap route
// exists until launch is approved. This file records the exact sets that the launch commit will use, so they can be
// reviewed before anything goes live.

export const siteUrl = "https://dewank.com";

// Flip to true only in the approved launch commit, together with removing the English noindex in enMetadata.
export const ENGLISH_LAUNCH_ENABLED = false;

// English routes that are genuinely the same page as an Arabic route (translated, same purpose and offer). Pairs are
// used for hreflang only when BOTH sides declare them: the Arabic pages need the reciprocal entries too (see the launch
// plan). Routes without an equivalent are deliberately absent.
export const englishToArabic: Record<string, string> = {
  "/en": "/",
  "/en/services": "/services",
  "/en/about": "/about",
  "/en/contact": "/contact",
  "/en/work": "/work",
  "/en/work/bithan": "/work/bithan",
  "/en/offers": "/offers",
  "/en/offers/30-day-content-package": "/offers/30-day-content-package",
  "/en/offers/landing-page-package": "/offers/landing-page-package",
  "/en/offers/seo-audit": "/offers/seo-audit",
  "/en/offers/brand-naming": "/offers/brand-naming",
  "/en/offers/whatsapp-automation-starter": "/offers/whatsapp-automation-starter",
  "/en/offers/mini-visual-identity": "/offers/mini-visual-identity",
  "/en/offers/google-ads-launch": "/offers/google-ads-launch",
  "/en/offers/instagram-14-day-upgrade": "/offers/instagram-14-day-upgrade",
  "/en/offers/small-business-website": "/offers/small-business-website",
  "/en/guides": "/guides",
  "/en/guides/marketing-plan-template": "/guides/marketing-plan-template",
  "/en/guides/marketing-kpis": "/guides/marketing-kpis",
  "/en/guides/google-ads-clicks-no-leads": "/guides/google-ads-clicks-no-leads",
  "/en/guides/google-ads-vs-meta-ads": "/guides/google-ads-vs-meta-ads",
  "/en/guides/seo-vs-aeo": "/guides/seo-vs-aeo",
  "/en/guides/ai-agent-vs-workflow-automation": "/guides/ai-agent-vs-workflow-automation",
  "/en/guides/why-website-does-not-generate-leads": "/guides/why-website-does-not-generate-leads",
  "/en/guides/social-media-not-generating-leads": "/guides/social-media-not-generating-leads",
  "/en/guides/ad-to-whatsapp-booking-journey": "/guides/ad-to-whatsapp-booking-journey",
  "/en/guides/whatsapp-crm-automation": "/guides/whatsapp-crm-automation",
  "/en/brand-naming": "/services/brand-naming",
  "/en/branding": "/branding",
  "/en/digital-marketing": "/digital-marketing",
  "/en/paid-advertising": "/paid-ads",
  "/en/seo-geo-aeo": "/seo-aeo",
  "/en/website-design": "/website-design",
  "/en/whatsapp-crm-automation": "/whatsapp-automation",
  "/en/ai-automation": "/ai-automation",
  "/en/social-media-content": "/services/social-media-content",
};

// Deliberately without an Arabic equivalent: /en/privacy (the Arabic site has no privacy page to pair with) and
// /en/riyadh-marketing-agency (a city page with no Arabic counterpart; its own production indexing is unchanged).

// Proposed x-default: the Arabic homepage, which is the site's primary entry point. Requires approval (see plan).
export const proposedXDefault = `${siteUrl}/`;

// English sitemap entries for the launch commit. Riyadh stays in the root sitemap as it is today.
export const englishSitemapPaths = Object.keys(englishToArabic);
