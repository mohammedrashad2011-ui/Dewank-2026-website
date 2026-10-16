"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import "./sitewide-whatsapp-bridge.css";

const whatsappNumber = "97339066649";
const SESSION_KEY = "dewank-whatsapp-intent-clicked";
const COLLAPSE_KEY = "dewank-whatsapp-collapsed";

// Intent keys are the conversion keys sent to the dataLayer (lead_intent). They are identical in both languages,
// so analytics segments do not change. Only the visible copy is localized.
type IntentKey = "google_ads" | "automation" | "social_media" | "website" | "seo" | "branding" | "general";

type Intent = {
  key: IntentKey;
  label: string;
  message: string;
};

type Copy = {
  dir: "rtl" | "ltr";
  title: string;
  collapsedAria: (label: string) => string;
  minimize: string;
  expand: string;
  pageLabel: string;
  intents: Record<IntentKey, { label: string; message: string }>;
};

const copy: Record<"ar" | "en", Copy> = {
  ar: {
    dir: "rtl",
    title: "اسألنا عن الخدمة المناسبة",
    collapsedAria: (label) => `تواصل مع ديوانك عن ${label} عبر واتساب`,
    minimize: "تصغير زر واتساب",
    expand: "توسيع زر واتساب",
    pageLabel: "الصفحة",
    intents: {
      google_ads: { label: "Google Ads", message: "مرحبًا ديوانك، وصلت من صفحة Google Ads وأريد معرفة الخطوة الأنسب لحملتي." },
      automation: { label: "الأتمتة", message: "مرحبًا ديوانك، وصلت من صفحة الأتمتة وأريد معرفة الحل الأنسب لنشاطي." },
      social_media: { label: "السوشيال ميديا", message: "مرحبًا ديوانك، وصلت من صفحة السوشيال ميديا وأريد معرفة الباقة أو نطاق الإدارة الأنسب لنشاطي." },
      website: { label: "تصميم المواقع", message: "مرحبًا ديوانك، وصلت من صفحة تصميم المواقع وأريد معرفة الخيار الأنسب لمشروعي." },
      seo: { label: "SEO", message: "مرحبًا ديوانك، وصلت من صفحة SEO وأريد معرفة الخطوة الأنسب لتحسين ظهور موقعي." },
      branding: { label: "البراندينج", message: "مرحبًا ديوانك، وصلت من صفحة البراندينج وأريد معرفة الخدمة الأنسب لعلامتي." },
      general: { label: "اختيار الخدمة", message: "مرحبًا ديوانك، وصلت من الموقع وأريد معرفة الخدمة الأنسب لاحتياجي." },
    },
  },
  en: {
    dir: "ltr",
    title: "Ask us which service fits",
    collapsedAria: (label) => `Talk to Dewank about ${label} on WhatsApp`,
    minimize: "Minimise the WhatsApp button",
    expand: "Expand the WhatsApp button",
    pageLabel: "Page",
    intents: {
      google_ads: { label: "Google Ads", message: "Hello Dewank, I came from the Google Ads page and would like to know the best next step for my campaign." },
      automation: { label: "Automation", message: "Hello Dewank, I came from the automation page and would like to know the right solution for my business." },
      social_media: { label: "Social media", message: "Hello Dewank, I came from the social media page and would like to know the right package or scope for my business." },
      website: { label: "Websites", message: "Hello Dewank, I came from the website design page and would like to know the right option for my project." },
      seo: { label: "SEO", message: "Hello Dewank, I came from the SEO page and would like to know the best next step to improve my website's visibility." },
      branding: { label: "Branding", message: "Hello Dewank, I came from the branding page and would like to know the right service for my brand." },
      general: { label: "Choose a service", message: "Hello Dewank, I came from your website and would like to know which service fits my business." },
    },
  },
};

// English pages live under /en. Matching is by path, so each language gets its own copy and direction.
function isEnglishPath(pathname: string) {
  return pathname === "/en" || pathname.startsWith("/en/");
}

// Same keyword rules as before. They are applied to the path, so the English routes resolve to the same keys.
function resolveIntentKey(pathname: string): IntentKey {
  const path = pathname.toLowerCase();

  if (path.includes("google-ads") || path.includes("paid-ads")) return "google_ads";
  if (path.includes("whatsapp") || path.includes("ai-automation")) return "automation";
  if (path.includes("social-media") || path.includes("30-day-content") || path.includes("instagram")) return "social_media";
  if (path.includes("website") || path.includes("landing-page")) return "website";
  if (path.includes("seo") || path.includes("aeo")) return "seo";
  if (path.includes("brand") || path.includes("branding")) return "branding";
  return "general";
}

function resolveIntent(pathname: string): Intent {
  const key = resolveIntentKey(pathname);
  const language = copy[isEnglishPath(pathname) ? "en" : "ar"];
  return { key, label: language.intents[key].label, message: language.intents[key].message };
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

// Adds one event to the dataLayer. The event names and fields are the existing conversion events.
function pushDataLayerEvent(event: Record<string, unknown>) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" role="img" aria-hidden="true">
      <path d="M16 4.2A11.6 11.6 0 0 0 6.1 21.9L4.5 27.6l5.9-1.5A11.6 11.6 0 1 0 16 4.2Zm0 20.9c-1.9 0-3.8-.5-5.4-1.5l-.4-.2-3.5.9.9-3.4-.2-.4A9.3 9.3 0 1 1 16 25.1Zm5.1-7c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.8-.9-3-1.6-4.2-3.7-.3-.6.3-.5.9-1.7.1-.2 0-.4 0-.6l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9 0 1.7 1.2 3.4 1.4 3.6.2.2 2.4 3.7 5.9 5.2 2.2.9 3 .9 4.1.8 1.3-.2 1.7-.8 1.9-1.6.2-.8.2-1.4.1-1.6-.1-.2-.4-.3-.7-.4Z" fill="currentColor"/>
    </svg>
  );
}

// The widget is loaded with ssr: false (deferred-client-layer.tsx), so the saved state is read on the client during the
// first render. This avoids a state update inside an effect and cannot cause a hydration mismatch.
function readCollapsed(): boolean {
  try {
    return window.localStorage.getItem(COLLAPSE_KEY) === "1";
  } catch {
    return false;
  }
}

export default function SitewideWhatsAppBridge() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(readCollapsed);

  // Same hidden routes as before. The Arabic guides hide the widget because of the Instagram popup, which English guides do
  // not have, so English guides keep the widget with English copy.
  if (pathname === "/contact" || pathname === "/en/contact" || pathname === "/privacy" || pathname === "/en/privacy" || pathname.startsWith("/guides/")) return null;

  const english = isEnglishPath(pathname);
  const language = copy[english ? "en" : "ar"];
  // Mobile hides the widget on the same pages in both languages. The Riyadh landing page is added because the widget covers its primary CTA on phones.
  // The two CRO pages are added because the widget covers the package cards and their WhatsApp buttons on phones. Those pages have their own WhatsApp buttons.
  const mobileSuppressed = ["/", "/services", "/digital-marketing", "/en", "/en/services", "/en/digital-marketing", "/en/riyadh-marketing-agency", "/conversion-rate-optimization", "/en/conversion-rate-optimization"].includes(pathname);
  const intent = resolveIntent(pathname);
  const message = `${intent.message}\n\n${language.pageLabel}: ${pathname}`;
  const href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  function trackClick() {
    window.sessionStorage.setItem(SESSION_KEY, "1");
    window.dispatchEvent(new Event("dewank:whatsapp-intent"));
    pushDataLayerEvent({
      event: "sitewide_whatsapp_click",
      lead_intent: intent.key,
      source_path: pathname,
      cta_location: collapsed ? "sitewide_icon" : "sitewide_bridge",
    });
  }

  function minimize() {
    window.localStorage.setItem(COLLAPSE_KEY, "1");
    setCollapsed(true);
  }

  function expand() {
    window.localStorage.removeItem(COLLAPSE_KEY);
    setCollapsed(false);
  }

  if (collapsed) {
    return (
      <div dir={language.dir} className={`sitewide-whatsapp-collapsed${mobileSuppressed ? " mobile-suppress-whatsapp" : ""}`}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackClick}
          aria-label={language.collapsedAria(intent.label)}
          className="sitewide-whatsapp-icon-only"
        >
          <WhatsAppIcon />
        </a>
        <button type="button" onClick={expand} aria-label={language.expand} className="sitewide-whatsapp-expand">＋</button>
      </div>
    );
  }

  return (
    <div dir={language.dir} className={`sitewide-whatsapp-wrap${mobileSuppressed ? " mobile-suppress-whatsapp" : ""}`}>
      <button type="button" className="sitewide-whatsapp-minimize" onClick={minimize} aria-label={language.minimize}>−</button>
      <a
        className="sitewide-whatsapp-bridge"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackClick}
      >
        <span className="sitewide-whatsapp-icon" aria-hidden="true"><WhatsAppIcon /></span>
        <span className="sitewide-whatsapp-copy">
          <strong>{language.title}</strong>
          <small>{intent.label}</small>
        </span>
        <span className="sitewide-whatsapp-arrow" aria-hidden="true">↗</span>
      </a>
    </div>
  );
}
