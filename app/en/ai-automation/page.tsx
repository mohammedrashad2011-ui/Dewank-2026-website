import Link from "next/link";
import { enMetadata } from "../_en/metadata";
import { Footer } from "../_en/parity/footer";
import { Header } from "../_en/parity/header";
import { RelatedGuides } from "../_en/parity/related-guides";
import { whatsappHref } from "../_en/lib/site";
// The Arabic AI automation page's layout and styles, reused unchanged. English-only direction and type overrides follow.
import "../../ai-automation/ai-automation.css";
import "../_en/parity/service-pages.en.css";
import "../_en/styles/hide-arabic-widgets.css";

export const metadata = enMetadata(
  "AI automation for business workflows",
  "AI and workflow automation for businesses worldwide: WhatsApp and customer service, lead qualification, CRM updates, order processes and management reporting.",
  "/en/ai-automation",
);

const useCases = [
  {
    number: "01",
    title: "WhatsApp and customer service",
    text: "Receive the enquiry, collect the basic details, classify the request, send the right reply, and pass cases that need a person to the right colleague.",
  },
  {
    number: "02",
    title: "Qualification and follow-up",
    text: "Qualify the lead against clear criteria, record it in the CRM, create a task for the team, and trigger a follow-up or reminder when there is no reply.",
  },
  {
    number: "03",
    title: "Orders and operations",
    text: "Connect forms, orders and internal systems, update statuses automatically, send alerts, and produce reports that help management see what is happening.",
  },
];

const workflow = [
  ["Customer arrives", "A WhatsApp message, a form submission or a lead from a campaign."],
  ["Qualification", "Questions, rules or AI that identify the type of request and its priority."],
  ["CRM is updated", "Details, status, source and the person responsible for follow-up are saved."],
  ["Follow-up starts", "A reminder, a message or a task for the team, depending on the customer's status."],
  ["Result appears", "A booking, an order or a handover to a person, with a clear record of the journey."],
];

const faqItems = [
  ["What does AI automation for businesses mean?", "It means connecting work steps, data and tools into a clear workflow, and using AI only where it adds understanding, classification or a decision that fixed rules cannot handle."],
  ["Does every process need AI?", "No. Some processes work better with fixed rules and conventional automation, because they are simpler, cheaper and easier to review. We use AI where understanding text, classifying intent, summarising or making a decision within clear limits adds real value."],
  ["Which processes can be automated?", "Qualification, follow-up, reminders, CRM updates, routing of requests, task creation, management reports, and some customer service and order steps, depending on your systems."],
  ["Can WhatsApp and a CRM be connected?", "In many cases, yes, depending on the WhatsApp provider, the CRM and the integrations available. We review the current tools before deciding how to connect them."],
  ["Does automation replace staff?", "The main aim is to remove repeated tasks and reduce lost requests, while keeping sensitive cases, exceptions and important decisions with your team."],
  ["How do you start an automation project?", "We start with one clear, high-impact process. We map its current steps, identify where errors and repetition occur, then build a version that can be tested before the system is extended."],
  ["What is the difference between an AI agent and workflow automation?", "Workflow automation carries out predefined steps in the same order each time. An AI agent is a model that decides the next step and the tools to use in order to reach a goal. Most repeated business processes are best started as a clear workflow, with AI added at the step that needs understanding. We move to an agent only when it is needed, with defined limits and monitoring."],
  ["Can AI make decisions on its own?", "In routine, clearly defined cases it may classify, summarise or suggest. Special prices, sensitive complaints, approvals and any decision with obligations stay with a responsible person, with a clear handover and a record of what happened."],
  ["How do you handle customer data in automation?", "Automation moves personal data such as names, phone numbers and messages between systems. Data protection rules depend on where you and your customers are. We review which data passes through each tool and where it is stored, and we recommend that you take advice from a qualified legal adviser for your requirements."],
];

export default function AiAutomationPage() {
  const contactLink = whatsappHref("Hello Dewank, I would like to discuss automating a process in my business. The current process is: ");
  const url = "https://dewank.com/en/ai-automation";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "AI automation for business workflows",
        description: "Workflow and AI automation for businesses worldwide, connecting WhatsApp and customer service, lead qualification, CRM, order processes and reporting, with people kept in control of sensitive decisions.",
        url,
        provider: { "@id": "https://dewank.com/#organization" },
        areaServed: "Worldwide",
        serviceType: ["AI automation", "Workflow automation", "CRM automation", "Customer service automation"],
        inLanguage: "en",
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqItems.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  return (
    <main id="main-content" className="ai-page en-service" lang="en" dir="ltr">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

      <section className="ai-hero shell">
        <div className="ai-hero-copy">
          <span className="ai-label">AI automation for business workflows</span>
          <h1>Automate your business with AI.<br /><em>Without adding AI to the mess.</em></h1>
          <p>We analyse the process first, then connect WhatsApp, the CRM, sales, customer service and operations into a clear workflow that reduces repetition, prevents lost customers and makes follow-up faster and easier to measure.</p>
          <div className="ai-actions">
            <a className="button primary" href={contactLink} target="_blank" rel="noopener noreferrer">Discuss a process you want to automate <span>↗</span></a>
            <Link className="button secondary" href="/en/whatsapp-crm-automation">See WhatsApp and CRM automation</Link>
          </div>
          <div className="ai-proof-strip" aria-label="Main uses of automation">
            <span>WhatsApp</span><span>CRM</span><span>Lead qualification</span><span>Follow-up</span><span>Operations</span>
          </div>
        </div>
        <div className="ai-hero-map" aria-hidden="true">
          <div className="ai-node ai-node-main">AI</div>
          <div className="ai-node ai-node-a">WhatsApp</div>
          <div className="ai-node ai-node-b">CRM</div>
          <div className="ai-node ai-node-c">Sales</div>
          <div className="ai-node ai-node-d">Reports</div>
          <i /><i /><i /><i />
        </div>
      </section>

      <section className="ai-answer shell" id="quick-answer">
        <span className="ai-label">Quick answer</span>
        <h2>What do we mean by AI automation for business?</h2>
        <p><strong>It means connecting the steps of your work into a clear workflow, and using AI only in the step that needs understanding, classification or summarising.</strong> We work with businesses worldwide, start with one process that has a clear impact, and keep sensitive decisions and exceptions with your team.</p>
        <p>If you are choosing between an AI agent and conventional workflow automation, read the section <Link className="ai-link" href="#agent-vs-workflow">AI agent or workflow?</Link> before you decide.</p>
      </section>

      <section className="ai-usecases shell">
        <div className="ai-section-head">
          <span className="ai-label">Use cases</span>
          <h2>Where does automation really help?<br /><em>Where time or customers are being lost.</em></h2>
          <p>Rather than buying more tools, we start from the process itself and choose the simplest system that achieves the result you need.</p>
        </div>
        <div className="ai-usecase-grid">
          {useCases.map((item) => <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
        </div>
      </section>

      <section className="ai-workflow shell">
        <div className="ai-section-head compact">
          <span className="ai-label">Workflow example</span>
          <h2>From the first message<br /><em>to the booking or order.</em></h2>
        </div>
        <div className="ai-flow">
          {workflow.map(([heading, text], index) => <article key={heading}><span>0{index + 1}</span><div><h3>{heading}</h3><p>{text}</p></div></article>)}
        </div>
      </section>

      <section className="ai-logic shell">
        <div className="ai-logic-copy">
          <span className="ai-label">AI or automation?</span>
          <h2>Not everything needs AI.</h2>
          <p>The simple rule: if the decision is fixed and clear, conventional automation is usually enough. If the system needs to understand text, classify intent, summarise or handle varied inputs, AI may add real value.</p>
        </div>
        <div className="ai-logic-grid">
          <article><small>Conventional automation</small><h3>Fixed rules</h3><p>Sending an alert, updating the CRM, creating a task, moving data, or a reminder after a set period.</p></article>
          <article><small>AI automation</small><h3>Understanding and classification</h3><p>Understanding a customer’s message, classifying the request, summarising a conversation, suggesting a reply or routing a case.</p></article>
          <article><small>Human in the loop</small><h3>A decision that needs a person</h3><p>Sensitive complaints, approvals, negotiation, exceptions and decisions with higher risk.</p></article>
        </div>
      </section>

      <section className="ai-logic ai-agents shell" id="agent-vs-workflow">
        <div className="ai-logic-copy">
          <span className="ai-label">Agent or workflow</span>
          <h2>An AI agent, or a workflow?</h2>
          <p>Anthropic distinguishes workflows, where models and tools are orchestrated through predefined paths, from agents, where the model directs its own steps and its use of tools. Its guidance is to start with the simplest solution that works, and to add complexity only when it is needed.</p>
        </div>
        <div className="ai-logic-grid">
          <article><small>Workflow</small><h3>Predefined path</h3><p>Written steps carried out in the same order each time. Easier to test and review, and the right choice for most repeated processes.</p></article>
          <article><small>AI agent</small><h3>A model that chooses the next step</h3><p>Selects tools and steps to reach a goal. Suits varied tasks, but needs clear limits, logs and closer monitoring.</p></article>
          <article><small>Human in the loop</small><h3>Handover points to a person</h3><p>Whichever you choose, special prices, sensitive complaints and approvals stay with a responsible person.</p></article>
        </div>
      </section>

      <section className="ai-outcomes shell">
        <div className="ai-section-head">
          <span className="ai-label">Business outcomes</span>
          <h2>The goal is not &ldquo;building a bot&rdquo;.<br /><em>The goal is a process that works better.</em></h2>
        </div>
        <div className="ai-outcome-grid">
          <article><strong>Faster replies</strong><p>The enquiry reaches the right step, instead of waiting for manual routing.</p></article>
          <article><strong>Less lost follow-up</strong><p>Every lead has a status, a source, an owner and a clear next step.</p></article>
          <article><strong>Cleaner data</strong><p>Fewer copy-and-paste steps and fewer errors between tools.</p></article>
          <article><strong>Clearer management view</strong><p>You can see where requests stop and where the system needs a person.</p></article>
        </div>
      </section>

      <section className="ai-bridge shell">
        <div>
          <span className="ai-label">Start with one process</span>
          <h2>Is there a step that repeats every day?<br /><em>It is often the best place to start.</em></h2>
          <p>Send us the process as it runs today, even if it is messy. We will review where time is lost, what can be automated, and what should stay with your team.</p>
        </div>
        <a className="button primary" href={contactLink} target="_blank" rel="noopener noreferrer">Send the process on WhatsApp <span>↗</span></a>
      </section>

      <section className="ai-related shell">
        <div className="ai-section-head compact">
          <span className="ai-label">Related services</span>
          <h2>If the problem is more specific than “AI”.</h2>
        </div>
        <div className="ai-related-grid">
          <Link href="/en/whatsapp-crm-automation"><small>WhatsApp and CRM</small><h3>WhatsApp automation and customer service</h3><p>If your biggest loss point is in messages, qualification, booking or follow-up.</p><span>See the service →</span></Link>
          <Link href="/en/website-design"><small>Websites and integrations</small><h3>Connecting the website to operations</h3><p>Forms, bookings, CRM and tracking within one customer journey.</p><span>See website design →</span></Link>
          <Link href="/en/seo-geo-aeo"><small>Search visibility</small><h3>Making the content easy to find and use</h3><p>Structure, schema and clear answers for search engines and answer systems.</p><span>See SEO, GEO and AEO →</span></Link>
        </div>
      </section>

      <section className="ai-faq shell" id="faq">
        <span className="ai-label">FAQ</span>
        <h2>Questions before building automation.</h2>
        <div>{faqItems.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="ai-final shell">
        <span className="ai-label">Next step</span>
        <h2>Do not start with the tool.<br /><em>Start with the process.</em></h2>
        <p>Tell us what happens from the moment a customer or order arrives to the moment it closes, and we will show where automation is worth the investment.</p>
        <a className="button primary" href={contactLink} target="_blank" rel="noopener noreferrer">Discuss automation with Dewank <span>↗</span></a>
      </section>

      <RelatedGuides guides={[{ href: "/en/guides/ai-agent-vs-workflow-automation", title: "AI agent or workflow automation? How to choose" }]} />
      <Footer />
    </main>
  );
}
