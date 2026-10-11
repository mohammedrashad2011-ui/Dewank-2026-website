import Link from "next/link";
import { enMetadata } from "../../_en/metadata";
import { GuideArticle } from "../_en/guide-article";

const title = "Your account looks good but does not bring customers: where is the problem?";
const description = "A practical guide to diagnosing why social media accounts get engagement but few enquiries or sales, from the message, offer and trust to the call to action and the follow-up process.";

export const metadata = enMetadata(title, description, "/en/guides/social-media-not-generating-leads");

const faqs: [string, string][] = [
  ["Why is there engagement but no sales?", "Engagement is not always buying intent. Content may attract the wrong audience, or it may lack a clear offer, enough trust and an easy way to order. Measure profile visits, enquiries and qualified customers, not likes alone."],
  ["Is the problem simply a small number of followers?", "Usually not. A small account with the right audience and a clear message can sell more than a large account with unqualified followers. Check the quality of the audience and the conversion route before buying growth or posting more."],
  ["Do I need to publish more content?", "Not until you know where the leak is. If the message, the offer or the way to order is weak, more posts will simply multiply the reach of an unconvincing experience. Fix the foundation, then test the posting frequency."],
  ["When should I use advertising?", "After you are sure the offer is clear and there is a page or conversation able to turn interest into a request. Advertising speeds up a system that already works; it does not fix a weak one on its own."],
];

const problems = [
  ["The customer does not understand what you offer", "The name, description and content should show within seconds who you serve, what the result is, and why they should choose you."],
  ["The content is attractive but has no message", "Design draws attention, but a decision needs a clear problem, a benefit, evidence and a next step."],
  ["The offer is generic or easily replaced", "Phrases like high quality and the best service make no difference. Tie the offer to a specific result and a clear customer situation."],
  ["Trust is not enough", "Show real work, testimonials, how you work, the people on the team, and clear answers to questions and objections."],
  ["The call to action is weak", "Do not make the customer guess. Ask for one simple step: send your business details, book a call, or request an assessment."],
  ["The route to ordering is exhausting", "Too many links, unanswered questions and slow replies kill intent. Shorten the path and set a clear reply and follow-up process."],
  ["The audience is not right", "High reach is not useful if it comes from people or places that do not match the customer who can buy."],
  ["There is no conversion measurement", "Without tracking profile visits, conversations and qualified customers, you cannot tell whether the problem lies in the content, the offer or the sales process."],
];

export default function SocialMediaNotGeneratingLeadsGuide() {
  return (
    <GuideArticle
      slug="social-media-not-generating-leads"
      title={title}
      description={description}
      crumb="Social media"
      intro="The problem is not always the design or the algorithm. There is usually a gap between what the customer sees, what they understand, what they trust, and the step you ask them to take."
      readTime="8 minutes"
      focus="Conversion"
      answer={<p>A beautiful account does not sell on its own. For interest to become a customer, you need the right audience, a clear message, a convincing offer, proof of trust, an easy request step and a fast reply. A break at any point in this chain leaves you with engagement but no enquiries, or enquiries but no sales.</p>}
      toc={[
        ["short-answer", "The short answer"],
        ["diagnosis", "Eight causes that stop an account bringing customers"],
        ["test", "The five-second test"],
        ["metrics", "The numbers that show where customers leak out"],
        ["plan", "A repair plan"],
        ["ads", "Is advertising the answer?"],
        ["faq", "Frequently asked questions"],
      ]}
      faqs={faqs}
      ctaHeading="Want to know where your customers leak out?"
      ctaText="We review the message, the content, the offer and the route to ordering, then order the improvements by their effect rather than publishing more without a diagnosis."
      ctaHref="/en/digital-marketing"
      ctaLabel="See digital marketing solutions"
    >
      <h2 id="diagnosis">Eight causes that stop an account bringing customers</h2>
      {problems.map(([heading, body], index) => <section key={heading}><h3>{index + 1}. {heading}</h3><p>{body}</p></section>)}
      <h2 id="test">The five-second test</h2>
      <p>Show the profile to someone who does not know your business for five seconds, then ask: What do you sell? Who is it for? Why should I trust you? How do I order? If they cannot answer, the problem is clarity before reach.</p>
      <h2 id="metrics">The numbers that show where customers leak out</h2>
      <div className="article-table"><table><thead><tr><th>Measure</th><th>What it reveals</th></tr></thead><tbody>
        <tr><td><strong>Reach → profile visits</strong></td><td>Does the content create the right curiosity?</td></tr>
        <tr><td><strong>Profile visits → messages</strong></td><td>Are the offer, the trust signals and the call to action persuasive?</td></tr>
        <tr><td><strong>Messages → qualified customers</strong></td><td>Do the audience and the message attract the right person?</td></tr>
        <tr><td><strong>Qualified customers → sales</strong></td><td>Do the reply, the follow-up, the price and the offer work together?</td></tr>
      </tbody></table></div>
      <h2 id="plan">A repair plan</h2>
      <ol>
        <li>Choose one main service or offer, rather than trying to sell everything at once.</li>
        <li>Rewrite the description and the opening content around the customer and the result, not only the company.</li>
        <li>Add proof of trust, objections and real buying questions to the content plan.</li>
        <li>Make the call to action a single step, and test the speed of replies and follow-up.</li>
        <li>Track conversion weekly, then fix the weakest link instead of publishing more at random.</li>
      </ol>
      <h2 id="ads">Is advertising the answer?</h2>
      <p>If the account does not turn a visit into a message, advertising will buy you more visits to the same leak. Fix the offer and the route first, then use advertising to test the message and scale what has proven itself.</p>
      <p>If you are comparing the scope and cost of running an account, see our <Link className="article-link" href="/en/social-media-content#pricing">social media management and content pricing</Link>.</p>
      <p>If the problem lies in the message and the content itself, see the <Link className="article-link" href="/en/social-media-content">social media management and content service</Link>. If the account needs a focused repair before any monthly management, you can look at the <Link className="article-link" href="/en/offers/instagram-14-day-upgrade">14-day Instagram upgrade</Link>.</p>
    </GuideArticle>
  );
}
