# Country lookup for offer prices: decision record

Status: **decision pending (owner and counsel).** Nothing in this branch changes the lookup. The Arabic site keeps
its current behaviour and the privacy policy describes it accurately. This record sets out the options, their
trade-offs, and a recommendation.

## What the code does today

| Surface | Call | When | Consent gate |
|---|---|---|---|
| Arabic offer pages (`app/(ar)/offers/use-offer-price.ts`, `localized-offer.tsx`) | `GET https://api.country.is/` from the browser | When no country is saved in `dewank_offer_country`: during browser idle time, no later than about 3 s after load (2.2 s where idle callbacks are unsupported) | None |
| Arabic homepage offers section (`app/components/home-selected-offers.tsx`) | `GET https://api.country.is/` from the browser | About 6.5 s after load, when no country is saved | None |
| English offer pages (`app/(en)/en/_en/lib/localized-price.tsx`) | Same call, but gated by `COUNTRY_LOOKUP_APPROVED = false` | Never in this build | Not applicable |

- The response is one country code. The site saves that code under `dewank_offer_country` and never saves the IP
  address.
- A saved country on the Arabic site also applies on the English site, where the English pricing rule uses it when an
  approved price exists and otherwise shows US dollars. No amount is converted.
- Arabic prices come from `app/(ar)/offers/offer-pricing.ts`. Countries with approved prices: Saudi Arabia (SAR,
  default), United Arab Emirates (AED), Bahrain (BHD), Kuwait (KWD), Qatar (QAR) and Oman (OMR).
- Verified in this branch: with the lookup failing, the Arabic site shows the SAR default; with a saved country, it shows
  that country's approved price. These behaviours are covered by `scratchpad/qa/pricing-regress.mjs`, which compares
  prices, call counts and stored countries across 32 scenarios.

## Why this needs a decision

The request sends the visitor's IP address to a third party before any choice is offered. Whether that needs consent,
or can rest on another ground, is a legal question for counsel. Only the owner can decide whether currency localisation
is worth the third-party request.

## Options

### A. Keep the lookup as it is, and disclose it (current state)

- Price accuracy: unchanged. Every visitor who reaches the lookup sees their country's approved price.
- Privacy: the IP address goes to `api.country.is` without a choice. The privacy policy (sections 9 and 10) says so.
- Engineering: none.
- Risk: the disclosure may be judged insufficient without consent. Counsel must decide.
- Provider: the terms and data handling of `api.country.is` are not reviewed. The owner must confirm them.

### B. Gate the lookup behind a consent choice (recommended if counsel requires consent)

- Consent is asked for in the existing dialog, as an additional category ("Local prices"), or the lookup runs only after
  the visitor has chosen the advertising or usage category.
- Price accuracy: visitors who have not chosen see the SAR default, which is wrong for visitors in other countries.
  The page should then say that prices are shown in Saudi riyals, and offer a currency choice.
- Privacy: no IP address goes to a third party before a choice.
- Engineering: small. The gate is a condition on the existing `fetch`. The dialog needs one more category.

### C. Determine the country on the server from the hosting provider's geolocation header

- Price accuracy: close to option A, if the hosting provider supplies a country header for each request.
- Privacy: the lookup happens inside the hosting infrastructure, and no separate third party receives the IP address.
  Whether the provider's own processing is covered by a processing agreement must be checked.
- Engineering: moderate. The production host must be shown to provide such a header. The release branch cannot verify
  this: no hosting configuration is in the repository, and the live site was checked read-only only. This needs
  confirmation from the owner's hosting account.
- Because production is served from Hostinger (`Server: hcdn`, see the deployment runbook), the header's availability is
  unknown until the owner checks it.

### D. A visible currency selector, with no detection

- Price accuracy: the visitor chooses. Accuracy depends on the choice.
- Privacy: no lookup at all.
- Engineering: moderate. It changes the offer-page design, which is an approved design, so it needs owner approval.

## Recommendation

1. **Launch with option A**, with the disclosure already in the privacy policy, so prices keep working and nothing
   silently changes. This is acceptable only if counsel accepts the disclosure for the markets served.
2. **If counsel requires consent for the lookup, move to option B** before the launch goes live. Keep the SAR default for
   visitors who have not chosen, and say that prices are shown in riyals in that case.
3. **In parallel, check option C** with the hosting account. If the host provides a country header, it is the best
   long-term option: it keeps price accuracy and removes the third-party request.

Do not remove the lookup silently. Any change must be deliberate, reviewed and reflected in the privacy policy.

## Owner and counsel questions

1. Does counsel accept disclosure (option A) for the markets served, or require consent (option B)?
2. Does the hosting provider supply a country header for requests? (Check in the hosting account.)
3. What do the terms of `api.country.is` say about retention, location and use? Is a processing agreement needed?
4. If option B is chosen, is the currency fallback message (SAR) acceptable, or should option D be added?
