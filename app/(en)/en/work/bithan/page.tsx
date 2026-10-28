import Link from "next/link";
import { enMetadata } from "../../_en/metadata";
import { Footer } from "../../_en/parity/footer";
import { Header } from "../../_en/parity/header";
import { OfferPrice } from "../../_en/lib/localized-price";
import { whatsappHref, briefMailto } from "../../_en/lib/site";
// The Arabic BITHAN case study's layout and styles, reused unchanged. English-only direction and type overrides follow.
import "../../../../(ar)/work/bithan/bithan-case-study.css";
import "../../_en/parity/service-pages.en.css";
import "../../_en/styles/hide-arabic-widgets.css";
import "./delivery-layout.en.css";

export const metadata = enMetadata(
  "BITHAN case study: naming and fine jewellery identity",
  "BITHAN, a fine jewellery brand in Qatar: naming strategy and preliminary checks, the client chosen name, then a bilingual identity with applications.",
  "/en/work/bithan",
);

const successCriteria = [
  ["Quiet prestige", "A refined, confident name that does not rely on direct or loud luxury language."],
  ["Easy in Arabic and English", "Easy to pronounce, read and use in both languages."],
  ["Avoids generic descriptive names", "Distinctive, without relying on category words such as Gold, Diamond or Jewels."],
  ["Room to grow", "Able to extend to new collections, products and channels, not only one product."],
  ["Story depth", "Has a layer of meaning that can carry the brand's story and emotional connection."],
  ["Visual presence", "Can carry a logo, an identity, packaging and long-term brand value."],
];

const namingTerritories = [
  ["A", "Poetic Arabic heritage", "Rare Arabic roots, cultural depth and an elegant voice."],
  ["B", "Quiet prestige", "Presence and value without direct luxury language."],
  ["C", "Modern international Arabic", "Constructions that can be owned, with clear linguistic and phonetic logic, not random letters."],
  ["D", "A symbolic name that can be told", "Names built around heritage, light, memory, time and lasting value."],
];

const namingProcess = [
  "Discovery and strategic brief",
  "Broad internal generation",
  "Aggressive filtering",
  "Shortlist with rationale",
  "Client feedback and refinement",
  "Domain and digital checks",
  "Preliminary conflict screening",
  "Final recommendation",
];

const firstShortlist = ["TAFAROD", "MAKNOUNAH", "KUNNH", "NAFAYS", "TeLaAD", "AZAREON"];
const refinement = ["ARSINA", "HAMSINA", "ORSINA", "AURSINA", "AUSINA", "KLEOSINA"];

const logoSuite = [
  ["01", "Primary Logo", "Full colour version on dark backgrounds, the preferred use."],
  ["02", "Full Colour Light", "For use on light backgrounds."],
  ["03", "Flat Logo Dark", "A single-colour version for flexible use."],
  ["04", "Monochrome Dark", "For print and single-colour applications."],
  ["05", "Monochrome Light", "For use on dark backgrounds."],
  ["06", "Arabic Mark", "For applications that need a short Arabic signature."],
  ["07", "Icon / Symbol", "For social media, small digital spaces and favicons."],
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
  ["Jewellery box", "Packaging"],
  ["Shopping bag", "Retail"],
  ["Business card", "Stationery"],
  ["Social media profile", "Digital"],
];

const delivery = [
  ["Primary Metallic Logo", "The approved final metallic logo for premium uses."],
  ["Flat Logo on Dark", "A flat version optimised for dark backgrounds, print and digital use."],
  ["Flat Logo on Light", "A flat version optimised for light backgrounds, print and digital use."],
  ["Monochrome Versions", "Black, white and single-colour versions for a range of uses."],
  ["Colour Palette & Print Specs", "Approved colours with HEX, RGB and CMYK values for print and digital use."],
  ["Sketch Concept Page", "The original hand sketch from which the identity direction began."],
  ["Application Mockups", "Selected applications for packaging, business cards and the digital presence."],
  ["Source File Formats", "High-resolution, usable files: PNG, PDF, SVG, AI and EPS."],
];

const faqs = [
  ["What did the BITHAN project include?", "The project covered naming strategy, naming routes, shortlists, refinement and preliminary checks. After the client chose the name, the identity was developed from the sketch to the final logo, the colour system, the applications and the source files."],
  ["Did the client choose the name BITHAN?", "Yes. The case records that the client chose BITHAN after strategic exploration of naming routes, shortlists and development rounds."],
  ["Does the preliminary check guarantee trademark registration?", "No. The domain, online presence and conflict checks were practical preliminary checks, not a legal opinion. Final legal verification should be carried out with the competent authority or a qualified adviser before registration and launch."],
  ["What was delivered in the final identity?", "The delivery included the primary metallic logo, flat versions for dark and light backgrounds, monochrome versions, the colour palette and print specifications, the sketch page, identity applications, and source files in PNG, PDF, SVG, AI and EPS."],
];

export default function BithanCaseStudyPage() {
  const contactLink = whatsappHref("Hello Dewank, I read the BITHAN case study and would like to discuss a naming or identity project for my brand.");
  const emailLink = briefMailto("BITHAN case study enquiry");
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://dewank.com/en/work/bithan#case-study",
        headline: "BITHAN case study: naming and fine jewellery identity",
        description: "BITHAN, a fine jewellery brand in Qatar: naming strategy and preliminary checks, the name chosen by the client, then a bilingual identity with applications and source files.",
        url: "https://dewank.com/en/work/bithan",
        mainEntityOfPage: "https://dewank.com/en/work/bithan",
        datePublished: "2026-09-23",
        dateModified: "2026-09-24",
        inLanguage: "en",
        author: { "@id": "https://dewank.com/#organization" },
        publisher: { "@id": "https://dewank.com/#organization" },
        about: ["Brand naming", "Brand strategy", "Visual identity design", "Fine jewellery branding", "Qatar"],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://dewank.com/en" },
          { "@type": "ListItem", position: 2, name: "Work", item: "https://dewank.com/en/work" },
          { "@type": "ListItem", position: 3, name: "BITHAN case study", item: "https://dewank.com/en/work/bithan" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
      },
    ],
  };

  return (
    <main id="main-content" className="bithan-case-page en-service" lang="en" dir="ltr">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

      <div className="bithan-case-content">
        <section className="bithan-hero shell">
          <div className="bithan-hero-copy">
            <span className="bithan-kicker">FINE JEWELRY · QATAR · 2026</span>
            <h1>BITHAN case study:<br /><em>from naming a jewellery brand to a complete visual identity</em></h1>
            <p className="bithan-hero-lede">A project for a fine jewellery house in Qatar. It started with naming strategy, checks and development. After the client chose the name, the work moved on to an Arabic and English identity that works across packaging, print, the digital presence and future growth.</p>
            <div className="bithan-hero-actions">
              <a className="button primary" href="#case-overview">View the case study <span>↓</span></a>
              <a className="button secondary" href={contactLink} target="_blank" rel="noopener noreferrer">Discuss a brand project <span>↗</span></a>
            </div>
            <dl className="bithan-facts" aria-label="Project details">
              <div><dt>Scope</dt><dd>Naming · Strategy · Visual identity</dd></div>
              <div><dt>Market</dt><dd>Fine jewellery · Qatar</dd></div>
              <div><dt>Result</dt><dd>Name chosen by the client</dd></div>
              <div><dt>System</dt><dd>Arabic and English identity</dd></div>
            </dl>
          </div>
          <figure className="bithan-hero-visual">
            <img src="/en/work/bithan/hero.svg" width={1126} height={1591} alt="Final approved identity cover for BITHAN Fine Jewelry" fetchPriority="high" decoding="async" />
            <figcaption>Final approved direction · September 2026</figcaption>
          </figure>
        </section>

        <div className="bithan-proof-strip shell" aria-label="Project proof">
          <span>A name chosen by the client</span>
          <span>Final identity approved</span>
          <span>PNG · PDF · SVG · AI · EPS</span>
        </div>

        <nav className="bithan-jump shell" aria-label="Sections of the case study">
          <a href="#case-overview">The challenge</a>
          <a href="#naming">Naming</a>
          <a href="#original-sketch">Sketch</a>
          <a href="#logo-suite">Logo suite</a>
          <a href="#palette">Colours</a>
          <a href="#evolution">Evolution</a>
          <a href="#applications">Applications</a>
          <a href="#delivery">Delivery</a>
        </nav>

        <section className="bithan-overview shell" id="case-overview">
          <div className="bithan-section-copy">
            <span className="bithan-eyebrow">01 / The challenge</span>
            <h2>The goal was not to find a beautiful name<br /><em>It was to build an asset the brand could grow into</em></h2>
            <p>The project was for a fine jewellery brand launching digitally in Qatar, with ambitions to grow into a wider commercial and physical presence. The name had to carry prestige, work when spoken and read, and remain right as the brand grows.</p>
          </div>
          <div className="bithan-criteria-grid">
            {successCriteria.map(([title, text]) => (
              <article key={title}><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </section>

        <section className="bithan-naming" id="naming">
          <div className="shell">
            <div className="bithan-section-head">
              <div><span className="bithan-eyebrow">02 / Naming strategy</span><h2>Four strategic territories<br /><em>before the names begin</em></h2></div>
              <p>Rather than jumping straight to generating names, the project first defined the linguistic and emotional territories worth exploring. That kept the work coherent, and client feedback changed the logic of the naming itself, not just the order of a list.</p>
            </div>

            <div className="bithan-territories">
              {namingTerritories.map(([letter, name, text]) => (
                <article key={letter}><span>{letter}</span><h3>{name}</h3><p>{text}</p></article>
              ))}
            </div>

            <div className="bithan-process-block">
              <div>
                <span className="bithan-eyebrow">Process and screening</span>
                <h3>We generate broadly<br />We reject firmly<br />We present selectively</h3>
                <p>Names were removed before presentation if they were weak in pronunciation, poor in category fit, limited in how far they could extend, lacking distinctiveness, or not practically available.</p>
              </div>
              <ol>
                {namingProcess.map((step, index) => <li key={step}><span>{step}</span></li>)}
              </ol>
            </div>

            <details className="bithan-shortlist">
              <summary>Examples from the first shortlist and the refinement round</summary>
              <div>
                <span>FIRST SHORTLIST</span>
                <p>{firstShortlist.join(" · ")}</p>
                <span>REFINEMENT ROUND</span>
                <p>{refinement.join(" · ")}</p>
              </div>
            </details>

            <div className="bithan-selected-name">
              <small>FINAL NAME SELECTED BY THE CLIENT</small>
              <strong>BITHAN</strong>
              <p>The client chose BITHAN at the end, after strategic exploration of the naming territories, the shortlists and the development rounds.</p>
            </div>
            <p className="bithan-legal-note">Domain, online presence and conflict checks were practical preliminary checks only, not a legal opinion. Final legal verification of a trademark should be carried out with the competent authority or a qualified legal adviser before registration and launch.</p>
            <p className="bithan-legal-note">Want to apply the same naming steps to your project? See our <Link href="/en/brand-naming">brand naming service</Link>.</p>
          </div>
        </section>

        <section className="bithan-sketch shell" id="original-sketch">
          <figure className="bithan-page-visual">
            <img src="/en/work/bithan/sketch.svg" width={1126} height={1591} alt="Original sketch page for the BITHAN identity, which developed into the final mark" loading="lazy" decoding="async" />
            <a className="bithan-visual-zoom" href="/en/work/bithan/sketch.svg" target="_blank" rel="noopener noreferrer">View the full-size design <span>↗</span></a>
          </figure>
          <div className="bithan-section-copy">
            <span className="bithan-eyebrow">03 / Original sketch</span>
            <h2>The identity began with a hand-drawn line<br /><em>It finished as a more precise, luminous system</em></h2>
            <p>The final identity kept the Arabic spirit and the distinctive shape of the first direction. Its construction, proportions and details were then refined, so the expression feels more contemporary and suits the world of fine jewellery.</p>
            <div className="bithan-principles">
              <div><b>GEOMETRIC</b><span>Organised construction and clearer proportions</span></div>
              <div><b>MODERN</b><span>A contemporary expression without losing the spirit</span></div>
              <div><b>JEWEL-LIKE</b><span>Details inspired by light and gemstones</span></div>
            </div>
            <blockquote>The same essence, expressed with more maturity.</blockquote>
          </div>
        </section>

        <section className="bithan-dark-panel" id="logo-suite">
          <div className="shell">
            <div className="bithan-section-head">
              <div><span className="bithan-eyebrow">04 / Final logo suite</span><h2>One signature<br /><em>Seven usable versions</em></h2></div>
              <p>The final system gives the identity the flexibility to work on premium packaging, print, social media, small digital spaces and both light and dark backgrounds, without losing recognition.</p>
            </div>
            <figure className="bithan-page-visual on-dark">
              <img src="/en/work/bithan/logo-suite.svg" width={1126} height={1591} alt="Final logo suite page for BITHAN, showing seven versions of the logo" loading="lazy" decoding="async" />
              <a className="bithan-visual-zoom" href="/en/work/bithan/logo-suite.svg" target="_blank" rel="noopener noreferrer">View the full-size design <span>↗</span></a>
            </figure>
            <div className="bithan-signature-note">
              <span className="bithan-eyebrow">Our signature</span>
              <p>The logo combines the roots of Arabic calligraphy with a modern sense of luxury. The polished structure and gem-like details express precision and brilliance, and the system of versions keeps the brand consistent at every point of contact.</p>
              <strong>Legacy in every detail.</strong>
            </div>
            <div className="bithan-logo-legend">
              {logoSuite.map(([n, name, use]) => <article key={n}><span>{n}</span><h3>{name}</h3><p>{use}</p></article>)}
            </div>
          </div>
        </section>

        <section className="bithan-palette-section shell" id="palette">
          <div className="bithan-section-head">
            <div><span className="bithan-eyebrow">05 / Master palette and print specs</span><h2>Approved colours<br /><em>for print and digital use</em></h2></div>
            <p>The identity is built on deep sapphire and lighter blues for a cool, crystalline feel, with black and white for contrast and flexibility.</p>
          </div>
          <figure className="bithan-page-visual palette-page">
            <img src="/en/work/bithan/palette.svg" width={1126} height={1591} alt="Master palette and print specifications page for the BITHAN identity" loading="lazy" decoding="async" />
            <a className="bithan-visual-zoom" href="/en/work/bithan/palette.svg" target="_blank" rel="noopener noreferrer">View the full-size design <span>↗</span></a>
          </figure>
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
            <p>These flat colours are approved for print and social media materials. The specified values must be kept to maintain consistency.</p>
          </aside>
        </section>

        <section className="bithan-variants">
          <div className="shell bithan-variants-grid">
            <div className="bithan-section-copy">
              <span className="bithan-eyebrow">06 / Final flat colour variants</span>
              <h2>Approved use of the logo<br /><em>on dark and light backgrounds</em></h2>
              <p>The primary mark is the version with the kasra (the vowel mark) on the letter ba. The version without the kasra is an approved alternative, used only where there is a technical need or a space constraint.</p>
              <div className="bithan-usage-note">
                <b>Primary</b><span>With the kasra: the main, preferred use</span>
                <b>Alternate</b><span>Without the kasra: only where technically necessary</span>
              </div>
            </div>
            <figure className="bithan-page-visual">
              <img src="/work/bithan/flat-variants.svg" width={1126} height={1591} alt="Final flat colour variants page for the BITHAN logo on dark and light backgrounds" loading="lazy" decoding="async" />
              <a className="bithan-visual-zoom" href="/work/bithan/flat-variants.svg" target="_blank" rel="noopener noreferrer">View the full-size design <span>↗</span></a>
            </figure>
          </div>
        </section>

        <section className="bithan-evolution shell" id="evolution">
          <figure className="bithan-page-visual">
            <img src="/en/work/bithan/evolution.svg" width={1126} height={1591} alt="Sketch to final evolution page showing how the BITHAN mark developed" loading="lazy" decoding="async" />
            <a className="bithan-visual-zoom" href="/en/work/bithan/evolution.svg" target="_blank" rel="noopener noreferrer">View the full-size design <span>↗</span></a>
          </figure>
          <div className="bithan-section-copy">
            <span className="bithan-eyebrow">07 / Sketch to final evolution</span>
            <h2>From the original idea<br /><em>to a more precise, usable mark</em></h2>
            <div className="bithan-evolution-notes">
              <article><b>GEOMETRIC CONSTRUCTION</b><p>More precise proportions and a balanced visual structure.</p></article>
              <article><b>JEWEL-LIKE FACETS</b><p>Crystalline details that link the mark to fine jewellery.</p></article>
              <article><b>REFINED ARABIC WORDMARK</b><p>A flowing Arabic movement, with more control and a modern finish.</p></article>
              <article><b>FINAL LUXURY FINISH</b><p>A luminous, cohesive identity designed to leave a lasting impression.</p></article>
            </div>
          </div>
        </section>

        <section className="bithan-applications" id="applications">
          <div className="shell">
            <div className="bithan-section-head">
              <div><span className="bithan-eyebrow">08 / Brand applications</span><h2>Premium applications<br /><em>that show the system works beyond the presentation file</em></h2></div>
              <p>The identity was tested on core touchpoints to confirm that the mark, the colour and the premium feel hold together in real use.</p>
            </div>
            <figure className="bithan-page-visual on-dark">
              <img src="/en/work/bithan/applications.svg" width={1126} height={1591} alt="Brand applications page for BITHAN, showing a jewellery box, a shopping bag, a business card and a social media profile" loading="lazy" decoding="async" />
              <a className="bithan-visual-zoom" href="/en/work/bithan/applications.svg" target="_blank" rel="noopener noreferrer">View the full-size design <span>↗</span></a>
            </figure>
            <div className="bithan-application-captions">
              {applications.map(([name, category], index) => <article key={name}><h3>{name}</h3><p>{category}</p></article>)}
            </div>
          </div>
        </section>

        <section className="bithan-mid-cta shell" aria-label="Start a similar project">
          <div>
            <span className="bithan-eyebrow">Starting a naming or identity project?</span>
            <h2>We can start from the naming decision, or from a brand that already exists</h2>
            <p>If you need naming, brand strategy or a visual identity, send a short summary of your project and we will suggest the best starting point.</p>
          </div>
          <a className="button primary" href={contactLink} target="_blank" rel="noopener noreferrer">Discuss your project <span>↗</span></a>
        </section>

        <section className="bithan-delivery shell" id="delivery">
          <div className="bithan-section-head">
            <div><span className="bithan-eyebrow">09 / Final delivery</span><h2>Brand assets, approved<br /><em>and ready to use</em></h2></div>
            <p>The final delivery was not limited to the logo. It included metallic, flat and monochrome versions, print specifications, applications and source files.</p>
          </div>
          <figure className="bithan-page-visual delivery-page">
            <img src="/work/bithan/delivery-logos.svg" width={1126} height={1591} alt="Final delivery page for the BITHAN identity, showing the logo files and applications" loading="lazy" decoding="async" />
            <a className="bithan-visual-zoom" href="/work/bithan/delivery-logos.svg" target="_blank" rel="noopener noreferrer">View the full-size design <span>↗</span></a>
          </figure>
          <div className="bithan-delivery-grid">
            {delivery.map(([name, text], index) => <article key={name}><div><h3>{name}</h3><p>{text}</p></div></article>)}
          </div>
        </section>

        <section className="bithan-faq shell" aria-labelledby="bithan-faq-title">
          <div className="bithan-section-head">
            <div><span className="bithan-eyebrow">10 / Case study FAQ</span><h2 id="bithan-faq-title">Important questions<br /><em>before a naming or identity project</em></h2></div>
            <p>Direct answers to the points a client weighs when comparing naming, brand strategy and visual identity services.</p>
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
            <span className="bithan-eyebrow">The result</span>
            <h2>A project that began with a naming decision<br /><em>It ended as a complete brand system</em></h2>
          </div>
          <div>
            <p>BITHAN moved from a naming challenge to a name chosen by the client, then to a complete identity with a distinctive Arabic signature, bilingual use, controlled logo versions, production colour specifications and premium applications.</p>
            <p className="bithan-outcome-note">We do not claim commercial performance figures for this case, because none are documented here. Its value is the complete method, from the strategic decision to a visual system that can be applied.</p>
            <div className="bithan-outcome-links">
              <a className="button primary" href={contactLink} target="_blank" rel="noopener noreferrer">Discuss your project <span>↗</span></a>
              <a className="button secondary" href={emailLink}>Email Dewank</a>
              <Link className="button secondary" href="/en/brand-naming">Naming package from <OfferPrice offerKey="brand-naming" className="bithan-inline-price" /></Link>
              <Link className="button secondary" href="/en/branding">Brand strategy and identity</Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
