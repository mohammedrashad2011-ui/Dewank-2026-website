// The one English header. Every English page renders this component, so the navigation is identical across the site.
// Copy of the Arabic site header (app/components/site-shell.tsx) with English labels and routes.
// The language switch is the only link to the Arabic site.
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./header.en.css";
import "../../../../components/offers-nav-premium-preview.css";
import "../../../../components/language-switch.css";
import { MobileNavigation } from "./mobile-navigation";
import { ServicesMenu } from "./services-menu";
import { arabicEquivalent } from "../../../../components/language-routes";

// Marks the link for the current page (or its section) with aria-current, without changing the menu structure.
function isActive(pathname: string, href: string) {
  if (href === "/en") return pathname === "/en";
  return pathname === href || pathname.startsWith(href + "/");
}

export function Header() {
  const pathname = usePathname() ?? "";
  const current = (href: string) => (isActive(pathname, href) ? "page" : undefined);
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="shell nav-wrap">
        <Link className="brand-logo" href="/en" aria-label="Dewank home">
          <span className="mark-frame" aria-hidden="true" />
          <strong>Dewank</strong>
        </Link>
        <nav aria-label="Main navigation">
          <ServicesMenu />
          <Link href="/en/services" aria-current={current("/en/services")}>Starting points</Link>
          <Link className="offers-nav-link" href="/en/offers" aria-label="Offers" aria-current={current("/en/offers")}>
            <span className="offers-nav-shimmer" aria-hidden="true" />
            <span className="offers-nav-confetti" aria-hidden="true" />
            <span className="offers-nav-label">Offers</span>
          </Link>
          <Link href="/en/work" aria-current={current("/en/work")}>Our work</Link>
          <Link href="/en/guides" aria-current={current("/en/guides")}>Guides</Link>
          <Link href="/en/about" aria-current={current("/en/about")}>About</Link>
        </nav>
        <div className="nav-actions">
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- the language switch must load the Arabic document in full. */}
          <a className="language-switch" href={arabicEquivalent(pathname)} lang="ar" hrefLang="ar">
            العربية
          </a>
          <MobileNavigation />
          <Link className="nav-cta" href="/en/contact">
            Discuss your project <span>→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
