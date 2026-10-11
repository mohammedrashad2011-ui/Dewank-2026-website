import { EnShell } from "../_en/shell";
import { enMetadata } from "../_en/metadata";
/* eslint-disable @next/next/no-img-element -- static SVG brand asset with explicit dimensions. */
import Link from "next/link";
import { briefMailto, whatsappHref } from "@/app/en/_en/lib/site";


const deliverables = [
  "10 to 15 names, each with its meaning and how it is pronounced",
  "Linguistic and cultural checks in English and Arabic",
  "Preliminary similarity research against existing brands",
  "Domain and social handle availability, checked at the time of the search",
  "Your top three recommendations, with a short decision matrix",
  "One development round, based on specific feedback",
  "An initial brand direction that explains the reasoning behind the shortlist",
];

const steps = [
  "Brief: the business, the audience, the markets and the traits the name must carry.",
  "Generation and filtering: long list, then a shortlist we can defend.",
  "Preliminary checks: meaning, pronunciation, similarity and domain availability.",
  "Top three: a decision matrix so the choice is explicit.",
  "One development round, then your decision.",
];

const faqs = [
  {
    q: "Do you register the trademark?",
    a: "No. We research preliminary availability. Registration is handled by the official authority, and its fees are not part of our scope.",
  },
  {
    q: "Is naming the same as brand identity?",
    a: "No. Naming defines the name and its initial direction. Visual identity is a separate scope after the name is chosen.",
  },
  {
    q: "What if none of the names feels right?",
    a: "The scope includes one development round based on clear feedback. We agree on the decision criteria before we start, so the choice is not based on shifting preferences.",
  },
];

function BrandNamingPage() {
  return (
    <>
      <section className="hero shell">
        <span className="eyebrow">Brand naming</span>
        <h1>Choose a brand name with preliminary checks before you invest in identity.</h1>
        <p className="lead">
          A name is the first brand decision. A weak one becomes expensive later: harder to say, too close to a
          competitor, or unavailable as a domain. We treat naming as research and strategy, not brainstorming alone.
        </p>
        <div className="button-row">
          <a className="button primary" href={briefMailto("Naming scope request")}>
            Request a naming scope
          </a>
          <a className="button whatsapp" href={whatsappHref("Hello Dewank, I would like a naming scope. My business is: ")} rel="noopener noreferrer" target="_blank">
            WhatsApp us
          </a>
        </div>
      </section>

      <section className="section shell" aria-labelledby="deliver-title">
        <span className="eyebrow">What you receive</span>
        <h2 id="deliver-title">From the brief to a decision you can defend.</h2>
        <ul className="checklist" style={{ marginTop: 24 }}>
          {deliverables.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </section>

      <section className="section shell" aria-labelledby="proof-title">
        <Link className="proof-card" href="/en/work#bithan">
          <img src="/en/work/bithan/hero.svg" alt="Final approved identity cover for BITHAN Fine Jewelry" loading="lazy" decoding="async" width={1126} height={1591} />
          <span>
            <span className="eyebrow" id="proof-title">Proof</span>
            <strong>BITHAN: a name chosen by the client, then a complete identity.</strong>
            <span className="proof-card-link">Read the naming and identity case →</span>
          </span>
        </Link>
      </section>

      <section className="section shell" aria-labelledby="boundary-title">
        <div className="notice">
          <h2 id="boundary-title" style={{ fontSize: 28, marginBottom: 10, color: "#061a33" }}>
            What this is, and what it is not
          </h2>
          <p>
            This is preliminary research. It is not a legal clearance or a full trademark search, and it does not
            guarantee registration. Official registration is decided by the competent authority. Domain and handle
            availability can change at any time, so we check it again at the moment you decide.
          </p>
          <p style={{ marginBottom: 0 }}>
            <strong>Not included:</strong> trademark registration and its official fees, full legal clearance, and the
            visual identity system.
          </p>
        </div>
      </section>

      <section className="section shell" aria-labelledby="process-title">
        <span className="eyebrow">Process</span>
        <h2 id="process-title">How a naming project runs.</h2>
        <ol className="steps steps-5" style={{ marginTop: 28 }}>
          {steps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
      </section>

      <section className="section shell" aria-labelledby="faq-title">
        <span className="eyebrow">Questions</span>
        <h2 id="faq-title">Before you start.</h2>
        <div style={{ marginTop: 24 }}>
          {faqs.map((f) => (
            <details className="faq" key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section shell">
        <div className="band">
          <h2>Start with the brief.</h2>
          <p style={{ maxWidth: 640 }}>
            Tell us the business, the audience, the markets and the feeling the name should create. We reply with a
            scope and a custom quote.
          </p>
          <div className="button-row">
            <a className="button primary" href={briefMailto("Naming scope request")} style={{ background: "#d5a843", color: "#061a33" }}>
              Email a brief
            </a>
            <Link className="button secondary" href="/en/services">
              Back to services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export const metadata = enMetadata("Brand Naming", "Brand naming with linguistic and cultural checks, preliminary similarity research and domain availability. A shortlist you can decide on. Custom scope.", "/en/brand-naming");

export default function Page() {
  return (
    <EnShell>
      <BrandNamingPage />
    </EnShell>
  );
}
