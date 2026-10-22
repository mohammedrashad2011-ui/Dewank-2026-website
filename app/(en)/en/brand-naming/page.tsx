import NamingDecisionMotion from "../../../components/naming-decision-motion";
import Link from "next/link";
import { enMetadata } from "../_en/metadata";
import { Footer } from "../_en/parity/footer";
import { Header } from "../_en/parity/header";
import { OfferPrice } from "../_en/lib/localized-price";
import { briefMailto, whatsappHref } from "../_en/lib/site";
// The Arabic brand-naming service's layout and styles, reused unchanged. English-only direction and type overrides follow.
import "../../../(ar)/branding/branding-page.css";
import "../../../(ar)/services/brand-naming/brand-naming-layout.css";
import "../_en/parity/service-pages.en.css";
import "../_en/styles/hide-arabic-widgets.css";
import "./brand-naming-layout.en.css";

export const metadata = enMetadata(
  "Brand naming and preliminary checks",
  "Brand naming for businesses worldwide: 10–15 considered names, meaning and pronunciation checks, preliminary similarity research and domain availability, with a shortlist you can decide on.",
  "/en/brand-naming",
);

const deliverables = [
  ["Understanding the business and the market", "We start with a brief or a session to understand the business, the audience, the competitors, the markets you plan to enter, and the qualities the name must carry."],
  ["10–15 considered names", "Names built on clear naming directions, not random word lists or unfiltered output from a tool."],
  ["Meaning and the reasoning", "An explanation of each name's idea, how it is pronounced, and why it suits the brand or can grow with it."],
  ["Linguistic and cultural checks", "A first review of meanings, pronunciation and likely associations in English and Arabic, depending on the markets you serve."],
  ["Preliminary similarity research", "An initial search for brands and names that are similar, to reduce the chance of conflict, without claiming a legal clearance."],
  ["Domain and social handles", "A check at the time of the search for the domains and related usernames, with alternatives where a first choice is taken."],
  ["Top three recommendations", "A short decision matrix comparing the strongest options by distinctiveness, clarity, flexibility and ease of use."],
  ["One development round", "Development of the directions based on specific feedback, if the first round does not settle the choice."],
];

const steps = [
  ["Brief", "The business, the audience, the markets and the traits the name must carry."],
  ["Generation and filtering", "A long list, then a shortlist we can defend."],
  ["Preliminary checks", "Meaning, pronunciation, similarity and domain availability."],
  ["Top three", "A decision matrix so the choice is explicit."],
  ["One development round", "Then your decision."],
];

const faqs = [
  ["What does a naming scope cost?", "The defined starting package includes 10–15 names with meanings, preliminary checks of the domains and similarity, and a development round. Its price is shown in US dollars by default, and in your country's approved price where one exists. Larger naming projects are scoped after a brief."],
  ["Do you guarantee the name will be accepted or registered?", "No. We carry out preliminary research to reduce the chance of conflict or rejection, but acceptance and registration are decided by the official authorities and cannot be guaranteed."],
  ["Does the service include registering a domain or trademark?", "It includes checking availability at the time of the search. Buying the domain and the official trademark registration are separate steps, and their fees are not part of our scope."],
  ["What is the difference between naming and visual identity?", "Naming defines the name and its initial direction. Visual identity designs the logo and visual system. The name should be decided before the identity is designed."],
  ["What if none of the names suits me?", "The scope includes one development round based on clear feedback. We agree on the decision criteria before we start, so the choice is not based on shifting preferences."],
];

export default function BrandNamingPage() {
  const contactLink = whatsappHref("Hello Dewank, I would like a naming scope for my brand. My business is: ");
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://dewank.com/en/brand-naming#service",
        name: "Brand naming with preliminary checks",
        description: "Brand naming for businesses worldwide, with 10–15 considered names, meaning and pronunciation checks, preliminary similarity research and domain availability.",
        serviceType: ["Brand naming", "Preliminary similarity research", "Domain availability research"],
        provider: { "@id": "https://dewank.com/#organization" },
        areaServed: "Worldwide",
        url: "https://dewank.com/en/brand-naming",
        inLanguage: "en",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://dewank.com/en" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://dewank.com/en/services" },
          { "@type": "ListItem", position: 3, name: "Brand naming", item: "https://dewank.com/en/brand-naming" },
        ],
      },
    ],
  };

  return (
    <main id="main-content" className="inner-page branding-page naming-service-page en-service" lang="en" dir="ltr">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

      <section className="shell brand-hero naming-service-hero">
        <div className="brand-hero-copy">
          <span className="section-label naming-service-eyebrow">Brand naming and research</span>
          <h1>Your brand name is not just a pretty word<em>It is a business asset that has to carry growth</em></h1>
          <p>We develop brand names based on an understanding of the business, the audience and the market, then check them linguistically and culturally and run preliminary research on similar brands and on domain availability, so you decide with the facts in front of you.</p>
          <div className="brand-hero-actions">
            <Link className="button whatsapp" href="#starter-price">See the naming package <span>→</span></Link>
            <a className="button primary" href={contactLink} target="_blank" rel="noopener noreferrer">Discuss your naming project <span>↗</span></a>
          </div>
        </div>
        <div className="brand-diagnosis-copy naming-service-package" id="starter-price">
          <span className="section-label">The defined package</span>
          <h2>Starts at<br /><em><OfferPrice offerKey="brand-naming" className="brand-price-value" /></em></h2>
          <p>The price covers 10–15 names with their meanings, preliminary checks of meaning, similarity and domain availability, a top-three decision matrix and one development round. It is shown in US dollars by default, and in your country&apos;s approved price where one exists.</p>
        </div>
      </section>

      <section className="shell brand-diagnosis">
        <div><h2>A weak name<br /><em>costs more later</em></h2></div>
        <div className="brand-diagnosis-copy">
          <p>A name is the first brand decision, and a weak one becomes expensive: hard to say, too close to a competitor, or unavailable as a domain once the marketing has started.</p>
          <div className="brand-symptoms">
            <p>Hard to pronounce or spell</p><p>Too close to a competing brand</p>
            <p>The domain or handle is already taken</p><p>The meaning does not fit the markets you serve</p>
          </div>
        </div>
      </section>

      <section className="shell brand-deliverables">
        <div className="brand-section-head"><div><h2>From the brief<br /><em>to a decision you can defend</em></h2></div></div>
        <div className="brand-deliverables-grid">{deliverables.map(([title, text]) => <article key={title}><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </section>

      <NamingDecisionMotion locale="en" />

      <section className="shell brand-fit" aria-labelledby="proof-title">
        <div><h2 id="proof-title">A name chosen by the client,<br /><em>then a complete identity</em></h2></div>
        <div className="brand-fit-list">
          <p>BITHAN Fine Jewelry: the naming and identity case, from positioning and name checks to a bilingual identity and applications.</p>
          <Link className="button secondary" href="/en/work/bithan">Read the naming and identity case <span>→</span></Link>
        </div>
      </section>

      <section className="brand-process">
        <div className="shell">
          <div className="brand-section-head brand-process-head"><div><h2>How a naming project runs</h2></div></div>
          <p className="brand-process-intro">The limits of the research are stated clearly, so the decision is made with the right expectations.</p>
          <div className="brand-process-list">{steps.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="shell brand-fit">
        <div><h2>Preliminary research,<br /><em>not a legal clearance</em></h2></div>
        <div className="brand-fit-list">
          <p>It does not replace a full trademark search or legal advice, and it does not guarantee registration. Official registration is decided by the competent authority.</p>
          <p>Domain and handle availability can change at any time, so we check it again at the moment you decide.</p>
          <p><strong>Not included:</strong> trademark registration and its official fees, full legal clearance, and the visual identity system.</p>
        </div>
      </section>

      <section className="shell brand-faq" aria-labelledby="naming-faq-title">
        
        <div className="brand-section-head"><div><h2 id="naming-faq-title">Clarity before<br /><em>the research starts</em></h2></div></div>
        {faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
      </section>

      <section className="shell brand-cta">
        <div><h2>Build a name your brand<br />can grow into</h2></div>
        <div>
          <p>Tell us the business, the audience, the markets and the feeling the name should create. We reply with a scope and the price that applies.</p>
          <a className="button" href={briefMailto("Naming scope request")}>Email a brief <span>→</span></a>{" "}
          <Link className="button secondary" href="/en/services">Back to services</Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
