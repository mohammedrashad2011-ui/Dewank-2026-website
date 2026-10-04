import type { Metadata } from "next";
import Script from "next/script";
import { preload } from "react-dom";
import "./fonts.css";
import "./globals.css";
import "./service-pages-fix.css";
import "./mobile-refinement.css";
import "./desktop-cleanup.css";
import "./home-final-cta-label-fix.css";
import { defaultDescription, entityGraph, jsonLd, siteName, siteUrl } from "./lib/seo";
import DeferredClientLayer from "./components/deferred-client-layer";

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
    <html lang="ar" dir="rtl" style={fontVariables}>
      <Script id="google-tag-manager" strategy="lazyOnload">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${gtmId}');
        `}
      </Script>

      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>

      <Script id="meta-pixel-loader" strategy="afterInteractive">
        {`
          (function(){
            var loaded=false;
            var desktop=window.matchMedia('(min-width: 901px)').matches;
            var events=desktop?['pointerdown','keydown','touchstart']:['pointerdown','keydown','scroll','touchstart'];
            function loadPixel(){
              if(loaded) return;
              loaded=true;
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${metaPixelId}');
              fbq('track', 'PageView');
              events.forEach(function(evt){
                window.removeEventListener(evt,loadPixel,{passive:true});
              });
            }
            events.forEach(function(evt){
              window.addEventListener(evt,loadPixel,{passive:true,once:true});
            });
            window.setTimeout(loadPixel,desktop?6000:4000);
          })();
        `}
      </Script>

      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(entityGraph) }} />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        {children}
        <DeferredClientLayer />
      </body>
    </html>
  );
}
