import type { Metadata, Viewport } from "next";
import "@fontsource-variable/archivo/wdth.css";
import "@fontsource-variable/inter-tight";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Providers } from "@/components/site/Providers";
import { company } from "@/lib/content";
import { allowIndexing, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fornoni Rental Solutions — Noleggio e consulenza tecnica per l'edilizia",
    template: "%s · Fornoni Rental Solutions",
  },
  description:
    "Da oltre sessant'anni noleggio di gru, ponteggi, casseformi, montacarichi e macchine per l'edilizia a Chiari (BS). Consulenza tecnica, progettazione, installazione e assistenza.",
  keywords: [
    "noleggio gru",
    "noleggio ponteggi",
    "noleggio macchine edili",
    "casseformi",
    "montacarichi",
    "Chiari",
    "Brescia",
    "Fornoni",
  ],
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Fornoni Rental Solutions",
    images: [{ url: "https://d3e7ilti5q92ri.cloudfront.net/cropped_SLIDER_1_b39fd65480.jpg" }],
  },
  robots: allowIndexing ? undefined : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#0d0e10",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.name,
  legalName: company.legalName,
  url: siteUrl,
  telephone: "+39 030 711582",
  email: company.email,
  vatID: `IT${company.vat}`,
  image: "https://d3e7ilti5q92ri.cloudfront.net/cropped_SLIDER_1_b39fd65480.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: company.street,
    postalCode: company.postalCode,
    addressLocality: company.city,
    addressRegion: company.province,
    addressCountry: "IT",
  },
  geo: { "@type": "GeoCoordinates", latitude: company.geo.lat, longitude: company.geo.lng },
  sameAs: Object.values(company.social),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <a
          href="#contenuto"
          className="bg-signal text-ink sr-only z-[60] px-4 py-2 focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Vai al contenuto
        </a>
        <Providers>
          <Header />
          <main id="contenuto">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
