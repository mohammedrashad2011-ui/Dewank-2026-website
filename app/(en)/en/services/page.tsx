import Link from "next/link";
import ServicesMotionStage from "../../../(ar)/services/services-motion-stage";
import ServicesMotionDirector from "../../../(ar)/services/services-motion-director";
import ServicePathSelector from "../../../components/service-path-selector";
import "../../../components/service-path-selector.css";
import { enMetadata } from "../_en/metadata";
import { Footer } from "../_en/parity/footer";
import { Header } from "../_en/parity/header";
import { whatsappHref } from "../_en/lib/site";
import { RelatedGuides } from "../_en/parity/related-guides";
// The Arabic services hub's layout system, reused unchanged. English-only direction and type overrides follow.
import "../../../(ar)/services/services-overview.css";
import "../../../(ar)/services/services-conversion-hub.css";
import "../../../(ar)/services/services-aeo-upgrade.css";
import "../_en/parity/services-hub.en.css";
import "../_en/styles/hide-arabic-widgets.css";
import "../../../(ar)/conversion-rate-optimization/cro.css";
import "../../../(ar)/services/services-motion-stage.css";
import "../../../(ar)/services/services-editorial-chapters.css";

export const metadata = enMetadata(
  "Digital marketing services for growing businesses",
  "Brand, paid advertising, websites, SEO and GEO, social content, WhatsApp and AI automation, planned as one system. Start from the result you need.",
  "/en/services",
);

type Card = {
  id: string;
  no: string;
  label: string;
  tone: string;
  visual: string;
  title: string;
  hook: string;
  text: string;
  tags: string[];
  href: string;
  cta: string;
};

// Every card links to a real English page, or to the contact page where no English page exists yet.
const cards: Card[] = [
  { id: "brand-strategy", no: "01", label: "BRAND STRATEGY", tone: "brand", visual: "brand", title: "Your brand needs a reason to be chosen.", hook: "Positioning comes first.", text: "Positioning, messaging and the decisions behind them, so your business is clear to the customers you want and easy to compare favourably.", tags: ["Strategy", "Positioning", "Messaging"], href: "/en/branding", cta: "See brand strategy" },
  { id: "brand-identity", no: "02", label: "BRAND IDENTITY", tone: "brand", visual: "name-monogram", title: "Identity should work in every place it appears.", hook: "Not only on the logo.", text: "Logo system, colour, typography and the applications that matter: website, social, presentations and print, kept consistent.", tags: ["Logo", "Visual system", "Applications"], href: "/en/branding", cta: "See brand identity" },
  { id: "brand-naming", no: "03", label: "BRAND NAMING", tone: "brand", visual: "strategy-compass", title: "A name is the first brand decision.", hook: "Check it before you commit.", text: "Name options shaped by meaning and audience, with preliminary checks for similar marks and domain and social handle availability.", tags: ["Naming", "Availability", "Domains"], href: "/en/brand-naming", cta: "See the naming service" },
  { id: "social-content", no: "04", label: "SOCIAL MEDIA AND CONTENT", tone: "growth", visual: "growth", title: "Regular posting is not enough.", hook: "Content has to build demand.", text: "Content strategy, ideas, design, captions and a publishing plan, so your accounts look consistent and lead people to the next step.", tags: ["Social media", "Content", "Design"], href: "/en/social-media-content", cta: "See content services" },
  { id: "digital-strategy", no: "05", label: "DIGITAL MARKETING", tone: "growth", visual: "strategy-compass", title: "Many channels. One customer journey.", hook: "Plan them as one system.", text: "A digital marketing plan that links the message, audience, channels, offer and follow-up, so each channel supports the others.", tags: ["Strategy", "Journey", "Measurement"], href: "/en/digital-marketing", cta: "See digital marketing" },
  { id: "paid-acquisition", no: "06", label: "PAID ADVERTISING", tone: "growth", visual: "ad-signal", title: "Ads cannot fix a broken journey.", hook: "Fix the path first.", text: "Google and Meta campaigns managed with tracking, landing pages and follow-up in mind, so spend is tied to conversions, not only clicks.", tags: ["Google Ads", "Meta Ads", "Tracking"], href: "/en/paid-advertising", cta: "See paid advertising" },
  { id: "websites", no: "07", label: "WEBSITE DESIGN AND CRO", tone: "web", visual: "web", title: "Your website is a sales tool, not a brochure.", hook: "Make the next step obvious.", text: "Fast, responsive sites that combine your message, user experience, SEO and clear calls to action, so visitors get in touch, book or buy.", tags: ["UX/UI", "Web", "Conversion"], href: "/en/website-design", cta: "See website design" },
  { id: "landing-pages", no: "08", label: "LANDING AND SALES PAGES", tone: "web", visual: "conversion-funnel", title: "One page. One clear goal.", hook: "Built for a campaign or an offer.", text: "Dedicated pages for campaigns and offers, combining copy, design, a form or WhatsApp route and tracking, to turn a visit into an enquiry.", tags: ["Landing page", "Copy", "Leads"], href: "/en/website-design#landing-pages", cta: "See landing pages" },
  { id: "seo-aeo", no: "09", label: "SEO, GEO AND AEO", tone: "web", visual: "search", title: "Being present is not enough.", hook: "Be the clearest answer.", text: "Technical SEO, content structure and schema that help search engines and AI answer systems understand your expertise and show it to the right audience.", tags: ["Technical SEO", "GEO", "AEO"], href: "/en/seo-geo-aeo", cta: "See SEO, GEO and AEO" },
  { id: "analytics", no: "10", label: "ANALYTICS AND TRACKING", tone: "web", visual: "analytics-bars", title: "Numbers mean little on their own.", hook: "Connect them to decisions.", text: "GA4, Google Tag Manager and conversion events, included in website, advertising and automation projects. There is no separate analytics package yet.", tags: ["GA4", "GTM", "Conversions"], href: "/en/contact", cta: "Request a tracking review" },
  { id: "whatsapp-crm", no: "11", label: "WHATSAPP AND CRM", tone: "automation", visual: "automation", title: "WhatsApp should not only reply.", hook: "It should qualify and follow up.", text: "WhatsApp flows for replies, qualification, booking, reminders and follow-up, connected to a CRM so every conversation is tracked and measurable.", tags: ["WhatsApp", "CRM", "Follow-up"], href: "/en/whatsapp-crm-automation", cta: "See WhatsApp and CRM" },
  { id: "ai-automation", no: "12", label: "AI AUTOMATION", tone: "automation", visual: "ai", title: "Do not add AI to a messy process.", hook: "Organise the process, then automate it.", text: "Automation and AI workflows that connect marketing, sales, customer service and operations, reducing manual work and speeding decisions.", tags: ["AI agents", "Workflows", "Integrations"], href: "/en/ai-automation", cta: "See AI automation" },
];

const paths = [
  { label: "Attract customers", title: "Paid advertising", text: "Google Ads and Meta Ads with tracking and conversion-focused optimisation, not clicks alone.", href: "/en/paid-advertising", cta: "Explore paid advertising" },
  { label: "Convert visits", title: "Website design", text: "A website or landing page that connects the message, trust, SEO and the call to action in one journey.", href: "/en/website-design", cta: "Explore websites" },
  { label: "Build presence", title: "Content and social", text: "Strategy, ideas, design, captions and a publishing plan that make your accounts more consistent and clear.", href: "/en/social-media-content", cta: "Explore content" },
  { label: "Speed up follow-up", title: "WhatsApp and automation", text: "Replies, qualification, booking and follow-up, connected to a CRM, then wider automation when it is needed.", href: "/en/whatsapp-crm-automation", cta: "Explore automation" },
];

const faqs = [
  ["What are Dewank's core services?", "Dewank combines brand strategy, naming and identity, digital marketing, paid advertising, website design and conversion work, SEO, GEO and AEO, social media and content, analytics, WhatsApp and CRM automation, and AI automation as one growth system."],
  ["How do I know which service fits my business?", "Start with the problem closest to revenue: not enough enquiries, visitors who do not act, inconsistent content, or slow follow-up. If the problem is not clear, we review the journey and propose the smallest scope that can show a result."],
  ["Can I start with one service?", "Yes. We identify the current bottleneck and propose the smallest practical scope with a clear outcome. The system can grow later, when the results justify it."],
  ["Do you manage social media and content?", "Yes. The work covers strategy, ideas, design, captions and a publishing plan. You can start with a defined content package for a month."],
  ["Do your website services include landing pages?", "Yes. We build full websites and separate landing pages for campaigns and offers, with WhatsApp or form routes and conversion tracking."],
];

const contactMessage = "Hello Dewank, I would like help choosing the right service for my business. The business is: ";

export default function ServicesPage() {
  const contactLink = whatsappHref(contactMessage);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Dewank services",
        url: "https://dewank.com/en/services",
        inLanguage: "en",
      },
      {
        "@type": "ItemList",
        name: "Dewank services",
        itemListElement: cards.map((card, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: card.title,
          url: `https://dewank.com${card.href}`,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  const renderCard = (card: Card) => (
    <article className={`service-detail ${card.tone}`} id={card.id} key={card.id}>
      <div className="detail-top"><small>{card.label}</small></div>
      <div className={`service-symbol ${card.visual}`} aria-hidden="true"><i /><i /><i /></div>
      <div className="detail-copy">
        <h2>{card.title.replace(/\.$/, "")}<br /><em>{card.hook.replace(/\.$/, "")}</em></h2>
        <p>{card.text}</p>
        <div className="tag-row">{card.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </div>
      <Link className="detail-link" href={card.href}>{card.cta} <span>→</span></Link>
    </article>
  );

  return (
    <main id="main-content" className="inner-page services-page services-page-refined services-conversion-hub en-services services-motion-premium" lang="en" dir="ltr">
      <Header />
      <ServicesMotionDirector />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

      <ServicesMotionStage locale="en" />

      <section id="services-explore" className="shell services-aeo-answer" aria-labelledby="services-aeo-title">
        <small>Quick answer</small>
        <h2 id="services-aeo-title">A full-service agency, or separate services?</h2>
        <p>
          Dewank is a brand, marketing and automation agency for businesses that want a clear route from attention to enquiry
          to follow-up. We start with the bottleneck that limits growth, then recommend the service closest to the result,
          rather than selling a larger package than the business needs.
        </p>
        <div className="services-aeo-grid">
          <article><b>Attract customers</b><span>Google Ads and Meta Ads when you need measurable enquiries.</span></article>
          <article><b>Convert visits</b><span>Websites, landing pages and conversion work when visitors do not take the next step.</span></article>
          <article><b>Content and presence</b><span>Strategy, content and design when your visibility is irregular or unconvincing.</span></article>
          <article><b>Brand</b><span>Positioning, naming and identity when the business needs more clarity and consistency.</span></article>
          <article><b>Automation and follow-up</b><span>WhatsApp, CRM and AI when replies are slow or leads are lost.</span></article>
        </div>
      </section>

      <section className="shell primary-service-paths" aria-labelledby="primary-paths-title">
        <div className="primary-paths-head">
          <span className="section-label">Where to start</span>
          <h2 id="primary-paths-title">Four starting points for most growth problems.</h2>
          <p>Instead of reading a long list, begin with the result closest to what you need to fix now.</p>
        </div>
        <div className="primary-path-grid">
          {paths.map((path) => (
            <Link href={path.href} className="primary-path-card" key={path.href}>
              <small>{path.label}</small>
              <h3>{path.title}</h3>
              <p>{path.text}</p>
              <span>{path.cta} ↗</span>
            </Link>
          ))}
        </div>
        <ServicePathSelector locale="en" />
        <p className="services-decision-note">
          Rule of thumb: need enquiries? Start with advertising. Visits not converting? Start with the website. Replies or follow-up getting lost? Start with WhatsApp and CRM. Presence unclear? Start with content or brand.
        </p>
      </section>

      <section className="shell services-mid-cta" aria-label="Choose the right service">
        <div>
          <small>Not sure where to start?</small>
          <h2>Send us your business and the problem.</h2>
          <p>We will suggest the closest practical route, rather than starting you on a larger service than you need.</p>
        </div>
        <a className="button primary" href={contactLink} target="_blank" rel="noopener noreferrer">Discuss on WhatsApp <span>↗</span></a>
      </section>

      <nav className="shell service-jump-nav" aria-label="Service groups">
        <span>Jump to:</span>
        <a href="#brand">Brand</a>
        <a href="#content">Content and growth</a>
        <a href="#web">Web and measurement</a>
        <a href="#automation">Automation and AI</a>
      </nav>

      <section id="brand" className="shell service-group" aria-labelledby="brand-title">
        <div className="service-group-head">
          <span className="section-label">Brand</span>
          <h2 id="brand-title">Start with what makes your choice obvious.</h2>
          <p>We clarify who you are, who you serve and why customers should remember you.</p>
        </div>
        <div className="services-detail-bento services-grid-refined">{cards.slice(0, 3).map(renderCard)}</div>
      </section>

      <section id="content" className="shell service-group" aria-labelledby="content-title">
        <span id="digital" className="anchor-target" aria-hidden="true" />
        <span id="paid" className="anchor-target" aria-hidden="true" />
        <div className="service-group-head">
          <span className="section-label">Content and growth</span>
          <h2 id="content-title">Turn attention into demand.</h2>
          <p>We connect content, strategy and advertising, so no channel works in isolation.</p>
        </div>
        <div className="services-detail-bento services-grid-refined">{cards.slice(3, 6).map(renderCard)}</div>
      </section>

      <section id="web" className="shell service-group" aria-labelledby="web-title">
        <span id="seo" className="anchor-target" aria-hidden="true" />
        <div className="service-group-head">
          <span className="section-label">Web and measurement</span>
          <h2 id="web-title">Make every visit easy to understand and act on.</h2>
          <p>We build the experience, improve visibility and link the numbers to business outcomes.</p>
        </div>
        <div className="services-detail-bento services-grid-refined">{cards.slice(6, 10).map(renderCard)}</div>
      </section>

      <section id="automation" className="shell service-group" aria-labelledby="automation-title">
        <div className="service-group-head">
          <span className="section-label">Automation and AI</span>
          <h2 id="automation-title">Do not leave the customer waiting on a manual process.</h2>
          <p>We connect replies, qualification and follow-up so operations are fast and consistent.</p>
        </div>
        <div className="services-detail-bento services-grid-refined">{cards.slice(10).map(renderCard)}</div>
      </section>

      <section className="shell problem-chooser" aria-labelledby="problem-chooser-title">
        <div>
          <span className="section-label">If the problem is not clear yet</span>
          <h2 id="problem-chooser-title">Tell us where the customer gets stuck.<br /><em>We will start there.</em></h2>
          <p className="services-cro-link">Visits arrive but enquiries do not follow? <Link href="/en/conversion-rate-optimization#pricing">See the conversion audit packages →</Link></p>
        </div>
        <div className="problem-options">
          <Link href="/en/services#brand-strategy"><b>The brand is unclear</b><span>Brand strategy and identity →</span></Link>
          <Link href="/en/paid-advertising"><b>I need more customers</b><span>Paid advertising →</span></Link>
          <Link href="/en/website-design"><b>Visits do not convert</b><span>Website and conversion →</span></Link>
          <Link href="/en/whatsapp-crm-automation"><b>Follow-up is slow or lost</b><span>WhatsApp, CRM and automation →</span></Link>
        </div>
      </section>

      <RelatedGuides
        guides={[
          { href: "/en/guides/seo-vs-aeo", title: "SEO vs AEO: how to appear in Google and AI answers" },
          { href: "/en/guides/google-ads-vs-meta-ads", title: "Google Ads or Meta Ads: which is right for your business?" },
          { href: "/en/guides/ai-agent-vs-workflow-automation", title: "AI agent or workflow automation? How to choose for your business" },
          { href: "/en/guides/marketing-plan-template", title: "A marketing plan template for businesses" },
        ]}
      />

      <section className="seo-content shell services-faq" aria-labelledby="services-faq-title">
        <span className="section-label">Frequently asked questions</span>
        <h2 id="services-faq-title">A clearer picture before you start.</h2>
        <div className="services-faq-list">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="fit-section shell services-final-cta">
        <div>
          <span className="section-label">Next step</span>
          <h2>Not sure yet?<br /><em>Send the business and the problem only.</em></h2>
        </div>
        <div className="fit-card">
          <p>We review where growth is blocked and suggest the smallest sensible scope, rather than a bigger service than the current problem needs.</p>
          <a className="button primary" href={contactLink} target="_blank" rel="noopener noreferrer">Discuss on WhatsApp <span>↗</span></a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
