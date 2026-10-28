import Link from "next/link";
import { enMetadata } from "../_en/metadata";
import { Footer } from "../_en/parity/footer";
import { Header } from "../_en/parity/header";
import { whatsappHref } from "../_en/lib/site";
import { siteUrl, organizationId, servedMarkets } from "../../../lib/seo";
import { CroPackageWhatsAppEn } from "./cro-packages-en";
import { OfferPrice } from "../_en/lib/localized-price";
// Shared section system from the Arabic SEO page and the CRO page, reused unchanged. English direction and type follow.
import "../../../(ar)/seo-aeo/seo-aeo-page.css";
import "../../../(ar)/seo-aeo/seo-cluster.css";
import "../../../(ar)/conversion-rate-optimization/cro.css";
import { CroDiagnosticPanel } from "../../../components/cro-diagnostic-panel";
import "../_en/parity/service-pages.en.css";
import "../_en/styles/hide-arabic-widgets.css";

export const metadata = enMetadata(
  "Conversion rate optimization audit services",
  "Conversion rate optimization for websites, landing pages and enquiry paths: a paid diagnostic showing where visitors stop, with fixes.",
  "/en/conversion-rate-optimization",
);

const wrongPlaces = [
  ["The message does not match the reason for the visit", "The advert or search result promises something specific, and the page opens with general claims that never answer the visitor's question."],
  ["The next step is unclear", "Several buttons and routes with no obvious choice. Every extra option delays the enquiry."],
  ["Trust is missing at the moment of decision", "No clear scope, way of working or answers to the obvious questions, so the visitor postpones or leaves."],
  ["Friction in the form or on WhatsApp", "More fields than needed, or an empty message that leaves the visitor unsure what to write."],
  ["The mobile experience is weaker than desktop", "The button, text or form is harder to use on a phone, where most visitors arrive."],
  ["Enquiries arrive but follow-up is slow", "Nobody replies quickly, or there is no rule for routing and qualifying conversations. The opportunity cools before anyone acts."],
];

const steps = [
  ["01", "Define the goal", "What should happen after the visit: an enquiry, a booking or a request for a quote."],
  ["02", "Trace the journey", "From the advert, search result or direct link to the first message or form that reaches you."],
  ["03", "Diagnose the weakest stage", "Where the visitor leaves, why, and what they were missing to continue."],
  ["04", "Prioritise the fixes", "By expected impact and effort, with recommendations your team can carry out."],
];

const scopes = [
  { title: "Website & Funnel Audit", tag: "Website & Funnel Audit", problem: "Visitors arrive but do not enquire, book or buy.", covers: "The message, headline, visual hierarchy, calls to action, the form and the mobile experience, and the step from the page to the enquiry.", inputs: "The page or route to review, the service it should sell, and the main source of visits." },
  { title: "Lead Generation & CRM Audit", tag: "Lead Generation & CRM Audit", problem: "Enquiries come in, but qualification, routing and follow-up are weak.", covers: "Where enquiries are received, the rules for replying and routing, the follow-up stages, and the details recorded for each prospect.", inputs: "A short description of how enquiries arrive and who follows them up, and any CRM tool in use." },
  { title: "Marketing Performance Audit", tag: "Marketing Performance Audit", problem: "Marketing spend cannot be connected to clear business results.", covers: "The messages, channels and measurement, and which numbers reflect a real decision rather than activity that only looks good.", inputs: "The marketing channels in use, the business result you want to measure, and the data you already have." },
];

const inputs = ["The website or main page address, the type of business and the market you serve.", "The route or service you want reviewed, and the main sources of visits.", "A description of what happens after an enquiry: who replies, and how long it takes.", "Optional access to measurement data for the second and third packages, when it is needed. We explain exactly what we need before using it."];

const deliverables = ["A written report that ranks the fixes by impact, confidence and effort.", "Evidence for each finding: a page capture, a description of the route, or the data available.", "What each package includes in detail is listed in the packages section below."];

// One-time packages. Each one states its own limits, so no package promises what another one includes.
const packages = [
  { offerKey: "cro-snapshot" as const, label: "One page", name: "Conversion Snapshot", purpose: "A quick review of one public page or landing page, to show what stops the visitor from enquiring first.", delivery: "Two working days after payment is confirmed and the required inputs are received", includes: ["One public page or one landing page", "A heuristic review of messaging, calls to action, trust, mobile use and enquiry friction", "Up to three documented findings", "Practical fixes ranked by priority", "A short PDF report"], excludes: ["No strategy call", "No analytics access required", "No implementation", "Not based on real visitor behaviour data", "Not a full conversion-funnel audit"], cta: "Confirm the Snapshot scope on WhatsApp", recommended: false },
  { offerKey: "cro-audit" as const, label: "Full journey", name: "Website & Conversion Funnel Audit", purpose: "A review of one defined customer journey, from the first page to the enquiry and its follow-up.", delivery: "3 to 5 working days after payment is confirmed and the required inputs are received", includes: ["One defined customer journey", "Up to three relevant pages or conversion stages", "Review of messaging, UX, calls to action, trust, forms and enquiry handling", "Up to five documented findings", "Recommendations ranked by impact, confidence and effort", "A professional PDF report and a practical 30-day improvement roadmap", "One short written clarification round, asynchronous", "Analytics review only when relevant data is available and the scope allows it", "For enquiry or CRM cases: one defined journey from the enquiry to the follow-up"], excludes: ["No implementation", "No ongoing management of campaigns or the website", "No CRM development"], cta: "Confirm the audit scope on WhatsApp", recommended: true },
  { offerKey: "cro-growth-diagnostic" as const, label: "Deeper analysis", name: "Growth Diagnostic", purpose: "A broader but explicitly defined journey, with a deeper review of enquiry handling and measurement where the data allows.", delivery: "5 to 7 working days after payment is confirmed and the required inputs are received", includes: ["One broader but explicitly defined conversion journey", "Up to five relevant pages or stages", "Up to ten evidence-backed findings", "A deeper review of enquiry handling and the relevant measurement", "GA4 or funnel-data review where access and sufficient data exist", "A prioritised optimisation roadmap and a professional PDF report", "One 30-minute walkthrough of the findings"], excludes: ["No implementation", "No CRM development", "No campaign execution", "No A/B test execution"], cta: "Confirm the diagnostic scope on WhatsApp", recommended: false },
];

const notIncluded = ["Making the changes to the website or pages.", "Managing advertising or running campaigns.", "Building a CRM system or setting up WhatsApp automation.", "Designing a new website or rebuilding landing pages.", "Running A/B tests or analysing visitor behaviour through session recordings."];

const afterAudit = [
  ["WhatsApp and CRM automation", "If follow-up is the weak point and your team needs to reply and qualify faster.", "/en/whatsapp-crm-automation"],
  ["A dedicated landing page", "If one campaign or offer needs a page built to lead it from the start.", "/en/offers/landing-page-package"],
  ["Website design or improvement", "If the problem lies in the structure of the site and the experience itself.", "/en/website-design"],
];

const faqs = [
  { question: "What is the difference between a conversion audit and an SEO audit?", answer: "An SEO audit asks why the site does not appear in search results. A conversion audit asks why an interested visitor does not become an enquiry. The two can overlap, but they answer different questions, and each has its own service." },
  { question: "Do I need access to Google Analytics?", answer: "The Conversion Snapshot needs no access at all. In the second and third packages we review analytics data only when it is available and the scope allows it. We do not assume figures we have not seen." },
  { question: "How long does the audit take?", answer: "It depends on the package: two working days for the Conversion Snapshot, three to five for the Website & Conversion Funnel Audit, and five to seven for the Growth Diagnostic. The time starts after payment is confirmed and the required inputs are received." },
  { question: "Does the audit include making the fixes?", answer: "No. The audit sets priorities and recommendations. Implementation is a separate service, suggested after you review the report if it fits your needs." },
  { question: "Does the audit guarantee more sales?", answer: "No provider can guarantee that. The aim is to show where opportunities are being lost and which fixes are most likely to matter, so you can test them first." },
  { question: "Who is this audit not right for?", answer: "Businesses that do not yet receive visits or enquiries. In that case the first priority is visibility or advertising, and conversion becomes useful once there is traffic to improve." },
];

const relatedGuides = [
  { href: "/en/guides/why-website-does-not-generate-leads", title: "Your website gets visits but no customers?", text: "Diagnose the stage where opportunities leak before you raise the budget." },
  { href: "/en/guides/ad-to-whatsapp-booking-journey", title: "From advert to WhatsApp to booking", text: "How to connect the message, the conversation and the follow-up into one measurable path." },
  { href: "/en/guides/whatsapp-crm-automation", title: "WhatsApp and CRM automation reduces lost customers", text: "What to automate, what stays with your team, and when it makes sense." },
];

const whatsappAudit = whatsappHref("Hello Dewank, I would like to ask about the Website & Conversion Funnel Audit for my business. My website link and business type: ");

export default function ConversionRateOptimizationEnglishPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteUrl}/en/conversion-rate-optimization#service`,
        name: "Conversion Rate Optimisation (CRO)",
        alternateName: "Website & Conversion Funnel Audit",
        description: "A paid diagnostic and recommendations to improve the path from visit to enquiry, covering the website, landing pages, enquiry handling and follow-up.",
        serviceType: ["Conversion Rate Optimization", "Website Conversion Audit", "Landing Page Review", "Lead Follow-up Review"],
        provider: { "@id": organizationId },
        areaServed: servedMarkets,
        inLanguage: "en",
        url: `${siteUrl}/en/conversion-rate-optimization`,
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/en/conversion-rate-optimization#faq`,
        mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/en` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/en/services` },
          { "@type": "ListItem", position: 3, name: "Conversion Rate Optimisation (CRO)", item: `${siteUrl}/en/conversion-rate-optimization` },
        ],
      },
    ],
  };

  return (
    <main id="main-content" className="sa-page cro-page en-service" lang="en" dir="ltr">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

      <section className="sa-hero shell">
        <div className="sa-hero-copy">
          <div className="sa-kicker"><span>CRO</span><span>Conversion path</span><span>Qualified enquiries</span></div>
          <h1>Conversion Rate Optimisation (CRO)<br/><em>Turn qualified visits into real opportunities</em></h1>
          <p>If people who need your service reach your website but do not enquire, book or buy, the problem is rarely the number of visits. We trace where a visitor stops: the message, the trust, the next step, or the follow-up after an enquiry arrives.</p>
          <div className="sa-actions">
            <a className="button primary" href="#pricing">Choose the right package <span>→</span></a>
            <a href="#audit">See what the audit covers</a>
          </div>
        </div>
        <CroDiagnosticPanel locale="en" />
      </section>

      <section className="sa-truth">
        <div className="shell sa-truth-grid">
          <div><span className="sa-label">The idea</span><h2>A visit is not the goal<br/><em>A qualified enquiry is</em></h2></div>
          <div>
            <p>Many businesses spend to reach an audience, then lose the opportunity right after the visit: a message that does not match the need, an unclear next step, or an enquiry that nobody answers quickly.</p>
            <p>We review that path from start to finish and give you a plan ranked by impact. We make no promises about rankings or specific results.</p>
          </div>
        </div>
      </section>

      <section className="sa-services shell">
        <div className="sa-section-head"><div><span className="sa-label">Where opportunities leak</span><h2>Six places where enquiries get lost<br/><em>Usually one of them is the cause</em></h2></div><p>These are the most common causes. They are not a checklist we run automatically. The audit shows which ones apply to your business.</p></div>
        <div className="sa-service-grid">{wrongPlaces.map((item, index) => <article key={item[0]}><h3>{item[0]}</h3><p>{item[1]}</p></article>)}</div>
      </section>

      <section className="sa-fit">
        <div className="shell">
          <div className="sa-fit-grid">
            <div><span className="sa-label">Who it is for</span><h2>Who this service is for<br/><em>And who it is not for</em></h2></div>
            <div>
              <p><span>01</span><span className="cro-fit-text">Websites and landing pages that receive traffic from adverts, search or social media, but produce too few enquiries.</span></p>
              <p><span>02</span><span className="cro-fit-text">Businesses that receive WhatsApp messages or form enquiries, but only a weak share of them turn into bookings or sales.</span></p>
              <p><span>03</span><span className="cro-fit-text">Teams that market consistently but cannot tell which page or message is blocking the visitor&apos;s decision.</span></p>
              <p><span>04</span><span className="cro-fit-text">If your goal is getting your site to appear in Google, that is a different question. See <Link href="/en/seo-geo-aeo">the SEO and AEO service</Link>.</span></p>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="sa-process">
        <div className="shell">
          <div className="sa-section-head"><div><span className="sa-label">Method</span><h2>We trace the journey before suggesting changes<br/><em>Then we rank what deserves fixing</em></h2></div><p>We do not start by changing colours or copy. We start by finding where the visitor leaves, and why.</p></div>
          <div className="sa-process-list">{steps.map((item) => <article key={item[0]}><span>{item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p></article>)}</div>
        </div>
      </section>

      <section id="audit" className="sa-deliverables shell cro-audit" aria-labelledby="cro-audit-title">
        <div className="sa-section-head">
          <div><span className="sa-label">Paid diagnostic</span><h2 id="cro-audit-title">Website & Conversion Funnel Audit<br/><em>For one defined path, not the whole site</em></h2></div>
          <p>We agree together which path deserves review, from the first point of contact to the enquiry or booking. The report stays practical instead of becoming a long list of general notes. Each package sets its own limits; see the packages below.</p>
        </div>
        <div className="cro-scope-grid">
          {scopes.map((scope) => (
            <article key={scope.title} className="cro-scope-card">
              <small>{scope.tag}</small>
              <h3>{scope.title}</h3>
              <p><strong>Problem it addresses:</strong> {scope.problem}</p>
              <p><strong>What it covers:</strong> {scope.covers}</p>
              <p><strong>Inputs needed:</strong> {scope.inputs}</p>
            </article>
          ))}
        </div>

        <div className="cro-audit-columns">
          <div>
            <h3>What we need from you</h3>
            <ul className="cro-list">{inputs.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div>
            <h3>What you receive</h3>
            <ul className="cro-list">{deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </div>

        <div className="cro-audit-columns">
          <div>
            <h3>What the audit does not include</h3>
            <ul className="cro-list">{notIncluded.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div>
            <h3>Price and next steps</h3>
            <p>Prices are one-time and listed in the packages section below. We do not offer a free full audit. No package starts before its scope, price, timeline and payment instructions are confirmed in writing, and its full fee is paid in advance.</p>
            <p>The full ordering steps are set out in “How ordering works” below the packages.</p>
          </div>
        </div>

        <p className="cro-honesty">The audit shows where opportunities are being lost. It does not automatically increase sales. The result depends on which fixes are carried out and on what happens after an enquiry arrives.</p>
      </section>

      <section id="pricing" className="shell cro-pricing" aria-labelledby="cro-pricing-title">
        <div className="sa-section-head">
          <div><span className="sa-label">Packages</span><h2 id="cro-pricing-title">Three <span className="cro-nowrap">one-time</span> packages<br/><em>Each one sets its limits before we start</em></h2></div>
          <p>Choose by the size of the journey you want reviewed. Prices appear in the approved currency of your saved country where one exists, and in US dollars elsewhere.</p>
        </div>
        <div className="cro-package-grid">
          {packages.map((pkg) => (
            <article key={pkg.offerKey} className={pkg.recommended ? "cro-package-card cro-package-recommended" : "cro-package-card"}>
              {pkg.recommended ? <span className="cro-package-badge">Recommended</span> : null}
              <small>{pkg.label}</small>
              <h3>{pkg.name}</h3>
              <p className="cro-package-purpose">{pkg.purpose}</p>
              <OfferPrice offerKey={pkg.offerKey} className="cro-price" />
              <p className="cro-package-payment">Full payment in advance, before work begins</p>
              <p className="cro-package-delivery"><strong>Delivery:</strong> {pkg.delivery}</p>
              <h4>What you receive</h4>
              <ul className="cro-list">{pkg.includes.map((item) => <li key={item}>{item}</li>)}</ul>
              <h4>Not included</h4>
              <ul className="cro-list cro-package-excluded">{pkg.excludes.map((item) => <li key={item}>{item}</li>)}</ul>
              <CroPackageWhatsAppEn offerKey={pkg.offerKey} packageName={pkg.name} className="button primary cro-package-cta" label={pkg.cta} />
            </article>
          ))}
        </div>
        <p className="cro-pricing-note">Prices are one-time and paid in full in advance, before work begins. Opening WhatsApp is not a confirmed order, a payment or a qualified lead. The order is confirmed once the scope, price, timeline and payment instructions are agreed in writing. Any scope beyond these limits needs a custom quotation agreed before we start.</p>
      </section>

      <section className="shell cro-order" aria-labelledby="cro-order-title">
        <div className="sa-section-head">
          <div><span className="sa-label">How ordering works</span><h2 id="cro-order-title">From package to delivery<br/><em>Four steps, in order</em></h2></div>
          <p>Pressing the WhatsApp button opens a conversation to confirm the scope. That step is not a confirmed order, a payment or a qualified lead, and no work begins until step three.</p>
        </div>
        <ol className="cro-steps cro-order-steps">
          <li><strong>Choose a package.</strong> The package sets its limits, the price shown for your saved country, and the delivery time after payment.</li>
          <li><strong>Confirm the scope.</strong> We confirm the scope, deliverables, timeline and payment instructions with you on WhatsApp, and write them down before any commitment.</li>
          <li><strong>Pay in advance.</strong> Each fixed-scope package is paid in full before work begins. Payment instructions come with the scope confirmation.</li>
          <li><strong>Start delivery.</strong> The delivery time begins after payment and receipt of the required inputs. We then send the report for your package.</li>
        </ol>
      </section>

      <section className="sa-fit cro-after-audit">
        <div className="shell">
          <div className="sa-fit-grid">
            <div><span className="sa-label">After the audit</span><h2>The audit identifies the next step<br/><em>Implementation is a separate decision</em></h2></div>
            <div>
              <p className="cro-fit-intro">We do not recommend implementation before you understand the problem. After the report, one of these may fit, or none may be needed:</p>
              {afterAudit.map((item, index) => <p key={item[0]}><span className="cro-fit-text"><Link href={item[2]}>{item[0]}</Link>: {item[1]}</span></p>)}
            </div>
          </div>
        </div>
      </section>

      <section className="sa-cluster shell" aria-labelledby="cro-guides-title">
        <div className="sa-cluster-head">
          <div><span className="sa-label">Before you decide</span><h2 id="cro-guides-title">Understand the problem first.<em>Then decide what deserves fixing</em></h2></div>
          <p>Short guides that explain where opportunities leak between the visit, the enquiry and the follow-up.</p>
        </div>
        <div className="sa-guide-grid">
          {relatedGuides.map((guide, index) => (
            <Link className="sa-guide-card" href={guide.href} key={guide.href}>
              <div className="sa-guide-top"><span>Guide 0{index + 1}</span><span className="sa-guide-arrow" aria-hidden="true">↗</span></div>
              <h3>{guide.title}</h3>
              <p>{guide.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="sa-faq shell">
        <div className="sa-section-head"><div><span className="sa-label">Questions</span><h2>Before you request the audit<br/><em>These are the most useful answers</em></h2></div><p>The final details are set once the scope is agreed, not from a generic list.</p></div>
        <div className="sa-faq-grid">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</div>
      </section>

      <section className="sa-final shell">
        <div><span className="sa-label">Next step</span><h2>Send us the page link<br/><em>We will show where the visit stops</em></h2></div>
        <div>
          <p>Send the website or page link and your business type. We will agree the most useful path to review and what the audit needs.</p>
          <a className="button primary" href={whatsappAudit} target="_blank" rel="noreferrer">Talk to us about the right package <span>→</span></a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
