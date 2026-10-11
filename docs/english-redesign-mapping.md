# English website: Arabic-to-English mapping

Scope: the `/en` preview on draft PR #154. This is not a literal translation of the Arabic site. It lists what is reused, enhanced, rewritten for international markets, and left untouched.

## Creative direction
- Keep the premium navy, gold and paper identity and the three-beat headline. The English site is the international flagship of the same agency.
- Motion supports the story: the Brand → Experience → Growth → Automation flow, reveal on scroll (movement only), a card lift on hover and focus. All motion is removed under `prefers-reduced-motion`.
- No new animation libraries, no stock imagery, no scroll-jacking.

## Page and section mapping

| Arabic reference | English page or section | Decision |
|---|---|---|
| Homepage hero and storytelling (`app/page.tsx`) | `/en` hero, flow panel | **Reuse** the structure and flow. Copy already global. |
| Homepage services cards | `/en` services section | **Enhance**: eight disciplines, each linked to its page or to its anchor. |
| Homepage audience and trust | `/en` "Who we work with" strip | **New**, written for international business owners, startups, SMEs and marketing leaders. |
| Homepage FAQ | `/en` FAQ | **Rewrite** the "outside the Gulf" question for worldwide positioning. Add FAQPage structured data that matches the visible questions. |
| Paid ads (`app/paid-ads`) | `/en/paid-advertising` | **Rewrite**: launch vs. ongoing management, budget vs. fee, the four-point pre-spend check. No prices, no Saudi framing. |
| SEO/AEO (`app/seo-aeo`) | `/en/seo-geo-aeo` | **Rewrite**: SEO, GEO and AEO defined; no ranking or citation promises. |
| Website design (`app/website-design`) | `/en/website-design`, with `#landing-page` | **Rewrite**: landing page, company website and custom project as formats. |
| WhatsApp automation (`app/whatsapp-automation`) | `/en/whatsapp-crm-automation` | **Rewrite**: Starter vs. CRM scopes, the platform note, and the human-handover principle. Keeps the anonymised clinic case as proof. |
| AI automation (`app/ai-automation`) | `/en/ai-automation` | **Rewrite**: rules vs. understanding vs. human decisions; workflow vs. agent. |
| Social media (`app/services/social-media-content`) | `/en/social-media-content` | **Rewrite**: support levels; no follower promises. |
| Branding (`app/branding`) | `/en/brand-naming`, `/en/services#brand-strategy`, `/en/services#brand-identity` | **Reuse** the naming page and the BITHAN proof. Strategy and identity remain anchors on the services page. |
| Analytics | `/en/services#analytics` | **Reuse** as an anchor. No deep page yet (not in the Arabic reference). |
| Career / ATS CV | Not in the English catalogue | **Untouched in Arabic; removed from the English primary catalogue** because it targets the Gulf job market. |
| Navigation and footer | Header panel, footer | **Enhance**: eight groups in the panel; worldwide footer line. |
| Work / portfolio (`app/work`) | `/en/work` | **Untouched** in this pass. Case studies stay as factual proof (Qatar, Bahrain, Saudi Arabia where it is the proof). |
| Contact (`app/en/contact`) | `/en/contact` | **Untouched** by design. Only the footer line (shared chrome) and the closed-form flag from the integration are different. |
| Privacy notice | `/en/privacy` | **Untouched** (draft notice; approval pending). |
| Arabic root layout, GTM, GA4, Meta, V2-03 | Shared root layout | **Untouched.** |

## Not done in this pass (needs approval)
- Root document language and locale-correct Organization/WebSite structured data. The Arabic root layout emits Arabic, Gulf-scoped entity data on every page. Fixing this needs a root-layout change, which is an architectural change. It is listed as a launch blocker.
- hreflang between `/services` and `/en/services`: deferred until both sides are indexable. No hreflang is added to Arabic pages.
- Contact page country list and the email body's service list still reflect the original scope options. Changing them touches the Contact page, which is out of scope here.
