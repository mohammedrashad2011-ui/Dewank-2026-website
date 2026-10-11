import Link from "next/link";
import { enMetadata } from "../../_en/metadata";
import { Footer } from "../../_en/parity/footer";
import { Header } from "../../_en/parity/header";
import { OfferPrice } from "../../_en/lib/localized-price";
import { whatsappHref } from "../../_en/lib/site";
// The Arabic Instagram upgrade offer's layout and styles, reused unchanged. English-only direction and type overrides follow.
import "../../../offers/offers-page.css";
import "../../../offers/offer-trust.css";
import "../../../offers/instagram-14-day-upgrade/instagram-upgrade.css";
import "../../_en/parity/service-pages.en.css";
import "../../_en/styles/hide-arabic-widgets.css";

export const metadata = enMetadata(
  "14-day Instagram profile upgrade",
  "A focused 14-day Instagram upgrade for an existing account: a full review, a stronger bio and call to action, highlights, content themes, a visual direction, six designs and a 14-day implementation plan. Not daily management.",
  "/en/offers/instagram-14-day-upgrade",
);

const deliverables = [
  ["Account review", "We check the bio, the picture, the link, the highlights, the feed layout, the clarity of the offer and the visitor's journey from the first visit."],
  ["A stronger bio and call to action", "We rewrite the introduction and the call to action, so a visitor knows who you are, what you offer and what to do next."],
  ["Clear content themes", "We define three to five content themes that suit your business and balance trust, expertise, demand and engagement."],
  ["Organised highlights", "We propose the structure, names, order and core content for the highlights that matter most."],
  ["A visual direction for the account", "A practical direction for colours, headings and post types, so the account looks coherent."],
  ["Six applied designs", "Six posts designed as a practical starting point for the new direction, each with short copy suited to the post."],
  ["A 14-day plan", "A short implementation plan that sets out what to post and what to improve over two weeks, rather than leaving the account with no path after the changes."],
  ["A closing review", "We review the application at the end of the period and send the next development notes based on the account's state."],
];

const faqs = [
  ["Is this 14 days of account management?", "No. It is a focused development package for the account over 14 days: we review, improve, build a direction and a plan, and produce sample designs. Daily management and continuous posting are a separate service."],
  ["Does it include six designs?", "Yes, it includes six applied designs that reflect the proposed direction for the account. Any additional content is priced separately or through a monthly content package."],
  ["Does it include photography or reels?", "No. Photography, video production and reels are not included in this package, and can be added as needed."],
  ["Does it include advertising?", "No. Advertising and campaign management are a separate service. This package focuses on getting the account itself clearer and stronger when a customer visits it."],
  ["Is it suitable for a brand-new account?", "If the account has not started yet and has no structure or content, a full social media content service is a better start. This package is designed mainly for an existing account that needs reorganising and development."],
  ["When does the 14-day period start?", "It starts once we receive access or the required materials, and the basic information about the business, the audience and the service is approved."],
];

export default function Instagram14DayUpgradeOffer() {
  const contactLink = whatsappHref("Hello Dewank, I would like a 14-day Instagram upgrade for my existing account. My account is: ");
  const url = "https://dewank.com/en/offers/instagram-14-day-upgrade";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "14-day Instagram profile upgrade",
        description: "A focused 14-day Instagram upgrade for an existing account: review, bio and call to action, highlights, content themes, a visual direction, six designs and a 14-day plan.",
        serviceType: ["Instagram Profile Optimization", "Social Media Content Strategy", "Social Media Design"],
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
          { "@type": "ListItem", position: 3, name: "14-day Instagram upgrade", item: url },
        ],
      },
    ],
  };

  return (
    <main id="main-content" className="inner-page offers-page instagram-upgrade-page en-service" lang="en" dir="ltr">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

      <section className="shell offer-detail-hero instagram-upgrade-hero">
        <div>
          <div className="offer-availability"><span className="offer-spots-available"><i aria-hidden="true" /><strong>14</strong> focused days</span></div>
          <h1>Your account exists.<br/><em>But does it convince the customer?</em></h1>
          <p>We put your Instagram account in order from the inside out: the bio, the call to action, the highlights, the content themes and the visual direction, then six designs and a 14-day implementation plan.</p>
          <div className="instagram-upgrade-answer" aria-label="The short answer">
            <b>The short answer</b>
            <span>This package is for an existing account that needs clarity and a more professional look. It is not daily account management, and it is not a full month of content.</span>
          </div>
        </div>
        <aside className="offer-price-panel instagram-upgrade-price-panel">
          <small>14-day upgrade package from</small>
          <OfferPrice offerKey="instagram-14-day-upgrade" className="offer-price" />
          <div className="offer-trust-inline"><span>Full review</span><span>Six designs</span><span>14-day plan</span></div>
          <p>The price covers the development, the designs and the plan only. It does not include advertising, photography or ongoing daily management.</p>
          <a className="button primary" href={contactLink} target="_blank" rel="noopener noreferrer">Start the account upgrade <span>→</span></a>
        </aside>
      </section>

      <section className="shell instagram-upgrade-proof">
        <div className="instagram-upgrade-proof-copy">
          <span className="section-label">Where the problem sits</span>
          <h2>The visitor arrives at the account.<br/>And decides within seconds.</h2>
          <p>If the message is unclear, if the bio does not say what you offer, if the highlights are random and the feed has no direction, you can lose the customer before they read a single post. The package puts these points in order as one journey.</p>
        </div>
        <div className="instagram-profile-card" aria-label="Simplified illustration of an Instagram profile before and after an upgrade">
          <div className="instagram-profile-top"><span>Instagram profile</span><small>14-day upgrade</small></div>
          <div className="instagram-profile-head"><i>DW</i><div><b>A clear business name</b><span>Short description + value + call to action</span></div></div>
          <div className="instagram-profile-highlights"><span>Services</span><span>Results</span><span>Questions</span><span>Contact</span></div>
          <div className="instagram-profile-grid">{Array.from({ length: 6 }).map((_, index) => <i key={index} />)}</div>
        </div>
      </section>

      <section className="shell offer-deliverables instagram-upgrade-deliverables">
        <div><span className="section-label">What you receive</span><h2>Not a cosmetic edit.<br/>A reorganised account.</h2><p>Each element of the package has a defined role in making the account clearer, easier to browse, and easier to act on.</p></div>
        <div className="deliverable-list">{deliverables.map(([item, text]) => <article className="deliverable-item" key={item}><b>{item}</b><p>{text}</p></article>)}</div>
      </section>

      <section className="shell instagram-upgrade-fit">
        <div className="instagram-upgrade-fit-head"><span className="section-label">Is it right for you?</span><h2>Suited to an existing account.<br/>Not a project starting from zero.</h2></div>
        <div className="offer-fit-grid">
          <article className="offer-fit-card good"><h3>It suits you if</h3><ul><li>The account exists but its look is disorganised</li><li>The bio and the message are unclear</li><li>You do not know what to post or how to structure the content</li><li>You need a practical direction before a monthly management service</li></ul></article>
          <article className="offer-fit-card limits"><h3>Choose another service if</h3><ul><li>You need management and posting all month</li><li>The account is brand new and has not launched yet</li><li>You need photography or reels in large volumes</li><li>Your main goal is running paid advertising</li></ul></article>
        </div>
      </section>

      <section className="shell instagram-upgrade-process">
        <div className="instagram-upgrade-process-head"><span className="section-label">The 14 days</span><h2>Review. Arrange. Design. Settle the direction.</h2></div>
        <div className="instagram-upgrade-process-grid">
          <article><b>Days 1–3</b><h3>Account diagnosis</h3><p>We review the account, the audience, the offer and the competitors, and set the priority of the issues.</p></article>
          <article><b>Days 4–6</b><h3>Profile structure</h3><p>The bio, the call to action, the highlights, the content themes and the core visual direction.</p></article>
          <article><b>Days 7–11</b><h3>Practical application</h3><p>Six posts designed to reflect the new direction, showing how the account can keep its visual and content consistency.</p></article>
          <article><b>Days 12–14</b><h3>Plan and review</h3><p>We hand over the implementation plan, review the key changes and set the next step for the account.</p></article>
        </div>
      </section>

      <section className="shell offer-confidence instagram-upgrade-confidence">
        <div><span className="section-label">Package limits</span><h2>Clear from the start.</h2></div>
        <div className="offer-confidence-grid">
          <article><b>Included</b><p>Account review, bio and call-to-action improvements, highlights, content themes, a visual direction, six designs, a 14-day plan and a closing review.</p></article>
          <article><b>Not included</b><p>Daily management, continuous posting, replies to comments and messages, paid advertising, photography, reels, influencers or a full month of content production.</p></article>
          <article><b>Before we start</b><p>We need the account link, a description of the business and its services, the target market, the existing brand identity if there is one, and any accounts you consider good references.</p></article>
        </div>
      </section>

      <section className="shell offer-faq">
        <span className="section-label">Frequently asked questions</span><h2>Before you start.</h2>
        <div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="shell offer-final instagram-upgrade-final">
        <div><small>14-day Instagram upgrade</small><h2>Make the first visit to the account<br/><em>say that you are organised and ready.</em></h2><p>If the account exists but does not reflect the level of your business, this is a focused starting point before you pay for more content or more advertising.</p></div>
        <a className="button primary" href={contactLink} target="_blank" rel="noopener noreferrer">Start the account upgrade <span>→</span></a>
        <div className="instagram-upgrade-links"><Link href="/en/offers/30-day-content-package">Need a full month of content?</Link><Link href="/en/social-media-content">Need ongoing social media management?</Link></div>
      </section>

      <Footer />
    </main>
  );
}
