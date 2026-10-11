import type { ReactNode } from "react";
import { preload } from "react-dom";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import "./styles/globals.en.css";
import "./styles/hide-arabic-widgets.css";

// Wraps every English page. The root HTML stays Arabic (shared root layout), so the English
// document language is declared here on the wrapper. Preview-only: see docs in the PR.
export function EnShell({ children }: { children: ReactNode }) {
  // The English heading face is not preloaded by the shared root layout (which preloads Alexandria only).
  // Preloading it here avoids a late swap from the fallback serif, which shifted headings (measured CLS).
  preload("/fonts/cormorant-latin.woff2", { as: "font", type: "font/woff2", crossOrigin: "anonymous" });
  return (
    <div className="en-site" lang="en" dir="ltr">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
    </div>
  );
}
