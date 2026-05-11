import type { Metadata } from "next";
import Hero from "@/components/custom/Hero";
import HomeSectionWithLine from "@/components/custom/HomeSectionWithLine";
import Insights from "@/components/custom/Insights";
import Testimonial from "@/components/custom/Testimonial";
import HomeCTA from "@/components/custom/HomeCTA";

export const metadata: Metadata = {
  title: "Floral Park HVAC — Nassau County Heating & Cooling",
  description:
    "Licensed HVAC contractor serving Nassau County, Western Suffolk, and Northern Queens. AC installation, heating repair, boilers, water heaters, and full system replacements. Upfront pricing, same-day scheduling. Call (516) 855-4328.",
  alternates: { canonical: "https://floralparkhvac.com" },
};

export default function Home() {
  return (
    <>
      <main
        className="pt-76 relative max-[1150px]:pt-[6.2rem] before:content-[''] before:absolute before:left-0 before:bottom-full before:right-0 before:-mb-76 before:h-screen before:bg-brand-navy max-[1150px]:before:mb-[-6.2rem] overflow-hidden"
      >
        <Hero />
        <HomeSectionWithLine />
        <Insights />
        <Testimonial />
        <HomeCTA />
      </main>
    </>
  );
}
