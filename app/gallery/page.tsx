"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

/* ── Gallery Data ────────────────────────────────────────────── */

const galleryItems = [
  {
    id: "gallery-1",
    label: "Central AC Install — Floral Park, Nassau County",
    beforeAlt: "Old AC condenser before replacement",
    afterAlt:  "New Carrier AC condenser after installation",
    before: "https://www.floralparkhvac.com/",
    after:  "https://www.floralparkhvac.com/",
    category: "AC Installation",
  },
  {
    id: "gallery-2",
    label: "Boiler Replacement — New Hyde Park",
    beforeAlt: "Old boiler removed prior to replacement",
    afterAlt:  "New Burnham boiler fully installed",
    before: "https://www.floralparkhvac.com/",
    after:  "https://www.floralparkhvac.com/",
    category: "Boiler",
  },
  {
    id: "gallery-3",
    label: "Air Handler & Duct Work — Nassau County",
    beforeAlt: "Old air handler and ductwork before service",
    afterAlt:  "New air handler installation with updated duct runs",
    before: "https://www.floralparkhvac.com/",
    after:  "https://www.floralparkhvac.com/",
    category: "Air Handler",
  },
  {
    id: "gallery-4",
    label: "Mini Split Install — Finished Basement",
    beforeAlt: "Unfinished space before mini split install",
    afterAlt:  "Wall-mounted mini split system installed and running",
    before: "https://www.floralparkhvac.com/",
    after:  "https://www.floralparkhvac.com/",
    category: "Mini Split",
  },
  {
    id: "gallery-5",
    label: "Full System Swap — Western Suffolk",
    beforeAlt: "Aging HVAC system before full replacement",
    afterAlt:  "Complete new HVAC system installed and operational",
    before: "https://www.floralparkhvac.com/",
    after:  "https://www.floralparkhvac.com/",
    category: "System Replacement",
  },
  {
    id: "gallery-6",
    label: "Water Heater Replacement — Queens Village",
    beforeAlt: "Old water heater prior to removal",
    afterAlt:  "New water heater installed and ready",
    before: "https://www.floralparkhvac.com/",
    after:  "https://www.floralparkhvac.com/",
    category: "Water Heater",
  },
];

/* ── Sub-components ─────────────────────────────────────────── */

function GalleryCard({ item, delay }: { item: typeof galleryItems[number]; delay: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <div
      ref={ref}
      className={`user-grid-item user-grid-item--three fadeInUpS wow${vis}`}
      style={{ animationDelay: delay }}
    >
      <div className="user-grid-item-info">
        <span
          className="p3 ia-medium"
          style={{
            display: "inline-block",
            marginBottom: "1rem",
            padding: "0.3rem 1rem",
            background: "var(--ia-sky, #a1c5d3)",
            borderRadius: "4px",
            fontSize: "1.2rem",
          }}
        >
          {item.category}
        </span>

        {/* Before / After image pair */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.8rem", marginBottom: "1.2rem" }}>
          <div>
            <div
              style={{
                background: `url(${item.before}) no-repeat 50% 50% / cover`,
                backgroundColor: "#1a2a3a",
                height: "16rem",
                borderRadius: "4px",
              }}
              role="img"
              aria-label={item.beforeAlt}
            />
            <p className="p3 ia-dark" style={{ marginTop: "0.5rem", textAlign: "center", fontWeight: 600 }}>Before</p>
            {/* [TODO: swap image — before photo] */}
          </div>
          <div>
            <div
              style={{
                background: `url(${item.after}) no-repeat 50% 50% / cover`,
                backgroundColor: "#1a2a3a",
                height: "16rem",
                borderRadius: "4px",
              }}
              role="img"
              aria-label={item.afterAlt}
            />
            <p className="p3 ia-dark" style={{ marginTop: "0.5rem", textAlign: "center", fontWeight: 600 }}>After</p>
            {/* [TODO: swap image — after photo] */}
          </div>
        </div>

        <h3 className="h6 ia-margin-1">{item.label}</h3>
      </div>
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────── */

export default function GalleryPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true, margin: "0px 0px -60px 0px" });
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "0px 0px -60px 0px" });
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
              <span className="post post-page current-item">Gallery</span>
            </div>
            <h1 className={`ia-white ia-margin-0 fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
              Before &amp; After Gallery
            </h1>
          </div>
        </div>

        <div className="hero-org__bottom flex-module">
          <div className="inner inner--slim-1172 cleared">
            <div className={`hero-org__left wow${heroVis}`}>
              <div className={`sub-heading fadeInUpS wow${heroVis}`}>Real Results</div>
              <div className={`content-entry fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                <p>
                  Real HVAC jobs done by Floral Park HVAC techs across Nassau County,
                  Western Suffolk, and Northern Queens.
                  {/* [TODO: Replace all placeholder images with actual job photos from client] */}
                </p>
              </div>
            </div>

            <div className="hero-org__right">
              <div className={`sub-heading fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                Quick Links
              </div>
              <ul className="quick-links" role="list">
                <li className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                  <a className="ia-link ia-link--arrow" href="tel:5168554328">
                    <i className="icon-link" />
                    <span>Call (516) 855-4328</span>
                  </a>
                </li>
                <li className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.2s" }}>
                  <a className="ia-link ia-link--arrow" href="/craft-catalog">
                    <i className="icon-link" />
                    <span>Our Services</span>
                  </a>
                </li>
                <li className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.3s" }}>
                  <a className="ia-link ia-link--arrow" href="/contact-us">
                    <i className="icon-link" />
                    <span>Schedule Service</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── Gallery Grid ── */}
      <div
        ref={gridRef}
        className={`user-grid-small fadeIn wow${gridInView ? " is-visible" : ""} flex-module`}
      >
        <div className="inner inner--slim-1172">
          <h2
            className={`h3 fadeInUpS wow${gridInView ? " is-visible" : ""}`}
            style={{ animationDelay: "0.1s" }}
          >
            Recent Jobs
          </h2>
          <div
            className={`content-entry fadeInUpS wow${gridInView ? " is-visible" : ""}`}
            style={{ animationDelay: "0.2s" }}
          >
            <p>
              From AC installs to full system replacements — we document our work
              and stand behind every job we complete.
            </p>
          </div>
          <div className="user-grid-list user-grid-list--small">
            {galleryItems.map((item, i) => (
              <GalleryCard key={item.id} item={item} delay={`${(i % 3) * 0.1}s`} />
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div
        ref={ctaRef}
        className={`front-donation ia-bg-sky flex-module wow fadeInUpS${ctaInView ? " is-visible" : ""}`}
      >
        <div className="inner inner--slim-1172">
          <div className={`sub-heading wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.1s" }}>
            Want Results Like These?
          </div>
          <h2 className={`h2 wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
            Call Us for a Free Estimate
          </h2>
          <div className={`front-donation__in wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
            <div className="content-entry">
              <p>
                Call <strong>(516) 855-4328</strong> — we&apos;ll give you an
                honest price before we start, and we won&apos;t leave until
                the job is done right.
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
