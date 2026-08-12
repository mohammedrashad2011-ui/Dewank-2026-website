"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "dewank-instagram-guides-popup-dismissed-v1";
const DISMISS_FOR_MS = 7 * 24 * 60 * 60 * 1000;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export default function InstagramFollowCard() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);

    if (!pathname.startsWith("/guides/")) return;
    if (/instagram\.com|l\.instagram\.com/i.test(document.referrer)) return;

    const dismissedAt = Number(window.localStorage.getItem(STORAGE_KEY) || 0);
    if (Date.now() - dismissedAt < DISMISS_FOR_MS) return;

    let shown = false;
    const reveal = () => {
      if (shown) return;
      shown = true;
      setVisible(true);
      window.removeEventListener("scroll", onScroll);
    };

    const onScroll = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      if (available > 0 && window.scrollY / available >= 0.52) reveal();
    };

    const timer = window.setTimeout(reveal, 16000);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  if (!visible) return null;

  function dismiss() {
    window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
    setVisible(false);
  }

  function trackInstagramClick() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "instagram_guides_popup_click",
      source_path: pathname,
      cta_location: "guides_follow_popup",
    });
    dismiss();
  }

  return (
    <aside className="instagram-guides-popup" aria-label="تابع ديوانك على إنستجرام">
      <button className="instagram-guides-close" type="button" onClick={dismiss} aria-label="إغلاق">×</button>
      <span className="instagram-guides-mark" aria-hidden="true">◎</span>
      <div className="instagram-guides-copy">
        <small>DEWANK / INSTAGRAM</small>
        <strong>استفدت من الدليل؟</strong>
        <span>تابع ديوانك لأفكار أقصر وتطبيقات عملية.</span>
      </div>
      <a
        href="https://www.instagram.com/dewank_marketing"
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackInstagramClick}
      >
        تابعنا <span aria-hidden="true">↗</span>
      </a>
    </aside>
  );
}
