import { EnShell } from "../_en/shell";
import { enMetadata } from "../_en/metadata";
/* eslint-disable @next/next/no-img-element -- static SVG and WebP case-study assets with explicit dimensions; next/image adds no value for them. */
import Link from "next/link";
import { briefMailto, whatsappHref } from "@/app/en/_en/lib/site";
import "../_en/styles/work.en.css";


const bithanJourney = ["Naming", "Shortlist", "Client choice", "Identity", "Applications"];

const bithanDelivered = [
  "A chosen name, selected by the client from a shortlist after strategic exploration and development rounds",
  "Original hand sketch, refined into a more precise and contemporary mark",
  "Final logo suite: seven usable versions, including metallic, flat and mono",
  "Bilingual Arabic and English brand use",
  "Master colour palette and print specifications for production",
  "Premium brand applications: jewellery box, shopping bag, business card and social content",
  "Source files and usage rules for the final identity",
];

const clinicFacts = [
  {
    label: "The challenge",
    text: "Clients arrived through campaigns, but the journey after the first message was neither unified nor trackable. Replies were slow, good enquiries were lost, and appointment reminders were irregular.",
  },
  {
    label: "The decision",
    text: "Connect the conversation to qualification, booking, reminders and follow-up inside one CRM, so every client's status is visible.",
  },
  {
    label: "What we built",
    text: "Smart replies, lead classification, booking paths, appointment reminders, and re-engagement for leads who did not complete a booking.",
  },
  {
    label: "The commercial effect",
    text: "Better conversion from enquiry to booking and less manual work for reception, with a clearer view of where each client stands.",
  },
];

const clinicMetrics = [
  { value: "+25", unit: "points (approx.)", label: "in attendance rate" },
  { value: "+30%", unit: "approx.", label: "improvement in conversion from enquiry to booking" },
  { value: "−40%", unit: "approx.", label: "reduction in reception workload" },
];

const identityWork = [
  {
    name: "ReachwayAD",
    sector: "Marketing and advertising",
    image: "/en/work/reachwayad-remastered.webp",
    summary: "A corporate identity that balances trust with movement, applied across stationery and digital touchpoints.",
  },
  {
    name: "Clinika",
    sector: "Beauty and care",
    image: "/en/work/clinika-remastered.webp",
    summary: "A refined identity for the beauty sector, with a calm editorial character and applications that build trust from the first impression.",
  },
  {
    name: "Arab Sun",
    sector: "Travel and tourism",
    image: "/en/work/arab-sun-remastered.webp",
    summary: "A visual system inspired by the sun and Arabian movement, applied to packaging and printed materials.",
  },
  {
    name: "Dar Al Safa",
    sector: "Healthcare",
    image: "/en/work/dar-al-safa-remastered.webp",
    summary: "A warm medical identity that balances care and professionalism across signage, stationery and reception points.",
  },
];

const concepts = [
  {
    name: "NOMAÏ",
    type: "Luxury hospitality",
    challenge: "Set a luxury desert destination apart from the repeated imagery of the hospitality sector.",
    decision: "Build the brand around silence, slowness and the rhythm of the place, instead of traditional luxury cues.",
    scope: "Positioning, naming, identity and the direction of the guest experience.",
    target: "A brand that is easier to remember and better able to justify a premium experience.",
  },
  {
    name: "KOVA",
    type: "Architecture and products",
    challenge: "Unify architecture, products and content under one brand without losing precision.",
    decision: "Turn engineering from a visual shape into a stable language, used consistently at every touchpoint.",
    scope: "Positioning, identity system and the direction of the digital experience.",
    target: "Faster, clearer consistency when launching new projects and products.",
  },
  {
    name: "LUME",
    type: "Skincare",
    challenge: "A crowded market of similar beauty promises, with weak trust.",
    decision: "Lead with scientific evidence before the beauty promise, inside an editorial brand experience.",
    scope: "Naming, packaging and the campaign system.",
    target: "More credibility, and value that is understood before the purchase decision.",
  },
];

const testimonials = [
  {
    quote: "Rashad was proactive and very attentive to my needs, and designed a logo that reflects my company's values perfectly.",
    name: "Sophia Flores",
    country: "United States",
  },
  {
    quote: "His ability to analyse and present data was excellent. The speed of execution and the quality of the work made him stand out in market research.",
    name: "Matt Monaco",
    country: "United States",
  },
  {
    quote: "The naming process was thoughtful, professional and well organised. Excellent communication and creative ideas, and the final result made me genuinely happy.",
    name: "Loukastaki25",
    country: "Cyprus",
  },
];

const method = [
  { no: "01", title: "Understand the challenge", text: "We find where growth stops and what the business actually needs." },
  { no: "02", title: "Choose the decision", text: "Positioning, message and priority are set before any execution starts." },
  { no: "03", title: "Build the system", text: "Identity, website, content or automation are designed to work together." },
  { no: "04", title: "Measure and refine", text: "We review performance and improve what raises clarity, conversion and efficiency." },
];

function WorkPage() {
  return (
    <>
      <section className="hero shell">
        <span className="eyebrow">Selected work</span>
        <h1>
          Brand, identity and automation work, <em>with the reasoning behind each decision.</em>
        </h1>
        <p className="lead">
          Real projects from Dewank: a naming and identity project for a fine jewellery brand, a follow-up automation
          case for a clinic, and identity work across several sectors. Each one shows the challenge, the decision, what
          was delivered and the results as we have published them.
        </p>
        <nav className="case-index" aria-label="Work index">
          <a href="#bithan">Naming and identity</a>
          <a href="#clinic">Automation case</a>
          <a href="#identity">Identity work</a>
          <a href="#concepts">Concept projects</a>
          <a href="#testimonials">Client feedback</a>
        </nav>
      </section>

      <section className="section shell case" id="bithan" aria-labelledby="bithan-title">
        <span className="eyebrow">Featured case · Naming and identity · Qatar</span>
        <h2 id="bithan-title">BITHAN: from a naming brief to a complete fine jewellery identity.</h2>
        <p className="lead">
          A fine jewellery house preparing its digital launch in Qatar, with ambitions to grow into a wider commercial
          and physical presence. The name had to carry prestige, work when spoken and read, and remain distinctive.
        </p>

        <ol className="journey" aria-label="Project stages">
          {bithanJourney.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>

        <div className="case-grid">
          <div>
            <h3>What we did</h3>
            <p>
              Before generating any names, we defined the linguistic and emotional territories worth exploring. We then
              generated broadly, rejected firmly, and presented a selective shortlist. The client chose BITHAN after
              strategic exploration and development rounds.
            </p>
            <p>
              The identity started from a hand-drawn sketch and was refined into a more precise, contemporary mark that
              keeps the Arabic character of the first direction.
            </p>
          </div>
          <div>
            <h3>What was delivered</h3>
            <ul className="checklist">
              {bithanDelivered.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <figure className="case-figure">
          <img src="/en/work/bithan/hero.svg" alt="Final approved identity cover for BITHAN Fine Jewelry" loading="lazy" decoding="async" width={1200} height={800} />
        </figure>

        <div className="gallery" aria-label="BITHAN identity stages">
          <figure>
            <img src="/en/work/bithan/sketch.svg" alt="BITHAN original sketch page, the starting point of the identity" loading="lazy" decoding="async" width={1200} height={800} />
            <figcaption>Original sketch</figcaption>
          </figure>
          <figure>
            <img src="/en/work/bithan/evolution.svg" alt="BITHAN evolution from sketch to final mark" loading="lazy" decoding="async" width={1200} height={800} />
            <figcaption>From sketch to final mark</figcaption>
          </figure>
          <figure>
            <img src="/en/work/bithan/logo-suite.svg" alt="BITHAN final logo suite showing seven versions of the logo" loading="lazy" decoding="async" width={1200} height={800} />
            <figcaption>Final logo suite</figcaption>
          </figure>
          <figure>
            <img src="/en/work/bithan/palette.svg" alt="BITHAN master colour palette and print specifications" loading="lazy" decoding="async" width={1200} height={800} />
            <figcaption>Colour palette and print specs</figcaption>
          </figure>
          <figure>
            <img src="/en/work/bithan/applications.svg" alt="BITHAN brand applications on a jewellery box, shopping bag, business card and social post" loading="lazy" decoding="async" width={1200} height={800} />
            <figcaption>Brand applications</figcaption>
          </figure>
        </div>

        <div className="notice case-note">
          <strong>Scope and limits.</strong> Domain, online presence and conflict checks were preliminary practical
          checks, not a legal opinion. Final legal verification of a trademark should be done with the competent
          authority or a qualified legal adviser.
        </div>
      </section>

      <section className="section shell case" id="clinic" aria-labelledby="clinic-title">
        <span className="eyebrow">Case · WhatsApp, CRM and automation · Bahrain · Anonymised</span>
        <h2 id="clinic-title">From scattered messages to a follow-up journey you can measure.</h2>
        <p className="lead">A cosmetic clinic whose enquiries came from campaigns, but whose follow-up depended on manual replies.</p>

        <div className="facts">
          {clinicFacts.map((fact) => (
            <div className="fact" key={fact.label}>
              <h3>{fact.label}</h3>
              <p>{fact.text}</p>
            </div>
          ))}
        </div>

        <div className="metrics" aria-label="Approximate results from the live operation">
          <p className="metrics-kicker">Approximate results from the live operation</p>
          <div className="metric-row">
            {clinicMetrics.map((m) => (
              <div className="metric-card" key={m.label}>
                <strong>{m.value}</strong>
                <span className="metric-unit">{m.unit}</span>
                <span>{m.label}</span>
              </div>
            ))}
          </div>
          <p className="metrics-note">
            These are approximate figures from the live project. Results depend on message volume, offer quality and how
            fast the team responds, so they should not be read as a guarantee.
          </p>
        </div>

        <div className="button-row">
          <Link className="button secondary" href="/en/services">
            See the automation service
          </Link>
        </div>
      </section>

      <section className="section shell" id="identity" aria-labelledby="identity-title">
        <span className="eyebrow">Identity work</span>
        <h2 id="identity-title">Brands we have built a lasting presence for.</h2>
        <div className="grid two identity-grid">
          {identityWork.map((item) => (
            <article className="card identity-card" key={item.name}>
              <figure>
                <img src={item.image} alt={`${item.name} identity work`} loading="lazy" decoding="async" width={1200} height={900} />
              </figure>
              <span className="tag">{item.sector}</span>
              <h3>{item.name}</h3>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell" id="concepts" aria-labelledby="concepts-title">
        <span className="eyebrow">Concept work</span>
        <h2 id="concepts-title">Concept projects that show how we think.</h2>
        <p className="lead">
          These are concept projects, not client engagements. We use them to show how we approach positioning, identity
          and experience.
        </p>
        <div className="grid three" style={{ marginTop: 28 }}>
          {concepts.map((c) => (
            <article className="card" key={c.name}>
              <span className="tag">{c.type}</span>
              <h3 dir="ltr">{c.name}</h3>
              <p>
                <strong>Challenge:</strong> {c.challenge}
              </p>
              <p>
                <strong>Decision:</strong> {c.decision}
              </p>
              <p>
                <strong>Scope:</strong> {c.scope}
              </p>
              <p>
                <strong>Targeted impact:</strong> {c.target}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell" id="testimonials" aria-labelledby="testimonials-title">
        <span className="eyebrow">Client feedback</span>
        <h2 id="testimonials-title">What clients say.</h2>
        <div className="grid three" style={{ marginTop: 28 }}>
          {testimonials.map((t) => (
            <figure className="card testimonial" key={t.name}>
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>
                <strong>{t.name}</strong> <span>· {t.country}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="note-muted" style={{ marginTop: 16 }}>
          Feedback was originally given in English or translated for publication; wording has been lightly adapted for
          clarity while keeping its meaning.
        </p>
      </section>

      <section className="section shell" aria-labelledby="method-title">
        <span className="eyebrow">How we work</span>
        <h2 id="method-title">From the challenge to a system you can run and measure.</h2>
        <ol className="steps" style={{ marginTop: 28 }}>
          {method.map((m) => (
            <li key={m.no}>
              <h3>{m.title}</h3>
              <p>{m.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section shell">
        <div className="band">
          <span className="eyebrow">Next step</span>
          <h2>Have a project in mind?</h2>
          <p style={{ maxWidth: 640 }}>Send a short brief. We will tell you whether we are the right fit and what the first step should be.</p>
          <div className="button-row">
            <a className="button primary" href={briefMailto("Project brief from the work page")} style={{ background: "#d5a843", color: "#061a33" }}>
              Email a brief
            </a>
            <a className="button secondary" href={whatsappHref("Hello Dewank, I saw your work and would like to discuss a project. My main goal is: ")} rel="noopener noreferrer" target="_blank">
              WhatsApp us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export const metadata = enMetadata("Work", "Brand naming and identity for a fine jewellery brand in Qatar, a clinic follow-up automation case in Bahrain, and identity work across four sectors. Each project shows the challenge, the decision and the result as published.", "/en/work");

export default function Page() {
  return (
    <EnShell>
      <WorkPage />
    </EnShell>
  );
}
