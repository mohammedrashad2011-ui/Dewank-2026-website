import Link from "next/link";
import { enMetadata } from "../_en/metadata";
import { Footer } from "../_en/parity/footer";
import { Header } from "../_en/parity/header";
import { RelatedGuides } from "../_en/parity/related-guides";
import { AutomationFlow, ConnectedSystem, WhatsAppHeroDemo } from "../_en/parity/whatsapp-demos";
import { OfferPrice } from "../_en/lib/localized-price";
import { whatsappHref } from "../_en/lib/site";
// The Arabic WhatsApp page's layout and styles, reused unchanged. English-only direction and type overrides follow.
import "../../whatsapp-automation/whatsapp-automation.css";
import "../../whatsapp-automation/whatsapp-automation-aeo-upgrade.css";
import "../_en/parity/service-pages.en.css";
import "../_en/styles/hide-arabic-widgets.css";

export const metadata = enMetadata(
  "WhatsApp automation and CRM",
  "WhatsApp automation for businesses worldwide: instant replies, lead qualification, bookings, follow-up and CRM connections, with a clear handover to your team.",
  "/en/whatsapp-crm-automation",
);

const faqs = [
  { question: "What is WhatsApp automation for businesses?", answer: "It connects WhatsApp conversations to business rules, a CRM and integrations, so enquiries are answered, qualified, booked and followed up automatically and in an organised way. When a conversation needs a person, it is handed over to your team." },
  { question: "Can WhatsApp be connected to a CRM?", answer: "Yes. Customer details, status and source can be stored in the CRM, follow-up stages can be updated, and bookings, forms or notifications can be linked, depending on the tools you use and the scope of the project." },
  { question: "What is the difference between the WhatsApp Business app and the WhatsApp Business Platform?", answer: "Meta describes the WhatsApp Business app as designed with small businesses in mind. It describes the WhatsApp Business Platform as a messaging platform for businesses, built on APIs, which supports automated conversation flows, handover to a team member and integration with systems such as a CRM. The right route depends on your message volume, the customer journey and your team, which we define together during scoping." },
  { question: "How much does WhatsApp automation cost?", answer: "The cost depends on the number of flows, the integrations, whether a CRM and booking are included, the use of AI and the volume of conversations. The Starter package has a defined foundation scope and price. Integrated systems are priced after we review the customer journey and the integrations required." },
  { question: "Will the customer feel they are talking to a robot?", answer: "It should not be the case. We design the tone, conversation paths and handover points so the experience is clear and natural, and the customer is never forced down a path that does not suit them." },
  { question: "Can the system work in more than one language?", answer: "Yes. Replies and flows can be designed in several languages to suit your audience." },
  { question: "Is automation suitable for clinics, property businesses and services?", answer: "Yes. It also suits education providers, salons, professional services and any business that receives repeated enquiries and needs faster qualification, booking or follow-up." },
  { question: "Can my team step into a conversation?", answer: "Yes. We define the handover points clearly, such as complaints, special cases, customers who are ready to buy, and anything that needs a decision from your team." },
];

const useCases = [
  ["01", "Clinics and centres", "Explaining services, collecting the initial details, booking, reminders and follow-up, with sensitive cases passed to a team member."],
  ["02", "Salons and services", "Showing services and prices, choosing an appointment, sending confirmations and following up after the visit."],
  ["03", "Property", "Qualifying the customer by budget and need, distributing opportunities to the team and reminding them of the next step."],
  ["04", "Education and professional services", "Capturing the customer's need, directing them to the right service and organising follow-up instead of relying on memory."],
];

const guides = [
  { href: "/en/ai-automation", title: "When WhatsApp is only one channel", text: "If the problem reaches sales, operations, reporting or several systems, look at the wider AI automation scope." },
  { href: "/en/website-design", title: "Forms and routes from the website", text: "How the website, forms and WhatsApp work together so the enquiry reaches the right place with the right details." },
  { href: "/en/paid-advertising", title: "Messages that come from advertising", text: "If your enquiries come from campaigns, the advertising and the first reply should be planned together." },
];

export default function WhatsAppAutomationPage() {
  const contactLink = whatsappHref("Hello Dewank, I would like to discuss a WhatsApp automation system for my business. The business is: ");
  const diagnosticLink = whatsappHref("Hello Dewank, I would like to find the right WhatsApp system. Type of business: ___ | Approximate messages per day: ___ | Do you use a CRM or booking system today? ___");
  const url = "https://dewank.com/en/whatsapp-crm-automation";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "@id": `${url}#service`, name: "WhatsApp automation and CRM for businesses", alternateName: "WhatsApp Business automation and CRM", description: "WhatsApp automation for businesses worldwide, connecting replies, lead qualification, bookings, follow-up and CRM, with a handover to the team.", serviceType: ["WhatsApp automation", "WhatsApp CRM", "Lead qualification automation", "Sales automation"], provider: { "@type": "Organization", name: "Dewank", url: "https://dewank.com/en" }, areaServed: "Worldwide", url, inLanguage: "en" },
      { "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://dewank.com/en" }, { "@type": "ListItem", position: 2, name: "Services", item: "https://dewank.com/en/services" }, { "@type": "ListItem", position: 3, name: "WhatsApp and CRM", item: url }] },
    ],
  };

  return (
    <main id="main-content" className="wa-page en-service" lang="en" dir="ltr">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

      <section className="wa-hero">
        <div className="shell wa-hero-grid">
          <div className="wa-hero-copy">
            <span className="eyebrow">WHATSAPP AUTOMATION + CRM</span>
            <h1>
              <span className="wa-hero-line">Let WhatsApp reply, qualify and follow up.</span>
              <em className="wa-hero-line wa-hero-line-accent">Your team steps in when the customer needs them.</em>
            </h1>
            <p>We build WhatsApp automation that connects the conversation to booking, a CRM and follow-up, so no customer is lost between the first message and the next step, and your team stops repeating the same manual work.</p>
            <div className="wa-hero-actions">
              <a className="button primary" href={contactLink} target="_blank" rel="noopener noreferrer">Discuss a WhatsApp system <span>↗</span></a>
              <Link className="button secondary" href="#starter">See the Starter scope</Link>
            </div>
            <div className="wa-proof-strip"><span>Reply and qualify</span><span>CRM</span><span>Booking</span><span>Follow-up</span><span>Handover to a person</span></div>
          </div>
          <WhatsAppHeroDemo />
        </div>
      </section>

      <section className="shell wa-aeo-answer" aria-labelledby="wa-aeo-title">
        <small>Quick answer</small>
        <h2 id="wa-aeo-title">What does WhatsApp automation do for a business?</h2>
        <p>It takes over repeated work around the conversation, from the first reply to the next step, and keeps a person in the process when the customer needs a decision, a negotiation or a special case.</p>
        <div className="wa-aeo-grid">
          <article><b>Reply</b><span>Common questions answered immediately, in a clear tone.</span></article>
          <article><b>Qualify</b><span>The service, the need and the details collected before a team member joins.</span></article>
          <article><b>Book</b><span>The customer is guided to a time or a defined action when they need one.</span></article>
          <article><b>CRM and follow-up</b><span>The status, source and next step are saved, so a conversation is not lost.</span></article>
          <article><b>Human handover</b><span>The conversation passes to a team member when it needs real attention.</span></article>
        </div>
      </section>

      <section className="shell flow-section wa-flow-section">
        <span className="section-label">The customer journey</span>
        <h2>From the first &ldquo;hello&rdquo;<br />to a <mark>measurable action.</mark></h2>
        <p className="wa-section-intro">Automation is not just an automatic reply. The aim is for every message to know its next step, and for the customer to reach a person at the right moment.</p>
        <AutomationFlow />
      </section>

      <section className="automation-core wa-connected">
        <div className="shell core-grid">
          <div className="core-copy"><span className="section-label">One connected system</span><h2>The conversation at the centre.<br /><mark>Every step around it connected.</mark></h2><p>WhatsApp remains the customer’s interface. Behind it, the CRM, booking, follow-up and reporting work together.</p></div>
          <ConnectedSystem />
        </div>
      </section>

      <section className="shell wa-benefits wa-benefits-polish">
        <div><b>Faster replies</b><p>Basic questions do not wait for the team to start work.</p></div>
        <div><b>Clearer leads</b><p>Each customer arrives with their status, source and the service they asked about.</p></div>
        <div><b>Less lost follow-up</b><p>Reminders and next steps do not depend on memory.</p></div>
      </section>

      <section className="shell wa-commercial" aria-labelledby="wa-commercial-title" id="starter">
        <div className="wa-section-head"><div><span className="section-label">Choose a starting point</span><h2 id="wa-commercial-title">Not every business needs the same system.</h2></div><p>Start with the smallest scope that solves the current problem. If you need a CRM, booking or wider integrations, we extend the system once the journey is clear.</p></div>
        <div className="wa-choice-grid">
          <article className="wa-choice wa-choice-featured">
            <small>STARTER</small>
            <h3>Reply + qualify + hand over to a person</h3>
            <p>Suitable when your biggest problem is slow replies, repeated questions or conversations reaching your team without enough details.</p>
            <OfferPrice offerKey="whatsapp-automation-starter" className="wa-choice-price" />
            <ul><li>Core questions and replies</li><li>Details collected and leads qualified</li><li>Clear handover to a person</li></ul>
            <div className="wa-choice-actions"><a className="button primary" href={contactLink} target="_blank" rel="noopener noreferrer">Request the Starter scope</a><Link href="/en/ai-automation">See wider automation</Link></div>
          </article>
          <article className="wa-choice">
            <small>FULL SYSTEM</small>
            <h3>WhatsApp + CRM + booking + follow-up</h3>
            <p>Suitable when you have a team, sales stages or bookings, and need the conversation to be part of the way you run and measure the business.</p>
            <div className="wa-system-tags"><span>CRM</span><span>Booking</span><span>Follow-up</span><span>Reports</span></div>
            <ul><li>Customer stages updated automatically</li><li>Booking, reminders and follow-up</li><li>Integrations and reports within the scope</li></ul>
            <div className="wa-choice-actions"><a className="button primary" href={contactLink} target="_blank" rel="noopener noreferrer">Discuss the full system</a><Link href="#faq">How it works</Link></div>
          </article>
        </div>
      </section>

      <section className="shell wa-crm-decision" aria-labelledby="wa-crm-decision-title">
        <small>Automation only, or a CRM?</small>
        <h2 id="wa-crm-decision-title">Start with the problem, not the tool.</h2>
        <p>If the goal is only fast replies, data collection and handing over to a person, the Starter scope may be enough. If you have a team, sales stages, bookings and repeated follow-up, the CRM becomes part of the solution rather than a decoration.</p>
        <div className="wa-crm-grid">
          <article><h3>Automation only</h3><p>Best when you need replies, qualification and a handover to a person, without managing complex sales stages or an extended follow-up history.</p></article>
          <article><h3>Automation and CRM</h3><p>Best when you need to save the customer’s status, distribute opportunities, book, remind, follow up and report across a longer journey.</p></article>
        </div>
        <div className="wa-cost-note"><strong>About cost:</strong> keep the set-up cost separate from the running costs of tools and channels, and from the cost of integrations such as a CRM or booking system. The final price changes with the number of flows, the integrations and the volume of conversations.</div>
      </section>

      <section className="method-section wa-method">
        <div className="shell method-layout">
          <div className="method-intro"><span className="section-label">How we deliver</span><h2>We do not start with a bot.<br /><em>We start with the customer journey.</em></h2><p>We review your current conversations, find where work repeats and where customers drop out, then build the simplest route that solves the problem.</p></div>
          <div className="method-list">
            <div><span>01</span><h3>Analyse conversations</h3><p>Repeated questions, the points where things break, and the main intentions of customers.</p></div>
            <div><span>02</span><h3>Design the flows</h3><p>Reply, qualification, booking, follow-up and handover to a person.</p></div>
            <div><span>03</span><h3>Connect and test</h3><p>WhatsApp, the CRM, booking and notifications, within the agreed scope.</p></div>
            <div><span>04</span><h3>Improve</h3><p>We refine replies and rules based on real conversations.</p></div>
          </div>
        </div>
      </section>

      <section className="shell wa-readiness" aria-labelledby="wa-readiness-title">
        <small>When is automation worth it?</small>
        <h2 id="wa-readiness-title">If the problem repeats every day, automation is usually worth considering.</h2>
        <p>Automation is most valuable when it removes a clear repetition or stops a sales opportunity from being lost, not simply because the technology is new.</p>
        <div className="wa-readiness-grid">
          <article><b>Slow replies</b><p>The customer waits, or the same question is asked dozens of times.</p></article>
          <article><b>Follow-up gets lost</b><p>There is no clear reminder of who to follow up with, and when.</p></article>
          <article><b>Customers arrive with missing details</b><p>Your team starts every conversation from zero, instead of receiving a qualified lead.</p></article>
          <article><b>Too much manual work</b><p>Booking, confirmations, reminders and status updates are repeated steps.</p></article>
        </div>
        <div className="wa-diagnostic-cta"><p><strong>Not sure where to start?</strong><br />Send your type of business, your approximate daily message volume, and whether you use a CRM or booking system today. We will suggest the smallest suitable system.</p><a className="button primary" href={diagnosticLink} target="_blank" rel="noopener noreferrer">Find the right system <span>↗</span></a></div>
      </section>

      <section className="shell wa-usecases">
        <div className="wa-section-head"><div><span className="section-label">Use cases</span><h2>When the conversation is part of the sale,<br /><em>it should not get lost after the first reply.</em></h2></div><p>WhatsApp automation is most useful when questions, qualification, booking or follow-up repeat every day.</p></div>
        <div className="wa-usecase-grid">{useCases.map(([number, heading, text]) => <article key={number}><small>{number}</small><h3>{heading}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="wa-ai-bridge shell">
        <div><span className="section-label">Beyond WhatsApp</span><h2>WhatsApp is the channel.<br />Automation can connect the whole process.</h2><p>If the problem reaches sales, operations, reporting or several systems, see our AI automation service.</p></div>
        <Link className="button primary" href="/en/ai-automation">Explore AI automation</Link>
      </section>

      <section className="shell wa-guides" aria-labelledby="wa-guides-title">
        <div className="wa-section-head"><div><span className="section-label">Before you decide</span><h2 id="wa-guides-title">Before you buy a tool,<br /><em>understand the system and the cost.</em></h2></div><p>If your question is about a CRM, prices or how the connections work, start with the page closest to your decision.</p></div>
        <div className="wa-guide-grid">
          {guides.map((guide, index) => (
            <Link className="wa-guide-card" href={guide.href} key={guide.href}>
              <div className="wa-guide-card-top"><span>Related page 0{index + 1}</span><span className="wa-guide-arrow" aria-hidden="true">↗</span></div>
              <h3>{guide.title}</h3>
              <p>{guide.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="wa-faq shell" id="faq"><span className="section-label">Frequently asked questions</span><h2>Before you automate WhatsApp.</h2><div className="faq-grid">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></section>

      <section className="wa-final">
        <div className="shell">
          <p>Start from the problem you want to remove, not from the name of a tool.</p>
          <h2>Let WhatsApp lead the customer<br /><mark>to the next step.</mark></h2>
          <a className="button primary" href={contactLink} target="_blank" rel="noopener noreferrer">Discuss your automation map <span>↗</span></a>
        </div>
      </section>
      <RelatedGuides guides={[{ href: "/en/guides/whatsapp-crm-automation", title: "How WhatsApp automation with a CRM reduces lost customers" }, { href: "/en/guides/ad-to-whatsapp-booking-journey", title: "From advert to WhatsApp to booking: the customer journey" }]} />
      <Footer />
    </main>
  );
}
