import Link from "next/link";
import { enMetadata } from "../../_en/metadata";
import { Footer } from "../../_en/parity/footer";
import { Header } from "../../_en/parity/header";
import { OfferPrice } from "../../_en/lib/localized-price";
import { whatsappHref } from "../../_en/lib/site";
// The Arabic small business website offer's layout and styles, reused unchanged. English-only direction and type overrides follow.
import "../../../../(ar)/offers/offers-page.css";
import "../../../../(ar)/offers/offer-trust.css";
import "../../../../(ar)/offers/small-business-website/small-business-website.css";
import "../../_en/parity/service-pages.en.css";
import "../../_en/styles/hide-arabic-widgets.css";

export const metadata = enMetadata(
  "Small business website: up to five pages, ready to launch",
  "A defined small business website for businesses worldwide: up to five pages, responsive design and development, WhatsApp and a contact form, basic analytics and SEO, and a full review before launch. Not an online shop.",
  "/en/offers/small-business-website",
);

const deliverables = [
  ["Up to five pages", "A focused company website of up to five core pages, depending on the business, such as home, services, about, contact and one additional page."],
  ["Responsive design", "A clear layout that works on mobile, tablet and desktop, with priority given to clarity and an easy way to get in touch."],
  ["Website development", "The design built into fast, usable pages, with the core links and components checked."],
  ["WhatsApp and a contact form", "A clear contact route through WhatsApp and a basic form to receive enquiries."],
  ["Basic analytics", "Google Analytics connected, and the core interactions the site's technical setup can measure."],
  ["Basic SEO", "Titles, descriptions, legal links, structured data and a sitemap for the pages included."],
  ["A pre-launch review", "Testing on mobile and desktop, the links, the forms and navigation before the final version is published."],
  ["Seven days of support after launch", "A short technical follow-up to fix any errors that appear after the site goes live."],
];

const process = [
  ["01", "We define the pages", "We understand the business, the services and the goal, then define the five pages or fewer and what each one needs."],
  ["02", "We arrange the content", "We set the order, headings and information required before the design details begin."],
  ["03", "We design and build", "We build the interface, make it responsive, and connect the contact route and the basic analytics."],
  ["04", "We review and launch", "We test the site, close the agreed feedback, and prepare the final version for launch."],
];

const fitFor = [
  "A company or service office that needs a professional presence rather than relying on social media alone.",
  "A new project that needs a simple, quick website before campaigns or business outreach.",
  "A business with clear services that does not need an online shop or a complex software system.",
  "A client who wants a known cost and scope from the start, rather than an open-ended project.",
];

const exclusions = [
  "An online shop, a payment gateway or stock management.",
  "Booking systems, memberships or custom dashboards and bespoke programming.",
  "CRM, API or complex automation integrations.",
  "A large volume of written content, or specialist photography and video production.",
  "Domain, hosting and other paid external services, unless agreed in a separate offer.",
  "Monthly SEO or continuous content management after launch.",
];

const faqItems = [
  ["How many pages does the package include?", "Up to five core pages. If the project needs more pages or special page types, the additional work is priced before production begins."],
  ["Does the price include the domain and hosting?", "The base price covers the design, development and preparation of the site. The domain, hosting and any paid external services are not part of the base package unless they are agreed separately."],
  ["Do you write the website content?", "We help arrange and word the headings and core messages within the pages included. Long, specialist content or large volumes of articles need an additional scope."],
  ["Is the site suitable for mobile?", "Yes. The package includes responsive design and development, with a review on the main screen sizes before launch."],
  ["Does it include SEO?", "It includes the technical foundation for the pages included, such as titles, descriptions, structured data and a sitemap. Ongoing competition for keywords needs a separate SEO service."],
  ["Can a shop be added later?", "The scope for expansion can be assessed later, but an online shop is not part of this package and may need its own structure or development project."],
  ["How long does it take?", "Usually 7 to 12 working days after we receive the content and information and approve the direction. The timeline changes if feedback or materials are delayed."],
];

export default function SmallBusinessWebsiteOfferPage() {
  const contactLink = whatsappHref("Hello Dewank, I would like a small business website of up to five pages. My business is: ");
  const url = "https://dewank.com/en/offers/small-business-website";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "Small business website, ready to launch",
        description: "Design and development of a small company website of up to five pages, with WhatsApp and contact form, basic analytics and SEO, and a pre-launch review.",
        serviceType: ["Website Design", "Website Development", "Basic SEO"],
        provider: { "@id": "https://dewank.com/#organization" },
        areaServed: "Worldwide",
        url,
        inLanguage: "en",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://dewank.com/en" },
          { "@type": "ListItem", position: 2, name: "Offers", item: "https://dewank.com/en/offers" },
          { "@type": "ListItem", position: 3, name: "Small business website", item: url },
        ],
      },
    ],
  };

  return (
    <main id="main-content" className="inner-page offers-page small-website-page en-service" lang="en" dir="ltr">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

      <section className="shell offer-detail-hero small-website-hero">
        <div>
          <div className="offer-availability"><span className="offer-spots-available"><i aria-hidden="true" /><strong>7–12</strong> working days</span></div>
          <h1>A small website.<br/><em>Ready to work under your name.</em></h1>
          <p>A clear package for businesses that need a professional company website without a large project: up to five pages, responsive design and development, WhatsApp and a contact form, analytics, basic SEO and a full pre-launch setup.</p>
          <div className="small-website-answer"><b>What do you get?</b><span>A complete company website with a defined scope. It is not a single landing page, and it is not an online shop.</span></div>
        </div>
        <aside className="offer-price-panel small-website-price-panel">
          <small>Complete package from</small>
          <OfferPrice offerKey="small-business-website" className="offer-price" />
          <p>Includes up to five pages. The domain, hosting, bespoke programming and paid external services are not included.</p>
          <a className="button primary" href={contactLink} target="_blank" rel="noopener noreferrer">Start your website on WhatsApp <span>→</span></a>
        </aside>
      </section>

      <section className="shell small-website-proof">
        <div className="small-website-proof-copy">
          <span className="section-label">A clear scope</span>
          <h2>Not every project<br/><em>needs a large website.</em></h2>
          <p>Often what a business needs is a well-ordered site that explains who it is, what it offers, and how a customer can contact it. The package closes that gap quickly, without paying for features you will not use.</p>
        </div>
        <div className="small-site-map" aria-label="Example structure of a small website">
          <div className="small-site-map-top"><b>Small website structure</b><small>Up to five pages</small></div>
          <div className="small-site-home">Home</div>
          <div className="small-site-pages"><span>Services</span><span>About</span><span>Contact</span><span>One extra page</span></div>
          <div className="small-site-path"><span>Visit</span><b>→</b><span>Understand the service</span><b>→</b><span>Contact</span></div>
        </div>
      </section>

      <section className="shell offer-deliverables small-website-deliverables">
        <div><span className="section-label">What the package includes</span><h2>All the essentials.<br/><em>Nothing padded.</em></h2></div>
        <div className="deliverable-list">{deliverables.map(([title, text]) => <article className="deliverable-item" key={title}><b>{title}</b><p>{text}</p></article>)}</div>
      </section>

      <section className="shell small-website-process">
        <div className="small-website-process-head"><span className="section-label">How it is delivered</span><h2>From the first page.<br/><em>To launch.</em></h2></div>
        <div className="small-website-process-grid">{process.map(([number, title, text]) => <article key={number}><b>{number}</b><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="shell offer-fit small-website-fit">
        <span className="section-label">Is the package right for you?</span>
        <h2>Suited to a company website.<br/><em>Not to every type of project.</em></h2>
        <div className="offer-fit-grid">
          <article className="offer-fit-card good"><h3>Suits you if</h3><ul>{fitFor.map((item) => <li key={item}>{item}</li>)}</ul></article>
          <article className="offer-fit-card limits"><h3>Not included</h3><ul>{exclusions.map((item) => <li key={item}>{item}</li>)}</ul></article>
        </div>
      </section>

      <section className="shell small-website-scope-note">
        <div><span className="section-label">Before you start</span><h2>If your needs are bigger,<br/><em>we will not squeeze them into a small package.</em></h2></div>
        <div><p>If you need a shop, a booking system, memberships, a CRM, automation, a large number of pages or a full website strategy, it is better to move to our website design and development service than to stretch this package until it loses its clarity.</p><Link href="/en/website-design">See the website design and development service <span>→</span></Link></div>
      </section>

      <section className="shell offer-faq small-website-faq">
        <span className="section-label">Frequently asked questions</span>
        <h2>Before you book.</h2>
        <div>{faqItems.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="shell offer-final-cta small-website-final">
        <span className="section-label">Ready to start?</span>
        <h2>Give your business<br/><em>a real digital address.</em></h2>
        <p>Start with a clear, fast website, and expand it only when the business actually needs it.</p>
        <a className="button primary" href={contactLink} target="_blank" rel="noopener noreferrer">Start your website now <span>→</span></a>
        <div className="small-website-links"><Link href="/en/offers/landing-page-package">Need a landing page only?</Link><Link href="/en/website-design">Need a larger website?</Link></div>
      </section>

      <Footer />
    </main>
  );
}
