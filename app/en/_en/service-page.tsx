import Link from "next/link";
import { CONTACT_EMAIL, WHATSAPP_NUMBER, briefMailto, whatsappHref } from "./lib/site";
import type { ServiceDetail } from "./lib/service-pages";
import "./styles/service.en.css";

// Structured data limited to schema.org types that match the visible page content.
// The Service provider points at the organisation entity that the site already publishes.
const SITE_URL = "https://dewank.com";

function serviceSchema(page: ServiceDetail) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.serviceName,
    description: page.description,
    serviceType: page.serviceType,
    url: `${SITE_URL}${page.path}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "Worldwide",
  };
}

function faqSchema(page: ServiceDetail) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

function breadcrumbSchema(page: ServiceDetail) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/en` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/en/services` },
      { "@type": "ListItem", position: 3, name: page.h1, item: `${SITE_URL}${page.path}` },
    ],
  };
}

// Escape "<" so content can never close the script tag early.
const jsonLd = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c");

export function ServicePage({ page }: { page: ServiceDetail }) {
  const schemas = [serviceSchema(page), faqSchema(page), breadcrumbSchema(page)];
  return (
    <div className="svc">
      <section className="svc-hero shell" aria-labelledby="svc-title">
        <span className="eyebrow">{page.eyebrow}</span>
        <h1 id="svc-title">{page.h1}</h1>
        <p className="lead">{page.lead}</p>
        <div className="button-row">
          <Link className="button primary" href="/en/contact">
            Request a scope
          </Link>
          <a className="button secondary" href={briefMailto(page.scopeSubject)}>
            Email a brief
          </a>
        </div>
      </section>

      {page.intro && (
        <section className="svc-section shell svc-intro" aria-labelledby="svc-intro-title">
          <h2 id="svc-intro-title">{page.intro.title}</h2>
          {page.intro.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </section>
      )}

      <section className="svc-section shell" aria-labelledby="svc-included-title">
        <span className="eyebrow">What is included</span>
        <h2 id="svc-included-title">What you receive</h2>
        <ul className="svc-list">
          {page.included.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {page.options && (
        <section className="svc-section shell" aria-labelledby="svc-options-title">
          <span className="eyebrow">Options</span>
          <h2 id="svc-options-title">{page.options.title}</h2>
          <div className="svc-options">
            {page.options.items.map((item) => (
              <article className="svc-option" key={item.name} id={slugify(item.name)}>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          {page.options.note && <p className="svc-note">{page.options.note}</p>}
        </section>
      )}

      <section className="svc-section shell" aria-labelledby="svc-steps-title">
        <span className="eyebrow">How we work</span>
        <h2 id="svc-steps-title">Four steps, in writing</h2>
        <ol className="svc-steps">
          {page.steps.map((step) => (
            <li key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="svc-section shell" aria-labelledby="svc-fit-title">
        <span className="eyebrow">Is it a fit?</span>
        <h2 id="svc-fit-title">Who this is for, and who it is not for</h2>
        <div className="svc-fit">
          <div>
            <h3>A good fit if</h3>
            <p>{page.fit.yes}</p>
          </div>
          <div>
            <h3>Probably not a fit if</h3>
            <p>{page.fit.no}</p>
          </div>
        </div>
      </section>

      <section className="svc-section shell" aria-labelledby="svc-faq-title">
        <span className="eyebrow">Questions</span>
        <h2 id="svc-faq-title">Before you ask</h2>
        <div className="svc-faqs">
          {page.faqs.map((faq) => (
            <details className="faq" key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {page.proof && (
        <section className="svc-section shell" aria-label="Related work">
          <p className="svc-proof">
            <Link href={page.proof.href}>{page.proof.label} →</Link>
          </p>
        </section>
      )}

      <section className="svc-section shell" aria-labelledby="svc-related-title">
        <span className="eyebrow">Related services</span>
        <h2 id="svc-related-title">Often planned together</h2>
        <ul className="svc-related">
          {page.related.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label} →</Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="svc-band shell" aria-labelledby="svc-band-title">
        <h2 id="svc-band-title">Tell us the goal. We reply with the next step.</h2>
        <p>
          Send a short brief by email or on WhatsApp. We review it and reply with a scoped proposal, written before any
          work begins.
        </p>
        <div className="button-row">
          <a className="button primary" href={briefMailto(page.scopeSubject)}>
            Email {CONTACT_EMAIL}
          </a>
          <a
            className="button secondary"
            href={whatsappHref(`Hello Dewank, I would like to discuss: ${page.serviceName}. My goal is: `)}
            rel="noopener noreferrer"
            target="_blank"
          >
            WhatsApp +{WHATSAPP_NUMBER}
          </a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />
    </div>
  );
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
