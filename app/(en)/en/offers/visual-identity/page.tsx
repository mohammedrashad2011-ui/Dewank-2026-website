import type { Metadata } from "next";
import Link from "next/link";
import { enMetadata } from "../../_en/metadata";
import { Footer } from "../../_en/parity/footer";
import { Header } from "../../_en/parity/header";
import { OfferPrice } from "../../_en/lib/localized-price";
import { EnOfferSticky } from "../offer-sticky-en";
import { whatsappHref } from "../../_en/lib/site";
import { IdentityReel } from "../../../../(ar)/offers/visual-identity/identity-reel";
// The Arabic mini visual identity offer's layout and styles, reused unchanged. English-only direction and type overrides follow.
import "../../../../(ar)/offers/offers-page.css";
import "../../../../(ar)/offers/offer-trust.css";
import "../../../../(ar)/offers/visual-identity/mini-visual-identity.css";
import "../../../../(ar)/offers/visual-identity/identity-reel.css";
import "../../_en/parity/service-pages.en.css";
import "../../_en/styles/hide-arabic-widgets.css";

const baseMetadata = enMetadata(
  "Logo and Brand Identity Design | Essential Package",
  "Professional logo and brand identity design services for startups and small businesses worldwide: a primary logo, colours, typefaces, a visual direction and three applications, delivered in 7–10 working days at a clear price.",
  "/en/offers/visual-identity",
);
// Page-specific social card (served from app/offers/visual-identity/opengraph-image.tsx).
const socialImage = { url: "/offers/visual-identity/opengraph-image", width: 1200, height: 630, alt: "Dewank: essential logo and brand identity design package" };
export const metadata: Metadata = {
  ...baseMetadata,
  openGraph: { ...baseMetadata.openGraph, images: [socialImage] },
  twitter: { ...baseMetadata.twitter, images: [{ url: socialImage.url, alt: socialImage.alt }] },
};

const deliverables = [
  ["A primary logo", "A main logo that is clear and usable on digital channels and essential print."],
  ["A simplified logo", "A shortened version or supporting mark for profile pictures, icons and small spaces."],
  ["A colour palette", "A set of primary and supporting colours with their codes, so they are used consistently."],
  ["Suggested typefaces", "Typefaces for headings and text in English and Arabic, chosen to suit the brand's personality."],
  ["A visual direction", "A clear direction for images, elements, graphic devices and how the brand appears, so content does not start from zero each time."],
  ["Three practical applications", "The identity applied to three agreed examples, such as a business card, a social media template, a cover or an email signature."],
  ["A short guidelines file", "A concise page or file showing the basic use of the logo, colours and typefaces."],
  ["Two revision rounds", "Two grouped rounds of revision after the initial direction is presented, to refine the identity before final delivery."],
];

const faqs = [
  ["How much do logo and brand identity design services cost?", "The package starts at the price shown above: in your local currency in the Gulf, and in US dollars in other countries. It includes the primary logo, the colour palette, typefaces, the visual direction, three practical applications and a short guidelines file."],
  ["Is this package only a logo?", "No. It includes the primary logo with a simplified version, a colour palette, suggested typefaces, a visual direction, three practical applications and a short guidelines file. It is not a complete brand identity, so it does not include brand strategy or naming."],
  ["What is the difference between this and a full visual identity?", "The essential package suits a business that needs a professional visual foundation quickly. A full identity usually includes broader research, brand strategy, a messaging system, more applications and a detailed usage guide."],
  ["What is the difference between brand identity and visual identity?", "Brand identity is broader: the name, the message, the tone of voice and the customer experience. Visual identity is the part customers see: the logo, colours, typefaces and imagery. This package covers the visual foundation of your brand identity."],
  ["Do you design logos for online stores, restaurants and contracting companies?", "Yes. The package suits online stores, restaurants and cafes, clinics, contracting companies and service businesses. We start by understanding the business, the audience and the competitors before drawing the logo, so the look fits the sector."],
  ["Do you work with businesses outside Saudi Arabia?", "Yes. We work remotely with startups and small businesses worldwide, in English and Arabic. The brief, the reviews and the delivery all happen online."],
  ["Does it include choosing the brand name?", "No. The name should be approved before design starts. If you have not chosen a name yet, you can start with the brand naming package first."],
  ["Does it include content writing or social media management?", "No. The package builds the basic visual system. Content creation and account management are separate services."],
  ["How long does it take?", "Delivery usually takes 7–10 working days after we receive the project information and approve the initial direction."],
  ["What files will I receive?", "You receive the primary logo files for digital use and print, the colour codes, the suggested typefaces, the agreed applications and the short guidelines file."],
];

export default function MiniVisualIdentityOffer() {
  const contactLink = whatsappHref("Hello Dewank, I would like a free initial consultation about the essential visual identity package. My business is: ");
  const url = "https://dewank.com/en/offers/visual-identity";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "Essential visual identity package",
        alternateName: "Logo and brand identity design services",
        description: "An essential visual identity package: a primary logo and a simplified version, a colour palette, suggested typefaces, a visual direction, three practical applications and a short guidelines file.",
        serviceType: ["Logo Design Services", "Brand Identity Design", "Visual Identity Design"],
        provider: { "@id": "https://dewank.com/#organization" },
        areaServed: "Worldwide",
        offers: { "@type": "Offer", price: "1190", priceCurrency: "SAR", availability: "https://schema.org/InStock", url: "https://dewank.com/en/offers/visual-identity" },
        url,
        inLanguage: "en",
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://dewank.com/en" },
          { "@type": "ListItem", position: 2, name: "Offers", item: "https://dewank.com/en/offers" },
          { "@type": "ListItem", position: 3, name: "Essential visual identity", item: url },
        ],
      },
    ],
  };

  return (
    <main id="main-content" className="inner-page offers-page mini-identity-page en-service" lang="en" dir="ltr">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

      <section className="shell offer-detail-hero mini-identity-hero">
        <div>
          <div className="offer-availability"><span className="offer-spots-available"><i aria-hidden="true" /><strong>7–10</strong> working days</span></div>
          <h1>Logo and brand identity design<br/><em>An essential identity package for your business</em></h1>
          <p>A professional logo and brand identity design service for startups and small businesses anywhere. We build a coherent visual foundation that makes your brand look professional from day one, from the logo and colours to the typefaces and the essential applications.</p>
          <div className="mini-identity-answer" aria-label="The short answer">
            <b>The short answer</b>
            <span>You receive a primary logo and a simplified version, a colour palette, suggested typefaces, a visual direction, three practical applications and a short guidelines file.</span>
          </div>
        </div>
        <aside className="offer-price-panel mini-identity-price-panel">
          <small>Essential package from</small>
          <OfferPrice offerKey="mini-visual-identity" className="offer-price" />
          <div className="offer-trust-inline"><span>Primary logo</span><span>3 applications</span><span>Two revision rounds</span></div>
          <p>It does not include a full brand strategy, naming, content management or extended applications beyond the agreed scope.</p>
          <a id="order-cta" className="button primary offer-consultation-cta" href={contactLink} target="_blank" rel="noopener noreferrer">Free consultation <span>→</span></a>
        </aside>
      </section>

      <section className="shell mini-identity-proof">
        <div className="mini-identity-proof-copy">
          <span className="section-label">Why an essential identity?</span>
          <h2>Because improvised visuals<br/>tire a brand quickly</h2>
          <p>A young business does not always need a large brand system. It does need enough visual rules to stop every new design from looking like it belongs to a different company.</p>
          <blockquote className="mini-identity-quote"><p>&ldquo;&hellip;proactive and very attentive to my needs, and designed a logo that reflects my company&apos;s values perfectly.&rdquo;</p><cite>Sophia Flores, United States</cite></blockquote>
          <blockquote className="mini-identity-quote"><p>&ldquo;Dedicated, professional, and easy to communicate with&hellip; genuinely cares about delivering good quality work. Great experience overall.&rdquo;</p><cite><Link href="/en/work/bithan">Case study</Link></cite></blockquote>
          <Link className="mini-identity-work-link" href="/en/work">See visual identities we designed →</Link>
        </div>
        <IdentityReel locale="en" cta={<a className="button primary offer-consultation-cta" href={contactLink} target="_blank" rel="noopener noreferrer">Request your identity <span>→</span></a>} />
      </section>

      <section className="shell offer-deliverables mini-identity-deliverables">
        <div><span className="section-label">What you receive</span><h2>The foundation your business needs<br/>to appear consistently</h2><p>We design your logo and brand identity around the elements you will use in practice at the start of the brand, rather than inflating the package with items you do not need yet.</p></div>
        <div className="deliverable-list">{deliverables.map(([item, text]) => <article className="deliverable-item" key={item}><b>{item}</b><p>{text}</p></article>)}</div>
      </section>

      <section className="shell mini-identity-process">
        <div className="mini-identity-process-head"><span className="section-label">Three stages</span><h2>Understand. Set the direction. Then build the system</h2></div>
        <div className="mini-identity-process-grid">
          <article><b>01</b><h3>We understand the business</h3><p>The activity, the audience, the competitors, the brand personality and what the customer should feel when they see it.</p></article>
          <article><b>02</b><h3>We set the direction</h3><p>We propose a visual direction that links the logo, colours and typefaces, rather than designing each element separately.</p></article>
          <article><b>03</b><h3>We apply and deliver</h3><p>We develop the approved elements, apply them to three practical examples, then deliver the files and the short guide.</p></article>
        </div>
      </section>

      <section className="shell offer-confidence mini-identity-confidence">
        <div className="offer-confidence-head"><span className="section-label">Who it is for</span><h2>A strong start without the complexity of a full identity</h2></div>
        <div className="offer-confidence-grid"><article><b>01</b><span>A new project with an approved name that needs a professional look before launch.</span></article><article><b>02</b><span>A small business using a weak or inconsistent logo that wants a clearer foundation.</span></article><article><b>03</b><span>A founder who wants the website, social media and offers to look unified before expanding.</span></article></div>
        <details className="offer-policy"><summary>What the offer does not include</summary><p>It does not include a full brand strategy, naming research, a messaging system, a detailed identity manual, motion graphics, product packaging, website design, social media management, or an open number of applications and revisions.</p></details>
      </section>

      <section className="shell offer-faq" id="faq"><div className="offer-faq-head"><span className="section-label">Frequently asked questions</span><h2>Before we draw the first line</h2></div><div className="offer-faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>

      <section id="order-final" className="shell offer-final-cta mini-identity-final">
        <span className="offer-kicker">Essential visual identity · 7–10 days</span>
        <h2>Make your project look like a brand, not a set of separate designs</h2>
        <p>Send us your business type, name and target market, and we will set the direction before designing the logo.</p>
        <a className="button primary offer-consultation-cta" href={contactLink} target="_blank" rel="noopener noreferrer">Free consultation <span>→</span></a>
        <div className="mini-identity-links"><Link href="/en/branding">Full brand strategy and identity</Link><Link href="/en/offers/brand-naming">Haven&apos;t chosen a name yet?</Link><Link href="/en/offers/name-identity">Name + identity together</Link><Link href="/en/offers">Back to offers</Link></div>
      </section>
      <EnOfferSticky watchIds={["order-cta", "order-final", "order-footer"]} href={contactLink} label="Free consultation" priceLabel="Essential package from" offerKey="mini-visual-identity" />
      <div id="order-footer"><Footer /></div>
    </main>
  );
}
