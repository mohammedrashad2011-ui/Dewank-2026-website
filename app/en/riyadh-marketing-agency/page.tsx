import type { Metadata } from "next";
import Link from "next/link";
import { organizationId, siteUrl } from "../../lib/seo";
import "./riyadh-marketing-agency.css";

const canonical = `${siteUrl}/en/riyadh-marketing-agency`;
const socialImage = `${siteUrl}/dewank-social-preview-2026-07.png`;

export const metadata: Metadata = {
  title: { absolute: "Marketing Agency Riyadh | Branding & Growth | Dewank" },
  description:
    "Dewank is a marketing agency serving Riyadh and Saudi businesses with brand strategy, digital marketing, paid media, websites, SEO, content, WhatsApp CRM and AI automation.",
  keywords: [
    "marketing agency Riyadh",
    "digital marketing agency Riyadh",
    "branding agency Riyadh",
    "marketing companies in Riyadh",
    "marketing agency Saudi Arabia",
    "digital marketing company Saudi Arabia",
    "branding agency Saudi Arabia",
    "performance marketing Riyadh",
  ],
  alternates: {
    canonical,
    languages: {
      en: canonical,
      "x-default": canonical,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_SA",
    alternateLocale: ["ar_SA"],
    url: canonical,
    siteName: "Dewank",
    title: "Marketing Agency Riyadh | Branding & Growth | Dewank",
    description:
      "A connected marketing, brand, web and automation partner for companies in Riyadh and across Saudi Arabia.",
    images: [{ url: socialImage, width: 1200, height: 630, type: "image/png", alt: "Dewank marketing agency for Riyadh and Saudi Arabia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Agency Riyadh | Dewank",
    description: "Brand, demand, conversion and automation for businesses in Riyadh and Saudi Arabia.",
    images: [socialImage],
  },
};

const capabilities = [
  {
    no: "01",
    title: "Brand Strategy & Identity",
    text: "Positioning, naming and visual identity systems that make the business easier to understand, remember and choose.",
    href: "/branding",
  },
  {
    no: "02",
    title: "Digital Marketing Strategy",
    text: "A clear growth plan connecting audience, offer, channels, content and follow-up instead of running isolated activities.",
    href: "/digital-marketing",
  },
  {
    no: "03",
    title: "Google & Meta Ads",
    text: "Paid acquisition built around the full conversion path: message, creative, landing experience, tracking and optimization.",
    href: "/paid-ads",
  },
  {
    no: "04",
    title: "Website Design & CRO",
    text: "Fast, conversion-focused company websites and landing pages built to turn search and paid traffic into qualified enquiries.",
    href: "/website-design",
  },
  {
    no: "05",
    title: "SEO & Search Visibility",
    text: "Technical SEO, content architecture, schema and search-intent optimization designed around commercial visibility and authority.",
    href: "/seo-aeo",
  },
  {
    no: "06",
    title: "WhatsApp, CRM & AI Automation",
    text: "Automated response, qualification, booking, reminders and follow-up systems that reduce manual work and lost opportunities.",
    href: "/whatsapp-automation",
  },
];

const fit = [
  ["You have traffic, but not enough qualified enquiries", "We look at the message, landing experience, offer, tracking and follow-up before simply increasing media spend."],
  ["Your marketing feels fragmented", "We connect brand, content, media, website and CRM around one measurable customer journey."],
  ["You are entering or expanding in Saudi Arabia", "We shape the message and channel mix for the market while keeping the brand commercially coherent."],
  ["Your team needs an execution partner", "We can own a focused workstream or connect multiple disciplines without forcing a large retainer before the scope is clear."],
];

const process = [
  ["01", "Diagnose", "We identify the commercial bottleneck, the audience, the offer and what is already working."],
  ["02", "Define", "We choose the smallest high-impact scope, success metrics and channel roles."],
  ["03", "Build", "We execute the brand, campaign, page, content or automation layer required for the goal."],
  ["04", "Measure", "We connect tracking to business outcomes and improve what affects conversion, not vanity metrics."],
];

const faqs = [
  {
    q: "Are you a marketing agency in Riyadh?",
    a: "Dewank works with businesses in Riyadh and across Saudi Arabia through a remote-first delivery model, with structured calls, clear milestones and digital collaboration from kickoff through delivery.",
  },
  {
    q: "Do you work in both Arabic and English?",
    a: "Yes. Strategy, campaigns, websites and content can be developed for Arabic, English or bilingual customer journeys depending on the audience and market.",
  },
  {
    q: "Can we hire Dewank for one service only?",
    a: "Yes. We normally start from the bottleneck closest to revenue and recommend the smallest sensible scope rather than forcing every service into one package.",
  },
  {
    q: "Do you handle strategy only, or execution too?",
    a: "Both. Depending on the project, Dewank can define the strategy and execute paid media, content, websites, SEO, branding, analytics and automation.",
  },
  {
    q: "How does a project start?",
    a: "Send your business type, current challenge and target. We review the situation, identify the likely bottleneck and recommend a focused next step before expanding the scope.",
  },
];

export default function RiyadhMarketingAgencyPage() {
  const whatsappHref =
    "https://wa.me/97339066649?text=" +
    encodeURIComponent("Hi Dewank, I am looking for marketing support for a business in Riyadh / Saudi Arabia. Our main goal is: ");

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: "Marketing Agency Riyadh | Branding & Growth | Dewank",
        description: "Marketing, branding, web, SEO, paid media and automation services for companies in Riyadh and Saudi Arabia.",
        inLanguage: "en",
        about: { "@id": `${canonical}#service` },
      },
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: "Marketing Agency Services for Riyadh and Saudi Arabia",
        alternateName: ["Digital Marketing Agency Riyadh", "Branding Agency Riyadh", "Marketing Agency Saudi Arabia"],
        serviceType: ["Marketing Strategy", "Branding", "Digital Marketing", "Paid Media", "Website Design", "SEO", "Marketing Automation"],
        provider: { "@id": organizationId },
        areaServed: [
          { "@type": "City", name: "Riyadh" },
          { "@type": "Country", name: "Saudi Arabia" },
          { "@type": "Place", name: "GCC" },
        ],
        url: canonical,
      },
      {
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Dewank", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Marketing Agency Riyadh", item: canonical },
        ],
      },
    ],
  };

  return (
    <main className="riyadh-en" lang="en" dir="ltr">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="re-header">
        <div className="re-shell re-nav">
          <Link className="re-brand re-brand-lockup" href="/" aria-label="Dewank home"><img src="/dewank-logo.png" alt="Dewank" /></Link>
          <nav aria-label="English page navigation">
            <a href="#services">Services</a>
            <a href="#fit">When we fit</a>
            <a href="#process">Process</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className="re-nav-cta" href={whatsappHref} target="_blank" rel="noopener noreferrer">Discuss your project</a>
        </div>
      </header>

      <section className="re-hero re-shell">
        <div className="re-hero-copy">
          <div className="re-kicker"><span>RIYADH</span><span>SAUDI ARABIA</span><span>GCC</span></div>
          <h1>Marketing agency for Riyadh businesses that need <em>growth, not disconnected activity.</em></h1>
          <p className="re-lead">Dewank connects brand strategy, digital marketing, paid media, websites, SEO, content and automation into one measurable growth system for companies in Riyadh and across Saudi Arabia.</p>
          <div className="re-actions">
            <a className="re-button" href={whatsappHref} target="_blank" rel="noopener noreferrer">Talk about your growth goal <span>↗</span></a>
            <a className="re-text-link" href="#services">Explore capabilities</a>
          </div>
          <p className="re-location-note">Serving businesses in Riyadh and across Saudi Arabia through a remote-first delivery model.</p>
        </div>
        <div className="re-board" aria-label="Dewank connected growth system">
          <div className="re-board-head"><span>GROWTH SYSTEM</span><b>01 / 04</b></div>
          <div className="re-board-core"><small>BUSINESS OUTCOME</small><strong>Qualified demand</strong><p>Connect the market message to the channel, page, measurement and follow-up.</p></div>
          <div className="re-signal-grid">
            <article><small>BRAND</small><b>Clarity</b></article>
            <article><small>DEMAND</small><b>Acquisition</b></article>
            <article><small>CONVERSION</small><b>Journey</b></article>
            <article><small>AUTOMATION</small><b>Follow-up</b></article>
          </div>
        </div>
      </section>

      <section className="re-strip" aria-label="Core capabilities"><div className="re-shell"><span>BRAND STRATEGY</span><i>×</i><span>PERFORMANCE</span><i>×</i><span>WEB & CRO</span><i>×</i><span>SEO</span><i>×</i><span>CRM & AI</span></div></section>

      <section className="re-intro re-shell">
        <span className="re-label">THE POSITIONING</span>
        <div className="re-intro-grid">
          <h2>Not another list of marketing services.<br/><em>A connected commercial system.</em></h2>
          <div><p>Many businesses do not have a traffic problem. They have a connection problem: the ad says one thing, the website says another, tracking stops at the click, and the lead disappears after the first message.</p><p>We start with the bottleneck closest to the business result, then build the smallest useful system around it.</p></div>
        </div>
      </section>

      <section id="services" className="re-services re-shell">
        <div className="re-section-head"><div><span className="re-label">CAPABILITIES</span><h2>One partner across the parts<br/><em>that shape the decision.</em></h2></div><p>Start with one workstream or combine them when the customer journey genuinely requires it.</p></div>
        <div className="re-service-grid">
          {capabilities.map((service) => (
            <Link href={service.href} className="re-service-card" key={service.no}>
              <span>{service.no}</span><h3>{service.title}</h3><p>{service.text}</p><b>View service details <small>(Arabic page)</small> ↗</b>
            </Link>
          ))}
        </div>
      </section>

      <section id="fit" className="re-fit">
        <div className="re-shell">
          <div className="re-section-head"><div><span className="re-label">WHEN DEWANK FITS</span><h2>The issue is rarely<br/><em>“we need more posts.”</em></h2></div><p>We are most useful when the business problem crosses more than one marketing touchpoint.</p></div>
          <div className="re-fit-list">{fit.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        </div>
      </section>

      <section className="re-saudi re-shell">
        <div><span className="re-label">RIYADH / SAUDI ARABIA</span><h2>Built for the market.<br/><em>Designed around the customer journey.</em></h2></div>
        <div><p>Dewank supports Saudi businesses with Arabic and English customer journeys, local-market messaging, performance acquisition, conversion pages and follow-up systems.</p><p>If you are comparing a marketing agency, digital marketing partner or branding agency in Riyadh, our model is built around one thing: connecting strategy and execution to measurable commercial outcomes.</p><Link href="/services">View the full Arabic services hub <span>↗</span></Link></div>
      </section>

      <section id="process" className="re-process re-shell">
        <div className="re-section-head"><div><span className="re-label">PROCESS</span><h2>Less theatre.<br/><em>More sequence.</em></h2></div><p>The scope follows the bottleneck, not a pre-built package.</p></div>
        <div className="re-process-grid">{process.map(([no, title, text]) => <article key={no}><span>{no}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section id="faq" className="re-faq re-shell">
        <div className="re-section-head"><div><span className="re-label">FAQ</span><h2>Before you shortlist<br/><em>a Riyadh marketing agency.</em></h2></div><p>Clear answers about location, language, scope and delivery.</p></div>
        <div className="re-faq-list">{faqs.map((faq) => <details key={faq.q}><summary>{faq.q}<span>+</span></summary><p>{faq.a}</p></details>)}</div>
      </section>

      <section className="re-final re-shell">
        <div><span className="re-label">NEXT STEP</span><h2>Tell us the business goal.<br/><em>We will find the bottleneck.</em></h2></div>
        <div><p>Share your business type, market and current challenge. We will recommend the most focused next step instead of starting with the largest scope.</p><a className="re-button" href={whatsappHref} target="_blank" rel="noopener noreferrer">Start on WhatsApp <span>↗</span></a></div>
      </section>

      <footer className="re-footer"><div className="re-shell"><Link className="re-brand re-brand-lockup" href="/" aria-label="Dewank home"><img src="/dewank-logo.png" alt="Dewank" /></Link><div><Link href="/services">Arabic services</Link><Link href="/work">Work</Link><Link href="/contact">Contact</Link><a href="mailto:hello@dewank.com">hello@dewank.com</a></div><p>© {new Date().getFullYear()} Dewank. Brand × Growth × AI.</p></div></footer>
    </main>
  );
}
