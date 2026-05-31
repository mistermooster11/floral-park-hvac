import type { Metadata } from "next";
import "./globals.css";
import "@/styles/common.css";
import Header from "@/components/custom/header/Header";
import Footer from "@/components/custom/footer/Footer";
import PageTransition from "@/components/custom/page-transition/PageTransition";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import SalePopup from "@/components/custom/popup/SalePopup"

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Floral Park HVAC — Nassau County HVAC Repair, Maintenance & Installation",
  description:
    "Licensed, insured HVAC contractor serving Nassau County, Western Suffolk, and Northern Queens. AC repair, furnace repair, heat pump service, and maintenance — honest pricing, fast response. Call (516) 855-4328.",
  openGraph: {
    title: "Floral Park HVAC — Nassau County HVAC Contractor",
    description:
      "Licensed & insured HVAC services for Nassau County, Western Suffolk, and Northern Queens. Upfront pricing, same-day service. Call (516) 855-4328.",
    url: "https://floralparkhvac.com",
    siteName: "Floral Park HVAC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Floral Park HVAC — Nassau County HVAC Contractor",
    description:
      "Licensed & insured HVAC services across Nassau County. Upfront pricing, fast response. Call (516) 855-4328.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: "Floral Park HVAC",
  description:
    "Licensed, insured HVAC contractor serving Nassau County, Western Suffolk, and Northern Queens. AC repair, furnace repair, heat pump service, and maintenance.",
  url: "https://floralparkhvac.com",
  telephone: "+15168554328",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7 Florence St",
    addressLocality: "Floral Park",
    addressRegion: "NY",
    postalCode: "11001",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "40.7226",
    longitude: "-73.7020",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "07:00",
      closes: "13:00",
    },
  ],
  areaServed: [
    { "@type": "AdministrativeArea", name: "Nassau County, NY" },
    { "@type": "AdministrativeArea", name: "Western Suffolk County, NY" },
    { "@type": "AdministrativeArea", name: "Northern Queens, NY" },
  ],
  sameAs: ["https://www.facebook.com/floralparkhvac/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <PageTransition />
        <SalePopup businessName="Floral Park HVAC" expiryDate="June 7, 2026" trade="HVAC contractors" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
