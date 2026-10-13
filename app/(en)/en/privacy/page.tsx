import { EnShell } from "../_en/shell";
import { enMetadata } from "../_en/metadata";
import "../_en/styles/privacy.en.css";

// Privacy and cookie policy (English). Short and customer-facing; it describes only what the site's code does.
// Public access and search indexing are separate settings. The page is public (footer and consent banner link to it).
// It stays out of search results (noindex) until the owner decides otherwise.
export const metadata = {
  ...enMetadata(
    "Privacy and Cookie Policy",
    "How Dewank handles the details you send us, how cookies and measurement tools work, and the choices you have.",
    "/en/privacy",
  ),
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
};

function PrivacyPage() {
  return (
    <section className="hero shell privacy">
      <span className="eyebrow">Privacy and cookies</span>
      <h1>Privacy and Cookie Policy</h1>
      <p>
        This page explains what we collect when you use dewank.com, why, and the choices you have. Last updated: 12 October 2026.
      </p>

      <h2 id="about">1. Who we are</h2>
      <p>
        DEWANK is an independently operated brand. It is not currently registered as a company, and it has no commercial
        registration and no registered address. For privacy questions:
      </p>
      <ul>
        <li>
          Email: <a href="mailto:hello@dewank.com">hello@dewank.com</a>
        </li>
        <li>
          WhatsApp: <bdi dir="ltr">+973 3906 6649</bdi>
        </li>
      </ul>

      <h2 id="collect">2. What we collect</h2>
      <ul>
        <li>
          <strong>Contact form:</strong> your name, work email address, company (optional), the country you are based in, the
          service you need, your timeline, your project brief, and your agreement that we may reply.
        </li>
        <li>
          <strong>Messages you send us:</strong> WhatsApp conversations and emails you start.
        </li>
        <li>
          <strong>Technical information:</strong> your IP address, browser type, the pages you request and the times of your
          requests. Our hosting provider records this to run and protect the site.
        </li>
        <li>
          <strong>Your choices:</strong> your cookie choices, and the country code used to show prices (section 7).
        </li>
        <li>
          <strong>Measurement data:</strong> collected only after you allow the relevant category (section 4).
        </li>
      </ul>
      <p>We do not ask for payment card details, bank account details or government identity numbers through this website.</p>

      <h2 id="enquiries">3. Contact form and WhatsApp</h2>
      <p>
        When you press Send on the contact form, the form opens a WhatsApp conversation with the details you entered, written out
        in English. The form does not send those details to a Dewank server, and the website does not store them. Your enquiry
        reaches us when you press Send inside WhatsApp. WhatsApp is operated by Meta Platforms and is subject to Meta&rsquo;s terms
        and policies.
      </p>
      <p>
        After that, the conversation stays in WhatsApp, where our team reads it and replies. WhatsApp conversations and customer
        enquiries may be kept for ongoing communication with you. No automatic deletion period is currently established. You can
        ask us to delete your information at <a href="mailto:hello@dewank.com">hello@dewank.com</a>, subject to applicable
        requirements.
      </p>
      <p>
        When you click a WhatsApp button on the site, the site records a measurement event named{" "}
        <bdi dir="ltr">sitewide_whatsapp_click</bdi> with the page or service you clicked from. It does not include the text of
        your message or your contact details.
      </p>

      <h2 id="analytics">4. Measurement: Google and Meta</h2>
      <p>The site does not load any measurement tool until you choose. After you allow a category, these tools are used:</p>
      <ul>
        <li>
          <strong>Usage measurement (after you allow it):</strong> Google Tag Manager and Google Analytics 4, measurement ID{" "}
          <bdi dir="ltr">G-5SKKT1NBHB</bdi>. They record the pages you view, how long you stay, your device and browser type,
          and the approximate country suggested by your IP address.
        </li>
        <li>
          <strong>Advertising measurement (after you allow it):</strong> the Meta Pixel, ID <bdi dir="ltr">2274266710087331</bdi>,
          which records page views. Google Ads may also receive conversion information where it is enabled in our accounts.
        </li>
      </ul>
      <p>
        The site also sends measurement events when you click WhatsApp buttons or offers, and when you send the contact form.
        These events do not include the text of your messages or the contact details you type. Which of these events reach Google
        and Meta is set in our measurement configuration.
      </p>
      <p>
        Google and Meta process this information under their own policies and may use it for their own purposes, including in
        countries outside yours. You can read their policies directly.
      </p>

      <h2 id="cookies">5. Cookies and local storage</h2>
      <p>
        The site stores a few items in your browser&rsquo;s local storage to remember your choices. It sets no measurement cookie
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
              <td>Set by Google. You can see each cookie&rsquo;s lifetime in its details in your browser, and Google&rsquo;s cookie policy describes them.</td>
            </tr>
            <tr>
              <td><bdi dir="ltr">_fbp</bdi>, <bdi dir="ltr">_fbc</bdi></td>
              <td>Measurement cookies</td>
              <td>Advertising measurement for Meta. Set only after you allow advertising measurement.</td>
              <td>Set by Meta. You can see each cookie&rsquo;s lifetime in its details in your browser, and Meta&rsquo;s cookie policy describes them.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="consent">6. Your consent, refusal and withdrawal</h2>
      <ul>
        <li>
          On your first visit usage measurement is on by default. Advertising measurement (Google Ads and the Meta Pixel) stays
          off until you turn it on.
        </li>
        <li>Refusing measurement does not affect how you use the site or the services you request.</li>
        <li>
          You can change or withdraw your choice at any time from{" "}
          <button type="button" className="legal-link-button" data-dewank-consent-open="">Cookie settings</button>{" "}
          at the bottom of any page. Withdrawing reloads the page without the measurement tools and removes the measurement
          cookies that this browser holds for this site.
        </li>
        <li>
          Withdrawal stops future collection. It does not reverse data that Google or Meta received before you withdrew. To ask
          Google or Meta to delete such data, use their own tools, or contact us and we will point you to them.
        </li>
      </ul>

      <h2 id="country">7. Country and offer prices</h2>
      <p>
        Offer pages on the Arabic site, and the offers section of the Arabic homepage, show each offer&rsquo;s price in your
        country&rsquo;s currency, using the approved prices for Saudi Arabia, the United Arab Emirates, Bahrain, Kuwait, Qatar and
        Oman. To find your country, the site uses one of two methods:
      </p>
      <ul>
        <li>a country you have already saved in your browser under the key <bdi dir="ltr">dewank_offer_country</bdi>;</li>
        <li>
          if no country is saved, a request for your country code to the third-party service{" "}
          <bdi dir="ltr">api.country.is</bdi>. Your browser sends this request directly to that service, and, like any web
          request, it can include your IP address. On the Arabic homepage the request starts about 6.5 seconds after the page
          loads. On Arabic offer pages it starts when the browser is idle, and no later than about three seconds after the page
          loads. At present you are not asked to consent to it. We are reviewing this request as part of our ongoing privacy
          review, and we will update this page if the way it works changes.
        </li>
      </ul>
      <p>
        The site stores only the country code, not your IP address. You can remove a saved country by clearing this site&rsquo;s
        data in your browser. If your country has no approved price, the site shows the US dollar price. If your country cannot be
        determined, the site shows the Saudi riyal price, which is the default on the Arabic site.
      </p>
      <p>
        On the English site, offer prices are shown in US dollars, and the site does not request your country from{" "}
        <bdi dir="ltr">api.country.is</bdi>. If you saved a country on the Arabic site, the English site shows that country&rsquo;s
        approved price where one exists, and otherwise keeps the US dollar price. No amount is converted from one currency to
        another.
      </p>

      <h2 id="recipients">8. Who receives your information</h2>
      <ul>
        <li>The Dewank team, to reply to your enquiries and messages.</li>
        <li>Meta, for WhatsApp, and for the Meta Pixel after you allow advertising measurement.</li>
        <li>Google, for Google Tag Manager, Google Analytics 4 and Google Ads after you allow the relevant category.</li>
        <li>The third-party service <bdi dir="ltr">api.country.is</bdi>, to determine your country as section 7 explains.</li>
        <li>
          <bdi dir="ltr">Hostinger</bdi>, the hosting provider that runs the site and records server logs.
        </li>
      </ul>
      <p>
        We do not currently use an email delivery provider or a customer-relationship system connected to the site. If we appoint
        a processor later, this section will name it and its role.
      </p>

      <h2 id="transfers">9. International transfers</h2>
      <p>
        Google, Meta, Hostinger and the country service may process information outside your country, including outside the Gulf
        Cooperation Council, under their own policies.
      </p>

      <h2 id="retention">10. How long we keep information</h2>
      <ul>
        <li>Browser storage: until you delete it or withdraw your choice, as section 5 describes.</li>
        <li>
          Server logs: kept under the data-retention practices of our hosting provider, <bdi dir="ltr">Hostinger</bdi>. See its
          privacy policy for details.
        </li>
        <li>
          Enquiries and WhatsApp conversations: may be kept for ongoing communication, as section 3 describes. No automatic
          deletion period is currently established. You can ask us to delete them at{" "}
          <a href="mailto:hello@dewank.com">hello@dewank.com</a>, subject to applicable requirements.
        </li>
        <li>Measurement data: according to the retention settings in our Google and Meta accounts.</li>
      </ul>

      <h2 id="rights">11. Your rights</h2>
      <p>Depending on the laws that apply to our processing, you have the right to:</p>
      <ul>
        <li>ask what personal information we hold about you and how we process it;</li>
        <li>ask us to correct information that is inaccurate;</li>
        <li>ask us to delete information that is no longer needed, or that was processed on the basis of consent you have withdrawn;</li>
        <li>withdraw your consent at any time, as section 6 describes.</li>
      </ul>
      <p>
        To exercise these rights, email <a href="mailto:hello@dewank.com">hello@dewank.com</a> or message us on WhatsApp at{" "}
        <bdi dir="ltr">+973 3906 6649</bdi>. We respond within the time the applicable laws set. In Saudi Arabia, the implementing
        regulations of the Personal Data Protection Law set a period of 30 days, which can be extended in some cases. We may ask
        you to confirm your identity before we act.
      </p>
      <p>
        If you believe our processing breaches the applicable law, you can complain to the competent data protection authority in
        your country. In Saudi Arabia, that authority is the Saudi Data and Artificial Intelligence Authority (SDAIA).
      </p>

      <h2 id="children">12. Children&rsquo;s privacy</h2>
      <p>
        Our site and services are intended for businesses and adults. We do not knowingly collect personal information from
        children. If you believe a child has sent us information, contact us and we will delete it.
      </p>

      <h2 id="updates">13. Changes to this policy</h2>
      <p>
        We post any change to this page and show the date of the last update at the top. Last updated: 12 October 2026.
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
