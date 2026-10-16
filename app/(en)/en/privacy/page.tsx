import { EnShell } from "../_en/shell";
import { enMetadata } from "../_en/metadata";
import "../_en/styles/privacy.en.css";

export const metadata = {
  ...enMetadata(
    "Privacy Policy",
    "Learn how DEWANK handles enquiries, website usage information and your privacy choices.",
    "/en/privacy",
  ),
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
};

function PrivacyPage() {
  return (
    <section className="hero shell privacy">
      <span className="eyebrow">Privacy & transparency</span>
      <h1>Privacy Policy</h1>
      <p className="privacy-intro">
        <strong>Your privacy is part of the trust you place in us.</strong> This notice explains how we handle the information
        you share when using our website or enquiring about our services, and how you can manage your choices.
      </p>
      <p className="privacy-updated">Last updated: 17 October 2026</p>

      <h2 id="about">1. Who we are</h2>
      <p>
        DEWANK is an independently operated brand providing brand strategy, digital marketing, website development and
        automation services. For privacy enquiries, email{" "}
        <a href="mailto:hello@dewank.com">hello@dewank.com</a> or contact us on WhatsApp at{" "}
        <a href="https://wa.me/97339066649" target="_blank" rel="noopener noreferrer">+97339066649</a>.
      </p>

      <h2 id="information">2. Information we handle</h2>
      <p>
        We may handle the contact information you choose to provide, such as your name, contact details, the services
        you need and project information, together with emails or WhatsApp messages you send us.
      </p>
      <p>
        We also handle website usage information such as pages visited, traffic sources, device and browser types.
        Our hosting provider may record technical information, including IP addresses, to operate and secure the website.
      </p>
      <p>
        When you use our contact form, the details are prepared as a WhatsApp message on your device. Clicking the form
        button does not send those details to DEWANK servers. Your enquiry reaches us only when you send the message in WhatsApp.
      </p>

      <h2 id="purposes">3. How we use information</h2>
      <ul>
        <li>Responding to enquiries and managing requests for services.</li>
        <li>Understanding customer needs and preparing appropriate proposals.</li>
        <li>Improving website usability and measuring our marketing performance.</li>
        <li>Operating and protecting our website.</li>
      </ul>

      <h2 id="measurement">4. Cookies and measurement</h2>
      <p>
        We use Google Analytics and Google Tag Manager to understand website usage. Usage measurement is enabled
        by default for new visitors unless they have previously disabled it in their privacy settings.
        Advertising measurement tools, including the Meta Pixel and Google Ads services, operate according
        to the applicable preferences.
      </p>
      <p>
        These services may use cookies or similar technologies, and Google and Meta may receive technical information
        about your visit, including pages viewed, traffic sources and interactions with contact links, under our
        measurement settings and their respective policies.
      </p>
      <p>
        You can change or disable measurement at any time using{" "}
        <button type="button" className="legal-link-button" data-dewank-consent-open="">Cookie settings</button>{" "}
        in the website footer. Changes stop future measurement according to your choices, but do not automatically
        erase information previously collected.
      </p>

      <h2 id="sharing">5. Sharing and retention</h2>
      <p>
        We use technical service providers including Hostinger for hosting, Google for analytics, and Meta for
        WhatsApp and advertising measurement. A separate service may also determine your country code for displaying
        local pricing and can receive your IP address as part of the request. Some information may be processed
        outside your country under the providers&apos; policies.
      </p>
      <p>
        We may retain customer enquiries to continue providing support and following up on services. There is currently
        no fixed automatic deletion schedule for these conversations. Hosting logs and analytics data are retained
        according to relevant provider settings and practices. We do not ask for payment card or banking details on this website.
      </p>

      <h2 id="rights">6. Your rights and contacting us</h2>
      <p>
        You can ask about information we hold about you, and request its correction or deletion, subject to
        applicable requirements. You may also change your measurement preferences from the footer at any time.
      </p>
      <p>
        Contact us at <a href="mailto:hello@dewank.com">hello@dewank.com</a> or via WhatsApp at{" "}
        <a href="https://wa.me/97339066649" target="_blank" rel="noopener noreferrer">+97339066649</a>.
        We update this notice when our practices or providers change and publish the new date on this page.
      </p>
      <p className="privacy-signoff"><strong>DEWANK</strong><span>Grow intelligently.</span></p>
    </section>
  );
}

export default function Page() {
  return (
    <EnShell>
      <PrivacyPage />
    </EnShell>
  );
}
