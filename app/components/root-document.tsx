import { englishEntityGraph, entityGraph, jsonLd } from "../lib/seo";
import { vendorTrackingEnabled } from "../lib/analytics-mode";
import { consentBootstrapScript } from "./consent-bootstrap";

// Shared by the Arabic and English root layouts and the global not-found page.
//
// Measurement no longer loads from the static markup. Every vendor request (Google Tag Manager, Google Analytics and the
// Meta Pixel) is made by the consent bootstrap, and only for categories the visitor has allowed. The IDs are the existing
// production IDs (app/lib/tracking-ids.ts). In a preview build the bootstrap never loads a vendor, whatever the stored
// choice.

// Rendered first inside <body>. The Organization and WebSite graph follows the document language: Arabic for the Arabic
// layout, English for the English one.
//
// The consent bootstrap is an inline script here, not next/script with beforeInteractive. That strategy queues the script
// behind Next's client runtime, so the consent default and the banner waited for the app's JavaScript (about 1.6 s on a
// throttled phone, measured). An inline script runs while the document is parsing.
//
// The former noscript tracking fallbacks (a GTM iframe and a Meta pixel image) are gone. They made requests whether or
// not the visitor had consented, and a visitor without JavaScript cannot give consent, so no tracking request is made.
export function RootBodyStart({ language = "ar" }: { language?: "ar" | "en" }) {
  const graph = language === "en" ? englishEntityGraph : entityGraph;
  return (
    <>
      <script id="dewank-consent" dangerouslySetInnerHTML={{ __html: consentBootstrapScript(vendorTrackingEnabled) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(graph) }} />
    </>
  );
}
