"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { NAV } from "@/app/en/_en/lib/site";
import { SERVICE_CATEGORIES, categoryHref, serviceHref } from "@/app/en/_en/lib/services";

// The "Services" link always goes to /services, so it works without JavaScript.
// The arrow button opens the panel on click or keyboard, and on hover for pointer users.
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        rootRef.current?.querySelector<HTMLButtonElement>("button[aria-controls]")?.focus();
      }
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="shell site-header-inner">
        <Link className="brand" href="/en" aria-label="Dewank home" onClick={close}>
          {/* Decorative mark: the name is printed next to it. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/en/brand/dewank-logo.png" alt="" width={34} height={34} />
          Dewank
        </Link>

        <nav aria-label="Primary" className="primary-nav" ref={rootRef}>
          <ul className="site-nav">
            <li className="services-nav" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
              <Link href="/en/services" onClick={close}>
                Services
              </Link>
              <button
                type="button"
                className="services-toggle"
                aria-expanded={open}
                aria-controls={panelId}
                aria-label={open ? "Hide services" : "Show services"}
                onClick={() => setOpen((v) => !v)}
              >
                <span aria-hidden="true">{open ? "−" : "+"}</span>
              </button>

              <div id={panelId} className="services-panel" hidden={!open}>
                <div className="services-panel-grid">
                  {SERVICE_CATEGORIES.map((category) => (
                    <section key={category.id} aria-labelledby={`${panelId}-${category.id}`}>
                      <h2 id={`${panelId}-${category.id}`} className="services-panel-label">
                        <Link href={categoryHref(category)} onClick={close}>
                          {category.label}
                        </Link>
                      </h2>
                      <ul>
                        {category.services.map((service) => (
                          <li key={service.id}>
                            <Link href={serviceHref(service)} onClick={close}>
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
                <div className="services-panel-foot">
                  <Link href="/en/services" onClick={close}>
                    View the full service catalogue →
                  </Link>
                </div>
              </div>
            </li>
            {NAV.filter((item) => item.href !== "/en/services").map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={close}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link className="lang-switch" href="/" lang="ar" hrefLang="ar" onClick={close}>
          العربية
        </Link>
        <Link className="header-cta" href="/en/contact" onClick={close}>
          Request a quote
        </Link>
      </div>
    </header>
  );
}
