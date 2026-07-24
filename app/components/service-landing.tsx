import Link from "next/link";
import { Footer, Header } from "./site-shell";

export type ServiceLandingProps = {
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  problemTitle: string;
  problemCopy: string;
  outcomes: { title: string; text: string }[];
  deliverables: string[];
  process: { title: string; text: string }[];
  fitFor: string[];
  faqs: { question: string; answer: string }[];
  related: { href: string; label: string }[];
  schemaName: string;
  schemaDescription: string;
  path: string;
};

export default function ServiceLanding(props: ServiceLandingProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: props.schemaName,
    description: props.schemaDescription,
    provider: {
      "@type": "ProfessionalService",
      name: "Dewank | ديوانك",
      url: "https://dewank.com",
    },
    areaServed: ["Saudi Arabia", "Bahrain", "GCC"],
    url: `https://dewank.com${props.path}`,
    mainEntity: props.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className="inner-page service-landing-page">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="shell pf-hero">
        <div className="pf-edition">{props.eyebrow}</div>
        <h1>{props.title}</h1>
        <div className="pf-hero-foot">
          <p>{props.intro}</p>
          <Link className="button primary" href="/contact">ناقش مشروعك <span>←</span></Link>
        </div>
      </section>

      <section className="belief shell">
        <span className="section-label">[ المشكلة التي نحلها ]</span>
        <h2>{props.problemTitle}</h2>
        <p>{props.problemCopy}</p>
      </section>

      <section className="bento-section">
        <div className="shell">
          <div className="section-head"><div><span className="section-label">[ النتيجة ]</span><h2>ما الذي يتغير<br/><em>بعد التنفيذ؟</em></h2></div></div>
          <div className="service-bento">
            {props.outcomes.map((item, index) => (
              <article className="service-card growth" key={item.title}>
                <div className="card-top"><span>{String(index + 1).padStart(2, "0")}</span><small>OUTCOME</small></div>
                <div className="card-copy"><h3>{item.title}</h3><p>{item.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="seo-content shell">
        <span className="section-label">[ ما الذي تستلمه ]</span>
        <h2>مخرجات واضحة.<br/><em>لا وعود فضفاضة.</em></h2>
        <div className="seo-content-grid">
          {props.deliverables.map((item) => <p key={item}>{item}</p>)}
        </div>
      </section>

      <section className="method-section">
        <div className="shell method-layout">
          <div className="method-intro"><span className="section-label">[ طريقة العمل ]</span><h2>من التشخيص<br/><em>إلى نظام قابل للتطبيق.</em></h2><p>كل مرحلة تجيب عن سؤال تجاري واضح قبل الانتقال إلى المرحلة التالية.</p></div>
          <div className="method-list">
            {props.process.map((step, index) => <div key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3><p>{step.text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="seo-content shell">
        <span className="section-label">[ لمن تناسب ]</span>
        <h2>هذه الخدمة مناسبة عندما...</h2>
        <div className="seo-content-grid">{props.fitFor.map((item) => <p key={item}>{item}</p>)}</div>
      </section>

      <section className="faq-section shell">
        <span className="section-label">[ أسئلة شائعة ]</span>
        <h2>إجابات مباشرة.</h2>
        <div className="faq-grid">
          {props.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
        </div>
      </section>

      <section className="fit-section shell">
        <div><span className="section-label">[ خدمات مرتبطة ]</span><h2>النمو لا يعمل<br/><em>في جزر منفصلة.</em></h2></div>
        <div className="fit-card">
          {props.related.map((item) => <Link className="detail-link" href={item.href} key={item.href}>{item.label} <span>←</span></Link>)}
          <Link className="button primary" href="/contact">ابدأ المحادثة <span>←</span></Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
