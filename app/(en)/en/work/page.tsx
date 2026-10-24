import Link from "next/link";
import { enMetadata } from "../_en/metadata";
import { Footer } from "../_en/parity/footer";
import { Header } from "../_en/parity/header";
import { whatsappHref, briefMailto } from "../_en/lib/site";
import { IdentityShowcase } from "./identity-showcase";
import WorkEditorialHero from "../../../(ar)/work/work-editorial-hero";
import WorkMotionDirector from "../../../(ar)/work/work-motion-director";
// The Arabic Work page's layout and styles, reused unchanged. English-only direction and type overrides follow.
import "../../../(ar)/work/work-page.css";
import "../../../(ar)/work/work-proof-refinement.css";
import "../_en/parity/service-pages.en.css";
import "../_en/styles/hide-arabic-widgets.css";
import "../../../(ar)/work/work-cinematic-experience.css";
import "../../../(ar)/work/work-cinema-hero.css";

export const metadata = enMetadata(
  "Work and case studies",
  "Brand naming and identity for a fine jewellery brand in Qatar, a clinic follow-up automation case in Bahrain, and identity work across four sectors. Each project shows the challenge, the decision, what was delivered and the approximate results.",
  "/en/work",
);

// Facts, qualifiers and case details are taken from the verified English portfolio copy. Do not add results.
const identityProjects = [
  { name: "ReachwayAD", sector: "Marketing and advertising", image: "/en/work/reachwayad-remastered.webp", className: "reachway featured", summary: "A corporate identity that balances trust with movement, applied across stationery and digital touchpoints." },
  { name: "Clinika", sector: "Beauty and care", image: "/en/work/clinika-remastered.webp", className: "clinika", summary: "A refined identity for the beauty sector, with a calm editorial character and applications that build trust from the first impression." },
  { name: "Arab Sun", sector: "Travel and tourism", image: "/en/work/arab-sun-remastered.webp", className: "arab-sun", summary: "A visual system inspired by the sun and Arabian movement, applied to packaging and printed materials." },
  { name: "Dar Al Safa", sector: "Healthcare", image: "/en/work/dar-al-safa-remastered.webp", className: "dar-safa wide", summary: "A warm medical identity that balances care and professionalism across signage, stationery and reception points." },
];

const proofPaths = [
  { no: "01", label: "Automation and follow-up", title: "From a conversation to a booking", text: "See how manual follow-up became a measurable journey connected to a CRM.", href: "#case-studies" },
  { no: "02", label: "Naming and identity", title: "From a name to a complete brand system", text: "BITHAN: a real project from naming strategy and checks, through the chosen name, to the sketch, logo suite and fine jewellery applications.", href: "/en/work/bithan" },
  { no: "03", label: "How we think", title: "From a challenge to a strategic decision", text: "Concept projects we use to show the thinking behind positioning, identity and experience.", href: "#concept-work" },
];

const clinicFacts = [
  { label: "The challenge", text: "Clients arrived through campaigns, but the journey after the first message was neither unified nor trackable. Replies were slow, good enquiries were lost, and appointment reminders were irregular." },
  { label: "The decision", text: "Connect the conversation to qualification, booking, reminders and follow-up inside one CRM, so every client's status is visible." },
  { label: "What we built", text: "Smart replies, lead classification, booking paths, appointment reminders, and re-engagement for leads who did not complete a booking." },
  { label: "The commercial effect", text: "Better conversion from enquiry to booking and less manual work for reception, with a clearer view of where each client stands." },
];

const concepts = [
  { name: "NOMAÏ", type: "Luxury hospitality", challenge: "Set a luxury desert destination apart from the repeated imagery of the hospitality sector.", decision: "Build the brand around silence, slowness and the rhythm of the place, instead of traditional luxury cues.", scope: "Positioning, naming, identity and the direction of the guest experience.", target: "A brand that is easier to remember and better able to justify a premium experience." },
  { name: "KOVA", type: "Architecture and products", challenge: "Unify architecture, products and content under one brand without losing precision.", decision: "Turn engineering from a visual shape into a stable language, used consistently at every touchpoint.", scope: "Positioning, identity system and the direction of the digital experience.", target: "Faster, clearer consistency when launching new projects and products." },
  { name: "LUME", type: "Skincare", challenge: "A crowded market of similar beauty promises, with weak trust.", decision: "Lead with scientific evidence before the beauty promise, inside an editorial brand experience.", scope: "Naming, packaging and the campaign system.", target: "More credibility, and value that is understood before the purchase decision." },
];

const testimonials = [
  { quote: "Rashad was proactive and very attentive to my needs, and designed a logo that reflects my company's values perfectly.", name: "Sophia Flores", country: "United States" },
  { quote: "His ability to analyse and present data was excellent. The speed of execution and the quality of the work made him stand out in market research.", name: "Matt Monaco", country: "United States" },
  { quote: "The naming process was thoughtful, professional and well organised. Excellent communication and creative ideas, and the final result made me genuinely happy.", name: "Loukastaki25", country: "Cyprus" },
];

const method = [
  { no: "01", title: "Understand the challenge", text: "We find where growth stops and what the business actually needs." },
  { no: "02", title: "Choose the decision", text: "Positioning, message and priority are set before any execution starts." },
  { no: "03", title: "Build the system", text: "Identity, website, content or automation are designed to work together." },
  { no: "04", title: "Measure and refine", text: "We review performance and improve what raises clarity, conversion and efficiency." },
];

export default function WorkPage() {
  const contactLink = whatsappHref("Hello Dewank, I saw your work and would like to discuss a similar project. My business is: ");
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Dewank work and case studies",
    url: "https://dewank.com/en/work",
    description: "Case studies and projects in brand naming and identity, website and conversion, and WhatsApp and CRM automation.",
    inLanguage: "en",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Clinic WhatsApp automation and CRM case study" },
        { "@type": "ListItem", position: 2, name: "BITHAN fine jewellery naming and identity case study", url: "https://dewank.com/en/work/bithan" },
        ...identityProjects.map((item, index) => ({ "@type": "ListItem", position: index + 3, name: `${item.name} brand identity` })),
        ...concepts.map((item, index) => ({ "@type": "ListItem", position: index + identityProjects.length + 3, name: `${item.name} concept project` })),
      ],
    },
  };

  return (
    <main id="main-content" className="work-page work-proof-page en-service work-cinematic" lang="en" dir="ltr">
      <Header />
      <WorkMotionDirector />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

      <WorkEditorialHero locale="en" whatsappHref={contactLink} />

      <section className="work-trust shell" aria-label="What sets our approach apart">
        <div>Strategy before design</div>
        <div>Practical experience across GCC markets</div>
        <div>Brand, website and content as one system</div>
        <div>Custom execution, not templates</div>
      </section>

      <section className="proof-paths shell" aria-labelledby="proof-paths-title">
        <div className="proof-paths-head">
          <span className="section-label">Choose the kind of proof</span>
          <h2 id="proof-paths-title">Do not browse everything<br /><em>Go to the case closest to your challenge</em></h2>
        </div>
        <div className="proof-path-grid">
          {proofPaths.map((item) => <a href={item.href} className="proof-path-card" key={item.no}><small>{item.label}</small><h3>{item.title}</h3><p>{item.text}</p><span>View the section ↓</span></a>)}
        </div>
      </section>

      <section className="real-case shell" id="case-studies">
        <div className="real-case-grid">
          <div className="real-case-copy">
            <span className="section-label">Real case study · Bahrain · anonymised</span>
            <h2>From scattered messages<br />to a follow-up journey you can measure</h2>
            <p>A cosmetic clinic whose enquiries came from campaigns, but whose follow-up depended on manual replies. Replies were slow, good enquiries were lost and appointment reminders were irregular.</p>
            <div className="case-facts">
              {clinicFacts.map((fact) => <div key={fact.label}><b>{fact.label}</b><span>{fact.text}</span></div>)}
            </div>
            <div className="case-service-links">
              <Link className="button primary case-cta" href="/en/whatsapp-crm-automation">WhatsApp and CRM automation <span>→</span></Link>
              <Link href="/en/ai-automation">See AI workflow automation</Link>
            </div>
          </div>

          <div className="metrics-panel" aria-label="Results of the clinic case study">
            <span className="metric-kicker">Approximate results from the live operation</span>
            <div className="metric"><strong>+25</strong><span>points (approx.) in attendance rate</span></div>
            <div className="metric"><strong>+30%</strong><span>approx. improvement in conversion from enquiry to booking</span></div>
            <div className="metric"><strong>−40%</strong><span>approx. reduction in reception workload</span></div>
            <p className="metric-note">These are approximate figures from the live project. Results depend on message volume, offer quality and how fast the team responds, so they should not be read as a guarantee.</p>
          </div>
        </div>
      </section>

      <section className="bithan-work-feature shell" aria-labelledby="bithan-work-title">
        <div className="bithan-work-copy">
          <span className="section-label">Real case study · Naming and identity · Qatar · 2026</span>
          <h2 id="bithan-work-title">From a naming strategy<br /><em>to a complete fine jewellery identity</em></h2>
          <p>BITHAN began with positioning, naming territories and a curated shortlist with preliminary checks. It ended with a name chosen by the client, followed by an original sketch, a logo suite, an identity system and premium applications.</p>
          <div className="bithan-work-journey"><span>Naming</span><i>→</i><span>Selection</span><i>→</i><span>Identity</span><i>→</i><span>Applications</span></div>
          <Link className="button primary" href="/en/work/bithan">View the full case study <span>→</span></Link>
        </div>
        <Link className="bithan-work-visual" href="/en/work/bithan" aria-label="View the full BITHAN case study">
          <img src="/en/work/bithan/hero.svg" alt="Final approved identity cover for BITHAN Fine Jewelry" loading="lazy" decoding="async" />
          <small>NAMING → IDENTITY · FINAL APPROVED DIRECTION</small>
        </Link>
      </section>

      <section className="identity-work shell" id="brand-identities" aria-labelledby="identity-work-title">
        <div className="identity-work-head">
          <div>
            <span className="section-label">Selected identity work</span>
            <h2 id="identity-work-title">Brands we have built<br />a presence that is easy to remember</h2>
          </div>
          <p>Examples of our identity work across different sectors. Select any project to view it larger.</p>
        </div>
        <IdentityShowcase projects={identityProjects} />
        <div className="identity-actions">
          <Link className="button secondary identity-work-cta" href="/en/branding">Explore brand strategy and identity <span>→</span></Link>
          <Link href="/en/brand-naming">Need a name for your brand?</Link>
        </div>
      </section>

      <section className="testimonials-section" aria-labelledby="testimonials-title" id="testimonials">
        <div className="shell">
          <div className="testimonials-head">
            <span className="section-label">Client feedback</span>
            <h2 id="testimonials-title">Trust is not designed in isolation<br /><em>We earn it with every project</em></h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <figure className={`testimonial-card${index === 0 ? " featured" : ""}`} key={testimonial.name}>
                <blockquote>“{testimonial.quote}”</blockquote>
                <figcaption>
                  <span>{testimonial.name}</span>
                  <small>{testimonial.country}</small>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="testimonials-note">Feedback was originally given in English or translated for publication. Wording has been lightly adapted for clarity while keeping its meaning.</p>
        </div>
      </section>

      <section className="concepts-section" id="concept-work">
        <div className="shell">
          <div className="concepts-head">
            <div>
              <span className="section-label">Strategic thinking</span>
              <h2>We test the way of thinking,<br />not only the look of the logo</h2>
              <p>These are concept projects, not client engagements. We use them to show how we approach positioning, identity and experience.</p>
            </div>
          </div>

          <div className="concept-grid">
            {concepts.map((item) => (
              <article className="concept-card" key={item.name}>
                <span className="concept-label">{item.type}</span>
                <h3>{item.name}</h3>
                <dl>
                  <div><dt>Challenge</dt><dd>{item.challenge}</dd></div>
                  <div><dt>Decision</dt><dd>{item.decision}</dd></div>
                  <div><dt>Scope</dt><dd>{item.scope}</dd></div>
                  <div><dt>Targeted impact</dt><dd>{item.target}</dd></div>
                </dl>
                <Link href="/en/branding">Facing a similar challenge? See brand strategy <span>→</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="work-method shell">
        <span className="section-label">How we work</span>
        <h2>From the challenge to a system<br />you can run and measure</h2>
        <div className="work-method-grid">
          {method.map((step) => <div key={step.no}><h3>{step.title}</h3><p>{step.text}</p></div>)}
        </div>
        <div className="work-method-links"><Link href="/en/services">Explore all services</Link><Link href="/en/website-design">Website design</Link><Link href="/en/paid-advertising">Advertising management</Link><Link href="/en/whatsapp-crm-automation">WhatsApp automation</Link></div>
      </section>

      <section className="work-final">
        <div>
          <span className="section-label">Next step</span>
          <h2>You have seen the evidence<br /><em>Now let us define what fits your project</em></h2>
        </div>
        <div>
          <p>Send us your business and the current challenge. We will say whether you need a brand, a website, advertising, automation, or a smaller combination that serves the result.</p>
          <a className="button primary" href={contactLink} target="_blank" rel="noopener noreferrer">Discuss your project on WhatsApp <span>↗</span></a>
          <p className="work-final-email">Or email a brief to <a href={briefMailto("Project brief from the work page")}>hello@dewank.com</a></p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
