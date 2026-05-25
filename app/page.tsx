import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import HeroSection from "@/components/custom/hero/HeroSection";
import MarqueeTicker from "@/components/custom/ticker/MarqueeTicker";
import AboutSection from "@/components/custom/about/AboutSection";
import ServicesSection from "@/components/custom/services/ServicesSection";
import WhyChooseSection from "@/components/custom/why-choose/WhyChooseSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import NeedServicesSection from "@/components/custom/need-services/NeedServicesSection";
import FAQSection from "@/components/custom/faq/FAQSection";
import BlogSection from "@/components/custom/blog/BlogSection";

export default function Home() {
  return (
    <>
      <div className="above-fold">
        <HeroSection />
        <MarqueeTicker />
      </div>
      <AboutSection />
      <ServicesSection limit={4} />
      <WhyChooseSection />
      <CTAFormSection />
      <TestimonialsSection />
      <NeedServicesSection />
      <FAQSection />
      <BlogSection />
    </>
  );
}
