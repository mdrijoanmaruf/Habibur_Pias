import type { Metadata, Viewport } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#06b6d4",
};

export const metadata: Metadata = {
  title: "Md Habibur Rahaman Bhuiyan - Finance Executive | Risk Controller",
  description:
    "Experienced Risk Controller with a strong background in accounting, credit control, business control, and financial analysis.",
  keywords: [
    "Finance Executive",
    "Risk Controller",
    "Credit Control",
    "Financial Analysis",
    "Accounting",
    "Md Habibur Rahaman Bhuiyan",
  ],
  authors: [{ name: "Md Habibur Rahaman Bhuiyan" }],
  openGraph: {
    title: "Md Habibur Rahaman Bhuiyan - Finance Executive | Risk Controller",
    description:
      "Experienced Risk Controller with a strong background in accounting, credit control, business control, and financial analysis.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <link
          rel="preconnect"
          href="https://cdnjs.cloudflare.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${sora.variable} ${jetBrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
