import Link from "next/link";
import { enMetadata } from "../../_en/metadata";
import { Footer } from "../../_en/parity/footer";
import { Header } from "../../_en/parity/header";
import { OfferPrice } from "../../_en/lib/localized-price";
import { whatsappHref } from "../../_en/lib/site";
import OfferVisualProof from "./offer-visual-proof";
// The Arabic 30-day offer's layout and styles, reused unchanged. English-only direction and type overrides follow.
import "../../../offers/offers-page.css";
import "../../../offers/offer-trust.css";
import "../../../offers/30-day-content-package/offer-visual-proof.css";
import "../../../offers/30-day-content-package/sales-machine.css";
import "../../../offers/30-day-content-package/sales-machine-arabic-polish.css";
import "../../_en/parity/service-pages.en.css";
import "../../_en/styles/hide-arabic-widgets.css";

export const metadata = enMetadata(
  "30-day social media content package",
  "A 30-day social media content package for businesses worldwide: 12 custom posts, 3 story designs and one reel, with ideas, captions, a publishing plan and a bio and call-to-action review. Not a full monthly management contract.",
  "/en/offers/30-day-content-package",
);

const deliverables = [
  ["12 custom posts", "Designs consistent with your business, not repeated ready-made templates."],
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

const afterDelivery = [
  ["A ready content bank", "16 planned and designed pieces, instead of starting from zero every week."],
  ["A clearer message", "Content that explains your service and gives visitors a reason to understand your business quickly."],
  ["A more consistent presence", "A coherent visual direction that makes your account look more professional and trustworthy."],
  ["A plan that removes guesswork", "You know what to post and when, with room to adjust as your business changes."],
];

const faqItems = [
  ["Is this full management of a social media account?", "No. This is a 30-day content production package: ideas, design, captions, a publishing plan and a bio review. It does not include daily posting, message handling or paid campaigns."],
  ["What is the difference between this package and monthly management?", "This package suits you if your main need is producing content with a clear scope and price. Monthly management can include continuous posting, follow-up and reporting as agreed, so its scope and price are different."],
  ["How can I check the package suits my business before paying?", "Send us your business on WhatsApp first. We review your need and explain whether this package fits, or whether you need monthly management or a different scope. You do not pay before this step."],
  ["How much does monthly content management cost?", "The price on this page is the full package price for your country: 12 posts, 3 stories, one reel, ideas, captions and a publishing plan. For the wider monthly management service, see the pricing section of our social media management page."],
  ["How long does delivery take?", "Usually 10 to 14 working days after we receive the information and materials we need and the direction is approved."],
  ["Can I pay in two parts?", "Yes. 50% to start, and 50% after the direction is approved and before the final files are delivered."],
  ["What if the direction does not suit me?", "We agree a clear direction before expanding production, and the package includes two rounds of design revisions. You can get a full refund before work starts; after that, only the completed part is deducted."],
];

const workSteps = [
  ["Send your business type and goal on WhatsApp."],
  ["We confirm the package fits, then share the payment details."],
  ["We start after the 50% payment and the approved direction."],
];

export default function ContentOfferPage() {
  const contactLink = whatsappHref("Hello Dewank, I would like to check whether the 30-day content package fits my business. My business is: ");
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://dewank.com/en/offers/30-day-content-package#service",
    name: "30-day social media content package",
    description: "A content package for 30 days with 12 custom posts, 3 story designs and one reel, plus ideas, captions, a publishing plan and a bio and call-to-action review. It is not a full monthly account management contract.",
    serviceType: ["Social media content creation", "Social media design"],
    provider: { "@type": "Organization", name: "Dewank", url: "https://dewank.com/en" },
    areaServed: "Worldwide",
    url: "https://dewank.com/en/offers/30-day-content-package",
    inLanguage: "en",
    offers: { "@type": "Offer", price: "210", priceCurrency: "USD", availability: "https://schema.org/InStock", url: "https://dewank.com/en/offers/30-day-content-package" },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
  };

  return (
    <main className="inner-page offers-page sales-machine-page en-service" lang="en" dir="ltr">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />

      <section className="shell offer-detail-hero sales-hero">
        <div className="sales-hero-copy">
          <span className="sales-eyebrow">Social media content package</span>
          <h1>30 days of content.<br/><em>With a clear price and scope.</em></h1>
          <p className="sales-hero-lead">We turn your business into 16 ready-to-publish pieces: ideas, design, captions and a 30-day plan. It suits you if the content itself is what you need, without a full monthly account-management contract.</p>
          <div className="sales-proof-strip" aria-label="Package summary"><span>12 posts</span><span>3 stories</span><span>1 reel</span><span>30-day plan</span></div>
          <p className="sales-fit-note"><strong>Please note:</strong> if you need daily posting, message handling, ongoing monthly reports or paid campaigns, see our <Link href="/en/social-media-content">social media management service</Link> instead.</p>
        </div>

        <aside className="offer-price-panel sales-price-panel">
          <small>Full package price</small>
          <OfferPrice offerKey="30-day-content-package" className="offer-price" />
          <p className="sales-price-promise">Start with 50% only, after we review your business and confirm the package is right for you.</p>
          <div className="offer-trust-inline" aria-label="Trust and reassurance"><span>No monthly contract</span><span>Direction approved first</span><span>Fit confirmed before payment</span></div>
          <a className="button primary sales-primary-cta" href={contactLink} target="_blank" rel="noopener noreferrer">Check the package fits your business <span>→</span></a>
          <small className="sales-cta-note">WhatsApp, direct · No payment before we review your business</small>
        </aside>
      </section>

      <OfferVisualProof />

      <section className="shell sales-problem-solution" aria-labelledby="sales-problem-title">
        <div className="sales-section-head"><span className="section-label">If this is happening</span><h2 id="sales-problem-title">The problem is not your service.<br/>It is that your account does not show its value consistently.</h2><p>The package is built to address three reasons an account stops, or looks weaker than the business behind it.</p></div>
        <div className="sales-three-grid">{painToOutcome.map(([title, text], index) => <article className="sales-pain-card" key={title}><b>0{index + 1}</b><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="shell sales-outcomes" aria-labelledby="sales-outcomes-title">
        <div className="sales-section-head compact"><span className="section-label">What you gain</span><h2 id="sales-outcomes-title">Not 16 designs alone.<br/>A month ready to show up.</h2></div>
        <div className="sales-outcome-grid">{afterDelivery.map(([title, text]) => <article key={title}><span>✓</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        <div className="sales-mid-cta"><p>If this is what your account is missing, let us confirm the package fits before you pay anything.</p><a className="button primary" href={contactLink} target="_blank" rel="noopener noreferrer">Review the package with me on WhatsApp <span>→</span></a></div>
      </section>

      <section className="shell offer-deliverables sales-deliverables">
        <div><span className="section-label">What you receive</span><h2>Every piece has a job.<br/>Not just a filled calendar.</h2><p>Delivery usually takes 10–14 working days after we receive the information and materials we need and the direction is approved.</p></div>
        <div className="deliverable-list">{deliverables.map(([title, text]) => <article className="deliverable-item" key={title}><b>{title}</b><p>{text}</p></article>)}</div>
      </section>

      <section className="shell sales-risk-reversal" aria-labelledby="sales-risk-title">
        <div><span className="section-label">A simpler decision</span><h2 id="sales-risk-title">We do not ask you to trust big promises.</h2><p>We reduce the risk of the decision as much as we can: we review your business first, agree the direction, and you start with half the package price.</p></div>
        <div className="sales-risk-grid"><article><strong>01</strong><h3>We confirm the fit</h3><p>If your need is outside this package, we tell you before you pay.</p></article><article><strong>02</strong><h3>You approve the direction</h3><p>We do not expand production until the direction is clear and suits your business.</p></article><article><strong>03</strong><h3>50% to start</h3><p>The second payment comes after the direction is approved and before the final files are delivered.</p></article><article><strong>04</strong><h3>A clear refund policy</h3><p>Full refund before production starts. After work begins, only the completed part is deducted.</p></article></div>
      </section>

      <section className="shell offer-fit sales-fit">
        <span className="section-label">Before you book</span><h2>Do you need content only, or full management?</h2>
        <div className="offer-fit-grid">
          <article className="offer-fit-card good"><h3>This package suits you if</h3><ul><li>You have a clear business or service and need a more professional presence.</li><li>Your main need is ideas, design, captions and consistency.</li><li>You want a month of content before committing to full monthly management.</li><li>You can send us photos or videos for the reel when needed.</li></ul></article>
          <article className="offer-fit-card limits"><h3>Choose monthly management if</h3><ul><li>You need continuous posting and scheduling on the account.</li><li>You need follow-up, comments, messages or community management.</li><li>You need ongoing monthly reports and optimisation.</li><li>You need several platforms or a larger team.</li></ul><p><Link href="/en/social-media-content">Explore the full management service</Link></p></article>
        </div>
      </section>

      <section className="shell offer-confidence sales-confidence" aria-labelledby="offer-confidence-title">
        <div className="offer-confidence-head"><span className="section-label">Three steps only</span><h2 id="offer-confidence-title">From your first message to the start of work.</h2></div>
        <div className="offer-confidence-grid">{workSteps.map(([text], index) => <article key={text}><b>0{index + 1}</b><span>{text}</span></article>)}</div>
      </section>

      <section className="shell offer-faq sales-faq" aria-labelledby="offer-faq-title">
        <div className="offer-faq-head"><span className="section-label">Questions before you decide</span><h2 id="offer-faq-title">Scope and price before we start.</h2></div>
        <div className="offer-faq-list">{faqItems.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
        <p><Link href="/en/social-media-content#pricing">Compare the package with monthly social media management</Link></p>
      </section>

      <section className="shell offer-final-cta sales-final-cta">
        <span className="offer-kicker">16 content pieces · <OfferPrice offerKey="30-day-content-package" className="offer-kicker-price" /></span>
        <h2>If you need the content, do not pay for full management you do not need.</h2>
        <p>Send us your business type. We will check whether the 30-day package is the right fit, or whether you need a wider monthly service, then explain the next step.</p>
        <a className="button primary" href={contactLink} target="_blank" rel="noopener noreferrer">Send my business and check the right fit <span>→</span></a>
        <small>No commitment before the review · 50% only when work starts</small>
      </section>

      <div className="sales-mobile-sticky" aria-label="Quick contact on WhatsApp"><a className="button primary" href={contactLink} target="_blank" rel="noopener noreferrer">Ask about the 30-day package</a></div>
      <Footer />
    </main>
  );
}
