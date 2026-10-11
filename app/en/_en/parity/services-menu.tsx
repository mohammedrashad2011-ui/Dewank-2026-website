"use client";

// English copy of the Arabic ServicesMenu. Same markup, classes and behaviour; English copy and English routes.
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import "../../../components/services-menu-compact-preview.css";

const serviceGroups = [
  {
    title: "Brand and content",
    label: "BRAND",
    links: [
      { href: "/en/services#brand-strategy", title: "Brand strategy and identity", text: "Positioning, naming and a visual identity that holds together." },
      { href: "/en/social-media-content", title: "Social media management", text: "Content strategy, design, captions and a publishing plan." },
      { href: "/en/services#digital-strategy", title: "Digital marketing strategy", text: "A connected customer journey that supports growth and conversion." },
    ],
  },
  {
    title: "Advertising and growth",
    label: "GROWTH",
    links: [
      { href: "/en/paid-advertising", title: "Paid ads: Google and Meta", text: "Campaign management, tracking and conversion-focused optimisation." },
      { href: "/en/seo-geo-aeo", title: "SEO, GEO and AEO", text: "Clearer visibility in search results and AI answer systems." },
    ],
  },
  {
    title: "Websites and conversion",
    label: "WEB",
    links: [
      { href: "/en/website-design", title: "Website design and development", text: "Fast websites that guide visitors towards one clear decision." },
    ],
  },
  {
    title: "AI and automation",
    label: "AI",
    links: [
      { href: "/en/whatsapp-crm-automation", title: "WhatsApp and CRM automation", text: "Reply, qualify, book and follow up around the clock." },
      { href: "/en/ai-automation", title: "AI automation", text: "Connect processes and remove repetitive manual steps." },
    ],
  },
];

export function ServicesMenu() {
  const pathname = usePathname() ?? "";
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
        <Link href="/en/services" aria-current={pathname === "/en/services" || pathname.startsWith("/en/services/") ? "page" : undefined}>Services</Link>
        <button
          type="button"
          aria-label={open ? "Hide services menu" : "Show services menu"}
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
          <strong>
            Start with the problem.
            <br />
            We connect the solution.
          </strong>
          <Link href="/en/services" onClick={closeMenu}>
            View all services <span>→</span>
          </Link>
          <Link href="/en/offers" onClick={closeMenu}>
            Fixed-scope offers <span>→</span>
          </Link>
          <Link href="/en/guides" onClick={closeMenu}>
            Read the guides <span>→</span>
          </Link>
        </div>
        <div className="mega-groups">
          {serviceGroups.map((group) => (
            <section key={group.label}>
              <div className="mega-group-title">
                <small>{group.label}</small>
                <h2>{group.title}</h2>
              </div>
              {group.links.map((item) => (
                <Link href={item.href} key={item.href} onClick={closeMenu}>
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
