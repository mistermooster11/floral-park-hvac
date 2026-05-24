import type { Metadata } from "next";
import "@/styles/homepage.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import FAQSection from "@/components/custom/faq/FAQSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";

export const metadata: Metadata = {
  title: "FAQ — Floral Park HVAC | Nassau County HVAC Questions Answered",
  description:
    "Answers to the most common HVAC questions from Nassau County and Long Island homeowners — response time, pricing, brands, service area, and maintenance schedules.",
};

export default function FAQPage() {
  return (
    <>
      <PageHeroSection
        title="Frequently Asked Questions"
        subtitle="Honest answers to the most common questions Nassau County homeowners ask about HVAC repair, maintenance, and pricing."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ" },
        ]}
      />
      <FAQSection />
      <CTAFormSection />
      <TestimonialsSection />
    </>
  );
}
