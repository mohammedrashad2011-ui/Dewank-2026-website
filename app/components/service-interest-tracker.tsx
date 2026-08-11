"use client";

import { useEffect } from "react";

const serviceMap: Record<string, { key: string; name: string; category: string }> = {
  "/branding": { key: "branding", name: "استراتيجية البراند والهوية", category: "brand" },
  "/services/brand-naming": { key: "brand-naming", name: "تسمية العلامة", category: "brand" },
  "/services/social-media-content": { key: "social-media-content", name: "السوشيال ميديا وصناعة المحتوى", category: "growth" },
  "/digital-marketing": { key: "digital-marketing", name: "استراتيجية التسويق الرقمي", category: "growth" },
  "/paid-ads": { key: "paid-ads", name: "إعلانات Meta وGoogle", category: "growth" },
  "/website-design": { key: "website-design", name: "تصميم المواقع وتحسين التحويل", category: "web" },
  "/offers/landing-page-package": { key: "landing-page", name: "صفحات الهبوط والمبيعات", category: "web" },
  "/seo-aeo": { key: "seo-aeo", name: "SEO وAEO", category: "web" },
  "/contact": { key: "analytics", name: "التحليلات وتتبع التحويلات", category: "web" },
  "/whatsapp-automation": { key: "whatsapp-automation", name: "أتمتة واتساب وCRM", category: "automation" },
  "/ai-automation": { key: "ai-automation", name: "أتمتة الذكاء الاصطناعي", category: "automation" },
  "/ats-cv": { key: "ats-cv", name: "ATS CV وCareer Branding", category: "career" },
};

const dedupeMs = 30 * 60 * 1000;
const storagePrefix = "dewank_service_click_v1:";

export default function ServiceInterestTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>(".service-detail .detail-link") : null;
      if (!target) return;

      let pathname = "";
      try {
        pathname = new URL(target.href, window.location.origin).pathname.replace(/\/$/, "") || "/";
      } catch {
        return;
      }

      const service = serviceMap[pathname];
      if (!service) return;

      (window as Window & { dataLayer?: Array<Record<string, unknown>> }).dataLayer?.push({
        event: "service_select",
        service_key: service.key,
        service_name: service.name,
        service_category: service.category,
        service_source: "services_page",
      });

      const storageKey = `${storagePrefix}${service.key}`;
      const now = Date.now();
      const last = Number(window.localStorage.getItem(storageKey) || 0);
      if (now - last < dedupeMs) return;
      window.localStorage.setItem(storageKey, String(now));

      void fetch("/api/service-popularity", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          service_key: service.key,
          service_name: service.name,
          service_category: service.category,
        }),
        keepalive: true,
        cache: "no-store",
      }).catch(() => {});
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
