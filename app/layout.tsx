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
  title: {
    default: "Md Habibur Rahaman Bhuiyan - Finance Executive | Risk Controller | Dhaka, Bangladesh",
    template: "%s | Md Habibur Rahaman Bhuiyan",
  },
  description:
    "Md Habibur Rahaman Bhuiyan is an experienced Finance Executive and Risk Controller at Global Brand PLC, Dhaka. Skilled in accounting, credit control, financial analysis, and corporate risk management.",
  keywords: [
    "Md Habibur Rahaman Bhuiyan",
    "Finance Executive",
    "Risk Controller",
    "Credit Control",
    "Financial Analysis",
    "Accounting Management",
    "Global Brand PLC",
    "Dhaka Bangladesh",
    "Corporate Risk Management",
    "Business Studies",
    "Financial Risk",
    "Credit Risk Assessment",
  ],
  authors: [{ name: "Md Habibur Rahaman Bhuiyan" }],
  creator: "Md Rijoan Maruf",
  publisher: "Md Habibur Rahaman Bhuiyan",
  metadataBase: new URL("https://habibur-pias.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Md Habibur Rahaman Bhuiyan - Finance Executive | Risk Controller",
    description:
      "Experienced Finance Executive and Risk Controller at Global Brand PLC. Skilled in accounting, credit control, financial analysis, and corporate risk management in Dhaka, Bangladesh.",
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Md Habibur Rahaman Bhuiyan - Portfolio",
    images: [
      {
        url: "/me.png",
        width: 800,
        height: 800,
        alt: "Md Habibur Rahaman Bhuiyan - Finance Executive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Habibur Rahaman Bhuiyan - Finance Executive | Risk Controller",
    description:
      "Experienced Finance Executive and Risk Controller at Global Brand PLC, Dhaka, Bangladesh.",
    images: ["/me.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
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
