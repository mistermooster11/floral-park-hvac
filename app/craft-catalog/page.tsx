import CraftCatalogHero from "@/components/custom/craft-catalog/CraftCatalogHero";
import CraftCatalogClient from "@/components/custom/craft-catalog/CraftCatalogClient";

export const metadata = {
  title: "HVAC Services – Floral Park HVAC",
  description:
    "Air conditioning, heating, boilers, water heaters, and full system replacements across Nassau County, Western Suffolk, and Northern Queens. Honest pricing, same-day scheduling.",
  alternates: { canonical: "https://floralparkhvac.com/craft-catalog" },
  openGraph: {
    title: "HVAC Services — Floral Park HVAC",
    description:
      "Cooling, heating, boilers, water heaters, and full system replacements across Nassau County and Northern Queens.",
    url: "https://floralparkhvac.com/craft-catalog",
  },
};

export default function CraftCatalogPage() {
  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">
      <CraftCatalogHero />
      <CraftCatalogClient />
    </main>
  );
}
