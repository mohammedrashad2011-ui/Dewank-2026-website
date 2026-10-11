import { EnShell } from "./_en/shell";
import { enMetadata } from "./_en/metadata";
/* eslint-disable @next/next/no-img-element -- static SVG and WebP brand assets with explicit dimensions. */
import Link from "next/link";
import { briefMailto, whatsappHref } from "@/app/en/_en/lib/site";
import { SERVICE_CATEGORIES, categoryHref } from "@/app/en/_en/lib/services";
import "./_en/styles/home.en.css";


// The signature flow: one system, four stages, each tied to a real service category.
const flow = [
  { label: "Brand", title: "Name and position", text: "A name and a message people can repeat, backed by identity work." },
  { label: "Experience", title: "Pages that convert", text: "Websites and offers with one clear next step." },
  { label: "Growth", title: "Demand you can measure", text: "Search, paid acquisition and tracking judged by enquiries." },
  { label: "Automation", title: "Follow-up that keeps leads", text: "Response, qualification and booking across WhatsApp and CRM." },
];

const identityTiles = [
  { name: "ReachwayAD", sector: "Marketing and advertising", image: "/en/work/reachwayad-remastered.webp" },
  { name: "Clinika", sector: "Beauty and care", image: "/en/work/clinika-remastered.webp" },
  { name: "Arab Sun", sector: "Travel and tourism", image: "/en/work/arab-sun-remastered.webp" },
  { name: "Dar Al Safa", sector: "Healthcare", image: "/en/work/dar-al-safa-remastered.webp" },
];

const process = [
  { title: "Send your brief", text: "Tell us the goal, the market and what you have today." },
  { title: "Scoping conversation", text: "We confirm the problem, the constraints and what is out of scope." },
  { title: "Written proposal", text: "A fixed scope, deliverables, timeline and a clear price in writing." },
];

const differences = [
  { title: "Strategy first", text: "We agree the decision before any production starts." },
  { title: "Measured by enquiries", text: "We report on conversations and bookings, not only reach." },
  { title: "Written scope", text: "Every engagement starts with a written scope and a written quote." },
];

const faqs = [
  {
    q: "Do you work outside the Gulf?",
    a: "Yes, remotely, when the scope and time zone fit. Tell us your market and we will confirm.",
  },
  {
    q: "How is pricing set?",
    a: "Every engagement is scoped first and quoted in writing. We do not publish fixed packages on this site.",
  },
  {
    q: "Do you guarantee rankings or trademark registration?",
    a: "No. We guarantee the quality of the work and the clarity of the process. Rankings depend on many factors, and trademark registration is decided by the official authority.",
  },
];

function HomePage() {
  return (
    <>
      <section className="home-hero shell" aria-labelledby="hero-title">
        <div>
          <span className="eyebrow">Brand · Growth · Automation</span>
          <h1 id="hero-title">
            <span className="beat">Brand people remember.</span>
            <span className="beat">Experience that converts.</span>
            <span className="beat">
              <em>Growth you can measure.</em>
            </span>
          </h1>
          <p className="lead">
            We connect the name, the website, the offer, the ads and the follow-up, so marketing spend turns into
            conversations you can measure.
          </p>
          <div className="button-row">
            <Link className="button primary" href="/en/contact">
              Request a custom quote
            </Link>
            <Link className="button secondary" href="/en/work">
              See selected work
            </Link>
          </div>
        </div>

        <figure className="flow-panel" aria-labelledby="flow-title">
          <figcaption id="flow-title" className="flow-caption">
            <strong>One system, not four separate tasks.</strong>
          </figcaption>
          <ol className="flow" aria-label="Brand, experience, growth and automation">
            {flow.map((step) => (
              <li key={step.label}>
                <span className="flow-label">{step.label}</span>
                <strong>{step.title}</strong>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </figure>
      </section>

      <section className="section shell reveal" aria-labelledby="problem-title">
        <span className="eyebrow">The problem</span>
        <h2 id="problem-title">Most growth stalls between the offer, the page and the follow-up.</h2>
        <p className="lead">
          A strong idea can lose momentum when the name is unclear, the page asks for too much, the ads send traffic
          nowhere measurable, and enquiries wait too long for a reply. We look at the whole path first, then fix the
          weakest step.
        </p>
      </section>

      <section className="section shell reveal" aria-labelledby="system-title">
        <span className="eyebrow">The services</span>
        <h2 id="system-title">Six categories. One connected plan.</h2>
        <div className="grid service-grid" style={{ marginTop: 28 }}>
          {SERVICE_CATEGORIES.map((category) => (
            <article className="card service-card" key={category.id}>
              <span className="tag">{category.label}</span>
              <h3>{category.title}</h3>
              <p>{category.intro}</p>
              <ul className="category-links">
                {category.services.map((service) => (
                  <li key={service.id}>{service.name}</li>
                ))}
              </ul>
              <Link className="card-link" href={categoryHref(category)}>
                See {category.label.toLowerCase()} services <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell reveal" aria-labelledby="work-title">
        <span className="eyebrow">Selected work</span>
        <h2 id="work-title">Real projects, with the reasoning behind each decision.</h2>
        <div className="home-work" style={{ marginTop: 28 }}>
          <figure className="home-work-feature">
            <img
              src="/en/work/bithan/hero.svg"
              alt="Final approved identity cover for BITHAN Fine Jewelry, a naming and identity project in Qatar"
              loading="lazy"
              decoding="async"
              width={1126}
              height={1591}
            />
            <figcaption>
              <span>Featured case · Naming and identity · Qatar</span>
              <strong>BITHAN: from a naming brief to a complete identity.</strong>
              <Link href="/en/work#bithan">Read the case →</Link>
            </figcaption>
          </figure>

          <div className="home-work-tiles">
            {identityTiles.map((t) => (
              <Link className="home-work-tile" href="/en/work#identity" key={t.name}>
                <img src={t.image} alt={`${t.name} identity work`} loading="lazy" decoding="async" width={1200} height={900} />
                <span>
                  <strong>{t.name}</strong>
                  <small>{t.sector}</small>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell reveal" aria-labelledby="quote-title">
        <h2 id="quote-title" className="sr-only">Client feedback</h2>
        <figure className="home-quote">
          <blockquote>
            “Rashad was proactive and very attentive to my needs, and designed a logo that reflects my company&rsquo;s
            values perfectly.”
          </blockquote>
          <figcaption>
            <strong>Sophia Flores</strong> <span>· United States</span>
          </figcaption>
        </figure>
        <div className="button-row">
          <Link className="button secondary" href="/en/work#testimonials">
            Read more client feedback
          </Link>
        </div>
      </section>

      <section className="section shell reveal" aria-labelledby="process-title">
        <span className="eyebrow">How it works</span>
        <h2 id="process-title">Three steps, no surprises.</h2>
        <ol className="home-process" aria-label="How a project starts">
          {process.map((step) => (
            <li key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="home-differences">
          {differences.map((d) => (
            <div key={d.title}>
              <strong>{d.title}</strong>
              <p>{d.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section shell reveal" aria-labelledby="faq-title">
        <span className="eyebrow">Questions</span>
        <h2 id="faq-title">Before you write to us.</h2>
        <div style={{ marginTop: 24 }}>
          {faqs.map((f) => (
            <details className="faq" key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section shell reveal">
        <div className="band">
          <span className="eyebrow">Next step</span>
          <h2>Tell us the goal. We reply with the next step.</h2>
          <p style={{ maxWidth: 640 }}>Send a short brief by email, or message us on WhatsApp.</p>
          <div className="button-row">
            <a className="button primary" href={briefMailto("Project brief from the homepage")} style={{ background: "#d5a843", color: "#061a33" }}>
              Email a brief
            </a>
            <a className="button secondary" href={whatsappHref("Hello Dewank, I would like to discuss a project. My main goal is: ")} rel="noopener noreferrer" target="_blank">
              WhatsApp us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export const metadata = enMetadata("Brand, Growth and AI Automation", "Dewank connects brand naming, strategy, websites, paid acquisition and automation into one measurable growth system. Custom scopes for ambitious companies.", "/en");

export default function Page() {
  return (
    <EnShell>
      <HomePage />
    </EnShell>
  );
}
