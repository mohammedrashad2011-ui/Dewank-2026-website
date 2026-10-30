# Measurement map (updated 13 October 2026)

> Historical account snapshot. Do not use the v7 observations below as current configuration.
> Read-only inspection on 30 October 2026 retrieved published GTM resource version 11. It contains a Google tag for
> `G-5SKKT1NBHB`, active `whatsapp_click` and `contact_intent` link tags, and a paused legacy tag. The old
> `whatsapp_click_790_offer` name remains in the conversion-marking rules but no active event tag emits it in this
> resource. Account-side key-event/import settings and live delivery still need verification. Do not pause or publish
> tags based on the historical recommendations below. See `pr204-performance-seo-analytics-2026-10-30.md`.

Status key: **VERIFIED** (observed in an account or locally), **CONFIGURED BUT UNVERIFIED** (set up in the container or code,
not observed live), **NEEDS OWNER ACCESS** (could not be read from the session).

Identifiers (unchanged): GTM `GTM-PG525ZFN` (workspace "dewank.com", live version 7, published 6 Oct 2026, 0 pending
changes). GA4 `G-5SKKT1NBHB` (property `a139422952p536531439`, stream `https://dewank.com`). Meta Pixel `2274266710087331`.
Google Ads conversion `768813020`. GA4 is linked to the Google Ads account "M.rashad" (756-612-2856), enabled for
personalised advertising, linked 6 Aug 2026 (VERIFIED in GA4 Admin > Google Ads links).

## Map

| User action | Site dataLayer event | GTM trigger (live v7) | GA4 event (tag) | Key event (GA4) | Meta | Google Ads | Classification | Status |
|---|---|---|---|---|---|---|---|---|
| Page load, after usage consent | none | none | `page_view` from the site's `gtag('config')` (site code, once) | not key | `PageView` (site `fbq`, after advertising consent) | none | page view | VERIFIED locally (one per load); Meta `PageView` active in Events Manager |
| Click a WhatsApp link (`wa.me`), any page | `sitewide_whatsapp_click` is pushed but no GTM trigger uses it | `LC - WhatsApp links (contact_intent)` (Just Links, `wa.me`) | `whatsapp_click` (canonical) **and** `contact_intent` (WhatsApp CTA tag) **and** `whatsapp_click_790_offer` (legacy, no page filter) | `whatsapp_click_790_offer` **is a key event** (filled star; stream data in the last 28 days). `whatsapp_click` and `contact_intent` are not | none | Google Ads import of key events: NEEDS OWNER ACCESS | lead intent, not a conversion. **Up to three GA4 events per click** | `whatsapp_click_790_offer` VERIFIED as a key event and as received by GA4. Duplication CONFIGURED BUT UNVERIFIED live |
| Click WhatsApp on `/offers/brand-naming` | as above | `LC - WhatsApp links (brand-naming offer)` (page path filter) | `whatsapp_click_brand_naming` plus the three above | not key | none | NEEDS OWNER ACCESS | lead intent, up to four events on this page | CONFIGURED BUT UNVERIFIED |
| Submit the English or Arabic contact form (WhatsApp hand-off) | `contact_whatsapp_submit` (no brief, no contact details) | `CE - contact_whatsapp_submit` (Custom Event) | `contact_intent` with `lead_source = contact_form` (tag "GA4 - contact_intent - contact form") | not key | none | NEEDS OWNER ACCESS | lead intent (opens WhatsApp; not a confirmed enquiry) | CONFIGURED BUT UNVERIFIED |
| Click an offer on the offers hub | `offer_select` | `CE - offer_select` | `offer_select` (`list_location = offers_hub`) | not key | none | NEEDS OWNER ACCESS | engagement | CONFIGURED BUT UNVERIFIED |
| Click an offer on the homepage | `home_offer_select` | `CE - home_offer_select` | `home_offer_select` | not key | none | NEEDS OWNER ACCESS | engagement | CONFIGURED BUT UNVERIFIED |
| Homepage offers grid seen | none | `EV - home offers grid (50% / 1.5s)` | `home_offers_view` | not key | none | none | exposure | CONFIGURED BUT UNVERIFIED |
| First visit, no choice | none | none (Tag Assistant: "8 tags did not fire") | none | none | none | none | no measurement | VERIFIED: Tag Assistant on the live homepage; local build: no vendor request |
| Accept all | consent `update` | none | `page_view`; event tags | per key event | `PageView` | conversion pings for `768813020` seen | per consent | VERIFIED locally (earlier matrix). Live first visit with no choice still sends vendor requests (see below) |

Key events in GA4 (Admin > Events > Key events, last 28 days): `purchase` (listed, no stream data) and
`whatsapp_click_790_offer` (Dewank Website). No other event is a key event.

Live production today (before this release): a first visit with no choice sends GTM, GA4, Google Ads (`768813020`) and Meta
requests, and no consent banner is shown. This release removes that. VERIFIED by observation on 12 October 2026.

## The GTM "missing Google tag" warning

**Conclusion: a Google tag is not needed for the event tags to deliver data, so this release does not add one.**

- The GA4 event tags carry the Measurement ID `G-5SKKT1NBHB` directly and the editor reports "No Google tag found in this
  container". Those tags still deliver: `whatsapp_click_790_offer` is received by GA4 from the Dewank Website stream.
- The site code never sends `whatsapp_click`, `whatsapp_click_790_offer`, `whatsapp_click_brand_naming` or `contact_intent`
  (checked: zero references in `app/`). Their only source is the GTM event tags, so GTM delivers them.
- `page_view` comes from the site's own `gtag('config')` after consent. A Google tag in GTM with page-view sending on would
  add a second `page_view` per load. With page-view sending off it adds nothing needed for delivery.
- The warning is advisory. Adding a Google tag now would change the measurement setup and risk duplicate page views, so it is
  not added. The owner may dismiss the warning, or add a Google tag later as a separate change tested in Preview.

## Proposed changes (not published)

Nothing below has been published. Each change needs its precondition met first.

1. **WhatsApp key event: decide before any tag is paused.** `whatsapp_click_790_offer` is currently a key event. Pausing
   its tag would stop that key event. The preferred order:
   a. Owner decides which WhatsApp event should be the key event. The options are `whatsapp_click` (the canonical
      event, currently not key), or only the contact-form handoff, `contact_intent` with `lead_source = contact_form`.
   b. In GA4, mark the chosen event as a key event, and check that the key-event count changes as expected.
   c. Only then pause the legacy tag.
   Counting WhatsApp link clicks as key events counts lead intent, not confirmed leads. Owner decision.
2. **Pause `GA4 - WhatsApp Click - 790 Offer`** (legacy): after step 1, and after a Google Ads import check, because the
   event is a key event and may feed a Google Ads conversion.
3. **Pause `GA4 - contact_intent - WhatsApp CTA`**: it duplicates `whatsapp_click` on each WhatsApp link click. Keep
   `GA4 - contact_intent - contact form` active. It is not a key event. Pausing it does not change any key event.
4. **Pause `GA4 - whatsapp_click_brand_naming - offer page`**: optional. It is not a key event. It is the only offer-specific
   WhatsApp event, so keep it if the brand-naming report needs it. Owner decision.

Pausing keeps the tags and their history. It stops future hits. Historical data stays in GA4.

## Google Ads (verification status)

- **Verified:** GA4 is linked to Google Ads account "M.rashad" (756-612-2856), enabled, linked 6 Aug 2026.
- **Not verified:** whether `whatsapp_click_790_offer` or any other event is imported into Google Ads as a conversion. The
  Google Ads account is behind a sign-in chooser for this session.
- **Not verified:** the source of the conversion pings for `768813020`. They appear in live network traffic. The container has
  no Google Ads conversion tag.
- **Not verified:** the GA4 Reports snapshot shows `google / cpc` sessions but no Google Ads campaign or customer data for the
  last 28 days. That may mean the link is not returning campaign data, or that the DEWANK campaigns sit in another account.
  The owner must check this in the account.
- Conversion counting, conversion definitions and enhanced conversions: NEEDS OWNER ACCESS.

## Meta

- `PageView` only, active. No lead event is configured. No Meta Lead event is proposed: a WhatsApp click is lead intent, not
  a conversion, and adding one would change optimisation. That is a separate decision.
- `localhost` is among the connected domains. Owner to remove it if it is not needed.

## Not verified

- GA4 data retention and consent settings. The "Data retention" link did not open from this session.
- GA4 DebugView and Realtime on a live click.
- Meta Test Events and Pixel Helper on a live click.
- Live WhatsApp click events: not triggered on production, to avoid test events in real analytics before approval.
