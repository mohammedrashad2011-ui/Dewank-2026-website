import { EnShell } from "../_en/shell";
import { enMetadata } from "../_en/metadata";
import { CONTACT_EMAIL } from "@/app/(en)/en/_en/lib/site";
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
        <li>Your name, work email address and, if you give them, your company details.</li>
        <li>The country you are targeting, the service you need, your timeline and your project brief.</li>
        <li>[Applies once the contact form is enabled: the time the form was opened and submitted, and any request identifier used to limit spam.]</li>
      </ul>

      <h2>Why we use it</h2>
      <p>
        We use these details only to reply to your enquiry and to prepare a proposal if you ask us to. [Lawful basis
        for each purpose to be confirmed by counsel: consent, legitimate interests, or both.]
      </p>

      <h2>Who receives your details</h2>
      <p>
        Members of the Dewank team who handle enquiries. [Delivery route for English enquiries: not yet decided. The English
        contact form cannot send enquiries yet, so nothing leaves the site from it. If the route is a WhatsApp hand-off, as on
        the Arabic site, WhatsApp (operated by Meta) would receive the details the visitor sends.] [Email delivery provider:
        not yet appointed. Name, role and location of any processor to be added once approved.] [Counsel to confirm: whether any enquiry details are used for advertising or remarketing. Measurement tags on this site may use visit data for advertising, as described under cookies.]
      </p>

      <h2>How long we keep them</h2>
      <p>[Retention period to be confirmed.]</p>

      <h2>International transfers</h2>
      <p>[To be confirmed once the delivery provider and its data region are approved.]</p>

      <h2>Country detection for prices (not yet active)</h2>
      <p>
        [Draft for approval. This describes a feature that is switched off. It must not be published as active until the
        approval note is signed off.] Prices are shown in US dollars by default. To show local prices, the browser would
        send a request to api.country.is, a third-party service. The request contains the IP address of your connection, as
        any web request does, and the service returns a two-letter country code. Dewank stores only that country code, in
        your browser’s local storage under the key dewank_offer_country, so the request is not repeated on later visits.
        Dewank does not store your IP address from this request. [Provider terms to be confirmed before activation: how long
        the service keeps IP addresses and request logs, where they are processed, and whether the service shares them.] You
        can remove the stored country at any time by clearing this site’s data in your browser.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on where you live, you may ask us to access, correct or delete your details, or to object to or
        restrict how we use them. [Applicable regimes to be confirmed by counsel: UK GDPR, EU GDPR, Saudi PDPL and
        others.] To use these rights, email us at {CONTACT_EMAIL}.
      </p>

      <h2>Cookies and measurement</h2>
      <p>
        The website uses three measurement services: Google Tag Manager, Google Analytics 4 and the Meta Pixel. They can
        set cookies and collect information about visits, such as pages viewed, referring sources and device details, and
        send it to Google and Meta. Nothing is sent to these services until you choose to allow it. Until you choose, the
        site makes no request to them and sets none of their cookies.
      </p>
      <p>
        You choose two categories. Usage measurement covers Google Analytics 4 and Google Tag Manager. Advertising
        measurement covers Google Ads and the Meta Pixel. You can accept all, reject all, or choose each category. You can
        change or withdraw your choice at any time with the Cookie settings link in the footer. Withdrawing reloads the
        page without these services and removes the measurement cookies this browser holds for this site.
      </p>
      <p>
        Your choice is stored in this browser&apos;s local storage under the key dewank-consent-v1. It holds only the two
        choices and the date you made them. The site works without it.
      </p>
      <p>
        [Owner and counsel to confirm before publication: the cookie names each service sets and their lifetimes; the
        retention period for analytics data; whether Google Ads conversion tags run in the container and under which
        category; and the lawful basis or consent approach that applies in each market the site serves.]
      </p>

      <h2>Changes to this notice</h2>
      <p>[Version and date to be added on approval.]</p>
    </section>
  );
}

// Draft notice: stays noindex even after the English launch flag is on, until counsel approves it and this line is removed.
export const metadata = {
  ...enMetadata("Privacy Notice", "How Dewank uses the details you send us when you contact us. Draft pending legal review.", "/en/privacy"),
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
};

export default function Page() {
  return (
    <EnShell>
      <PrivacyPage />
    </EnShell>
  );
}
