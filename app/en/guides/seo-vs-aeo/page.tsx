import Link from "next/link";
import { enMetadata } from "../../_en/metadata";
import { GuideArticle } from "../_en/guide-article";

const title = "SEO vs AEO: how to appear in Google and AI answers";
const description = "A practical guide to the difference between SEO and AEO, how they work together, and how to prepare a website to appear in search results, direct answers and AI tools, without unrealistic promises.";

export const metadata = enMetadata(title, description, "/en/guides/seo-vs-aeo");

const faqs: [string, string][] = [
  ["Is AEO a replacement for SEO?", "No. AEO builds on technical SEO and on content that search engines can reach and understand. The best approach is to optimise the page for ranking and discovery, then organise the answers, entities and evidence so they are easy to quote or summarise."],
  ["Can you guarantee my site will appear in ChatGPT or Google AI Overviews?", "No one can guarantee that a particular site will be cited. Answer systems choose their sources by query, context and quality. You can improve the chances with original, clear content, verifiable information, a good reputation and sound technical structure."],
  ["Is schema enough to appear in answers?", "No. Structured data helps machines understand some types of content, but it does not make up for a weak page or missing evidence and reputation. Schema must match the visible content and must not claim things the page does not contain."],
  ["What is the difference between AEO and GEO?", "The two terms are sometimes used interchangeably, and there is no single agreed definition. In practice AEO focuses on writing content with direct, clear answers, while GEO usually refers to improving the chances that a site is understood, retrieved and referenced within AI-generated answers. Both rest on the same base: trustworthy, clear, crawlable and indexable pages, with no guaranteed result."],
  ["Should I start with SEO or Google Ads?", "Start with what suits your stage. Google Ads tests demand and an offer faster, but needs continuous budget. SEO builds visibility gradually and needs time and execution. In both cases the page needs a clear message and sound measurement."],
  ["How long does it take for SEO and AEO to have an effect?", "It depends on the age of the site, the competition, the quality of the work and how quickly search engines crawl it. Track progress through indexing, impressions, queries, visits and conversions, and whether your brand appears in selected answers, rather than waiting for a fixed date or a quick guarantee."],
];

const comparison = [
  ["Main goal", "Improve discovery, ranking and organic visits", "Make the answer easy to understand and use in direct results and answer systems"],
  ["Unit of optimisation", "A page targeting a search intent and a topic cluster", "A clear answer supported inside a trustworthy page"],
  ["Important elements", "Crawling, indexing, links, content and page experience", "Clarity, entities, evidence, structure and direct questions"],
  ["Measurement", "Impressions, rankings, clicks and conversions", "Citations, brand appearances and questions that lead to visits or enquiries"],
  ["Relationship", "The foundation that makes content discoverable", "An added layer that makes meaning and answers easier to extract"],
];

export default function SeoVsAeoGuide() {
  return (
    <GuideArticle
      slug="seo-vs-aeo"
      title={title}
      description={description}
      crumb="SEO and AEO"
      intro="SEO helps people and systems discover your page. AEO helps them understand the answer inside it. New search experiences do not remove the need for search; they raise the standard for clarity and trust."
      readTime="10 minutes"
      focus="SEO and AEO"
      answer={<p><strong>SEO and AEO are not rivals.</strong> SEO makes content crawlable, indexable and competitive for a search intent. AEO organises the meaning, answers, entities and evidence so search engines and AI answer systems can understand and use them. Start with the technical and topical foundation, then add the answer layer.</p>}
      toc={[
        ["short-answer", "The short answer"],
        ["comparison", "SEO and AEO compared"],
        ["how-engines-answer", "How answer systems choose sources"],
        ["geo", "What about GEO?"],
        ["implementation", "Seven practical steps"],
        ["situations", "Which problem do you have?"],
        ["mistakes", "Mistakes that weaken visibility"],
        ["measurement", "How to measure the result"],
        ["priority", "What to do first"],
        ["faq", "Frequently asked questions"],
      ]}
      faqs={faqs}
      ctaHeading="Want visibility you can measure?"
      ctaText="We review the technical foundation, the page map, search intent, the clarity of the answers and the measurement, then order the work by its commercial effect."
      ctaHref="/en/seo-geo-aeo"
      ctaLabel="See SEO and AEO services"
    >
      <h2 id="comparison">SEO and AEO compared</h2>
      <div className="article-table"><table><thead><tr><th>Element</th><th>SEO</th><th>AEO</th></tr></thead><tbody>{comparison.map(([item, seo, aeo]) => <tr key={item}><td><strong>{item}</strong></td><td>{seo}</td><td>{aeo}</td></tr>)}</tbody></table></div>
      <h2 id="how-engines-answer">How answer systems choose sources</h2>
      <p>There is no fixed magic list. Systems may draw on search results or their indexes and several sources, then choose what fits the question and its context. Repeating keywords or adding an FAQ is not enough. The page must be technically accessible, focused on one subject, trustworthy, and offer information that can be verified.</p>
      <h2 id="geo">What about GEO?</h2>
      <p>You will sometimes hear the term GEO (Generative Engine Optimisation) alongside AEO. There is no single agreed definition, but it is generally used to describe improving the chances that your pages are understood, retrieved and mentioned inside AI-generated answers. In practice it overlaps with AEO, and both rest on the same base: clear, trustworthy content that can be crawled and indexed. No provider can promise a specific result, and there is no hidden factor that guarantees a citation.</p>
      <h2 id="implementation">Seven practical steps that combine SEO and AEO</h2>
      <ol>
        <li><strong>Give each page one clear structure:</strong> one question or decision, not a loose group of services.</li>
        <li><strong>Write a short answer early:</strong> a direct paragraph that states the result before the detail.</li>
        <li><strong>Build topical coverage:</strong> definition, comparison, steps, use cases, limits and common questions.</li>
        <li><strong>Use your original experience:</strong> examples, data, method and documented results beat rewording competitors&apos; pages.</li>
        <li><strong>Make the entities clear:</strong> who you are, what you offer, where you work and who reviews the content, with the name and details consistent across the site.</li>
        <li><strong>Fix the technical foundation:</strong> indexing, internal links, canonical tags, speed, mobile experience and the sitemap.</li>
        <li><strong>Use structured data accurately:</strong> Article, Breadcrumb and FAQ where they apply, matching what is visible on the page.</li>
      </ol>
      <p>To see the problems on your own site before committing to ongoing work, start with an <Link className="article-link" href="/en/offers/seo-audit">SEO and AEO audit</Link>. For a wider plan of improvement and implementation, see the <Link className="article-link" href="/en/seo-geo-aeo">SEO and AEO service</Link>.</p>
      <h2 id="situations">Which problem do you have?</h2>
      <div className="article-table"><table><thead><tr><th>Your situation</th><th>Closest starting point</th><th>Next step</th></tr></thead><tbody>
        <tr><td><strong>Your site does not appear in Google at all</strong></td><td>Indexing and the technical foundation</td><td><Link className="article-link" href="/en/offers/seo-audit">SEO and AEO audit</Link></td></tr>
        <tr><td><strong>It appears but brings no enquiries</strong></td><td>The message, trust and measurement</td><td><Link className="article-link" href="/en/guides/why-website-does-not-generate-leads">Why your website does not generate leads</Link></td></tr>
        <tr><td><strong>You need faster demand to test an offer</strong></td><td>Search advertising alongside SEO</td><td><Link className="article-link" href="/en/paid-advertising">Paid advertising</Link></td></tr>
        <tr><td><strong>You want your answers understood in AI tools</strong></td><td>A technical base, then clear answers</td><td><Link className="article-link" href="/en/seo-geo-aeo">SEO and AEO service</Link></td></tr>
      </tbody></table></div>
      <h2 id="mistakes">Mistakes that weaken visibility</h2>
      <ul>
        <li>Creating dozens of near-identical pages by changing only the city or the keyword.</li>
        <li>Writing generic answers with no experience, source or real added value.</li>
        <li>Hiding who wrote the content or the business behind it, and not explaining how the service works.</li>
        <li>Using schema as a shortcut instead of improving the content itself.</li>
        <li>Measuring success by visits alone and ignoring qualified enquiries and conversions.</li>
      </ul>
      <h2 id="measurement">How to measure the result</h2>
      <p>Start with Google Search Console for indexing, impressions, queries and clicks, and connect GA4 to enquiries and bookings. For AEO, build a fixed list of the commercial questions that matter, check periodically whether your brand or pages appear in the answers, and record the tool, the question, the date and the link. Do not treat a single test as lasting proof, because results change with time, context and the user.</p>
      <h2 id="priority">What to do first</h2>
      <p>If the site is not indexed well, or its pages are weak and duplicated, prioritise SEO. If the foundation is sound but the content does not answer clearly or prove the brand&apos;s expertise, add AEO. In most sound projects both are carried out in one plan, not as two competing budgets.</p>
      <p>If your site exists but does not turn visits into enquiries, also read <Link className="article-link" href="/en/guides/why-website-does-not-generate-leads">why your website does not generate leads</Link>. If the problem is in the structure and experience itself, look at the <Link className="article-link" href="/en/website-design">website design and development service</Link>.</p>
    </GuideArticle>
  );
}
