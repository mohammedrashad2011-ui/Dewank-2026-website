import { EnShell } from "../_en/shell";
import { enMetadata } from "../_en/metadata";
import "../_en/styles/privacy.en.css";

// Privacy and cookie policy (English). It describes only what the site's code does. Bracketed items are not yet
// established by the owner or counsel. The page stays noindex until those facts are supplied and counsel has reviewed the
// text (see docs/privacy-cookies-review.md).
// Draft notice: stays noindex even after the English launch flag is on, until the owner approves the text.
export const metadata = {
  ...enMetadata(
    "Privacy and Cookie Policy",
    "How Dewank uses the details you send us, how cookies and measurement tools work, and the choices you have.",
    "/en/privacy",
  ),
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
};

function PrivacyPage() {
  return (
    <section className="hero shell privacy">
      <div className="draft-banner" role="note">
        <strong>Version 1.0 for review.</strong> Not yet reviewed by counsel and not yet approved by the owner. Bracketed
        items are facts still to be supplied. This page stays out of search engines until they are approved.
      </div>

      <span className="eyebrow">Privacy and cookies</span>
      <h1>Privacy and Cookie Policy</h1>
      <p>
        This page explains the personal information we collect when you use dewank.com, how we use it, who receives it, and
        the choices you have. Read it together with the description of measurement tools in{" "}
        <a href="#cookies">section 6</a>.
      </p>

      <h2 id="about">1. Who we are</h2>
      <p>
        Dewank is a brand for brand strategy, marketing, websites, automation and AI solutions. It operates the website
        dewank.com. The party responsible for your personal information is: [full legal name of the business], [commercial
        registration number and issuing registry], [registered address]. For privacy questions, email{" "}
        <a href="mailto:hello@dewank.com">hello@dewank.com</a> or WhatsApp <bdi dir="ltr">+973 3906 6649</bdi>.
      </p>
      <p>
        We serve businesses in Saudi Arabia, Bahrain, the United Arab Emirates and the wider Gulf, and we work with clients in
        other countries remotely. We do not ask for payment card details, bank account details or government identity numbers
        through this website.
      </p>

      <h2 id="collect">2. The information we collect</h2>
      <ul>
        <li>
          <strong>When you send an enquiry through the English contact form:</strong> your name, work email address, company
          (optional), the country you are based in, the service you need, your timeline, your project brief, and your
          agreement that we may reply to your enquiry.
        </li>
        <li>
          <strong>When you send an enquiry through the Arabic contact form:</strong> your name, email address, WhatsApp number,
          company or project name (optional), the service you need, and your project brief.
        </li>
        <li>
          <strong>Messages you start with us:</strong> WhatsApp conversations and emails you send us, including what they
          contain.
        </li>
        <li>
          <strong>Technical usage information:</strong> your IP address, browser type, the pages you request and the times of
          your requests. Hosting servers record this as part of running and protecting the site.
        </li>
        <li>
          <strong>Your cookie choices:</strong> which measurement categories you allowed, and when you chose, kept in your
          browser only.
        </li>
        <li>
          <strong>Your country for price display:</strong> the country code only, as section 9 explains.
        </li>
        <li>
          <strong>Measurement data:</strong> collected only after you allow the relevant category, as sections 6 and 7 explain.
        </li>
      </ul>
      <p>
        The site does not collect payment details, bank details or government identity numbers, and we will not ask for them
        through the site.
      </p>

      <h2 id="how">3. How we collect information</h2>
      <ul>
        <li>Directly from you, when you send a form or message us on WhatsApp or by email.</li>
        <li>Automatically from your browser and from the hosting servers when you visit the site, including server logs and
          your browser’s local storage, as described in section 6.</li>
        <li>From measurement tools, only after you have allowed them.</li>
      </ul>

      <h2 id="purposes">4. Why we use information</h2>
      <ul>
        <li>To reply to your enquiry and, if you ask, to prepare a proposal.</li>
        <li>To run, secure and protect the site, including server logs that help us prevent misuse.</li>
        <li>To show an offer price in the currency of your country, as section 9 explains.</li>
        <li>To measure how the site performs and how our campaigns perform, only after you allow the relevant measurement category.</li>
        <li>To comply with the laws and regulations that apply to us.</li>
      </ul>
      <p>We do not send marketing emails, and this website does not run a newsletter.</p>

      <h2 id="enquiries">5. Enquiries and WhatsApp messages</h2>
      <p>
        When you press Send on the English contact form, the form opens a WhatsApp conversation with the details you entered
        written out in English. The form does not transmit those details to a Dewank server, and the website does not store
        them. Your enquiry reaches us only when you press Send inside WhatsApp, and the form tells you so before you press
        Send.
      </p>
      <p>
        After that, the conversation is kept in WhatsApp, where our team reads and replies to it. WhatsApp is operated by Meta
        Platforms, and its use is subject to Meta’s terms and policies. WhatsApp states that its messages are end-to-end
        encrypted. [Retention of WhatsApp conversations by the Dewank team: to be confirmed.]
      </p>
      <p>
        When you click a WhatsApp link on the site, the site sends a measurement event named{" "}
        <bdi dir="ltr">sitewide_whatsapp_click</bdi> to the measurement tools, but only after you allow the measurement
        category. The event includes the page or service you clicked from. It does not include the text of any message or your
        contact details.
      </p>

      <h2 id="cookies">6. Cookies and local storage</h2>
      <p>
        The site stores a few items in your browser’s local storage to remember your choices. It sets no measurement cookie
        until you allow the relevant category. The table lists what the site stores:
      </p>
      <div className="legal-table-wrap" tabIndex={0} role="region" aria-label="What the site stores in your browser">
        <table className="legal-table">
          <caption>What the site stores in your browser</caption>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Type</th>
              <th scope="col">Purpose</th>
              <th scope="col">Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><bdi dir="ltr">dewank-consent-v1</bdi></td>
              <td>Local storage</td>
              <td>Remembers your measurement choices and when you made them. It holds no personal data.</td>
              <td>Until you delete it from your browser or withdraw your choice.</td>
            </tr>
            <tr>
              <td><bdi dir="ltr">dewank_offer_country</bdi></td>
              <td>Local storage</td>
              <td>Remembers your country code for showing offer prices, so the lookup is not repeated on later visits.</td>
              <td>Until you delete it from your browser.</td>
            </tr>
            <tr>
              <td><bdi dir="ltr">dewank_offer_interest_&lt;offer&gt;</bdi></td>
              <td>Local storage</td>
              <td>Records when you last clicked an offer, so the same click is not counted twice within 30 minutes. It holds no personal data.</td>
              <td>Until you delete it from your browser.</td>
            </tr>
            <tr>
              <td><bdi dir="ltr">_ga</bdi>, <bdi dir="ltr">_ga_5SKKT1NBHB</bdi>, <bdi dir="ltr">_gcl_au</bdi></td>
              <td>Measurement cookies</td>
              <td>Usage measurement (Google Analytics) and advertising measurement (Google Ads). Set only after you allow the category.</td>
              <td>[Lifetime set by Google, to be confirmed from the account settings.]</td>
            </tr>
            <tr>
              <td><bdi dir="ltr">_fbp</bdi>, <bdi dir="ltr">_fbc</bdi></td>
              <td>Measurement cookies</td>
              <td>Advertising measurement for Meta. Set only after you allow advertising measurement.</td>
              <td>[Lifetime set by Meta, to be confirmed.]</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Measurement services may also set similar cookies, such as <bdi dir="ltr">_gid</bdi> and <bdi dir="ltr">_gcl_aw</bdi>.
        Your browser shows the cookies that a site has set in its settings.
      </p>

      <h2 id="analytics">7. Google and Meta</h2>
      <p>
        After you allow usage measurement, the site loads Google Tag Manager and Google Analytics 4. Google then receives
        information such as the pages you view, the length of your visit, your device and browser type, and the approximate
        country suggested by your IP address. The measurement identifier is <bdi dir="ltr">G-5SKKT1NBHB</bdi>.
      </p>
      <p>
        After you allow advertising measurement, the site loads the Meta Pixel and sends page events to Meta, including page
        views. The pixel identifier is <bdi dir="ltr">2274266710087331</bdi>. Google Ads conversion measurement may also receive
        conversion information when it is enabled in our accounts. [Owner to confirm: whether custom audiences or remarketing
        are used.]
      </p>
      <p>
        Google and Meta process this information under their own policies, and may use it for their own purposes. You can read
        their policies directly. The measurement events do not include the text of your enquiries.
      </p>

      <h2 id="consent">8. Consent, refusal and withdrawal</h2>
      <ul>
        <li>
          On your first visit a banner appears. The site does not load any measurement tool, and does not send any request to
          one, until you choose.
        </li>
        <li>
          You can choose <strong>Accept all</strong>, <strong>Reject all</strong> or <strong>Manage preferences</strong>, to
          allow usage measurement, advertising measurement, or both. Accept all and Reject all are the same size and carry the
          same weight.
        </li>
        <li>Refusing measurement does not affect how you use the site or the services you request.</li>
        <li>
          You can change or withdraw your choice at any time from{" "}
          <button type="button" className="legal-link-button" data-dewank-consent-open="">Cookie settings</button>{" "}
          at the bottom of any page. Withdrawing reloads the page without the measurement tools, and removes the measurement
          cookies that this browser holds for this site.
        </li>
        <li>
          Withdrawal stops future collection by the measurement tools. It does not reverse data that Google or Meta received and
          processed before you withdrew. To ask Google or Meta to delete such data, use their own tools, or contact us and we
          will point you to them.
        </li>
      </ul>

      <h2 id="country">9. Country detection and currency</h2>
      <p>
        Some offer pages on the Arabic site show each offer’s price in the currency of your country, using the prices we have
        approved for each country: Saudi Arabia, the United Arab Emirates, Bahrain, Kuwait, Qatar and Oman. The site determines
        your country in one of two ways:
      </p>
      <ul>
        <li>
          A country you have already saved in your browser under the key <bdi dir="ltr">dewank_offer_country</bdi>.
        </li>
        <li>
          If no country is saved, a request for your country code to the third-party service{" "}
          <bdi dir="ltr">api.country.is</bdi>. Your browser sends this request directly to that service, and, like any web
          request, it can include your IP address. On the Arabic homepage and offer pages, the request starts about 6.5 seconds
          after the page loads, and at present you are not asked to consent to it. [Owner and counsel decision pending: whether
          this request will require consent, or be replaced by another method.]
        </li>
      </ul>
      <p>
        The site stores only the country code, not your IP address. You can remove a saved country by clearing this site’s
        data in your browser. If no approved price exists for your country, the site shows the standard approved price.
      </p>
      <p>
        On the English site, offer prices are shown in US dollars, and the site does not request your country from{" "}
        <bdi dir="ltr">api.country.is</bdi>. If you saved a country on the Arabic site, the English site shows that country’s
        approved price where one exists, and otherwise keeps the US dollar price. No amount is converted from one currency to
        another.
      </p>

      <h2 id="recipients">10. Who receives your information</h2>
      <ul>
        <li>The Dewank team that handles enquiries and correspondence.</li>
        <li>Meta, for WhatsApp, and for the Meta Pixel after you allow advertising measurement.</li>
        <li>Google, for Google Tag Manager, Google Analytics 4 and Google Ads after you allow the relevant category.</li>
        <li>The third-party service <bdi dir="ltr">api.country.is</bdi>, to determine your country as section 9 explains.</li>
        <li>The hosting provider that runs the site and records server logs: [name of hosting provider, to be confirmed].</li>
      </ul>
      <p>
        No email delivery provider or customer-relationship system is connected to the site at present. [If a processor is
        appointed later, this section will name it and its role.] We do not sell personal information. [Owner to confirm.]
      </p>

      <h2 id="transfers">11. International transfers</h2>
      <p>
        Google, Meta and the country service may process information outside your country, including outside the Gulf
        Cooperation Council. WhatsApp messages are processed in Meta’s infrastructure. [Location of the hosting provider and
        of the Dewank team: to be confirmed.]
      </p>

      <h2 id="retention">12. How long we keep information</h2>
      <ul>
        <li>Browser storage: until you delete it or withdraw your choice, as section 6 describes.</li>
        <li>Server logs: [retention period set by the hosting provider, to be confirmed].</li>
        <li>Enquiries and WhatsApp conversations: [retention period set by Dewank, to be confirmed].</li>
        <li>Measurement data: [retention period set in the Google and Meta account settings, to be confirmed].</li>
      </ul>

      <h2 id="security">13. How we protect information</h2>
      <p>
        The site is served over HTTPS, so the connection between your browser and the site is encrypted. The site does not
        request payment or other sensitive data. The site does not store enquiries, because the enquiry form opens WhatsApp
        instead. Access to enquiries is limited to the Dewank team that handles them. [Describe access controls for the team:
        to be confirmed by the owner.] If a personal data breach affects your information, we will notify the relevant
        authorities and the people concerned, as the applicable laws require.
      </p>

      <h2 id="rights">14. Your rights</h2>
      <p>Depending on the laws that apply to our processing, you have the right to:</p>
      <ul>
        <li>ask what personal information we hold about you and how we process it;</li>
        <li>ask us to correct information that is inaccurate;</li>
        <li>ask us to delete information that is no longer needed, or that was processed on the basis of consent you have withdrawn;</li>
        <li>object to our use of your information for direct marketing, and to processing in other cases the applicable laws set out;</li>
        <li>withdraw your consent at any time, as section 8 describes.</li>
      </ul>
      <p>
        To exercise these rights, email <a href="mailto:hello@dewank.com">hello@dewank.com</a> or message us on WhatsApp at{" "}
        <bdi dir="ltr">+973 3906 6649</bdi>. We respond within the time the applicable laws set. In Saudi Arabia the Personal Data
        Protection Law, as we understand it, sets 30 days, which can be extended in some cases. [Owner and counsel to confirm the
        period for each country we serve.] We may ask you to confirm your identity before we act.
      </p>
      <p>
        If you believe our processing breaches the applicable law, you can complain to the competent authority in your
        country. In Saudi Arabia, the competent authority is the Saudi Data and Artificial Intelligence Authority (SDAIA). In
        Bahrain, [the competent data protection authority and its contact details: to be confirmed].
      </p>

      <h2 id="children">15. Children’s privacy</h2>
      <p>
        Our site and services are intended for businesses and adults. We do not knowingly collect personal information from
        children. If you believe a child has sent us information, contact us and we will delete it.
      </p>

      <h2 id="contact">16. Contacting us about privacy</h2>
      <p>
        For questions about this policy or to exercise your rights: <a href="mailto:hello@dewank.com">hello@dewank.com</a>, or
        WhatsApp <bdi dir="ltr">+973 3906 6649</bdi>, or post to [postal address, to be confirmed]. [Whether a data
        protection officer is appointed: owner decision pending.]
      </p>

      <h2 id="updates">17. Changes to this policy</h2>
      <p>
        We update this page when what we collect, use or share changes, and we show the effective date at the top. [Effective
        date and version number: added when the owner approves the text.]
      </p>
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
