// Analytics mode for this deployment. It is decided at build time, is explicit, and is documented in
// docs/analytics-environments.md.
//
//   production  GTM, GA4 and Meta Pixel load with the existing production IDs. Conversion events go to production.
//   preview     No vendor script is loaded. dataLayer events are still pushed in the browser, so the instrumentation can be
//               tested locally without sending anything to production properties.
//
// Override (build time): DEWANK_ANALYTICS_MODE=production or DEWANK_ANALYTICS_MODE=preview.
// Otherwise Vercel's VERCEL_ENV decides:
//   "preview" or "development" -> preview
//   "production" or unset      -> production. A host that is not Vercel (for example the Hostinger-served production
//                                 site) sets no VERCEL_ENV, so it keeps tracking. Preview is never the default.

export type AnalyticsMode = "production" | "preview";

function resolveAnalyticsMode(): AnalyticsMode {
  const override = process.env.DEWANK_ANALYTICS_MODE;
  if (override === "production" || override === "preview") return override;
  const vercelEnv = process.env.VERCEL_ENV;
  return vercelEnv === "preview" || vercelEnv === "development" ? "preview" : "production";
}

export const ANALYTICS_MODE: AnalyticsMode = resolveAnalyticsMode();

// True only in production mode. Gates the vendor scripts and their noscript fallbacks, never the dataLayer pushes.
export const vendorTrackingEnabled = ANALYTICS_MODE === "production";
