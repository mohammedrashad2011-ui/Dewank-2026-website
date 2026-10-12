// Equivalent-page map for the Arabic and English language switch.
// Arabic paths map to their English equivalents where one exists. Any other path falls back to the home page of the
// target language, so the switch never lands on a missing page. Keep these lists in step with the routes in app/.

const arabicToEnglish: Record<string, string> = {
  "/": "/en",
  "/about": "/en/about",
  "/contact": "/en/contact",
  "/services": "/en/services",
  "/offers": "/en/offers",
  "/work": "/en/work",
  "/guides": "/en/guides",
  "/branding": "/en/branding",
  "/digital-marketing": "/en/digital-marketing",
  "/paid-ads": "/en/paid-advertising",
  "/seo-aeo": "/en/seo-geo-aeo",
  "/website-design": "/en/website-design",
  "/whatsapp-automation": "/en/whatsapp-crm-automation",
  "/ai-automation": "/en/ai-automation",
  "/services/social-media-content": "/en/social-media-content",
  "/services/brand-naming": "/en/brand-naming",
};

const englishToArabic: Record<string, string> = Object.fromEntries(
  Object.entries(arabicToEnglish).map(([ar, en]) => [en, ar]),
);

// Pages that exist on both sites under the same path, after the /en prefix is removed (for example /offers/seo-audit).
const sharedPaths = new Set([
  "/about",
  "/contact",
  "/services",
  "/offers",
  "/work",
  "/work/bithan",
  "/guides",
  "/branding",
  "/digital-marketing",
  "/website-design",
  "/ai-automation",
  "/offers/30-day-content-package",
  "/offers/brand-naming",
  "/offers/google-ads-launch",
  "/offers/instagram-14-day-upgrade",
  "/offers/landing-page-package",
  "/offers/mini-visual-identity",
  "/offers/seo-audit",
  "/offers/small-business-website",
  "/offers/whatsapp-automation-starter",
  "/guides/ad-to-whatsapp-booking-journey",
  "/guides/ai-agent-vs-workflow-automation",
  "/guides/google-ads-clicks-no-leads",
  "/guides/google-ads-vs-meta-ads",
  "/guides/marketing-kpis",
  "/guides/marketing-plan-template",
  "/guides/seo-vs-aeo",
  "/guides/social-media-not-generating-leads",
  "/guides/whatsapp-crm-automation",
  "/guides/why-website-does-not-generate-leads",
]);

// Path without a trailing slash, and without a query or hash (usePathname never includes them).
function normalise(pathname: string) {
  return pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
}

// Where the English switch goes from an Arabic page.
export function englishEquivalent(pathname: string) {
  const path = normalise(pathname);
  if (arabicToEnglish[path]) return arabicToEnglish[path];
  const candidate = "/en" + path;
  return sharedPaths.has(path) ? candidate : "/en";
}

// Where the Arabic switch goes from an English page.
export function arabicEquivalent(pathname: string) {
  const path = normalise(pathname);
  if (path === "/en") return "/";
  if (englishToArabic[path]) return englishToArabic[path];
  if (!path.startsWith("/en/")) return "/";
  const candidate = path.slice(3);
  return sharedPaths.has(candidate) ? candidate : "/";
}
