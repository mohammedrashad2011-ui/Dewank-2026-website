import Link from "next/link";
import { enMetadata } from "../_en/metadata";
import { Footer } from "../_en/parity/footer";
import { Header } from "../_en/parity/header";
import { OfferPrice } from "../_en/lib/localized-price";
import { CONTACT_EMAIL } from "../_en/lib/site";
// The Arabic SEO page's layout and styles, reused unchanged. English-only direction and type overrides follow.
import "../../seo-aeo/seo-aeo-page.css";
import "../../seo-aeo/seo-cluster.css";
import "../_en/parity/service-pages.en.css";
import "../_en/styles/hide-arabic-widgets.css";

export const metadata = enMetadata(
  "SEO, GEO and AEO services",
  "Technical SEO, content structure and schema for search engines and AI answer systems. Clear, measurable work for businesses worldwide.",
  "/en/seo-geo-aeo",
);

const services = [
  ["Technical SEO", "Review of indexing, crawling, speed, internal links and the technical structure search engines rely on."],
  ["Search intent", "Each page is matched to what the user is actually trying to decide, instead of targeting keywords that serve no decision."],
  ["On-page SEO", "Titles, content, links and media improved for clarity, relevance and conversion."],
  ["Content architecture", "A topic and page map that gives the site depth and authority, instead of scattered articles."],
  ["Schema and entities", "Services, organisation, questions and entities described so search and answer systems can understand them."],
  ["GEO and AEO formatting", "Content written to give direct, structured and quotable answers, supported by credible context."],
];

const process = [
  ["01", "Audit", "We check the technical structure, content, indexing, speed and the opportunities being missed."],
  ["02", "Map", "We match keywords and intent to current and new pages, ranked by commercial priority."],
  ["03", "Fix", "We address technical issues, titles, links and the weakest pages first."],
  ["04", "Expand", "We build content and pages that support topical authority and the questions your market asks."],
  ["05", "Prepare for answers", "We add semantic structure, schema and direct answers that are easy to understand and reuse."],
  ["06", "Measure", "We review Search Console, GA4 and conversions, then set the next steps by impact."],
];

const deliverables = [
  "An SEO audit ranked by priority and expected impact.",
  "A keyword map that links terms, intent and pages.",
  "A content and new-page plan you can act on.",
  "A clear list of technical SEO fixes.",
  "On-page improvements to the key pages.",
  "A schema plan, including questions and entities.",
  "An internal linking map for the important pages.",
  "Search Console and GA4 reporting with specific decisions.",
];

const fitFor = [
  "Your business has a strong service but the website does not appear in search.",
  "Your website gets visits, but enquiries are weak.",
  "You want to rely less on paid advertising over the long term.",
  "You serve several markets and need clearer, better-structured pages for each.",
  "You have a lot of content without a strategy or clear internal links.",
  "You want your brand ready for search engines and AI answer systems.",
];

const faqs = [
  { question: "How long does SEO take to show results?", answer: "It depends on the strength of the site, the competition and the problems found. Some fixes show early signals. Steady growth needs continued implementation, time and measurement." },
  { question: "Does AEO guarantee that AI systems will cite my site?", answer: "No provider can guarantee citations or placement in AI answers. We can improve clarity, structure, credibility and structured data, which raise the chances that your content is understood and used." },
  { question: "Do we need new content?", answer: "Not always. We start by improving the existing pages, then decide which gaps deserve new pages or articles, based on demand and commercial intent." },
  { question: "Does the service include technical fixes?", answer: "It can include implementation, or a detailed list for your development team, depending on the platform and the scope." },
  { question: "Can you work on an existing website?", answer: "Yes. We review the current situation first, then decide what can be improved step by step and what needs a rebuild or restructuring." },
  { question: "Should I start with SEO or Google Ads?", answer: "It depends on your stage. Google Ads tests demand and offers quickly but needs ongoing budget. SEO builds visibility over time and needs time and implementation. Either way, the pages need a sound technical base and a clear message." },
  { question: "What do you need to start?", answer: "The website address, the type of business, the markets you serve and the service you most want to be found for. For a deeper diagnosis we may ask for access to Search Console and GA4, which we explain before using." },
  { question: "What is the difference between an audit and a monthly SEO service?", answer: "An audit diagnoses the situation and sets priorities. Ongoing service covers implementation, content, measurement and improvement in stages." },
];

const expectations = [
  "We do not promise a specific Google ranking or citations in ChatGPT or other AI answers.",
  "There is no fixed timeline for results. It depends on the strength of the site, the competition and what can be implemented.",
  "The audit diagnoses and sets priorities. Ongoing implementation is a separate decision, made once we know what the site needs.",
  "We measure impressions, clicks and the pages that generate enquiries, not visits alone.",
];

const guides = [
  { href: "/en/seo-geo-aeo#faq", title: "SEO and AEO: what is the difference?", text: "How search visibility and clear answers for AI and answer systems work together." },
  { href: "/en/paid-advertising", title: "Need demand faster? Compare SEO and advertising", text: "SEO builds visibility over time. Google Ads tests demand quickly, with a continuing budget. Choose by your stage." },
  { href: "/en/website-design", title: "The site ranks but does not bring enquiries?", text: "When the problem is after the visit, look at the message, trust, calls to action and tracking before adding more traffic." },
];

export default function SeoAeoPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "@id": "https://dewank.com/en/seo-geo-aeo#service", name: "SEO, GEO and AEO services", alternateName: "Search engine optimisation and answer engine optimisation", description: "SEO, GEO and AEO services that improve visibility in search engines and answer systems through technical SEO, content structure, schema markup and measurement.", serviceType: ["SEO", "GEO", "AEO", "Technical SEO", "Content SEO", "Schema markup"], provider: { "@type": "Organization", name: "Dewank", url: "https://dewank.com/en" }, areaServed: "Worldwide", url: "https://dewank.com/en/seo-geo-aeo", inLanguage: "en" },
      { "@type": "FAQPage", "@id": "https://dewank.com/en/seo-geo-aeo#faq", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://dewank.com/en" }, { "@type": "ListItem", position: 2, name: "Services", item: "https://dewank.com/en/services" }, { "@type": "ListItem", position: 3, name: "SEO, GEO and AEO", item: "https://dewank.com/en/seo-geo-aeo" }] },
    ],
  };

  return (
    <main className="sa-page en-service" lang="en" dir="ltr">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

      <section className="sa-hero shell">
        <div className="sa-hero-copy">
          <div className="sa-kicker"><span>SEO</span><span>GEO</span><span>AEO</span></div>
          <h1>Not chasing rankings alone.<br /><em>Building visibility that is understood and chosen.</em></h1>
          <p>We improve how your website appears in Google and how clearly it answers questions for AI and answer engines, through technical SEO, structured content, schema and measurement that links visibility to enquiries.</p>
          <div className="sa-actions"><Link className="button primary" href="/en/contact">Request a website review <span>→</span></Link><a href="#process">See our approach</a></div>
        </div>
        <div className="sa-search-board" aria-label="Illustration of search visibility and answer signals">
          <div className="sa-board-top"><span>SEARCH VISIBILITY</span><b>LIVE MAP</b></div>
          <div className="sa-query">How do I choose an SEO agency for my business?</div>
          <div className="sa-answer"><small>ANSWER SIGNAL</small><strong>Clear page + expertise + schema + trusted context</strong><p>The goal is not keyword density. It is content that is easy to understand and to choose.</p></div>
          <div className="sa-signals"><div><small>INDEXING</small><b>Healthy</b></div><div><small>TOPICS</small><b>Connected</b></div><div><small>ANSWERS</small><b>Structured</b></div></div>
        </div>
      </section>

      <section className="sa-truth">
        <div className="shell sa-truth-grid">
          <div><span className="sa-label">What has changed</span><h2>SEO brings the visit.<br /><em>AEO helps your content become the answer.</em></h2></div>
          <div>
            <p>Visibility is no longer only a list of links. Someone may get a direct answer before opening any website.</p>
            <p>So we build pages that are clear to people and to systems, connect them to credible proof, and lead to a clear next step.</p>
            <p><strong>In short:</strong> SEO (search engine optimisation) helps your website appear in search results. GEO (generative engine optimisation) and AEO (answer engine optimisation) structure your content so answer systems can understand and reuse it. No provider can guarantee a specific ranking or a citation in AI answers.</p>
          </div>
        </div>
      </section>

      <section className="sa-services shell">
        <div className="sa-section-head"><div><span className="sa-label">Scope of work</span><h2>From technical structure to content.<br /><em>From understanding to conversion.</em></h2></div><p>Results come from a system of pages, topics and signals that work together, not from changing one title.</p></div>
        <div className="sa-service-grid">{services.map((item, index) => <article key={item[0]}><span>0{index + 1}</span><h3>{item[0]}</h3><p>{item[1]}</p></article>)}</div>
      </section>

      <section id="process" className="sa-process">
        <div className="shell">
          <div className="sa-section-head"><div><span className="sa-label">How we work</span><h2>We set priorities.<br /><em>Then we implement what makes the difference.</em></h2></div><p>We do not spread effort evenly. We start with what blocks visibility or weakens the pages that matter most commercially.</p></div>
          <div className="sa-process-list">{process.map((item) => <article key={item[0]}><span>{item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p></article>)}</div>
        </div>
      </section>

      <section className="sa-measure">
        <div className="shell sa-measure-grid">
          <div><span className="sa-label">Measurement</span><h2>Visits alone are not enough.<br /><em>We measure the visibility that supports growth.</em></h2></div>
          <div className="sa-measure-list">{["Growth in visibility for valuable queries", "Qualified clicks and visits", "Pages that generate enquiries", "Better indexing and rich-result eligibility", "Conversions from organic search", "Clarity of content for answer systems"].map((item, index) => <p key={item}><span>0{index + 1}</span>{item}</p>)}</div>
        </div>
      </section>

      <section className="sa-deliverables shell">
        <div className="sa-section-head"><div><span className="sa-label">What you receive</span><h2>A plan you can act on.<br /><em>Not a report that sits unused.</em></h2></div><p>Each deliverable has a priority, an owner and a clear next step.</p></div>
        <div className="sa-deliverables-list">{deliverables.map((item, index) => <div key={item}><b>0{index + 1}</b><p>{item}</p></div>)}</div>
      </section>

      <section className="sa-fit">
        <div className="shell sa-fit-grid">
          <div><span className="sa-label">Who this is for</span><h2>When you have a website.<br /><em>But search does not work for you.</em></h2></div>
          <div>{fitFor.map((item, index) => <p key={item}><span>0{index + 1}</span>{item}</p>)}</div>
        </div>
      </section>

      <section className="sa-fit" aria-labelledby="sa-expect-title">
        <div className="shell sa-fit-grid">
          <div><span className="sa-label">Before you start</span><h2 id="sa-expect-title">What to expect.<br /><em>What we will not promise.</em></h2></div>
          <div>{expectations.map((item, index) => <p key={item}><span>0{index + 1}</span>{item}</p>)}</div>
        </div>
      </section>

      <section className="sa-cluster shell" aria-labelledby="sa-cluster-title">
        <div className="sa-cluster-head">
          <div><span className="sa-label">Before you decide</span><h2 id="sa-cluster-title">Diagnose visibility first.<em>Then choose the level of work.</em></h2></div>
          <p>Read two short explanations of SEO and AEO and when the problem is visibility or conversion. If you need demand sooner, see paid advertising. If you want a specific starting point, the audit is the most direct step.</p>
        </div>
        <div className="sa-guide-grid">
          {guides.map((guide, index) => (
            <Link className="sa-guide-card" href={guide.href} key={guide.href}>
              <div className="sa-guide-top"><span>{index === 0 ? "Explainer" : "Related service"}</span><span className="sa-guide-arrow" aria-hidden="true">↗</span></div>
              <h3>{guide.title}</h3>
              <p>{guide.text}</p>
            </Link>
          ))}
        </div>
        <Link className="sa-audit-card" href="/en/contact">
          <small>For a defined starting point</small>
          <strong>SEO and AEO audit</strong>
          <p>A review of indexing, speed, content and conversion, with a ranked improvement plan.</p>
          <span className="sa-audit-price"><OfferPrice offerKey="seo-audit" className="sa-audit-price-value" /><span className="sa-audit-link">Request the audit →</span></span>
        </Link>
      </section>

      <section className="sa-faq shell" id="faq">
        <div className="sa-section-head"><div><span className="sa-label">Frequently asked questions</span><h2>Before you start.<br /><em>The most useful answers.</em></h2></div><p>We define the scope after reviewing the site, the market and the goal, not from a generic package.</p></div>
        <div className="sa-faq-grid">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</div>
      </section>

      <section className="sa-final shell">
        <div><span className="sa-label">Next step</span><h2>Send your website address.<br /><em>We will show where visibility is lost.</em></h2></div>
        <div>
          <p>Tell us the type of business and the markets you serve, and we will start by reviewing the most important problems and opportunities.</p>
          <Link className="button primary" href="/en/contact">Start a website review <span>→</span></Link>
          <p className="sa-contact-email">Or email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
