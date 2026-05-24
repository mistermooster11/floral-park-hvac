import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";
import AboutSection from "@/components/custom/about/AboutSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";

export const metadata: Metadata = {
  title: "Heat Pump Services Nassau County — Floral Park HVAC | Install & Repair",
  description:
    "Heat pump installation, repair, and maintenance for Nassau County and Long Island. Licensed HVAC contractor with upfront pricing — call (516) 855-4328.",
};

export default function HeatPumpPage() {
  return (
    <>
      <PageHeroSection
        title="Heat Pump Services"
        subtitle="Heat pump installation, repair, and service across Nassau County and Long Island. Energy-efficient comfort solutions with upfront, honest pricing."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Heat Pump Services" },
        ]}
      />
      <ServiceDetailSection
        activeService="Heat Pump Services"
        sidebarImage="/images/ac-unit-installed-residential-backyard.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Heat Pump Installation & Repair — Long Island"
        intro={[
          "Heat pumps are one of the most energy-efficient ways to heat and cool a Long Island home. Whether you're considering a new heat pump installation or need service on an existing system, Floral Park HVAC provides reliable, upfront-priced service across Nassau County, Western Suffolk, and Northern Queens.",
          "Our licensed technicians handle both ducted and ductless (mini-split) heat pump systems for residential properties throughout the area.",
        ]}
        whatWeDo={[
          "Heat pump installation — ducted and ductless mini-split systems",
          "Full diagnostic for heat pumps not heating or cooling effectively",
          "Refrigerant check and recharge",
          "Reversing valve, defrost board, and compressor repair",
          "Air handler and outdoor unit service",
          "Thermostat and control system programming",
          "Energy efficiency evaluation and system sizing for new installations",
        ]}
        whyChooseUs={[
          "Upfront pricing — full cost disclosed before work begins",
          "Ducted and ductless heat pump expertise",
          "Licensed, insured & bonded Nassau County HVAC contractor",
          "Same-day service available across Nassau County",
          "All major brands serviced and installed",
          "Honest assessment — we'll tell you if repair or replacement makes more sense",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
