import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { site } from "../data/site";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  axes: ["opsz", "SOFT", "WONK"],
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://biuro-towpik.pl"),
  title: "Biuro Rachunkowe Izabela Towpik — księgowość Zielona Góra | KSeF",
  description:
    "Kompleksowa księgowość, kadry i płace w Zielonej Górze. Certyfikat SKwP, pełna obsługa e-faktur KSeF w standardzie. Bezpłatna pierwsza rozmowa.",
  keywords: [
    "biuro rachunkowe Zielona Góra",
    "księgowość Zielona Góra",
    "KSeF",
    "KPiR",
    "ryczałt",
    "kadry i płace",
    "VAT z zagranicy",
  ],
  icons: [
    { rel: "icon", url: "/favicon.svg", type: "image/svg+xml" },
    { rel: "icon", url: "/favicon.ico", sizes: "any" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
  ],
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://biuro-towpik.pl",
    siteName: site.name,
    title: "Biuro Rachunkowe Izabela Towpik — księgowość bez stresu",
    description:
      "Księgowość, kadry i płace w Zielonej Górze. KSeF w standardzie obsługi. Certyfikat SKwP.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Biuro Rachunkowe Izabela Towpik",
    description: "Księgowość bez stresu. KSeF w standardzie obsługi. Zielona Góra.",
    images: ["/og.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0A08",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: site.name,
  description:
    "Kompleksowa obsługa księgowa, kadrowa i płacowa. Pełna obsługa e-faktur KSeF.",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.street,
    postalCode: site.postcode,
    addressLocality: site.city,
    addressCountry: "PL",
  },
  geo: { "@type": "GeoCoordinates", latitude: 51.971, longitude: 15.4923 },
  telephone: "+48605467936",
  email: site.email,
  sameAs: [site.facebook],
  areaServed: "Zielona Góra",
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${fraunces.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-YJ5QGEYPSS`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YJ5QGEYPSS');
            `,
          }}
        />
      </head>
      <body className="noise font-sans">{children}</body>
    </html>
  );
}
