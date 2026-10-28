import Link from "next/link";
import { enMetadata } from "../../_en/metadata";
import { GuideArticle } from "../_en/guide-article";

const title = "Marketing KPIs: the key measures businesses should track";
const description = "A practical guide to marketing KPIs: reach, CTR, conversion rate, cost per lead, CAC, ROAS and revenue, and how operational and business measures differ.";

export const metadata = enMetadata(title, description, "/en/guides/marketing-kpis");

const metrics = [
  ["Reach and impressions", "Useful for seeing how far a message travels, but on its own they do not prove demand or any business effect."],
  ["Click-through rate (CTR)", "Measures how well an advert or link turns exposure into a visit. It often reveals the strength of the message or how well it suits the audience."],
  ["Conversion rate", "The share of visitors who complete the action you want. It links the quality of the visit to the clarity of the page, the offer and the call to action."],
  ["Cost per lead (CPL)", "The cost of a potential customer. Read it together with lead quality, because a low number can hide weak opportunities."],
  ["Customer acquisition cost (CAC)", "The cost of winning an actual customer. It matters more than cost per lead once sales and follow-up data are available."],
  ["Return on ad spend (ROAS)", "The revenue attributed to advertising spend. Useful for campaigns, but it does not always include the full cost of marketing and operations."],
  ["Lead-to-sale rate", "The share of opportunities that become sales. It shows the effect of qualification, response speed and follow-up alongside the quality of the marketing."],
  ["Revenue and pipeline", "The measure closest to the business goal: the value of the sales or opportunities that marketing produced in a defined period."],
];

export default function MarketingKpisGuide() {
  return (
    <GuideArticle
      slug="marketing-kpis"
      title={title}
      description={description}
      crumb="Marketing KPIs"
      intro="A KPI dashboard is not a wall of numbers. A good indicator answers one question: are we moving towards a business goal, and if not, where is the customer leaking out?"
      readTime="8 minutes"
      focus="Measurement and decisions"
      answer={<p>Start from the final result and work backwards: <strong>revenue or pipeline → customers → qualified opportunities → conversions → visits → impressions.</strong> The closer an indicator is to sales, the more it should guide your decisions.</p>}
      toc={[
        ["short-answer", "The short answer"],
        ["metrics", "The KPIs you need"],
        ["stages", "Measures by stage of the journey"],
        ["whole-journey", "Do not read the advert on its own"],
        ["decisions", "Turning measures into decisions"],
        ["faq", "Frequently asked questions"],
      ]}
      faqs={[
        ["How many KPIs should a business track?", "Choose one primary measure for each goal, and a small set of diagnostic measures to explain changes in it. A long list of numbers rarely changes a decision."],
        ["Which KPI matters most?", "The one closest to the business result you need, such as qualified opportunities or revenue. Reach and engagement are useful signals but rarely the goal."],
        ["Should I use ROAS or CAC?", "Use ROAS to judge campaigns and CAC to judge the business. Where the sales data is reliable, CAC gives a fuller picture of what a customer costs."],
      ]}
      ctaHeading="Too many numbers?"
      ctaText="We decide which measures are worth tracking, and which to ignore, so that your reports become a tool for growth rather than an archive."
      ctaHref="/en/contact"
      ctaLabel="Discuss your measurement"
    >
      <h2 id="metrics">The KPIs businesses need</h2>
      {metrics.map(([heading, body]) => <section key={heading}><h3>{heading}</h3><p>{body}</p></section>)}
      <h2 id="stages">Measures by stage of the journey</h2>
      <div className="article-table"><table><thead><tr><th>Stage</th><th>Suitable measures</th></tr></thead><tbody>
        <tr><td>Awareness</td><td>Reach, impressions, video views</td></tr>
        <tr><td>Interest</td><td>CTR, engagement, landing page views</td></tr>
        <tr><td>Conversion</td><td>Conversion rate, CPL, qualified leads</td></tr>
        <tr><td>Sales</td><td>Lead-to-sale rate, CAC, revenue, ROAS</td></tr>
        <tr><td>Retention</td><td>Repeat purchase, retention, and lifetime value where the data exists</td></tr>
      </tbody></table></div>
      <h2 id="whole-journey">Do not read the advert on its own</h2>
      <p>If CTR is good but sales are weak, the problem may lie in the page, the offer or the follow-up. Review <Link className="article-link" href="/en/paid-advertising">paid advertising</Link>, <Link className="article-link" href="/en/seo-geo-aeo">SEO and AEO</Link>, and <Link className="article-link" href="/en/whatsapp-crm-automation">WhatsApp automation and CRM</Link> as connected parts of the same measurement path.</p>
      <h2 id="decisions">Turning measures into decisions</h2>
      <p>Choose one primary indicator for each goal and a small group of diagnostic indicators behind it. If your business needs a broader system, start with the <Link className="article-link" href="/en/digital-marketing">digital marketing strategy</Link> or look at <Link className="article-link" href="/en/services">Dewank&apos;s services</Link>.</p>
    </GuideArticle>
  );
}
