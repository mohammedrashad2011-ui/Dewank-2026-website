import type { MetadataRoute } from "next";
import { siteUrl } from "./lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
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
    { path: "/ats-cv", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/work", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" as const },
  ];

  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
