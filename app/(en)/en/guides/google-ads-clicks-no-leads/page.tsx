import Link from "next/link";
import { enMetadata } from "../../_en/metadata";
import { GuideArticle } from "../_en/guide-article";

const title = "Why Google Ads brings clicks but not customers";
const description = "Why Google Ads brings clicks but no customers: search intent, the advert, the landing page, tracking, enquiry quality and follow-up speed.";

export const metadata = enMetadata(title, description, "/en/guides/google-ads-clicks-no-leads");

const faqs: [string, string][] = [
  ["Do lots of clicks mean the campaign is good?", "No. Clicks show that the advert attracted attention. Commercial success requires the right keyword, a convincing page, correct conversion tracking and enquiries of good quality."],
  ["Should I change the keywords first or the page?", "Start by splitting the data. If the keywords are not commercial or the search terms are unsuitable, start with targeting. If the visits have clear intent but do not get in touch, review the page, the offer, trust and the call to action."],
  ["Does a low conversion rate mean Google Ads is not right for my business?", "Not necessarily. The problem may be the setup, the page or the measurement. Judging a channel needs a focused test with enough data and a clear conversion path."],
  ["What data should I prepare before reviewing my campaign?", "Prepare the search terms report, the current definition of a conversion, the landing page link, examples of recent enquiries, and an estimate of how long a reply takes after an enquiry arrives. These are enough to show whether the problem is the keywords, the page, the measurement or the follow-up."],
  ["What if many enquiries come in but they are not qualified?", "Review the keywords, the advert message, the page and the questions or conditions of the offer. Sometimes the conversion count is high because the definition of a conversion, or the message, attracts the wrong audience."],
];

const causes = [
  ["1. The keywords attract searches, not buyers", "A keyword can look related to the service but be informational or too broad. Review the actual search terms and separate people looking for general information from people looking for a provider, a price or someone to carry out the work."],
  ["2. The advert promises one thing and the page says another", "The less the search intent, the headline and the page match, the more visitors leave. Make the first screen deliver the promise the user clicked on."],
  ["3. The page carries every service the company offers", "A general page makes the visitor search the site. A better campaign sends the visitor to a page that serves the same decision, with the same language, the same trust signals and one clear call to action."],
  ["4. The offer does not remove hesitation", "The visitor may understand the service but find no scope, no proof of trust and no reason to get in touch now. Say what happens after they click and what they will receive."],
  ["5. Mobile experience or speed is blocking the decision", "A paid click is expensive enough that it should not be wasted on a small button, a slow page or an intrusive form. Test the page on a real phone before increasing the budget."],
  ["6. Conversion is set to a weak event", "If a page view or an unimportant click counts as the main conversion, the campaign may learn to chase activity that is not a customer. Make the goal closer to a real enquiry."],
  ["7. Negative keywords are missing", "Unsuitable searches can quietly use up part of the budget. Review them regularly and add exclusions for searches that do not match your customer."],
  ["8. The response after the enquiry is slow", "A successful advert does not guarantee a sale. If the customer reaches WhatsApp and then waits a long time, or is not qualified and followed up, the problem will look like it came from Google when it happens at the end of the journey."],
];

export default function GoogleAdsNoLeadsGuide() {
  return (
    <GuideArticle
      slug="google-ads-clicks-no-leads"
      title={title}
      description={description}
      crumb="Google Ads"
      intro="A campaign can succeed at buying clicks and fail at creating customers. The problem is rarely a single setting inside Google Ads. It is usually a gap between the search, the advert, the page, the measurement and what happens after the enquiry."
      readTime="8 minutes"
      focus="Conversion"
      answer={<p>If you have clicks but no customers, diagnose the journey in this order: <strong>search terms → advert → landing page → conversion → enquiry quality → speed of follow-up.</strong> Do not add budget before you know which link in the chain is leaking.</p>}
      toc={[
        ["short-answer", "The short answer"],
        ["diagnosis", "Read the numbers as a journey"],
        ["checklist", "Data to collect before the review"],
        ["causes", "Eight common causes"],
        ["order", "Fix before you add budget"],
        ["faq", "Frequently asked questions"],
      ]}
      faqs={faqs}
      ctaHeading="Is a campaign running but the results are unclear?"
      ctaText="Review the campaign as one system, from the keyword to the follow-up, then fix the weakest link before buying more clicks."
      ctaHref="/en/paid-advertising"
      ctaLabel="See paid advertising"
    >
      <h2 id="diagnosis">Read the numbers as a journey</h2>
      <div className="article-table"><table><thead><tr><th>What you see</th><th>Most likely problem</th><th>First check</th></tr></thead><tbody>
        <tr><td><strong>Good CTR, no conversions</strong></td><td>The page or the offer</td><td>Match between the message and the call to action</td></tr>
        <tr><td><strong>Clicks from strange searches</strong></td><td>Keywords and matching</td><td>Search terms and negative keywords</td></tr>
        <tr><td><strong>Many conversions, poor quality</strong></td><td>The definition of the goal or the message</td><td>Conversion type and qualification</td></tr>
        <tr><td><strong>Good enquiries, no sales</strong></td><td>What happens after the advert</td><td>Reply time and follow-up</td></tr>
      </tbody></table></div>
      <h2 id="checklist">Data to collect before the review</h2>
      <div className="article-table"><table><thead><tr><th>What to gather</th><th>The question it answers</th></tr></thead><tbody>
        <tr><td><strong>Search terms report</strong></td><td>Are people searching for the service, or for general information?</td></tr>
        <tr><td><strong>Current conversion definition</strong></td><td>Does it represent a real enquiry, or just a click?</td></tr>
        <tr><td><strong>Landing page</strong></td><td>Does it complete the promise of the advert and have one clear call to action?</td></tr>
        <tr><td><strong>Recent enquiries</strong></td><td>Are they qualified, or far from your offer?</td></tr>
        <tr><td><strong>Reply time</strong></td><td>Is the opportunity lost after it reaches WhatsApp?</td></tr>
      </tbody></table></div>
      <h2 id="causes">Eight common causes</h2>
      {causes.map(([heading, body]) => <section key={heading}><h3>{heading}</h3><p>{body}</p></section>)}
      <h2 id="order">Fix before you add budget</h2>
      <ol>
        <li><strong>Review the search terms</strong> and remove the intent that does not fit.</li>
        <li><strong>Set one main conversion</strong> that reflects a real enquiry.</li>
        <li><strong>Match the advert to the page</strong>, from the headline to the call to action.</li>
        <li><strong>Test mobile and speed</strong>, along with the trust points.</li>
        <li><strong>Review the quality of customers</strong>, not only the number of conversions.</li>
        <li><strong>Measure reply time and follow-up</strong> once the customer arrives.</li>
        <li><strong>Then scale the budget</strong> on the keywords and routes that have proven themselves.</li>
      </ol>
      <p>If the page itself is the leak, read <Link className="article-link" href="/en/guides/why-website-does-not-generate-leads">why your website does not generate leads</Link>, or look at the <Link className="article-link" href="/en/offers/landing-page-package">landing page package</Link>. If the campaign was never set up properly, see the <Link className="article-link" href="/en/offers/google-ads-launch">Google Ads launch package</Link>. If you are not sure Search is the right channel for your business, compare <Link className="article-link" href="/en/guides/google-ads-vs-meta-ads">Google Ads and Meta Ads</Link>.</p>
    </GuideArticle>
  );
}
