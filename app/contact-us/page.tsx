"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

/* ── Service Areas Data ─────────────────────────────────────── */

const serviceAreas = [
  {
    region: "Nassau County",
    description:
      "Nassau County is our home base. We service the full county — from older homes in Floral Park and New Hyde Park to new construction across the South Shore. We know the local housing stock and what Long Island HVAC systems deal with through hot summers and cold winters.",
    neighborhoods:
      "Floral Park • New Hyde Park • Garden City • Mineola • Elmont • Valley Stream • Franklin Square • Hempstead • West Hempstead • Rockville Centre • Oceanside • Baldwin • Freeport • Merrick • Bellmore • Wantagh • Seaford • Massapequa • Levittown • East Meadow • Hicksville • Syosset • Uniondale • Lynbrook & More",
  },
  {
    region: "Western Suffolk",
    description:
      "We extend our service into Western Suffolk County, covering the communities along the South Shore and the major towns along the Long Island Expressway corridor. Same honest pricing, same licensed techs, same fast scheduling.",
    neighborhoods:
      "Brentwood • Bay Shore • Deer Park • North Babylon • West Babylon • Lindenhurst • Amityville • Copiague • Wyandanch & Surrounding Areas",
  },
  {
    region: "Northern Queens",
    description:
      "Our service area extends into Northern Queens, including the communities that border Nassau County. Whether you're in a single-family home or a multi-family building, our technicians are familiar with the housing in this part of Queens.",
    neighborhoods:
      "Floral Park (Queens) • Queens Village • Bellerose • Hollis • Jamaica • Glen Oaks • Little Neck • Bayside • Douglaston & Surrounding Neighborhoods",
  },
];

/* ── Sub-components ─────────────────────────────────────────── */

function ServiceAreaCard({ area, delay }: { area: typeof serviceAreas[number]; delay: string }) {
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
        <h3 className="h6 ia-margin-1">{area.region}</h3>
        <div className="p3 ia-regular ia-dark" style={{ marginBottom: "0.75rem" }}>
          {area.description}
        </div>
        <div className="p3 ia-medium">{area.neighborhoods}</div>
      </div>
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────── */

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true, margin: "0px 0px -60px 0px" });
  const areasRef = useRef<HTMLDivElement>(null);
  const areasInView = useInView(areasRef, { once: true, margin: "0px 0px -60px 0px" });
  const formRef = useRef<HTMLDivElement>(null);
  const formInView = useInView(formRef, { once: true, margin: "0px 0px -60px 0px" });

  const vis = heroInView ? " is-visible" : "";

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">

      {/* ── Hero ── */}
      <div className={`hero-org flex-module fadeIn wow${vis}`}>
        <div className="hero-org__top ia-bg-dark">
          <div className="inner inner--slim-1172">
            <div className={`breadcrumbs ia-sky fadeInUpS wow${vis}`}>
              <span><a href="/">Home</a></span>
              <em>&gt;</em>
              <span className="post post-page current-item">Contact Us</span>
            </div>
            <h1 className={`ia-white ia-margin-0 fadeInUpS wow${vis}`} style={{ animationDelay: "0.1s" }}>
              Get in Touch
            </h1>
          </div>
        </div>

        <div ref={heroRef} className="hero-org__bottom flex-module">
          <div className="inner inner--slim-1172 cleared">

            {/* Left: overview */}
            <div className={`hero-org__left wow${vis}`}>
              <div className={`sub-heading fadeInUpS wow${vis}`}>Reach Us</div>
              <div className={`content-entry fadeInUpS wow${vis}`} style={{ animationDelay: "0.1s" }}>
                <p>
                  Call us at <strong>(516) 855-4328</strong> or fill out the form
                  below. We answer fast — most calls are scheduled within 24 hours.
                  Mon–Fri 7am–5pm &amp; Sat 7am–1pm.
                </p>
              </div>
            </div>

            {/* Right: quick links */}
            <div className="hero-org__right">
              <div className={`sub-heading fadeInUpS wow${vis}`} style={{ animationDelay: "0.1s" }}>
                Quick Links
              </div>
              <ul className="quick-links" role="list">
                <li className={`fadeInUpS wow${vis}`} style={{ animationDelay: "0.1s" }}>
                  <a className="ia-link ia-link--arrow" href="tel:5168554328">
                    <i className="icon-link" />
                    <span>Call (516) 855-4328</span>
                  </a>
                </li>
                <li className={`fadeInUpS wow${vis}`} style={{ animationDelay: "0.2s" }}>
                  <a className="ia-link ia-link--arrow" href="/general-faqs">
                    <i className="icon-link" />
                    <span>View FAQs</span>
                  </a>
                </li>
                <li className={`fadeInUpS wow${vis}`} style={{ animationDelay: "0.3s" }}>
                  <a className="ia-link ia-link--arrow" href="/craft-catalog">
                    <i className="icon-link" />
                    <span>Our Services</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── Service Areas ── */}
      <div
        ref={areasRef}
        className={`user-grid-small fadeIn wow${areasInView ? " is-visible" : ""} flex-module`}
      >
        <div className="inner inner--slim-1172">
          <h2
            className={`h3 fadeInUpS wow${areasInView ? " is-visible" : ""}`}
            style={{ animationDelay: "0.1s" }}
          >
            Our Service Areas
          </h2>
          <div
            className={`content-entry fadeInUpS wow${areasInView ? " is-visible" : ""}`}
            style={{ animationDelay: "0.2s" }}
          >
            <p>
              We proudly serve all of Nassau County, Western Suffolk, and
              Northern Queens. Not sure if we cover your neighborhood?
              Just call — we almost certainly do.
            </p>
          </div>
          <div className="user-grid-list user-grid-list--small">
            {serviceAreas.map((area, i) => (
              <ServiceAreaCard key={area.region} area={area} delay={`${i * 0.1}s`} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Map Embed ── */}
      <div className="flex-module" style={{ padding: "0 0 4rem" }}>
        <div className="inner inner--slim-1172">
          {/* [TODO: Replace with Google Maps embed centered on Floral Park, NY 11001 / 7 Florence St service area] */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48447.91!2d-73.7!3d40.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c268b7e2c7a3f1%3A0x1!2sFloral+Park%2C+NY+11001!5e0!3m2!1sen!2sus!4v1"
            width="100%"
            height="400"
            style={{ border: 0, display: "block", borderRadius: "4px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Floral Park HVAC Service Area Map"
          />
        </div>
      </div>

      {/* ── Contact Form ── */}
      <div ref={formRef} className="content-block-flex flex-module">
        <div className="inner inner--slim-1172">
          <div className="content-block-head wide">
            <h2
              id="getstarted"
              className={`h3 fadeInUpS wow${formInView ? " is-visible" : ""}`}
              style={{ animationDelay: "0.1s" }}
            >
              Schedule Service or Request an Estimate
            </h2>
          </div>
          <div className="content-block-in wide">
            <div className="content-block-text content-entry p2 full-width">
              <p>
                Fill out the form below and we&apos;ll follow up fast. Prefer to
                call? Reach us directly at <strong>(516) 855-4328</strong>,
                Mon–Fri 7am–5pm and Sat 7am–1pm.
              </p>
              {/* [TODO: Replace with Floral Park HVAC contact form embed (JotForm, HubSpot, Gravity Forms, etc.)] */}
              <div
                style={{
                  background: "#f5f7fa",
                  border: "2px dashed #ccd4de",
                  borderRadius: "8px",
                  padding: "4rem",
                  textAlign: "center",
                  color: "#666",
                  fontSize: "1.4rem",
                }}
              >
                [TODO: Embed contact/booking form here]
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
