import type { MetadataRoute } from "next";
import { siteUrl } from "./lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "/", priority: 1, changeFrequency: "weekly" as const },

    // Core service hub and service pages
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/branding", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/services/brand-naming", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/services/social-media-content", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/digital-marketing", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/paid-ads", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/website-design", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/seo-aeo", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/whatsapp-automation", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/ai-automation", priority: 0.9, changeFrequency: "monthly" as const },

    // Offers hub and offer landing pages
    { path: "/offers", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/offers/30-day-content-package", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/offers/landing-page-package", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/offers/seo-audit", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/offers/brand-naming", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/offers/whatsapp-automation-starter", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/offers/mini-visual-identity", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/offers/google-ads-launch", priority: 0.85, changeFrequency: "weekly" as const },

    // Trust and company pages
    { path: "/work", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" as const },

    // Independent professional service
    { path: "/ats-cv", priority: 0.75, changeFrequency: "monthly" as const },

    // Growth guides hub and articles
    { path: "/guides", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/guides/branding-identity-cost-saudi-arabia", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/guides/how-to-choose-brand-name-saudi-arabia", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/guides/website-design-cost-saudi-arabia", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/guides/why-website-does-not-generate-leads", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/guides/choose-digital-marketing-company-saudi-arabia", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/guides/digital-marketing-cost-saudi-arabia", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/guides/social-media-management-cost-saudi-arabia", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/guides/social-media-not-generating-leads", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/guides/seo-vs-aeo", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/guides/whatsapp-crm-automation", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/guides/whatsapp-crm-automation-cost-saudi-arabia", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/guides/best-crm-whatsapp-saudi-arabia", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/guides/ad-to-whatsapp-booking-journey", priority: 0.75, changeFrequency: "monthly" as const },
  ];

  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    changeFrequency,
    priority,
  }));
}
