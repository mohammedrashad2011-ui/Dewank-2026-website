import Link from "next/link";
import { enMetadata } from "../_en/metadata";
import { Footer } from "../_en/parity/footer";
import { Header } from "../_en/parity/header";
// The Arabic guides hub's layout and styles, reused unchanged. English-only direction and type overrides follow.
import "../../../(ar)/guides/guides.css";
import "../_en/parity/service-pages.en.css";
import "../_en/styles/hide-arabic-widgets.css";

export const metadata = enMetadata(
  "Guides on marketing, measurement and lead generation",
  "Practical guides for business owners on marketing plans, KPIs, Google and Meta Ads, SEO and AEO, website conversion, social leads and WhatsApp CRM.",
  "/en/guides",
);

// Guides selected for worldwide relevance. Market-specific cost guides are not part of the English site.
const guides = [
  { category: "MARKETING PLAN · STRATEGY", title: "A marketing plan template for businesses: steps and components", description: "Connect the goal, the audience, the offer, the channels, the budget and the measures in one plan you can carry out.", href: "/en/guides/marketing-plan-template", service: "Digital marketing strategy", serviceHref: "/en/digital-marketing" },
  { category: "MARKETING KPIs · MEASUREMENT", title: "Marketing KPIs: the key measures businesses should track", description: "Choose the measures that reveal demand, conversion and acquisition cost, rather than reach and engagement alone.", href: "/en/guides/marketing-kpis", service: "Digital marketing strategy", serviceHref: "/en/digital-marketing" },
  { category: "GOOGLE ADS · CONVERSION", title: "Why Google Ads brings clicks but not customers", description: "Diagnose the journey from search terms and advert to the landing page, tracking, enquiry quality and follow-up.", href: "/en/guides/google-ads-clicks-no-leads", service: "Paid advertising", serviceHref: "/en/paid-advertising" },
  { category: "PAID ADVERTISING · CHANNEL CHOICE", title: "Google Ads or Meta Ads: which is right for your business?", description: "A comparison by customer intent, type of offer, budget, purchase cycle and measurement.", href: "/en/guides/google-ads-vs-meta-ads", service: "Paid advertising", serviceHref: "/en/paid-advertising" },
  { category: "SEO + AEO", title: "SEO vs AEO: how to appear in Google and AI answers", description: "How SEO and AEO work together, and the practical steps to prepare a site for search and answer systems, without unrealistic promises.", href: "/en/guides/seo-vs-aeo", service: "SEO and AEO", serviceHref: "/en/seo-geo-aeo" },
  { category: "WEBSITE CONVERSION", title: "Why your website does not generate leads", description: "The most common leaks in the message, trust, mobile experience, call to action and measurement, with a repair plan in priority order.", href: "/en/guides/why-website-does-not-generate-leads", service: "Website design", serviceHref: "/en/website-design" },
  { category: "SOCIAL MEDIA CONVERSION", title: "Your account looks good but does not bring customers: where is the problem?", description: "Diagnose the gap between reach, trust and the action you ask people to take, and the follow-up process after it.", href: "/en/guides/social-media-not-generating-leads", service: "Social media content", serviceHref: "/en/social-media-content" },
  { category: "WHATSAPP AUTOMATION + CRM", title: "How WhatsApp automation with a CRM reduces lost customers", description: "From the first message to qualification, booking and follow-up, with the rules to set and the measures to track.", href: "/en/guides/whatsapp-crm-automation", service: "WhatsApp and CRM automation", serviceHref: "/en/whatsapp-crm-automation" },
  { category: "ADVERT TO BOOKING", title: "How to build a customer journey from advert to WhatsApp to booking", description: "Connect the advert, the conversation, the booking and attendance, and measure where the journey leaks at each stage.", href: "/en/guides/ad-to-whatsapp-booking-journey", service: "WhatsApp and CRM automation", serviceHref: "/en/whatsapp-crm-automation" },
  { category: "AI AUTOMATION", title: "AI agent or workflow automation? How to choose for your business", description: "The difference between an AI agent and workflow automation, when each fits, where people stay in control, and what to check on data privacy.", href: "/en/guides/ai-agent-vs-workflow-automation", service: "AI automation", serviceHref: "/en/ai-automation" },
];

export default function GuidesHubPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "CollectionPage", "@id": "https://dewank.com/en/guides#page", name: "Dewank guides", description: "Practical guides on marketing, measurement, search, conversion and automation.", url: "https://dewank.com/en/guides", inLanguage: "en" },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://dewank.com/en" }, { "@type": "ListItem", position: 2, name: "Guides", item: "https://dewank.com/en/guides" }] },
    ],
  };

  return (
    <main id="main-content" className="guides-page en-service" lang="en" dir="ltr">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <section className="guides-hero shell">
        <div><span className="guides-label">Guides</span><h1>Clarity before the decision<br/><em>Growth after it</em></h1></div>
        <p>Practical content for business owners and decision-makers. Each guide explains a choice, a cost or a common problem in plain language, and links it to the service that solves it.</p>
      </section>
      <section className="guides-grid shell" aria-label="Dewank guides">
        {guides.map((guide) => (
          <article className="guide-card" key={guide.href}>
            <small>{guide.category}</small>
            <h2>{guide.title}</h2>
            <p>{guide.description}</p>
            <p><Link href={guide.href}>Read the guide <span>→</span></Link></p>
            <p><Link href={guide.serviceHref}>Related service: {guide.service} <span>→</span></Link></p>
          </article>
        ))}
      </section>
      <section className="guides-note shell">
        <h2>These are not news articles</h2>
        <p>Each guide is built around a real question that comes before a business decision, and links to a clear service. We update the guides when the facts change, and state the limits of each recommendation.</p>
      </section>
      <Footer />
    </main>
  );
}
