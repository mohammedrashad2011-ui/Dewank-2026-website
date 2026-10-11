"use client";

// English copy of the Arabic MobileNavigation. Same markup and behaviour; English copy and English routes.
import Link from "next/link";
import { useEffect, useState } from "react";
import "../../../components/mobile-site-structure-preview.css";

const mobileGroups = [
  {
    title: "Services",
    href: "/en/services",
    links: [
      ["/en/services#brand-strategy", "Brand strategy and identity"],
      ["/en/social-media-content", "Social media and content"],
      ["/en/services#digital-strategy", "Digital marketing"],
      ["/en/paid-advertising", "Paid ads: Google and Meta"],
      ["/en/website-design", "Website design"],
      ["/en/seo-geo-aeo", "SEO, GEO and AEO"],
      ["/en/whatsapp-crm-automation", "WhatsApp and CRM"],
      ["/en/ai-automation", "AI automation"],
    ],
  },
  {
    title: "Explore",
    links: [
      ["/en/services", "Starting points"],
      ["/en/offers", "Offers"],
      ["/en/work", "Our work"],
      ["/en/guides", "Guides"],
      ["/en/brand-naming", "Brand naming"],
    ],
  },
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
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls={open ? "mobile-menu-panel" : undefined}
        onClick={() => setOpen((value) => !value)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span className="mobile-menu-label">Menu</span>
      </button>

      {open ? (
        <>
          <div className="mobile-menu-backdrop is-open" onClick={() => setOpen(false)} aria-hidden="true" />
          <aside
            id="mobile-menu-panel"
            className="mobile-menu-panel is-open"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <div className="mobile-menu-head">
              <small>DEWANK MENU</small>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close menu">
                ×
              </button>
            </div>
            <nav aria-label="Mobile navigation" className="mobile-menu-groups">
              {mobileGroups.map((group) => (
                <section className="mobile-menu-group" key={group.title}>
                  <div className="mobile-menu-group-head">
                    {"href" in group && group.href ? (
                      <Link href={group.href} onClick={() => setOpen(false)}>
                        {group.title}
                        <span>View all →</span>
                      </Link>
                    ) : (
                      <strong>{group.title}</strong>
                    )}
                  </div>
                  <div className="mobile-menu-group-links">
                    {group.links.map(([href, label], index) => (
                      <Link href={href} key={href} onClick={() => setOpen(false)}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <strong>{label}</strong>
                        <b aria-hidden="true">→</b>
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
            </nav>
            <div className="mobile-menu-actions">
              <Link className="button primary" href="/en/contact" onClick={() => setOpen(false)}>
                Contact us
              </Link>
              <a className="button mobile-whatsapp" href="https://wa.me/97339066649" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </aside>
        </>
      ) : null}
    </div>
  );
}
