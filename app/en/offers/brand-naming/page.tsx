import Link from "next/link";
import { enMetadata } from "../../_en/metadata";
import { Footer } from "../../_en/parity/footer";
import { Header } from "../../_en/parity/header";
import { OfferPrice } from "../../_en/lib/localized-price";
import { whatsappHref } from "../../_en/lib/site";
// The Arabic brand naming offer's layout and styles, reused unchanged. English-only direction and type overrides follow.
import "../../../offers/offers-page.css";
import "../../../offers/offer-trust.css";
import "../../../offers/brand-naming/brand-naming-offer.css";
import "../../_en/parity/service-pages.en.css";
import "../../_en/styles/hide-arabic-widgets.css";

export const metadata = enMetadata(
  "Brand naming offer: 10–15 names, a top three and a brand direction",
  "A defined brand naming package for new brands: 10–15 considered names, linguistic and cultural checks, preliminary similarity and domain research, a top three shortlist and an initial brand direction.",
  "/en/offers/brand-naming",
);

const deliverables = [
  ["10–15 considered names", "Names built on your business, audience, market and growth ambitions, not a random list of words."],
  ["Meaning and reasoning", "An explanation of each name's idea, how it is pronounced, and why it can work commercially for your business."],
  ["Linguistic and cultural check", "A first review of meanings, pronunciation and likely associations in English and Arabic, depending on the market."],
  ["Preliminary similarity check", "An initial search for similar names and brands to reduce the chance of conflict. It does not guarantee official registration."],
  ["Domains and handles", "A check at the time of the search for domain and username availability, with practical alternatives where needed."],
  ["Top three recommendations", "A short final list of the best three names, compared on distinctiveness, clarity, scalability and ease of use."],
  ["An initial brand direction", "A preliminary direction for the personality, tone of voice, visual mood and keywords that suit the chosen name."],
  ["One development round", "The development of one direction based on specific feedback, if the first round does not settle the choice."],
];

const faqs = [
  ["What does a brand naming package cost?", "The package starts at the price shown above, in US dollars by default or in your country's approved price where one exists. It covers the research, the naming, the short list and the initial brand direction. It does not cover government fees or trademark registration."],
  ["How many names will I receive?", "Usually 10–15 considered names. We then recommend the best three, based on clear criteria that help you decide."],
  ["What is meant by an initial brand direction?", "It is a preliminary picture of the brand once the name is chosen: the personality, tone of voice, visual mood and the words the identity should reflect later. It does not include a logo or a full visual identity."],
  ["Do you guarantee that the name will be accepted or registered?", "No. We carry out a preliminary check of similarity, meaning and availability to reduce risk. The final decision on acceptance and registration rests with the official authority."],
  ["Is the naming package the same as the BITHAN project?", "No. BITHAN is a case study of a naming and identity project for a jewellery house in Qatar, and the visual identity is outside this package. This package covers 10–15 names, a preliminary check, a top three, an initial brand direction and one development round."],
  ["Does the service include booking the domain?", "It includes checking domain availability at the time of the search. Buying the domain and its fees are not part of the package, because availability can change right up to the moment of purchase."],
  ["How long does delivery take?", "Usually 3–5 working days after we receive information about the business, the market, the audience and your preferred directions."],
];

export default function BrandNamingOfferPage() {
  const contactLink = whatsappHref("Hello Dewank, I would like the brand naming package for my new brand. My business is: ");
  const url = "https://dewank.com/en/offers/brand-naming";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "Brand naming package with an initial brand direction",
        description: "A defined brand naming package with 10–15 considered names, linguistic and cultural checks, preliminary similarity and domain research, a top three and an initial brand direction.",
        serviceType: ["Brand Naming", "Brand Direction", "Domain Availability Research"],
        provider: { "@id": "https://dewank.com/#organization" },
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
          { "@type": "ListItem", position: 3, name: "Brand naming", item: url },
        ],
      },
    ],
  };

  return (
    <main id="main-content" className="inner-page offers-page brand-naming-offer-page en-service" lang="en" dir="ltr">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

      <section className="shell offer-detail-hero brand-naming-hero">
        <div>
          <div className="offer-availability"><span className="offer-spots-available"><i aria-hidden="true" /><strong>3–5</strong> working days</span></div>
          <h1>A name that does more than fill a space.<br/><em>It opens room to grow.</em></h1>
          <p>We develop a brand name you can understand, remember and use, then give you an initial brand direction so the identity does not start from nothing.</p>
          <div className="brand-naming-answer" aria-label="The short answer">
            <b>The short answer</b>
            <span>You receive 10–15 considered names, a top three, a preliminary check of meaning, similarity and domain, and an initial brand direction for the chosen name.</span>
          </div>
        </div>
        <aside className="offer-price-panel brand-naming-price-panel">
          <small>The defined package</small>
          <OfferPrice offerKey="brand-naming" className="offer-price" />
          <div className="offer-trust-inline"><span>10–15 names</span><span>Top three</span><span>Initial brand direction</span></div>
          <p>The package does not include trademark registration, domain purchase or a full visual identity.</p>
          <p className="brand-naming-next">Send us your business type and target market, and we will start with a short summary of your project before the research.</p>
          <a className="button primary" href={contactLink} target="_blank" rel="noopener noreferrer">Start choosing the name <span>→</span></a>
        </aside>
      </section>

      <section className="shell brand-naming-case" aria-labelledby="brand-naming-case-title">
        <div>
          <span className="section-label">A real naming project</span>
          <h2 id="brand-naming-case-title">BITHAN: a fine jewellery brand in Qatar.</h2>
          <p>The client chose the name BITHAN after a strategic brief, a short list, a development round, and a preliminary domain and similarity check. That check is not a legal clearance. The visual identity that followed the name is outside the scope of this package.</p>
        </div>
        <div>
          <ul className="brand-naming-case-steps" aria-label="Stages of the naming project">
            <li>Strategic brief</li><li>Generation and filtering</li><li>Short list</li><li>Development with the client</li><li>Preliminary check</li><li>Client decision</li>
          </ul>
          <Link className="brand-naming-case-link" href="/en/work/bithan">Read the full case study ↗</Link>
        </div>
      </section>

      <section className="shell brand-naming-proof">
        <div className="brand-naming-proof-copy">
          <span className="section-label">How we decide</span>
          <h2>A good name passes more than one taste test.</h2>
          <p>We compare the options on distinctiveness, ease of pronunciation, memorability, fit with the market, future flexibility and digital availability. The goal is not a name we like, but a name a brand can be built around.</p>
        </div>
        <div className="brand-direction-board" aria-label="Illustrative example of a brand direction">
          <div className="brand-direction-top"><span>Initial brand direction, example</span><small>After the name is chosen</small></div>
          <div className="brand-direction-name">NOVA<span>FIELD</span></div>
          <div className="brand-direction-tags"><span>Clear</span><span>Confident</span><span>Modern</span><span>Scalable</span></div>
          <div className="brand-direction-grid"><article><small>Tone of voice</small><b>Direct · smart · calm</b></article><article><small>Visual mood</small><b>Simple · editorial · bold</b></article><article><small>Positioning</small><b>A flexible brand that grows with the business</b></article></div>
        </div>
      </section>

      <section className="shell offer-deliverables brand-naming-deliverables">
        <div><span className="section-label">What you receive</span><h2>From the idea.<br/>To a decision you can defend.</h2><p>Every element is designed to reduce guesswork before you start the logo, the identity and the launch.</p></div>
        <div className="deliverable-list">{deliverables.map(([item, text]) => <article className="deliverable-item" key={item}><b>{item}</b><p>{text}</p></article>)}</div>
      </section>

      <section className="shell brand-naming-process">
        <div className="brand-naming-process-head"><span className="section-label">Three steps</span><h2>A short summary. Deep research. A clear decision.</h2></div>
        <div className="brand-naming-process-grid">
          <article><b>01</b><h3>We understand the business</h3><p>The activity, the market, the audience, the competitors, the kind of name needed and the growth ambitions.</p></article>
          <article><b>02</b><h3>We research and build</h3><p>We create different naming directions, then filter them by meaning, pronunciation, similarity and digital availability.</p></article>
          <article><b>03</b><h3>We settle the direction</h3><p>You receive the list of names, then the top three. Once you choose, we prepare the initial brand direction.</p></article>
        </div>
      </section>

      <section className="shell offer-confidence brand-naming-confidence">
        <div className="offer-confidence-head"><span className="section-label">Clear limits</span><h2>Research reduces the risk. It does not remove it.</h2></div>
        <div className="offer-confidence-grid"><article><b>01</b><span>The legal check we provide is preliminary. It is not legal advice or a guarantee of registration.</span></article><article><b>02</b><span>Domain and handle availability is checked at the time of the search and may change before you buy.</span></article><article><b>03</b><span>The logo and the full visual identity are a separate service, after the name is approved.</span></article></div>
        <details className="offer-policy"><summary>What the offer does not include</summary><p>It does not include official government fees, trademark registration, domain purchase, logo or full identity design, or specialist legal research across several classes and markets.</p></details>
      </section>

      <section className="shell offer-faq" id="faq"><div className="offer-faq-head"><span className="section-label">Frequently asked questions</span><h2>Before you choose your name.</h2></div><div className="offer-faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>

      <section className="shell offer-final-cta brand-naming-final">
        <span className="offer-kicker">Brand naming · initial brand direction</span>
        <h2>Before you design the logo, choose a name worth putting it on.</h2>
        <p>Send us your business type and target market, and we will start with a short summary of your project before the research.</p>
        <a className="button primary" href={contactLink} target="_blank" rel="noopener noreferrer">Start choosing your brand name <span>→</span></a>
        <div className="brand-naming-links"><Link href="/en/brand-naming">Details of the naming service</Link><Link href="/en/branding">Brand strategy and identity</Link><Link href="/en/offers">Back to offers</Link></div>
      </section>
      <Footer />
    </main>
  );
}
