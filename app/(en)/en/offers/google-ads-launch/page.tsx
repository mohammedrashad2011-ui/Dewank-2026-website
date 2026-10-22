import Link from "next/link";
import { enMetadata } from "../../_en/metadata";
import { Footer } from "../../_en/parity/footer";
import { Header } from "../../_en/parity/header";
import { OfferPrice } from "../../_en/lib/localized-price";
import { whatsappHref } from "../../_en/lib/site";
// The Arabic Google Ads launch offer's layout and styles, reused unchanged. English-only direction and type overrides follow.
import "../../../../(ar)/offers/offers-page.css";
import "../../../../(ar)/offers/offer-trust.css";
import "../../../../(ar)/offers/google-ads-launch/google-ads-launch.css";
import "../../_en/parity/service-pages.en.css";
import "../../_en/styles/hide-arabic-widgets.css";

export const metadata = enMetadata(
  "Google Ads launch package: a measured Search campaign",
  "A Google Ads Search launch package for businesses worldwide: buyer-intent keyword research, ad copy, negative keywords, basic conversion tracking and a pre-launch check. A setup package, not monthly management. Ad spend is paid directly to Google.",
  "/en/offers/google-ads-launch",
);

const deliverables = [
  ["A quick review of the account and goal", "We review the business, the current page and the main goal before building, so spending does not start on an unclear path."],
  ["Buyer-intent keyword research", "We select up to 20 core keywords tied to a request for the service or a purchase, leaving out general phrases that spend budget without return."],
  ["One Search campaign", "One Search campaign with up to two ad groups, with location, language, schedules and the core settings configured."],
  ["Ad copy", "Headlines and descriptions suited to search ads, with extra assets such as sitelinks and short descriptions where they fit."],
  ["An initial negative keyword list", "A starting list of negative keywords to reduce unsuitable clicks before launch."],
  ["Basic conversion tracking", "One main goal connected, such as a WhatsApp click, a form submission or a call, where the current page and technical setup allow it."],
  ["A pre-launch check", "A review of links, budget, locations, keywords, ads and measurement settings before the campaign runs."],
  ["Seven days of technical follow-up", "After launch, we confirm the campaign is running and tracking records correctly, and fix any basic setup errors that appear."],
];

const faqs = [
  ["How much does it cost to set up and launch a Google Ads campaign?", "This package sets up and launches one Google Search campaign for the price shown above, in US dollars by default or in your country's approved price where one exists. Your ad budget is paid directly to Google, and ongoing monthly management is not included."],
  ["What does the Google Ads launch package include?", "It includes setting up and launching one Google Search campaign with up to two ad groups, keyword research, ad copy, the initial negative keywords, and one main conversion goal where the technical requirements are met."],
  ["Does the package include the ad budget?", "No. The package fee is for setting up and launching the campaign. Your advertising budget is paid directly to Google, in the amount you choose."],
  ["Does it include a month of campaign management?", "No. The package covers setup and launch, with technical follow-up for 7 days. If you need continuous management and optimisation, see our Google Ads and paid advertising service."],
  ["Does it include a landing page design?", "No. You need a site or a page that can receive visitors. If your current page is not suited to conversion, a landing page can be added as a separate service."],
  ["Is the package suitable for every business?", "It suits businesses whose customers already search on Google for their services or products. Some businesses benefit more from Meta Ads or from building a landing page first."],
  ["What do you need before we start?", "A Google Ads account that can take payment, a working site or page, access to the account and measurement, and a clear service or offer you want to advertise."],
  ["How long does setup take?", "Usually 2 to 4 working days after we receive access, information and your approval of the keywords and ad messages."],
];

export default function GoogleAdsLaunchOffer() {
  const contactLink = whatsappHref("Hello Dewank, I would like to launch a Google Ads Search campaign for my business. My business is: ");
  const url = "https://dewank.com/en/offers/google-ads-launch";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "Google Ads Search campaign setup and launch",
        description: "Setup and launch of one Google Search campaign: buyer-intent keyword research, ad copy, negative keywords, basic conversion tracking and a pre-launch check. Ad spend is paid directly to Google.",
        serviceType: ["Google Ads Setup", "Google Ads Campaign Launch", "Google Search Ads", "Conversion Tracking"],
        provider: { "@id": "https://dewank.com/#organization" },
        areaServed: "Worldwide",
        url,
        inLanguage: "en",
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://dewank.com/en" },
          { "@type": "ListItem", position: 2, name: "Offers", item: "https://dewank.com/en/offers" },
          { "@type": "ListItem", position: 3, name: "Google Ads launch", item: url },
        ],
      },
    ],
  };

  return (
    <main id="main-content" className="inner-page offers-page google-ads-page en-service" lang="en" dir="ltr">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

      <section className="shell offer-detail-hero google-ads-hero">
        <div>
          <div className="offer-availability"><span className="offer-spots-available"><i aria-hidden="true" /><strong>2–4</strong> working days</span></div>
          <h1>Set up and run Google Ads<br/><em>A Search campaign that starts measured</em></h1>
          <p>We build a Google Search campaign from scratch: buyer-intent keywords, suitable ads, negative keywords, basic conversion tracking, and a full check before the budget starts running.</p>
          <div className="google-ads-answer" aria-label="The short answer">
            <b>The short answer</b>
            <span>If you are looking for the cost of launching a Google Ads campaign, this package is a setup and launch at a clear price, not monthly management. It suits you if you already have a working page and want to start Google Search in an organised way.</span>
          </div>
        </div>
        <aside className="offer-price-panel google-ads-price-panel">
          <small>Setup and launch of a Search campaign</small>
          <OfferPrice offerKey="google-ads-launch" className="offer-price" />
          <div className="offer-trust-inline"><span>Search campaign</span><span>Conversion tracking</span><span>7-day technical follow-up</span></div>
          <p>Ad spend is paid directly to Google. The package does not include a new landing page or ongoing monthly management and optimisation.</p>
          <a className="button primary" href={contactLink} target="_blank" rel="noopener noreferrer">Start the Google Ads launch <span>→</span></a>
        </aside>
      </section>

      <section className="shell google-ads-proof">
        <div className="google-ads-proof-copy">
          <span className="section-label">What we build</span>
          <h2>From the customer&apos;s search<br/>To a measurable step</h2>
          <p>We arrange the core journey so the ad appears when a customer searches for the service, leads to your current page, and records the action that matters most, such as a WhatsApp click, a form or a call.</p>
        </div>
        <div className="google-search-card" aria-label="Simplified example of a Google search ad journey">
          <div className="google-search-top"><span>Google Search</span><small>Illustrative example</small></div>
          <div className="google-search-query">website design agency for small businesses</div>
          <div className="google-search-ad">
            <small>Ad · dewank.com</small>
            <h3>A professional website that turns visits into enquiries</h3>
            <p>A clear offer, a suitable page, and measurement of the result, instead of spending budget without knowing what happens after the click.</p>
          </div>
          <div className="google-search-path"><span>Search</span><span>Ad</span><span>Your page</span><span>Conversion</span></div>
        </div>
      </section>

      <section className="shell offer-deliverables google-ads-deliverables">
        <div><span className="section-label">What you receive</span><h2>A campaign ready to launch<br/>With a clear scope</h2><p>We set the limits from the start, so the setup package does not turn into unplanned monthly management.</p></div>
        <div className="deliverable-list">{deliverables.map(([item, text]) => <article className="deliverable-item" key={item}><b>{item}</b><p>{text}</p></article>)}</div>
      </section>

      <section className="shell google-ads-fit">
        <div className="google-ads-fit-head"><span className="section-label">Is it right for you?</span><h2>Not every campaign needs the same start</h2></div>
        <div className="offer-fit-grid">
          <article className="offer-fit-card good"><h3>It suits you if</h3><ul><li>You have a working site or page</li><li>People already search on Google for your service</li><li>You want one defined Search campaign, not broad settings</li><li>You need a correct setup before a monthly management service</li></ul></article>
          <article className="offer-fit-card limits"><h3>You need a larger service if</h3><ul><li>You need a new landing page</li><li>You want a month of daily management and optimisation</li><li>You need several campaigns or many markets</li><li>You need Performance Max, Shopping or advanced measurement integrations</li></ul></article>
        </div>
      </section>

      <section className="shell google-ads-process">
        <div className="google-ads-process-head"><span className="section-label">How it is delivered</span><h2>Understand the request. Choose the keywords. Build. Then launch</h2></div>
        <div className="google-ads-process-grid">
          <article><b>01</b><h3>Define the goal</h3><p>We choose the main conversion, the offer, the market and the page that will receive the visitors.</p></article>
          <article><b>02</b><h3>Research keywords</h3><p>We arrange the keywords by search intent and leave out those likely to spend budget without return.</p></article>
          <article><b>03</b><h3>Build the campaign</h3><p>We write the ads and set the targeting, the negative keywords and the core measurement.</p></article>
          <article><b>04</b><h3>Launch and check</h3><p>We review everything before it runs, then follow up on the technical side for the first 7 days.</p></article>
        </div>
      </section>

      <section className="shell offer-confidence google-ads-confidence">
        <div><span className="section-label">Package limits</span><h2>A fixed fee for setup and launch,<br/>not for a full month of management</h2></div>
        <div className="offer-confidence-list">
          <p><b>Not included:</b> the Google ad budget, a new landing page, monthly management, Display or video ads, Merchant Center, or advanced CRM and measurement integrations.</p>
          <p><b>Required from you:</b> a Google Ads account that can take payment, a working page, access to the account and measurement, and a service or offer you want to promote.</p>
          <p><b>After launch:</b> you can manage the campaign in-house, or move to our <Link href="/en/paid-advertising">paid advertising service</Link> if you want ongoing optimisation.</p>
        </div>
      </section>

      <section className="shell offer-faq google-ads-faq" id="faq">
        <div><span className="section-label">Quick questions</span><h2>Before you start</h2></div>
        <div className="offer-faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="shell offer-final-cta google-ads-final">
        <div><span className="section-label">Ready to launch?</span><h2>Make your first spend on Google<br/>begin with a measured setup</h2><p>Send us your business, your target market and the link to your current page, and we will check whether it is suitable before the campaign begins.</p></div>
        <a className="button primary" href={contactLink} target="_blank" rel="noopener noreferrer">Start on WhatsApp <span>→</span></a>
        <div className="google-ads-links"><Link href="/en/paid-advertising">Need ongoing Google Ads management?</Link><Link href="/en/offers/landing-page-package">Need a landing page first?</Link></div>
      </section>

      <Footer />
    </main>
  );
}
