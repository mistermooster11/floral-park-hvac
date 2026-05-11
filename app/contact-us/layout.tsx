import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Schedule HVAC Service in Nassau County",
  description:
    "Contact Floral Park HVAC to schedule AC installation, heating repair, boiler service, or any HVAC work across Nassau County, Western Suffolk, and Northern Queens. Call (516) 855-4328 or fill out our form.",
  alternates: { canonical: "https://floralparkhvac.com/contact-us" },
  openGraph: {
    title: "Contact Floral Park HVAC — Nassau County & Queens",
    description:
      "Schedule HVAC service across Nassau County, Western Suffolk, and Northern Queens. Call (516) 855-4328 or use our online form.",
    url: "https://floralparkhvac.com/contact-us",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
