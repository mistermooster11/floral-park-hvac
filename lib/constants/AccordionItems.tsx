
type AccordionLink = { label: string; href: string; external?: boolean };

export const accordionItems = [
  {
    id: "accordion-0",
    title: "Air Conditioning",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    // [TODO: Replace with actual AC install/service photo from client]
    description:
      "We install, service, and repair central air conditioning systems and mini splits across Nassau County, Western Suffolk, and Northern Queens. From a no-cool call in the middle of July to a full system replacement, our techs carry the right parts and get it done fast.",
    learnHref: "/craft-catalog/central-air-conditioning",
    links: [
      { label: "Central Air Conditioning",     href: "/craft-catalog/central-air-conditioning"  },
      { label: "Mini Split Systems",           href: "/craft-catalog/mini-split-systems"         },
      { label: "A/C Tune-Up & Maintenance",    href: "/craft-catalog/ac-maintenance"             },
      { label: "Schedule AC Service",          href: "/contact-us"                               },
    ] as AccordionLink[],
  },
  {
    id: "accordion-1",
    title: "Heating",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    // [TODO: Replace with actual heating/boiler photo from client]
    description:
      "Gas, oil, or hot water — we service all heating systems common to Long Island homes. Our technicians diagnose furnace and boiler failures, perform annual tune-ups, and handle full system replacements. We don't leave until your heat is back on.",
    learnHref: "/craft-catalog/gas-heating",
    links: [
      { label: "Gas Heating",         href: "/craft-catalog/gas-heating"   },
      { label: "Oil Heating",         href: "/craft-catalog/oil-heating"   },
      { label: "Boilers",             href: "/craft-catalog/boilers"       },
      { label: "Schedule Heating Service", href: "/contact-us"             },
    ] as AccordionLink[],
  },
  {
    id: "accordion-2",
    title: "Equipment & Installs",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    // [TODO: Replace with actual water heater or air handler install photo from client]
    description:
      "Water heaters, air handlers, ductwork, and full system swaps. Whether you're upgrading aging equipment or replacing a failed unit, we install American Standard, Comfortmaker, and Burnham equipment with full warranty and Nassau County licensed work.",
    learnHref: "/craft-catalog/water-heaters",
    links: [
      { label: "Water Heaters",           href: "/craft-catalog/water-heaters"        },
      { label: "Air Handlers & Duct Work", href: "/craft-catalog/air-handlers-duct-work" },
      { label: "Full System Replacements", href: "/craft-catalog/system-replacements" },
      { label: "Get a Free Estimate",      href: "/contact-us"                        },
    ] as AccordionLink[],
  },
  {
    id: "accordion-3",
    title: "Maintenance Plans",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    // [TODO: Replace with actual maintenance/tune-up photo from client]
    description:
      "Annual tune-ups catch small issues before they become emergency calls. We recommend one check per system, per year — AC in spring, heating in fall. Our maintenance plans keep you on schedule and often include priority booking for repairs during peak season.",
    learnHref: "/craft-catalog/ac-maintenance",
    links: [
      { label: "A/C Tune-Up & Maintenance Plans", href: "/craft-catalog/ac-maintenance"          },
      { label: "View All Services",               href: "/craft-catalog"                          },
      { label: "Call (516) 855-4328",             href: "tel:5168554328"                         },
      { label: "Schedule a Tune-Up",              href: "/contact-us"                             },
    ] as AccordionLink[],
  },
];