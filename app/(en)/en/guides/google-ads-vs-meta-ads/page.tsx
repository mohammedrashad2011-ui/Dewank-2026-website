import Link from "next/link";
import { enMetadata } from "../../_en/metadata";
import { GuideArticle } from "../_en/guide-article";

const title = "Google Ads or Meta Ads: which is right for your business?";
const description = "Google Ads versus Meta Ads by customer intent, offer type, budget, purchase cycle and measurement, and how to choose the right channel.";

export const metadata = enMetadata(title, description, "/en/guides/google-ads-vs-meta-ads");

const faqs: [string, string][] = [
  ["Is Google Ads always better for services?", "No. Google is strong when there is clear search demand with buying intent. Some services need awareness and trust before a customer starts searching directly, and there Meta can work better at the start of the journey."],
  ["Can I use Google and Meta together?", "Yes, when the budget and measurement allow it. Google can capture existing demand while Meta builds interest and retargets. But do not split a small budget across many channels without enough data."],
  ["How do I choose if my budget is limited?", "Start with the channel closest to the customer's current intent. If people search for your service by name or by their problem, test Search. If the offer is visual or needs explaining before a purchase, test Meta with a specific message."],
  ["Should I fix the website or the page before running any advert?", "Yes, if the page is generic, slow, or has no clear call to action. Every paid channel sends visitors to the same page, so fix the page or prepare a suitable landing page first, then choose the channel."],
  ["Is the channel more important than the offer?", "No. A weak offer and a weak page can waste the budget on any platform. Choosing the channel should go together with a clear message and a conversion path you can measure."],
];

export default function GoogleVsMetaGuide() {
  return (
    <GuideArticle
      slug="google-ads-vs-meta-ads"
      title={title}
      description={description}
      crumb="Paid advertising"
      intro="The question is not which platform is stronger in the abstract. The question is where your customer's intent is right now, and whether you want to capture existing demand or create interest and move it towards a decision."
      readTime="7 minutes"
      focus="Choosing a channel"
      answer={<p><strong>Google Ads</strong> tends to be strongest when the customer is already looking for a solution. <strong>Meta Ads</strong> tends to be strongest when you need to create attention, test messages and reach an audience that has not started searching yet. The right choice starts from the customer&apos;s intent, not from the platform&apos;s reputation.</p>}
      toc={[
        ["short-answer", "The short answer"],
        ["compare", "A quick comparison"],
        ["google", "When to choose Google"],
        ["meta", "When to choose Meta"],
        ["situations", "Start from your situation"],
        ["both", "When to use both"],
        ["faq", "Frequently asked questions"],
      ]}
      faqs={faqs}
      ctaHeading="Not sure where to start?"
      ctaText="Start from the customer's intent, the offer and the conversion path, then choose the platform that serves that stage, rather than running both just to be present."
      ctaHref="/en/paid-advertising"
      ctaLabel="See paid advertising"
    >
      <h2 id="compare">A quick comparison</h2>
      <div className="article-table"><table><thead><tr><th>Factor</th><th>Google Ads</th><th>Meta Ads</th></tr></thead><tbody>
        <tr><td><strong>Intent</strong></td><td>An existing request and direct search</td><td>Discovery, interest and retargeting</td></tr>
        <tr><td><strong>Best entry point</strong></td><td>Commercial search terms</td><td>A strong angle and creative</td></tr>
        <tr><td><strong>The page</strong></td><td>A strong match to the search</td><td>Quick explanation and persuasion from the first screen</td></tr>
        <tr><td><strong>Testing</strong></td><td>Keywords, adverts and pages</td><td>Audience, message, design and offer</td></tr>
        <tr><td><strong>Common risk</strong></td><td>Paying for an unsuitable search</td><td>Large reach with insufficient intent</td></tr>
      </tbody></table></div>
      <h2 id="google">Choose Google when…</h2>
      <ul>
        <li>Customers type the name of the service or the problem into a search.</li>
        <li>You have a clear page that receives the same intent as the keyword.</li>
        <li>You want to capture demand close to the decision to get in touch or buy.</li>
        <li>You can measure a WhatsApp click, a form or a phone call as a conversion.</li>
      </ul>
      <h2 id="meta">Choose Meta when…</h2>
      <ul>
        <li>The product or service needs visual discovery or an explanation before people search for it.</li>
        <li>You have different creative and messages you want to test quickly.</li>
        <li>You want to build an audience and retarget people who engaged with you or visited your site.</li>
        <li>The customer&apos;s journey starts with interest more than direct search.</li>
      </ul>
      <h2 id="situations">Start from your situation</h2>
      <div className="article-table"><table><thead><tr><th>Your situation</th><th>Closest starting point</th><th>Check first</th></tr></thead><tbody>
        <tr><td><strong>Customers search for your service by name</strong></td><td>Google Search</td><td>A page that matches the search intent</td></tr>
        <tr><td><strong>Your service is new or needs visual explanation</strong></td><td>Meta</td><td>A clear message and creative</td></tr>
        <tr><td><strong>Your budget is small</strong></td><td>One channel only</td><td>That the budget is enough to read the result</td></tr>
        <tr><td><strong>Your website or page converts poorly</strong></td><td>Fix the page before any platform</td><td>A clear call to action and a sound mobile experience</td></tr>
        <tr><td><strong>There is no tracking for WhatsApp or the form</strong></td><td>Set up measurement first</td><td>One main conversion you can read</td></tr>
      </tbody></table></div>
      <h2 id="both">When to use both</h2>
      <p>If the data and the budget are sufficient, Meta can create interest and retarget, while Google captures people who have reached the stage of searching. Running both does not help if tracking is weak or the budget does not let each channel collect useful data.</p>
      <p>If you decide Google is the starting point, read <Link className="article-link" href="/en/guides/google-ads-clicks-no-leads">why Google Ads brings clicks but not customers</Link>, then consider the <Link className="article-link" href="/en/offers/google-ads-launch">Google Ads launch package</Link> if you need a defined Search campaign set up. If you need broader management across channels, see the <Link className="article-link" href="/en/paid-advertising">paid advertising service</Link>. If the page itself is the weak point, look at the <Link className="article-link" href="/en/offers/landing-page-package">landing page package</Link>.</p>
    </GuideArticle>
  );
}
