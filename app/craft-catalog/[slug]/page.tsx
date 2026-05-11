import { notFound } from "next/navigation";
import CraftHero      from "@/components/custom/craft-catalog/CraftHero";
import ChannelSidebar from "@/components/custom/channel/ChannelSidebar";
import CraftOverview  from "@/components/custom/craft-catalog/CraftOverview";
import RelatedCrafts  from "@/components/custom/craft-catalog/RelatedCrafts";
import { servicePages } from "@/data/craft-catalog/service-pages";

// [TODO: Replace with a real Floral Park HVAC job site photo once assets are provided]
const PLACEHOLDER_BG = "/images/IMG_9688-1024x682.jpg";

/* Pre-render all known service slugs at build time */
export function generateStaticParams() {
  return Object.keys(servicePages).map((slug) => ({ slug }));
}

/* Unique meta descriptions keyed by slug */
const slugDescriptions: Record<string, string> = {
  "central-air-conditioning":
    "Central AC installation, repair, and replacement across Nassau County and Northern Queens. Same-day scheduling, upfront pricing, and licensed technicians. Call (516) 855-4328.",
  "mini-split-systems":
    "Ductless mini split installation and repair in Nassau County, Western Suffolk, and Northern Queens. Energy-efficient cooling and heating for any room. Free estimates available.",
  "ac-maintenance":
    "AC tune-up and maintenance plans for Nassau County homeowners. Annual check-ups to prevent breakdowns, improve efficiency, and extend system life. Book your spring service now.",
  "gas-heating":
    "Gas furnace repair, replacement, and annual tune-ups across Nassau County and Queens. Fast diagnosis, same-day parts, and upfront pricing from a licensed Long Island HVAC contractor.",
  "oil-heating":
    "Oil heating repair and system replacement in Nassau County and Long Island. Experienced with all major oil furnace brands. Honest pricing, no upselling.",
  "boilers":
    "Boiler repair, service, and replacement across Nassau County, Western Suffolk, and Northern Queens. Hot water and steam boilers — Burnham, Weil-McLain, and more. Licensed and insured.",
  "water-heaters":
    "Water heater installation and replacement in Nassau County and Queens. Tank and tankless models available. Fast turnaround, licensed work, upfront pricing.",
  "air-handlers-duct-work":
    "Air handler installation and ductwork service across Nassau County and Northern Queens. Improve airflow, reduce energy waste, and extend the life of your HVAC system.",
  "system-replacements":
    "Full HVAC system replacement across Nassau County, Western Suffolk, and Northern Queens. We size, supply, and install complete heating and cooling systems with Nassau County licensed workmanship.",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = servicePages[slug];
  if (!data) return {};
  return {
    title: `${data.title} — Floral Park HVAC`,
    description:
      slugDescriptions[slug] ??
      `Professional ${data.title.toLowerCase()} service across Nassau County, Western Suffolk, and Northern Queens. Upfront pricing, same-day scheduling, licensed and insured.`,
    alternates: { canonical: `https://floralparkhvac.com/craft-catalog/${slug}` },
    openGraph: {
      title: `${data.title} — Floral Park HVAC`,
      description:
        slugDescriptions[slug] ??
        `Professional ${data.title.toLowerCase()} service across Nassau County. Upfront pricing, same-day scheduling.`,
      url: `https://floralparkhvac.com/craft-catalog/${slug}`,
    },
  };
}

function getBreadcrumbSchema(slug: string, title: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://floralparkhvac.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://floralparkhvac.com/craft-catalog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: `https://floralparkhvac.com/craft-catalog/${slug}`,
      },
    ],
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = servicePages[slug];
  if (!data) notFound();

  const breadcrumbSchema = getBreadcrumbSchema(slug, data.title);

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CraftHero
        title={data.title}
        bgImage={PLACEHOLDER_BG}
        breadcrumbs={[
          { label: "Services", href: "/craft-catalog" },
          { label: data.title },
        ]}
      />

      <div className="channel-wrap">
        <div className="inner">
          <ChannelSidebar navItems={data.navItems} />

          <div className="channel-container">

            {/* ── Overview ──────────────────────────────────────────── */}
            <div id="overview">
              <CraftOverview
                overviewContent={data.overviewContent}
                quickLinks={data.overviewQuickLinks}
              />
            </div>

            {/* ── Middle sections ───────────────────────────────────── */}
            {data.sections.map((section) => (
              <div key={section.id} id={section.id} className="section-page">
                <div className="content-block">
                  <div className="inner inner--slim-1172 cleared">
                    <h2 className="h3 fadeInUpS wow is-visible">
                      {section.heading}
                    </h2>
                    <div className="cleared">
                      <div className="content-entry p2 fadeInUpS wow is-visible">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* ── CTA banner ────────────────────────────────────────── */}
            <div className="banner-craft ia-bg-sky fadeInUp wow is-visible">
              <div className="inner">
                <div className="content-entry p3">
                  <p>
                    <strong>Ready to book?</strong>{" "}
                    Call{" "}
                    <a href="tel:5168554328">(516) 855-4328</a>{" "}
                    for same-day scheduling, or{" "}
                    <a href="/contact-us">send us a message online</a>.
                    We give you a price before we start — no surprises.
                  </p>
                </div>
              </div>
            </div>

            {/* ── Related Services ──────────────────────────────────── */}
            <div id="related_services">
              <RelatedCrafts
                description={
                  <p>
                    Floral Park HVAC handles every heating and cooling need
                    across Nassau County, Western Suffolk, and Northern Queens.
                    Explore our other services below.
                  </p>
                }
                crafts={data.relatedServices}
              />
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
