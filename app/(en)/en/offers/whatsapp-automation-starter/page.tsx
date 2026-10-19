import Link from "next/link";
import { enMetadata } from "../../_en/metadata";
import { Footer } from "../../_en/parity/footer";
import { Header } from "../../_en/parity/header";
import { OfferPrice } from "../../_en/lib/localized-price";
import { whatsappHref } from "../../_en/lib/site";
import { AutomationHeroArt, AutomationJourney, AutomationContrast } from "../../../../(ar)/offers/whatsapp-automation-starter/whatsapp-cinematic";
// The Arabic WhatsApp automation starter offer's layout and styles, reused unchanged. English-only overrides follow.
import "../../../../(ar)/offers/offers-page.css";
import "../../../../(ar)/offers/offer-trust.css";
import "../../../../(ar)/offers/whatsapp-automation-starter/whatsapp-starter.css";
import "../../../../(ar)/offers/whatsapp-automation-starter/whatsapp-cinematic.css";
import "../../_en/parity/service-pages.en.css";
import "../../_en/styles/hide-arabic-widgets.css";

export const metadata = enMetadata(
  "WhatsApp automation starter for businesses",
  "A foundation WhatsApp automation package for businesses worldwide: an automatic first reply, lead qualification, data capture, handover to a team member, basic follow-up and testing before launch. Not a full CRM.",
  "/en/offers/whatsapp-automation-starter",
);

const deliverables = [
  ["Customer journey analysis", "We identify the questions asked most often, where the customer stops, and when they need to move to a person."],
  ["A basic reply path", "A welcome, an overview of services, answers to the basic questions, then a route to the right next step."],
  ["Lead qualification", "Collecting the key details, such as the type of request, the service or the budget, before passing the lead to the team."],
  ["Smart handover to a person", "We define the cases where automation stops and the conversation moves to someone on your team."],
  ["Basic follow-up messages", "A follow-up to a customer who stopped before completing a step, within the agreed path."],
  ["A simple database", "Customer details and status stored in an organised record suited to the foundation package."],
  ["Testing before launch", "We test the paths, the replies and the unusual cases before the system goes live."],
  ["Support after launch", "A review and adjustment of the replies during the first 7 days, to handle early feedback."],
];

const faqs = [
  ["How much does the WhatsApp automation starter cost?", "The package starts at the price shown above, in US dollars by default or in your country's approved price where one exists. It covers setting up the basic path, testing and going live within the scope described. WhatsApp fees and external tools are separate where they are needed."],
  ["What does the WhatsApp automation starter include?", "It includes setting up a basic reply path, qualification, data capture, handover to a person and basic follow-up, with testing before launch and initial support after launch."],
  ["Does it include a full CRM?", "No. It includes a simple, organised record within the starter scope. If you need a full CRM, sales stages, dashboards, booking and several integrations, our full WhatsApp automation service is the better option."],
  ["Do the replies use AI?", "Replies can use fixed rules or AI-supported responses, depending on the business. In the starter, the aim is to build a clear, stable journey before adding unnecessary complexity."],
  ["Can a team member step in at any time?", "Yes. We define the handover points clearly, and some cases can pass straight to your team instead of continuing the automation."],
  ["Does it include WhatsApp fees or external tools?", "No. Any fees charged by WhatsApp platforms, connection providers or external tools are separate. We explain them before work starts if they are needed."],
  ["How long does setup take?", "Usually 3 to 5 working days after we receive your business information, the common questions and the basic replies, and approve the conversation path."],
];

export default function WhatsAppAutomationStarterOffer() {
  const contactLink = whatsappHref("Hello Dewank, I would like the WhatsApp automation starter for my business. My business is: ");
  const url = "https://dewank.com/en/offers/whatsapp-automation-starter";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "WhatsApp automation starter",
        alternateName: "WhatsApp Automation Starter",
        description: "A foundation WhatsApp automation package: automatic replies, lead qualification, data capture, handover to a team member, basic follow-up and testing before launch. Not a full CRM.",
        serviceType: ["WhatsApp Automation", "Lead Qualification", "Customer Messaging Automation"],
        provider: { "@id": "https://dewank.com/#organization" },
        areaServed: "Worldwide",
        url,
        inLanguage: "en",
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://dewank.com/en" },
          { "@type": "ListItem", position: 2, name: "Offers", item: "https://dewank.com/en/offers" },
          { "@type": "ListItem", position: 3, name: "WhatsApp automation starter", item: url },
        ],
      },
    ],
  };

  return (
    <main id="main-content" className="inner-page offers-page whatsapp-starter-page wa-cinema-page en-service" lang="en" dir="ltr">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <section className="shell offer-detail-hero whatsapp-starter-hero wa-cinema-hero">
        <div>
          <div className="offer-availability"><span className="offer-spots-available"><i aria-hidden="true" /><strong>3–5</strong> working days</span></div>
          <h1>WhatsApp automation for businesses.<br/><em>Start with the path that stops leads being lost.</em></h1>
          <p>We build a WhatsApp automation path that answers the basic questions, qualifies the customer, captures their details and follows up on the next step before passing them to the right person.</p>
          <div className="whatsapp-starter-answer" aria-label="The short answer"><b>The short answer</b><span>This is a foundation package, not a full CRM. It suits you if your main problems are slow replies, the same questions repeated, and customers lost before they reach the team.</span></div>
          <AutomationHeroArt locale="en" />
        </div>
        <aside className="offer-price-panel whatsapp-starter-price-panel"><small>Foundation package from</small><OfferPrice offerKey="whatsapp-automation-starter" className="offer-price" /><div className="offer-trust-inline"><span>Reply and qualify</span><span>Handover to a person</span><span>7-day support</span></div><p>Includes setting up the basic path, testing and going live. WhatsApp fees, external tools and a full CRM are not included.</p><a className="button primary" href={contactLink} target="_blank" rel="noopener noreferrer">Start WhatsApp automation <span>→</span></a></aside>
      </section>

      <AutomationJourney locale="en" />

      <section className="shell offer-deliverables whatsapp-starter-deliverables"><div><span className="section-label">What you receive</span><h2>A clear scope.<br/>No full CRM you do not need.</h2><p>We start with the essential path only, so it is quick to understand, easy to run and simple to develop later.</p></div><div className="deliverable-list">{deliverables.map(([item, text]) => <article className="deliverable-item" key={item}><b>{item}</b><p>{text}</p></article>)}</div></section>

      <section className="shell whatsapp-starter-fit"><div className="whatsapp-starter-fit-head"><span className="section-label">Is it right for you?</span><h2>Starter, or a full WhatsApp and CRM system?</h2></div><div className="offer-fit-grid"><article className="offer-fit-card good"><h3>Starter suits you if</h3><ul><li>You receive the same questions every day</li><li>Replies are delayed because the team is busy</li><li>You want to capture customer details before a person gets involved</li><li>You need a starting point before a full CRM</li></ul></article><article className="offer-fit-card limits"><h3>You need the full system if</h3><ul><li>You have several branches or sales teams</li><li>You need a full CRM with sales stages</li><li>You need booking, reminders and several integrations</li><li>You need reports, AI or a wider knowledge base</li></ul></article></div></section>

      <AutomationContrast locale="en" />

      <section className="shell whatsapp-starter-process"><div className="whatsapp-starter-process-head"><span className="section-label">How it is delivered</span><h2>Understand. Build. Test. Launch.</h2></div><div className="whatsapp-starter-process-grid"><article><b>01</b><h3>Analyse the questions</h3><p>We identify the intents, the basic replies and what information to collect from the customer.</p></article><article><b>02</b><h3>Build the path</h3><p>We arrange the reply, the qualification, the follow-up and the handover points to your team.</p></article><article><b>03</b><h3>Test</h3><p>We try the normal cases and the unusual ones before the system goes live.</p></article><article><b>04</b><h3>Launch</h3><p>We switch the path on and review technical feedback during the first 7 days.</p></article></div></section>

      <section className="shell offer-confidence whatsapp-starter-confidence"><div><span className="section-label">Before you buy</span><h2>Know exactly<br/>what you are paying for.</h2></div><div className="offer-confidence-list"><p><b>Starter:</b> a low-friction starting point for automating replies, qualification and handover.</p><p><b>Not included:</b> a full CRM, advanced booking, several integrations, or WhatsApp and external tool fees.</p><p><b>If you need a bigger system:</b> see our <Link href="/en/whatsapp-crm-automation">WhatsApp automation and CRM service</Link>.</p></div></section>

      <section className="shell offer-faq whatsapp-starter-faq" id="faq"><div><span className="section-label">Quick questions</span><h2>Before you start.</h2></div><div className="offer-faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>

      <section className="shell offer-final-cta whatsapp-starter-final wa-cinema-final"><div><span className="section-label">Start here</span><h2>Turn your first message<br/>into a clear next step.</h2><p>Send us your business type and the questions you receive most often, and we will tell you whether the starter is enough or whether you need a larger system.</p></div><a className="button primary" href={contactLink} target="_blank" rel="noopener noreferrer">Start on WhatsApp <span>→</span></a><div className="whatsapp-starter-links"><Link href="/en/whatsapp-crm-automation">Need a CRM and larger integrations?</Link><Link href="/en/ai-automation">Explore AI automation</Link></div></section>
      <Footer />
    </main>
  );
}
