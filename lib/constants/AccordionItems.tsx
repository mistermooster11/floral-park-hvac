
type AccordionStep = { label: string; body: string };

export const accordionItems = [
  {
    id: "accordion-0",
    title: "Air Conditioning",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    // [TODO: Replace with actual AC install/service photo from client]
    description:
      "We install, service, and repair central air conditioning systems and mini splits across Nassau County, Western Suffolk, and Northern Queens. From a no-cool call in the middle of July to a full system replacement, our techs carry the right parts and get it done fast.",
    learnHref: "/craft-catalog/central-air-conditioning",
    steps: [
      { label: "Diagnose", body: "We assess the system, check refrigerant levels, and identify the root cause before recommending any repair or replacement." },
      { label: "Quote Upfront", body: "Price confirmed before work begins — no surprises, no bait-and-switch. What we quote is what you pay." },
      { label: "Fix or Install", body: "Whether it's a refrigerant recharge, capacitor swap, or full system install, our techs carry the right parts for same-day completion." },
      { label: "Test & Confirm", body: "We run the system, verify temperatures at every vent, and walk you through what was done before we leave." },
    ] as AccordionStep[],
  },
  {
    id: "accordion-1",
    title: "Heating",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    // [TODO: Replace with actual heating/boiler photo from client]
    description:
      "Gas, oil, or hot water — we service all heating systems common to Long Island homes. Our technicians diagnose furnace and boiler failures, perform annual tune-ups, and handle full system replacements. We don't leave until your heat is back on.",
    learnHref: "/craft-catalog/gas-heating",
    steps: [
      { label: "Diagnose", body: "We check the heat exchanger, igniter, controls, and safety limits to pinpoint the exact failure — no guessing." },
      { label: "Quote Upfront", body: "Price confirmed before we touch anything. We'll tell you exactly what's wrong and what it will cost to fix it." },
      { label: "Repair or Replace", body: "From a bad igniter to a full furnace or boiler swap, we carry common parts on the truck for same-day fixes wherever possible." },
      { label: "Test & Confirm", body: "We cycle the system through a full heat run and verify output at each vent before we pack up." },
    ] as AccordionStep[],
  },
  {
    id: "accordion-2",
    title: "Equipment & Installs",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    // [TODO: Replace with actual water heater or air handler install photo from client]
    description:
      "Water heaters, air handlers, ductwork, and full system swaps. Whether you're upgrading aging equipment or replacing a failed unit, we install American Standard, Comfortmaker, and Burnham equipment with full warranty and Nassau County licensed work.",
    learnHref: "/craft-catalog/water-heaters",
    steps: [
      { label: "Assess", body: "We review existing equipment, measurements, and load requirements before recommending a replacement — no upselling on equipment you don't need." },
      { label: "Quote Upfront", body: "Full written estimate before any work begins — equipment, labor, and permit if required. No hidden fees." },
      { label: "Install", body: "We handle disconnect, removal, and installation with Nassau County licensed workmanship. Clean install, no shortcuts, full code compliance." },
      { label: "Commission & Walk Through", body: "We power up, test all connections and outputs, and walk you through the new unit before we pack up." },
    ] as AccordionStep[],
  },
  {
    id: "accordion-3",
    title: "Maintenance Plans",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    // [TODO: Replace with actual maintenance/tune-up photo from client]
    description:
      "Annual tune-ups catch small issues before they become emergency calls. We recommend one check per system, per year — AC in spring, heating in fall. Maintenance plan customers get priority booking and discounts on repairs during peak season.",
    learnHref: "/craft-catalog/ac-maintenance",
    steps: [
      { label: "Schedule", body: "We pick a time that works for you — no 4-hour windows. We show up on time, every time." },
      { label: "Inspect", body: "Full system check: filters, coils, refrigerant levels, belts, safeties, and all electrical connections." },
      { label: "Tune Up", body: "We clean components, tighten connections, and make minor adjustments to keep efficiency up and emergency breakdowns down." },
      { label: "Report", body: "You get a plain-language summary of what we found and anything to watch for before the next season." },
    ] as AccordionStep[],
  },
];
