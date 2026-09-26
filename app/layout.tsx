import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";

import "./globals.css";
import SiteExtras from "@/components/SiteExtras";
import Script from "next/script";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://themachinepainting.co.ke"),

  title: {
    default:
      "The Machine Painting Co Ltd | Beautiful Structures, Sprayed Perfectly",
    template: "%s | The Machine Painting Co Ltd",
  },

  description:
    "The Machine Painting Co Ltd provides professional spray painting, interior painting, exterior painting, commercial painting, wall skimming, surface preparation, and renovation painting services for homes, apartments, offices, buildings, warehouses, and commercial projects.",

  keywords: [
    "The Machine Painting Co Ltd",
    "Machine Painting Kenya",
    "spray painting Kenya",
    "professional painters Nairobi",
    "interior painting",
    "exterior painting",
    "machine spray painting",
    "commercial painting",
    "wall skimming",
    "surface preparation",
    "renovation painting",
    "office renovation",
    "apartment renovation",
    "painting services Nairobi",
    "Beautiful Structures Sprayed Perfectly",
  ],

  authors: [{ name: "The Machine Painting Co Ltd" }],
  creator: "The Machine Painting Co Ltd",
  publisher: "The Machine Painting Co Ltd",
  applicationName: "The Machine Painting Co Ltd",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "The Machine Painting Co Ltd | Beautiful Structures, Sprayed Perfectly",
    description:
      "Professional spray painting, wall finishing, commercial painting, renovation painting, and surface preparation services for homes, offices, apartments, buildings, warehouses, and projects.",
    url: "https://themachinepainting.co.ke",
    siteName: "The Machine Painting Co Ltd",
    images: [
      {
        url: "/machine/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Machine Painting Co Ltd - Beautiful Structures, Sprayed Perfectly",
      },
    ],
    locale: "en_KE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "The Machine Painting Co Ltd | Beautiful Structures, Sprayed Perfectly",
    description:
      "Professional spray painting, painting packages, gallery transformations, project videos, quotations, and site visit bookings.",
    images: ["/machine/og-image.png"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      {
        url: "/icon.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.png",
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
      <body className={`${nunitoSans.className} antialiased`}>
        {children}
        <SiteExtras />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7SCS6LSCXP"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7SCS6LSCXP');
          `}
        </Script>
      </body>
    </html>
  );
}