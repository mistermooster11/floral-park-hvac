export type CraftItem = {
  slug:        string;
  title:       string;
  categories:  string[];
  disciplines: string[];
  hasAssessment:   boolean;
  hasTranslation:  boolean;
};

export const crafts: CraftItem[] = [
  {
    slug: "central-air-conditioning",
    title: "Central Air Conditioning",
    categories: ["Cooling"],
    disciplines: ["Installation", "Repair"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "mini-split-systems",
    title: "Mini Split Systems",
    categories: ["Cooling"],
    disciplines: ["Installation", "Repair"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "ac-maintenance",
    title: "A/C Tune-Up & Maintenance Plans",
    categories: ["Cooling"],
    disciplines: ["Maintenance"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "gas-heating",
    title: "Gas Heating",
    categories: ["Heating"],
    disciplines: ["Installation", "Repair", "Maintenance"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "oil-heating",
    title: "Oil Heating",
    categories: ["Heating"],
    disciplines: ["Repair", "Maintenance"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "boilers",
    title: "Boilers",
    categories: ["Heating"],
    disciplines: ["Installation", "Repair", "Replacement"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "water-heaters",
    title: "Water Heaters",
    categories: ["Equipment"],
    disciplines: ["Installation", "Replacement"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "air-handlers-duct-work",
    title: "Air Handlers & Duct Work",
    categories: ["Equipment"],
    disciplines: ["Installation", "Repair"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "system-replacements",
    title: "Full System Replacements",
    categories: ["Equipment"],
    disciplines: ["Replacement"],
    hasAssessment: false,
    hasTranslation: false,
  },
];

export const CATEGORIES = [
  "All Categories",
  "Cooling",
  "Heating",
  "Equipment",
] as const;

export const DISCIPLINES = [
  "All Disciplines",
  "Installation",
  "Repair",
  "Maintenance",
  "Replacement",
] as const;
