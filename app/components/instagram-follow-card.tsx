"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";

const WHATSAPP_SESSION_KEY = "dewank-whatsapp-intent-clicked";

type InstagramContext = {
  key: string;
  label: string;
};

function resolveContext(pathname: string): InstagramContext {
  const path = pathname.toLowerCase();

  if (path.includes("google-ads") || path.includes("paid-ads")) return { key: "paid_ads", label: "تكتيكات إعلانية قصيرة على Instagram" };
  if (path.includes("seo") || path.includes("aeo")) return { key: "seo", label: "أفكار SEO أقصر على Instagram" };
  if (path.includes("social-media") || path.includes("content")) return { key: "social_media", label: "أفكار محتوى يومية على Instagram" };
  if (path.includes("whatsapp") || path.includes("automation")) return { key: "automation", label: "أفكار أتمتة عملية على Instagram" };
  if (path.includes("website") || path.includes("landing-page")) return { key: "website", label: "أفكار مواقع وتحويل على Instagram" };
  if (path.includes("brand")) return { key: "branding", label: "أفكار براندينج أقصر على Instagram" };

  return { key: "growth", label: "أفكار نمو عملية على Instagram" };
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export default function InstagramFollowCard() {
  const pathname = usePathname();
  const [host, setHost] = useState<HTMLElement | null>(null);
  const [suppressed, setSuppressed] = useState(false);

  useEffect(() => {
    setHost(null);
    setSuppressed(false);

    if (pathname === "/contact" || pathname.startsWith("/offers")) return;
    if (/instagram\.com|l\.instagram\.com/i.test(document.referrer)) return;
    if (window.sessionStorage.getItem(WHATSAPP_SESSION_KEY) === "1") return;

    const main = document.querySelector("main");
    const footer = main?.querySelector(".site-footer");
    if (!main || !footer) return;

    const portalHost = document.createElement("div");
    portalHost.className = "instagram-micro-rail-host";
    footer.insertAdjacentElement("beforebegin", portalHost);
    setHost(portalHost);

    const hideForWhatsApp = () => setSuppressed(true);
    window.addEventListener("dewank:whatsapp-intent", hideForWhatsApp);

    return () => {
      window.removeEventListener("dewank:whatsapp-intent", hideForWhatsApp);
      portalHost.remove();
    };
  }, [pathname]);

  if (!host || suppressed) return null;

  const context = resolveContext(pathname);

  function trackInstagramClick() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "instagram_micro_rail_click",
      source_path: pathname,
      content_context: context.key,
      cta_location: "pre_footer_micro_rail",
    });
  }

  return createPortal(
    <aside className="instagram-micro-rail shell" aria-label="تابع ديوانك على إنستجرام">
      <span className="instagram-micro-mark" aria-hidden="true">◎</span>
      <div className="instagram-micro-copy">
        <strong>{context.label}</strong>
        <small>@dewank_marketing</small>
      </div>
      <a
        href="https://www.instagram.com/dewank_marketing"
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackInstagramClick}
      >
        تابع ديوانك <span aria-hidden="true">↗</span>
      </a>
    </aside>,
    host,
  );
}
