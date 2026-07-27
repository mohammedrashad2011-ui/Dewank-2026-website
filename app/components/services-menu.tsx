"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const serviceGroups = [
  {
    title: "العلامة والمحتوى",
    label: "BRAND",
    links: [
      { href: "/branding", title: "استراتيجية البراند والهوية", text: "تموضع، تسمية وهوية بصرية متماسكة." },
      { href: "/digital-marketing", title: "التسويق الرقمي والمحتوى", text: "حضور رقمي مرتبط برحلة العميل والنمو." },
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
      { href: "/ats-cv", title: "السيرة الذاتية ATS", text: "خدمة مستقلة للمحترفين والباحثين عن عمل." },
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
];

export function ServicesMenu() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <div
      className={`services-menu ${open ? "is-open" : ""}`}
      ref={rootRef}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="services-trigger">
        <Link href="/services">الخدمات</Link>
        <button
          type="button"
          aria-label="عرض قائمة الخدمات"
          aria-expanded={open}
          aria-controls="services-mega-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true">⌄</span>
        </button>
      </div>

      <div className="services-mega" id="services-mega-menu" aria-hidden={!open}>
        <div className="mega-intro">
          <small>DEWANK SERVICES</small>
          <strong>ابدأ من المشكلة.<br />نربط لك الحل.</strong>
          <Link href="/services" onClick={() => setOpen(false)}>عرض جميع الخدمات <span>←</span></Link>
        </div>
        <div className="mega-groups">
          {serviceGroups.map((group) => (
            <section key={group.label}>
              <div className="mega-group-title"><small>{group.label}</small><h2>{group.title}</h2></div>
              {group.links.map((item) => (
                <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </Link>
              ))}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
