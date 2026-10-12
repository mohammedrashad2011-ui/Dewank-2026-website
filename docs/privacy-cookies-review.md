# Privacy and cookie notices: review items

Status: **drafts, not approved.** Both notices are `noindex` and stay that way until counsel and the owner approve the text.
This document records what the code does and what is still undecided. It makes **no** claim of legal compliance with any
data-protection law. Only qualified counsel can make that determination.

- Arabic draft: `app/(ar)/privacy/page.tsx`, served at `/privacy`.
- English draft: `app/(en)/en/privacy/page.tsx`, served at `/en/privacy`.

## What the code does

### Consent

- A bilingual consent dialog appears on the first visit. It offers **Accept all**, **Reject all** and **Manage choices**.
  Manage offers two categories: usage measurement and advertising measurement. The dialog is built in
  `app/components/consent-bootstrap.ts`.
- A visitor who does nothing has made no choice. No vendor request is made. The dialog stays until a choice is made.
- The choice is stored in the browser's local storage under `dewank-consent-v1`. The value holds only
  `{ v, analytics, advertising, at }`: the two category flags and the time of the choice. It holds no identifier.
- Withdrawal is possible at any time through the **Cookie settings** control in the footer (Arabic: إعدادات ملفات تعريف
  الارتباط). When a vendor has loaded, withdrawal reloads the page without it.
- Google Consent Mode v2 starts with `analytics_storage`, `ad_storage`, `ad_user_data` and `ad_personalization` set to
  denied. `functionality_storage` and `security_storage` are set to granted.

### Vendors

- Google Tag Manager, Google Analytics 4 and the Meta Pixel are loaded only after the matching category is allowed, and
  only in the production analytics mode (`docs/analytics-environments.md`). Usage measurement loads GTM and GA4.
  Advertising measurement loads GTM and the Meta Pixel.
- Preview builds never load these vendors, whatever the stored choice.
- In production mode, `dataLayer` event objects are dropped unless the visitor has allowed at least one category. So no
  conversion event is recorded before a choice, or after Reject all. After a choice that allows a category, events are
  pushed as before. In preview mode events are pushed as before, and nothing is sent anywhere.
- Measurement cookies left by an earlier visit are removed on each load where no category is allowed. The names
  removed are `_ga`, `_ga_*`, `_gid`, `_gcl_au`, `_gcl_aw`, `_fbp` and `_fbc`.

### Country lookup for offer prices (Arabic offer pages)

- The Arabic offer pages call `api.country.is` to find the visitor's country, so that the price is shown in that
  country's currency. This is **not** gated by the consent dialog. The request is sent as any web request is, and it
  includes the connecting IP address.
- The country code is stored in local storage under `dewank_offer_country`, so the call does not repeat on the next
  visit. The site does not store the IP address.
- Verified: the call is made on `/offers` and the Arabic offer pages. It is not made on the English pages in this build.

### Contact

- **Arabic form** (`app/(ar)/contact/contact-form.tsx`): on submit it opens a WhatsApp conversation (`wa.me`) containing
  the name, email, phone, company or project, service and brief the visitor typed. The message reaches WhatsApp, which is
  operated by Meta, when the visitor sends it. It does not reach a Dewank server.
- **English form** (`app/(en)/en/_en/contact-form.tsx`): closed in this build (`formEnabled = false` in
  `app/(en)/en/contact/page.tsx`). Its inputs are disabled, and visitors are told to use email or WhatsApp. When it is
  opened, it posts to `/en/api/contact`, which returns HTTP 405, so no enquiry can be delivered. This is blocker B1 in
  the release report, and it must be fixed before the form opens.
- `app/api/contact/route.ts` validates a submission and returns `persisted: false`. It stores nothing. No code path
  stores a contact submission.

## Items for the owner and counsel

| # | Item | Owner or counsel | Notice section |
|---|---|---|---|
| 1 | Legal entity name, commercial registration number and registered address | Owner | Who we are |
| 2 | Which data-protection rules apply to the business and its visitors | Counsel | All |
| 3 | Lawful basis for each purpose, if the applicable rules require one | Counsel | Why we use it |
| 4 | Delivery route for English enquiries (WhatsApp hand-off as on the Arabic site, or an email provider) | Owner | Who receives your details |
| 5 | Any email or CRM processor: identity, role, data region, and processing terms | Owner | Who receives your details, International transfers |
| 6 | Whether enquiry details are used for advertising or remarketing | Owner and counsel | Who receives your details |
| 7 | Retention periods: enquiries, WhatsApp conversations, the consent record, GA4 data retention, Meta data | Owner | How long we keep them |
| 8 | Country lookup: keep the third-party call, require consent for it, or replace it. Provider terms and retention at `api.country.is` | Owner and counsel | Country detection |
| 9 | Cookie and storage inventory: what each vendor sets and for how long, including the `dewank_offer_country` key | Owner (provider documentation) | Cookies and measurement |
| 10 | Provider-side settings: GTM consent overview and tag firing, GA4 consent settings, Meta Pixel consent handling, and Google Ads conversion settings | Owner (in the provider accounts) | Cookies and measurement |
| 11 | Whether a server-side consent record is needed. The current record is local to each browser only | Counsel | Cookies and measurement |
| 12 | Approval to publish either notice, and removal of the `noindex` overrides at the same time | Owner, after counsel | Changes to this notice |
| 13 | Publication date and version number of the notice | Owner | Changes to this notice |

## What this review does not claim

- It does not state that the site complies with GDPR, Saudi PDPL, Bahrain's data-protection law, or any other law.
- It does not state that the consent dialog meets a legal standard of consent. The dialog describes what the code does.
- It does not state that the provider accounts are configured as the notices describe. That is item 10.

## Verification performed on the release-candidate build

These checks ran against the production build of this branch, with the default first visit (no stored choice).

- **Consent scenarios** (`scratchpad/qa/consent-test.mjs`, run on the candidate build): first visit made 0 vendor
  requests and showed the dialog. Reject all made 0 vendor requests. Accept all made vendor requests, hid the dialog and
  kept the choice after a reload. Analytics-only loaded GTM and not Meta. Withdrawal removed all measurement cookies and
  made 0 vendor requests after the reload. After a language switch the choice was kept and the dialog did not return.
- **No-choice loads** (`dl-check`): 0 vendor requests on every sampled route.
- **Third-party hosts** (`net-check`): on the English pages, none. On the Arabic offers pages, `api.country.is` only.
- Cookie names and the localStorage key were checked against the code, not against a live vendor account.
