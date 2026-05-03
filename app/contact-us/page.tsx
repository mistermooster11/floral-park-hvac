"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { useWowAnimation } from "@/hooks/useWowAnimation";
import CraftHero from "@/components/custom/craft-catalog/CraftHero";

/* ── Service Area Data ───────────────────────────────────────── */

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
      "Our service area extends into Northern Queens, including the communities that border Nassau County. Whether you&rsquo;re in a single-family home or a multi-family building, our technicians are familiar with the housing in this part of Queens.",
    neighborhoods:
      "Floral Park (Queens) • Queens Village • Bellerose • Hollis • Jamaica • Glen Oaks • Little Neck • Bayside • Douglaston & Surrounding Neighborhoods",
  },
];

/* ── Stacked area section ────────────────────────────────────── */

function AreaSection({
  area,
  index,
  vis,
}: {
  area: (typeof serviceAreas)[number];
  index: number;
  vis: string;
}) {
  return (
    <div
      className={`fadeInUpS wow${vis}`}
      style={{
        animationDelay: `${index * 0.1}s`,
        paddingBottom: "2.5rem",
        borderBottom: "1px solid #e8e8e8",
      }}
    >
      <h3 className="h4 ia-margin-1">{area.region}</h3>
      <p className="p2 ia-dark" style={{ marginBottom: "0.75rem" }}>
        {area.description}
      </p>
      <p className="p3 ia-medium">{area.neighborhoods}</p>
    </div>
  );
}

/* ── Styled submit button ────────────────────────────────────── */

function SubmitBtn() {
  const btnRef = useWowAnimation<HTMLButtonElement>("contact-submit-btn", true);
  return (
    <button
      ref={btnRef}
      type="submit"
      className="ia-btn wow"
      style={{ cursor: "pointer", fontFamily: "inherit" }}
    >
      <em className="ia-b ia-b-1" />
      <em className="ia-b ia-b-2" />
      <em className="ia-b ia-b-3" />
      <em className="ia-b ia-b-4" />
      <span>Send Message</span>
    </button>
  );
}

/* ── Page ────────────────────────────────────────────────────── */

export default function ContactPage() {
  const formRef  = useRef<HTMLDivElement>(null);
  const areasRef = useRef<HTMLDivElement>(null);
  const mapRef   = useRef<HTMLDivElement>(null);

  const formInView  = useInView(formRef,  { once: true, margin: "0px 0px -60px 0px" });
  const areasInView = useInView(areasRef, { once: true, margin: "0px 0px -60px 0px" });
  const mapInView   = useInView(mapRef,   { once: true, margin: "0px 0px -60px 0px" });

  const formVis  = formInView  ? " is-visible" : "";
  const areasVis = areasInView ? " is-visible" : "";
  const mapVis   = mapInView   ? " is-visible" : "";

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">

      {/* ── Hero — image masthead matching service detail pages ── */}
      {/* [TODO: Replace bgImage with a real Floral Park HVAC photo] */}
      <CraftHero
        title="Contact Us"
        bgImage="/images/IMG_9688-1024x682.jpg"
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      {/* ── Contact Form ─────────────────────────────────────────── */}
      <div ref={formRef} className={`content-block-flex flex-module fadeIn wow${formVis}`}>
        <div className="inner inner--slim-1172">
          <div className="content-block-head wide">
            <h2
              id="getstarted"
              className={`h3 fadeInUpS wow${formVis}`}
              style={{ animationDelay: "0.1s" }}
            >
              Schedule Service or Ask a Question
            </h2>
            <p
              className={`p2 fadeInUpS wow${formVis}`}
              style={{ animationDelay: "0.15s" }}
            >
              Fill out the form below or call us directly at{" "}
              <strong>(516) 855-4328</strong>. We follow up fast — Mon–Fri
              7am–5pm &amp; Sat 7am–1pm.
            </p>
          </div>

          <div className="content-block-in wide">
            <div className="content-block-text content-entry p2 full-width">
              {/* [TODO: Replace this form with Floral Park HVAC's preferred form solution (JotForm, HubSpot, etc.)] */}
              <form
                action="#"
                method="POST"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.5rem",
                  maxWidth: "680px",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label htmlFor="name" className="p3 ia-medium">Name *</label>
                  <input
                    id="name" name="name" type="text" required
                    placeholder="Your full name"
                    style={{ padding: "0.75rem 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1.4rem" }}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label htmlFor="phone" className="p3 ia-medium">Phone *</label>
                  <input
                    id="phone" name="phone" type="tel" required
                    placeholder="(555) 000-0000"
                    style={{ padding: "0.75rem 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1.4rem" }}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label htmlFor="email" className="p3 ia-medium">Email</label>
                  <input
                    id="email" name="email" type="email"
                    placeholder="you@example.com"
                    style={{ padding: "0.75rem 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1.4rem" }}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label htmlFor="service" className="p3 ia-medium">Service Needed</label>
                  <select
                    id="service" name="service"
                    style={{ padding: "0.75rem 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1.4rem", background: "white" }}
                  >
                    <option value="">Select a service…</option>
                    <option>Central Air Conditioning</option>
                    <option>Mini Split System</option>
                    <option>A/C Tune-Up &amp; Maintenance</option>
                    <option>Gas Heating</option>
                    <option>Oil Heating</option>
                    <option>Boiler Service / Replacement</option>
                    <option>Water Heater</option>
                    <option>Air Handler &amp; Duct Work</option>
                    <option>Full System Replacement</option>
                    <option>Not Sure / Other</option>
                  </select>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", gridColumn: "1 / -1" }}>
                  <label htmlFor="message" className="p3 ia-medium">Message</label>
                  <textarea
                    id="message" name="message" rows={4}
                    placeholder="Describe the issue — what's happening, how old is the system, and where are you located?"
                    style={{ padding: "0.75rem 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1.4rem", resize: "vertical" }}
                  />
                </div>

                <div style={{ gridColumn: "1 / -1" }}>
                  <SubmitBtn />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ── Service Areas (stacked) ───────────────────────────────── */}
      <div ref={areasRef} className={`content-block-flex flex-module fadeIn wow${areasVis}`}>
        <div className="inner inner--slim-1172">
          <h2
            className={`h3 fadeInUpS wow${areasVis}`}
            style={{ animationDelay: "0.1s" }}
          >
            Service Areas
          </h2>
          <div
            className={`content-entry fadeInUpS wow${areasVis}`}
            style={{ animationDelay: "0.2s", marginBottom: "3rem" }}
          >
            <p>
              We cover all of Nassau County, Western Suffolk, and Northern Queens.
              If you&apos;re not sure whether we serve your neighborhood, call us
              at <strong>(516) 855-4328</strong> — we almost certainly do.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {serviceAreas.map((area, i) => (
              <AreaSection key={area.region} area={area} index={i} vis={areasVis} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Google Map ───────────────────────────────────────────── */}
      <div ref={mapRef} className={`flex-module fadeIn wow${mapVis}`}>
        <div className="inner inner--slim-1172">
          <h2
            className={`h3 ia-margin-2 fadeInUpS wow${mapVis}`}
            style={{ animationDelay: "0.1s" }}
          >
            Our Service Area
          </h2>
          <div className={`fadeInUpS wow${mapVis}`} style={{ animationDelay: "0.2s" }}>
            {/* [TODO: Replace with an embed centered on 7 Florence St, Floral Park, NY 11001] */}
            <iframe
              title="Floral Park HVAC Service Area — Nassau County, Western Suffolk, Northern Queens"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48447.91!2d-73.7!3d40.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c268b7e2c7a3f1%3A0x1!2sFloral+Park%2C+NY+11001!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="480"
              style={{ border: 0, display: "block", borderRadius: "4px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

    </main>
  );
}
