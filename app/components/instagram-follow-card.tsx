"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "./instagram-follow-card.css";

const STORAGE_KEY = "dewank-instagram-guides-popup-dismissed-v1";
const DISMISS_FOR_MS = 7 * 24 * 60 * 60 * 1000;

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.25" cy="6.75" r="1.2" fill="currentColor" />
    </svg>
  );
}

function usesOffersRail(pathname: string) {
  return pathname === "/" || pathname === "/services" || pathname === "/digital-marketing";
}

function offerLabel(pathname: string) {
  if (pathname === "/") return "اكتشف العروض الحالية";
  return "شوف العروض المناسبة لك";
}

export default function InstagramFollowCard() {
  const pathname = usePathname();
  const [instagramVisible, setInstagramVisible] = useState(false);
  const [offersVisible, setOffersVisible] = useState(false);

  useEffect(() => {
    setInstagramVisible(false);
    setOffersVisible(false);

    const shouldShowOffersRail = usesOffersRail(pathname);
    const offerScroll = () => {
      if (!shouldShowOffersRail) return;
      const available = document.documentElement.scrollHeight - window.innerHeight;
      if (available > 0 && window.scrollY / available >= 0.11) setOffersVisible(true);
    };

    if (shouldShowOffersRail) {
      window.addEventListener("scroll", offerScroll, { passive: true });
      offerScroll();
    }

    if (!pathname.startsWith("/guides/") || /instagram\.com|l\.instagram\.com/i.test(document.referrer)) {
      return () => window.removeEventListener("scroll", offerScroll);
    }

    const dismissedAt = Number(window.localStorage.getItem(STORAGE_KEY) || 0);
    if (Date.now() - dismissedAt < DISMISS_FOR_MS) {
      return () => window.removeEventListener("scroll", offerScroll);
    }

    let shown = false;
    const reveal = () => {
      if (shown) return;
      shown = true;
      setInstagramVisible(true);
    };
    const instagramScroll = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      if (available > 0 && window.scrollY / available >= 0.52) reveal();
    };
    const timer = window.setTimeout(reveal, 16000);
    window.addEventListener("scroll", instagramScroll, { passive: true });
    instagramScroll();

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", offerScroll);
      window.removeEventListener("scroll", instagramScroll);
    };
  }, [pathname]);

  function dismiss() {
    window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
    setInstagramVisible(false);
  }

  return (
    <>
      {offersVisible && (
        <div className="mobile-offers-rail-wrap">
          <Link className="mobile-offers-rail" href="/offers">
            <span>العروض</span>
            <strong>{offerLabel(pathname)}</strong>
            <b aria-hidden="true">←</b>
          </Link>
        </div>
      )}

      {instagramVisible && (
        <aside className="instagram-guides-popup" aria-label="تابع ديوانك على إنستجرام">
          <button className="instagram-guides-close" type="button" onClick={dismiss} aria-label="إغلاق">×</button>
          <span className="instagram-guides-mark" aria-hidden="true"><InstagramIcon /></span>
          <div className="instagram-guides-copy">
            <small>DEWANK / INSTAGRAM</small>
            <strong>استفدت من الدليل؟</strong>
            <span>تابع ديوانك لأفكار أقصر وتطبيقات عملية.</span>
          </div>
          <a href="https://www.instagram.com/dewank_marketing" target="_blank" rel="noopener noreferrer" onClick={dismiss}>
            تابعنا <span aria-hidden="true">↗</span>
          </a>
        </aside>
      )}
    </>
  );
}
