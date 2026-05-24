import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";
import AboutSection from "@/components/custom/about/AboutSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";

export const metadata: Metadata = {
  title: "Furnace Repair Nassau County — Floral Park HVAC | Same-Day Service",
  description:
    "Licensed furnace repair for Nassau County and Long Island homes. Gas and oil furnace troubleshooting with upfront pricing — call Floral Park HVAC at (516) 855-4328.",
};

export default function FurnaceRepairPage() {
  return (
    <>
      <PageHeroSection
        title="Furnace Repair"
        subtitle="Gas and oil furnace repair for Nassau County and Long Island homes. Upfront pricing, licensed technicians, same-day service available."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Furnace Repair" },
        ]}
      />
      <ServiceDetailSection
        activeService="Furnace Repair"
        sidebarImage="/images/hvac-technician-inspecting-outdoor-unit.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Furnace Repair — Gas & Oil Heating Systems"
        intro={[
          "A broken furnace in the middle of a Long Island winter is more than uncomfortable — it's urgent. Floral Park HVAC provides fast furnace repair across Nassau County, Western Suffolk, and Northern Queens, with honest diagnosis and no surprise charges.",
          "Our technicians work on gas and oil furnaces of all brands and ages. We'll tell you exactly what's wrong and give you a clear price before any repair begins.",
        ]}
        whatWeDo={[
          "Full furnace diagnostic — gas and oil systems",
          "Igniter, heat exchanger, and blower motor repair",
          "Gas valve, pressure switch, and limit control troubleshooting",
          "Flue and venting inspection and repair",
          "Oil burner cleaning, nozzle replacement, and tune-up",
          "Thermostat calibration and control board replacement",
          "All major brands serviced including Burnham, American Standard, and Comfortmaker",
        ]}
        whyChooseUs={[
          "Upfront pricing — you approve the cost before any work starts",
          "Same-day furnace repair available across Nassau County",
          "Licensed, insured & bonded — Nassau County Home Improvement Contractor",
          "Gas and oil furnace expertise across all major brands",
          "Honest technicians who explain the problem in plain language",
          "Top 24% of licensed NY contractors — BuildZoom score 94",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
