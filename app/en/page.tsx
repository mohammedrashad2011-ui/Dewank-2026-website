import Link from "next/link";
import { enMetadata } from "./_en/metadata";
import { CONTACT_EMAIL, briefMailto } from "@/app/en/_en/lib/site";
import { Footer } from "./_en/parity/footer";
import { Header } from "./_en/parity/header";
import MotionSystem from "./_en/parity/motion-system";
import HomeTestimonials from "./_en/parity/testimonials";
import { HomeSelectedOffers } from "./_en/parity/offers";
// The Arabic homepage's visual system, reused unchanged. Every class below matches the Arabic homepage so the
// English page renders with the same components, spacing, motion and responsive rules.
import "../home-growth-upgrade.css";
import "../home-conversion-refinement.css";
import "../home-mobile-service-cards.css";
import "./_en/parity/offer-grid.en.css";
import "./_en/styles/hide-arabic-widgets.css";
import "./_en/parity/ltr.en.css";

const whatsappHref =
  "https://wa.me/97339066649?text=" + encodeURIComponent("Hello Dewank, I would like to discuss my growth. The business is: ");

// Service entry points. Same four tones and order as the Arabic bento; English copy and English routes.
const services = [
  {
    n: "01",
    title: "Attract demand",
    en: "PAID ADVERTISING",
    text: "Google and Meta with clear tracking, landing pages and optimisation decisions based on conversions, not clicks.",
    tags: ["Google Ads", "Meta Ads", "Tracking"],
    tone: "growth",
    href: "/en/paid-advertising",
  },
  {
    n: "02",
    title: "Build the experience",
    en: "WEBSITES",
    text: "Fast websites and landing pages that combine your message, SEO, conversion optimisation and tracking to lead visitors to one clear action.",
    tags: ["Web Design", "CRO", "SEO"],
    tone: "web",
    href: "/en/website-design",
  },
  {
    n: "03",
    title: "Build the brand and content",
    en: "BRAND AND CONTENT",
    text: "Positioning, identity and content that make your business clearer in your customers' minds and more consistent at every touchpoint.",
    tags: ["Branding", "Content", "Social"],
    tone: "brand",
    href: "/en/services#brand",
  },
  {
    n: "04",
    title: "Automate the follow-up",
    en: "AUTOMATION",
    text: "WhatsApp, CRM and smart automation that connect conversations to qualification, booking and follow-up, and cut manual work.",
    tags: ["WhatsApp", "CRM", "AI"],
    tone: "automation",
    href: "/en/whatsapp-crm-automation",
  },
];

// Verified case work. Titles and descriptions follow the authentic case copy on the Work page.
const selectedWork = [
  {
    n: "01",
    label: "AUTOMATION",
    title: "From scattered messages to a booking journey you can measure",
    text: "A WhatsApp and CRM system that connects replies, qualification, booking, reminders and follow-up.",
    href: "/en/work#clinic",
  },
  {
    n: "02",
    label: "BRAND IDENTITY",
    title: "From a naming decision to a complete fine jewellery identity",
    text: "BITHAN: positioning and naming checks, a name the client chose, and a bilingual Arabic and English identity with premium applications.",
    href: "/en/work#bithan",
  },
  {
    n: "03",
    label: "STRATEGY",
    title: "Strategic decisions before execution",
    text: "Projects that show how we think about the challenge, positioning and experience before the final form.",
    href: "/en/work#concepts",
  },
];

const method = [
  ["01", "Understand", "The context, the audience and where growth breaks down."],
  ["02", "Decide", "The opportunity, the message and the business priority."],
  ["03", "Build", "The brand, website, campaign or system that fits the priority."],
  ["04", "Measure", "We review what happens and improve what drives the result."],
];

const faqs = [
  {
    q: "Where should I start?",
    a: "Start with the problem closest to revenue or lost customers. If demand is weak, we review attraction first. If visits arrive but do not convert, we look at the website and the offer.",
  },
  {
    q: "Do I need more than one service?",
    a: "No. We prefer to start with the smallest scope that can solve the current problem and show its effect, then add only what the results justify.",
  },
  {
    q: "When is automation the right step?",
    a: "When the same questions, follow-ups and bookings keep repeating, or when enquiries are lost to slow replies. Automation takes over routine steps, while your team keeps the decisions that need judgement.",
  },
];

// FAQPage data generated from the list rendered below, so the markup matches the visible questions.
const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
}).replace(/</g, "\\u003c");

export const metadata = enMetadata(
  "Brand, Growth and AI Automation",
  "Dewank brings branding, digital marketing, websites and automation together in one growth system for businesses worldwide. Custom scopes for ambitious companies.",
  "/en",
);

export default function Home() {
  return (
    <main className="studio-home home-conversion-page en-parity" lang="en" dir="ltr">
      <Header />

      <section className="hybrid-hero shell">
        <div className="hero-copy">
          <h1>
            <span>We build the brand.</span>
            <span>We drive the demand.</span>
            <span>
              <em>We automate the growth.</em>
            </span>
          </h1>
          <p>
            Dewank brings branding, marketing, websites and automation into one system, so customers understand why to
            choose you, reach you faster, and move towards a clear decision.
          </p>
          <div className="hero-actions">
            <a className="button primary home-whatsapp-primary" href={whatsappHref} target="_blank" rel="noopener noreferrer">
              Send us your business and challenge <span>↗</span>
            </a>
            <Link className="button secondary" href="/en/work">
              See our work and results <span>→</span>
            </Link>
          </div>
          <p className="cta-expectation">
            A short conversation to understand the project and find the best starting point, with no obligation.
          </p>
        </div>

        <MotionSystem />
      </section>

      <section className="home-proof-hub shell" aria-labelledby="home-proof-title">
        <div className="home-proof-intro">
          <h2 id="home-proof-title">
            Results from a live clinic project.
          </h2>
          <p>
            In a live project for a cosmetic clinic, we connected marketing with conversations, booking and follow-up,
            instead of letting each step work on its own.
          </p>
          <div className="home-proof-actions">
            <Link href="/en/work#clinic">
              Read the full case study <span>→</span>
            </Link>
            <Link href="/en/whatsapp-crm-automation">
              Explore WhatsApp automation <span>→</span>
            </Link>
          </div>
        </div>
        <div className="proof-grid home-proof-metrics">
          <article>
            <strong>+30%</strong>
            <h3>Approximate improvement in conversion to booking</h3>
            <p>A clearer journey from enquiry to appointment.</p>
          </article>
          <article>
            <strong>+25</strong>
            <h3>Approximate points gained in attendance rate</h3>
            <p>With more regular reminders and follow-up.</p>
          </article>
          <article>
            <strong>−40%</strong>
            <h3>Approximate reduction in reception workload</h3>
            <p>After automating replies and repeated tasks.</p>
          </article>
        </div>
        <p className="proof-note">
          Approximate results from a previous project, not a guarantee of similar outcomes. Results vary with the
          business, the offer, the data and the execution.
        </p>
      </section>

      <section className="bento-section home-core-paths">
        <div className="shell">
          <div className="section-head">
            <div>
              <span className="section-label">Choose a starting point</span>
              <h2>
                Four starting points.
                <br />
                <em>One system behind them.</em>
              </h2>
            </div>
            <Link className="text-link" href="/en/services">
              Explore all services <span>→</span>
            </Link>
          </div>
          <div className="service-bento">
            {services.map((service) => (
              <Link id={`home-${service.tone}`} href={service.href} className={`service-card ${service.tone}`} key={service.n}>
                <div className="card-top">
                  <span>{service.n}</span>
                  <small>{service.en}</small>
                  <b>↗</b>
                </div>
                <div className={`service-symbol ${service.tone}`} aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="card-copy">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <div className="tag-row">
                    {service.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <nav className="growth-shortcuts" aria-label="Additional routes">
            <Link href="/en/social-media-content">
              Social media content <span>↗</span>
            </Link>
            <Link href="/en/seo-geo-aeo">
              SEO, GEO and AEO <span>↗</span>
            </Link>
            <Link href="/en/ai-automation">
              AI automation for business <span>↗</span>
            </Link>
          </nav>
        </div>
      </section>

      <section className="home-work-preview shell" aria-labelledby="home-work-title">
        <div className="home-work-head">
          <div>
            <span className="section-label">Selected work</span>
            <h2 id="home-work-title">
              We don&rsquo;t just show the look.
              <br />
              <em>We show the decision behind it.</em>
            </h2>
          </div>
          <Link href="/en/work">
            View the work page <span>→</span>
          </Link>
        </div>
        <div className="home-work-grid">
          {selectedWork.map((item) => (
            <Link className="home-work-card" href={item.href} key={item.n}>
              <small>
                {item.n} / {item.label}
              </small>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span>View the project ↗</span>
            </Link>
          ))}
        </div>
      </section>

      <div className="work-section shell home-trust-section">
        <HomeTestimonials />
      </div>

      <section className="method-section home-method-section">
        <div className="shell method-layout">
          <div className="method-intro">
            <span className="section-label">How we work</span>
            <h2>
              Fewer steps.
              <br />
              <em>Clearer decisions.</em>
            </h2>
            <p>
              We start with the business problem, then identify the shortest path that can be executed and measured.
              Every step leads to a clear decision, not an activity for its own sake.
            </p>
          </div>
          <div className="method-list">
            {method.map(([no, title, text]) => (
              <div key={no}>
                <span>{no}</span>
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-growth-summary shell" aria-labelledby="home-growth-summary-title">
        <span className="section-label">The Dewank system</span>
        <h2 id="home-growth-summary-title">From the first impression to the follow-up after the enquiry.</h2>
        <p>
          We connect brand strategy, content, ads, websites, SEO, WhatsApp and CRM so each step serves the next, rather
          than running separate services whose effect is hard to see.
        </p>
        <div className="home-growth-links">
          <Link href="/en/brand-naming">
            Brand <span>↗</span>
          </Link>
          <Link href="/en/paid-advertising">
            Ads <span>↗</span>
          </Link>
          <Link href="/en/website-design">
            Websites <span>↗</span>
          </Link>
          <Link href="/en/whatsapp-crm-automation">
            Automation <span>↗</span>
          </Link>
        </div>
      </section>

      <section className="home-selected-offers shell" aria-labelledby="home-offers-title">
        <div className="home-selected-offers-head">
          <div>
            <span className="section-label">Ready starting points</span>
            <h2 id="home-offers-title">If your need is clear, start with a defined scope.</h2>
          </div>
        </div>
        <HomeSelectedOffers />
        <div className="home-selected-offers-all">
          <Link href="/en/services">
            Explore all services <span>→</span>
          </Link>
        </div>
      </section>

      <section className="faq-section shell" aria-labelledby="home-faq-title">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />
        <span className="section-label">Before you start</span>
        <h2 id="home-faq-title">Three questions that shorten the path.</h2>
        <div className="faq-grid">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta shell home-final-conversion">
        <div>
          <span className="section-label">Next step</span>
          <h2>
            Send us your business.
            <br />
            <em>Tell us where growth stops.</em>
          </h2>
        </div>
        <div>
          <p>
            Instead of choosing a service by name, send us your business and current challenge. We will identify the
            shortest practical starting point with you.
          </p>
          <div className="final-actions">
            <a className="button primary home-whatsapp-primary" href={whatsappHref} target="_blank" rel="noopener noreferrer">
              Start on WhatsApp <span>↗</span>
            </a>
            <Link className="button secondary" href="/en/work">
              Review the work first <span>→</span>
            </Link>
          </div>
          <small className="cta-expectation">
            Or email{" "}
            <a href={briefMailto("Project brief from the homepage")}>{CONTACT_EMAIL}</a>. A short conversation to understand
            the project and identify the right starting point.
          </small>
        </div>
      </section>

      <Footer />
    </main>
  );
}
