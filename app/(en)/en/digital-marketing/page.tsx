import Link from "next/link";
import { enMetadata } from "../_en/metadata";
import { Footer } from "../_en/parity/footer";
import { Header } from "../_en/parity/header";
import { RelatedGuides } from "../_en/parity/related-guides";
import { whatsappHref } from "../_en/lib/site";
// The Arabic digital-marketing page's layout and styles, reused unchanged. English-only direction and type overrides follow.
import "../../../(ar)/digital-marketing/digital-marketing-page.css";
import "../../../(ar)/digital-marketing/digital-marketing-guides.css";
import "../_en/parity/service-pages.en.css";
import "../_en/styles/hide-arabic-widgets.css";

export const metadata = enMetadata(
  "Digital marketing strategy and content",
  "Digital marketing strategy for businesses worldwide: marketing plans, messages, content, customer journeys, channel choice and measurement, with the right specialist service routed to you.",
  "/en/digital-marketing",
);

const journey = [
  { n: "01", en: "ATTENTION", title: "Attention", text: "An idea and hook that stop the scroll without noise or exaggeration." },
  { n: "02", en: "RELEVANCE", title: "Relevance", text: "A message that shows the customer their own problem and context." },
  { n: "03", en: "TRUST", title: "Trust", text: "Evidence, perspective and expertise that reduce hesitation before the first contact." },
  { n: "04", en: "ACTION", title: "Decision", text: "A clear invitation and next step that lead to an enquiry or a purchase." },
  { n: "05", en: "RETENTION", title: "Continuity", text: "Follow-up and content that keep the relationship going after the first interaction." },
];

const capabilities = [
  ["Digital marketing strategy", "Defining the goal, the audience, the channels and the priority, rather than spreading effort evenly."],
  ["Audience and competitor research", "Understanding what drives the decision, what the market says, and where a gap can be owned."],
  ["Content strategy", "Pillars, angles and messages that connect content to the customer's needs and stages of decision."],
  ["Messaging and persuasive copy", "A proposed value, hooks and calls to action that make the offer easier to understand and choose."],
  ["Social media plans", "A realistic publishing system that balances reach, trust and conversion, not a calendar kept for its own sake."],
  ["Launches and offers", "The idea, sequence, messages and pages needed before a budget is committed."],
  ["Landing and conversion pages", "Linking content to a page that explains the value, reduces friction and leads to one clear action."],
  ["Measurement and improvement", "Indicators tied to the business goal, and tests that show what deserves repeating or stopping."],
];

const deliverables = [
  "A diagnosis of the current situation, the channels, the content and the conversion path.",
  "Definition of audience segments, their needs, decision triggers and objections.",
  "A customer journey map from discovery to enquiry and follow-up.",
  "A messaging framework covering the proposed value, core messages and key arguments.",
  "Content pillars and angles tied to clear goals and stages.",
  "An executable content plan covering formats, hooks, calls to action and channel distribution.",
  "Performance indicators, plus a test and improvement plan rather than reach and engagement alone.",
  "Recommendations for connecting content to the website, campaigns and WhatsApp or CRM where needed.",
];

const process = [
  ["Discover", "We understand the market, the offer, the audience and the resources, and identify the real bottleneck."],
  ["Define", "We choose the goal, the priority, the message and the channels that deserve investment."],
  ["Build", "We turn the decision into a system of content, messages and experiences that can be carried out."],
  ["Launch", "We start with a clear scope and measured tests, rather than publishing everything at once."],
  ["Improve", "We read the signals and develop what raises clarity, trust and conversion."],
];

const routes = [
  { tag: "GOOGLE ADS", href: "/en/paid-advertising", title: "You want demand faster, from people searching now", text: "Search advertising captures demand that already exists. It needs the right page and clear measurement before any spend." },
  { tag: "SEO / AEO", href: "/en/seo-geo-aeo", title: "You want customers to find you organically", text: "Cumulative visibility in Google and answer systems, with no promise of a fixed ranking or timeline." },
  { tag: "SOCIAL MEDIA", href: "/en/social-media-content", title: "You need a steady presence and content", text: "A content system and account management, within a defined scope and clear deliverables." },
  { tag: "WEBSITE", href: "/en/website-design", title: "Visits do not turn into enquiries", text: "Start with the website or a landing page before you increase visits or ad spend." },
  { tag: "WHATSAPP", href: "/en/whatsapp-crm-automation", title: "Enquiries are lost after they arrive", text: "Qualify and follow up with customers on WhatsApp once they have contacted you." },
  { tag: "BRANDING", href: "/en/branding", title: "There is no clear identity to market with", text: "Define the name, identity and message first, then build channels and content on top of them." },
];

const fitFor = [
  "A company that publishes consistently, but enquiries are fewer than the effort suggests.",
  "A brand entering a new market that needs a message suited to that context.",
  "A content team that executes well but does not work from a single strategy.",
  "A business that relies on advertising because organic content is not building demand or trust.",
  "A company with a strong service whose audience does not understand how it differs from the alternatives.",
];

const guideLinks = [
  { href: "/en/social-media-content", title: "Followers that do not turn into customers: where is the problem?", text: "A practical check of the message, the offer, trust and the call to action, before you publish more." },
  { href: "/en/services", title: "Compare the services in one place", text: "See the twelve services side by side and find the starting point that matches your bottleneck." },
  { href: "/en/contact", title: "Describe the problem and we will suggest the scope", text: "Tell us the business, the goal and what has been tried, and we will suggest a sensible starting point." },
];

const faqs = [
  { question: "Where should I start: SEO, advertising or social media?", answer: "Start with the problem, not the channel. Google advertising captures existing demand quickly but needs a budget and a suitable page. SEO builds visibility over time, without a guaranteed ranking. Social media builds presence and trust. If the website or follow-up is where people drop out, fix that before increasing spend." },
  { question: "How is this service different from the specialist services?", answer: "This page covers strategy, messaging, content, the customer journey and channel choice. Advertising, SEO, website design, WhatsApp automation and identity each have their own service with its own scope, and we direct you to them based on what the diagnosis shows." },
  { question: "Does the service include managing social media accounts?", answer: "It can cover strategy only, or execution and monthly management, depending on the scope. We first establish whether the problem is the direction or the capacity to execute, before recommending ongoing management." },
  { question: "Do you create the content, or only the plan?", answer: "We provide the strategy, the messaging system and the plan. The scope can include writing, design, production and publishing. Deliverables depend on your team, budget and the channels required." },
  { question: "How do you choose the right platforms?", answer: "We choose channels based on where your audience spends time, the nature of the buying decision, the role each platform plays in the journey, the cost of reaching people and your team's ability to keep quality consistent." },
  { question: "When will digital marketing and content results appear?", answer: "Some signals, such as clearer messages and better engagement, can improve quickly. Building trust and sustained demand takes testing and repetition. The timeline depends on the starting point, the offer, the market and the channel." },
  { question: "Can you guarantee a fixed number of customers?", answer: "No. The result depends on the offer, the price, the competition, the website experience and how quickly enquiries are followed up. We commit to a clear method of research, execution, measurement and improvement." },
  { question: "Is content marketing a replacement for advertising?", answer: "Not always. Content builds understanding and trust and strengthens advertising performance, while advertising speeds up reach and testing. Usually the best approach is to give each a clear role within one customer journey." },
];

export default function DigitalMarketingPage() {
  const contactLink = whatsappHref("Hello Dewank, I would like to discuss a digital marketing strategy for my business. My business is: ");
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://dewank.com/en/digital-marketing#service",
        name: "Digital marketing strategy and content services",
        alternateName: "Digital marketing and content strategy",
        description: "Digital marketing strategy, content strategy, messaging, customer journey mapping and conversion strategy for businesses worldwide.",
        serviceType: ["Digital marketing strategy", "Content strategy", "Social media content", "Marketing messaging", "Customer journey", "Conversion strategy"],
        provider: { "@id": "https://dewank.com/#organization" },
        areaServed: "Worldwide",
        url: "https://dewank.com/en/digital-marketing",
        inLanguage: "en",
      },
      {
        "@type": "FAQPage",
        "@id": "https://dewank.com/en/digital-marketing#faq",
        mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://dewank.com/en" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://dewank.com/en/services" },
          { "@type": "ListItem", position: 3, name: "Digital marketing and content", item: "https://dewank.com/en/digital-marketing" },
        ],
      },
    ],
  };

  return (
    <main id="main-content" className="dm-page en-service" lang="en" dir="ltr">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

      <section className="dm-hero shell">
        <div className="dm-hero-copy">
          <div className="dm-kicker"><span>DIGITAL MARKETING</span><span>CONTENT SYSTEMS</span></div>
          <h1>Content that does more than fill a calendar.<br /><em>It moves the customer towards a decision.</em></h1>
          <p>We build a digital marketing strategy and plan that link your business goals, audience behaviour, messages, channels, content and conversion path into one measurable system, so marketing works as a business decision rather than a publishing schedule.</p>
          <div className="dm-actions">
            <Link className="button primary" href={contactLink}>Discuss your marketing strategy <span>→</span></Link>
            <a className="dm-text-link" href="#dm-method">See how we work <span>↓</span></a>
          </div>
        </div>
        <div className="dm-hero-system" aria-label="The content journey from attention to decision">
          <div className="dm-orbit dm-orbit-one" />
          <div className="dm-orbit dm-orbit-two" />
          <div className="dm-core"><span>CONTENT</span><strong>→</strong><span>DEMAND</span></div>
          <span className="dm-signal dm-signal-a">Message</span>
          <span className="dm-signal dm-signal-b">Trust</span>
          <span className="dm-signal dm-signal-c">Enquiry</span>
          <span className="dm-signal dm-signal-d">Measure</span>
        </div>
      </section>

      <section className="dm-truth shell">
        <span className="dm-label">The problem we solve</span>
        <div className="dm-truth-grid">
          <h2>More posting does not mean growth.<br /><em>More reach does not mean demand.</em></h2>
          <div>
            <p>When content works without a clear positioning, message or journey, it becomes daily effort that creates movement on the screen but not movement in sales.</p>
            <p>We identify where the customer stops, what they need to understand or believe, and then build content, channels and pages that lead them to the next step.</p>
          </div>
        </div>
      </section>

      <section className="dm-guides dm-route shell" id="dm-route" aria-labelledby="dm-route-title">
        <div className="dm-guides-head">
          <div>
            <span className="dm-label">Where to start</span>
            <h2 id="dm-route-title">Know the problem first.<br /><em>Then choose the right service.</em></h2>
          </div>
          <p>Digital marketing is not one channel, and it does not always begin with an advert. Identify the problem you face, then move to the specialist service that covers it within its own scope.</p>
        </div>
        <div className="dm-guides-grid dm-route-grid">
          {routes.map((route) => (
            <Link className="dm-guide-card" href={route.href} key={route.href}>
              <div className="dm-guide-card-top"><span>{route.tag}</span><span className="dm-guide-arrow" aria-hidden="true">↗</span></div>
              <h3>{route.title}</h3>
              <p>{route.text}</p>
            </Link>
          ))}
        </div>
        <p className="dm-route-note"><span>We do not promise a fixed number of customers, a ranking, or a result within a fixed time. If you are unsure where to start, send us your business and goal, and we will agree the priority with you.</span><Link className="dm-text-link" href="/en/contact">Discuss your starting point <span>→</span></Link></p>
      </section>

      <section className="dm-journey">
        <div className="shell">
          <div className="dm-section-head">
            <div><span className="dm-label">From content to demand</span><h2>Every piece of content has a job<br /><em>inside the journey.</em></h2></div>
            <p>We do not judge a post on its own. Did it attract attention? Explain? Build trust? Move a decision? Or bring a customer back?</p>
          </div>
          <div className="dm-journey-grid">
            {journey.map((item) => (
              <article key={item.n}>
                <div><span>{item.n}</span><small>{item.en}</small></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dm-capabilities shell">
        <div className="dm-section-head">
          <div><span className="dm-label">What we build</span><h2>Not a full account.<br /><em>A coherent marketing system.</em></h2></div>
          <p>We choose what serves the goal, and leave out whatever adds noise or effort without a business effect.</p>
        </div>
        <div className="dm-capability-grid">
          {capabilities.map(([title, text], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="dm-deliverables">
        <div className="shell dm-deliverables-layout">
          <div className="dm-sticky-copy">
            <span className="dm-label">What you receive</span>
            <h2>Outputs your team can use<br /><em>from tomorrow.</em></h2>
            <p>We do not deliver a theory document that ends up unread. Each output is designed to support a decision, make execution easier or improve measurement.</p>
          </div>
          <div className="dm-deliverables-list">
            {deliverables.map((item, index) => <div key={item}><b>{String(index + 1).padStart(2, "0")}</b><p>{item}</p></div>)}
          </div>
        </div>
      </section>

      <section className="dm-method shell" id="dm-method">
        <div className="dm-section-head">
          <div><span className="dm-label">How we work</span><h2>From diagnosis<br /><em>to a system you can improve.</em></h2></div>
          <p>Each stage answers a business question before the next stage of execution begins.</p>
        </div>
        <div className="dm-method-list">
          {process.map(([title, text], index) => (
            <div key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></div>
          ))}
        </div>
      </section>

      <section className="dm-fit">
        <div className="shell dm-fit-layout">
          <div><span className="dm-label">Who this is for</span><h2>This service fits<br /><em>when the business is bigger than its content.</em></h2></div>
          <div className="dm-fit-list">
            {fitFor.map((item) => <p key={item}><span>↙</span>{item}</p>)}
          </div>
        </div>
      </section>

      <section className="dm-guides shell" aria-labelledby="dm-guides-title">
        <div className="dm-guides-head">
          <div>
            <span className="dm-label">Before you decide</span>
            <h2 id="dm-guides-title">Understand where the problem is.<br /><em>Then choose the right scope.</em></h2>
          </div>
          <p>Three short pages help you diagnose weak conversion, understand the cost of managing accounts, and compare marketing scopes before you commit.</p>
        </div>
        <div className="dm-guides-grid">
          {guideLinks.map((guide, index) => (
            <Link className="dm-guide-card" href={guide.href} key={guide.title}>
              <div className="dm-guide-card-top"><span>Related page 0{index + 1}</span><span className="dm-guide-arrow" aria-hidden="true">↗</span></div>
              <h3>{guide.title}</h3>
              <p>{guide.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="dm-faq shell">
        <span className="dm-label">Frequently asked questions</span>
        <div className="dm-faq-head"><h2>Direct answers.<br /><em>Before we start.</em></h2><p>We define the scope from the problem and your resources, not from a package built for everyone.</p></div>
        <div className="dm-faq-grid">
          {faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}
        </div>
      </section>

      <section className="dm-final shell">
        <div>
          <span className="dm-label">Next step</span>
          <h2>Do not start with more content.<br /><em>Start with a clear reason for each piece.</em></h2>
        </div>
        <div className="dm-final-actions">
          <p>A short conversation to understand the business and the goal, and whether the priority is strategy, execution or fixing the conversion path.</p>
          <Link className="button primary" href={contactLink}>Discuss your project <span>→</span></Link>
          <div className="dm-related"><Link href="/en/paid-advertising">Paid advertising ↙</Link><Link href="/en/website-design">Website design ↙</Link><Link href="/en/seo-geo-aeo">SEO, GEO and AEO ↙</Link></div>
        </div>
      </section>

      <RelatedGuides guides={[{ href: "/en/guides/marketing-plan-template", title: "A marketing plan template for businesses" }, { href: "/en/guides/marketing-kpis", title: "Marketing KPIs: the key measures businesses should track" }]} />
      <Footer />
    </main>
  );
}
