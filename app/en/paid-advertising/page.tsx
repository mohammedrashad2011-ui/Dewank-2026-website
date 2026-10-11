import Link from "next/link";
import { enMetadata } from "../_en/metadata";
import { Footer } from "../_en/parity/footer";
import { Header } from "../_en/parity/header";
import { RelatedGuides } from "../_en/parity/related-guides";
import { OfferPrice } from "../_en/lib/localized-price";
import { whatsappHref } from "../_en/lib/site";
// The Arabic paid-advertising page's layout and styles, reused unchanged. English-only direction and type overrides follow.
import "../../paid-ads/paid-ads-page.css";
import "../../paid-ads/paid-ads-cluster.css";
import "../../paid-ads/paid-ads-refinement.css";
import "../../paid-ads/paid-ads-aeo-upgrade.css";
import "../_en/parity/service-pages.en.css";
import "../_en/styles/hide-arabic-widgets.css";

export const metadata = enMetadata(
  "Google Ads and Meta Ads management",
  "Google Ads and Meta Ads for businesses worldwide: keyword research, campaign management, conversion tracking, landing pages and cost-per-result reporting.",
  "/en/paid-advertising",
);

const channels = [
  ["Google Ads", "Captures demand that already exists, through search and high-intent keywords, then sends the user to a page built for the decision."],
  ["Meta Ads", "Creates interest, tests messages, reaches new audiences and retargets people who engaged with you or visited the site."],
];

const scope = [
  ["Google Search", "Search campaigns built around user intent and the keywords closest to a purchase or booking."],
  ["Performance Max", "Wider reach across Google inventory, once the data and tracking are ready."],
  ["Meta leads and messages", "Forms, messages and WhatsApp routes that make it easy to enquire."],
  ["Sales and conversions", "Campaigns aimed at a purchase, booking or the main action on the site."],
  ["Retargeting", "Bringing back visitors and engaged people with messages that fit the stage they reached."],
  ["Creative testing", "Testing angles, offers and designs, rather than relying on a single advert."],
];

const journey = [
  ["01", "Research", "We study the market, the audience, the offer and the competition before any budget is committed."],
  ["02", "Message", "We build the advertising angle, offer and copy around the customer's decision."],
  ["03", "Targeting", "We choose keywords, audiences and channels according to purchase intent and the customer journey."],
  ["04", "Conversion", "We connect each advert to a page, form or WhatsApp route that is clear and fast."],
  ["05", "Measurement", "We set up tracking and judge the cost and quality of results, not clicks alone."],
  ["06", "Optimisation", "We pause what underperforms, scale what works and base budget decisions on data."],
];

const metrics = ["Cost per lead", "Cost per booking", "Cost per acquisition", "Conversion rate", "Return on ad spend", "Lead quality"];
const deliverables = [
  "A channel and budget strategy tied to a business goal.",
  "Set-up or review of Google and Meta accounts.",
  "Meta Pixel, GA4 and the conversions you need.",
  "Keyword and audience research, and campaign structure.",
  "Advertising copy, and direction for the creative.",
  "Budget management, testing and ongoing optimisation.",
  "Clear reports with decisions and recommendations, not isolated numbers.",
];
const fitFor = [
  "You spend on advertising but cannot tell which campaigns produce results.",
  "You want enquiries, bookings or sales that you can measure.",
  "You run a store and need to improve acquisition and retargeting.",
  "You run a clinic or local service that depends on appointments and calls.",
  "You are preparing to launch an offer, a market or a new location.",
];
const faqs = [
  { question: "How much does Google Ads management cost?", answer: "There is no single price that fits every business. Management fees depend on the number of campaigns and markets, the size of the account and the scope of tracking and optimisation. Your advertising budget is paid to Google separately. If you only need one search campaign set up, there is a separate launch package with a defined scope and price." },
  { question: "What is a sensible minimum Google Ads budget?", answer: "It depends on the market, the price of your product, your goal and the keywords. We set a test budget that collects enough data on a small number of high-intent keywords, rather than spreading a small amount across many campaigns." },
  { question: "Do management fees include the advertising budget?", answer: "No. Platform budgets are separate from management, set-up and design or landing page work, which are scoped individually." },
  { question: "Can I buy only a Google Ads launch, without monthly management?", answer: "Yes. If your site or landing page is ready and you need one organised Search campaign, you can start with the launch package and move to monthly management later if you need ongoing optimisation." },
  { question: "How long until results appear?", answer: "Early signals can appear quickly, but a reliable decision needs enough test data. The timeline depends on the market, the offer, the tracking and how long your customers take to decide." },
  { question: "Do you write the ad copy and produce creative?", answer: "Yes. The scope can include writing advertising copy and directing or producing the designs and short videos needed for testing." },
  { question: "Do I need a landing page?", answer: "If the current page is slow, unfocused or does not support the campaign goal, a dedicated landing page protects the budget and improves conversion." },
  { question: "Can you manage an existing ad account?", answer: "Yes. We start by reviewing the structure, tracking, audiences and past results, then decide what to fix or rebuild." },
];

const relatedPages = [
  { href: "/en/seo-geo-aeo", title: "SEO and paid media: which first?", text: "SEO builds visibility over time. Google Ads tests demand quickly, with an ongoing budget. The right choice depends on your stage." },
  { href: "/en/website-design", title: "Clicks but no enquiries?", text: "When the problem comes after the click, look at the page, the message, the calls to action and the tracking before adding budget." },
  { href: "/en/social-media-content", title: "Content that supports the campaign", text: "Organic posts, creative ideas and the designs that paid campaigns can test and reuse." },
];

export default function PaidAdvertisingPage() {
  const contactLink = whatsappHref("Hello Dewank, I would like to review or manage my Google Ads and Meta Ads campaigns. My business is: ");
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "@id": "https://dewank.com/en/paid-advertising#service", name: "Google Ads and Meta Ads management", alternateName: "Paid media management", description: "Management, optimisation and tracking of Google Ads and Meta Ads campaigns for businesses worldwide, including keyword research, audience work, landing pages and conversion measurement.", serviceType: ["Google Ads management", "Google Search Ads", "Meta Ads management", "Paid media", "Performance marketing"], provider: { "@id": "https://dewank.com/#organization" }, areaServed: "Worldwide", url: "https://dewank.com/en/paid-advertising", inLanguage: "en" },
      { "@type": "FAQPage", "@id": "https://dewank.com/en/paid-advertising#faq", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://dewank.com/en" }, { "@type": "ListItem", position: 2, name: "Services", item: "https://dewank.com/en/services" }, { "@type": "ListItem", position: 3, name: "Google Ads and Meta Ads", item: "https://dewank.com/en/paid-advertising" }] },
    ],
  };

  return (
    <main id="main-content" className="pa-page en-service" lang="en" dir="ltr">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

      <section className="pa-hero shell">
        <div className="pa-hero-copy">
          <div className="pa-kicker"><span>GOOGLE ADS</span><span>META ADS</span><span>PERFORMANCE</span></div>
          <h1>Google Ads management.<br /><em>A clearer budget. Customers you can measure.</em></h1>
          <p>We manage campaigns from keyword and advert to landing page, tracking and follow-up, so you can see which spend produces customers and where a campaign needs fixing before the budget grows.</p>
          <div className="pa-actions"><a className="button primary" href={contactLink} target="_blank" rel="noopener noreferrer">Review your campaign on WhatsApp <span>↗</span></a><Link href="#launch">Only need a launch?</Link><a href="#journey">See our process</a></div>
        </div>
        <div className="pa-dashboard" aria-label="Illustration of the measures used to judge campaigns">
          <div className="pa-dashboard-top"><b>PAID MEDIA CONTROL</b><span>MEASUREMENT VIEW</span></div>
          <div className="pa-score"><small>PRIMARY GOAL</small><strong>Qualified leads</strong><span>The result before the clicks</span></div>
          <div className="pa-bars"><i style={{ height: "42%" }}></i><i style={{ height: "62%" }}></i><i style={{ height: "54%" }}></i><i style={{ height: "80%" }}></i><i style={{ height: "72%" }}></i><i style={{ height: "94%" }}></i></div>
          <div className="pa-metrics"><div><small>CPL</small><b>Cost per lead</b></div><div><small>CVR</small><b>Conversion rate</b></div><div><small>ROAS</small><b>Return on spend</b></div></div>
        </div>
      </section>

      <section className="pa-answer-block shell" aria-labelledby="pa-answer-title">
        <small>Quick answer</small>
        <h2 id="pa-answer-title">What does Google Ads management include, and when is a launch enough?</h2>
        <p>A launch suits you when you need one search campaign set up in an organised way. Monthly management suits accounts that need continuous testing of keywords, adverts, pages, budgets and tracking, and better lead quality over time.</p>
        <div className="pa-answer-grid">
          <article><b>Launch only</b><span>Keyword research, a Search campaign, adverts, negative keywords and basic conversion tracking, delivered within a defined scope.</span></article>
          <article><b>Monthly management</b><span>Ongoing review of search terms, adverts and budget, with weak spend paused and proven campaigns expanded.</span></article>
        </div>
      </section>

      <section className="pa-truth">
        <div className="shell pa-truth-grid">
          <div><span className="pa-label">The core idea</span><h2>Advertising is not a separate campaign.<br /><em>It is part of the sales system.</em></h2></div>
          <div>
            <p>When the offer is weak, the tracking is incomplete or the landing page is confusing, more spend simply means more waste.</p>
            <p>So we connect the channel to the message, the audience, the conversion and the follow-up, so you know what works and why.</p>
          </div>
        </div>
      </section>

      <section className="pa-channels shell">
        <div className="pa-section-head"><div><span className="pa-label">Choosing a channel</span><h2>Google captures demand.<br /><em>Meta creates interest.</em></h2></div><p>If a customer is already searching for your service or product, Google is usually the logical starting point. If you need to create interest, test angles and messages, or retarget people, Meta may be the better fit. The decision depends on what the customer is doing, not on which platform is most popular.</p></div>
        <div className="pa-channel-grid">{channels.map((item, index) => <article key={item[0]}><span>0{index + 1}</span><h3>{item[0]}</h3><p>{item[1]}</p></article>)}</div>
      </section>

      <section className="pa-scope">
        <div className="shell">
          <div className="pa-section-head"><div><span className="pa-label">Scope of management</span><h2>Campaigns built for the goal.<br /><em>Not a list of platforms.</em></h2></div><p>We choose the mix from your data, budget and market, and test in stages.</p></div>
          <div className="pa-scope-grid">{scope.map((item, index) => <article key={item[0]}><b>{String(index + 1).padStart(2, "0")}</b><h3>{item[0]}</h3><p>{item[1]}</p></article>)}</div>
        </div>
      </section>

      <section className="pa-cost-breakdown shell" aria-labelledby="pa-cost-title">
        <div className="pa-section-head"><div><span className="pa-label">Where the cost goes</span><h2 id="pa-cost-title">The advertising budget is not the management fee.</h2></div><p>Separate the items before you compare offers, so you know what you pay the platform, and what you pay for set-up, management and conversion work.</p></div>
        <div className="pa-cost-breakdown-grid">
          <article><small>01</small><h3>Platform budget</h3><p>Paid directly to Google or Meta for clicks and impressions.</p></article>
          <article><small>02</small><h3>Set-up or management</h3><p>Building and improving campaigns, and monitoring keywords, adverts and budget.</p></article>
          <article><small>03</small><h3>Landing page</h3><p>Added when the current page does not convert the traffic well enough.</p></article>
          <article><small>04</small><h3>Tracking and measurement</h3><p>GA4, conversions and events needed to connect spend to real results.</p></article>
        </div>
      </section>

      <section className="pa-conversion-bridge shell">
        <div><span className="pa-label">Before you raise the budget</span><h2>The advert brings the visit.<br /><em>The page and tracking decide the result.</em></h2><p>If the search terms are relevant and the adverts earn clicks but conversions are weak, the problem is usually after the click. We review the landing page, the speed of decision, the call to action and the tracking before asking for a bigger budget.</p></div>
        <div className="pa-conversion-links"><Link href="/en/website-design">Review website and landing pages <span>↗</span></Link><Link href="/en/seo-geo-aeo">Compare with search visibility <span>↗</span></Link></div>
      </section>

      <section className="pa-journey shell" id="journey">
        <div className="pa-section-head"><div><span className="pa-label">From spend to result</span><h2>Every step protects the budget.<br /><em>Every number leads to a decision.</em></h2></div><p>We turn advertising management from a daily reaction into a system of testing, measurement and improvement.</p></div>
        <div className="pa-journey-list">{journey.map((item) => <article key={item[0]}><span>{item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p></article>)}</div>
      </section>

      <section className="pa-measure">
        <div className="shell pa-measure-grid">
          <div><span className="pa-label">Real measurement</span><h2>We do not celebrate click counts.<br /><em>We measure the value of the result.</em></h2></div>
          <div className="pa-measure-list">{metrics.map((item, index) => <p key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</p>)}</div>
        </div>
      </section>

      <section className="pa-deliverables shell">
        <div className="pa-section-head"><div><span className="pa-label">What you receive</span><h2>Full management.<br /><em>And clearer visibility.</em></h2></div><p>You know where the budget goes, what is being tested and what the next decision is.</p></div>
        <div className="pa-deliverables-list">{deliverables.map((item, index) => <div key={item}><b>{String(index + 1).padStart(2, "0")}</b><p>{item}</p></div>)}</div>
      </section>

      <section className="pa-fit">
        <div className="shell pa-fit-grid">
          <div><span className="pa-label">Who this is for</span><h2>When advertising becomes<br /><em>an investment that needs management.</em></h2></div>
          <div>{fitFor.map((item) => <p key={item}>{item}</p>)}</div>
        </div>
      </section>

      <section className="pa-readiness shell" aria-labelledby="pa-readiness-title">
        <small>Is your campaign ready to scale?</small>
        <h2 id="pa-readiness-title">Check these four points before you raise the budget.</h2>
        <p>If one of them is broken, more spend can make the problem bigger rather than the result.</p>
        <div className="pa-readiness-grid">
          <article><b>Search terms</b><span>Do the clicks come from real purchase intent, or from irrelevant searches?</span></article>
          <article><b>Tracking</b><span>Are conversions, bookings and orders recorded correctly?</span></article>
          <article><b>Landing page</b><span>Is the page fast, clear and leads the customer to one next step?</span></article>
          <article><b>Lead quality</b><span>Are the leads you get suitable, or only general enquiries?</span></article>
        </div>
        <div className="pa-readiness-actions"><a className="button primary" href={contactLink} target="_blank" rel="noopener noreferrer">Send your account and we will find the weak point <span>↗</span></a><Link className="button secondary" href="/en/seo-geo-aeo">Compare with SEO</Link></div>
      </section>

      <section className="pa-cluster shell" aria-labelledby="pa-cluster-title" id="launch">
        <div className="pa-cluster-head">
          <div><span className="pa-label">Before you set a budget</span><h2 id="pa-cluster-title">Understand the cost of Google Ads.<em>Then choose between a launch and management.</em></h2></div>
          <p>If you are still setting the budget, start with the related pages below. If you need one Google Search campaign only, a launch package is the most direct route. Accounts that need ongoing optimisation are better suited to monthly management.</p>
        </div>
        <div className="pa-guide-grid">
          {relatedPages.map((item) => <Link className="pa-guide-card" href={item.href} key={item.href}><small>Related page</small><h3>{item.title}</h3><p>{item.text}</p><span>Read more ↗</span></Link>)}
        </div>
        <div className="pa-offer-row">
          <div className="pa-offer-copy"><small>If you only need a Google Search campaign</small><h3>Google Ads launch</h3><p>One organised Search campaign with a defined scope: keyword research, adverts, negative keywords and basic conversion tracking, without bundling it into full monthly management.</p></div>
          <Link className="pa-offer-price-card" href={contactLink}><OfferPrice offerKey="google-ads-launch" className="pa-offer-price-value" /><b>Request the launch package ↗</b></Link>
        </div>
      </section>

      <section className="pa-faq shell">
        <div className="pa-section-head"><div><span className="pa-label">Frequently asked questions</span><h2>Google Ads management, without the guesswork.</h2></div><p>Direct answers on cost, budget, launches, management and tracking.</p></div>
        <div className="pa-faq-grid">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</div>
      </section>

      <section className="pa-final shell">
        <div><span className="pa-label">Next step</span><h2>Send your current account<br /><em>or the details of your business.</em></h2></div>
        <div><p>We will say whether you need ongoing management, a single launch, or a fix to the page and tracking before increasing the budget.</p><a className="button primary" href={contactLink} target="_blank" rel="noopener noreferrer">Start a campaign review <span>↗</span></a></div>
      </section>
      <RelatedGuides guides={[{ href: "/en/guides/google-ads-clicks-no-leads", title: "Why Google Ads brings clicks but not customers" }, { href: "/en/guides/google-ads-vs-meta-ads", title: "Google Ads or Meta Ads: which is right for your business?" }]} />
      <Footer />
    </main>
  );
}
