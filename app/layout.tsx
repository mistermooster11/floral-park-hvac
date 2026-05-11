import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "@/styles/homepage.css";
import "@/styles/contact.css";
import "@/styles/channel.css";
import "@/styles/faq.css";
import "@/styles/craft-catalog.css";
import "@/styles/programs.css";
import Header from "@/components/custom/header/Header";
import Footer from "@/components/custom/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
});

const BASE_URL = "https://floralparkhvac.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Floral Park HVAC — Nassau County Heating & Cooling",
    template: "%s | Floral Park HVAC",
  },
  description:
    "Licensed HVAC contractor serving Nassau County, Western Suffolk, and Northern Queens. AC installation, heating repair, boilers, water heaters, and full system replacements. Upfront pricing, same-day scheduling. Call (516) 855-4328.",
  keywords: [
    "HVAC Nassau County",
    "AC repair Long Island",
    "heating repair Floral Park",
    "boiler service Nassau County",
    "air conditioning installation Queens",
    "mini split installation Long Island",
  ],
  authors: [{ name: "Floral Park HVAC Corp" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Floral Park HVAC",
    title: "Floral Park HVAC — Nassau County Heating & Cooling",
    description:
      "Licensed HVAC contractor serving Nassau County, Western Suffolk, and Northern Queens. AC installation, heating repair, boilers, and full system replacements. Same-day scheduling.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Floral Park HVAC — Nassau County & Queens HVAC Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Floral Park HVAC — Nassau County Heating & Cooling",
    description:
      "Licensed HVAC contractor serving Nassau County, Western Suffolk, and Northern Queens. Upfront pricing, same-day scheduling. Call (516) 855-4328.",
    images: ["/images/og-default.jpg"],
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
  alternates: {
    canonical: BASE_URL,
  },
};

/* ── LocalBusiness JSON-LD schema (site-wide) ── */
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: "Floral Park HVAC Corp",
  url: BASE_URL,
  telephone: "(516) 855-4328",
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
    longitude: "-73.7009",
  },
  areaServed: [
    { "@type": "County", name: "Nassau County", addressRegion: "NY" },
    { "@type": "AdministrativeArea", name: "Western Suffolk County", addressRegion: "NY" },
    { "@type": "AdministrativeArea", name: "Northern Queens", addressRegion: "NY" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "07:00",
      closes: "13:00",
    },
  ],
  priceRange: "$$",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "HVAC Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Central Air Conditioning Installation & Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mini Split System Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Heating Repair & Replacement" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Boiler Service & Replacement" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Water Heater Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Full HVAC System Replacement" } },
    ],
  },
  sameAs: ["https://www.facebook.com/floralparkhvac/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
