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
    description: `Professional ${data.title.toLowerCase()} service across Nassau County, Western Suffolk, and Northern Queens. Upfront pricing, same-day scheduling, licensed and insured.`,
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

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">
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
