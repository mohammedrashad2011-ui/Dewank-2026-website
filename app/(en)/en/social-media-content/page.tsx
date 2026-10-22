import "../../../(ar)/services/social-media-content/content-visual-rhythm.css";
import Link from "next/link";
import { enMetadata } from "../_en/metadata";
import { Footer } from "../_en/parity/footer";
import { Header } from "../_en/parity/header";
import { RelatedGuides } from "../_en/parity/related-guides";
import { OfferPrice } from "../_en/lib/localized-price";
import { whatsappHref } from "../_en/lib/site";
// The Arabic social media page's layout and styles, reused unchanged. English-only direction and type overrides follow.
import "../../../(ar)/services/social-media-content/social-media-content.css";
import "../../../(ar)/services/social-media-content/content-spacing-fix.css";
import "../../../(ar)/services/social-media-content/content-guides.css";
import "../_en/parity/service-pages.en.css";
import "../_en/styles/hide-arabic-widgets.css";

export const metadata = enMetadata(
  "Social media management and content",
  "Social media management and content creation for businesses worldwide: strategy, ideas, design, captions, publishing plans and reporting, with a 30-day content package to start.",
  "/en/social-media-content",
);

const deliverables = [
  ["Content strategy", "We define the message, the audience, the content themes, the tone and the business goal before any design begins."],
  ["Ideas and planning", "We turn your goals into an organised content calendar that combines awareness, trust and demand, instead of random posting."],
  ["Design and captions", "Designs consistent with your identity, and clear copy that leads the follower to a simple next step."],
  ["Publishing and development", "Organised publishing, reviews of results, and direction changes based on engagement, enquiries and outcomes."],
];

const scopeItems = [
  ["Platforms and scope", "We choose the platforms that serve your goal, rather than managing every platform. The number is set in the scope, based on your business and audience."],
  ["Volume of content and publishing", "There is no fixed number for every business. We agree the number of posts, stories and videos you can sustain at a consistent quality."],
  ["Writing, design and video", "We state who writes, who designs and who publishes, how many review rounds are included, and when a video needs material from you."],
  ["What is priced separately", "Professional photography, paid advertising budgets and campaign management are separate items, agreed in writing before work starts."],
];

const guideLinks = [
  { href: "/en/social-media-content#pricing", title: "How is social media management priced?", text: "The difference between ongoing management and a defined content package, and what each one covers." },
  { href: "/en/website-design", title: "Followers but few enquiries?", text: "When the problem is the offer, the trust, the calls to action or the website after the click, more posts will not solve it." },
  { href: "/en/digital-marketing", title: "How content fits a marketing budget", text: "Separating content management, campaigns, advertising spend and production before you set a budget." },
];

const faqItems = [
  ["How much does social media management cost?", "It depends on the number of platforms, the type of content, whether video and photography are included, the publishing rhythm and community management. If you need content production only, the 30-day content package is a simpler starting point than full monthly management."],
  ["Is the service just designing posts?", "No. Design is part of a system that starts with strategy and ideas, and includes captions, a publishing plan and continuous improvement."],
  ["Can I start with a one-month package?", "Yes. There is a ready 30-day content package for those who want a fast start, with a defined scope and deliverables, and without a long monthly management contract."],
  ["What is the difference between account management and the 30-day package?", "Monthly management can include continuous publishing, monitoring, reporting and community management, depending on the scope. The 30-day package focuses on producing ideas, designs, captions and a publishing plan within a defined scope."],
  ["Does the service include advertising management?", "Advertising is a separate service. It can be linked to the content plan when the goal is to attract customers and improve conversion."],
  ["How many posts do I need each month?", "There is no number that fits every business. We set it according to your goal, your platforms and your ability to supply material and keep quality consistent, then adjust after reviewing results."],
  ["Will social media management bring sales?", "It can support sales but cannot guarantee them. Results depend on the clarity of the offer, trust, response speed and how easy it is to order. That is why we measure enquiries and qualified leads, not likes alone."],
  ["My account exists but needs tidying up. Do I need full management?", "Not necessarily. If the account needs a bio, a call to action, highlights and a clear visual direction, the 14-day account upgrade may suit you better than monthly management."],
];

export default function SocialMediaContentPage() {
  const contactLink = whatsappHref("Hello Dewank, I would like to discuss social media management and content for my business. My business is: ");
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://dewank.com/en/social-media-content#service",
    name: "Social media management and content creation",
    provider: { "@id": "https://dewank.com/#organization" },
    areaServed: "Worldwide",
    url: "https://dewank.com/en/social-media-content",
    description: "Social media management and content creation for businesses worldwide: strategy, ideas, design, captions, publishing plans and development reporting.",
    inLanguage: "en",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
  };

  return (
    <main id="main-content" className="inner-page content-service-page en-service" lang="en" dir="ltr">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />

      <section className="content-hero shell">
        <div className="content-hero-copy">
          <span className="section-label">Social media management and content</span>
          <h1>Social media that builds<br /><em>presence and demand</em></h1>
          <p>We turn your accounts from scattered posts into a content system with a clear message, ideas, design, captions and a publishing plan that serves a business goal, not only a filled calendar.</p>
          <div className="content-actions">
            <Link className="button primary" href="/en/contact">Request a management scope <span>→</span></Link>
            <Link className="button secondary" href="#pricing">See the 30-day package</Link>
          </div>
        </div>
        <div className="content-orbit" aria-hidden="true"><i /><i /><i /><i /></div>
      </section>

      <section className="content-steps shell">
        <div className="content-section-head"><span className="section-label">What the service includes</span><h2>From strategy to publishing<br /><em>Every step has a purpose</em></h2></div>
        <div className="content-step-grid">{deliverables.map(([title, text], index) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="content-steps content-scope shell" aria-labelledby="content-scope-title">
        <div className="content-section-head"><span className="section-label">Before you commit</span><h2 id="content-scope-title">A clear written scope<br /><em>Before you pay for anything</em></h2></div>
        <div className="content-step-grid">{scopeItems.map(([title, text], index) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="content-system shell">
        <div><span className="section-label">How we work</span><h2>Content is part of the customer journey,<br /><em>not a separate island</em></h2></div>
        <div className="content-system-card"><p>We connect what you publish to what you want the audience to do after watching: follow, save, enquire, visit the website or request a service. That is why the plan starts from the business goal, not the number of posts.</p><Link href="/en/digital-marketing">See digital marketing strategy <span>→</span></Link></div>
      </section>

      <section className="content-offer shell" id="pricing">
        <div><span className="section-label">Monthly management or a defined start?</span><h2>Choose the scope by your need<br /><em>Not by the number of posts alone</em></h2></div>
        <div className="content-offer-card">
          <strong>30-day content package · <OfferPrice offerKey="30-day-content-package" className="content-offer-price" /></strong>
          <p>If your main need is ideas, design, captions and a publishing plan, start with the defined package. If your account needs only tidying, the 14-day account upgrade is a better fit: <OfferPrice offerKey="instagram-14-day-upgrade" className="content-offer-price" />. If you need continuous publishing, monitoring and reporting, we will define a monthly management scope after reviewing your account.</p>
          <p className="content-offer-note">Prices are shown in US dollars by default. Where an approved local price exists for your country, it is shown instead.</p>
          <Link className="button primary" href={contactLink}>Request the 30-day package <span>→</span></Link>
          <br />
          <Link href={contactLink}>Request the account upgrade</Link>
        </div>
      </section>

      <section className="content-guides shell" aria-labelledby="content-guides-title">
        <div className="content-guides-head">
          <div><span className="section-label">Before you decide</span><h2 id="content-guides-title">Start with the question you face<br /><em>Then choose the right scope of content</em></h2></div>
          <p>If your search starts with price, with weak enquiries, or with the whole marketing budget, these pages take you to the right place rather than mixing intentions in one offer.</p>
        </div>
        <div className="content-guides-grid">
          {guideLinks.map((guide, index) => (
            <Link className="content-guide-card" href={guide.href} key={guide.href}>
              <div className="content-guide-top"><span>Related page 0{index + 1}</span><span className="content-guide-arrow" aria-hidden="true">↗</span></div>
              <h3>{guide.title}</h3>
              <p>{guide.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="content-faq shell">
        <span className="section-label">Frequently asked questions</span><h2>Before you choose a package</h2>
        <div>{faqItems.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="content-final shell"><h2>Make content work<br /><em>inside a clear plan</em></h2><Link className="button primary" href={contactLink}>Discuss your needs <span>→</span></Link></section>
      <RelatedGuides guides={[{ href: "/en/guides/social-media-not-generating-leads", title: "Your account looks good but does not bring customers" }]} />
      <Footer />
    </main>
  );
}
