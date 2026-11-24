import Link from "next/link";
import { enMetadata } from "../../_en/metadata";
import { Footer } from "../../_en/parity/footer";
import { Header } from "../../_en/parity/header";
import { OfferPrice } from "../../_en/lib/localized-price";
import { whatsappHref } from "../../_en/lib/site";
import { EnOfferSticky } from "../offer-sticky-en";
import OfferVisualProof from "./offer-visual-proof";
import ContentSystemStage from "../../../../(ar)/offers/30-day-content-package/content-system-stage";
import { ContentSamplePlan, ContentSectors, contentExtraFaqs } from "../../../../(ar)/offers/30-day-content-package/content-extras";
// The Arabic 30-day offer's layout and styles, reused unchanged. English-only direction and type overrides follow.
import "../../../../(ar)/offers/offers-page.css";
import "../../../../(ar)/offers/offer-trust.css";
import "../../../../(ar)/offers/30-day-content-package/offer-visual-proof.css";
import "../../../../(ar)/offers/30-day-content-package/sales-machine.css";
import "../../../../(ar)/offers/30-day-content-package/sales-machine-arabic-polish.css";
import "../../../../(ar)/offers/30-day-content-package/content-system-stage.css";
import "../../../../(ar)/offers/30-day-content-package/content-extras.css";
import "../../_en/parity/service-pages.en.css";
import "../../_en/styles/hide-arabic-widgets.css";

export const metadata = enMetadata(
  "Social Media Post Design and Content Package",
  "A 30-day social media content package: 12 custom posts, 3 stories, one reel, captions, a publishing plan and a bio review. Not a monthly account contract.",
  "/en/offers/30-day-content-package",
);

const deliverables = [
  ["12 social media post designs", "Custom designs consistent with your business, not repeated ready-made templates."],
  ["3 story designs", "Stories built to drive interaction, present your service or move people to act."],
  ["One reel", "A short reel edited from the images or videos you send us."],
  ["Ideas and captions", "A clear idea and ready-to-publish copy for each piece of content."],
  ["30-day publishing plan", "A suggested publishing order, so you know what to post and when."],
  ["Bio and call-to-action review", "A review of your core message and how visitors are directed to the next step."],
];

const painToOutcome = [
  ["Every time: what do we post?", "We prepare the month's ideas and captions before the daily search for something to publish begins."],
  ["The account looks inconsistent", "We build a visual direction that makes your content read as one brand, not a set of unrelated posts."],
  ["Posting stops when work gets busy", "You receive a 30-day plan and ready materials, instead of relying on the time you have each week."],
];

const faqItems = [
  ["Is this full management of a social media account?", "No. This is a 30-day content production package: ideas, design, captions, a publishing plan and a bio review. It does not include daily posting, message handling or paid campaigns."],
  ["What is the difference between this package and monthly management?", "This package suits you if your main need is producing content with a clear scope and price. Monthly management can include continuous posting, follow-up and reporting as agreed, so its scope and price are different."],
  ["How can I check if this package suits my business?", "Get a free initial consultation on WhatsApp. We review your needs and explain whether the package fits or whether you need monthly management or a different scope."],
  ["How much does monthly content management cost?", "The price on this page is the full package price for your country: 12 posts, 3 stories, one reel, ideas, captions and a publishing plan. For the wider monthly management service, see the pricing section of our social media management page."],
  ["How long does delivery take?", "Usually 10 to 14 working days after we receive the information and materials we need and the direction is approved."],
  ["What if the direction does not suit me?", "We agree a clear direction before expanding production, and the package includes two rounds of design revisions within the agreed scope."],
];

const workSteps = [
  ["Send your business type and goal on WhatsApp."],
  ["We review your needs and tell you from the start if they are outside the package."],
  ["You approve the direction and the delivery dates before we expand production."],
  ["You receive the content, with two rounds of design revisions within the scope."],
];

const allFaqs = [...faqItems, ...contentExtraFaqs.en];

export default function ContentOfferPage() {
  const contactLink = whatsappHref("Hello Dewank, I would like to start the 30-day content package for my business. My business is: ");
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://dewank.com/en/offers/30-day-content-package#service",
    name: "30-day social media content package",
    description: "A content package for 30 days with 12 custom posts, 3 story designs and one reel, plus ideas, captions, a publishing plan and a bio and call-to-action review. It is not a full monthly account management contract.",
    serviceType: ["Social media content creation", "Social media design"],
    provider: { "@id": "https://dewank.com/#organization" },
    areaServed: "Worldwide",
    url: "https://dewank.com/en/offers/30-day-content-package",
    inLanguage: "en",
    offers: { "@type": "Offer", price: "210", priceCurrency: "USD", availability: "https://schema.org/InStock", url: "https://dewank.com/en/offers/30-day-content-package" },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
  };

  return (
    <main id="main-content" className="inner-page offers-page sales-machine-page en-service" lang="en" dir="ltr">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://dewank.com/en" }, { "@type": "ListItem", position: 2, name: "Offers", item: "https://dewank.com/en/offers" }, { "@type": "ListItem", position: 3, name: "30-day content package", item: "https://dewank.com/en/offers/30-day-content-package" }] }) }} />

      <section className="shell offer-detail-hero sales-hero">
        <div className="sales-hero-copy">
          <span className="sales-eyebrow">Social media content package</span>
          <h1>A month of social media content<br/><em>With a clear price and scope</em></h1>
          <p className="sales-hero-lead">You receive 16 ready-to-publish pieces with the ideas, captions and a 30-day plan, without a monthly management contract. The complete package is <span className="cp-inline-price"><OfferPrice offerKey="30-day-content-package" className="cp-price-value" /></span>.</p>
          <div className="cp-hero-actions">
            <a id="order-cta" className="button primary offer-consultation-cta" href={contactLink} target="_blank" rel="noopener noreferrer">Start your content month <span>→</span></a>
            <p className="cp-microcopy">No commitment. Send your business type, and we confirm first that the package fits.</p>
          </div>
          <div className="sales-proof-strip" aria-label="Package summary"><span>12 posts</span><span>3 stories</span><span>1 reel</span><span>30-day plan</span></div>
        </div>

        <aside className="offer-price-panel sales-price-panel">
          <small>Full package price</small>
          <OfferPrice offerKey="30-day-content-package" className="offer-price" />
          <p className="sales-price-promise">We review your business first and explain whether this package is the right fit.</p>
          <div className="offer-trust-inline" aria-label="Trust and reassurance"><span>No monthly contract</span><span>Direction approved first</span><span>Two revision rounds</span></div>
          <p className="cp-assure">You approve the direction before production, and two rounds of design revisions are included in the price.</p>
          <a id="order-panel" className="button primary sales-primary-cta offer-consultation-cta" href={contactLink} target="_blank" rel="noopener noreferrer">Start your content month <span>→</span></a>
          <small className="sales-cta-note">WhatsApp, direct · Free initial consultation</small>
        </aside>

        <ContentSystemStage locale="en" />
      </section>

      <OfferVisualProof />

      <section className="shell sales-problem-solution" aria-labelledby="sales-problem-title">
        <div className="sales-section-head"><span className="section-label">If this is happening</span><h2 id="sales-problem-title">Your service is good, and your account does not show it consistently</h2></div>
        <div className="sales-three-grid">{painToOutcome.map(([title, text], index) => <article className="sales-pain-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <ContentSamplePlan locale="en" />

      <section className="shell offer-deliverables sales-deliverables">
        <div><span className="section-label">What you receive</span><h2>Every piece has a job<br/>in the month's plan</h2><p>Delivery usually takes 10–14 working days after we receive the information and materials we need and the direction is approved.</p></div>
        <div className="deliverable-list">{deliverables.map(([title, text]) => <article className="deliverable-item" key={title}><b>{title}</b><p>{text}</p></article>)}</div>
      </section>

      <section className="shell offer-fit sales-fit">
        <span className="section-label">Before you book</span><h2>Do you need content only, or full management?</h2>
        <div className="offer-fit-grid">
          <article className="offer-fit-card good"><h3>This package suits you if</h3><ul><li>You have a clear business or service and need a more professional presence.</li><li>Your main need is ideas, design, captions and consistency.</li><li>You want a month of content before committing to full monthly management.</li><li>You can send us photos or videos for the reel when needed.</li></ul></article>
          <article className="offer-fit-card limits"><h3>Choose monthly management if</h3><ul><li>You need continuous posting and scheduling on the account.</li><li>You need follow-up, comments, messages or community management.</li><li>You need ongoing monthly reports and optimisation.</li><li>You need several platforms or a larger team.</li></ul><p><Link href="/en/social-media-content">Explore the full management service</Link></p></article>
        </div>
      </section>

      <section className="shell offer-confidence sales-confidence" aria-labelledby="offer-confidence-title">
        <div className="offer-confidence-head"><span className="section-label">Four steps</span><h2 id="offer-confidence-title">From your first message to the start of work</h2></div>
        <div className="offer-confidence-grid">{workSteps.map(([text], index) => <article key={text}><span>{text}</span></article>)}</div>
      </section>

      <ContentSectors locale="en" />

      <section className="shell offer-faq sales-faq" aria-labelledby="offer-faq-title">
        <div className="offer-faq-head"><span className="section-label">Questions before you decide</span><h2 id="offer-faq-title">Scope and price before we start</h2></div>
        <div className="offer-faq-list">{allFaqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
        <p><Link href="/en/social-media-content#pricing">Compare the package with monthly social media management</Link></p>
      </section>

      <section id="order-final" className="shell offer-final-cta sales-final-cta">
        <span className="offer-kicker">16 content pieces · <OfferPrice offerKey="30-day-content-package" className="offer-kicker-price" /></span>
        <h2>Start next month with content ready</h2>
        <p>Send us your business type. We will check whether the 30-day package is the right fit, or whether you need a wider monthly service, then explain the next step.</p>
        <a className="button primary offer-consultation-cta" href={contactLink} target="_blank" rel="noopener noreferrer">Start your content month <span>→</span></a>
        
      </section>

      <EnOfferSticky watchIds={["order-cta", "order-panel", "order-final", "order-footer"]} href={contactLink} label="Start your month" priceLabel="Complete package" offerKey="30-day-content-package" />
      <div id="order-footer"><Footer /></div>
    </main>
  );
}
