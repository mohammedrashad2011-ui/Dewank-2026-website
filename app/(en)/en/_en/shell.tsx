import type { ReactNode } from "react";
import { preload } from "react-dom";
import { Footer } from "./parity/footer";
import { Header } from "./parity/header";
import "./styles/globals.en.css";
import "./styles/hide-arabic-widgets.css";

// Wraps the English pages that use this shell (Contact, Privacy). It renders the same header and footer as every
// other English page, so navigation does not change between routes. The root HTML stays Arabic (shared root layout),
// so the English document language is declared on this wrapper.
export function EnShell({ children }: { children: ReactNode }) {
  // The English heading face is not preloaded by the shared root layout (which preloads Alexandria only).
  // Preloading it here avoids a late swap from the fallback serif, which shifted headings (measured CLS).
  preload("/fonts/cormorant-latin.woff2", { as: "font", type: "font/woff2", crossOrigin: "anonymous" });
  return (
    <div className="en-site" lang="en" dir="ltr">
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
}
