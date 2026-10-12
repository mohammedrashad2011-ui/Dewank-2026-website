import Script from "next/script";
import { englishEntityGraph, entityGraph, jsonLd } from "../lib/seo";
import { vendorTrackingEnabled } from "../lib/analytics-mode";
import { consentBootstrapScript } from "./consent-bootstrap";

// Shared by the Arabic and English root layouts and the global not-found page.
//
// Measurement no longer loads from the static markup. Every vendor request (Google Tag Manager, Google Analytics and the
// Meta Pixel) is made by the consent bootstrap, and only for categories the visitor has allowed. The bootstrap sits in
// <head> before any other script and also builds the consent dialog (see consent-bootstrap.ts for the rules). In a
// preview build the bootstrap never loads a vendor, whatever the stored choice. The IDs are the existing production IDs
// (app/lib/tracking-ids.ts).
export function RootHeadScripts() {
  return (
    <Script id="dewank-consent" strategy="beforeInteractive">
      {consentBootstrapScript(vendorTrackingEnabled)}
    </Script>
  );
}

// Rendered first inside <body>. The Organization and WebSite graph follows the document language: Arabic for the Arabic
// layout, English for the English one.
//
// The former noscript tracking fallbacks (a GTM iframe and a Meta pixel image) are gone. They made requests whether or
// not the visitor had consented, and a visitor without JavaScript cannot give consent, so no tracking request is made.
// The consent dialog is built by the bootstrap, so no client component is added to the shared layout.
export function RootBodyStart({ language = "ar" }: { language?: "ar" | "en" }) {
  const graph = language === "en" ? englishEntityGraph : entityGraph;
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(graph) }} />;
}
