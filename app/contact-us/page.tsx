import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ContactSection from "@/components/custom/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact Floral Park HVAC — Nassau County HVAC Service | (516) 855-4328",
  description:
    "Contact Floral Park HVAC for fast HVAC repair, maintenance, and installation across Nassau County, Western Suffolk, and Northern Queens. Call (516) 855-4328 or fill out our form.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeroSection
        title="Contact Us"
        subtitle="Serving Nassau County, Western Suffolk, and Northern Queens — call or fill out the form for a fast, free estimate."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <ContactSection />
      <div className="contact-map">
        <iframe
          title="Floral Park HVAC Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.!2d-73.7020!3d40.7226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c26d7c!2s7+Florence+St%2C+Floral+Park%2C+NY+11001!5e0!3m2!1sen!2sus!4v1"
          width="100%"
          height="450"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}
