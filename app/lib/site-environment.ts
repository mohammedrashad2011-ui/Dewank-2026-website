// Site environment for this build. It decides indexing (robots, sitemap, hreflang) and is independent of the analytics
// decision, although both resolve the same way.
//
//   production  The live site. Includes the Hostinger-served production site, which sets no VERCEL_ENV.
//   preview     Vercel preview and development deployments, or an explicit override. Nothing built here may be indexed.
//
// Override (build time): DEWANK_SITE_ENV=production or DEWANK_SITE_ENV=preview.
// Otherwise VERCEL_ENV decides: "preview" or "development" -> preview; "production" or unset -> production.
//
// A build also counts as preview when the analytics mode is preview (DEWANK_ANALYTICS_MODE=preview). That is the
// conservative direction: a mistaken preview setting can only hide pages from search, never expose them.

export type SiteEnvironment = "production" | "preview";

function resolveSiteEnvironment(): SiteEnvironment {
  const override = process.env.DEWANK_SITE_ENV;
  if (override === "production" || override === "preview") return override;
  const vercelEnv = process.env.VERCEL_ENV;
  return vercelEnv === "preview" || vercelEnv === "development" ? "preview" : "production";
}

export const SITE_ENVIRONMENT: SiteEnvironment = resolveSiteEnvironment();

export const isPreviewBuild =
  SITE_ENVIRONMENT === "preview" || process.env.DEWANK_ANALYTICS_MODE === "preview";
