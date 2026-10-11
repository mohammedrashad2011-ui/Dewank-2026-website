import Link from "next/link";
import { enMetadata } from "../../_en/metadata";
import { GuideArticle } from "../_en/guide-article";

const title = "A marketing plan template for businesses: steps and components";
const description = "A practical template for a marketing plan: goal, audience, offer, channels, content, budget, measures of performance and an improvement cycle, connected in one plan you can carry out.";

export const metadata = enMetadata(title, description, "/en/guides/marketing-plan-template");

const steps = [
  ["1. Set the business goal", "Start with a clear result, such as more qualified enquiries, launching a service, or raising conversion. Do not make reach or the number of posts the final goal."],
  ["2. Define the audience and the decision", "Write down who buys, what problem they are trying to solve, what objections they have, and who influences the decision."],
  ["3. Shape the offer and the value", "Define why the customer should choose you, what they get, and what reduces their risk or hesitation."],
  ["4. Choose channels by their role", "Split channels into discovery, direct demand, retargeting, and follow-up and retention."],
  ["5. Build the content system", "Turn the core messages into content that explains the problem, the solution, the proof and the objections, and link each piece to a clear next step."],
  ["6. Allocate the budget and resources", "Separate platform spend, production, tools and management fees. Leave room for testing."],
  ["7. Set performance measures", "Tie each stage to a measure such as conversion rate, cost per lead, lead quality, acquisition cost and revenue where the data is available."],
  ["8. Run an improvement cycle", "Review operational signals weekly and the business result monthly. Stop what does not work and scale what has proven its effect."],
];

export default function MarketingPlanTemplateGuide() {
  return (
    <GuideArticle
      slug="marketing-plan-template"
      title={title}
      description={description}
      crumb="Marketing plan"
      intro="A good marketing plan is not a long file. It is a set of clear decisions that connect the goal, the audience, the offer, the channels, the budget and the measurement in one path you can carry out."
      readTime="9 minutes"
      focus="Planning and execution"
      answer={<p><strong>Goal → audience → offer → message → channels → content → budget → measures → improvement cycle.</strong> If you cannot summarise your plan in this chain, some decisions have not been made yet.</p>}
      toc={[
        ["short-answer", "The short answer"],
        ["steps", "The steps and components"],
        ["example", "A short example"],
        ["plan-vs-strategy", "Plan versus strategy"],
        ["next-step", "The next step"],
        ["faq", "Frequently asked questions"],
      ]}
      faqs={[
        ["Is a marketing plan the same as a marketing strategy?", "No. A strategy decides where you compete and why, and what the priorities are. A plan turns those decisions into channels, content, a budget, a schedule and measurement."],
        ["How long should the plan be?", "Long enough to make the decisions clear, and no longer. One or two pages that link the eight steps are more useful than a document nobody reads."],
        ["How often should I update it?", "Review the operational signals every week and the business result every month. Revise the plan when the offer, the market or the budget changes."],
      ]}
      ctaHeading="Need a plan you can actually run?"
      ctaText="We review the offer, the audience, the channels and the measurement, then set the shortest practical route, starting from the goal rather than from a platform."
      ctaHref="/en/contact"
      ctaLabel="Discuss your plan"
    >
      <h2 id="steps">The steps and components</h2>
      {steps.map(([heading, body]) => <section key={heading}><h3>{heading}</h3><p>{body}</p></section>)}
      <h2 id="example">A short example for a services company</h2>
      <div className="article-table"><table><thead><tr><th>Component</th><th>Example</th></tr></thead><tbody>
        <tr><td>Goal</td><td>20 qualified sales opportunities a month</td></tr>
        <tr><td>Audience</td><td>Decision-makers at small and medium-sized businesses in one defined market</td></tr>
        <tr><td>Offer</td><td>A defined service with a clear result and timeline</td></tr>
        <tr><td>Channels</td><td>Google for direct demand, LinkedIn or Instagram for trust, WhatsApp for follow-up</td></tr>
        <tr><td>Main measure</td><td>Cost per qualified opportunity and the share that becomes a sale</td></tr>
      </tbody></table></div>
      <h2 id="plan-vs-strategy">What is the difference between a plan and a strategy?</h2>
      <p><Link className="article-link" href="/en/digital-marketing">Digital marketing strategy</Link> defines where you compete, why, and what the priorities are. The plan turns those decisions into channels, content, a budget, a schedule and measurement.</p>
      <h2 id="next-step">The next step</h2>
      <p>If you need a team to carry out the plan across more than one discipline, see <Link className="article-link" href="/en/services">Dewank&apos;s services</Link>. If the problem is the planning itself, start with the <Link className="article-link" href="/en/digital-marketing">digital marketing strategy service</Link>.</p>
    </GuideArticle>
  );
}
