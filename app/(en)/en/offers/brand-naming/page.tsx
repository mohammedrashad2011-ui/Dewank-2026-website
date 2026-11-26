import "@/app/components/crm-contact-preview.css";
import Link from "next/link";
import { enMetadata } from "../../_en/metadata";
import { Footer } from "../../_en/parity/footer";
import { Header } from "../../_en/parity/header";
import { OfferPrice } from "../../_en/lib/localized-price";
import { whatsappHref } from "../../_en/lib/site";
import { NameToIdentity } from "../../../../(ar)/offers/brand-naming/name-to-identity";
import { StickyOfferBar } from "../../../../(ar)/offers/brand-naming/sticky-offer-bar";
import { NamingCaseFile, NamingReviews, NamingRisk, NamingSectors, extraFaqs } from "../../../../(ar)/offers/brand-naming/naming-extras";
// The Arabic brand naming offer's layout and styles, reused unchanged. English-only direction and type overrides follow.
import "../../../../(ar)/offers/offers-page.css";
import "../../../../(ar)/offers/offer-trust.css";
import "../../../../(ar)/offers/brand-naming/brand-naming-offer.css";
import "../../../../(ar)/offers/brand-naming/brand-naming-v2.css";
import "../../../../(ar)/offers/brand-naming/brand-naming-extras.css";
import "../../_en/parity/service-pages.en.css";
import "../../_en/styles/hide-arabic-widgets.css";

export const metadata = enMetadata(
  "Brand Naming Services: 10–15 Names and 3 Taglines",
  "Brand naming services in English and Arabic: 10–15 researched names, a top three, 3 taglines, and similarity, domain and social handle checks.",
  "/en/offers/brand-naming",
);

const deliverables = [
  ["10–15 considered names", "Names built on your business, audience, market and growth ambitions, not a random list of words."],
  ["Meaning and reasoning", "An explanation of each name's idea, how it is pronounced, and why it can work commercially for your business."],
  ["Linguistic and cultural check", "A first review of meanings, pronunciation and likely associations in English and Arabic, depending on the market."],
  ["Preliminary similarity check", "An initial search for similar names and brands to reduce the chance of conflict. It does not guarantee official registration."],
  ["Domain", "A check at the time of the search of the right domain for each recommendation, with practical alternatives where needed."],
  ["Social media handles", "A check at the time of the search of username availability for your top three on Instagram, TikTok, X and Snapchat, with suggested alternatives where needed."],
  ["Top three recommendations", "A short final list of the best three names, compared on distinctiveness, clarity, scalability and ease of use."],
  ["3 taglines", "3 short taglines for the name you choose, in Arabic or English, with the reason for each."],
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
  ["Days 2–4", "We research, build and check", "Different naming directions, then filtering by meaning, pronunciation, similarity, domain and social handles."],
  ["Day 5", "You receive a clear decision", "10–15 names, a top three with a clear comparison, 3 taglines and an initial direction for the chosen name."],
];

const faqs = [
  ["What does the brand naming package include?", "It includes 10–15 considered names, a preliminary check of meaning, pronunciation, similarity, domain and social handle availability, a top three, an initial brand direction, 3 taglines for the name you choose, and one development round. Delivery usually takes 3–5 working days. The package does not cover government fees or trademark registration, and the preliminary check is not a guarantee of acceptance or registration."],
  ["How many names will I receive?", "Usually 10–15 considered names. We then recommend the best three, based on clear criteria that help you decide."],
  ["What is meant by an initial brand direction?", "It is a preliminary picture of the brand once the name is chosen: the personality, tone of voice, visual mood and the words the identity should reflect later. It does not include a logo or a full visual identity."],
  ["Do you guarantee that the name will be accepted or registered?", "No. We carry out a preliminary check of similarity, meaning and availability to reduce risk. The final decision on acceptance and registration rests with the official authority."],
  ["What if none of the names feels right?", "You receive one development round based on your specific feedback, if the choice is not settled in the first round."],
  ["How do I choose a good brand name for my business?", "Start with what the name should say to your customers: does it describe your activity or reflect your value? Then test how it sounds and reads in Arabic and English, check that it does not closely resemble a competitor in your field, and confirm the domain and social handles are available. A preliminary check reduces risk, but acceptance and registration are decided by the official authority."],
  ["What is the difference between a list of suggested company names and a distinctive, researched business name?", "Ready-made lists of suggested company names give you generic words that others may already use. A distinctive business name is built on your activity, audience and market, then given a preliminary check of meaning, pronunciation, similarity and domain availability. That is why you receive 10–15 considered names, each with its reasoning, and our top three, so you can choose a distinctive company name with confidence."],
  ["Does the service include booking the domain?", "It includes checking domain and social handle availability at the time of the search. Buying the domain, its fees and opening the accounts are not part of the package, because availability can change right up to the moment of purchase."],
  ["How long does delivery take?", "Usually 3–5 working days after we receive information about the business, the market, the audience and your preferred directions."],
];

const allFaqs = [...faqs, ...extraFaqs.en];

export default function BrandNamingOfferPage() {
  const contactLink = whatsappHref("Hello Dewank, I would like to start naming my brand with your brand naming package. My business is: ");
  const url = "https://dewank.com/en/offers/brand-naming";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "Brand naming package with an initial brand direction",
        description: "A defined brand naming package with 10–15 considered names, linguistic and cultural checks, preliminary similarity and domain research, a top three and an initial brand direction.",
        serviceType: ["Brand Naming", "Tagline Writing", "Social Media Handle Research", "Brand Direction", "Domain Availability Research"],
        provider: { "@id": "https://dewank.com/#organization" },
        areaServed: "Worldwide",
        offers: { "@type": "Offer", price: "490", priceCurrency: "SAR", availability: "https://schema.org/InStock", url: "https://dewank.com/en/offers/brand-naming" },
        url,
        inLanguage: "en",
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: allFaqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
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
          <p className="bn2-lede">We develop 10–15 considered names for your business and recommend the best three after checking meaning, pronunciation, similarity, domain and social handles, with 3 taglines for the name you choose. The complete package is <OfferPrice offerKey="brand-naming" className="bn2-inline-price" />.</p>
          <div className="bn2-hero-actions">
            <a id="bn2-hero-cta" className="button primary offer-consultation-cta bn2-cta" href={contactLink} target="_blank" rel="noopener noreferrer">Start naming your brand <span aria-hidden="true">→</span></a>
            <p className="bn2-microcopy">No commitment. Tell us your business type and city, and we will reply with the next step.</p>
            {process.env.VERCEL_ENV === "preview" && <a className="crm-preview-contact-link" href="/en/contact?offer=brand-naming#brief-form">Prefer us to contact you? Leave your number</a>}
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

      <NamingReviews locale="en" />

      <section className="shell bn2-fit" aria-labelledby="bn2-fit-title">
        <h2 id="bn2-fit-title">This package fits you if</h2>
        <div className="bn2-fit-grid">
          {fits.map(([head, text]) => <article key={head}><h3>{head}</h3><p>{text}</p></article>)}
        </div>
        <NamingRisk locale="en" />
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
          <p className="bn2-price-note">A fixed price covering the research, the naming, the short list, the taglines and the initial brand direction.</p>
          <p className="bn3-assure">If the first round does not settle your choice, one development round is included in the price.</p>
          <a className="button primary offer-consultation-cta bn2-cta" href={contactLink} target="_blank" rel="noopener noreferrer">Start naming your brand <span aria-hidden="true">→</span></a>
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
          <NamingCaseFile locale="en" />
          <Link className="brand-naming-case-link" href="/en/work/bithan">Read the full case study ↗</Link>
        </div>
      </section>

      <NamingSectors locale="en" />

      <section className="shell brand-naming-proof">
        <div className="brand-naming-proof-copy">
          <span className="section-label">How we decide</span>
          <h2>A good name passes more than one taste test</h2>
          <p>We compare the options on distinctiveness, ease of pronunciation, memorability, fit with the market, future flexibility and digital availability. The goal is not a name we like, but a name a brand can be built around.</p>
        </div>
        <NameToIdentity locale="en" />
      </section>

      <section className="shell offer-faq" id="faq"><div className="offer-faq-head"><span className="section-label">Frequently asked questions</span><h2>Before you choose your name</h2></div><div className="offer-faq-list">{allFaqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>

      <section className="shell offer-final-cta brand-naming-final bn2-final">
        <span className="offer-kicker">Brand naming · initial brand direction</span>
        <h2>Before you design the logo, choose a name worth putting it on</h2>
        <p>Send us your business type and target market, and we will start with a short summary of your project before the research.</p>
        <a id="bn2-final-cta" className="button primary offer-consultation-cta bn2-cta" href={contactLink} target="_blank" rel="noopener noreferrer">Start naming your brand <span aria-hidden="true">→</span></a>
        <div className="brand-naming-links"><Link href="/en/offers/name-identity">Name and identity together, for less</Link><Link href="/en/brand-naming">Details of the naming service</Link><Link href="/en/branding">Brand strategy and identity</Link><Link href="/en/offers">Back to offers</Link></div>
      </section>

      <StickyOfferBar
        watchIds={["bn2-hero-cta", "bn2-final-cta"]}
        href={contactLink}
        label="Start naming"
        priceLabel="Complete package"
        price={<OfferPrice offerKey="brand-naming" className="bn2-sticky-amount" />}
        arrow="→"
      />
      <Footer />
    </main>
  );
}
