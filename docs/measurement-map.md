# Measurement map (checked 13 October 2026)

Status key: **VERIFIED** (observed in the provider account or locally), **CONFIGURED BUT UNVERIFIED** (set up in the
container or the code, not observed live), **NEEDS OWNER ACCESS** (the provider screen could not be read from the session).

Identifiers (unchanged): GTM `GTM-PG525ZFN` (workspace "dewank.com", live version 7, published 6 Oct 2026, 0 pending changes),
GA4 `G-5SKKT1NBHB` (property `a139422952p536531439`, stream `https://dewank.com`), Meta Pixel `2274266710087331`,
Google Ads conversion `768813020` (seen in live network requests; not readable in the account from this session).

## Map

| User action | dataLayer event (code) | GTM trigger (live v7) | GA4 event (tag) | Meta event | Google Ads | Classification | Status |
|---|---|---|---|---|---|---|---|
| Page load, after usage consent | none (site code) | none | `page_view`, sent once by the site's `gtag('config')` after consent | `PageView`, sent by the site's `fbq` after advertising consent | none | page view, not a conversion | VERIFIED locally: one `page_view` per load. Meta `PageView` active in Events Manager |
| Click a WhatsApp link (`wa.me`) | `sitewide_whatsapp_click` is pushed, but no GTM trigger uses it | `LC - WhatsApp links (contact_intent)`: Just Links, click URL contains `wa.me/97339066649` | **Three tags fire on the same click**: `whatsapp_click` (canonical, non-key per label "Phase 12"); `contact_intent` (tag "GA4 - contact_intent - WhatsApp CTA"); `whatsapp_click_790_offer` (legacy, trigger without page filter) | none | none | lead intent, **not** a conversion. **Duplicated 3 times** | CONFIGURED BUT UNVERIFIED (the duplication follows from the trigger definitions; not observed live, to avoid test events in production) |
| Click WhatsApp on `/offers/brand-naming` | as above | `LC - WhatsApp links (brand-naming offer)`, page path filter | `whatsapp_click_brand_naming` **plus** the three above | none | none | lead intent, **duplicated 4 times** on this page | CONFIGURED BUT UNVERIFIED |
| Submit the English or Arabic contact form (WhatsApp hand-off) | `contact_whatsapp_submit` (no brief, no contact details) | `CE - contact_whatsapp_submit` (Custom Event) | `contact_intent` with `lead_source = contact_form` (tag "GA4 - contact_intent - contact form") | none | none | lead intent (the handoff opens WhatsApp; it is not a confirmed enquiry) | CONFIGURED BUT UNVERIFIED |
| Click an offer on the offers hub | `offer_select` | `CE - offer_select` | `offer_select` (`list_location = offers_hub`) | none | none | intent (engagement) | CONFIGURED BUT UNVERIFIED |
| Click an offer on the homepage | `home_offer_select` | `CE - home_offer_select` | `home_offer_select` | none | none | intent (engagement) | CONFIGURED BUT UNVERIFIED |
| Homepage offers grid seen | none | `EV - home offers grid (50% / 1.5s)` | `home_offers_view` | none | none | exposure, not a conversion | CONFIGURED BUT UNVERIFIED |
| First visit, no choice | none | none (GTM tags: "8 did not fire" in Tag Assistant) | none | none | none | no measurement | VERIFIED: Tag Assistant on the live homepage, no choice, no GTM tag fired. Local build: no vendor request |
| Accept all / analytics only / advertising | consent `update` | none | `page_view` after usage consent | `PageView` after advertising consent | conversion pings on Accept all | per consent | VERIFIED locally (earlier matrix); live first visit with no choice still sends vendor requests (see below) |

Live production today (before this release): a first visit with no choice sends GTM, GA4, Google Ads (768813020) and Meta
requests, and no consent banner is shown. This release removes it. VERIFIED by observation on 12 October 2026.

## GTM container findings

- **"One missing Google tag found" / "Container quality: Needs Attention" (2 issues).** The GA4 event tags carry the
  Measurement ID `G-5SKKT1NBHB` directly, and the editor says "No Google tag found in this container". The site loads and
  configures GA4 itself (`gtag('config', 'G-5SKKT1NBHB')` after consent). Adding a Google tag for `G-5SKKT1NBHB` would
  clear the warning, but its **"send page view" must be off**, or each page would send two `page_view` events. This needs a
  Preview test before publishing.
- The second issue is an administrator request, not a tag problem.
- No Google Ads conversion tag exists in the container, yet the live site sends conversion pings for `768813020`. Their
  source is not identified: they may come from the GA4 link to Google Ads, or from a Google tag outside this container.
  **NEEDS OWNER ACCESS** to the Google Ads account and the GA4 Google Ads link.

## Proposed changes (not published; owner approval required)

1. **Google tag for `G-5SKKT1NBHB` with send-page-view off.** Resolves the warning. Test in Preview: exactly one `page_view`
   per load, and the event tags still fire.
2. **Pause `GA4 - contact_intent - WhatsApp CTA`.** It duplicates `whatsapp_click` on each WhatsApp link click. Keep
   `GA4 - contact_intent - contact form` active, because the form submit uses the same event name with different parameters.
3. **Pause `GA4 - WhatsApp Click - 790 Offer`.** It duplicates `whatsapp_click` on every `wa.me` click. It is legacy, from
   August 2026.
4. **Pause `GA4 - whatsapp_click_brand_naming - offer page`**, or keep it if the brand-naming report needs its own event.
   Owner decision.

Pausing keeps the tags and their history. It stops future hits, so any GA4 key event that uses these names stops counting.
**GA4 key events could not be read in this session** (the admin pages did not render). The owner must check which events are
key events before pausing anything.

No Meta Lead event and no Google Ads conversion change is proposed here. A WhatsApp click is lead intent, not a conversion.
Adding either would change optimisation and must be a separate decision.

## Not verified

- GA4: key events, data retention, consent settings, DebugView, the Google Ads link. (Admin pages not rendering.)
- Meta: Test Events and Pixel Helper on a live click. The Pixel shows `PageView` only, and `localhost` is among its domains.
- Google Ads: conversion `768813020`, its definitions, counting, and the source of the live pings. (Account selector shows only
  the owner's own accounts; the DEWANK account needs to be selected by the owner.)
- Live WhatsApp click events: not triggered on production, to avoid test events in real analytics before approval.
