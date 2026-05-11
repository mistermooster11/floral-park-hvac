import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Before & After Gallery — HVAC Jobs Nassau County",
  description:
    "See real before-and-after photos from Floral Park HVAC jobs across Nassau County, Western Suffolk, and Northern Queens. AC installs, boiler replacements, mini split systems, and full HVAC replacements.",
  alternates: { canonical: "https://floralparkhvac.com/gallery" },
  openGraph: {
    title: "Before & After Gallery — Floral Park HVAC",
    description:
      "Real before-and-after HVAC job photos from Nassau County and Queens. AC installs, boiler replacements, mini splits, and full system swaps.",
    url: "https://floralparkhvac.com/gallery",
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
