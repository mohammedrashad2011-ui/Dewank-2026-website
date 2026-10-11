import { EnShell } from "../_en/shell";
import { enMetadata } from "../_en/metadata";
import Link from "next/link";
import { briefMailto } from "@/app/en/_en/lib/site";
import { SERVICE_CATEGORIES, type Service } from "@/app/en/_en/lib/services";


function ServiceCard({ service }: { service: Service }) {
  return (
    <li className="service-item" id={service.id}>
      <h3>{service.name}</h3>
      <p className="service-summary">{service.summary}</p>
      <dl>
        <div>
          <dt>What it covers</dt>
          <dd>{service.covers}</dd>
        </div>
        <div>
          <dt>Who it is for</dt>
          <dd>{service.forWhom}</dd>
        </div>
      </dl>
      <div className="service-actions">
        <a className="card-link" href={briefMailto(service.scopeSubject)}>
          Request a scope →
        </a>
        {service.detailHref && (
          <Link className="card-link" href={service.detailHref}>
            Read the detailed page →
          </Link>
        )}
        {service.proof && (
          <Link className="card-link" href={service.proof.href}>
            {service.proof.label} →
          </Link>
        )}
      </div>
    </li>
  );
}

function ServicesPage() {
  return (
    <>
      <section className="hero shell">
        <span className="eyebrow">Services</span>
        <h1>
          Services for brand, growth and automation, <em>planned as one system.</em>
        </h1>
        <p className="lead">
          Each service solves a specific step between an idea and a qualified enquiry. Start with one, and we will tell
          you honestly what should come next.
        </p>
        <nav className="catalogue-nav" aria-label="Service categories">
          {SERVICE_CATEGORIES.map((category) => (
            <a key={category.id} href={`#${category.id}`}>
              {category.label}
            </a>
          ))}
        </nav>
      </section>

      {SERVICE_CATEGORIES.map((category) => (
        <section className="category shell" id={category.id} key={category.id} aria-labelledby={`${category.id}-title`}>
          <div className="category-head">
            <span className="eyebrow">{category.label}</span>
            <h2 id={`${category.id}-title`}>{category.title}</h2>
            <p>{category.intro}</p>
          </div>
          <ul className="service-list">
            {category.services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </ul>
        </section>
      ))}

      <section className="section shell">
        <div className="notice">
          <p style={{ marginBottom: 8 }}>
            <strong>Starting points.</strong> Many services can begin as a defined scope. We confirm the scope in a
            short conversation and send a written quote. We do not publish fixed prices on this site.
          </p>
          <p style={{ marginBottom: 0 }}>
            <strong>Something not listed here?</strong> Describe what you need in your brief, and we will tell you
            whether it fits our scope.
          </p>
        </div>
      </section>

      <section className="section shell">
        <div className="band">
          <span className="eyebrow">Not sure where to start?</span>
          <h2>Describe the goal. We will tell you what to start with.</h2>
          <p style={{ maxWidth: 640 }}>A few lines are enough. We will say what to start with, and what can wait.</p>
          <div className="button-row">
            <Link className="button primary" href="/en/contact" style={{ background: "#d5a843", color: "#061a33" }}>
              Send a brief
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export const metadata = enMetadata("Services", "Brand, content, growth, websites, automation and career services, each with a clear scope. Custom quotes, written after a short brief.", "/en/services");

export default function Page() {
  return (
    <EnShell>
      <ServicesPage />
    </EnShell>
  );
}
