"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const mobileLinks = [
  ["/services", "جميع الخدمات"],
  ["/branding", "البراند والهوية"],
  ["/digital-marketing", "التسويق الرقمي"],
  ["/paid-ads", "إعلانات Meta وGoogle"],
  ["/seo-aeo", "تحسين SEO وAEO"],
  ["/website-design", "تصميم المواقع"],
  ["/whatsapp-automation", "أتمتة واتساب وCRM"],
  ["/ai-automation", "حلول الذكاء الاصطناعي"],
  ["/ats-cv", "السيرة الذاتية ATS"],
  ["/work", "أعمالنا"],
  ["/about", "عن ديوانك"],
] as const;

export function MobileNavigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", open);
    return () => document.body.classList.remove("mobile-menu-open");
  }, [open]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <div className="mobile-navigation">
      <button
        className="mobile-menu-trigger"
        type="button"
        aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        onClick={() => setOpen((value) => !value)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span className="mobile-menu-label">القائمة</span>
      </button>

      <div className={`mobile-menu-backdrop ${open ? "is-open" : ""}`} onClick={() => setOpen(false)} />
      <aside id="mobile-menu-panel" className={`mobile-menu-panel ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="mobile-menu-head">
          <small>DEWANK MENU</small>
          <button type="button" onClick={() => setOpen(false)} aria-label="إغلاق القائمة">×</button>
        </div>
        <nav aria-label="قائمة الموبايل">
          {mobileLinks.map(([href, label], index) => (
            <Link href={href} key={href} onClick={() => setOpen(false)}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{label}</strong>
              <b aria-hidden="true">←</b>
            </Link>
          ))}
        </nav>
        <div className="mobile-menu-actions">
          <Link className="button primary" href="/contact" onClick={() => setOpen(false)}>ابدأ مشروعك</Link>
          <a className="button mobile-whatsapp" href="https://wa.me/97339066649" target="_blank" rel="noreferrer">تواصل واتساب</a>
        </div>
      </aside>
    </div>
  );
}
