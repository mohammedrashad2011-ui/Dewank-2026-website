import Link from "next/link";
import { enMetadata } from "../_en/metadata";
import { Footer } from "../_en/parity/footer";
import { Header } from "../_en/parity/header";
import { OfferPrice } from "../_en/lib/localized-price";
import { whatsappHref } from "../_en/lib/site";
import BrandLab from "./brand-lab";
// The Arabic branding page's layout and styles, reused unchanged. English-only direction and type overrides follow.
import "../../../(ar)/branding/branding-page.css";
import "../../../(ar)/branding/branding-guides.css";
import "../../../(ar)/branding/branding-conversion-fixes.css";
import "../_en/parity/service-pages.en.css";
import "../_en/styles/hide-arabic-widgets.css";

export const metadata = enMetadata(
  "Brand strategy and visual identity",
  "Brand strategy, positioning, naming and visual identity for businesses worldwide: from the message and positioning to the logo, colours and a brand guide.",
  "/en/branding",
);

const outcomes = [
  ["Clear positioning", "Defining where your brand stands in the market, what makes it different, and why it fits the audience you want."],
  ["A persuasive message", "A proposed value and key messages that help a customer understand quickly why they should choose you."],
  ["A coherent identity", "A visual and verbal system that keeps one personality across the website, content and offers."],
];

const deliverables = [
  ["Brand research and diagnosis", "A review of the market, the audience, the competitors and the current brand, to find the real gap."],
  ["Positioning and proposed value", "Where the brand sits in the market, the promise it makes, why it is believed, and the main points of difference."],
  ["Naming and tagline", "A name or a verbal tagline where needed, judged on clarity, distinctiveness and ease of use."],
  ["Messaging system", "A core message, a tone of voice, short descriptions and communication angles that can be applied."],
  ["Visual identity", "The logo, colours, typefaces, supporting elements, the direction for images and the core applications."],
  ["Brand guidelines", "Practical rules that keep the identity consistent and help your team and suppliers apply it correctly."],
];

const process = [
  ["Discovery", "A focused session to understand the business, the market, the audience, the goals and the current challenges."],
  ["Research and diagnosis", "Analysis of the competition and context, and identification of the opportunity the brand can own."],
  ["Strategy", "Positioning, proposed value, personality and core messages, agreed before any design begins."],
  ["Design and development", "Turning those decisions into a visual direction, then developing the agreed system and applications."],
  ["Handover and activation", "Delivery of the files and guidelines, and an explanation of how to apply the identity across channels."],
];

const faqs = [
  ["What is the difference between brand strategy and visual identity?", "Brand strategy defines who you are, for whom, and why a customer should choose you. Visual identity turns those decisions into a visible system of logo, colours, typefaces and elements. Design without strategy can look attractive but rarely builds a clear difference."],
  ["Does the service include logo design?", "Yes, when logo design and identity are part of the agreed scope. We do not start by drawing; we start with research and positioning, so the logo carries a clear business meaning."],
  ["Can you develop an existing identity rather than replace it completely?", "Yes. We review the value of the current assets and how well the audience recognises them, then decide whether to develop the identity gradually or rebuild it."],
  ["How long does brand strategy and identity take?", "It depends on the depth of the research, the number of decision-makers and the outputs. After the discovery session we provide a clear timeline with stages and approval points."],
  ["How much does visual identity design cost?", "The cost depends on whether you need a visual identity only, or a full strategy that includes research, positioning, naming and a guide. We agree a clear scope before work starts, with no unclear fees. If you want a defined visual starting point, see the mini visual identity offer on this page."],
  ["Do I need only a logo, or a full identity?", "It depends on the stage. A logo alone suits a business that already has a visual base. A business that is starting out, or that needs consistency across the website, social media and print, needs a system covering colours, typefaces and applications. A full identity is worthwhile when you need research, positioning and wider usage rules."],
  ["What is the difference between the mini identity and the full identity?", "The mini identity is a defined starting point for a project with an approved name: a core logo, a colour palette, suggested typefaces, a visual direction, three applications and a short guide. It does not include brand strategy or naming. A full identity begins with research and positioning, includes a messaging system and a wider guide, and its scope is set after the discovery session."],
  ["Is the business name part of the identity service?", "Naming can be part of a full identity project where needed and agreed in scope, and it is also available as a separate offer with a visible price. The mini visual identity does not include choosing the name, so the name should be decided before design begins."],
  ["Do you work with businesses outside one country?", "Yes. We work with businesses worldwide, and the whole project can be delivered remotely."],
];

const brandOffers = [
  {
    href: "/en/brand-naming",
    label: "Before the identity",
    title: "Brand naming and an initial direction",
    text: "10–15 considered names, with preliminary checks for meaning, domain and similarity, and an initial brand direction.",
    priceKey: "brand-naming" as const,
  },
  {
    href: "/en/contact",
    label: "For a defined visual start",
    title: "Mini visual identity",
    text: "A smaller starting point for someone who needs a clear visual system, without entering a full identity project straight away.",
    priceKey: "mini-visual-identity" as const,
  },
];

export default function BrandingPage() {
  const contactLink = whatsappHref("Hello Dewank, I would like to discuss my brand strategy and visual identity. My business is: ");
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://dewank.com/en/branding#service",
        name: "Brand strategy and visual identity design",
        description: "Brand strategy, positioning, naming and visual identity services for businesses worldwide.",
        serviceType: ["Brand strategy", "Visual identity design", "Brand naming"],
        provider: { "@id": "https://dewank.com/#organization" },
        areaServed: "Worldwide",
        url: "https://dewank.com/en/branding",
        inLanguage: "en",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://dewank.com/en" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://dewank.com/en/services" },
          { "@type": "ListItem", position: 3, name: "Brand strategy and identity", item: "https://dewank.com/en/branding" },
        ],
      },
    ],
  };

  return (
    <main id="main-content" className="inner-page branding-page en-service" lang="en" dir="ltr">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

      <section className="shell brand-hero">
        <div className="brand-hero-copy">
          <span className="section-label">Brand strategy and identity</span>
          <h1>A brand strategy that makes your business<em>clear, distinctive and worth choosing</em></h1>
          <p>We help businesses worldwide build positioning, brand strategy and visual identity as one system, so customers understand your value, remember you and trust you before they start comparing prices.</p>
          <div className="brand-hero-actions">
            <Link className="button primary" href="/en/contact">Discuss your brand project <span>→</span></Link>
            <a className="button whatsapp" href={contactLink} target="_blank" rel="noopener noreferrer">Message us on WhatsApp <span>↗</span></a>
          </div>
        </div>
        <BrandLab />
      </section>

      <section className="shell brand-diagnosis">
        <div><span className="section-label">The problem we solve</span><h2>The market sees you<br /><em>But does it understand you?</em></h2></div>
        <div className="brand-diagnosis-copy">
          <p>When a brand has no clear positioning, message or cohesive identity, it looks like others, even when its service is better. The result is usually inconsistent content, more expensive campaigns, and a team that explains the business from zero every time.</p>
          <div className="brand-symptoms">
            <p>Customers compare you on price alone</p><p>The identity does not reflect the quality of the service</p>
            <p>Messages differ from one channel to the next</p><p>Content starts from zero every time</p>
          </div>
        </div>
      </section>

      <section className="brand-system-section">
        <div className="shell">
          <div className="brand-section-head">
            <div><span className="section-label">The outcome</span><h2>We do not hand over a logo<br /><em>We build a brand system</em></h2></div>
            <p>Each element is tied to a strategic decision, so the identity works in marketing, sales and the customer experience, not only in a presentation file.</p>
          </div>
          <div className="brand-system-grid">{outcomes.map(([title, text], i) => <article className="brand-system-card" key={title}><b>0{i + 1}</b><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="shell brand-deliverables">
        <div className="brand-section-head"><div><span className="section-label">What the service includes</span><h2>From an unclear idea<br /><em>to a system you can use</em></h2></div></div>
        <div className="brand-deliverables-grid">{deliverables.map(([title, text], i) => <article key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </section>

      <section className="shell brand-fit" aria-labelledby="brand-proof-title">
        <div><span className="section-label">Verified work</span><h2 id="brand-proof-title">A naming and identity project,<br /><em>from decision to application</em></h2></div>
        <div className="brand-fit-list">
          <p>See how the BITHAN project moved from positioning and naming checks to a complete identity with applications.</p>
          <Link className="button secondary" href="/en/work/bithan">Read the BITHAN case study <span>→</span></Link>
        </div>
      </section>

      <section className="brand-process">
        <div className="shell">
          <div className="brand-section-head brand-process-head"><div><span className="section-label">How identity is built</span><h2>Strategy first<br /><em>Design with a reason</em></h2></div></div>
          <p className="brand-process-intro">Clear approval points reduce guesswork and random revisions, and make sure each stage is built on the decision before it.</p>
          <div className="brand-process-list">{process.map(([title, text], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="shell brand-fit">
        <div><span className="section-label">Who this is for</span><h2>The right time<br /><em>to build a brand</em></h2></div>
        <div className="brand-fit-list">
          <p>A new business that needs a strong foundation before launch.</p>
          <p>A company that has grown, but whose image no longer reflects its size or its price.</p>
          <p>A brand expanding into a new market or a new country.</p>
          <p>A team struggling with messages and designs that differ from one channel to another.</p>
        </div>
      </section>

      <section className="shell brand-guides" aria-labelledby="brand-guides-title">
        <div className="brand-guides-head">
          <div>
            <span className="section-label">Before you decide</span>
            <h2 id="brand-guides-title">Understand what you need first.<em>Then choose the right scope</em></h2>
          </div>
          <p className="brand-guides-intro">Two short explanations to help you understand the cost of an identity and the naming decision, before you invest in design and launch.</p>
        </div>
        <div className="brand-guides-grid">
          <Link className="brand-guide-card" href="#brand-offers">
            <div className="brand-guide-top"><span>Related page 01</span><span className="brand-guide-arrow" aria-hidden="true">↗</span></div>
            <h3>Naming and the identity: which first?</h3>
            <p>The name is the first brand decision. Check it before you design the identity around it.</p>
          </Link>
          <Link className="brand-guide-card" href="#faq">
            <div className="brand-guide-top"><span>Related page 02</span><span className="brand-guide-arrow" aria-hidden="true">↗</span></div>
            <h3>Logo, identity or strategy?</h3>
            <p>The questions most businesses ask before they commit, answered in the FAQ on this page.</p>
          </Link>
        </div>
      </section>

      <section className="shell brand-faq" aria-labelledby="branding-faq-title" id="faq">
        <span className="section-label">Frequently asked questions</span>
        <div className="brand-section-head"><div><h2 id="branding-faq-title">Clear answers<br /><em>before we start</em></h2></div></div>
        {faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
        <div className="brand-related">
          <Link href="/en/website-design">Company website design</Link>
          <Link href="/en/digital-marketing">Digital marketing strategy</Link>
          <Link href="/en/services">All services</Link>
        </div>
      </section>

      <section className="shell brand-offers" aria-labelledby="brand-offers-title" id="brand-offers">
        <div className="brand-offers-head">
          <div><span className="section-label">Defined starting points</span><h2 id="brand-offers-title">If you do not need the full project,<br /><em>start with the right scope</em></h2></div>
          <p>Smaller options with a defined scope and price help you start at the stage you need, rather than buying a larger service than the situation requires.</p>
        </div>
        <div className="brand-offers-grid">
          {brandOffers.map((offer) => (
            <Link className="brand-offer-card" href={offer.href} key={offer.title}>
              <small>{offer.label}</small>
              <strong>{offer.title}</strong>
              <p>{offer.text}</p>
              <span className="brand-offer-price">
                <OfferPrice offerKey={offer.priceKey} className="brand-offer-price-value" />
                <span className="brand-offer-link">{offer.href === "/en/contact" ? "Request this offer →" : "See the naming service →"}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="shell brand-cta">
        <div><span className="section-label">Starting point</span><h2>Your brand deserves<br />a reason to be chosen</h2></div>
        <div><p>Tell us where your brand stands today, and we will suggest whether you need a full strategy, a development of your current identity, or a smaller and more practical start.</p><Link className="button" href="/en/contact">Start a short conversation <span>→</span></Link></div>
      </section>
      <Footer />
    </main>
  );
}
