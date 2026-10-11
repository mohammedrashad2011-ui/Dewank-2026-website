// English copy of the Arabic site header (app/components/site-shell.tsx). Same markup, classes and styles.
// Every route in this header has an English page. The language switch is the only link to the Arabic site.
import Link from "next/link";
import "./header.en.css";
import "../../../components/offers-nav-premium-preview.css";
import "../../../components/language-switch.css";
import { MobileNavigation } from "./mobile-navigation";
import { ServicesMenu } from "./services-menu";

export function Header() {
  return (
    <header className="site-header">
      <div className="shell nav-wrap">
        <Link className="brand-logo" href="/en" aria-label="Dewank home">
          <span className="mark-frame" aria-hidden="true" />
          <strong>Dewank</strong>
        </Link>
        <nav aria-label="Main navigation">
          <ServicesMenu />
          <Link className="offers-nav-link" href="/en/services" aria-label="Starting points">
            <span className="offers-nav-shimmer" aria-hidden="true" />
            <span className="offers-nav-confetti" aria-hidden="true" />
            <span className="offers-nav-label">Starting points</span>
          </Link>
          <Link href="/en/offers">Offers</Link>
          <Link href="/en/work">Our work</Link>
          <Link href="/en/guides">Guides</Link>
          <Link href="/en/about">About</Link>
        </nav>
        <div className="nav-actions">
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- the language switch must load the Arabic document in full. */}
          <a className="language-switch" href="/" lang="ar" hrefLang="ar">
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
