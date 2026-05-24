import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";
import AboutSection from "@/components/custom/about/AboutSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";

export const metadata: Metadata = {
  title: "AC Maintenance Nassau County — Floral Park HVAC | Annual Tune-Up",
  description:
    "Professional AC tune-up and maintenance for Nassau County and Long Island homes. Keep your system running efficiently all summer — call (516) 855-4328.",
};

export default function ACMaintenancePage() {
  return (
    <>
      <PageHeroSection
        title="AC Maintenance"
        subtitle="Annual AC tune-ups and maintenance plans for Nassau County homeowners. Keep your system running at peak efficiency before summer arrives."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "AC Maintenance" },
        ]}
      />
      <ServiceDetailSection
        activeService="AC Maintenance"
        sidebarImage="/images/hvac-technician-ac-unit-maintenance-repair.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="AC Tune-Up & Maintenance — Nassau County"
        intro={[
          "Regular AC maintenance is the single best thing you can do to extend the life of your system and avoid a breakdown on the hottest day of the year. Floral Park HVAC provides thorough, professional tune-ups for central AC systems and ductless mini-splits throughout Nassau County, Western Suffolk, and Northern Queens.",
          "We recommend scheduling your spring tune-up in April or May — before peak demand — to ensure your system is ready when you need it most.",
        ]}
        whatWeDo={[
          "Complete system inspection and performance check",
          "Coil cleaning — evaporator and condenser",
          "Refrigerant level check and adjustment if needed",
          "Filter inspection and replacement recommendation",
          "Electrical connections tightening and safety check",
          "Thermostat calibration and cycle testing",
          "Drain line flush to prevent water damage and mold",
          "Written summary of system condition after every visit",
        ]}
        whyChooseUs={[
          "Thorough 8-point tune-up — not a 15-minute check-in-and-out",
          "Upfront pricing before the visit — no surprise add-ons",
          "Licensed, insured & bonded Nassau County HVAC contractor",
          "We identify small issues before they become expensive failures",
          "Serving Nassau County, Western Suffolk, and Northern Queens",
          "All major brands maintained including American Standard and Comfortmaker",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
