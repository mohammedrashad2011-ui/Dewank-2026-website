import Link from "next/link";
import { CONTACT_EMAIL, NAV, WHATSAPP_NUMBER, briefMailto } from "@/app/en/_en/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-grid">
          <div>
            <p style={{ fontSize: 22, color: "#fff", fontFamily: "Cormorant Garamond, Georgia, serif" }}>
              Brand, growth and automation, as one system.
            </p>
            <p>
              Custom scopes for companies in Saudi Arabia, the UAE, Bahrain and Qatar. Remote engagements are
              considered case by case.
            </p>
          </div>
          <div>
            <h2>Explore</h2>
            {NAV.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <div>
            <h2>Contact</h2>
            <a href={briefMailto()}>{CONTACT_EMAIL}</a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} rel="noopener noreferrer" target="_blank">
              WhatsApp: +{WHATSAPP_NUMBER}
            </a>
          </div>
        </div>
        <div className="footer-base">
          © 2026 Dewank. All rights reserved. · <Link href="/en/privacy">Privacy notice</Link>
        </div>
      </div>
    </footer>
  );
}
