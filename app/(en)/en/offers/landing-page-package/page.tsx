import Link from "next/link";
import { enMetadata } from "../../_en/metadata";
import { Footer } from "../../_en/parity/footer";
import { Header } from "../../_en/parity/header";
import { OfferPrice } from "../../_en/lib/localized-price";
import { whatsappHref } from "../../_en/lib/site";
// The Arabic landing page offer's layout and styles, reused unchanged. English-only direction and type overrides follow.
import "../../../../(ar)/offers/offers-page.css";
import "../../../../(ar)/offers/offer-trust.css";
import "../../../../(ar)/offers/landing-offer.css";
import "../../_en/parity/service-pages.en.css";
import "../../_en/styles/hide-arabic-widgets.css";

export const metadata = enMetadata(
  "Landing page design: one page that sells your service",
  "A professional landing page for businesses worldwide: custom copy and design, WhatsApp and form routes, analytics and conversion tracking, and basic SEO. Delivered in 7 to 10 working days, with a full option that includes a domain and hosting for one year.",
  "/en/offers/landing-page-package",
);

const deliverables = [
  ["A custom landing page", "One page built around your service and your goal, not a generic repeated template."],
  ["Marketing copy", "The message, headings, benefits and call to action arranged to move the visitor forward."],
  ["Mobile-first design", "A fast, clear experience on phones and desktops."],
  ["WhatsApp and a lead form", "A direct contact button and a form for collecting enquiries."],
  ["Analytics and tracking", "GA4, Google Tag Manager, and tracking of WhatsApp clicks and form submissions."],
  ["Basic SEO", "Title, description and the basic structure search engines need to read the page."],
];

const faqItems = [
  ["Does the price include the domain and hosting?", "The base package does not include domain and hosting fees. You can choose the full package, which includes a domain and hosting for one year, with connection and setup."],
  ["Who owns the domain?", "The domain is registered in the client's name and under the client's email address, so ownership is clear from the start."],
  ["What if I already have a domain and hosting?", "We review the hosting first. If it is suitable, we publish the page and connect the domain and SSL as part of the base package, with no extra setup fee."],
  ["How long does it take?", "Delivery usually takes 7 to 10 working days after we receive the information and materials and the direction is approved."],
  ["Does the page include a shop or a payment gateway?", "No. This offer is for a single landing page with the goal of contact or booking. It does not include an online shop, a payment gateway or multiple languages."],
];

export default function LandingPageOffer() {
  const contactBase = whatsappHref("Hello Dewank, I would like a landing page for my service. My service is: ");
  const contactFull = whatsappHref("Hello Dewank, I would like the full landing page package with domain and hosting. My service is: ");
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://dewank.com/en/offers/landing-page-package#service",
        name: "Landing page design",
        description: "A custom landing page with marketing copy, design, WhatsApp and form routes, analytics and basic SEO. A full option includes a domain and hosting for one year.",
        serviceType: ["Landing page design", "Conversion copywriting", "Web analytics setup"],
        provider: { "@id": "https://dewank.com/#organization" },
        areaServed: "Worldwide",
        url: "https://dewank.com/en/offers/landing-page-package",
        inLanguage: "en",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
      },
    ],
  };

  return (
    <main id="main-content" className="inner-page offers-page en-service" lang="en" dir="ltr">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

      <section className="shell offer-detail-hero">
        <div>
          <div className="offer-availability"><span className="offer-spots-available"><i aria-hidden="true" /><strong>7–10</strong> working days</span></div>
          <h1>One page.<br/><em>That turns a visitor into a customer.</em></h1>
          <p>We design a professional landing page that presents your service clearly, builds trust, and directs the customer straight to contact or booking.</p>
        </div>
        <aside className="offer-price-panel">
          <small>Base package from</small>
          <OfferPrice offerKey="landing-page-package" className="offer-price" />
          <div className="offer-trust-inline"><span>Custom page</span><span>50% to start</span><span>Full tracking</span></div>
          <p>Includes design, copy, connections and tracking. Domain and hosting fees are not included.</p>
          <a className="button primary" href={contactBase} target="_blank" rel="noopener noreferrer">Book the landing page <span>→</span></a>
        </aside>
      </section>

      <section className="shell offer-deliverables">
        <div><span className="section-label">What you receive</span><h2>Everything you need to start selling.</h2><p>Delivery in 7–10 working days after we receive the information and approve the direction.</p></div>
        <div className="deliverable-list">{deliverables.map(([title, text]) => <article className="deliverable-item" key={title}><b>{title}</b><p>{text}</p></article>)}</div>
      </section>

      <section className="shell offer-fit">
        <span className="section-label">Choose what suits you</span>
        <h2>The page only.<br/>Or a full launch.</h2>
        <div className="offer-fit-grid landing-package-grid">
          <article className="offer-fit-card good landing-package-card">
            <small>If you already have a domain and hosting</small>
            <h3>Landing page package</h3>
            <OfferPrice offerKey="landing-page-package" className="offer-price" />
            <ul><li>Design and copy for one page</li><li>WhatsApp and lead form connections</li><li>GA4, GTM and conversion tracking</li><li>Basic SEO, SSL and publishing</li><li>Two rounds of revisions</li></ul>
            <a className="button secondary" href={contactBase} target="_blank" rel="noopener noreferrer">Choose the base package <span>→</span></a>
          </article>
          <article className="offer-fit-card limits landing-package-card featured">
            <small>If you are starting from scratch</small>
            <h3>Full package</h3>
            <OfferPrice offerKey="landing-page-package-full" className="offer-price" />
            <ul><li>Everything in the base package</li><li>A domain for one year, registered in your name</li><li>Hosting for one year</li><li>Domain connection, SSL and setup</li><li>One professional email address where available</li></ul>
            <a className="button primary" href={contactFull} target="_blank" rel="noopener noreferrer">Choose the full package <span>→</span></a>
          </article>
        </div>
      </section>

      <section className="shell offer-confidence">
        <div className="offer-confidence-head"><span className="section-label">Clear ownership</span><h2>The domain is in your name. The decision is yours.</h2></div>
        <div className="offer-confidence-grid"><article><b>01</b><span>We register the domain in the client&apos;s name and under the client&apos;s email address.</span></article><article><b>02</b><span>We prepare the hosting, connect SSL and publish the page.</span></article><article><b>03</b><span>We hand over access details and renewal instructions clearly.</span></article></div>
        <details className="offer-policy"><summary>What the offer does not include</summary><p>It does not include an online shop, a payment gateway, multiple languages, a custom booking system, additional pages, advertising management, or domain and hosting renewal fees after the first year.</p></details>
      </section>

      <section className="shell offer-faq"><div className="offer-faq-head"><span className="section-label">Frequently asked questions</span><h2>Before you start.</h2></div><div className="offer-faq-list">{faqItems.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>

      <section className="shell offer-final-cta">
        <span className="offer-kicker">Custom page · delivery in 7–10 days</span>
        <h2>Make your service clear before you ask a customer to buy it.</h2>
        <p>Choose the package that suits you, and we will ask about your business and the goal of the page before production begins.</p>
        <a className="button primary" href={contactBase} target="_blank" rel="noopener noreferrer">Start with a page that sells your service <span>→</span></a>
        <div><Link href="/en/offers/small-business-website">Need a website with several pages?</Link> · <Link href="/en/website-design">Compare website design services</Link> · <Link href="/en/offers">← Back to all offers</Link></div>
      </section>
      <Footer />
    </main>
  );
}
