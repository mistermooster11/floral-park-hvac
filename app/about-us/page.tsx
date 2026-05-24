import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import AboutSection from "@/components/custom/about/AboutSection";
import WhyChooseSection from "@/components/custom/why-choose/WhyChooseSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "About Floral Park HVAC — Nassau County Licensed HVAC Contractor",
  description:
    "Learn about Floral Park HVAC — a licensed, insured, and bonded HVAC contractor serving Nassau County, Western Suffolk, and Northern Queens with honest pricing and fast service.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeroSection
        title="About Us"
        subtitle="Licensed, insured & bonded HVAC contractor serving Nassau County, Western Suffolk, and Northern Queens — 100% Honesty. Hard Workers."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />
      <AboutSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <CTAFormSection />
    </>
  );
}
