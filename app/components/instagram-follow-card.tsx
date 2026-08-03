"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "dewank-instagram-card-dismissed";
const DISMISS_FOR_MS = 7 * 24 * 60 * 60 * 1000;

export default function InstagramFollowCard() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pathname === "/contact") return;

    const dismissedAt = Number(window.localStorage.getItem(STORAGE_KEY) || 0);
    const recentlyDismissed = Date.now() - dismissedAt < DISMISS_FOR_MS;
    const cameFromInstagram = /instagram\.com|l\.instagram\.com/i.test(document.referrer);

    if (recentlyDismissed || cameFromInstagram) return;

    let hasShown = false;
    const reveal = () => {
      if (hasShown) return;
      hasShown = true;
      setVisible(true);
      window.removeEventListener("scroll", handleScroll);
    };
    const handleScroll = () => {
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (pageHeight > 0 && window.scrollY / pageHeight >= 0.5) reveal();
    };

    const timer = window.setTimeout(reveal, 22000);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const dismiss = () => {
    window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside className="instagram-follow-card" aria-label="تابع ديوانك على إنستجرام">
      <button className="instagram-card-close" type="button" onClick={dismiss} aria-label="إغلاق">×</button>
      <div className="instagram-card-mark" aria-hidden="true" />
      <div className="instagram-card-copy">
        <small>DEWANK ON INSTAGRAM</small>
        <strong>أفكار عملية تساعد مشروعك على النمو.</strong>
        <span>تابع ديوانك للمزيد من الأفكار والتطبيقات.</span>
      </div>
      <a
        className="instagram-card-action"
        href="https://www.instagram.com/dewank_marketing"
        target="_blank"
        rel="noopener noreferrer"
        onClick={dismiss}
      >
        تابعنا <span aria-hidden="true">↗</span>
      </a>
    </aside>
  );
}
