"use client";

import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import SecondaryButton from "@/components/custom/buttons/SecondaryButton";

interface FaqItem {
  title: string;
  content: React.ReactNode;
  link?: { label: string; href: string };
}

const faqItems: FaqItem[] = [
  {
    title: "How quickly can you come out?",
    content: (
      <p>
        We schedule most service calls the same day or next day. Call us at{" "}
        <a href="tel:5168554328" className="ia-link">(516) 855-4328</a>{" "}
        and we&apos;ll give you an accurate appointment time right away. Business
        hours are Monday–Friday 7am–5pm and Saturday 7am–1pm.
      </p>
    ),
  },
  {
    title: "Do you give upfront pricing?",
    content: (
      <p>
        Always. We assess your system, explain exactly what&apos;s needed, and
        give you the full price before any work starts. No surprise charges, no
        hourly mysteries — what we quote is what you pay. That&apos;s how we&apos;ve
        operated since day one.
      </p>
    ),
  },
  {
    title: "Should I repair or replace my HVAC system?",
    content: (
      <p>
        A good rule of thumb: if your system is under 10 years old and the repair
        cost is less than half the price of a replacement, repair usually makes
        more financial sense. If it&apos;s older or the same issue keeps coming
        back, a new system often pays for itself in energy savings and reliability.
        We&apos;ll give you an honest breakdown — not a push toward the more
        expensive option.
      </p>
    ),
  },
  {
    title: "What brands do you service?",
    content: (
      <p>
        We service all major brands including American Standard, Comfortmaker,
        Burnham, Carrier, Trane, Lennox, Rheem, Goodman, and Bryant. We also
        install American Standard, Comfortmaker, and Burnham equipment on new
        installs and replacements. If you&apos;re unsure whether we work on your
        brand, just call — we almost certainly do.
      </p>
    ),
  },
  {
    title: "Are you licensed and insured?",
    content: (
      <p>
        Yes. Floral Park HVAC Corp is a licensed, insured, and bonded HVAC company.
        We hold a Nassau County Home Improvement Contractor license and maintain full
        insurance on every job. You can verify our credentials through the Nassau
        County license board.
      </p>
    ),
  },
  {
    title: "What areas do you serve?",
    content: (
      <>
        <p>We serve Nassau County, Western Suffolk, and Northern Queens, including:</p>
        <p>
          <strong>Nassau County:</strong> Floral Park, New Hyde Park, Garden City,
          Mineola, Elmont, Valley Stream, Franklin Square, Hempstead, West Hempstead,
          Rockville Centre, Oceanside, Merrick, Bellmore, Levittown, East Meadow,
          Hicksville, Syosset, and more.
        </p>
        <p>
          <strong>Western Suffolk:</strong> Brentwood, Bay Shore, Deer Park,
          North Babylon, West Babylon, Lindenhurst, Amityville, and surrounding areas.
        </p>
        <p>
          <strong>Northern Queens:</strong> Floral Park (Queens), Queens Village,
          Bellerose, Hollis, Jamaica, and surrounding neighborhoods.
        </p>
      </>
    ),
    link: { label: "View Service Areas & Contact Info", href: "/contact-us" },
  },
  {
    title: "How often should I get an HVAC tune-up?",
    content: (
      <p>
        Once a year per system is the standard recommendation — ideally in spring
        for your AC before the heat season, and in fall for your heating before
        the cold hits. An annual tune-up catches small issues before they become
        expensive emergency calls. We offer maintenance plans to keep you on a
        consistent schedule without having to remember to book.
      </p>
    ),
  },
  {
    title: "Do you offer financing or payment plans?",
    content: (
      <p>
        {/* [TODO: Confirm financing options with client and update this answer] */}
        For larger installations and system replacements, we work with customers
        to find solutions that fit their budget. Call us at{" "}
        <a href="tel:5168554328" className="ia-link">(516) 855-4328</a> to
        discuss options for your specific project.
      </p>
    ),
  },
];

export default function GeneralFaqsPage() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const heroRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);
  const donationRef = useRef<HTMLDivElement>(null);

  const heroInView = useInView(heroRef, { once: true, margin: "0px 0px -60px 0px" });
  const accordionInView = useInView(accordionRef, { once: true, margin: "0px 0px -60px 0px" });
  const donationInView = useInView(donationRef, { once: true, margin: "0px 0px -60px 0px" });

  const toggle = (idx: number) =>
    setOpenIndex((prev) => (prev === idx ? -1 : idx));

  return (
    <main>
      <div id="content">

        {/* ── Hero ── */}
        <div
          ref={heroRef}
          className={`hero-org flex-module wow fadeIn${heroInView ? " is-visible" : ""}`}
        >
          <div className="hero-org__top ia-bg-dark">
            <div className="inner inner--slim-1172">
              <div className={`breadcrumbs ia-sky wow fadeInUpS${heroInView ? " is-visible" : ""}`}>
                <span><a href="/" className="home ia-link">Home</a></span>{" "}
                <em>&gt;</em>{" "}
                <span className="post post-page current-item">FAQs</span>
              </div>
              <h1
                className={`ia-white ia-margin-0 wow fadeInUpS${heroInView ? " is-visible" : ""}`}
                style={{ animationDelay: "0.1s" }}
              >
                Frequently Asked Questions
              </h1>
            </div>
          </div>
        </div>

        {/* ── Accordion ── */}
        <div className="accordion-module flex-module">
          <div className="inner inner--slim-1172">
            <div
              ref={accordionRef}
              className={`accordion-wrap-flex wow fadeInUpS${accordionInView ? " is-visible" : ""}`}
              style={{ animationDelay: "0.3s" }}
            >
              {faqItems.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div className="accordion-item-flex" key={idx}>
                    <a
                      className={`accordion-title-flex h4${isOpen ? " current" : ""}`}
                      href="#"
                      onClick={(e) => { e.preventDefault(); toggle(idx); }}
                      aria-expanded={isOpen}
                    >
                      {item.title}
                      <i className="icon-arr-down" aria-hidden="true" />
                    </a>
                    <div className={`accordion-info-flex${isOpen ? " open" : ""}`}>
                      <div className="content-entry">{item.content}</div>
                      {item.link && (
                        <a href={item.link.href} className="ia-link ia-link--arrow">
                          <i className="icon-arrow-right" aria-hidden="true" />
                          <span>{item.link.label}</span>
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div
          ref={donationRef}
          className={`front-donation ia-bg-sky flex-module wow fadeInUpS${donationInView ? " is-visible" : ""}`}
        >
          <div className="inner inner--slim-1172">
            <div className={`sub-heading wow fadeInUpS${donationInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
              Still have questions?
            </div>
            <h2 className={`h2 wow fadeInUpS${donationInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
              We&apos;re Here to Help
            </h2>
            <div className={`front-donation__in wow fadeInUpS${donationInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
              <div className="content-entry">
                <p>
                  Call us at <strong>(516) 855-4328</strong> — our team picks up
                  fast and can answer any question, schedule a visit, or give you
                  an honest assessment over the phone.
                </p>
              </div>
              <div className="front-donation__btn-wrap">
                <div className="front-donation__btn">
                  <SecondaryButton
                    label="Call (516) 855-4328"
                    href="tel:5168554328"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
