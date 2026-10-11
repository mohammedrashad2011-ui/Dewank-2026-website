import Link from "next/link";
import { enMetadata } from "../../_en/metadata";
import { GuideArticle } from "../_en/guide-article";

const title = "Why your website does not generate leads";
const description = "Why your website does not turn visits into enquiries or sales, and how to fix the message, trust, mobile experience, call to action and measurement with a practical plan.";

export const metadata = enMetadata(title, description, "/en/guides/why-website-does-not-generate-leads");

const faqs: [string, string][] = [
  ["Does weak sales mean the website design is bad?", "Not necessarily. The design may look good while the message is unclear, the audience is wrong, trust is missing, or the route to contact is complicated. Find where the leak is, from the data and the visitor's behaviour, before redesigning."],
  ["What is a good conversion rate for a website?", "There is no single number that suits every business. The rate depends on the offer, the source of the traffic, the price, the length of the buying decision and how a conversion is defined. Compare your site with its own past performance, and by channel and page, rather than chasing a general average."],
  ["Do I need more visitors or should I improve the website first?", "If your current visitors are suitable but do not convert, more budget only inflates the waste. Fix measurement and the main points of friction first, then increase traffic once you know the path works."],
  ["Do I need to rebuild the whole website?", "Usually not. Start with the pages that get the most visits: improve the headline, the offer, proof of trust, the call to action and speed. A rebuild makes sense when the current technology blocks measurement or changes, or when the experience is fundamentally weak."],
];

const causes = [
  ["1. Visitors do not understand what you offer quickly", "If a visitor has to read several paragraphs to learn the service and who it suits, the problem is the clarity of the message. Make the headline explain the result and the audience, then support it with a line that explains how or why."],
  ["2. The visitors do not suit the offer", "A site can attract many visits from informational keywords or broad advertising that carries no buying intent. Review the source and the keyword, and the landing page. The quality of the visit matters more than the number."],
  ["3. The offer is generic and does not justify the choice", "Words like quality and professionalism do not set you apart. Explain the scope of the service, how it works, the expected result, and who the service is not for."],
  ["4. Trust is not enough", "Logos alone are not proof. Use real work, explicable results, specific testimonials, clear information about the company, and policies that remove risk from the decision."],
  ["5. The call to action is vague", "A button that says Contact us does not explain what will happen. Try a call to action tied to the next step, such as request an assessment, discuss your project, or get a scope and an initial estimate."],
  ["6. The mobile experience is slow or confusing", "A user will not struggle with small text, a long form or a hidden button. Test the page on a real phone, reduce heavy elements, and make the main action visible and easy to tap."],
  ["7. The page tries to sell every service", "When one page speaks to several audiences and lists many services, the message weakens. Direct each campaign or search intent to a page that serves one decision."],
  ["8. Contact breaks the customer's journey", "The site may generate an enquiry and then lose the opportunity to slow replies or missing follow-up. Conversion does not end at a WhatsApp button; it includes the reply, qualification, booking and follow-up."],
  ["9. Measurement is incomplete", "Without tracking form submissions, WhatsApp clicks and calls, you will measure visits instead of results. Fix the events first, so you know which page and channel create a real opportunity."],
];

export default function WebsiteLeadsGuide() {
  return (
    <GuideArticle
      slug="why-website-does-not-generate-leads"
      title={title}
      description={description}
      crumb="Website conversion"
      intro="Visits without enquiries do not automatically mean you need a bigger advert or a new website. There is usually a specific leak between what the page promises, how much the visitor trusts it, how easy the next step is, and what happens after the contact."
      readTime="9 minutes"
      focus="Conversion and lead generation"
      answer={<p>A website stops generating leads when one or more of four things fail: attracting the right visitor, explaining a clear value, building trust, or making the next step and the follow-up easy. Do not start by changing colours. Start by finding where the leak is.</p>}
      toc={[
        ["short-answer", "The short answer"],
        ["diagnosis", "Diagnose the stage that is failing"],
        ["causes", "Nine causes that stop a website generating leads"],
        ["plan", "A repair plan in order of impact"],
        ["metrics", "What to measure instead of visits"],
        ["rebuild", "Improve or rebuild?"],
        ["faq", "Frequently asked questions"],
      ]}
      faqs={faqs}
      ctaHeading="Not sure where your customers are leaking out?"
      ctaText="We review the message, the mobile experience, the contact route and the measurement, then order the improvements by their effect rather than redesigning at random."
      ctaHref="/en/website-design"
      ctaLabel="See website design and development"
    >
      <h2 id="diagnosis">Diagnose the stage that is failing</h2>
      <div className="article-table"><table><thead><tr><th>What you see</th><th>Most likely cause</th><th>First check</th></tr></thead><tbody>
        <tr><td><strong>Few visits</strong></td><td>Weak visibility or targeting</td><td>Search Console and traffic sources</td></tr>
        <tr><td><strong>Many visits, quick exits</strong></td><td>Weak message or match</td><td>The landing page by source and device</td></tr>
        <tr><td><strong>Engagement without contact</strong></td><td>Trust, offer or call to action</td><td>Button clicks and scroll depth</td></tr>
        <tr><td><strong>Enquiries without sales</strong></td><td>Qualification, follow-up or offer</td><td>Reply time, booking and reasons for loss</td></tr>
      </tbody></table></div>
      <h2 id="causes">Nine causes that stop a website generating leads</h2>
      {causes.map(([heading, body]) => <section key={heading}><h3>{heading}</h3><p>{body}</p></section>)}
      <h2 id="plan">A repair plan in order of impact</h2>
      <ol>
        <li><strong>Fix measurement:</strong> track form submissions, WhatsApp clicks, calls and bookings as clear events.</li>
        <li><strong>Segment performance:</strong> compare the page, the traffic source and the device, rather than relying on the site-wide average.</li>
        <li><strong>Rewrite the first screen:</strong> a clear service, a defined audience, an understandable result, and one next step.</li>
        <li><strong>Add proof near the decision:</strong> a case, result or testimonial tied to the same service.</li>
        <li><strong>Simplify contact:</strong> fewer fields, a clearer button and a WhatsApp message that carries context.</li>
        <li><strong>Test mobile and speed:</strong> fix what blocks use before adding effects or new sections.</li>
        <li><strong>Review what happens after the enquiry:</strong> reply time, questions asked, qualification, booking and follow-up.</li>
      </ol>
      <p>If the problem is concentrated in one page for a campaign or service, a <Link className="article-link" href="/en/offers/landing-page-package">dedicated landing page</Link> may suit you better than rebuilding the whole site. If your site needs to explain several services across several pages, see the <Link className="article-link" href="/en/offers/small-business-website">small business website package</Link>. If the structure itself is now the obstacle, look at the <Link className="article-link" href="/en/website-design">website design and development service</Link>.</p>
      <h2 id="metrics">What to measure instead of visits</h2>
      <p>Track the rate at which visitors reach the action, the WhatsApp clicks or form submissions, qualified enquiries, bookings and sales by source and page. Conversion rate on its own can mislead you if the quality of customers is weak, so connect it to the final business result.</p>
      <h2 id="rebuild">Improve or rebuild?</h2>
      <p>Start with targeted improvement when you can change the content, add measurement, and improve mobile and speed. Consider a rebuild if the platform blocks these changes, the structure is scattered, or the site cannot be managed, secured or extended. Before you ask for a quote, compare the scope of each proposal rather than only its price.</p>
      <p>If visits are low because indexing or visibility is weak, move to the <Link className="article-link" href="/en/seo-geo-aeo">SEO and AEO service</Link>, or start with an <Link className="article-link" href="/en/offers/seo-audit">SEO and AEO audit</Link> to identify the problem before you increase spending.</p>
    </GuideArticle>
  );
}
