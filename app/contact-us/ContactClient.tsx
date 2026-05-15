"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { useWowAnimation } from "@/hooks/useWowAnimation";
import CraftHero from "@/components/custom/craft-catalog/CraftHero";

/* ── Styled submit button ── */

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

export default function ContactClient() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: "0px 0px -60px 0px" });
  const vis = sectionInView ? " is-visible" : "";

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">

      {/* ── Hero ── */}
      {/* [TODO: Replace bgImage with a real Floral Park HVAC photo] */}
      <CraftHero
        title="Contact Us"
        bgImage="/images/IMG_9688-1024x682.jpg"
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      {/* ── Contact Form + Map ── */}
      <div ref={sectionRef} className={`content-block-flex flex-module fadeIn wow${vis}`}>
        <div className="inner inner--slim-1172">

          <h2
            className={`h3 fadeInUpS wow${vis}`}
            style={{ animationDelay: "0.1s", marginBottom: "0.5rem" }}
          >
            Schedule Service or Ask a Question
          </h2>
          <p
            className={`p2 fadeInUpS wow${vis}`}
            style={{ animationDelay: "0.15s", marginBottom: "2.5rem" }}
          >
            Fill out the form below or call us directly at{" "}
            <strong>(516) 855-4328</strong>. We follow up fast — usually
            within the hour. Mon–Fri 7am–5pm &amp; Sat 7am–1pm.
          </p>

          {/*
            Two-column: form left, map right. Stacks on mobile.
            align-items: stretch makes both columns match height on desktop
            so the form expands to fill the same height as the map column.
          */}
          <div className="contact-layout-grid">

            {/* ── Form (expands to full column height) ── */}
            <div
              className={`fadeInUpS wow${vis}`}
              style={{ animationDelay: "0.2s", display: "flex", flexDirection: "column" }}
            >
              {/* [TODO: Replace this form with Floral Park HVAC's preferred form solution (JotForm, HubSpot, etc.)] */}
              <form
                action="#"
                method="POST"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                  flex: 1,
                }}
              >
                <div className="form-row-2col">
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
                </div>

                <div className="form-row-2col">
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
                      <option>Emergency Service</option>
                      <option>Not Sure / Other</option>
                    </select>
                  </div>
                </div>

                {/* Message — flex: 1 makes this grow to fill remaining column height */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", flex: 1 }}>
                  <label htmlFor="message" className="p3 ia-medium">Message</label>
                  <textarea
                    id="message" name="message"
                    placeholder="Describe the issue — what's happening, how old is the system, and where are you located?"
                    style={{
                      padding: "0.75rem 1rem",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      fontSize: "1.4rem",
                      resize: "vertical",
                      flex: 1,
                      minHeight: "120px",
                    }}
                  />
                </div>

                <div>
                  <SubmitBtn />
                </div>
              </form>
            </div>

            {/* ── Map + Info ── */}
            <div className={`fadeInUpS wow${vis}`} style={{ animationDelay: "0.3s" }}>
              {/* [TODO: Replace with an embed centered on 7 Florence St, Floral Park, NY 11001] */}
              <iframe
                title="Floral Park HVAC — Nassau County, Western Suffolk, Northern Queens"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48447.91!2d-73.7!3d40.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c268b7e2c7a3f1%3A0x1!2sFloral+Park%2C+NY+11001!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="360"
                style={{ border: 0, display: "block", borderRadius: "6px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="p3 ia-medium" style={{ marginTop: "1.25rem", lineHeight: "1.7" }}>
                <strong>Floral Park HVAC Corp</strong><br />
                7 Florence St, Floral Park, NY 11001<br />
                <a href="tel:5168554328" style={{ color: "inherit" }}>(516) 855-4328</a><br />
                Mon–Fri: 7am–5pm &bull; Sat: 7am–1pm<br />
                Nassau County HIC License — Licensed &amp; Insured
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        .contact-layout-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: stretch;
        }
        .form-row-2col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }
        @media (max-width: 860px) {
          .contact-layout-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 480px) {
          .form-row-2col {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

    </main>
  );
}
