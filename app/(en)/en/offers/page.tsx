import { enMetadata } from "../_en/metadata";
import { Footer } from "../_en/parity/footer";
import { Header } from "../_en/parity/header";
import OffersHub from "../../../(ar)/offers/offers-hub";
import { hubItemListSchema, hubPriceFaq, hubRegionFaq } from "../../../(ar)/offers/offers-hub-summary";
import "../_en/styles/hide-arabic-widgets.css";


const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": hubPriceFaq.en.q, "acceptedAnswer": { "@type": "Answer", "text": hubPriceFaq.en.a } },
    {
      "@type": "Question",
      "name": "What is the difference between an offer and a full service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Each offer has a defined scope and a starting price, and its page shows what is included and what is not. Wider services, such as monthly social media management or campaign management, are discussed separately."
      }
    },
    {
      "@type": "Question",
      "name": "How do I choose the right offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Choose by your goal: content, ads, a website, identity, or automation. If you have not decided yet, send us your business and the result you want on WhatsApp, and we will recommend the best starting point."
      }
    },
    {
      "@type": "Question",
      "name": "Are the prices shown final?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The price on each card is a starting price, and each offer page explains what it includes. Prices can vary by market and the nature of the project, and we confirm them before any work begins."
      }
    },
    {
      "@type": "Question",
      "name": "How long does delivery take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on the offer, and the timeline is shown on each card. Delivery ranges from about two to 14 working days, and work starts once we receive the information we need."
      }
    },
    {
      "@type": "Question",
      "name": "Do the prices include the domain, hosting or WhatsApp fees?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In most offers they do not. Domain and hosting costs, WhatsApp tools and advertising platform fees are separate, and we explain them before any work begins."
      }
    },
    {
      "@type": "Question",
      "name": "Do you guarantee sales results or search rankings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We do not guarantee sales figures or search engine rankings. Each offer states its deliverables clearly, and we work within the agreed scope."
      }
    },
    { "@type": "Question", "name": hubRegionFaq.en.q, "acceptedAnswer": { "@type": "Answer", "text": hubRegionFaq.en.a } }
  ]
};

export const metadata = enMetadata(
  "Digital Marketing Packages and Pricing for Small Business",
  `Digital marketing packages with a fixed scope and a clear starting price for small businesses: AI video and Reels, social media content, Google Ads, landing pages, websites, SEO audits, branding and WhatsApp automation.`,
  "/en/offers",
);


export default function OffersPage() {
  // Same order as the price table: the featured video offer first, then the grid.
  const schema = hubItemListSchema("en");

  return (
    <main id="main-content" className="inner-page oh-page en-service" lang="en" dir="ltr">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\u003c") }} />
      <OffersHub
        locale="en"
        faq={<>
          <details><summary>{hubPriceFaq.en.q}</summary><p>{hubPriceFaq.en.a}</p></details>
          <details><summary>What is the difference between an offer and a full service?</summary><p>Each offer has a defined scope and a starting price, and its page shows what is included and what is not. Wider services, such as monthly social media management or campaign management, are discussed separately.</p></details>
          <details><summary>How do I choose the right offer?</summary><p>Choose by your goal: content, ads, a website, identity, or automation. If you have not decided yet, send us your business and the result you want on WhatsApp, and we will recommend the best starting point.</p></details>
          <details><summary>Are the prices shown final?</summary><p>The price on each card is a starting price, and each offer page explains what it includes. Prices can vary by market and the nature of the project, and we confirm them before any work begins.</p></details>
          <details><summary>How long does delivery take?</summary><p>It depends on the offer, and the timeline is shown on each card. Delivery ranges from about two to 14 working days, and work starts once we receive the information we need.</p></details>
          <details><summary>Do the prices include the domain, hosting or WhatsApp fees?</summary><p>In most offers they do not. Domain and hosting costs, WhatsApp tools and advertising platform fees are separate, and we explain them before any work begins.</p></details>
          <details><summary>Do you guarantee sales results or search rankings?</summary><p>We do not guarantee sales figures or search engine rankings. Each offer states its deliverables clearly, and we work within the agreed scope.</p></details>
          <details><summary>{hubRegionFaq.en.q}</summary><p>{hubRegionFaq.en.a}</p></details>
        </>}
      />
      <Footer />
    </main>
  );
}
