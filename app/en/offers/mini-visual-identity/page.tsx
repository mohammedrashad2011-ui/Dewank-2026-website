import Link from "next/link";
import { enMetadata } from "../../_en/metadata";
import { Footer } from "../../_en/parity/footer";
import { Header } from "../../_en/parity/header";
import { OfferPrice } from "../../_en/lib/localized-price";
import { whatsappHref } from "../../_en/lib/site";
// The Arabic mini visual identity offer's layout and styles, reused unchanged. English-only direction and type overrides follow.
import "../../../offers/offers-page.css";
import "../../../offers/offer-trust.css";
import "../../../offers/mini-visual-identity/mini-visual-identity.css";
import "../../_en/parity/service-pages.en.css";
import "../../_en/styles/hide-arabic-widgets.css";

export const metadata = enMetadata(
  "Mini visual identity: a logo system and first applications",
  "A mini visual identity package for businesses worldwide: a primary logo and a simplified version, a colour palette, suggested typefaces, a visual direction, three practical applications and a short guidelines file.",
  "/en/offers/mini-visual-identity",
);

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
  ["How much does a mini visual identity cost?", "The package starts at the price shown above, in US dollars by default or in your country's approved price where one exists. It includes the primary logo, the colour palette, typefaces, the visual direction, three practical applications and a short guidelines file."],
  ["Is this package only a logo?", "No. It includes the primary logo with a simplified version, a colour palette, suggested typefaces, a visual direction, three practical applications and a short guidelines file. It is not a complete brand identity, so it does not include brand strategy or naming."],
  ["What is the difference between this and a full visual identity?", "The mini package suits a business that needs a professional visual foundation quickly. A full identity usually includes broader research, brand strategy, a messaging system, more applications and a detailed usage guide."],
  ["Does it include choosing the brand name?", "No. The name should be approved before design starts. If you have not chosen a name yet, you can start with the brand naming package first."],
  ["Does it include content writing or social media management?", "No. The package builds the basic visual system. Content creation and account management are separate services."],
  ["How long does it take?", "Delivery usually takes 7–10 working days after we receive the project information and approve the initial direction."],
  ["What files will I receive?", "You receive the primary logo files for digital use and print, the colour codes, the suggested typefaces, the agreed applications and the short guidelines file."],
];

export default function MiniVisualIdentityOffer() {
  const contactLink = whatsappHref("Hello Dewank, I would like a mini visual identity for my business. My business is: ");
  const url = "https://dewank.com/en/offers/mini-visual-identity";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "Mini visual identity package",
        description: "A mini visual identity package: a primary logo and a simplified version, a colour palette, suggested typefaces, a visual direction, three practical applications and a short guidelines file.",
        serviceType: ["Visual Identity Design", "Logo Design", "Brand Identity"],
        provider: { "@type": "Organization", name: "Dewank", url: "https://dewank.com/en" },
        areaServed: "Worldwide",
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
          { "@type": "ListItem", position: 3, name: "Mini visual identity", item: url },
        ],
      },
    ],
  };

  return (
    <main className="inner-page offers-page mini-identity-page en-service" lang="en" dir="ltr">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

      <section className="shell offer-detail-hero mini-identity-hero">
        <div>
          <div className="offer-availability"><span className="offer-spots-available"><i aria-hidden="true" /><strong>7–10</strong> working days</span></div>
          <h1>More than a logo.<br/><em>The start of a form people recognise.</em></h1>
          <p>We build a coherent visual foundation that makes your brand look professional from day one, from the logo and colours to the typefaces and the essential applications.</p>
          <div className="mini-identity-answer" aria-label="The short answer">
            <b>The short answer</b>
            <span>You receive a primary logo and a simplified version, a colour palette, suggested typefaces, a visual direction, three practical applications and a short guidelines file.</span>
          </div>
        </div>
        <aside className="offer-price-panel mini-identity-price-panel">
          <small>Mini package from</small>
          <OfferPrice offerKey="mini-visual-identity" className="offer-price" />
          <div className="offer-trust-inline"><span>Primary logo</span><span>3 applications</span><span>Two revision rounds</span></div>
          <p>It does not include a full brand strategy, naming, content management or extended applications beyond the agreed scope.</p>
          <a className="button primary" href={contactLink} target="_blank" rel="noopener noreferrer">Start your identity <span>→</span></a>
        </aside>
      </section>

      <section className="shell mini-identity-proof">
        <div className="mini-identity-proof-copy">
          <span className="section-label">Why a mini identity?</span>
          <h2>Because improvised visuals<br/>tire a brand quickly.</h2>
          <p>A young business does not always need a large brand system. It does need enough visual rules to stop every new design from looking like it belongs to a different company.</p>
        </div>
        <div className="identity-board" aria-label="Illustrative example of the components of a visual identity">
          <div className="identity-board-top"><span>MINI IDENTITY / SAMPLE</span><small>A usable visual system</small></div>
          <div className="identity-logo-mark">NOVA<span>CO.</span></div>
          <div className="identity-colors"><i /><i /><i /><i /></div>
          <div className="identity-board-grid">
            <article><small>Logo</small><b>Primary + simplified</b></article>
            <article><small>Colours</small><b>Primary + supporting</b></article>
            <article><small>Typefaces</small><b>Headings + text</b></article>
          </div>
        </div>
      </section>

      <section className="shell offer-deliverables mini-identity-deliverables">
        <div><span className="section-label">What you receive</span><h2>The foundation your business needs<br/>to appear consistently.</h2><p>We focus on the elements you will use in practice at the start of the brand, rather than inflating the package with items you do not need yet.</p></div>
        <div className="deliverable-list">{deliverables.map(([item, text]) => <article className="deliverable-item" key={item}><b>{item}</b><p>{text}</p></article>)}</div>
      </section>

      <section className="shell mini-identity-process">
        <div className="mini-identity-process-head"><span className="section-label">Three stages</span><h2>Understand. Set the direction. Then build the system.</h2></div>
        <div className="mini-identity-process-grid">
          <article><b>01</b><h3>We understand the business</h3><p>The activity, the audience, the competitors, the brand personality and what the customer should feel when they see it.</p></article>
          <article><b>02</b><h3>We set the direction</h3><p>We propose a visual direction that links the logo, colours and typefaces, rather than designing each element separately.</p></article>
          <article><b>03</b><h3>We apply and deliver</h3><p>We develop the approved elements, apply them to three practical examples, then deliver the files and the short guide.</p></article>
        </div>
      </section>

      <section className="shell offer-confidence mini-identity-confidence">
        <div className="offer-confidence-head"><span className="section-label">Who it is for</span><h2>A strong start without the complexity of a full identity.</h2></div>
        <div className="offer-confidence-grid"><article><b>01</b><span>A new project with an approved name that needs a professional look before launch.</span></article><article><b>02</b><span>A small business using a weak or inconsistent logo that wants a clearer foundation.</span></article><article><b>03</b><span>A founder who wants the website, social media and offers to look unified before expanding.</span></article></div>
        <details className="offer-policy"><summary>What the offer does not include</summary><p>It does not include a full brand strategy, naming research, a messaging system, a detailed identity manual, motion graphics, product packaging, website design, social media management, or an open number of applications and revisions.</p></details>
      </section>

      <section className="shell offer-faq" id="faq"><div className="offer-faq-head"><span className="section-label">Frequently asked questions</span><h2>Before we draw the first line.</h2></div><div className="offer-faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>

      <section className="shell offer-final-cta mini-identity-final">
        <span className="offer-kicker">Mini visual identity · 7–10 days</span>
        <h2>Make your project look like a brand, not a set of separate designs.</h2>
        <p>Send us your business type, name and target market, and we will set the direction before designing the logo.</p>
        <a className="button primary" href={contactLink} target="_blank" rel="noopener noreferrer">Start the visual identity <span>→</span></a>
        <div className="mini-identity-links"><Link href="/en/branding">Full brand strategy and identity</Link><Link href="/en/offers/brand-naming">Haven&apos;t chosen a name yet?</Link><Link href="/en/offers">Back to offers</Link></div>
      </section>
      <Footer />
    </main>
  );
}
