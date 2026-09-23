import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../components/site-shell";
import { createMetadata, organizationId, siteName, siteUrl } from "../../lib/seo";
import "./bithan-case-study.css";

const title = "BITHAN Fine Jewelry Brand Naming & Identity Case Study";
const description = "BITHAN case study for a Qatar fine-jewelry brand: structured naming and screening, client-selected name, Arabic-English identity, logo suite, palette and applications.";
const socialImagePath = "/work/bithan/opengraph-image";
const whatsappHref = "https://wa.me/97339066649?text=" + encodeURIComponent("Hi Dewank, I saw the BITHAN case study and would like to discuss a brand naming / identity project.");
const emailHref = "mailto:hello@dewank.com?subject=" + encodeURIComponent("Brand project enquiry — BITHAN case study");

const baseMetadata = createMetadata({
  title: `${title} | Dewank`,
  description,
  path: "/work/bithan",
  socialImagePath,
  keywords: [
    "fine jewelry branding",
    "jewelry brand identity",
    "brand naming case study",
    "Arabic logo design",
    "bilingual brand identity",
    "luxury branding Qatar",
    "تصميم هوية مجوهرات",
    "تسمية علامة تجارية",
    "هوية بصرية عربية",
    "BITHAN",
  ],
});

export const metadata: Metadata = {
  ...baseMetadata,
  category: "Branding Case Study",
  alternates: {
    canonical: `${siteUrl}/work/bithan`,
    languages: {
      en: `${siteUrl}/work/bithan`,
      "x-default": `${siteUrl}/work/bithan`,
    },
  },
  openGraph: {
    ...baseMetadata.openGraph,
    type: "article",
    locale: "en_US",
    publishedTime: "2026-09-23T00:00:00+03:00",
    modifiedTime: "2026-09-23T00:00:00+03:00",
  },
};

const successCriteria = [
  ["Quiet luxury", "Premium and quietly confident rather than loud or obviously luxurious."],
  ["Arabic / English ease", "Comfortable to say, read and use across both languages."],
  ["Category distance", "Distinctive without relying on direct category words such as Gold, Diamond or Jewels."],
  ["Scalability", "Strong enough to grow beyond one stone, collection or product type."],
  ["Story depth", "A name with enough meaning to support a richer brand story and identity."],
  ["Visual presence", "A name capable of carrying a strong wordmark, packaging system and long-term brand equity."],
];

const namingTerritories = [
  ["A", "Arabic Poetic Heritage", "Rare Arabic roots, cultural depth and elegant sound."],
  ["B", "Quiet Prestige", "Presence, poise and value without obvious luxury language."],
  ["C", "Invented Arabic-International", "Ownable constructions with credible linguistic logic, not random letter combinations."],
  ["D", "Symbolic Story Name", "Names built from imagery such as legacy, light, memory, time and enduring value."],
];

const namingProcess = [
  "Discovery & strategic brief",
  "Broad internal generation",
  "Aggressive filtering",
  "Shortlist with rationale",
  "Client feedback & refinement",
  "Domain and digital checks",
  "Preliminary conflict screening",
  "Final recommendation",
];

const firstShortlist = ["TAFAROD", "MAKNOUNAH", "KUNNH", "NAFAYS", "TeLaAD", "AZAREON"];
const refinement = ["ARSINA", "HAMSINA", "ORSINA", "AURSINA", "AUSINA", "KLEOSINA"];

const logoSuite = [
  ["01", "Primary Logo", "Full color on dark — preferred"],
  ["02", "Full Color (Light)", "For light backgrounds"],
  ["03", "Flat Logo (Dark)", "Single color for versatile use"],
  ["04", "Monochrome (Dark)", "For print and single-color use"],
  ["05", "Monochrome (Light)", "For dark backgrounds"],
  ["06", "Arabic Mark Only", "For special applications"],
  ["07", "Icon / Symbol", "For social media, favicon and compact use"],
];

const colors = [
  { name: "Deep Sapphire", hex: "#234F82", rgb: "35 · 79 · 130", cmyk: "73 · 39 · 0 · 49" },
  { name: "Azure Blue", hex: "#3E74AE", rgb: "62 · 116 · 174", cmyk: "64 · 33 · 0 · 32" },
  { name: "Ice Mist", hex: "#93BFEA", rgb: "147 · 191 · 234", cmyk: "37 · 18 · 0 · 8" },
  { name: "Frost Light", hex: "#C8E4FA", rgb: "200 · 228 · 250", cmyk: "20 · 9 · 0 · 2" },
  { name: "Rich Black", hex: "#000000", rgb: "0 · 0 · 0", cmyk: "0 · 0 · 0 · 100" },
  { name: "White", hex: "#FFFFFF", rgb: "255 · 255 · 255", cmyk: "0 · 0 · 0 · 0" },
];

const applications = [
  ["Jewelry Box", "A more precious tomorrow."],
  ["Shopping Bag", "Elegance carries further."],
  ["Business Card", "A lasting impression."],
  ["Social Media Profile", "Beauty in every detail."],
];

const faqs = [
  ["What did the BITHAN project include?", "The portfolio case combines brand naming and strategy with the final visual identity: naming territories, shortlist and refinement, preliminary screening, the client-selected BITHAN name, original sketch development, logo suite, palette, variants, applications and final production assets."],
  ["Was BITHAN selected by the client?", "Yes. The naming case study records BITHAN as the final name selected by the client after structured exploration, shortlists and refinement rounds."],
  ["Did the naming screening guarantee trademark registration?", "No. Domain, digital and conflict checks were preliminary practical screening only. Final legal trademark clearance should be handled by qualified counsel before launch."],
  ["What identity files and assets were delivered?", "The approved delivery included the primary metallic logo, flat dark and light versions, monochrome versions, color palette and print specs, sketch concept page, application mockups, and source formats including PNG, PDF, SVG, AI and EPS."],
];

const delivery = [
  ["Primary Metallic Logo", "Final approved full-color metallic logo for premium use across all brand touchpoints."],
  ["Flat Logo on Dark", "Optimized flat version for dark backgrounds, digital and print."],
  ["Flat Logo on Light", "Optimized flat version for light backgrounds, digital and print."],
  ["Monochrome Versions", "Black, white and grayscale variations for flexible use cases."],
  ["Color Palette & Print Specs", "Approved brand colors with precise RGB, CMYK and HEX values."],
  ["Sketch Concept Page", "The original hand-drawn concept that inspired the final design."],
  ["Application Mockups", "Premium packaging, business card and social-profile applications."],
  ["Source File Formats", "High-resolution, ready-to-use files in PNG / PDF / SVG / AI / EPS."],
];

export default function BithanCaseStudyPage() {
  const url = `${siteUrl}/work/bithan`;
  const image = `${siteUrl}${socialImagePath}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#case-study`,
        headline: title,
        description,
        url,
        mainEntityOfPage: url,
        image,
        datePublished: "2026-09-23",
        dateModified: "2026-09-23",
        inLanguage: ["en", "ar"],
        author: { "@id": organizationId },
        publisher: { "@id": organizationId },
        about: [
          "Brand Naming",
          "Brand Strategy",
          "Visual Identity",
          "Arabic Logo Design",
          "Fine Jewelry",
          "Qatar",
        ],
        keywords: "fine jewelry branding, brand naming, visual identity, Arabic logo, bilingual brand identity, BITHAN",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: siteName, item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Work", item: `${siteUrl}/work` },
          { "@type": "ListItem", position: 3, name: "BITHAN Case Study", item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  return (
    <main className="bithan-case-page">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="bithan-case-content" dir="ltr" lang="en">
        <section className="bithan-hero shell">
          <div className="bithan-hero-copy">
            <span className="bithan-kicker">FINE JEWELRY · QATAR · 2026</span>
            <h1>BITHAN Fine Jewelry<br/><em>Brand Naming &amp; Identity Case Study.</em></h1>
            <p className="bithan-hero-lede">A premium jewelry brand built from the name outward: positioning, structured naming, screening, a client-selected final name, then an Arabic-English visual identity designed for packaging, digital touchpoints and future growth.</p>
            <div className="bithan-hero-actions">
              <a className="button primary" href="#case-overview">Explore the case study <span>↓</span></a>
              <a className="button secondary" href={whatsappHref} target="_blank" rel="noopener noreferrer">Discuss a branding project <span>↗</span></a>
            </div>
            <dl className="bithan-facts" aria-label="Project facts">
              <div><dt>Scope</dt><dd>Naming · Strategy · Visual Identity</dd></div>
              <div><dt>Market</dt><dd>Fine Jewelry · Qatar</dd></div>
              <div><dt>Outcome</dt><dd>BITHAN selected by the client</dd></div>
              <div><dt>Identity</dt><dd>Arabic + English brand system</dd></div>
            </dl>
          </div>
          <figure className="bithan-hero-visual">
            <img src="/work/bithan/hero.svg" alt="BITHAN Fine Jewelry final approved metallic identity" fetchPriority="high" decoding="async" />
            <figcaption>Final approved direction · September 2026</figcaption>
          </figure>
        </section>

        <nav className="bithan-jump shell" aria-label="Case study sections">
          <a href="#case-overview">Overview</a>
          <a href="#naming">Naming</a>
          <a href="#original-sketch">Original Sketch</a>
          <a href="#logo-suite">Logo Suite</a>
          <a href="#palette">Palette</a>
          <a href="#evolution">Evolution</a>
          <a href="#applications">Applications</a>
          <a href="#delivery">Delivery</a>
        </nav>

        <section className="bithan-overview shell" id="case-overview">
          <div className="bithan-section-copy">
            <span className="bithan-eyebrow">01 / THE CHALLENGE</span>
            <h2>Build a name that could become a brand asset, <em>not just a nice word.</em></h2>
            <p>The brand was launching online in Qatar with ambition to grow into a broader physical and commercial presence. The name needed to carry prestige, work visually and verbally, and remain useful as the business expanded.</p>
          </div>
          <div className="bithan-criteria-grid">
            {successCriteria.map(([titleText, text]) => (
              <article key={titleText}><h3>{titleText}</h3><p>{text}</p></article>
            ))}
          </div>
        </section>

        <section className="bithan-naming" id="naming">
          <div className="shell">
            <div className="bithan-section-head">
              <div><span className="bithan-eyebrow">02 / NAMING STRATEGY</span><h2>Four territories <em>before names.</em></h2></div>
              <p>Instead of jumping straight into name generation, the project first defined the linguistic and emotional spaces worth exploring. That made the work coherent and made feedback more useful.</p>
            </div>

            <div className="bithan-territories">
              {namingTerritories.map(([letter, name, text]) => (
                <article key={letter}><span>{letter}</span><h3>{name}</h3><p>{text}</p></article>
              ))}
            </div>

            <div className="bithan-process-block">
              <div>
                <span className="bithan-eyebrow">PROCESS &amp; SCREENING</span>
                <h3>Generate broadly. Filter aggressively. Present selectively.</h3>
                <p>Names were removed before presentation when they failed on pronunciation, category fit, scalability, distinctiveness or practical availability.</p>
              </div>
              <ol>
                {namingProcess.map((step, index) => <li key={step}><b>{String(index + 1).padStart(2, "0")}</b><span>{step}</span></li>)}
              </ol>
            </div>

            <details className="bithan-shortlist">
              <summary>See sample shortlist &amp; refinement directions</summary>
              <div>
                <span>First shortlist</span>
                <p>{firstShortlist.join(" · ")}</p>
                <span>Refinement round</span>
                <p>{refinement.join(" · ")}</p>
              </div>
            </details>

            <div className="bithan-selected-name">
              <small>FINAL NAME SELECTED BY THE CLIENT</small>
              <strong>BITHAN</strong>
              <p>The client ultimately selected BITHAN after the structured exploration of positioning, naming territories, shortlists and refinement rounds.</p>
            </div>
            <p className="bithan-legal-note">Domain and conflict checks were used as practical preliminary screening, not legal clearance. Final trademark verification should be handled by qualified counsel before launch.</p>
          </div>
        </section>

        <section className="bithan-sketch shell" id="original-sketch">
          <figure className="bithan-visual-frame bithan-sketch-image">
            <img src="/work/bithan/sketch.svg" alt="Original hand-drawn BITHAN Arabic sketch" loading="lazy" decoding="async" />
          </figure>
          <div className="bithan-section-copy">
            <span className="bithan-eyebrow">03 / ORIGINAL SKETCH</span>
            <h2>The first hand-drawn concept <em>behind the final identity.</em></h2>
            <p>The identity began as a hand-drawn Arabic exploration. The final system preserved that distinctive silhouette and spirit while refining the construction into a more polished, luxurious and contemporary expression.</p>
            <div className="bithan-principles">
              <div><b>GEOMETRIC</b><span>Rooted in structure</span></div>
              <div><b>MODERN</b><span>A contemporary expression</span></div>
              <div><b>JEWEL-LIKE</b><span>Inspired by brilliance</span></div>
            </div>
            <blockquote>Same essence. A brighter tomorrow.</blockquote>
          </div>
        </section>

        <section className="bithan-dark-panel" id="logo-suite">
          <div className="shell">
            <div className="bithan-section-head">
              <div><span className="bithan-eyebrow">04 / FINAL LOGO SUITE</span><h2>One signature. <em>Seven usable forms.</em></h2></div>
              <p>The approved suite gives the identity enough flexibility to work across premium packaging, print, social, small digital surfaces and light or dark backgrounds without losing recognition.</p>
            </div>
            <figure className="bithan-editorial-visual">
              <img src="/work/bithan/logo-suite.svg" alt="BITHAN final logo suite with primary, light, flat, monochrome, Arabic mark and icon variants" loading="lazy" decoding="async" />
            </figure>
            <div className="bithan-signature-note">
              <span className="bithan-eyebrow">OUR SIGNATURE</span>
              <p>The BITHAN logo is a harmonious fusion of Arabic heritage and modern luxury. Its refined geometry and jewel-like forms reflect the brilliance, precision and timeless beauty at the heart of the brand. The suite was designed to keep usage consistent and elegant across touchpoints.</p>
              <strong>Legacy in every detail.</strong>
            </div>
            <div className="bithan-logo-legend">
              {logoSuite.map(([n, name, use]) => <article key={n}><span>{n}</span><h3>{name}</h3><p>{use}</p></article>)}
            </div>
          </div>
        </section>

        <section className="bithan-palette-section shell" id="palette">
          <div className="bithan-section-head">
            <div><span className="bithan-eyebrow">05 / MASTER PALETTE &amp; PRINT SPECS</span><h2>Approved flat colors <em>for print and digital use.</em></h2></div>
            <p>The palette uses deep sapphire and progressively lighter blues to create a cool, crystalline luxury register, balanced by rich black and white for contrast and flexibility.</p>
          </div>
          <div className="bithan-palette">
            {colors.map((color) => (
              <article key={color.name}>
                <span className="bithan-swatch" style={{ background: color.hex }} data-light={color.hex === "#FFFFFF" ? "true" : undefined} />
                <h3>{color.name}</h3>
                <dl>
                  <div><dt>HEX</dt><dd>{color.hex}</dd></div>
                  <div><dt>RGB</dt><dd>{color.rgb}</dd></div>
                  <div><dt>CMYK</dt><dd>{color.cmyk}</dd></div>
                </dl>
              </article>
            ))}
          </div>
          <aside className="bithan-approved-use">
            <b>Approved use</b>
            <p>These flat colors are approved for print materials and social media use. Exact color values should be maintained for brand consistency.</p>
          </aside>
        </section>

        <section className="bithan-variants">
          <div className="shell bithan-variants-grid">
            <div className="bithan-section-copy">
              <span className="bithan-eyebrow">06 / FINAL FLAT COLOR VARIANTS</span>
              <h2>Approved logo use <em>on dark and light backgrounds.</em></h2>
              <p>The final approved hero mark uses the version with the kasra on the letter B. The version without the kasra is an approved alternate and should be used only when technical or layout constraints make it necessary.</p>
              <div className="bithan-usage-note">
                <b>Primary</b><span>With kasra · preferred hero mark</span>
                <b>Alternate</b><span>Without kasra · technical/layout fallback</span>
              </div>
            </div>
            <figure className="bithan-editorial-visual">
              <img src="/work/bithan/flat-variants.svg" alt="BITHAN approved logo variants with and without kasra on dark and light backgrounds" loading="lazy" decoding="async" />
            </figure>
          </div>
        </section>

        <section className="bithan-evolution shell" id="evolution">
          <figure className="bithan-editorial-visual">
            <img src="/work/bithan/evolution.svg" alt="BITHAN sketch to final evolution showing geometric construction, jewel-like facets and refined Arabic wordmark" loading="lazy" decoding="async" />
          </figure>
          <div className="bithan-section-copy">
            <span className="bithan-eyebrow">07 / SKETCH TO FINAL EVOLUTION</span>
            <h2>From original concept <em>to refined brand mark.</em></h2>
            <div className="bithan-evolution-notes">
              <article><b>Geometric construction</b><p>Rooted in precise proportions and balanced structure.</p></article>
              <article><b>Jewel-like facets</b><p>Crystalline details connect the mark to the world of fine jewelry.</p></article>
              <article><b>Refined Arabic wordmark</b><p>A fluid form with a more contemporary, controlled finish.</p></article>
              <article><b>Final luxury finish</b><p>A luminous identity designed to make a lasting impression.</p></article>
            </div>
          </div>
        </section>

        <section className="bithan-applications" id="applications">
          <div className="shell">
            <div className="bithan-section-head">
              <div><span className="bithan-eyebrow">08 / BRAND APPLICATIONS</span><h2>Selected premium <em>applications.</em></h2></div>
              <p>The approved identity was tested across key touchpoints to make sure the mark, color and luxury tone stayed coherent beyond the presentation page.</p>
            </div>
            <figure className="bithan-editorial-visual bithan-app-visual">
              <img src="/work/bithan/applications.svg" alt="BITHAN applications on jewelry box, shopping bag, business card and social media profile" loading="lazy" decoding="async" />
            </figure>
            <div className="bithan-application-captions">
              {applications.map(([name, line], index) => <article key={name}><span>{String(index + 1).padStart(2, "0")}</span><h3>{name}</h3><p>{line}</p></article>)}
            </div>
          </div>
        </section>

        <section className="bithan-delivery shell" id="delivery">
          <div className="bithan-section-head">
            <div><span className="bithan-eyebrow">09 / FINAL DELIVERY</span><h2>Approved brand assets <em>and presentation summary.</em></h2></div>
            <p>The final system was delivered for real-world use, with metallic, flat and monochrome variants, print specifications, applications and production-ready source formats.</p>
          </div>
          <figure className="bithan-delivery-visual">
            <img src="/work/bithan/delivery-logos.svg" alt="BITHAN final metallic logo on dark and light backgrounds" loading="lazy" decoding="async" />
          </figure>
          <div className="bithan-delivery-grid">
            {delivery.map(([name, text], index) => <article key={name}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{name}</h3><p>{text}</p></div></article>)}
          </div>
        </section>

        <section className="bithan-faq shell" aria-labelledby="bithan-faq-title">
          <div className="bithan-section-head">
            <div><span className="bithan-eyebrow">10 / CASE STUDY FAQ</span><h2 id="bithan-faq-title">Clear answers <em>before a brand conversation.</em></h2></div>
            <p>Key project facts for clients evaluating naming, identity and bilingual brand-system work.</p>
          </div>
          <div className="bithan-faq-list">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="bithan-outcome shell">
          <div>
            <span className="bithan-eyebrow">THE RESULT</span>
            <h2>A brand system designed to be <em>remembered, reproduced and expanded.</em></h2>
          </div>
          <div>
            <p>BITHAN moved from a naming challenge to a client-selected name and then into a complete identity system with a distinctive Arabic signature, bilingual usage, controlled logo variants, production color specifications and premium applications.</p>
            <p className="bithan-outcome-note">No performance metric is claimed here. The value of this case is the quality and completeness of the strategic-to-visual brand system.</p>
            <div className="bithan-outcome-links">
              <a className="button primary" href={whatsappHref} target="_blank" rel="noopener noreferrer">Discuss your brand project <span>↗</span></a>
              <a className="button secondary" href={emailHref}>Email Dewank</a>
              <Link className="button secondary" href="/services/brand-naming">Brand naming service</Link>
              <Link className="button secondary" href="/branding">Brand strategy &amp; identity</Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
