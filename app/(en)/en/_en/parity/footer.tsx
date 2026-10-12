import Link from "next/link";

// English copy of the Arabic site footer (app/components/site-shell.tsx). The stylesheet is the Arabic footer's,
// unchanged, so the layout matches. Copy and routes are English.
export function Footer() {
  return (
    <footer className="site-footer unified-footer">
      <div className="shell footer-grid unified-footer-grid">
        <div className="footer-intro">
          <Link className="brand-logo footer-brand" href="/en">
            <span className="mark-frame" aria-hidden="true" />
            <strong>Dewank</strong>
          </Link>
          <p>Brand, growth and automation, as one system.</p>
        </div>
        <div className="footer-services">
          <b>Services</b>
          <div className="footer-service-links">
            <Link href="/en/services#brand-strategy">Brand strategy</Link>
            <Link href="/en/social-media-content">Social media</Link>
            <Link href="/en/services#digital-strategy">Digital marketing</Link>
            <Link href="/en/paid-advertising">Paid ads</Link>
            <Link href="/en/seo-geo-aeo">SEO, GEO and AEO</Link>
            <Link href="/en/website-design">Website design</Link>
            <Link href="/en/whatsapp-crm-automation">WhatsApp and CRM</Link>
            <Link href="/en/ai-automation">AI automation</Link>
          </div>
        </div>
        <div>
          <b>Explore</b>
          <Link href="/en/services">All services</Link>
          <Link href="/en/offers">Offers</Link>
          <Link href="/en/work">Our work</Link>
          <Link href="/en/guides">Guides</Link>
          <Link href="/en/brand-naming">Brand naming</Link>
          <Link href="/en/contact">Start a project</Link>
          <Link href="/en/privacy">Privacy notice</Link>
        </div>
        <div className="footer-contact">
          <b>Contact</b>
          <div className="footer-social-icons">
            <a href="https://wa.me/97339066649" target="_blank" rel="noreferrer" aria-label="Message us on WhatsApp" title="WhatsApp">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.7a8 8 0 0 1-11.8 7L4 20l1.3-4A8 8 0 1 1 20 11.7Z" /><path d="M9 8.5c.4 2.8 2.1 4.6 5 5.4l1.2-1.2 2 .9c-.2 1.5-1.2 2.3-2.7 2.2-4.2-.4-7.5-3.8-7.8-8 0-1.3.7-2.2 2-2.5l1 2.1Z" /></svg>
            </a>
            <a href="mailto:hello@dewank.com" aria-label="Email us" title="Email">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5.5h18v13H3z" /><path d="m4 7 8 6 8-6" /></svg>
            </a>
            <a href="https://www.instagram.com/dewank_marketing" target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" className="fill" /></svg>
            </a>
          </div>
          <span>Branding · Marketing · AI</span>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} DEWANK STUDIO</span>
        <span>BRAND × GROWTH × AI</span>
        <span className="footer-legal"><Link href="/en/privacy">Privacy notice</Link> · <button type="button" data-dewank-consent-open="" className="cookie-settings-button" lang="en" style={{ background: "none", border: 0, padding: "7px 0", margin: "-7px 0", color: "inherit", font: "inherit", textDecoration: "underline", textUnderlineOffset: "3px", cursor: "pointer" }}>Cookie settings</button></span>
      </div>
      <style>{`.unified-footer-grid{grid-template-columns:1.55fr 1.45fr .8fr .7fr;gap:clamp(36px,5vw,78px)}.unified-footer-grid b{font-size:15px;line-height:1.4;letter-spacing:.06em;margin-bottom:16px}.footer-services{min-width:0}.footer-service-links{display:grid;grid-template-columns:1fr 1fr;gap:10px 24px}.footer-service-links a{line-height:1.55}.footer-social-icons{display:flex;gap:10px;margin:4px 0 12px}.footer-social-icons a{width:42px;height:42px;border:1px solid rgba(242,239,231,.38);border-radius:50%;display:grid;place-items:center;transition:.2s}.footer-social-icons a:hover{background:var(--acid);color:var(--ink);border-color:var(--acid);transform:translateY(-3px)}.footer-social-icons svg{width:19px;height:19px;fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}.footer-social-icons svg .fill{fill:currentColor;stroke:none}@media(max-width:1050px){.unified-footer-grid{grid-template-columns:1fr 1fr}.footer-intro{grid-column:1/-1}.footer-service-links{grid-template-columns:1fr 1fr}}@media(max-width:620px){.unified-footer-grid{grid-template-columns:1fr}.footer-intro{grid-column:auto}.footer-service-links{grid-template-columns:1fr 1fr}.footer-social-icons a{width:48px;height:48px}.unified-footer-grid b{font-size:16px}}@media(max-width:380px){.footer-service-links{grid-template-columns:1fr}}`}</style>
    </footer>
  );
}
