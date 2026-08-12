"use client";

import { usePathname } from "next/navigation";

const whatsappNumber = "97339066649";
const SESSION_KEY = "dewank-whatsapp-intent-clicked";

type Intent = {
  key: string;
  label: string;
  message: string;
};

function resolveIntent(pathname: string): Intent {
  const path = pathname.toLowerCase();

  if (path.includes("google-ads") || path.includes("paid-ads")) {
    return { key: "google_ads", label: "Google Ads", message: "مرحبًا ديوانك، وصلت من صفحة Google Ads وأريد معرفة الخطوة الأنسب لحملتي." };
  }
  if (path.includes("whatsapp") || path.includes("ai-automation")) {
    return { key: "automation", label: "الأتمتة", message: "مرحبًا ديوانك، وصلت من صفحة الأتمتة وأريد معرفة الحل الأنسب لنشاطي." };
  }
  if (path.includes("social-media") || path.includes("30-day-content") || path.includes("instagram")) {
    return { key: "social_media", label: "السوشيال ميديا", message: "مرحبًا ديوانك، وصلت من صفحة السوشيال ميديا وأريد معرفة الباقة أو نطاق الإدارة الأنسب لنشاطي." };
  }
  if (path.includes("website") || path.includes("landing-page")) {
    return { key: "website", label: "تصميم المواقع", message: "مرحبًا ديوانك، وصلت من صفحة تصميم المواقع وأريد معرفة الخيار الأنسب لمشروعي." };
  }
  if (path.includes("seo") || path.includes("aeo")) {
    return { key: "seo", label: "SEO", message: "مرحبًا ديوانك، وصلت من صفحة SEO وأريد معرفة الخطوة الأنسب لتحسين ظهور موقعي." };
  }
  if (path.includes("brand") || path.includes("branding")) {
    return { key: "branding", label: "البراندينج", message: "مرحبًا ديوانك، وصلت من صفحة البراندينج وأريد معرفة الخدمة الأنسب لعلامتي." };
  }

  return { key: "general", label: "اختيار الخدمة", message: "مرحبًا ديوانك، وصلت من الموقع وأريد معرفة الخدمة الأنسب لاحتياجي." };
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
    window.sessionStorage.setItem(SESSION_KEY, "1");
    window.dispatchEvent(new Event("dewank:whatsapp-intent"));
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
      aria-label={`اسأل ديوانك عن ${intent.label} عبر واتساب`}
    >
      <span className="sitewide-whatsapp-icon" aria-hidden="true">
        <svg viewBox="0 0 32 32" role="img">
          <path d="M16 4.2A11.6 11.6 0 0 0 6.1 21.9L4.5 27.6l5.9-1.5A11.6 11.6 0 1 0 16 4.2Zm0 20.9c-1.9 0-3.8-.5-5.4-1.5l-.4-.2-3.5.9.9-3.4-.2-.4A9.3 9.3 0 1 1 16 25.1Zm5.1-7c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.8-.9-3-1.6-4.2-3.7-.3-.6.3-.5.9-1.7.1-.2 0-.4 0-.6l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9 0 1.7 1.2 3.4 1.4 3.6.2.2 2.4 3.7 5.9 5.2 2.2.9 3 .9 4.1.8 1.3-.2 1.7-.8 1.9-1.6.2-.8.2-1.4.1-1.6-.1-.2-.4-.3-.7-.4Z" fill="currentColor"/>
        </svg>
      </span>
      <span className="sitewide-whatsapp-copy">
        <strong>اسألنا عن الخدمة المناسبة</strong>
        <small>{intent.label}</small>
      </span>
      <span className="sitewide-whatsapp-arrow" aria-hidden="true">↗</span>
    </a>
  );
}
