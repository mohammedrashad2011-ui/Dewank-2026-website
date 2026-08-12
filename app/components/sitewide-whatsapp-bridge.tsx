"use client";

import { usePathname } from "next/navigation";

const whatsappNumber = "97339066649";

type Intent = {
  key: string;
  label: string;
  message: string;
};

function resolveIntent(pathname: string): Intent {
  const path = pathname.toLowerCase();

  if (path.includes("google-ads") || path.includes("paid-ads")) {
    return { key: "google_ads", label: "اسأل عن Google Ads", message: "مرحبًا ديوانك، وصلت من صفحة Google Ads وأريد معرفة الخطوة الأنسب لحملتي." };
  }
  if (path.includes("whatsapp") || path.includes("ai-automation")) {
    return { key: "automation", label: "اسأل عن الأتمتة", message: "مرحبًا ديوانك، وصلت من صفحة الأتمتة وأريد معرفة الحل الأنسب لنشاطي." };
  }
  if (path.includes("social-media") || path.includes("30-day-content") || path.includes("instagram")) {
    return { key: "social_media", label: "اسأل عن السوشيال", message: "مرحبًا ديوانك، وصلت من صفحة السوشيال ميديا وأريد معرفة الباقة أو نطاق الإدارة الأنسب لنشاطي." };
  }
  if (path.includes("website") || path.includes("landing-page")) {
    return { key: "website", label: "اسأل عن الموقع", message: "مرحبًا ديوانك، وصلت من صفحة تصميم المواقع وأريد معرفة الخيار الأنسب لمشروعي." };
  }
  if (path.includes("seo") || path.includes("aeo")) {
    return { key: "seo", label: "اسأل عن SEO", message: "مرحبًا ديوانك، وصلت من صفحة SEO وأريد معرفة الخطوة الأنسب لتحسين ظهور موقعي." };
  }
  if (path.includes("brand") || path.includes("branding")) {
    return { key: "branding", label: "اسأل عن البراند", message: "مرحبًا ديوانك، وصلت من صفحة البراندينج وأريد معرفة الخدمة الأنسب لعلامتي." };
  }

  return { key: "general", label: "اسأل ديوانك على واتساب", message: "مرحبًا ديوانك، وصلت من الموقع وأريد معرفة الخدمة الأنسب لاحتياجي." };
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export default function SitewideWhatsAppBridge() {
  const pathname = usePathname();

  if (pathname === "/contact") return null;

  const intent = resolveIntent(pathname);
  const message = `${intent.message}\n\nالصفحة: ${pathname}`;
  const href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  function trackClick() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "sitewide_whatsapp_click",
      lead_intent: intent.key,
      source_path: pathname,
      cta_location: "sitewide_bridge",
    });
  }

  return (
    <a
      className="sitewide-whatsapp-bridge"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackClick}
      aria-label={`${intent.label} عبر واتساب`}
    >
      <span className="sitewide-whatsapp-dot" aria-hidden="true">●</span>
      <span>{intent.label}</span>
      <small>رد مباشر</small>
    </a>
  );
}
