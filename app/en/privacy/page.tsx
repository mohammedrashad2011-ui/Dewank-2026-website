import { EnShell } from "../_en/shell";
import { enMetadata } from "../_en/metadata";
import { CONTACT_EMAIL } from "@/app/en/_en/lib/site";
import "../_en/styles/privacy.en.css";


function PrivacyPage() {
  return (
    <section className="hero shell privacy">
      <div className="draft-banner" role="note">
        <strong>DRAFT. Not approved for publication.</strong> This notice must be reviewed by qualified counsel before
        the contact form is opened. Bracketed items are decisions still pending.
      </div>

      <span className="eyebrow">Privacy notice</span>
      <h1>How we handle the details you send us</h1>

      <h2>Who we are</h2>
      <p>
        Dewank provides brand, growth and automation services. You can contact us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. [Legal entity name, registration number and registered
        address to be provided.]
      </p>

      <h2>What we collect when you send a brief</h2>
      <ul>
        <li>Your name, work email address and, if you give it, your company and website.</li>
        <li>The country you are targeting, the service you need, your timeline and your project brief.</li>
        <li>The time the form was opened and submitted, and a short-lived request identifier used to limit spam.</li>
      </ul>

      <h2>Why we use it</h2>
      <p>
        We use these details only to reply to your enquiry and to prepare a proposal if you ask us to. [Lawful basis
        for each purpose to be confirmed by counsel: consent, legitimate interests, or both.]
      </p>

      <h2>Who receives your details</h2>
      <p>
        Members of the Dewank team who handle enquiries. [Email delivery provider: not yet appointed. Name, role and
        location of any processor to be added once approved.] We do not sell your details or use them for advertising.
      </p>

      <h2>How long we keep them</h2>
      <p>[Retention period to be confirmed.]</p>

      <h2>International transfers</h2>
      <p>[To be confirmed once the delivery provider and its data region are approved.]</p>

      <h2>Your rights</h2>
      <p>
        Depending on where you live, you may ask us to access, correct or delete your details, or to object to or
        restrict how we use them. [Applicable regimes to be confirmed by counsel: UK GDPR, EU GDPR, Saudi PDPL and
        others.] To use these rights, email us at {CONTACT_EMAIL}.
      </p>

      <h2>Cookies and analytics</h2>
      <p>
        This website does not currently set analytics or marketing cookies. [Update this section before any analytics
        or pixel is added.]
      </p>

      <h2>Changes to this notice</h2>
      <p>[Version and date to be added on approval.]</p>
    </section>
  );
}

export const metadata = enMetadata("Privacy Notice", "How Dewank uses the details you send us when you contact us. Draft pending legal review.", "/en/privacy");

export default function Page() {
  return (
    <EnShell>
      <PrivacyPage />
    </EnShell>
  );
}
