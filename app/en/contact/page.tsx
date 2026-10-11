import { EnShell } from "../_en/shell";
import { enMetadata } from "../_en/metadata";
import { CONTACT_EMAIL, WHATSAPP_NUMBER, briefMailto, whatsappHref } from "@/app/en/_en/lib/site";
import { ContactForm } from "../_en/contact-form";
import "../_en/styles/contact.en.css";


// Read the feature flag at request time, so opening the form never needs a rebuild.

const briefChecklist = [
  "Your name, company and website (if you have one)",
  "The market you are targeting",
  "The service you need, or say you are not sure",
  "Your timeline",
  "Your goal in one or two sentences",
];

function ContactPage() {
  const formEnabled = false; // Closed until email delivery and the privacy notice are approved.

  return (
    <>
      <section className="hero shell">
        <span className="eyebrow">Contact</span>
        <h1>Tell us the goal. We reply with the next step.</h1>
        <p className="lead">
          Send a short brief through the form, by email, or on WhatsApp. Whichever you choose, we reply after reviewing
          your brief.
        </p>
      </section>

      <section className="section shell" aria-labelledby="form-title">
        <span className="eyebrow">Project brief</span>
        <h2 id="form-title">Send your brief.</h2>
        <p className="lead">About two minutes. Pricing is custom, and we reply with a scoped proposal, not a fixed package.</p>
        <div className="form-layout">
          <ContactForm enabled={formEnabled} />
          <aside className="form-aside" aria-label="What to include and what happens next">
            <h3>A brief in five lines is enough</h3>
            <ul className="checklist">
              {briefChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3 className="aside-next">What happens next</h3>
            <ol className="aside-steps">
              <li>We read your brief before we reply, so the answer is specific to you.</li>
              <li>We reply with the questions that matter for your scope.</li>
              <li>You receive a written proposal with a fixed scope and price.</li>
            </ol>
          </aside>
        </div>
      </section>

      <section className="section shell" aria-labelledby="channels-title">
        <span className="eyebrow">Other ways to reach us</span>
        <h2 id="channels-title">Email or WhatsApp.</h2>
        <div className="grid two" style={{ marginTop: 28 }}>
          <article className="card">
            <span className="tag">Email</span>
            <h3>{CONTACT_EMAIL}</h3>
            <p>Opens a draft in your email app with the brief fields ready to fill in.</p>
            <div className="button-row">
              <a className="button secondary" href={briefMailto("Project brief")}>
                Email a brief
              </a>
            </div>
          </article>
          <article className="card">
            <span className="tag">WhatsApp</span>
            <h3>+{WHATSAPP_NUMBER}</h3>
            <p>Best for a quick question. Your message opens with a short English intro.</p>
            <div className="button-row">
              <a
                className="button whatsapp"
                href={whatsappHref("Hello Dewank, I would like to discuss a project. My main goal is: ")}
                rel="noopener noreferrer"
                target="_blank"
              >
                Message on WhatsApp
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section shell">
        <div className="notice">
          <p style={{ marginBottom: 8 }}>
            <strong>How we use your details:</strong> only to reply to your enquiry. Read the{" "}
            <a href="/en/privacy">privacy notice</a> for the full details.
          </p>
          <p style={{ marginBottom: 0 }}>
            Pricing is custom. We do not publish fixed prices on this site, and every quote is written after a scoping
            conversation.
          </p>
        </div>
      </section>
    </>
  );
}

export const metadata = enMetadata("Contact", "Send your project brief through the form, by email or on WhatsApp. We reply after reviewing it, with the next step and a custom quote.", "/en/contact");

export default function Page() {
  return (
    <EnShell>
      <ContactPage />
    </EnShell>
  );
}
