// Global not-found page. Unmatched URLs (for example /does-not-exist) belong to no root layout, so this file supplies its own
// <html> and <body>. It repeats the Arabic root layout's document shell (stylesheets, tracking, structured data and the
// deferred client layer), so a 404 looks and measures the same as before the root layouts were split.
// Requires experimental.globalNotFound in next.config.ts.
import type React from "react";
import { preload } from "react-dom";
import "./fonts.css";
import "./globals.css";
import "./service-pages-fix.css";
import "./mobile-refinement.css";
import "./desktop-cleanup.css";
import "./home-final-cta-label-fix.css";
import DeferredClientLayer from "./components/deferred-client-layer";
import { RootBodyStart, RootHeadScripts } from "./components/root-document";

const fontVariables = {
  "--font-arabic": '"Alexandria"',
  "--font-display": '"Cormorant Garamond"',
} as React.CSSProperties;

export default function GlobalNotFound() {
  preload("/fonts/alexandria-arabic.woff2", { as: "font", type: "font/woff2", crossOrigin: "anonymous" });
  preload("/fonts/alexandria-latin.woff2", { as: "font", type: "font/woff2", crossOrigin: "anonymous" });
  return (
    <html lang="ar" dir="rtl" style={fontVariables}>
      <RootHeadScripts />
      <body>
        <RootBodyStart />
        <main style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 24 }}>
          <h1 style={{ fontSize: 48, margin: "0 0 12px" }}>404</h1>
          <p style={{ margin: 0 }}>This page could not be found.</p>
        </main>
        <DeferredClientLayer />
      </body>
    </html>
  );
}
