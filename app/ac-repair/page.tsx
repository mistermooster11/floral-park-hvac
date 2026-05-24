import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";
import AboutSection from "@/components/custom/about/AboutSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";

export const metadata: Metadata = {
  title: "AC Repair Nassau County — Floral Park HVAC | Fast Same-Day Service",
  description:
    "Expert AC repair for homes and businesses across Nassau County, Western Suffolk, and Northern Queens. Licensed, insured, and upfront pricing — call (516) 855-4328.",
};

export default function ACRepairPage() {
  return (
    <>
      <PageHeroSection
        title="AC Repair"
        subtitle="Fast, honest AC repair for Nassau County and Long Island homeowners. We diagnose the problem, give you an upfront price, and fix it right."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "AC Repair" },
        ]}
      />
      <ServiceDetailSection
        activeService="AC Repair"
        sidebarImage="/images/hvac-technician-servicing-ac-unit-residential.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Air Conditioning Repair — Nassau County & Long Island"
        intro={[
          "When your AC stops working, you need a fast, reliable technician who won't leave you guessing about the cost. Floral Park HVAC serves Nassau County, Western Suffolk, and Northern Queens with same-day AC repair backed by upfront pricing and a licensed, insured team.",
          "From refrigerant leaks and compressor failures to thermostat issues and frozen evaporator coils, our technicians diagnose accurately and explain the problem in plain language before any work begins.",
        ]}
        whatWeDo={[
          "Full system diagnostic to identify the root cause of the issue",
          "Refrigerant leak detection and recharge",
          "Compressor, capacitor, and contactor replacement",
          "Evaporator and condenser coil cleaning and repair",
          "Thermostat and electrical component troubleshooting",
          "Central AC, mini-split, and ductless system repairs",
          "All major brands serviced: American Standard, Comfortmaker, and more",
        ]}
        whyChooseUs={[
          "Upfront pricing — you approve the cost before any work starts",
          "Same-day service available across Nassau County",
          "Licensed, insured, and bonded Nassau County Home Improvement Contractor",
          "Honest technicians who diagnose accurately and never oversell",
          "BuildZoom score of 94 — top 24% of licensed NY contractors",
          "100% Honesty. Hard Workers.",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
