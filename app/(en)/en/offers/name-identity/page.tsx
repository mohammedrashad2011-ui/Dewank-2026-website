import "@/app/components/crm-contact-preview.css";
import { crmVisible } from "@/app/lib/crm/capture-mode";
import { CrmOfferContactLink } from "@/app/components/crm-offer-contact-link";
import Link from "next/link";
import { OfferGuide, OfferMicro, OfferSample } from "../../../../(ar)/offers/offer-extras";
import { offerExtras } from "../../../../(ar)/offers/offer-extras-data";
import { enMetadata } from "../../_en/metadata";
import { Footer } from "../../_en/parity/footer";
import { Header } from "../../_en/parity/header";
import { OfferPrice } from "../../_en/lib/localized-price";
import { whatsappHref } from "../../_en/lib/site";
import { EnOfferSticky } from "../offer-sticky-en";
import { NameIdentitySavingEn } from "./bundle-saving-en";
import { OfferClientProof } from "../../../../(ar)/offers/offer-client-proof";
import { offerPricing } from "../../../../(ar)/offers/offer-pricing";
// The Arabic offer layout and styles, reused unchanged. English-only direction and type overrides follow.
import "../../../../(ar)/offers/offers-page.css";
import "../../../../(ar)/offers/offer-trust.css";
import "../../_en/parity/service-pages.en.css";
import "../../_en/styles/hide-arabic-widgets.css";

const description = "One package for a new brand: brand naming (10–15 considered names, preliminary checks, a top three) followed by an essential visual identity (logo, colours, typefaces, three applications), for less than ordering both separately.";

export const metadata = enMetadata("Branding Package: Brand Name and Logo Design", description, "/en/offers/name-identity");

const namingSteps = [
  ["10–15 considered names", "Names built on your business, audience and plans to grow, not a random list."],
  ["Preliminary checks", "Of meaning, similarity, domain and social handles, before you get attached to a name that is hard to own."],
  ["A top three", "With clear reasoning for each name to help you decide."],
  ["3 taglines", "For the name you choose, with the reason for each."],
  ["An initial brand direction", "For the name you choose, as the basis for the identity stage."],
];

const identitySteps = [
  ["A primary logo and a simplified version", "For digital channels, essential print and small spaces."],
  ["Colours and typefaces", "A colour palette with its codes and suggested typefaces in English and Arabic."],
  ["A visual direction and three applications", "A clear direction for images and elements, applied to three agreed examples."],
  ["A short guidelines file and two revision rounds", "Basic usage rules, with two grouped rounds of revision."],
];

const faqs = [
  ["How much does the naming and identity package cost?", "The package price is shown above in your local currency, and it is lower than the brand naming package and the essential visual identity package ordered separately."],
  ["How long does it take?", "It runs in two stages: 3–5 working days for the name, then 7–10 working days for the identity once the name is approved and we have the project information."],
  ["Can I order only the name or only the identity?", "Yes. The brand naming package is available on its own, and so is the essential visual identity package if you already have an approved name. The bundle suits a project starting from scratch."],
  ["Does it include registering the trade name or the trademark?", "No. The checks are preliminary, not legal advice. Reservation, registration and official fees are outside the package and are handled with the competent authorities."],
  ["Is this a full brand identity?", "No. It is an essential identity for a consistent start. It does not include a full brand strategy, a detailed identity manual or extended applications. For a full identity, see brand strategy and identity."],
];

const allFaqs = [...faqs, ...offerExtras.en.bundle.faqs];

export default function NameIdentityBundleEn() {
  const contactLink = whatsappHref("Hello Dewank, I would like to start the brand naming + visual identity package. My business is: ");
  const url = "https://dewank.com/en/offers/name-identity";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "Brand naming + essential visual identity package",
        description,
        serviceType: ["Brand Naming", "Visual Identity Design", "Logo Design"],
        provider: { "@id": "https://dewank.com/#organization" },
        areaServed: "Worldwide",
        offers: { "@type": "Offer", price: String(offerPricing["name-identity-bundle"].initial.amount), priceCurrency: "SAR", availability: "https://schema.org/InStock", url },
        url,
        inLanguage: "en",
      },
      { "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: allFaqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://dewank.com/en" },
          { "@type": "ListItem", position: 2, name: "Offers", item: "https://dewank.com/en/offers" },
          { "@type": "ListItem", position: 3, name: "Brand naming + visual identity", item: url },
        ],
      },
    ],
  };

  return (
    <main id="main-content" className="inner-page offers-page oe-page en-service" lang="en" dir="ltr">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

      <section className="shell offer-detail-hero">
        <div>
          <div className="offer-availability"><span className="offer-spots-available"><i aria-hidden="true" />Two stages: the name, then the identity</span></div>
          <h1>Brand name and logo design<br/><em>One branding package for a new business</em></h1>
          <p>We choose your business name with you first, then build an essential visual identity on the chosen name. Two connected stages with one team that understands your project from the start, for less than ordering both packages separately.</p>
          <div className="oe-hero-actions">
            <p className="oe-price">Bundle price <OfferPrice offerKey="name-identity-bundle" className="oe-price-value" /></p>
            <a id="order-hero" className="button primary offer-consultation-cta" href={contactLink} target="_blank" rel="noopener noreferrer">Start your brand <span>→</span></a>
            {crmVisible && <CrmOfferContactLink locale="en" offer="name-identity" />}
            <OfferMicro offer="bundle" locale="en" />
          </div>
        </div>
        <aside className="offer-price-panel">
          <small>Bundle price</small>
          <OfferPrice offerKey="name-identity-bundle" className="offer-price" />
          <NameIdentitySavingEn />
          <div className="offer-trust-inline"><span>10–15 names</span><span>Logo and essential identity</span><span>3 applications</span></div>
          <p>It does not include trade name reservation, trademark registration, official fees or a full brand strategy.</p>
          <a id="order-cta" className="button primary offer-consultation-cta" href={contactLink} target="_blank" rel="noopener noreferrer">Start your brand <span>→</span></a>
        </aside>
      </section>

      <OfferSample offer="bundle" locale="en" />

      <section className="shell offer-deliverables">
        <div><span className="section-label">Stage one · 3–5 working days</span><h2>We choose the name</h2><p>The same scope as the brand naming package.</p></div>
        <div className="deliverable-list">{namingSteps.map(([item, text]) => <article className="deliverable-item" key={item}><b>{item}</b><p>{text}</p></article>)}</div>
      </section>

      <section className="shell offer-deliverables">
        <div><span className="section-label">Stage two · 7–10 working days</span><h2>We build the identity on the chosen name</h2><p>The same scope as the essential visual identity package.</p></div>
        <div className="deliverable-list">{identitySteps.map(([item, text]) => <article className="deliverable-item" key={item}><b>{item}</b><p>{text}</p></article>)}</div>
      </section>

      <section className="shell offer-confidence">
        <div className="offer-confidence-head"><span className="section-label">Why together?</span><h2>The name and the identity are one decision</h2></div>
        <div className="offer-confidence-grid">
          <article><b>01</b><span>The identity is built on a name you chose and checked, so you do not design a logo for a name you may change later.</span></article>
          <article><b>02</b><span>One team understands your business and audience from day one, so the same thinking carries from the name to the look.</span></article>
          <article><b>03</b><span>The package costs less than ordering the naming and identity packages separately.</span></article>
        </div>
        <details className="offer-policy"><summary>What the package does not include</summary><p>Trade name reservation, trademark registration and official fees, legal advice, a full brand strategy, a detailed identity manual, packaging, website design, account management, and applications beyond the three agreed.</p></details>
      </section>

      <OfferClientProof review="bithan" locale="en" />

      <OfferGuide offer="bundle" locale="en" />

      <section className="shell offer-faq" id="faq"><div className="offer-faq-head"><span className="section-label">Frequently asked questions</span><h2>Before you start</h2></div><div className="offer-faq-list">{allFaqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>

      <section id="order-final" className="shell offer-final-cta">
        <span className="offer-kicker">Brand naming + visual identity</span>
        <h2>Start your brand with a clear name and a consistent look</h2>
        <p>Send us your business, audience and target market, and we will start with the naming stage.</p>
        <a className="button primary offer-consultation-cta" href={contactLink} target="_blank" rel="noopener noreferrer">Start your brand <span>→</span></a>
        <div className="offer-bundle-links"><Link href="/en/offers/brand-naming">Brand naming only</Link><Link href="/en/offers/visual-identity">Essential identity only</Link><Link href="/en/offers">Back to offers</Link></div>
      </section>
      <EnOfferSticky watchIds={["order-hero", "order-cta", "order-final", "order-footer"]} href={contactLink} label="Start your brand" priceLabel="Name + identity" offerKey="name-identity-bundle" />
      <div id="order-footer"><Footer /></div>
    </main>
  );
}
