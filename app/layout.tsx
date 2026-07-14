import type { Metadata } from "next";
import { Alexandria, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const alexandria = Alexandria({ variable: "--font-arabic", subsets: ["arabic", "latin"] });
const cormorant = Cormorant_Garamond({ variable: "--font-display", subsets: ["latin"], weight: ["600", "700"] });
const gaId = "G-5SKKT1NBHB";

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
      <body className={`${alexandria.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  );
}
