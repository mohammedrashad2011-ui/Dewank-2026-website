import type { Metadata } from "next";
import { preload } from "react-dom";
import { RootBodyStart } from "../components/root-document";
import "../fonts.css";
import "../globals.css";
import "../service-pages-fix.css";
import "../mobile-refinement.css";
import "../desktop-cleanup.css";
import "../home-final-cta-label-fix.css";
import { defaultDescription, siteName, siteUrl } from "../lib/seo";
import DeferredClientLayer from "../components/deferred-client-layer";

const gaId = "G-5SKKT1NBHB";
const gtmId = "GTM-PG525ZFN";
const metaPixelId = "2274266710087331";
const fontVariables = {
  "--font-arabic": '"Alexandria"',
  "--font-display": '"Cormorant Garamond"',
} as React.CSSProperties;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "شركة تسويق رقمي ونمو في السعودية | ديوانك",
    template: "%s | ديوانك",
  },
  description: defaultDescription,
  applicationName: siteName,
  authors: [{ name: "Dewank", url: siteUrl }],
  creator: "Dewank",
  publisher: "Dewank",
  category: "Marketing and Branding",
  verification: {
    other: {
      "p:domain_verify": "3809cbbe8b9237c104790a33b44efdd7",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Self-hosted variable fonts (see app/fonts.css). Preload both subsets so text renders
  // in Alexandria on first paint; preloading only the Arabic file delayed LCP in benchmarks.
  preload("/fonts/alexandria-arabic.woff2", { as: "font", type: "font/woff2", crossOrigin: "anonymous" });
  preload("/fonts/alexandria-latin.woff2", { as: "font", type: "font/woff2", crossOrigin: "anonymous" });
  return (
    <html lang="en" dir="ltr" style={fontVariables}>
      <body>
        <RootBodyStart language="en" />
        {children}
        <DeferredClientLayer />
      </body>
    </html>
  );
}
