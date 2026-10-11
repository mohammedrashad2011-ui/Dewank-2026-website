import Link from "next/link";

// English copy of the Arabic HomeSelectedOffers. Same card markup and styling (home-offer-card).
// Deliberately NOT copied from the Arabic component:
// - country-based prices, the third-party country lookup and the popularity request (needs approval before use);
// - the home_offer_select dataLayer event (tracking is out of scope for this preview).
// Each card shows the scope and a request route. Prices are withheld until approved (see the PR notes).
const offers = [
  {
    key: "brand-naming",
    label: "BRAND NAMING",
    title: "Brand naming",
    text: "Names shaped by meaning, with preliminary checks for similarity and domain availability, and an initial direction for the brand.",
    href: "/en/brand-naming",
  },
  {
    key: "google-ads-launch",
    label: "GOOGLE ADS",
    title: "Google Ads launch",
    text: "An organised Search campaign: tight keyword groups, negative keywords and basic conversion tracking.",
    href: "/en/paid-advertising",
  },
  {
    key: "whatsapp-automation-starter",
    label: "WHATSAPP AUTOMATION",
    title: "WhatsApp automation starter",
    text: "Response, qualification, data capture and handover to your team, within a clear foundation scope.",
    href: "/en/whatsapp-crm-automation",
  },
] as const;

export function HomeSelectedOffers() {
  return (
    <div className="en-offer-grid">
      {offers.map((offer, index) => (
        <Link className={`home-offer-card${index === 0 ? " is-recommended" : ""}`} href={offer.href} key={offer.key}>
          <div className="home-offer-top">
            <small>{offer.label}</small>
            <div className="home-offer-signals">
              {index === 0 && <b>Starting point</b>}
              <span aria-hidden="true">↗</span>
            </div>
          </div>
          <h3>{offer.title}</h3>
          <p>{offer.text}</p>
          <div className="home-offer-bottom">
            <div className="home-offer-price">
              <strong>Quoted after a scope call</strong>
            </div>
            <b>View the service</b>
          </div>
        </Link>
      ))}
    </div>
  );
}
