"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

/* ── Service Area Data ──────────────────────────────────────── */

const areas = [
  {
    slug: "nassau-county",
    region: "Nassau County",
    headline: "HVAC Service Throughout Nassau County",
    description:
      "Nassau County is our home turf. We know the housing stock — from post-war Cape Cods in Levittown to larger homes in Garden City and Syosset — and we understand the HVAC demands that come with Long Island summers and cold winters. Whether your central AC failed in a heat wave or your boiler went out in January, we respond fast and fix it right.",
    callouts: [
      "Full county coverage — all Nassau towns and villages",
      "Emergency service available — call and we'll get there",
      "Licensed Nassau County contractor, fully insured",
    ],
    neighborhoods:
      "Floral Park • New Hyde Park • Garden City • Mineola • Elmont • Valley Stream • Franklin Square • Hempstead • West Hempstead • Rockville Centre • Oceanside • Baldwin • Freeport • Merrick • Bellmore • Wantagh • Seaford • Massapequa • Levittown • East Meadow • Hicksville • Syosset • Uniondale • Lynbrook • Malverne • Hewlett & More",
  },
  {
    slug: "western-suffolk",
    region: "Western Suffolk County",
    headline: "Heating & Cooling Service in Western Suffolk",
    description:
      "We extend our service into the Western Suffolk communities along the South Shore and the LIE corridor. Same licensed technicians, same upfront pricing, same fast scheduling — just a little further east. If you're in Western Suffolk and need HVAC service, call us first.",
    callouts: [
      "Oil and gas heating specialists — common in Suffolk",
      "AC installs and replacements for all home sizes",
      "Same-day scheduling available in most areas",
    ],
    neighborhoods:
      "Brentwood • Bay Shore • Deer Park • North Babylon • West Babylon • Lindenhurst • Amityville • Copiague • Wyandanch & Surrounding Areas",
  },
  {
    slug: "northern-queens",
    region: "Northern Queens",
    headline: "HVAC Service in Northern Queens",
    description:
      "Our service area crosses into Northern Queens — the communities that border Nassau County and the neighborhoods further into the borough. We handle residential HVAC service for single-family homes, multi-family buildings, and everything in between across this part of Queens.",
    callouts: [
      "Central AC and heating service for all home types",
      "Mini split installs in buildings without ductwork",
      "Fast response from nearby Nassau County dispatch",
    ],
    neighborhoods:
      "Floral Park (Queens) • Queens Village • Bellerose • Hollis • Jamaica • Glen Oaks • Little Neck • Bayside • Douglaston • Springfield Gardens & Surrounding Neighborhoods",
  },
];

/* ── Sub-components ─────────────────────────────────────────── */

function AreaSection({ area, reversed }: { area: typeof areas[number]; reversed: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <div
      ref={ref}
      id={area.slug}
      className={`content-block-flex flex-module fadeIn wow${vis}`}
      style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}
    >
      <div className="inner inner--slim-1172">
        <div className="content-block-head wide">
          <h2 className={`h3 fadeInUpS wow${vis}`} style={{ animationDelay: "0.1s" }}>
            {area.headline}
          </h2>
        </div>
        <div className="content-block-in wide">
          <div className="content-block-text content-entry p2 full-width">
            <p>{area.description}</p>
            <ul>
              {area.callouts.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <p>
              <strong>Neighborhoods served:</strong> {area.neighborhoods}
            </p>
            <p>
              Not sure if we cover your address?{" "}
              <a href="tel:5168554328" className="ia-link">Call (516) 855-4328</a>{" "}
              — we almost certainly do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────── */

export default function ServiceAreasPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true, margin: "0px 0px -60px 0px" });
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "0px 0px -60px 0px" });

  const heroVis = heroInView ? " is-visible" : "";

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">

      {/* ── Hero ── */}
      <div ref={heroRef} className={`hero-org flex-module fadeIn wow${heroVis}`}>
        <div className="hero-org__top ia-bg-dark">
          <div className="inner inner--slim-1172">
            <div className={`breadcrumbs ia-sky fadeInUpS wow${heroVis}`}>
              <span><a href="/">Home</a></span>
              <em>&gt;</em>
              <span className="post post-page current-item">Service Areas</span>
            </div>
            <h1 className={`ia-white ia-margin-0 fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
              We Come to You
            </h1>
          </div>
        </div>

        <div className="hero-org__bottom flex-module">
          <div className="inner inner--slim-1172 cleared">
            <div className={`hero-org__left wow${heroVis}`}>
              <div className={`sub-heading fadeInUpS wow${heroVis}`}>Coverage Area</div>
              <div className={`content-entry fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                <p>
                  Floral Park HVAC serves all of Nassau County, Western Suffolk, and
                  Northern Queens. We dispatch our own licensed technicians — not
                  subcontractors — across the entire service area. Same-day scheduling
                  available. Mon–Fri 7am–5pm &amp; Sat 7am–1pm.
                </p>
              </div>
            </div>

            <div className="hero-org__right">
              <div className={`sub-heading fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                Jump to Area
              </div>
              <ul className="quick-links" role="list">
                {areas.map((area, i) => (
                  <li key={area.slug} className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
                    <a className="ia-link ia-link--arrow" href={`#${area.slug}`}>
                      <i className="icon-link" />
                      <span>{area.region}</span>
                    </a>
                  </li>
                ))}
                <li className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.4s" }}>
                  <a className="ia-link ia-link--arrow" href="tel:5168554328">
                    <i className="icon-link" />
                    <span>Call (516) 855-4328</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── Area Sections ── */}
      {areas.map((area, i) => (
        <AreaSection key={area.slug} area={area} reversed={i % 2 !== 0} />
      ))}

      {/* ── CTA ── */}
      <div
        ref={ctaRef}
        className={`front-donation ia-bg-sky flex-module wow fadeInUpS${ctaInView ? " is-visible" : ""}`}
      >
        <div className="inner inner--slim-1172">
          <div className={`sub-heading wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.1s" }}>
            Not Sure If We Cover You?
          </div>
          <h2 className={`h2 wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
            Just Call — We Almost Certainly Do
          </h2>
          <div className={`front-donation__in wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
            <div className="content-entry">
              <p>
                Our dispatch is fast and our coverage is wide. Call{" "}
                <strong>(516) 855-4328</strong> and we&apos;ll confirm in 30 seconds
                and get you on the schedule.
              </p>
            </div>
            <div className="front-donation__btn-wrap">
              <div className="front-donation__btn">
                <a className="btn btn--primary" href="tel:5168554328">
                  Call (516) 855-4328
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
