import Link from "next/link";
import { enMetadata } from "../../_en/metadata";
import { GuideArticle } from "../_en/guide-article";

const title = "AI agent or workflow automation? How to choose";
const description = "A practical guide to AI agents versus workflow automation: when each fits, where people must stay in control, and what to check on data privacy.";
const anthropicSource = "https://www.anthropic.com/engineering/building-effective-agents";

export const metadata = enMetadata(title, description, "/en/guides/ai-agent-vs-workflow-automation");

const faqs: [string, string][] = [
  ["Do I need an AI agent or ordinary automation?", "Start with workflow automation when the steps are known and repeated, such as booking, reminders and updating a CRM. Add AI at the step that needs to understand text, classify or summarise. Move to an agent that decides its own steps only when a clear path cannot solve the problem, because it needs tighter limits and more monitoring."],
  ["Can an agent handle customer messages in Arabic and English?", "It can be designed to reply in more than one language, but the quality of understanding varies by tool, model and the way customers write. Test real messages from your business before going live, with personal data removed, and define when a conversation passes to a person."],
  ["Which decisions should never be left to an AI model?", "Special prices, refunds, sensitive complaints, health, legal or financial cases, and any approval that creates obligations. These stay with a responsible person. The system's role is to collect information, summarise it and hand it over."],
  ["What about customer data privacy?", "Automation systems pass names, numbers and customer questions, which are personal data. Depending on where your customers are, rules such as the GDPR in the EU and UK or Saudi Arabia's Personal Data Protection Law may apply. Ask any provider what data will pass through, where it is stored, whether it is sent to an external tool or model, and how it can be deleted or exported. Take advice from a qualified legal adviser on your obligations."],
  ["How much does business AI automation cost?", "There is no single figure, because the cost changes with the number of paths, integrations, the volume of use and the fees of external tools. A WhatsApp starter package with a defined scope is one option, while broader systems are priced after the current process has been reviewed."],
];

export default function AiAgentVsWorkflowGuide() {
  return (
    <GuideArticle
      slug="ai-agent-vs-workflow-automation"
      title={title}
      description={description}
      crumb="Automation and AI"
      intro="Not everything called an AI agent is what your business needs. The right choice starts from the process and the amount of error you can accept, not from the name that is trending."
      readTime="7 minutes"
      focus="Choosing and risk"
      answer={<p><strong>Workflow automation carries out steps you have written in advance, in the same order every time. An AI agent decides for itself what to do next and which tool to use to reach a defined goal.</strong> Anthropic&apos;s engineering guidance distinguishes <a className="article-link" href={anthropicSource} target="_blank" rel="noopener noreferrer">workflows, where models and tools follow predefined paths, from agents, where the model directs its own tool use</a>, and it recommends starting with the simplest solution that works and adding complexity only when needed. That is what we recommend for most businesses: a clear workflow first, then AI at the step that needs understanding.</p>}
      toc={[
        ["short-answer", "The short answer"],
        ["difference", "The difference in daily use"],
        ["examples", "Examples by business type"],
        ["handoff", "Limits of handing over to a person"],
        ["data", "Data and privacy"],
        ["start", "How to start without adding AI to the chaos"],
        ["evaluate", "How to assess an automation offer"],
        ["faq", "Frequently asked questions"],
      ]}
      faqs={faqs}
      ctaHeading="Have a process you want to automate?"
      ctaText="We review the process as it runs today, identify where rules are enough, where AI helps, and what must stay with your team."
      ctaHref="/en/ai-automation"
      ctaLabel="See AI automation services"
    >
      <h2 id="difference">The difference in daily use</h2>
      <div className="article-table"><table><thead><tr><th>Question</th><th>Workflow automation</th><th>AI agent</th></tr></thead><tbody>
        <tr><td><strong>Who defines the steps?</strong></td><td>You, in advance and clearly.</td><td>The model decides the steps and tools within limits you set.</td></tr>
        <tr><td><strong>Predictability and review</strong></td><td>High, since each path can be tested and reviewed.</td><td>Lower; it needs logs, monitoring and firm limits.</td></tr>
        <tr><td><strong>Speed and cost</strong></td><td>Usually simpler and easier to maintain.</td><td>Anthropic notes that agentic systems trade speed and cost for better performance on some tasks.</td></tr>
        <tr><td><strong>Best suited to</strong></td><td>Booking, reminders, CRM updates, routing requests, moving data.</td><td>Varied, unpredictable questions, summarising conversations, multi-step tasks whose steps change.</td></tr>
        <tr><td><strong>Main risk</strong></td><td>Rigidity when the path meets a case nobody planned for.</td><td>Unexpected behaviour or a decision outside the limits you intended.</td></tr>
      </tbody></table></div>
      <h2 id="examples">Examples by business type</h2>
      <p>These are design examples showing where each kind of tool fits. They are not measured results.</p>
      <ul>
        <li><strong>Clinics and centres:</strong> a fixed path that captures the service, the branch and the preferred time, then books and sends reminders. AI may help interpret the varied ways people describe the same request. Sensitive cases and complex appointment changes stay with a staff member.</li>
        <li><strong>Real estate:</strong> a path that records the type of request, the area and an approximate budget, then assigns the lead to the right person. AI may summarise the conversation for them. Negotiation and special offers remain human.</li>
        <li><strong>Services and retail:</strong> a path that confirms the order, updates its status and follows up. AI may answer varied questions based only on approved information. Refunds and exceptions stay with the team.</li>
      </ul>
      <h2 id="handoff">Limits of handing over to a person</h2>
      <ul>
        <li>Define the decisions that are never left to a model: special prices, refunds, sensitive complaints, and any approval that creates an obligation.</li>
        <li>Tie answers to an approved source of information. If the answer is not available, the system should pass the conversation to a person rather than guess.</li>
        <li>Always leave the customer a clear way to speak to a person, and stop automatic messages as soon as a person takes over.</li>
        <li>Record what the system sent and what it decided, so you can review and correct it.</li>
        <li>Test on real messages from your business, with personal data removed, then run a limited pilot before scaling.</li>
      </ul>
      <p>For examples of qualification questions and routing rules by business type, see the <Link className="article-link" href="/en/guides/whatsapp-crm-automation#qualification-routing">qualification and routing section of our WhatsApp and CRM automation guide</Link>.</p>
      <h2 id="data">Data and privacy</h2>
      <p>Automation passes names, numbers and customer questions through your systems. Depending on where your customers are, rules such as the GDPR in the EU and UK, or Saudi Arabia&apos;s Personal Data Protection Law, may apply. Before you sign with a provider, ask:</p>
      <ul>
        <li>What personal data will pass through the system, and why?</li>
        <li>Where is it stored, and who can access it?</li>
        <li>Are customer conversations sent to an external tool or model?</li>
        <li>How is data deleted or exported when the work ends?</li>
        <li>Who owns the accounts and workflows after handover?</li>
      </ul>
      <p>Detailed requirements are set by the competent authorities and change over time, so check their official publications or take advice from a qualified legal adviser. This section is general information, not legal advice.</p>
      <h2 id="start">How to start without adding AI to the chaos</h2>
      <ol>
        <li>Choose one repeated process that costs you time or customers every day.</li>
        <li>Map its current steps as they actually happen, even if they are messy.</li>
        <li>Turn the fixed steps into rules, and identify the one step that needs understanding for AI.</li>
        <li>Build a testable version with handover points to your team.</li>
        <li>Run a pilot, review the conversations and results, then expand.</li>
      </ol>
      <p>Before you contact a provider, prepare a description of the current process, the tools you use, real examples of messages with personal details removed, and the name of the person who receives the handed-over cases.</p>
      <h2 id="evaluate">How to assess an automation offer</h2>
      <ul>
        <li>Is the scope written down: which processes, paths and integrations are included, and what is excluded?</li>
        <li>Does the offer say what AI decides and what a person decides, and where the handover points are?</li>
        <li>Who owns the accounts, data and workflows, and can you export them?</li>
        <li>What is the test plan before launch, and how are conversations reviewed after it?</li>
        <li>Which external fees for tools and channels are separate from the cost of the work?</li>
      </ul>
      <p>If your process revolves around WhatsApp, qualification and booking, read <Link className="article-link" href="/en/guides/whatsapp-crm-automation">how WhatsApp automation with a CRM reduces lost customers</Link> and the <Link className="article-link" href="/en/whatsapp-crm-automation">WhatsApp automation and CRM service</Link>.</p>
    </GuideArticle>
  );
}
