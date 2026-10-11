import Image from "next/image";
import Link from "next/link";
import { enMetadata } from "../_en/metadata";
import { Footer } from "../_en/parity/footer";
import { Header } from "../_en/parity/header";
import { whatsappHref } from "../_en/lib/site";
import AboutSystem from "./about-system";
// The Arabic About page's layout and styles, reused unchanged. English-only direction and type overrides follow.
import "../../about/about-page.css";
import "../../about/about-entity-aeo.css";
import "../_en/parity/service-pages.en.css";
import "../_en/styles/hide-arabic-widgets.css";

export const metadata = enMetadata(
  "About Dewank: brand, growth and automation as one system",
  "Dewank is a growth company for businesses worldwide. We connect brand strategy, marketing, websites, SEO and GEO, WhatsApp and CRM, and AI automation into one measurable system.",
  "/en/about",
);

const values = [
  { no: "01", title: "Strategy first", text: "We do not start with design or advertising until we understand the market, the offer and the real point where growth is blocked." },
  { no: "02", title: "One system", text: "Identity, content, website, advertising and automation work towards one shared goal." },
  { no: "03", title: "Technology serves people", text: "We use AI to reduce waste without damaging the customer's experience or making it more complicated." },
  { no: "04", title: "Results before appearance", text: "We care about clarity, conversion and efficiency, not appearance or reach alone." },
];

const serviceMap = [
  { title: "Brand and identity", text: "Positioning, naming and a visual identity that make the brand clearer and easier to remember.", href: "/en/branding" },
  { title: "Paid advertising", text: "Google Ads and Meta Ads with tracking and conversion optimisation, not clicks alone.", href: "/en/paid-advertising" },
  { title: "Websites and landing pages", text: "Fast experiences that combine the message, SEO and conversion work to lead the visitor to a clear action.", href: "/en/website-design" },
  { title: "Content and social media", text: "Strategy, ideas, design, captions and a publishing plan that connect presence to demand.", href: "/en/social-media-content" },
  { title: "SEO, GEO and AEO", text: "Technical SEO, content structure and schema that help search engines and answer systems understand your expertise.", href: "/en/seo-geo-aeo" },
  { title: "WhatsApp and CRM", text: "Replies, qualification, booking and follow-up, connected to a CRM with defined stages you can measure.", href: "/en/whatsapp-crm-automation" },
  { title: "AI automation", text: "Workflows and integrations that reduce manual work and connect marketing, sales and operations.", href: "/en/ai-automation" },
];

const faqs = [
  { question: "What is Dewank?", answer: "Dewank is a growth company for businesses worldwide. It brings brand strategy, marketing, websites, SEO and GEO, data, WhatsApp and CRM, and AI automation into one system." },
  { question: "Where does Dewank work?", answer: "We have delivery experience with businesses in Saudi Arabia, Bahrain and the United Arab Emirates. Projects can be delivered remotely, and each scope is agreed individually." },
  { question: "How is Dewank different from a traditional marketing agency?", answer: "We start from the business problem and the point where the customer journey breaks, then choose the smallest practical scope, rather than selling separate services that do not work together." },
  { question: "Can I start with one service?", answer: "Yes. You can start with one service, such as advertising, a website, content or WhatsApp automation, and extend the system when a clear, measured need appears." },
];

export default function AboutPage() {
  const contactLink = whatsappHref("Hello Dewank, I would like to discuss the challenge in my business. The business is: ");
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://dewank.com/en/about#page",
        name: "About Dewank",
        url: "https://dewank.com/en/about",
        description: "Dewank is a growth company for businesses worldwide, connecting brand strategy, marketing, websites, SEO and GEO, WhatsApp and CRM, and AI automation.",
        inLanguage: "en",
      },
      {
        "@type": "FAQPage",
        "@id": "https://dewank.com/en/about#faq",
        mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
      },
    ],
  };

  return (
    <main id="main-content" className="about-page about-entity-page en-service" lang="en" dir="ltr">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

      <section className="about-hero shell">
        <div>
          <span className="section-label">About Dewank</span>
          <h1>We are not a list of services.<br /><em>We build a clearer growth system.</em></h1>
          <p>We bring brand strategy, marketing, websites, data and automation into one route, because growth is rarely blocked by a missing service. It is blocked when the services are not connected to each other.</p>
          <div className="about-hero-actions">
            <a className="button primary" href={contactLink} target="_blank" rel="noopener noreferrer">Discuss your challenge on WhatsApp <span>↗</span></a>
            <Link className="button secondary" href="/en/work">See our work <span>→</span></Link>
          </div>
        </div>
        <aside className="about-hero-card">
          <small>BRAND × GROWTH × AI</small>
          <strong>We start with the problem, not the name of the service.</strong>
          <span>We set the priority first, then build the smallest system that makes a real, measurable difference.</span>
        </aside>
      </section>

      <section className="about-person shell" id="mohamed-rashad" aria-labelledby="mohamed-rashad-title">
        <div className="about-person-content">
          <span className="section-label">The strategy behind the work</span>
          <h2 id="mohamed-rashad-title">Mohamed Rashad</h2>
          <p className="about-person-role">Marketing and Brand Growth Strategist</p>
          <p className="about-person-bio">Mohamed Rashad has more than 14 years of experience in marketing, brand building, digital growth and the customer journey, in GCC markets. His work spans positioning and naming, growth systems, CRM and automation, with a focus on turning strategy into decisions and results that can be measured.</p>
          <p className="about-person-meta">14+ years across brand strategy, digital growth, customer acquisition and CRM.</p>
          <Link className="about-person-link" href="/en/work">See selected work <span aria-hidden="true">→</span></Link>
        </div>
        <div className="about-person-portrait">
          <Image
            src="/mohamed-rashad-brand-growth-strategist.webp"
            alt="Mohamed Rashad, Marketing and Brand Growth Strategist"
            width={1122}
            height={1402}
            sizes="(max-width: 760px) 80vw, 330px"
          />
        </div>
      </section>

      <section className="about-entity-definition shell" aria-labelledby="about-definition-title">
        <span className="section-label">Definition</span>
        <div>
          <h2 id="about-definition-title">What is Dewank?</h2>
          <p><strong>Dewank is a growth company for businesses worldwide.</strong> We connect brand, content, advertising, websites, SEO and GEO, WhatsApp and CRM, and AI automation, so each step supports the next, rather than running separate tools and services that are hard to measure.</p>
        </div>
      </section>

      <section className="about-origin shell">
        <div className="about-origin-copy">
          <span className="section-label">Why Dewank</span>
          <h2>The idea started from a problem we see every day.</h2>
          <p>A company works with a designer who does not know the marketing goal, a marketer who does not understand the brand, a developer who builds a site with no conversion path, and an automation that runs apart from sales. The result is a lot of effort and many tools, but a customer journey that is still broken into pieces.</p>
          <p>Dewank was built to connect the strategic decision with execution, technology and measurement in one system.</p>
        </div>
        <div className="fragment-grid">
          <article className="fragment-card"><b>Design without strategy</b><p>A handsome identity, but the market does not understand why it should choose it.</p></article>
          <article className="fragment-card"><b>Marketing without a journey</b><p>Reach and engagement, but a weak path towards enquiry or purchase.</p></article>
          <article className="fragment-card"><b>A website without conversion</b><p>Elegant pages that do not lead the visitor to a clear step.</p></article>
          <article className="fragment-card"><b>Automation without order</b><p>Technology that speeds up the chaos instead of reducing it.</p></article>
        </div>
      </section>

      <AboutSystem />

      <section className="about-services-map shell" aria-labelledby="about-services-title">
        <div className="about-services-head">
          <div><span className="section-label">What Dewank offers</span><h2 id="about-services-title">Seven routes.<br /><em>One goal: clearer growth.</em></h2></div>
          <Link href="/en/services">All services <span>→</span></Link>
        </div>
        <div className="about-services-grid">
          {serviceMap.map((service, index) => (
            <Link className="about-service-card" href={service.href} key={service.href}>
              <small>{String(index + 1).padStart(2, "0")}</small>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <span>Explore the service →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="about-values shell">
        <span className="section-label">What sets us apart</span>
        <h2>Clear decisions before execution.</h2>
        <div className="values-grid">
          {values.map((value) => (
            <article className="value-card" key={value.no}>
              <span>{value.no}</span><h3>{value.title}</h3><p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-market">
        <div className="shell market-grid">
          <div>
            <span className="section-label">Market experience</span>
            <h2>Experience built in the market,<br />not in presentations.</h2>
            <p>Dewank brings practical experience in brand strategy, digital marketing, website development, campaign management, the customer journey, CRM and automation, with delivery experience in Saudi Arabia, Bahrain and the UAE.</p>
            <p>We link marketing with sales and customer service, and turn scattered touchpoints into systems that are easier to measure and improve.</p>
            <div className="market-tags">
              <span>Saudi Arabia</span><span>Bahrain</span><span>UAE</span><span>Remote projects</span>
            </div>
          </div>
          <div className="market-map" aria-label="Dewank's experience in Gulf markets">
            <small>MARKET EXPERIENCE</small>
            <strong>Trust, speed, WhatsApp and language are not side details.</strong>
            <p>They are central to how customers decide, and how they move from interest to contact, in many markets.</p>
            <span className="gcc-word" aria-hidden="true">GCC</span>
          </div>
        </div>
      </section>

      <section className="about-fit shell">
        <span className="section-label">Are we the right fit?</span>
        <h2>A good partnership starts with clear expectations.</h2>
        <div className="fit-grid">
          <div className="fit-box">
            <h3>Dewank is a good fit when...</h3>
            <ul>
              <li>You have a good service, but its message is not clear.</li>
              <li>You spend on marketing without a coherent system.</li>
              <li>You lose customers between the advert, the reply and the follow-up.</li>
              <li>You want a partner who understands brand, marketing and technology together.</li>
            </ul>
          </div>
          <div className="fit-box dark">
            <h3>We may not be the right choice when...</h3>
            <ul>
              <li>You want fast delivery without diagnosis or strategy.</li>
              <li>You want the lowest price rather than the solution closest to the problem.</li>
              <li>You prefer big promises to realistic measurement.</li>
              <li>You want to automate a process that is not yet organised.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="about-faq shell" aria-labelledby="about-faq-title">
        <span className="section-label">Quick answers</span>
        <h2 id="about-faq-title">Questions that help you understand Dewank quickly.</h2>
        <div className="about-faq-grid">
          {faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
        </div>
      </section>

      <section className="about-final about-final-upgraded">
        <div>
          <span className="section-label">Next step</span>
          <h2>You do not need another service.<br /><em>You need to know where to start.</em></h2>
        </div>
        <div>
          <p>Share your current challenge, and we will help you find the shortest practical route, instead of spreading your budget across separate solutions.</p>
          <div className="about-final-actions">
            <a className="button primary" href={contactLink} target="_blank" rel="noopener noreferrer">Start on WhatsApp <span>↗</span></a>
            <Link className="button secondary" href="/en/services">Review the services first <span>→</span></Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
