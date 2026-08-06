"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const serviceGroups = [
  {
    title: "العلامة والمحتوى",
    label: "BRAND",
    links: [
      { href: "/branding", title: "استراتيجية البراند والهوية", text: "تموضع، تسمية وهوية بصرية متماسكة." },
      { href: "/services/social-media-content", title: "إدارة السوشيال ميديا", text: "استراتيجية محتوى، تصميم، كابشنات وخطة نشر." },
      { href: "/digital-marketing", title: "التسويق الرقمي", text: "رحلة عميل مترابطة تدعم النمو والتحويل." },
    ],
  },
  {
    title: "الإعلانات والنمو",
    label: "GROWTH",
    links: [
      { href: "/paid-ads", title: "إعلانات Meta وGoogle", text: "إدارة الحملات، التتبع وتحسين التحويل." },
      { href: "/seo-aeo", title: "تحسين SEO وAEO", text: "ظهور أوضح في البحث ومحركات الإجابة." },
    ],
  },
  {
    title: "المواقع والتحويل",
    label: "WEB",
    links: [
      { href: "/website-design", title: "تصميم وتطوير المواقع", text: "مواقع سريعة تقود الزائر نحو قرار واضح." },
    ],
  },
  {
    title: "الذكاء والأتمتة",
    label: "AI",
    links: [
      { href: "/whatsapp-automation", title: "أتمتة واتساب وCRM", text: "رد، تأهيل، حجز ومتابعة على مدار الساعة." },
      { href: "/ai-automation", title: "حلول الذكاء الاصطناعي", text: "ربط العمليات وتقليل المهام اليدوية المتكررة." },
    ],
  },
  {
    title: "خدمة مهنية مستقلة",
    label: "CAREER",
    links: [
      { href: "/ats-cv", title: "السيرة الذاتية ATS", text: "خدمة مستقلة للمحترفين والباحثين عن عمل." },
    ],
  },
];

export function ServicesMenu() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelScheduledClose = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openMenu = () => {
    cancelScheduledClose();
    setOpen(true);
  };

  const scheduleClose = () => {
    cancelScheduledClose();
    closeTimerRef.current = setTimeout(() => {
      setOpen(false);
      closeTimerRef.current = null;
    }, 220);
  };

  const closeMenu = () => {
    cancelScheduledClose();
    setOpen(false);
  };

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) closeMenu();
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
      cancelScheduledClose();
    };
  }, []);

  return (
    <div
      className={`services-menu ${open ? "is-open" : ""}`}
      ref={rootRef}
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <div className="services-trigger">
        <Link href="/services">الخدمات</Link>
        <button
          type="button"
          aria-label="عرض قائمة الخدمات"
          aria-expanded={open}
          aria-controls="services-mega-menu"
          onClick={() => {
            cancelScheduledClose();
            setOpen((value) => !value);
          }}
        >
          <span aria-hidden="true">⌄</span>
        </button>
      </div>

      <div
        className="services-mega"
        id="services-mega-menu"
        aria-hidden={!open}
        onMouseEnter={openMenu}
        onMouseLeave={scheduleClose}
      >
        <div className="mega-intro">
          <small>DEWANK SERVICES</small>
          <strong>ابدأ من المشكلة.<br />نربط لك الحل.</strong>
          <Link href="/services" onClick={closeMenu}>عرض جميع الخدمات <span>←</span></Link>
        </div>
        <div className="mega-groups">
          {serviceGroups.map((group) => (
            <section className={group.label === "CAREER" ? "mega-career-group" : undefined} key={group.label}>
              <div className="mega-group-title"><small>{group.label}</small><h2>{group.title}</h2></div>
              {group.links.map((item) => (
                <Link href={item.href} key={item.href} onClick={closeMenu}>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </Link>
              ))}
            </section>
          ))}
        </div>
        <style jsx>{`
          .mega-career-group {
            grid-column: 1 / -1;
          }

          .mega-career-group > a {
            max-width: calc(50% - 8px);
          }

          @media (max-width: 900px) {
            .mega-career-group > a {
              max-width: none;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
