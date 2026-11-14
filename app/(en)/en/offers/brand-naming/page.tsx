import Link from "next/link";
import { enMetadata } from "../../_en/metadata";
import { Footer } from "../../_en/parity/footer";
import { Header } from "../../_en/parity/header";
import { OfferPrice } from "../../_en/lib/localized-price";
import { whatsappHref } from "../../_en/lib/site";
import { NameToIdentity } from "../../../../(ar)/offers/brand-naming/name-to-identity";
import { StickyOfferBar } from "../../../../(ar)/offers/brand-naming/sticky-offer-bar";
// The Arabic brand naming offer's layout and styles, reused unchanged. English-only direction and type overrides follow.
import "../../../../(ar)/offers/offers-page.css";
import "../../../../(ar)/offers/offer-trust.css";
import "../../../../(ar)/offers/brand-naming/brand-naming-offer.css";
import "../../../../(ar)/offers/brand-naming/brand-naming-v2.css";
import "../../_en/parity/service-pages.en.css";
import "../../_en/styles/hide-arabic-widgets.css";

export const metadata = enMetadata(
  "Brand naming agency offer: 10–15 names and a direction",
  "Brand naming with 10–15 considered names, linguistic and cultural checks, similarity and domain research, a top three and a brand direction.",
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

// Illustrative names only. They show the format of the short list and are labelled on the page as an example, not as
// client work. They match the Arabic page.
const sampleNames = [
  { name: "Wahaj", arabic: "وَهَج", note: "A warm presence, easy to say" },
  { name: "Samar", arabic: "سَمار", note: "A calm evening mood for hospitality" },
  { name: "Najd", arabic: "نَجد", note: "A local root that can scale" },
];

const fits = [
  ["You are opening your first business", "A restaurant, a café, an online store or a new service, and you need a name before the registration and the logo."],
  ["Your current name does not represent you", "It is common, hard to pronounce, or does not suit the market you want to grow into."],
  ["You need a name in Arabic and English", "A name that is easy to write and say in both languages and works for the domain and social handles."],
  ["You are torn between many names", "You have ideas but do not know which is stronger commercially and less similar to what already exists."],
];

const steps = [
  ["Day 1", "You send your idea", "Business type, city or market, and audience. One WhatsApp message is enough to start."],
  ["Days 2–4", "We research, build and check", "Different naming directions, then filtering by meaning, pronunciation, similarity and domain."],
  ["Day 5", "You receive a clear decision", "10–15 names, a top three with a clear comparison, and an initial direction for the chosen name."],
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
  const contactLink = whatsappHref("Hello Dewank, I would like a free initial consultation about your brand naming package. My business is: ");
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
    <main id="main-content" className="inner-page offers-page brand-naming-offer-page en-service bn2" lang="en" dir="ltr">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

      {/* On a phone the headline, the price and the WhatsApp CTA all sit in the first screen. */}
      <section className="shell bn2-hero" aria-labelledby="bn2-title">
        <div className="bn2-hero-copy">
          <p className="bn2-kicker"><i aria-hidden="true" />Defined package · 3–5 working days</p>
          <h1 id="bn2-title">A brand name <em>your customers will remember</em></h1>
          <p className="bn2-lede">We develop 10–15 considered names for your business and recommend the best three after checking meaning, pronunciation, similarity and domain availability. The complete package is <OfferPrice offerKey="brand-naming" className="bn2-inline-price" />.</p>
          <div className="bn2-hero-actions">
            <a id="bn2-hero-cta" className="button primary offer-consultation-cta bn2-cta" href={contactLink} target="_blank" rel="noopener noreferrer">Get a free consultation on WhatsApp <span aria-hidden="true">→</span></a>
            <p className="bn2-microcopy">No commitment. Tell us your business type and city, and we will reply with the next step.</p>
          </div>
          <ul className="bn2-facts" aria-label="What the package includes">
            <li><b>10–15</b><span>names</span></li>
            <li><b>3</b><span>top picks</span></li>
            <li><b>1</b><span>revision round</span></li>
          </ul>
        </div>

        <figure className="bn2-deck" aria-label="An illustrative example of the short list">
          <figcaption className="bn2-deck-head"><span>The short list</span><small>Illustrative example</small></figcaption>
          <div className="bn2-deck-brief"><small>Project brief</small><p>Specialty coffee shop in Riyadh · young audience · planning more branches</p></div>
          <ol className="bn2-deck-list">
            {sampleNames.map((item, index) => (
              <li key={item.name} style={{ ["--i" as string]: index }}>
                <span className="bn2-deck-rank">0{index + 1}</span>
                <span className="bn2-deck-name"><b>{item.name}</b><small lang="ar" dir="rtl">{item.arabic}</small></span>
                <span className="bn2-deck-note">{item.note}</span>
                <span className="bn2-deck-checks" aria-label="Preliminary checks"><i>Meaning</i><i>Pronunciation</i><i>Domain</i></span>
              </li>
            ))}
          </ol>
        </figure>
      </section>

      <section className="shell bn2-fit" aria-labelledby="bn2-fit-title">
        <h2 id="bn2-fit-title">This package fits you if</h2>
        <div className="bn2-fit-grid">
          {fits.map(([head, text]) => <article key={head}><h3>{head}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="shell bn2-steps" aria-labelledby="bn2-steps-title">
        <div className="bn2-section-head">
          <h2 id="bn2-steps-title">From one WhatsApp message to a name you can choose with confidence</h2>
          <p>No long forms and no meetings. A short summary of your project is enough to start the research.</p>
        </div>
        <ol className="bn2-steps-list">
          {steps.map(([when, head, text]) => <li key={head}><small>{when}</small><h3>{head}</h3><p>{text}</p></li>)}
        </ol>
      </section>

      <section className="shell bn2-offer" aria-labelledby="bn2-offer-title">
        <div className="bn2-offer-copy">
          <h2 id="bn2-offer-title">Exactly what you receive</h2>
          <ul className="bn2-deliverables">
            {deliverables.map(([item, text]) => <li key={item}><b>{item}</b><p>{text}</p></li>)}
          </ul>
        </div>
        <aside className="offer-price-panel brand-naming-price-panel bn2-price" aria-label="Package price">
          <small>The defined package</small>
          <OfferPrice offerKey="brand-naming" className="offer-price" />
          <p className="bn2-price-note">A fixed price covering the research, the naming, the short list and the initial brand direction.</p>
          <a className="button primary offer-consultation-cta bn2-cta" href={contactLink} target="_blank" rel="noopener noreferrer">Get a free consultation on WhatsApp <span aria-hidden="true">→</span></a>
          <details className="bn2-excludes">
            <summary>What the offer does not include</summary>
            <p>It does not include official government fees, trademark registration, domain purchase, logo or full identity design, or specialist legal research across several classes and markets. The check we provide is preliminary. It is not legal advice or a guarantee of registration, and domain availability may change before you buy.</p>
          </details>
        </aside>
      </section>

      <section className="shell brand-naming-case bn2-case" aria-labelledby="brand-naming-case-title">
        <div>
          <span className="section-label">A real naming project</span>
          <h2 id="brand-naming-case-title">BITHAN: a fine jewellery brand in Qatar</h2>
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
          <h2>A good name passes more than one taste test</h2>
          <p>We compare the options on distinctiveness, ease of pronunciation, memorability, fit with the market, future flexibility and digital availability. The goal is not a name we like, but a name a brand can be built around.</p>
        </div>
        <NameToIdentity locale="en" />
      </section>

      <section className="shell offer-faq" id="faq"><div className="offer-faq-head"><span className="section-label">Frequently asked questions</span><h2>Before you choose your name</h2></div><div className="offer-faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>

      <section className="shell offer-final-cta brand-naming-final bn2-final">
        <span className="offer-kicker">Brand naming · initial brand direction</span>
        <h2>Before you design the logo, choose a name worth putting it on</h2>
        <p>Send us your business type and target market, and we will start with a short summary of your project before the research.</p>
        <a id="bn2-final-cta" className="button primary offer-consultation-cta bn2-cta" href={contactLink} target="_blank" rel="noopener noreferrer">Get a free consultation on WhatsApp <span aria-hidden="true">→</span></a>
        <div className="brand-naming-links"><Link href="/en/brand-naming">Details of the naming service</Link><Link href="/en/branding">Brand strategy and identity</Link><Link href="/en/offers">Back to offers</Link></div>
      </section>

      <StickyOfferBar
        watchIds={["bn2-hero-cta", "bn2-final-cta"]}
        href={contactLink}
        label="Free consultation on WhatsApp"
        priceLabel="Complete package"
        price={<OfferPrice offerKey="brand-naming" className="bn2-sticky-amount" />}
        arrow="→"
      />
      <Footer />
    </main>
  );
}
