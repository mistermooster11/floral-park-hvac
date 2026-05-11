import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVAC FAQs — Common Questions Answered",
  description:
    "Answers to the most common HVAC questions from Nassau County homeowners — response times, upfront pricing, repair vs. replace, brands serviced, licensing, service areas, and maintenance schedules.",
  alternates: { canonical: "https://floralparkhvac.com/general-faqs" },
  openGraph: {
    title: "HVAC FAQs — Floral Park HVAC",
    description:
      "Common HVAC questions answered honestly: response times, pricing, repair vs. replace, brands, licensing, service areas, and tune-up schedules.",
    url: "https://floralparkhvac.com/general-faqs",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How quickly can you come out?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We schedule most service calls the same day or next day. Call us at (516) 855-4328 and we'll give you an accurate appointment time right away. Business hours are Monday–Friday 7am–5pm and Saturday 7am–1pm.",
      },
    },
    {
      "@type": "Question",
      name: "Do you give upfront pricing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Always. We assess your system, explain exactly what's needed, and give you the full price before any work starts. No surprise charges, no hourly mysteries — what we quote is what you pay.",
      },
    },
    {
      "@type": "Question",
      name: "Should I repair or replace my HVAC system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A good rule of thumb: if your system is under 10 years old and the repair cost is less than half the price of a replacement, repair usually makes more financial sense. If it's older or the same issue keeps coming back, a new system often pays for itself in energy savings and reliability.",
      },
    },
    {
      "@type": "Question",
      name: "What brands do you service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We service all major brands including American Standard, Comfortmaker, Burnham, Carrier, Trane, Lennox, Rheem, Goodman, and Bryant. We also install American Standard, Comfortmaker, and Burnham equipment on new installs and replacements.",
      },
    },
    {
      "@type": "Question",
      name: "Are you licensed and insured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Floral Park HVAC Corp is a licensed, insured, and bonded HVAC company. We hold a Nassau County Home Improvement Contractor license and maintain full insurance on every job.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve Nassau County, Western Suffolk, and Northern Queens, including Floral Park, New Hyde Park, Garden City, Mineola, Elmont, Valley Stream, Franklin Square, Hempstead, West Hempstead, Rockville Centre, Oceanside, Merrick, Bellmore, Levittown, East Meadow, Hicksville, Syosset, and more.",
      },
    },
    {
      "@type": "Question",
      name: "How often should I get an HVAC tune-up?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Once a year per system is the standard recommendation — ideally in spring for your AC before the heat season, and in fall for your heating before the cold hits. An annual tune-up catches small issues before they become expensive emergency calls.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer financing or payment plans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For larger installations and system replacements, we work with customers to find solutions that fit their budget. Call us at (516) 855-4328 to discuss options for your specific project.",
      },
    },
  ],
};

export default function FaqsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
