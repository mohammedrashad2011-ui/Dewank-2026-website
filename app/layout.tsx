import type { Metadata } from "next";
import { Alexandria, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const alexandria = Alexandria({ variable: "--font-arabic", subsets: ["arabic", "latin"] });
const cormorant = Cormorant_Garamond({ variable: "--font-display", subsets: ["latin"], weight: ["600", "700"] });

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
      <body className={`${alexandria.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  );
}
