import type { ReactNode } from "react";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import "./styles/globals.en.css";
import "./styles/hide-arabic-widgets.css";

// Wraps every English page. The root HTML stays Arabic (shared root layout), so the English
// document language is declared here on the wrapper. Preview-only: see docs in the PR.
export function EnShell({ children }: { children: ReactNode }) {
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
