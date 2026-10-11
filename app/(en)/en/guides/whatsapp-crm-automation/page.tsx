import Link from "next/link";
import { enMetadata } from "../../_en/metadata";
import { GuideArticle } from "../_en/guide-article";

const title = "How WhatsApp automation with a CRM reduces lost customers";
const description = "A practical guide to connecting WhatsApp with a CRM to organise replies, qualification, follow-up, booking and reminders, with the measures to track and the mistakes that stop automation from having a business effect.";
const metaWhatsapp = "https://whatsappbusiness.com/products/business-app/";
const metaPlatform = "https://whatsappbusiness.com/products/business-platform/";
const metaPricing = "https://whatsappbusiness.com/products/platform-pricing/";
const metaDocs = "https://developers.facebook.com/docs/whatsapp/overview";

export const metadata = enMetadata(title, description, "/en/guides/whatsapp-crm-automation");

const faqs: [string, string][] = [
  ["What is the difference between the WhatsApp Business app and the WhatsApp Business Platform?", "Meta describes the WhatsApp Business app as designed with the small business owner in mind, and the WhatsApp Business Platform as a messaging platform for businesses built on APIs. The platform supports automated conversation flows, passing a conversation to a person, and integration with systems such as a CRM. The right route depends on message volume, the customer journey and your team. Fees and terms are set by Meta and change over time, so check Meta's official pages before deciding."],
  ["Do I need a CRM if I receive few messages?", "If one person can follow up with every customer clearly, you may start with a simple system. A CRM becomes important when conversations, staff members or sales stages multiply, or when follow-ups are missed and you cannot tell where a lead came from or what its status is."],
  ["Should AI answer every message?", "No. Many journeys work better with clear rules and approved messages, especially for prices, bookings and sensitive information. Use AI only where you genuinely need to understand varied questions, with clear limits and a quick handover to a person."],
  ["Does automation mean sending bulk messages?", "No. Good automation links a message or event to a step that suits the customer, such as confirming an order, reminding of an appointment or following up on an offer. Random mass sending harms the experience and can break platform policies."],
  ["What is the most important measure of a working system?", "There is no single measure. Track the first reply time, the share of qualified customers, the conversion to a booking or sale, the time between stages, attendance, and the number of opportunities that stopped without follow-up."],
];

const journey = [
  ["1. The message arrives", "Record the source, the campaign and the service requested, rather than leaving the customer in an anonymous conversation."],
  ["2. The first reply", "A quick welcome and one or two questions that collect the minimum needed, without a long interrogation."],
  ["3. Qualification", "Sort the customer by need, location, budget or timing, then route them to the right path."],
  ["4. A CRM record", "Store the details, status, owner, last contact and next step in one place."],
  ["5. Booking or offer", "Send a link, suitable times or the right offer, and record the result automatically."],
  ["6. Follow-up", "Alert a staff member, or send a measured follow-up if the customer does not complete the step, and stop it as soon as they reply or decline."],
  ["7. After the action", "Confirmation, reminders, and a request for feedback or re-engagement at the right time."],
];

export default function WhatsappCrmAutomationGuide() {
  return (
    <GuideArticle
      slug="whatsapp-crm-automation"
      title={title}
      description={description}
      crumb="WhatsApp and CRM"
      intro="A fast reply alone does not stop customers being lost. A working system knows who got in touch, what they want, who follows them up and what the next step is, then measures where the opportunity stopped."
      readTime="11 minutes"
      focus="Automation and conversion"
      answer={<p><strong>WhatsApp automation with a CRM turns a conversation into a manageable path.</strong> It receives the message, collects the necessary information, records the customer and their stage, moves them towards a booking or sale, and triggers a suitable follow-up or reminder. The value is not in the bot itself, but in stopping opportunities falling between the first reply and the follow-up.</p>}
      toc={[
        ["short-answer", "The short answer"],
        ["journey", "The customer's journey from message to sale"],
        ["components", "What the system is made of"],
        ["whatsapp-business-platform", "The WhatsApp Business app or the Platform?"],
        ["ai-or-rules", "When to use AI and when rules are enough"],
        ["qualification-routing", "How qualification and routing to a person work"],
        ["leaks", "Where opportunities are usually lost"],
        ["metrics", "Measures to track"],
        ["implementation", "A safe implementation plan"],
        ["faq", "Frequently asked questions"],
      ]}
      faqs={faqs}
      ctaHeading="Want to turn WhatsApp into a follow-up system?"
      ctaText="We review the customer journey, the points where leads leak out, the CRM and booking, then build a flow that suits your team and measures the business result."
      ctaHref="/en/whatsapp-crm-automation"
      ctaLabel="See WhatsApp automation and CRM"
    >
      <h2 id="journey">The customer&apos;s journey from message to sale</h2>
      {journey.map(([heading, body]) => <section key={heading}><h3>{heading}</h3><p>{body}</p></section>)}
      <h2 id="components">What the system is made of</h2>
      <ul>
        <li><strong>An official WhatsApp channel suited to your volume:</strong> with templates and clear consent policies where they are needed.</li>
        <li><strong>A CRM:</strong> fields, stages and owners that reflect your real sales journey, not a database full of unused data.</li>
        <li><strong>Automation logic:</strong> rules that link events to messages, tasks and updates, and prevent duplicates.</li>
        <li><strong>Booking or ordering:</strong> an integration with the calendar, the shop or the scheduling system, depending on the business.</li>
        <li><strong>A measurement view:</strong> shows source, time, conversion and leakage, not only the number of messages.</li>
      </ul>
      <h2 id="whatsapp-business-platform">The WhatsApp Business app or the Platform?</h2>
      <p>The two names are similar but refer to different products from Meta, and the right route determines what you can automate and connect to a CRM later.</p>
      <ul>
        <li><strong>WhatsApp Business app:</strong> Meta describes it as <a className="article-link" href={metaWhatsapp} target="_blank" rel="noopener noreferrer">designed with the small business owner in mind</a>, for talking with customers, showing products and managing the business.</li>
        <li><strong>WhatsApp Business Platform:</strong> Meta describes it as a <a className="article-link" href={metaPlatform} target="_blank" rel="noopener noreferrer">messaging platform for businesses built on WhatsApp APIs</a>, which supports automated conversation flows, passing a conversation to a person, and integration with systems such as CRMs and marketing automation tools.</li>
      </ul>
      <p>In practice: if your team is small and handles conversations by hand, the app may be enough to start. If you need automated flows, a CRM integration and routing between staff members, the route Meta describes for these uses is the Platform, either directly or through a solutions provider.</p>
      <div className="article-answer"><p><strong>Before you plan:</strong> fees, template rules, message limits and eligibility are set by Meta and change, so we do not repeat them here. Check the <a className="article-link" href={metaPricing} target="_blank" rel="noopener noreferrer">platform pricing page</a> and <a className="article-link" href={metaDocs} target="_blank" rel="noopener noreferrer">Meta&apos;s developer documentation</a> when you plan, and we will confirm the right route with you while we review your scope.</p></div>
      <h2 id="ai-or-rules">When to use AI and when rules are enough</h2>
      <div className="article-table"><table><thead><tr><th>Situation</th><th>Best choice</th></tr></thead><tbody>
        <tr><td><strong>Booking, confirmation and reminders</strong></td><td>Rules and approved messages, which are more precise and easier to review.</td></tr>
        <tr><td><strong>Collecting data and fixed qualification</strong></td><td>A short question flow with clear choices.</td></tr>
        <tr><td><strong>Many questions in varied wording</strong></td><td>AI limited to an approved knowledge source, with handover to a person.</td></tr>
        <tr><td><strong>A price, diagnosis or sensitive decision</strong></td><td>Approved information or a person. Do not leave the decision to the model alone.</td></tr>
      </tbody></table></div>
      <p>For a wider comparison of workflow and AI agents, read <Link className="article-link" href="/en/guides/ai-agent-vs-workflow-automation">AI agent or workflow automation?</Link></p>
      <h2 id="qualification-routing">How qualification and routing to a person work</h2>
      <p>Qualification is not a long questionnaire. It is two or three questions that show whether the customer is ready, and where the conversation should go next. The table below gives design examples for common types of business. They are adjusted to your activity and are not measured results.</p>
      <div className="article-table"><table><thead><tr><th>Activity</th><th>Core qualifying questions</th><th>When to pass to a person</th></tr></thead><tbody>
        <tr><td><strong>Clinics and centres</strong></td><td>The service needed, the branch or specialty, the preferred time.</td><td>Sensitive cases, exceptions, or a complex change to an appointment.</td></tr>
        <tr><td><strong>Real estate</strong></td><td>Buying or renting, the area, an approximate budget, when a decision is expected.</td><td>When the basic details are complete, or the customer asks for a viewing.</td></tr>
        <tr><td><strong>Salons and services</strong></td><td>The service, the branch, the preferred time.</td><td>Special requests or a clash in the timetable.</td></tr>
        <tr><td><strong>Education and professional services</strong></td><td>The programme or service, the need, the time frame.</td><td>When a quote, a negotiation, or a question outside the path is requested.</td></tr>
      </tbody></table></div>
      <p>To keep routing consistent, write the rules down:</p>
      <ul>
        <li>Route conversations by service, branch, language or responsible person, rather than deciding each time.</li>
        <li>Give the staff member a summary of what the system has collected, so they do not start from zero, and stop automatic messages as soon as they take over.</li>
        <li>Define the cases that go straight to a person: a complaint, an exception, a special price, a sensitive case, or a customer who asks to speak to someone.</li>
        <li>Record the source, the service, the status, the owner and the next step in the CRM.</li>
        <li>Decide what happens outside working hours: an immediate, clear reply with when the follow-up will happen, without promises the team cannot keep.</li>
      </ul>
      <h2 id="leaks">Where opportunities are usually lost</h2>
      <ul>
        <li>A fast first reply, followed by no follow-up when the customer goes quiet.</li>
        <li>Collecting too many details before giving any value or a useful next step.</li>
        <li>No owner or clear date for the next step.</li>
        <li>Automatic messages that continue after the customer has replied or asked to stop.</li>
        <li>Cancellations and rescheduling that are not synchronised with the CRM and the reminders.</li>
        <li>Measuring the number of conversations instead of bookings, attendance and sales.</li>
      </ul>
      <h2 id="metrics">Measures to track</h2>
      <p>Track the first reply time, the share of conversations that complete qualification, the conversion from conversation to booking or offer, the share that attend, the time spent in each stage, and the number of opportunities that passed their follow-up date without any action. Tie the results to source and campaign, so you know which channel brings customers, not just messages.</p>
      <h2 id="implementation">A safe implementation plan</h2>
      <ol>
        <li>Draw the current journey and identify the leak points before choosing any tool.</li>
        <li>Start with one service, one path and a small set of core measures.</li>
        <li>Write the messages, the stop rules, the handover to a person and the opt-out.</li>
        <li>Test the normal cases and the exceptions: a slow reply, a repeated message, a cancellation and an error.</li>
        <li>Run a limited pilot, review the conversations and results, then expand the system.</li>
      </ol>
      <p>To go further, read our <Link className="article-link" href="/en/guides/ad-to-whatsapp-booking-journey">guide to the customer journey from advert to booking</Link>, or see the <Link className="article-link" href="/en/guides/social-media-not-generating-leads">guide to accounts that look good but do not bring customers</Link> if the leak starts before the message. If you want a smaller, defined starting point, the <Link className="article-link" href="/en/offers/whatsapp-automation-starter">WhatsApp automation starter</Link> covers a basic path. For a full system, see the <Link className="article-link" href="/en/whatsapp-crm-automation">WhatsApp automation and CRM service</Link>.</p>
    </GuideArticle>
  );
}
