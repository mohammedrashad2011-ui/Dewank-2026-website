import type { Metadata } from "next";
import { Alexandria, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const alexandria = Alexandria({ variable: "--font-arabic", subsets: ["arabic", "latin"] });
const cormorant = Cormorant_Garamond({ variable: "--font-display", subsets: ["latin"], weight: ["600", "700"] });
const gaId = "G-5SKKT1NBHB";
const metaPixelId = "2274266710087331";

export const metadata: Metadata = {
  title: "ديوانك | براندينج، تسويق وأتمتة ذكاء اصطناعي",
  description: "ديوانك يبني علامات أوضح، وتسويقًا يصنع الطلب، وأنظمة ذكاء اصطناعي تختصر وقتك.",
  other: {
    "codex-preview": "development",
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
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>

      <Script id="meta-pixel" strategy="afterInteractive">
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
