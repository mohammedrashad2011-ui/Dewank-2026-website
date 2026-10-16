import Link from "next/link";
import { enMetadata } from "../_en/metadata";
import { Footer } from "../_en/parity/footer";
import { Header } from "../_en/parity/header";
import { OfferPrice } from "../_en/lib/localized-price";
import { whatsappHref } from "../_en/lib/site";
// The Arabic Offers hub's layout and styles, reused unchanged. English-only direction and type overrides follow.
import "../../../(ar)/offers/offers-page.css";
import "../../../(ar)/offers/landing-offer.css";
import "../../../(ar)/offers/seo-audit/seo-audit-offer.css";
import "../../../(ar)/offers/brand-naming/brand-naming-offer.css";
import "../../../(ar)/offers/whatsapp-automation-starter/whatsapp-starter.css";
import "../../../(ar)/offers/mini-visual-identity/mini-visual-identity.css";
import "../../../(ar)/offers/google-ads-launch/google-ads-launch.css";
import "../../../(ar)/offers/instagram-14-day-upgrade/instagram-upgrade.css";
import "../../../(ar)/offers/small-business-website/small-business-website.css";
import "../../../(ar)/conversion-rate-optimization/cro.css";
import "../../../(ar)/offers/offers-overview.css";
import "../../../(ar)/offers/offers-overview-refine.css";
import "../_en/parity/service-pages.en.css";
import "../_en/styles/hide-arabic-widgets.css";

export const metadata = enMetadata(
  "Offers: defined starting points",
  "Defined offers with a known starting price for content, landing pages, SEO and GEO audits, brand naming, WhatsApp automation, identity, Google Ads, Instagram and small business websites.",
  "/en/offers",
);

// Scope, timing and prices are the approved offer facts. Prices are shown through the shared USD-first engine.
const offers = [
  { slug: "30-day-content-package", filter: "content", category: "Content", priority: true, spots: "10–14", unit: "working days", title: "A full month of content.", hook: "Ready to publish.", text: "12 posts, 3 stories, one reel, plus ideas, captions and a publishing plan, so your account looks consistent instead of random.", label: "Foundation price", offerKey: "30-day-content-package", cardClass: "offer-card compact-offer-card offer-priority", aria: "View the 30-day content package" },
  { slug: "landing-page-package", filter: "web", category: "Web and conversion", priority: true, spots: "7–10", unit: "working days", title: "One page.", hook: "That turns a visitor into a customer.", text: "A dedicated landing page with marketing copy, design, WhatsApp and form routes, and analytics. The full package includes the domain and hosting for one year.", label: "Base package from", offerKey: "landing-page-package", cardClass: "offer-card compact-offer-card landing-offer-card offer-priority", aria: "View the landing page package" },
  { slug: "seo-audit", filter: "web", category: "SEO and analysis", priority: false, spots: "48", unit: "hours to deliver", title: "Know the problem.", hook: "Before you raise the budget.", text: "A full SEO and AEO review covering indexing, speed, content, keywords and conversion, with a PDF report and a 30-day improvement plan.", label: "Full audit from", offerKey: "seo-audit", cardClass: "offer-card compact-offer-card seo-audit-offer-card", aria: "View the SEO and AEO audit" },
  { slug: "brand-naming", filter: "brand", category: "Brand", priority: false, spots: "3–5", unit: "working days", title: "A name that sticks.", hook: "And a direction that builds the brand.", text: "10–15 considered names, preliminary checks of meaning, similarity and domain, a top three, and an initial brand direction for the chosen name.", label: "Package from", offerKey: "brand-naming", cardClass: "offer-card compact-offer-card brand-naming-offer-card", aria: "View the brand naming package" },
  { slug: "whatsapp-automation-starter", filter: "automation", category: "Automation", priority: false, spots: "3–5", unit: "working days", title: "WhatsApp replies.", hook: "And qualifies before your team.", text: "A foundation flow that answers common questions, collects customer details, qualifies and follows up, then hands over to the right person instead of losing conversations.", label: "Starter package from", offerKey: "whatsapp-automation-starter", cardClass: "offer-card compact-offer-card whatsapp-starter-offer-card", aria: "View the WhatsApp automation starter" },
  { slug: "mini-visual-identity", filter: "brand", category: "Identity", priority: false, spots: "7–10", unit: "working days", title: "One form.", hook: "People recognise you by it.", text: "A primary logo and a simplified version, colours, typefaces, a visual direction and three practical applications, so the brand starts consistent rather than random.", label: "Mini package from", offerKey: "mini-visual-identity", cardClass: "offer-card compact-offer-card mini-identity-offer-card", aria: "View the mini visual identity package" },
  { slug: "google-ads-launch", filter: "ads", category: "Advertising", priority: true, spots: "2–4", unit: "working days", title: "Start Google Ads.", hook: "With a measured setup.", text: "One Search campaign, buyer-intent keyword research, adverts, negative keywords, basic conversion tracking and a check before launch. A setup package, not monthly management.", label: "Launch package from", offerKey: "google-ads-launch", cardClass: "offer-card compact-offer-card google-ads-offer-card offer-priority", aria: "View the Google Ads launch package" },
  { slug: "instagram-14-day-upgrade", filter: "content", category: "Instagram", priority: false, spots: "14", unit: "focused days", title: "Upgrade your Instagram.", hook: "Make it persuade the customer.", text: "A full review, improvements to the bio, call to action and highlights, content themes and a visual direction, six designs and a 14-day implementation plan.", label: "Upgrade package from", offerKey: "instagram-14-day-upgrade", cardClass: "offer-card compact-offer-card instagram-upgrade-offer-card", aria: "View the 14-day Instagram upgrade" },
  { slug: "small-business-website", filter: "web", category: "Websites", priority: false, spots: "Up to 5", unit: "pages", title: "A small website.", hook: "Ready to launch.", text: "Up to five pages, responsive design and development, a WhatsApp and contact form, basic analytics and SEO, and a full review before launch.", label: "Website package from", offerKey: "small-business-website", cardClass: "offer-card compact-offer-card small-website-offer-card", aria: "View the small business website package" },
] as const;

export default function OffersPage() {
  const contactLink = whatsappHref("Hello Dewank, I would like help choosing the right offer for my business. My goal is: ");
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Dewank offers",
    inLanguage: "en",
    itemListElement: offers.map((offer, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://dewank.com/en/offers/${offer.slug}`,
    })),
  };

  return (
    <main id="main-content" className="inner-page offers-page offers-overview-page en-service" lang="en" dir="ltr">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

      <section className="shell offers-hero offers-overview-hero">
        <span className="offers-hero-eyebrow">Offers</span>
        <h1>Clear offers.<br /><em>To help you start now.</em></h1>
        <p>Choose the offer that fits your business, with a defined scope and a known starting price. Review the details and start directly on WhatsApp, without long subscriptions or unclear services.</p>
      </section>

      <section className="offers-filter-shell" aria-label="Filter Dewank offers by type of service">
        <input defaultChecked type="radio" name="offers-filter" id="offers-all" />
        <input type="radio" name="offers-filter" id="offers-content" />
        <input type="radio" name="offers-filter" id="offers-ads" />
        <input type="radio" name="offers-filter" id="offers-web" />
        <input type="radio" name="offers-filter" id="offers-brand" />
        <input type="radio" name="offers-filter" id="offers-automation" />

        <div className="shell offers-filter-bar">
          <div className="offers-filter-copy"><small>Quick selection</small><strong>Filter the offers by your need</strong></div>
          <div className="offers-filter-controls" role="group" aria-label="Types of offer">
            <label htmlFor="offers-all">All</label>
            <label htmlFor="offers-content">Content and Instagram</label>
            <label htmlFor="offers-ads">Advertising</label>
            <label htmlFor="offers-web">Websites and SEO</label>
            <label htmlFor="offers-brand">Brand and identity</label>
            <label htmlFor="offers-automation">Automation</label>
          </div>
        </div>

        <section className="shell offers-grid offers-grid-nine offers-overview-grid" aria-label="Current Dewank offers">
          {offers.map((offer) => (
            <article key={offer.slug} data-filter={offer.filter} data-category={offer.category} className={offer.cardClass}>
              <Link className="offer-card-hit" href={`/en/offers/${offer.slug}`} aria-label={offer.aria} />
              <div className="offer-availability"><span className="offer-spots-available"><i aria-hidden="true" /><strong>{offer.spots}</strong> {offer.unit}</span></div>
              <h2>{offer.title}<br /><em>{offer.hook}</em></h2>
              <p>{offer.text}</p>
              <div className="offer-card-meta">
                <div><small>{offer.label}</small><OfferPrice offerKey={offer.offerKey} className="offer-price" /></div>
                <span className="button primary">Details <span>→</span></span>
              </div>
            </article>
          ))}

          <article data-filter="web" data-category="Audit and conversion" className="offer-card compact-offer-card cro-offer-card">
            <Link className="offer-card-hit" href="/en/conversion-rate-optimization#pricing" aria-label="View the conversion audit packages" />
            <div className="offer-availability"><span className="offer-spots-available"><i aria-hidden="true" /><strong>3</strong> one-time packages</span></div>
            <h2>Conversion check and funnel audit.<br /><em>See where visits stop.</em></h2>
            <p>Three one-time packages with defined limits, from a single-page check to a deeper journey analysis. Each package states what it includes and how long delivery takes before you pay.</p>
            <div className="offer-card-meta"><div><small>Starting from</small><OfferPrice offerKey="cro-snapshot" className="cro-price" /></div><span className="button primary">Packages <span>→</span></span></div>
          </article>

          <aside className="offers-note offers-overview-note">
            <div>
              <small>Not sure yet?</small>
              <h2>Tell us your goal.<br />We will suggest the right starting point.</h2>
              <p>Send us your business and the result you want, and we will recommend the offer closest to your need, without buying services you do not need. Prices are shown in US dollars by default, and in your country&apos;s approved price where one exists.</p>
            </div>
            <a className="button primary" href={contactLink} target="_blank" rel="noopener noreferrer">Ask Dewank on WhatsApp <span>→</span></a>
          </aside>
        </section>
      </section>
      <Footer />
    </main>
  );
}
