"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import "./mobile-site-structure-preview.css";
import { BidiText } from "./bidi-text";

const mobileGroups = [
  {
    title: "الخدمات",
    href: "/services",
    links: [
      ["/branding", "البراند والهوية"],
      ["/services/social-media-content", "إدارة السوشيال والمحتوى"],
      ["/digital-marketing", "التسويق الرقمي"],
      ["/paid-ads", "إعلانات Meta وGoogle"],
      ["/website-design", "تصميم المواقع"],
      ["/seo-aeo", "تحسين SEO وAEO"],
      ["/whatsapp-automation", "أتمتة واتساب وCRM"],
      ["/ai-automation", "حلول الذكاء الاصطناعي"],
    ],
  },
  {
    title: "استكشف",
    links: [
      ["/offers", "العروض"],
      ["/work", "أعمالنا"],
      ["/guides", "أدلة النمو"],
      ["/about", "عن ديوانك"],
    ],
  },
  {
    title: "للأفراد",
    links: [["/ats-cv", "السيرة الذاتية ATS"]],
  },
] as const;

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", open);
    return () => document.body.classList.remove("mobile-menu-open");
  }, [open]);

  // Focus moves into the panel when it opens, and back to the trigger when it closes.
  useEffect(() => {
    if (open) closeRef.current?.focus();
    else if (wasOpen.current) triggerRef.current?.focus();
    wasOpen.current = open;
  }, [open]);

  // While the panel is open, Tab and Shift+Tab stay inside it.
  useEffect(() => {
    if (!open) return;
    const keepFocusInPanel = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || !panelRef.current) return;
      const items = Array.from(panelRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"));
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", keepFocusInPanel);
    return () => window.removeEventListener("keydown", keepFocusInPanel);
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
        ref={triggerRef}
        className="mobile-menu-trigger"
        type="button"
        aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
        aria-expanded={open}
        aria-controls={open ? "mobile-menu-panel" : undefined}
        onClick={() => setOpen((value) => !value)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span className="mobile-menu-label">القائمة</span>
      </button>

      {open ? (
        <>
          <div className="mobile-menu-backdrop is-open" onClick={() => setOpen(false)} aria-hidden="true" />
          <aside
            ref={panelRef}
            id="mobile-menu-panel"
            className="mobile-menu-panel is-open"
            role="dialog"
            aria-modal="true"
            aria-label="قائمة الموقع"
          >
            <div className="mobile-menu-head">
              <small>DEWANK MENU</small>
              <button ref={closeRef} type="button" onClick={() => setOpen(false)} aria-label="إغلاق القائمة">×</button>
            </div>
            <nav aria-label="قائمة الموبايل" className="mobile-menu-groups">
              {mobileGroups.map((group) => (
                <section className="mobile-menu-group" key={group.title}>
                  <div className="mobile-menu-group-head">
                    {"href" in group && group.href ? (
                      <Link href={group.href} onClick={() => setOpen(false)}>{group.title}<span>عرض الكل ←</span></Link>
                    ) : (
                      <strong>{group.title}</strong>
                    )}
                  </div>
                  <div className="mobile-menu-group-links">
                    {group.links.map(([href, label], index) => (
                      <Link href={href} key={href} onClick={() => setOpen(false)}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <strong><BidiText text={label} /></strong>
                        <b aria-hidden="true">←</b>
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
            </nav>
            <div className="mobile-menu-actions">
              <Link className="button primary" href="/contact" onClick={() => setOpen(false)}>تواصل معنا</Link>
              <a className="button mobile-whatsapp" href="https://wa.me/97339066649" target="_blank" rel="noreferrer">واتساب</a>
            </div>
          </aside>
        </>
      ) : null}
    </div>
  );
}
