import type { MetadataRoute } from "next";
import { siteUrl } from "./lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "/", priority: 1, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.95, changeFrequency: "monthly" as const },
    { path: "/branding", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/digital-marketing", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/paid-ads", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/website-design", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/seo-aeo", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/whatsapp-automation", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/ai-automation", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/ats-cv", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/work", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" as const },
    { path: "/guides", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/guides/website-design-cost-saudi-arabia", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/guides/why-website-does-not-generate-leads", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/guides/choose-digital-marketing-company-saudi-arabia", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/guides/digital-marketing-cost-saudi-arabia", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/guides/social-media-management-cost-saudi-arabia", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/guides/social-media-not-generating-leads", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/guides/seo-vs-aeo", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    changeFrequency,
    priority,
  }));
}
