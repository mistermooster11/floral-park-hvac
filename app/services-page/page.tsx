import type { Metadata } from "next";
import "@/styles/homepage.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServicesSection from "@/components/custom/services/ServicesSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "HVAC Services Nassau County — Floral Park HVAC | AC & Heating Repair",
  description:
    "AC repair, furnace repair, heat pump service, and HVAC maintenance across Nassau County, Western Suffolk, and Northern Queens. Upfront pricing, fast response.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeroSection
        title="Our Services"
        subtitle="AC repair, furnace repair, heat pump installation, and HVAC maintenance for Nassau County and Long Island homeowners. Licensed, insured, and upfront pricing."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />
      <ServicesSection />
      <TestimonialsSection />
      <CTAFormSection />
    </>
  );
}
