import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVAC Tips & Advice for Long Island Homeowners",
  description:
    "Practical HVAC advice for Nassau County and Long Island homeowners — AC troubleshooting, repair vs. replace decisions, seasonal maintenance guides, and oil vs. gas heating explained.",
  alternates: { canonical: "https://floralparkhvac.com/blog" },
  openGraph: {
    title: "HVAC Tips & Advice — Floral Park HVAC Blog",
    description:
      "Practical HVAC guides for Nassau County homeowners. AC troubleshooting, heating tips, maintenance advice, and honest answers to common questions.",
    url: "https://floralparkhvac.com/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
