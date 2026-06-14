import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import "./pages.css";
import JsonLd from "@/components/JsonLd";
import Interactions from "@/components/Interactions";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const SITE_URL = "https://www.fairegypttours.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Fair Egypt Tours | Affordable Egypt Tours & Day Trips, Carefully Planned",
    template: "%s | Fair Egypt Tours",
  },
  description:
    "Affordable Egypt tours with fair, transparent prices. Licensed local guides, private air-conditioned transport, and 24/7 human support across Cairo, Giza, Luxor, Aswan & the Red Sea. Get a free, itemised quote.",
  keywords: [
    "Egypt tours",
    "affordable Egypt tours",
    "Cairo day tours",
    "Giza pyramids tour",
    "Luxor tours",
    "Aswan tours",
    "Nile cruise",
    "Egypt travel agency",
    "private Egypt tours",
    "Egypt tour packages",
  ],
  authors: [{ name: "Fair Egypt Tours" }],
  creator: "Fair Egypt Tours",
  alternates: { canonical: "/" },
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
  openGraph: {
    type: "website",
    siteName: "Fair Egypt Tours",
    locale: "en_US",
    title: "Affordable Egypt Tours, Carefully Planned | Fair Egypt Tours",
    description:
      "Fair prices, licensed local guides, private transport, and real support across Cairo, Luxor, Aswan & the Red Sea. Get a free, itemised quote.",
    url: "/",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Pyramids of Giza at sunset — Fair Egypt Tours",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable Egypt Tours, Carefully Planned | Fair Egypt Tours",
    description:
      "Fair prices, licensed local guides, private transport, and real support across Egypt. Get a free, itemised quote.",
    images: ["/og-image.jpg"],
  },
  other: {
    "geo.region": "EG",
    "geo.placename": "Cairo, Egypt",
    "geo.position": "30.0444;31.2357",
    ICBM: "30.0444, 31.2357",
  },
};

export const viewport: Viewport = {
  themeColor: "#1F3A4A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <JsonLd />
        {children}
        <Interactions />
      </body>
    </html>
  );
}
