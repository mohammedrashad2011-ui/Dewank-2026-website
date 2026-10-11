import { EnShell } from "./_en/shell";
import { enMetadata } from "./_en/metadata";
/* eslint-disable @next/next/no-img-element -- static SVG and WebP case assets with explicit dimensions. */
import Link from "next/link";
import { CONTACT_EMAIL, WHATSAPP_NUMBER, briefMailto, whatsappHref } from "@/app/en/_en/lib/site";
import { SERVICE_CATEGORIES, categoryHref } from "@/app/en/_en/lib/services";
import "./_en/styles/home.en.css";

// The four business entry points, in the order a visitor is most likely to need them.
const orbit = [
  { pos: "top", label: "Branding", href: "/en/brand-naming" },
  { pos: "right", label: "Paid growth", href: "/en/paid-advertising" },
  { pos: "bottom", label: "Websites", href: "/en/website-design" },
  { pos: "left", label: "AI & automation", href: "/en/ai-automation" },
] as const;

// Service bento. Copy is the verified English gateway copy; only the visual treatment is new.
const bento = [
  {
    id: "brand",
    kicker: "Branding",
    title: "A name and identity with a reason to exist",
    text: "Naming with preliminary checks, then the strategy and identity built on top of it.",
    href: "/en/brand-naming",
    cta: "See brand naming",
    tone: "paper",
  },
  {
    id: "paid",
    kicker: "Paid growth",
    title: "Qualified demand from Google and Meta",
    text: "Campaigns measured by enquiries, with the landing path and conversion tracking set up before spend increases.",
    href: "/en/paid-advertising",
    cta: "See paid advertising",
    tone: "lime",
  },
  {
    id: "web",
    kicker: "Websites",
    title: "A site that explains the offer and asks for the next step",
    text: "Mobile-first websites and landing pages, with SEO foundations, analytics and clear contact paths.",
    href: "/en/website-design",
    cta: "See website design",
    tone: "ink",
  },
  {
    id: "ai",
    kicker: "AI & automation",
    title: "Fewer enquiries lost between the first message and the booking",
    text: "WhatsApp, CRM and workflow automation, with a clear handover to your team when a decision is needed.",
    href: "/en/ai-automation",
    cta: "See AI and automation",
    tone: "coral",
  },
] as const;

// Clinic case: approximate figures from the live project, with the qualifiers kept exactly as published.
const clinicMetrics = [
  { value: "+25", unit: "points", label: "in attendance rate (approx.)" },
  { value: "+30%", unit: "", label: "conversion from enquiry to booking (approx.)" },
  { value: "−40%", unit: "", label: "reception workload (approx.)" },
];

const identityTiles = [
  { name: "ReachwayAD", sector: "Marketing and advertising", image: "/en/work/reachwayad-remastered.webp" },
  { name: "Clinika", sector: "Beauty and care", image: "/en/work/clinika-remastered.webp" },
  { name: "Arab Sun", sector: "Travel and tourism", image: "/en/work/arab-sun-remastered.webp" },
  { name: "Dar Al Safa", sector: "Healthcare", image: "/en/work/dar-al-safa-remastered.webp" },
];

const method = [
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
    q: "Do you work with companies in other countries?",
    a: "Yes. We work remotely with businesses in other markets when the scope and time zone fit. Tell us your market and we will confirm.",
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

// FAQPage data generated from the same list that is rendered below, so the markup matches the visible questions.
const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
}).replace(/</g, "\\u003c");

// Small, geometric service symbols drawn in SVG. Decorative only.
function ServiceSymbol({ id }: { id: string }) {
  if (id === "brand") {
    return (
      <svg className="eh-symbol" viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="26" />
        <circle cx="32" cy="32" r="14" />
        <path d="M32 6 L32 58" />
      </svg>
    );
  }
  if (id === "paid") {
    return (
      <svg className="eh-symbol" viewBox="0 0 64 64" aria-hidden="true">
        <rect x="8" y="38" width="10" height="18" />
        <rect x="24" y="28" width="10" height="28" />
        <rect x="40" y="16" width="10" height="40" />
        <path d="M6 14 L30 6 L26 18" />
      </svg>
    );
  }
  if (id === "web") {
    return (
      <svg className="eh-symbol" viewBox="0 0 64 64" aria-hidden="true">
        <rect x="8" y="8" width="22" height="22" />
        <rect x="34" y="8" width="22" height="22" />
        <rect x="8" y="34" width="22" height="22" />
        <rect x="34" y="34" width="22" height="22" className="eh-symbol-fill" />
      </svg>
    );
  }
  return (
    <svg className="eh-symbol" viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="12" cy="32" r="6" />
      <circle cx="52" cy="14" r="6" />
      <circle cx="52" cy="50" r="6" />
      <path d="M18 32 L46 16 M18 32 L46 48" />
    </svg>
  );
}

function HomePage() {
  return (
    <>
      {/* 1. Hero: the connected system. Dark stage, lime accent, one signature graphic. */}
      <section className="eh-hero" aria-labelledby="hero-title">
        <div className="shell eh-hero-inner">
          <div className="eh-hero-copy">
            <p className="eh-kicker">Creative growth studio · Brand · Demand · Automation</p>
            <h1 id="hero-title">
              <span className="eh-line">Brands people choose.</span>
              <span className="eh-line eh-accent">Growth you can measure.</span>
            </h1>
            <p className="eh-lead">
              Dewank connects your name, your website, your paid demand and your follow-up into one system. Business
              owners and marketing leaders get one plan, and enquiries they can measure.
            </p>
            <div className="eh-ctas">
              <Link className="eh-btn eh-btn-primary" href="/en/contact">
                Request a custom quote
              </Link>
              <Link className="eh-btn eh-btn-ghost" href="/en/work">
                See selected work
              </Link>
            </div>
          </div>

          <nav className="eh-system" aria-label="Four starting points">
            <svg className="eh-system-svg" viewBox="0 0 520 520" aria-hidden="true" focusable="false">
              <g className="eh-rings">
                <circle cx="260" cy="260" r="200" className="eh-ring" />
                <circle cx="260" cy="260" r="132" className="eh-ring eh-ring-inner" />
              </g>
              <path d="M260 260 L260 22 M260 260 L498 260 M260 260 L260 498 M260 260 L22 260" className="eh-connector" />
              <circle r="5" className="eh-packet">
                <animateMotion dur="3.6s" repeatCount="indefinite" path="M260 260 L260 22" />
              </circle>
              <circle r="5" className="eh-packet">
                <animateMotion dur="3.6s" begin="0.9s" repeatCount="indefinite" path="M260 260 L498 260" />
              </circle>
              <circle r="5" className="eh-packet">
                <animateMotion dur="3.6s" begin="1.8s" repeatCount="indefinite" path="M260 260 L260 498" />
              </circle>
              <circle r="5" className="eh-packet">
                <animateMotion dur="3.6s" begin="2.7s" repeatCount="indefinite" path="M260 260 L22 260" />
              </circle>
            </svg>
            <div className="eh-core" aria-hidden="true">
              <span>Dewank</span>
            </div>
            {orbit.map((node) => (
              <Link key={node.href} className={`eh-node eh-node-${node.pos}`} href={node.href}>
                {node.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {/* 2. Proof: the clinic results, stated as approximate, on a coral accent band. */}
      <section className="eh-proof" aria-labelledby="proof-title">
        <div className="shell">
          <p className="eh-label">Case · Clinic follow-up · Bahrain · Anonymised</p>
          <h2 id="proof-title">From scattered messages to a follow-up you can measure.</h2>
          <dl className="eh-metrics" aria-label="Approximate results from the live operation">
            {clinicMetrics.map((m) => (
              <div key={m.label}>
                <dt className="eh-visually-hidden">Approximate result</dt>
                <dd>
                  <strong>
                    {m.value}
                    {m.unit ? <span className="eh-metric-unit"> {m.unit}</span> : null}
                  </strong>
                  <span>{m.label}</span>
                </dd>
              </div>
            ))}
          </dl>
          <p className="eh-proof-note">
            Approximate figures from the live project. Results depend on message volume, offer quality and response
            speed, so they are not a guarantee.
          </p>
          <Link className="eh-link eh-link-dark" href="/en/work#clinic">
            Read the clinic case →
          </Link>
        </div>
      </section>

      {/* 3. Who we work with: a typographic row, not cards. */}
      <section className="eh-audience shell" aria-labelledby="audience-title">
        <h2 id="audience-title" className="eh-label">
          Who we work with
        </h2>
        <ul className="eh-audience-list">
          <li>Founders and business owners who need a clear position before they spend on marketing.</li>
          <li>Startups and new brands preparing a launch or a repositioning.</li>
          <li>Growing SMEs whose enquiries depend on the website, the ads and the follow-up working together.</li>
          <li>Marketing leaders who want one measurable plan across channels and agencies.</li>
        </ul>
      </section>

      {/* 4. Service bento: the four entry points, then all eight disciplines. */}
      <section className="eh-services" aria-labelledby="services-title">
        <div className="shell">
          <p className="eh-label">Where to start</p>
          <h2 id="services-title">Four starting points. One system behind them.</h2>
          <div className="eh-bento">
            {bento.map((card) => (
              <article key={card.id} className={`eh-card eh-card-${card.tone} eh-card-${card.id}`}>
                <div className="eh-card-top">
                  <span className="eh-card-kicker">{card.kicker}</span>
                  <ServiceSymbol id={card.id} />
                </div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <Link className="eh-card-link" href={card.href}>
                  {card.cta} <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>

          <div className="eh-disciplines">
            <p className="eh-disciplines-label">All eight disciplines</p>
            <ul>
              {SERVICE_CATEGORIES.map((category) => (
                <li key={category.id}>
                  <Link href={categoryHref(category)}>{category.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Featured work: image first, the BITHAN case leads. */}
      <section className="eh-work shell" aria-labelledby="work-title">
        <p className="eh-label">Selected work</p>
        <h2 id="work-title">Real projects, with the reasoning behind each decision.</h2>
        <div className="eh-work-grid">
          <figure className="eh-work-feature">
            <img
              src="/en/work/bithan/hero.svg"
              alt="Final approved identity cover for BITHAN Fine Jewelry, a naming and identity project in Qatar"
              width={1126}
              height={1591}
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span>Featured case · Naming and identity · Qatar</span>
              <strong>BITHAN: from a naming brief to a complete identity.</strong>
              <Link href="/en/work#bithan">Read the case →</Link>
            </figcaption>
          </figure>
          <ul className="eh-work-tiles">
            {identityTiles.map((t) => (
              <li key={t.name}>
                <Link href="/en/work#identity">
                  <img src={t.image} alt={`${t.name} identity work`} width={1200} height={900} loading="lazy" decoding="async" />
                  <span>
                    <strong>{t.name}</strong>
                    <small>{t.sector}</small>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. Method and differentiation on the dark stage. */}
      <section className="eh-method" aria-labelledby="method-title">
        <div className="shell">
          <p className="eh-label eh-label-lime">How it works</p>
          <h2 id="method-title">Three steps, no surprises.</h2>
          <ol className="eh-steps">
            {method.map((step, index) => (
              <li key={step.title}>
                <span className="eh-step-no" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <ul className="eh-differences">
            {differences.map((d) => (
              <li key={d.title}>
                <strong>{d.title}</strong>
                <span>{d.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. Questions. */}
      <section className="eh-faq shell" aria-labelledby="faq-title">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />
        <p className="eh-label">Questions</p>
        <h2 id="faq-title">Before you write to us.</h2>
        <div className="eh-faq-list">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* 8. Closing CTA on the lime band. Approved contact methods only. */}
      <section className="eh-close" aria-labelledby="close-title">
        <div className="shell eh-close-inner">
          <p className="eh-label">Next step</p>
          <h2 id="close-title">Tell us the goal. We reply with the next step.</h2>
          <p>Send a short brief by email, or message us on WhatsApp.</p>
          <div className="eh-ctas">
            <a className="eh-btn eh-btn-primary" href={briefMailto("Project brief from the homepage")}>
              Email a brief · {CONTACT_EMAIL}
            </a>
            <a
              className="eh-btn eh-btn-ghost-dark"
              href={whatsappHref("Hello Dewank, I would like to discuss a project. My main goal is: ")}
              rel="noopener noreferrer"
              target="_blank"
            >
              WhatsApp +{WHATSAPP_NUMBER}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export const metadata = enMetadata(
  "Brand, Growth and AI Automation",
  "Dewank connects brand naming, strategy, websites, paid acquisition and automation into one measurable growth system. Custom scopes for ambitious companies.",
  "/en",
);

export default function Page() {
  return (
    <EnShell>
      <HomePage />
    </EnShell>
  );
}
