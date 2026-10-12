import Link from "next/link";
import { enMetadata } from "../../_en/metadata";
import { Footer } from "../../_en/parity/footer";
import { Header } from "../../_en/parity/header";
import { OfferPrice } from "../../_en/lib/localized-price";
import { whatsappHref } from "../../_en/lib/site";
// The Arabic SEO audit offer's layout and styles, reused unchanged. English-only direction and type overrides follow.
import "../../../../(ar)/offers/offers-page.css";
import "../../../../(ar)/offers/offer-trust.css";
import "../../../../(ar)/offers/seo-audit/seo-audit-offer.css";
import "../../_en/parity/service-pages.en.css";
import "../../_en/styles/hide-arabic-widgets.css";

export const metadata = enMetadata(
  "SEO and AEO website audit with a 30-day plan",
  "A full SEO and AEO audit for your website, delivered within 48 hours: indexing, crawling, speed, content, keywords and conversion, with a PDF report and a 30-day improvement plan ranked by priority.",
  "/en/offers/seo-audit",
);

const auditAreas = [
  ["Technical SEO", "Indexing, crawling, robots.txt, sitemaps, canonical tags, 404 errors and redirects."],
  ["On-page SEO", "Titles, descriptions, H1 and H2 headings, content, images, internal links and page structure."],
  ["Speed and mobile experience", "Core Web Vitals, mobile performance and the issues that slow loading or weaken the experience."],
  ["Keywords and visibility opportunities", "Search opportunities tied to your business, content gaps, and the pages that can be strengthened first."],
  ["Conversion SEO", "How clear the offer is, the call to action, the contact route, and how well the page turns a visit into an enquiry."],
];

const deliverables = [
  ["A clear SEO score", "An overall rating that shows the state of the site quickly, without drowning you in technical numbers."],
  ["The 10 most important issues", "Ranked as critical, important or improvements, with the effect of each on visibility or conversion."],
  ["Screenshots and examples", "Screenshots from your own site, so you can see where each problem is rather than receiving general advice."],
  ["Keyword opportunities", "Five to ten initial search opportunities tied to your services and target market."],
  ["Quick wins", "Changes that can be made quickly for early gains before the larger projects."],
  ["A 30-day plan", "A practical order: what to fix first, what can wait, and what needs specialist implementation."],
];

const processSteps = [
  ["01", "Send your website", "Send the website address, your business type, the target market, and the most important service you want to appear for."],
  ["02", "We audit and analyse", "We review the site technically, its content, performance, search opportunities and conversion, then rank the priorities."],
  ["03", "You receive the report", "A clear PDF with the score, the issues, the opportunities and a 30-day improvement plan."],
];

const faqItems = [
  ["Does the offer include implementing the SEO fixes?", "No. The offer covers the audit, analysis, report and priority plan. Any development work, content improvement or ongoing SEO is priced separately, once we know what the site actually needs."],
  ["Do I need to give you access to my website?", "In most cases, no. The audit starts from public pages and the data that is available. If we need Search Console or Analytics access for a more precise diagnosis, we will ask you clearly before using it."],
  ["How long does the audit take?", "The report is usually delivered within 48 hours after we receive the website address and the basic information, unless the site is large or needs extra access."],
  ["Is the audit suitable for a new website?", "Yes, if the site is published and can be crawled. For very new sites we focus more on the technical foundation, the page structure, and the topics the content should be built around."],
  ["Can the audit cover a specific country or language?", "Yes. We link the review to the market, language and services you name when you order, and explain the search opportunities for that country or market."],
  ["Does it cover AEO and visibility in AI answer engines?", "Yes. We review how easily your content can be understood: its structure, headings, questions and answers, and structured data. We add recommendations that help search engines and answer engines understand your pages more clearly."],
];

export default function SeoAuditOfferPage() {
  const contactLink = whatsappHref("Hello Dewank, I would like an SEO and AEO audit of my website. My website is: ");
  const url = "https://dewank.com/en/offers/seo-audit";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "SEO and AEO website audit",
        alternateName: "Website SEO Audit",
        description: "A full SEO and AEO audit covering technical, content, speed, keywords and conversion, with a PDF report and a 30-day improvement plan.",
        serviceType: ["SEO Audit", "Technical SEO Audit", "On-page SEO Audit", "AEO Audit", "Website Performance Audit"],
        provider: { "@id": "https://dewank.com/#organization" },
        areaServed: "Worldwide",
        url,
        inLanguage: "en",
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqItems.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://dewank.com/en" },
          { "@type": "ListItem", position: 2, name: "Offers", item: "https://dewank.com/en/offers" },
          { "@type": "ListItem", position: 3, name: "SEO and AEO audit", item: url },
        ],
      },
    ],
  };

  return (
    <main id="main-content" className="inner-page offers-page seo-audit-page en-service" lang="en" dir="ltr">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

      <section className="shell offer-detail-hero seo-audit-hero">
        <div>
          <div className="offer-availability"><span className="offer-spots-available"><i aria-hidden="true" /><strong>48</strong> hours to deliver</span></div>
          <h1>Your website exists.<br/><em>But does Google understand it?</em></h1>
          <p>A full SEO audit shows what is holding back your visibility, what needs fixing first, and where the growth opportunities are, before you spend more on marketing.</p>
          <div className="seo-audit-answer" aria-label="Short answer">
            <b>The short answer</b>
            <span>You receive a diagnosis of the technical, content, speed, keyword, conversion and AEO issues, then a PDF report and a 30-day improvement plan in priority order.</span>
          </div>
        </div>
        <aside className="offer-price-panel seo-audit-price-panel">
          <small>Full audit · one-time</small>
          <OfferPrice offerKey="seo-audit" className="offer-price" />
          <div className="offer-trust-inline"><span>PDF report</span><span>30-day plan</span><span>No subscription</span></div>
          <p>The price covers the audit, the report and the recommendations. Implementing the fixes and ongoing SEO management are not included.</p>
          <a className="button primary" href={contactLink} target="_blank" rel="noopener noreferrer">Send your website for an audit <span>→</span></a>
        </aside>
      </section>

      <section className="shell seo-audit-proof" aria-labelledby="audit-preview-title">
        <div className="seo-audit-proof-copy">
          <span className="section-label">What the result looks like</span>
          <h2 id="audit-preview-title">A report the business owner can understand.<br/>Not an endless list of errors.</h2>
          <p>We rank what we find by impact, and show what needs urgent attention and what can wait, so the review becomes decisions you can act on. The figures in the example beside this text are illustrative only, not the result of a real site.</p>
        </div>
        <div className="seo-report-mockup" role="img" aria-label="Illustrative example of an SEO report showing an overall score, critical issues and improvement opportunities">
          <div className="seo-report-top"><span>DEWANK SEO AUDIT</span><small>REPORT / 01</small></div>
          <div className="seo-score-row">
            <div className="seo-score-ring"><strong>64</strong><span>/100</span></div>
            <div><small>OVERALL SCORE</small><b>A sound base, with clear room to improve.</b></div>
          </div>
          <div className="seo-report-bars">
            <div><span>Technical SEO</span><i><em style={{ width: "72%" }} /></i><b>72</b></div>
            <div><span>Content and on-page</span><i><em style={{ width: "61%" }} /></i><b>61</b></div>
            <div><span>Performance</span><i><em style={{ width: "54%" }} /></i><b>54</b></div>
            <div><span>AEO and structure</span><i><em style={{ width: "68%" }} /></i><b>68</b></div>
          </div>
          <div className="seo-report-flags"><span><i />3 critical</span><span><i />5 important</span><span><i />8 improvements</span></div>
        </div>
      </section>

      <section className="shell offer-deliverables seo-audit-areas">
        <div><span className="section-label">What we audit</span><h2>Five areas.<br/>One clear picture.</h2><p>The audit does not stop at keywords. We review what helps Google reach and understand your site, and what helps a visitor take the next step.</p></div>
        <div className="deliverable-list">{auditAreas.map(([title, text]) => <article className="deliverable-item" key={title}><b>{title}</b><p>{text}</p></article>)}</div>
      </section>

      <section className="shell seo-audit-delivery">
        <div className="seo-audit-delivery-head"><span className="section-label">What you receive</span><h2>From diagnosis to an implementation plan.</h2></div>
        <div className="seo-audit-delivery-grid">{deliverables.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="shell seo-audit-process">
        <div className="seo-audit-process-head"><span className="section-label">How it works</span><h2>Three steps only.</h2></div>
        <div className="seo-audit-process-grid">{processSteps.map(([n, title, text]) => <article key={n}><b>{n}</b><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="shell offer-confidence seo-audit-confidence">
        <div className="offer-confidence-head"><span className="section-label">A clear scope</span><h2>The audit identifies the problem.<br/>Implementation is a separate decision.</h2></div>
        <div className="offer-confidence-grid"><article><b>01</b><span>We do not sell implementation before we know what the site actually needs.</span></article><article><b>02</b><span>The report shows what you can fix yourself and what needs a specialist.</span></article><article><b>03</b><span>The recommendations can be carried out with Dewank or with any team you choose.</span></article></div>
        <details className="offer-policy"><summary>What the offer does not include</summary><p>It does not include code changes, writing complete pages, building external links, ongoing monthly SEO, or a guaranteed ranking position on Google. These are separate services, and they are scoped only after the audit results are known.</p></details>
      </section>

      <section className="shell offer-faq" id="faq">
        <div className="offer-faq-head"><span className="section-label">Frequently asked questions</span><h2>Before you send your website.</h2></div>
        <div className="offer-faq-list">{faqItems.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="shell offer-final-cta seo-audit-final">
        <span className="offer-kicker">SEO + AEO · PDF report · within 48 hours</span>
        <h2>Find where you are losing visibility before you pay more to bring visitors in.</h2>
        <p>Send us your website address, your business type and your target market. We will start the audit from the big picture and move to the details that affect results.</p>
        <a className="button primary" href={contactLink} target="_blank" rel="noopener noreferrer">Audit my website now <span>→</span></a>
        <div className="seo-audit-links"><Link href="/en/guides/seo-vs-aeo">Want to understand the difference between SEO and AEO?</Link><Link href="/en/seo-geo-aeo">Need ongoing implementation after the audit?</Link><Link href="/en/offers">← Back to all offers</Link></div>
      </section>
      <Footer />
    </main>
  );
}
