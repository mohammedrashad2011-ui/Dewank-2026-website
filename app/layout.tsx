import type { Metadata } from "next";
import { Alexandria, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { defaultDescription, siteName, siteUrl } from "./lib/seo";

const alexandria = Alexandria({ variable: "--font-arabic", subsets: ["arabic", "latin"] });
const cormorant = Cormorant_Garamond({ variable: "--font-display", subsets: ["latin"], weight: ["600", "700"] });
const gaId = "G-5SKKT1NBHB";
const metaPixelId = "2274266710087331";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ديوانك | براندينج، تسويق، مواقع وأتمتة AI",
    template: "%s | ديوانك",
  },
  description: defaultDescription,
  applicationName: siteName,
  authors: [{ name: "Dewank", url: siteUrl }],
  creator: "Dewank",
  publisher: "Dewank",
  category: "Marketing and Branding",
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
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="lazyOnload" />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>

      <Script id="meta-pixel" strategy="lazyOnload">
        {`
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
        `}
      </Script>

      <body className={`${alexandria.variable} ${cormorant.variable}`}>
        <Script id="organization-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: siteName,
            alternateName: "Dewank",
            url: siteUrl,
            logo: `${siteUrl}/dewank-logo.png`,
            description: defaultDescription,
            email: "hello@dewank.com",
            telephone: "+97339066649",
            areaServed: ["Saudi Arabia", "Bahrain", "GCC"],
            sameAs: ["https://www.instagram.com/dewank_marketing"],
            serviceType: [
              "Brand Strategy",
              "Digital Marketing",
              "Website Design",
              "AI Automation",
              "WhatsApp Automation",
            ],
          })}
        </Script>
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
      </body>
    </html>
  );
}
