import Link from "next/link";
import { enMetadata } from "../../_en/metadata";
import { GuideArticle } from "../_en/guide-article";

const title = "How to build a customer journey from advert to WhatsApp to booking";
const description = "A practical guide to connecting an advert with WhatsApp, a CRM and bookings, and measuring where the journey leaks, from the click to attendance or sale, rather than counting messages.";

export const metadata = enMetadata(title, description, "/en/guides/ad-to-whatsapp-booking-journey");

const faqs: [string, string][] = [
  ["Does a high number of WhatsApp messages mean the campaign works?", "No. The messages may be numerous but unqualified, or they may not turn into bookings. Judge the campaign by the cost per qualified customer and by the share of bookings, attendance and sales, not by the cost of a conversation alone."],
  ["Should I send people straight to WhatsApp or to a landing page?", "Send them straight to WhatsApp when the offer is simple and the decision needs a quick question or booking. Use a landing page when the customer needs an explanation, a comparison or proof of trust before starting the conversation."],
  ["When do I need a CRM in this journey?", "When you have several sources or staff members, when you need organised follow-up, or when you need to know the status of each opportunity. If messages are few and one person handles them consistently, you can start with simpler tracking and expand later."],
  ["What should I fix first if bookings are weak?", "First identify where the drop happens: the advert, opening the conversation, the reply, qualification, choosing a time, or attendance. Fixing the wrong stage raises cost without improving the result."],
];

const stages = [
  ["1. An advert with a specific promise", "One service, a clear problem and the right audience. A general advert attracts curiosity more than buying intent."],
  ["2. A frictionless move into the conversation", "A pre-written, clear WhatsApp message or a short landing page, with the campaign source kept intact."],
  ["3. A first reply that helps", "A quick confirmation of what happens next, then two or three qualifying questions, rather than a long greeting or a list of services."],
  ["4. Recording the opportunity", "Saving the source, the service, the status, the owner and the next step in a CRM or a single organised system."],
  ["5. Booking", "Offering suitable times, confirming them, and recording them in the calendar and the system without repeated manual entry."],
  ["6. Follow-up and reminders", "Following up with people who did not complete the booking, and reminding those who did, stopping messages as soon as someone replies or cancels."],
  ["7. Attendance and result", "Recording attendance, the sale and its value, then feeding this data back into your reports to judge the quality of the advert."],
];

export default function AdToWhatsappBookingJourneyGuide() {
  return (
    <GuideArticle
      slug="ad-to-whatsapp-booking-journey"
      title={title}
      description={description}
      crumb="Advert to booking"
      intro="A campaign does not succeed when the message arrives. A good journey keeps the context of the advert, qualifies the customer, moves them to a clear appointment, then measures attendance and sales."
      readTime="9 minutes"
      focus="Conversion and bookings"
      answer={<p><strong>Build the journey as one system, not as a separate advert and a separate WhatsApp inbox.</strong> Connect the promise in the advert to the first message, record the source and status, reduce the qualifying questions, make booking immediate, then follow up on anyone who stops and measure attendance and sales through to the end.</p>}
      toc={[
        ["short-answer", "The short answer"],
        ["stages", "The seven stages from advert to result"],
        ["leaks", "Where opportunities leak"],
        ["metrics", "The right measures for each stage"],
        ["example", "A quick diagnostic example"],
        ["implementation", "A four-step plan"],
        ["faq", "Frequently asked questions"],
      ]}
      faqs={faqs}
      ctaHeading="Want to know where your bookings are being lost?"
      ctaText="We review the advert, WhatsApp messages, booking and follow-up and measurement, then identify the priority leak and build a path that suits your team."
      ctaHref="/en/whatsapp-crm-automation"
      ctaLabel="See WhatsApp automation and CRM"
    >
      <h2 id="stages">The seven stages from advert to result</h2>
      {stages.map(([heading, body]) => <section key={heading}><h3>{heading}</h3><p>{body}</p></section>)}
      <h2 id="leaks">Where opportunities leak</h2>
      <div className="article-table"><table><thead><tr><th>Signal</th><th>Likely cause</th><th>What to test</th></tr></thead><tbody>
        <tr><td>Many clicks, few messages</td><td>A mismatch between the promise and the message, or a confusing move</td><td>The call to action, the pre-written message and the landing page</td></tr>
        <tr><td>Many messages, weak qualification</td><td>Targeting or an offer that attracts the curious</td><td>How the promise and the starting price are worded, and the conditions of the service</td></tr>
        <tr><td>Qualified customers, no booking</td><td>A slow reply, many steps, or unclear times</td><td>Reply time, the booking flow and objections</td></tr>
        <tr><td>Many bookings, weak attendance</td><td>Weak confirmation and reminders, or low commitment</td><td>Confirmation, rescheduling and reminders</td></tr>
      </tbody></table></div>
      <h2 id="metrics">The right measures for each stage</h2>
      <ul>
        <li><strong>Advert:</strong> cost per click, opening the conversation, and message quality by advert.</li>
        <li><strong>Conversation:</strong> reply time, completion of qualification, and the share of qualified customers.</li>
        <li><strong>Booking:</strong> the share of qualified customers who book, and the time from enquiry to booking.</li>
        <li><strong>Operations:</strong> attendance, cancellations, rescheduling, and opportunities left without a next step.</li>
        <li><strong>Return:</strong> cost of a booking, attendance and sale, and revenue by source and campaign.</li>
      </ul>
      <h2 id="example">A quick diagnostic example</h2>
      <p>Suppose an advert brings 100 conversations, 40 of which qualify, 20 of which book, and 12 of which attend. The problem is not solved by saying you need more messages. You have three rates to separate: qualification quality at 40%, conversion to booking at 50% of qualified customers, and attendance at 60% of bookings. Raising attendance and follow-up may be cheaper than doubling spend.</p>
      <h2 id="implementation">A four-step plan</h2>
      <ol>
        <li>Draw the current journey and add a real number to each transition.</li>
        <li>Choose the largest leak you can fix, not the most exciting tool.</li>
        <li>Run one path for one service, with rules for handing over to a person and for stopping follow-ups.</li>
        <li>Test for two weeks or a sufficient volume, then compare booking, attendance and return with your baseline.</li>
      </ol>
      <p>For the technical structure and follow-up, read our <Link className="article-link" href="/en/guides/whatsapp-crm-automation">guide to WhatsApp automation with a CRM</Link>. For examples of qualifying questions and routing rules by business type, see its <Link className="article-link" href="/en/guides/whatsapp-crm-automation#qualification-routing">qualification and routing section</Link>.</p>
      <p>If the leak happens after the message reaches WhatsApp rather than in the advert, see the <Link className="article-link" href="/en/whatsapp-crm-automation">WhatsApp automation and CRM service</Link>. If you want a smaller, defined starting point before a larger system, look at the <Link className="article-link" href="/en/offers/whatsapp-automation-starter">WhatsApp automation starter</Link>.</p>
    </GuideArticle>
  );
}
