import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";
import AboutSection from "@/components/custom/about/AboutSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";

export const metadata: Metadata = {
  title: "Heating Maintenance Nassau County — Floral Park HVAC | Annual Tune-Up",
  description:
    "Gas and oil heating tune-ups for Nassau County and Long Island homes. Keep your furnace or boiler running safely all winter — call (516) 855-4328.",
};

export default function HeatingMaintenancePage() {
  return (
    <>
      <PageHeroSection
        title="Heating Maintenance"
        subtitle="Annual heating tune-ups for furnaces and boilers across Nassau County and Long Island. Schedule before the season hits to stay warm all winter."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Heating Maintenance" },
        ]}
      />
      <ServiceDetailSection
        activeService="Heating Maintenance"
        sidebarImage="/images/technician-inspecting-ac-unit-residential.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Heating System Tune-Up — Furnaces & Boilers"
        intro={[
          "A well-maintained heating system runs more safely, more efficiently, and lasts longer. Floral Park HVAC provides annual heating tune-ups for gas furnaces, oil furnaces, and boilers throughout Nassau County, Western Suffolk, and Northern Queens.",
          "We recommend scheduling your fall tune-up in September or October — before the first cold snap — so your system is ready when temperatures drop on Long Island.",
        ]}
        whatWeDo={[
          "Furnace and boiler inspection — gas and oil systems",
          "Burner cleaning and combustion efficiency check",
          "Heat exchanger inspection for cracks and carbon monoxide risk",
          "Filter inspection and replacement recommendation",
          "Flue and venting safety check",
          "Thermostat calibration and system cycle test",
          "Oil burner tune-up including nozzle and filter replacement",
          "Written report on system condition after every service visit",
        ]}
        whyChooseUs={[
          "Gas and oil heating expertise — furnaces, boilers, and heat pumps",
          "Upfront pricing with no hidden fees",
          "Licensed, insured & bonded Nassau County Home Improvement Contractor",
          "Safety-focused inspections that protect your family",
          "Same-day availability for urgent heating issues",
          "Serving Nassau County, Western Suffolk, and Northern Queens for years",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
