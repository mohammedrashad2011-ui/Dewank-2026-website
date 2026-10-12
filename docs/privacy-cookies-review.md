# Privacy and cookie notices: review items

Status: **drafts, not approved.** Both notices are `noindex` and stay that way until counsel and the owner approve the text.
This document records what the code does and what is still undecided. It makes **no** claim of legal compliance with any
data-protection law. Only qualified counsel can make that determination.

- Arabic draft: `app/(ar)/privacy/page.tsx`, served at `/privacy`.
- English draft: `app/(en)/en/privacy/page.tsx`, served at `/en/privacy`.

## What the code does

### Consent

- A bilingual consent banner appears on the first visit. It offers **Accept all**, **Reject all** (the same size and
  weight) and **Manage preferences**. Preferences open a dialog with two categories, usage measurement and advertising
  measurement, each with its description, the withdrawal instructions and a link to the privacy notice. The banner and
  dialog are built in
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
- **English form** (`app/(en)/en/_en/contact-form.tsx`): open on the release branch. It validates the fields, writes an
  English enquiry, and opens WhatsApp with it, following the Arabic form. Nothing is posted to a Dewank server, and the
  page does not report the enquiry as sent until the visitor presses Send in WhatsApp. If the browser blocks the window,
  the visitor gets the link and the text. The form records the same tracking event as the Arabic form, only after
  consent to measurement, and without the brief.
- The root `/api/contact` route has been removed. It returned a success response for valid submissions and stored nothing.
  No code path stores a contact submission.

## Status after the final pre-launch pass (12 October 2026)

The notices were rewritten as short, customer-facing policies (commit `0d79958`). What changed against the table below:

- The draft banner and the "for review" notes are removed. Nothing in the notices claims legal approval. Both pages are
  public (footer and consent banner) and stay `noindex` until the owner decides. Access and indexing are separate settings.
- Items 1, 4, 5 and 9 are resolved in the wording. Item 8 is decided for launch (kept, with disclosure); counsel review continues.
- Two essential disclosures remain open and are marked in the notices: the retention period for enquiries and WhatsApp
  conversations, and the server-log retention period from the hosting provider (items 7a and 7b).
- Checked against the code and the owner account, not assumed: the events sent to the measurement layer are
  `sitewide_whatsapp_click`, `offer_select`, `home_offer_select` and `contact_whatsapp_submit`, none with message text or
  contact details. The Meta Pixel receives `PageView` only (Events Manager shows `PageView` as the only active event).
- Not verified: whether the GTM container forwards those events to Google Analytics or Google Ads (container
  `GTM-PG525ZFN` is not reachable from the owner session used here), and whether any remarketing audience is built from
  them. The notices say only what the code sends and that Google and Meta use the data under their own policies. If
  remarketing is used, the notices need a sentence on it before launch.

## Items for the owner and counsel

Status after the final pass. "Launch blocker" means it must be closed before merge to `main`, or before the English
launch. The notices carry 11 distinct bracketed facts (each in both languages). Everything else is written from the code
or from facts the owner supplied.

| # | Item | Owner or counsel | Status | Launch blocker |
|---|---|---|---|---|
| 1 | Who is responsible for the data. DEWANK is independently operated and not registered: no commercial registration, no registered office | Owner | Stated in both notices. Counsel to say whether the operator's name must also be given | No |
| 2 | Which data-protection rules apply | Counsel | Open. Notices say "as we understand it" where unsure | Yes (counsel approval) |
| 3 | Lawful basis for each purpose | Counsel | Open | Yes (counsel approval) |
| 4 | English enquiry route | Owner | Resolved: WhatsApp hand-off, as on the Arabic site | No |
| 5 | Processors. None connected. Hosting provider named as Hostinger | Owner | Resolved for the named host. Any later processor is a notice update | No |
| 6 | Remarketing or custom audiences in Google Ads or Meta | Owner (check the ad accounts) | Open. Bracketed in both notices | Yes |
| 7a | Retention of WhatsApp conversations and enquiries | Owner | Open. Bracketed | Yes |
| 7b | Retention of server logs (Hostinger) | Owner (hosting account) | Open. Bracketed | Yes |
| 7c | Retention of measurement data (GA4 data retention, Meta) | Owner (GA4 and Meta settings) | Open. Bracketed | Yes |
| 8 | Country lookup (`api.country.is`) | Owner (decided) and counsel (review) | Decided for launch: kept, with disclosure. Counsel review continues | No |
| 9 | Cookie lifetimes | Owner (provider documentation) | Resolved by reference to each provider's policy. The owner checks the values in each account (item 10) | No |
| 10 | Provider-side settings: GTM consent overview and tag firing, GA4 consent settings, Meta consent handling, Google Ads conversion settings | Owner (in each account) | Open. Not verifiable from the code | Yes |
| 11 | Whether a server-side consent record is needed. The current record is local to each browser | Counsel | Open | No |
| 12 | Hosting data location and team location (international transfers) | Owner (hosting account) | Open. Bracketed | Yes |
| 13 | Whether the operator sells personal data (the notices say it does not) | Owner | Open. Bracketed | Yes |
| 14 | Team access controls | Owner | Open. Bracketed | No (needed for approval) |
| 15 | Response period for each country served. Saudi: 30 days, extendable in some cases | Counsel | Open for the other countries. Bracketed | Yes (counsel approval) |
| 16 | Bahrain complaint route. The authority under Law No. 30 of 2018 and its current contact details | Counsel and owner | Partly stated. Contact details bracketed for confirmation before publication | Yes |
| 17 | Data protection officer: appointed or not | Counsel and owner | Open. Bracketed | Yes if counsel requires one |
| 18 | Approval to publish either notice, and removal of the draft banner and the `noindex` overrides | Owner, after counsel | Open | Yes |
| 19 | Publication date. The notice states it takes effect from the date it is published on the page | Owner, at publication | Launch step | No |

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
