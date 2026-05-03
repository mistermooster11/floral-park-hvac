"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

/* ── Blog Posts (placeholder — swap with real posts or CMS data) */

const posts = [
  {
    id: "ac-running-not-cooling",
    title: "Why Your AC Is Running But Not Cooling: 5 Common Causes",
    excerpt:
      "Your air conditioner is on, the fan is blowing — but the house isn't getting cool. Before you call for a repair, here's what our Nassau County techs check first.",
    category: "AC Tips",
    date: "May 2026",
    href: "/blog/ac-running-not-cooling",
  },
  {
    id: "repair-or-replace-hvac",
    title: "Should You Repair or Replace Your HVAC System? The Honest Answer",
    excerpt:
      "There's no one-size-fits-all answer, but there is a simple framework. Age, repair cost, and efficiency are the three factors that matter most.",
    category: "Homeowner Guide",
    date: "April 2026",
    href: "/blog/repair-or-replace-hvac",
  },
  {
    id: "long-island-summer-hvac-prep",
    title: "Getting Your AC Ready for Long Island Summer: What to Do in Spring",
    excerpt:
      "Nassau County summers hit hard. Here's the exact tune-up checklist our techs use before the hot season — and why booking in April beats waiting until June.",
    category: "Seasonal Tips",
    date: "March 2026",
    href: "/blog/long-island-summer-hvac-prep",
  },
  {
    id: "boiler-vs-furnace-long-island",
    title: "Boiler vs. Furnace: What's in Your Long Island Home and Why It Matters",
    excerpt:
      "Many Nassau County homes were built with boilers, while newer construction uses forced-air furnaces. Here's how to tell what you have and what service each system needs.",
    category: "Homeowner Guide",
    date: "February 2026",
    href: "/blog/boiler-vs-furnace-long-island",
  },
  {
    id: "how-often-air-filter",
    title: "How Often Should You Change Your Air Filter? (And Which Kind to Buy)",
    excerpt:
      "It sounds simple, but most homeowners are either changing their filter too often or not often enough. Our answer depends on your system and home.",
    category: "Maintenance Tips",
    date: "January 2026",
    href: "/blog/how-often-air-filter",
  },
  {
    id: "oil-heating-nassau-county",
    title: "Oil Heating in Nassau County: What Homeowners Need to Know in 2026",
    excerpt:
      "Oil heat is still common across Long Island. We break down maintenance expectations, common failure points, and when an oil system is worth keeping vs. converting.",
    category: "Heating",
    date: "December 2025",
    href: "/blog/oil-heating-nassau-county",
  },
];

/* ── Sub-components ─────────────────────────────────────────── */

function PostCard({ post, delay }: { post: typeof posts[number]; delay: string }) {
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
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.8rem" }}>
          <span
            className="p3 ia-medium"
            style={{
              padding: "0.3rem 1rem",
              background: "var(--ia-sky, #a1c5d3)",
              borderRadius: "4px",
              fontSize: "1.2rem",
            }}
          >
            {post.category}
          </span>
          <span className="p3 ia-dark" style={{ fontSize: "1.2rem", opacity: 0.6 }}>{post.date}</span>
        </div>
        <h3 className="h6 ia-margin-1">
          {/* [TODO: Replace with real content — these are placeholder article titles] */}
          {post.title}
        </h3>
        <p className="p3 ia-regular ia-dark" style={{ marginBottom: "1.2rem" }}>
          {post.excerpt}
        </p>
        <a className="ia-link ia-link--arrow" href={post.href}>
          <i className="icon-link" />
          <span>Read More</span>
        </a>
        {/* [TODO: Wire each href to real blog post pages when content is written] */}
      </div>
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────── */

export default function BlogPage() {
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
              <span className="post post-page current-item">Blog</span>
            </div>
            <h1 className={`ia-white ia-margin-0 fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
              HVAC Tips &amp; Homeowner Guides
            </h1>
          </div>
        </div>

        <div className="hero-org__bottom flex-module">
          <div className="inner inner--slim-1172 cleared">
            <div className={`hero-org__left wow${heroVis}`}>
              <div className={`sub-heading fadeInUpS wow${heroVis}`}>From the Floral Park HVAC Team</div>
              <div className={`content-entry fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                <p>
                  Practical advice from technicians who work on HVAC systems across
                  Nassau County, Western Suffolk, and Northern Queens every day.
                  No filler — just the honest information homeowners actually need.
                </p>
              </div>
            </div>

            <div className="hero-org__right">
              <div className={`sub-heading fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                Quick Links
              </div>
              <ul className="quick-links" role="list">
                <li className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                  <a className="ia-link ia-link--arrow" href="/craft-catalog">
                    <i className="icon-link" />
                    <span>Our Services</span>
                  </a>
                </li>
                <li className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.2s" }}>
                  <a className="ia-link ia-link--arrow" href="/general-faqs">
                    <i className="icon-link" />
                    <span>FAQs</span>
                  </a>
                </li>
                <li className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.3s" }}>
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

      {/* ── Post Grid ── */}
      <div
        ref={gridRef}
        className={`user-grid-small fadeIn wow${gridInView ? " is-visible" : ""} flex-module`}
      >
        <div className="inner inner--slim-1172">
          <h2
            className={`h3 fadeInUpS wow${gridInView ? " is-visible" : ""}`}
            style={{ animationDelay: "0.1s" }}
          >
            Latest Articles
          </h2>
          {/* [TODO: Replace placeholder posts with real content or connect a CMS] */}
          <div className="user-grid-list user-grid-list--small">
            {posts.map((post, i) => (
              <PostCard key={post.id} post={post} delay={`${(i % 3) * 0.1}s`} />
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
            Have an HVAC Issue Right Now?
          </div>
          <h2 className={`h2 wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
            We Pick Up Fast — Call Us
          </h2>
          <div className={`front-donation__in wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
            <div className="content-entry">
              <p>
                Call <strong>(516) 855-4328</strong> and we&apos;ll give you an
                honest assessment and schedule you fast. Mon–Fri 7am–5pm &amp;
                Sat 7am–1pm across Nassau County, Western Suffolk, and Northern Queens.
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
