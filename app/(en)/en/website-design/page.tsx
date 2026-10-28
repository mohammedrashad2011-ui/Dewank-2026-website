import { WebsiteBuildMotion } from "../../../components/website-build-motion";
import Link from "next/link";
import { enMetadata } from "../_en/metadata";
import { Footer } from "../_en/parity/footer";
import { Header } from "../_en/parity/header";
import { RelatedGuides } from "../_en/parity/related-guides";
import { OfferPrice } from "../_en/lib/localized-price";
import { whatsappHref } from "../_en/lib/site";
// The Arabic website-design page's layout and styles, reused unchanged. English-only direction and type overrides follow.
import "../../../(ar)/website-design/website-design-page.css";
import "../../../(ar)/website-design/website-cluster.css";
import "../../../(ar)/website-design/website-design-refinement.css";
import "../_en/parity/service-pages.en.css";
import "../_en/styles/hide-arabic-widgets.css";

export const metadata = enMetadata(
  "Website design for businesses that convert",
  "Website design and development for businesses worldwide: landing pages, company websites and custom projects, with UX, SEO, conversion work and tracking.",
  "/en/website-design",
);

const stages = [
  { n: "01", en: "CLARITY", title: "Clarity", text: "A direct message that lets a visitor understand what you offer, and why it matters, within seconds." },
  { n: "02", en: "TRUST", title: "Trust", text: "Design, content and proof that reduce hesitation and support the decision to get in touch or buy." },
  { n: "03", en: "JOURNEY", title: "Journey", text: "A logical path that connects pages and information to what the visitor needs at each step." },
  { n: "04", en: "ACTION", title: "Action", text: "Forms, calls to action and clear routes that reduce friction and make the next step easy." },
  { n: "05", en: "GROWTH", title: "Growth", text: "Continuous tracking and improvement, so the site becomes an asset that supports campaigns and sales." },
];

const servicePaths = [
  {
    id: "landing-pages",
    label: "LANDING PAGE",
    title: "A landing page for one campaign or service",
    text: "Best when you need a focused message, one offer and one call to action linked to an advert or a specific service.",
    facts: ["One page with one conversion goal.", "Usually delivered in 7–10 working days after the information is approved.", "Domain and hosting are included only in the full package, for one year."],
    href: "/en/contact",
    cta: "Request the landing page package",
  },
  {
    id: "company-website",
    label: "COMPANY WEBSITE",
    title: "A company website that builds trust and explains the services",
    text: "For businesses that need a professional presence, clear service pages, and a link between search, advertising and contact.",
    facts: ["Up to 5 core pages.", "Usually delivered in 7–12 working days after the content is received.", "Domain and hosting are outside the basic package unless agreed separately."],
    href: "/en/contact",
    cta: "Request the company website package",
  },
  {
    id: "custom-project",
    label: "CUSTOM PROJECT",
    title: "A custom project when the journey is more complex",
    text: "For projects that need more pages, a CRM, booking, automation, integrations or an experience that goes beyond a template.",
    facts: ["Pages and functions are defined before pricing.", "Stores, booking and integrations need a written scope.", "Timeline and price depend on the scope."],
    href: "#process",
    cta: "See how we deliver",
  },
];

const capabilities = [
  ["Website strategy", "Defining the role of the site, its audience, its pages and its goals before design begins."],
  ["UX and information architecture", "Organising content and routes so the visitor reaches a decision easily."],
  ["UI and digital identity", "A visual system consistent with the brand, reflecting the level of service and trust you need."],
  ["Fast, responsive development", "Build that works well on mobile and desktop, on a technical base that can grow."],
  ["Landing pages", "Dedicated pages for campaigns and offers, focused on one message and one clear action."],
  ["CRO and conversion", "Review of messages, forms and friction to raise enquiries or sales."],
  ["Technical SEO, GEO and AEO", "Structure, titles, schema and speed that help search engines and answer systems understand the site."],
  ["Analytics and connections", "GA4, Meta Pixel, form routing, WhatsApp or CRM connections, as the project requires."],
];

const foundations = [
  ["Speed and mobile experience", "The site must load, read and work well on a phone before anything else is discussed."],
  ["Search-friendly structure", "Headings, links and schema help search engines understand each page and topic."],
  ["Conversion and decision path", "The message, trust signals and calls to action are built to reduce hesitation, not to fill the page."],
  ["Tracking and analytics", "You know where visits come from and what converts, not only how many visits there were."],
];

const deliverables = [
  "A site map and user journeys tied to your business goals.",
  "Wireframes for the key pages before the final design.",
  "Responsive interfaces consistent with your visual identity.",
  "Development of the pages, components and forms you need.",
  "Core SEO set-up: metadata, schema and sitemap.",
  "Connection of analytics, tracking and the channels you use.",
  "Testing of speed, responsiveness, links and forms before launch.",
  "Handover and a short guide to managing content, if needed.",
];

const process = [
  ["Discover", "We understand the business, the audience, the offer, the competition and the role the website plays in the sale."],
  ["Plan", "We define the pages, structure, journeys and content needed for each stage."],
  ["Design", "We build the visual direction and interfaces, with clear reviews before development."],
  ["Develop", "We turn the design into a fast, responsive site and connect the forms and systems."],
  ["Test and launch", "We review performance, search set-up, tracking and mobile experience, then launch with confidence."],
];

const fitFor = [
  "Your current site is outdated and does not reflect the level of your service or brand.",
  "Your business relies on social media and needs a digital home that you own.",
  "You pay for advertising, but the landing page does not turn visits into enquiries.",
  "A new brand needs a professional website before launch or expansion.",
  "Your project needs the site connected to WhatsApp, a CRM or a booking system.",
];

const faqs = [
  { question: "Do I need a landing page or a full website?", answer: "A landing page suits one advert, service or offer with one action. A company website suits businesses that need to explain several services and build trust and search visibility across several pages. If your needs are larger, such as a store, booking or integrations, you need a custom project with the scope defined before pricing." },
  { question: "How long does it take to design and build a website?", answer: "For our packaged offers, delivery usually takes 7–10 working days for a landing page and 7–12 working days for a small company website, after the information, content and direction are approved. Larger or multi-system projects depend on the number of pages, integrations and content readiness, and are planned in stages." },
  { question: "Does the price include the domain and hosting?", answer: "Not in the basic packages. The landing page package does not include them, while the full package includes them for one year. A small company website does not include them unless agreed separately. Custom projects state this in the scope." },
  { question: "Who owns the domain after delivery?", answer: "In the landing page package, the domain is registered in the client's name with the client's email, and we hand over access details and renewal instructions. In other projects, ownership and accounts are set out clearly in the agreement before work starts." },
  { question: "Does the service include writing the website content?", answer: "It can include writing the messages, headings and full content, depending on the scope. We prefer to build content and design together, because page structure and message both affect conversion." },
  { question: "Will the website work on mobile?", answer: "Yes. We design and test pages for phones, tablets and desktops, and give priority to readability, speed and a clear route to the main action." },
  { question: "Does the site include SEO?", answer: "It includes the technical foundations of each page: titles, descriptions, legal pages, schema and a sitemap. Competing for broad search terms needs a content strategy, links and continuous improvement." },
  { question: "Can you improve my current website instead of rebuilding it?", answer: "Yes, after reviewing the structure, performance and technology. Sometimes gradual improvement is best; sometimes rebuilding is cheaper and safer in the long run." },
  { question: "Can you connect the website to WhatsApp or a CRM?", answer: "Yes. Forms, WhatsApp, booking, CRM and analytics tools can be connected according to the customer journey and the systems you already use." },
];

const relatedPages = [
  { href: "#choose-path", title: "Landing page or company website?", text: "Compare the three starting points on this page and choose the scope that matches your stage." },
  { href: "#foundations", title: "A website that does not produce enquiries", text: "When the problem is after the visit, check the speed, message, trust signals, calls to action and tracking first." },
];

export default function WebsiteDesignPage() {
  const contactLink = whatsappHref("Hello Dewank, I would like to discuss designing or developing a website. My business is: ");
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://dewank.com/en/website-design#service",
        name: "Website design and development services",
        alternateName: "Website design, landing pages and conversion-focused web development",
        description: "Design and development of company websites, landing pages and custom digital experiences for businesses worldwide, with responsive interfaces, UX, technical SEO, conversion work and tracking.",
        serviceType: ["Website design", "Web development", "UX design", "UI design", "Landing page design", "Conversion rate optimisation", "Technical SEO"],
        provider: { "@id": "https://dewank.com/#organization" },
        areaServed: "Worldwide",
        url: "https://dewank.com/en/website-design",
        inLanguage: "en",
      },
      { "@type": "FAQPage", "@id": "https://dewank.com/en/website-design#faq", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://dewank.com/en" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://dewank.com/en/services" },
          { "@type": "ListItem", position: 3, name: "Website design", item: "https://dewank.com/en/website-design" },
        ],
      },
    ],
  };

  return (
    <main id="main-content" className="wd-page en-service" lang="en" dir="ltr">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

      <section className="wd-hero shell">
        <div className="wd-hero-copy">
          <div className="wd-kicker"><span>WEBSITE DESIGN</span><span>UX / SEO / CRO</span></div>
          <h1>Your website is not only a showcase<br /><em>It should help the customer take a step</em></h1>
          <p>Dewank designs and builds websites for businesses that need the message, trust, speed, search foundations and conversion path to work together, so visits from search and advertising become enquiries, sales or bookings.</p>
          <div className="wd-actions"><a className="button primary" href={contactLink} target="_blank" rel="noopener noreferrer">Discuss your project on WhatsApp <span>↗</span></a><a className="wd-text-link" href="#choose-path">Choose the type of site</a></div>
        </div>
        <div className="wd-browser" aria-label="Illustration of a clear, conversion-focused website">
          <div className="wd-browser-top"><div><i></i><i></i><i></i></div><span>yourbusiness.com</span></div>
          <div className="wd-browser-nav"><b>D</b><div><span>Services</span><span>Work</span><span>About</span></div><button type="button">Start a project</button></div>
          <div className="wd-browser-grid">
            <div className="wd-screen-copy"><small>CLARITY</small><strong>Value<br /><em>before decoration.</em></strong><p>A clear message, proof of trust, and a path that leads to action.</p><span className="wd-demo-cta">Explore the solution →</span></div>
            <div className="wd-screen-cards"><article><b>Clear message</b><span>What do you offer?</span></article><article><b>Proof of trust</b><span>Why choose you?</span></article><article><b>Next step</b><span>What should they do now?</span></article></div>
          </div>
          <div className="wd-browser-foot"><span>UX STRATEGY</span><span>RESPONSIVE</span><span>CONVERSION</span></div>
        </div>
      </section>

      <section className="wd-truth">
        <div className="shell">
          <span className="wd-label wd-truth-label">The core idea</span>
          <div className="wd-truth-grid wd-truth-grid-revised">
            <div className="wd-truth-primary"><h2>Appearance attracts attention<br /><em>The decision needs more than appearance</em></h2></div>
            <div className="wd-truth-secondary">
              <p>If a visitor does not understand the service quickly, has no reason to trust you, or does not know what to do next, a beautiful site is still only a catalogue.</p>
              <p>So we connect the design with content, user experience, speed and tracking, so the site serves search, advertising and sales at the same time.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="wd-paths shell" id="choose-path">
        <div className="wd-section-head"><div><span className="wd-label">Choose a starting point</span><h2>Not every project needs the same site<br /><em>Start with the scope that serves the goal</em></h2></div><p>Choosing between a landing page, a company website and a custom project keeps cost and complexity under control without reducing the result you need.</p></div>
        <div className="wd-path-grid">
          {servicePaths.map((path, index) => (
            <article key={path.title} id={path.id}>
              <small>{String(index + 1).padStart(2, "0")} · {path.label}</small>
              <h3>{path.title}</h3>
              <p>{path.text}</p>
              <ul className="wd-path-facts">{path.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
              <Link href={path.href}>{path.cta} <span>↗</span></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="wd-journey">
        <div className="shell">
          <div className="wd-section-head"><div><span className="wd-label">From visit to result</span><h2>Every page has a job<br /><em>Every step reduces hesitation</em></h2></div><p>We build the journey from the visitor’s first question to the action that serves the business goal.</p></div>
          <div className="wd-journey-list">{stages.map((stage) => <article key={stage.n}><div className="wd-stage-id"><span>{stage.n}</span><small>{stage.en}</small></div><h3>{stage.title}</h3><p>{stage.text}</p></article>)}</div>
        </div>
      </section>

      <section className="wd-foundation shell" id="foundations">
        <div className="wd-section-head"><div><span className="wd-label">Beyond the design</span><h2>SEO, speed, conversion and tracking<br /><em>Not add-ons after launch</em></h2></div><p>If the site will receive visits from search or campaigns, the technical foundation and the conversion path must be built from the start.</p></div>
        <div className="wd-foundation-grid">{foundations.map((item, index) => <article key={item[0]}><h3>{item[0]}</h3><p>{item[1]}</p></article>)}</div>
        <div className="wd-foundation-links"><Link href="/en/seo-geo-aeo">See SEO, GEO and AEO <span>↗</span></Link><Link href="/en/paid-advertising">See paid advertising <span>↗</span></Link></div>
      </section>

      <section className="wd-capabilities shell">
        <div className="wd-section-head"><div><span className="wd-label">Scope of work</span><h2>Design, development and conversion<br /><em>in one system</em></h2></div><p>We define the scope from the needs of the project, rather than adding features the user or the result does not need.</p></div>
        <div className="wd-capability-grid">{capabilities.map((item, index) => <article key={item[0]}><h3>{item[0]}</h3><p>{item[1]}</p></article>)}</div>
      </section>

      <section className="wd-deliverables">
        <div className="shell wd-deliverables-layout">
          <div className="wd-sticky-copy"><span className="wd-label">What you receive</span><h2>Working deliverables<br /><em>Not only a link</em></h2><p>From planning to testing, you know what is being built, why, and how it will serve the business after launch.</p></div>
          <div className="wd-deliverables-list">{deliverables.map((item, index) => <div key={item}><p>{item}</p></div>)}</div>
        </div>
      </section>

      <section className="wd-method shell" id="process">
        <div className="wd-section-head"><div><span className="wd-label">How we work</span><h2>From the business goal<br /><em>to a site that works</em></h2></div><p>We do not start with colours. We start with the role of the site, the message and the path, then build the technology around them.</p></div>
        <WebsiteBuildMotion locale="en" />
        <div className="wd-method-list">{process.map((step, index) => <div key={step[0]}><h3>{step[0]}</h3><p>{step[1]}</p></div>)}</div>
      </section>

      <section className="wd-fit">
        <div className="shell wd-fit-layout">
          <div><span className="wd-label">Who this is for</span><h2>You need a new website<br /><em>when the current one is in the way</em></h2></div>
          <div className="wd-fit-list">{fitFor.map((item, index) => <p key={item}>{item}</p>)}</div>
        </div>
      </section>

      <section className="wd-cluster shell" aria-labelledby="wd-cluster-title">
        <div className="wd-cluster-head"><div><span className="wd-label">Before you decide</span><h2 id="wd-cluster-title">Understand what the site needs.<em>Then choose the right scope</em></h2></div><p>Read the short guides on this page first. Move to a package only when its scope suits your stage.</p></div>
        <div className="wd-guide-grid">
          {relatedPages.map((guide, index) => (
            <Link className="wd-guide-card" href={guide.href} key={guide.href}>
              <div className="wd-guide-top"><span>Guide 0{index + 1}</span><span className="wd-guide-arrow" aria-hidden="true">↗</span></div>
              <h3>{guide.title}</h3>
              <p>{guide.text}</p>
            </Link>
          ))}
        </div>
        <div className="wd-offer-grid">
          <Link className="wd-offer-card" href="/en/contact">
            <small>For one campaign or service</small>
            <strong>Custom landing page</strong>
            <p>A focused path with one goal, including copy, design, the form or WhatsApp route and conversion tracking.</p>
            <span className="wd-offer-price"><OfferPrice offerKey="landing-page-package" className="wd-offer-price-value" /><span className="wd-offer-link">Request this package →</span></span>
          </Link>
          <Link className="wd-offer-card" href="/en/contact">
            <small>For a small company website</small>
            <strong>Company website, up to 5 pages</strong>
            <p>A ready starting point for businesses that need a professional presence without a large development project.</p>
            <span className="wd-offer-price"><OfferPrice offerKey="small-business-website" className="wd-offer-price-value" /><span className="wd-offer-link">Request this package →</span></span>
          </Link>
        </div>
      </section>

      <section className="wd-faq shell">
        <div className="wd-faq-head"><div><span className="wd-label">Frequently asked questions</span><h2>Before we start</h2></div><p>Direct answers on scope, timelines, content, development and connections.</p></div>
        <div className="wd-faq-grid">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</div>
      </section>

      <section className="wd-final shell">
        <div><span className="wd-label">Next step</span><h2>Send your current website address<br /><em>Or describe the project</em></h2></div>
        <div className="wd-final-actions">
          <p>We will say whether a landing page, a company website, an update to your current site or a custom project suits you, before you commit to a larger cost than needed.</p>
          <a className="button primary" href={contactLink} target="_blank" rel="noopener noreferrer">Discuss your website on WhatsApp <span>↗</span></a>
          <div className="wd-related"><Link href="/en/seo-geo-aeo">SEO, GEO and AEO</Link><Link href="/en/paid-advertising">Paid advertising</Link><Link href="/en/contact">Contact</Link></div>
        </div>
      </section>
      <RelatedGuides guides={[{ href: "/en/guides/why-website-does-not-generate-leads", title: "Why your website does not generate leads" }]} />
      <Footer />
    </main>
  );
}
