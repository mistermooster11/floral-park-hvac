import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import BlogSection from "@/components/custom/blog/BlogSection";
import NeedServicesSection from "@/components/custom/need-services/NeedServicesSection";

export const metadata: Metadata = {
  title: "Blog — Floral Park HVAC | HVAC Tips & Homeowner Guides",
  description:
    "Practical HVAC advice for Nassau County and Long Island homeowners — AC troubleshooting, heating tips, seasonal maintenance guides, and honest answers from our technicians.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeroSection
        title="Blog"
        subtitle="Practical HVAC tips and homeowner guides from the Floral Park HVAC team — serving Nassau County, Western Suffolk, and Northern Queens."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />
      <BlogSection />
      <NeedServicesSection />
    </>
  );
}
