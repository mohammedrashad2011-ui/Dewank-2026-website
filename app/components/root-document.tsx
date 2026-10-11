import Script from "next/script";
import { englishEntityGraph, entityGraph, jsonLd } from "../lib/seo";
import { vendorTrackingEnabled } from "../lib/analytics-mode";

// Tracking and structured data shared by every root layout (Arabic, English) and the global not-found page.
// The IDs are the existing production IDs. No IDs are added here. Vendor scripts load only in production mode
// (see app/lib/analytics-mode.ts and docs/analytics-environments.md).
const gaId = "G-5SKKT1NBHB";
const gtmId = "GTM-PG525ZFN";
const metaPixelId = "2274266710087331";

// Rendered in <html>, before <body>. Same markup and order as before the split, in production mode.
export function RootHeadScripts() {
  if (!vendorTrackingEnabled) return null;
  return (
    <>
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
    </>
  );
}

// Rendered first inside <body>. The Organization and WebSite graph follows the document language: Arabic for the Arabic
// layout, English for the English one. The noscript tracking fallbacks follow the analytics mode.
export function RootBodyStart({ language = "ar" }: { language?: "ar" | "en" }) {
  const graph = language === "en" ? englishEntityGraph : entityGraph;
  return (
    <>
      {vendorTrackingEnabled ? (
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
      ) : null}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(graph) }} />
      {vendorTrackingEnabled ? (
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      ) : null}
    </>
  );
}
