"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cancelled = false;
    let ctx: any;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.from(".contact-section__info", {
          x: -50, opacity: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true },
        });
        gsap.from(".contact-section__form-wrap", {
          x: 50, opacity: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true },
        });
      });
    })();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="contact-section" ref={sectionRef}>
      <div className="contact-section__container">

        {/* ── LEFT: Contact Info ──────────────────── */}
        <div className="contact-section__info">
          <div className="contact-section__eyebrow">Contacts</div>
          <h2 className="contact-section__heading">
            We are always ready <br />to help you and answer your questions
          </h2>

          {/* Inner 2-col: left = Address + Social | right = Phone + Hours */}
          <div className="contact-section__details">

            {/* Left sub-col */}
            <div className="contact-section__details-col">
              <h5 className="contact-detail__label">Address</h5>
              <p className="contact-detail__value">
                7 Florence St,&nbsp;Floral Park,&nbsp;NY&nbsp;11001
              </p>

              <h5 className="contact-detail__label">Follow us</h5>
              <div className="contact-section__social">
                <Link href="https://www.facebook.com/floralparkhvac/" className="contact-social-icon" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <svg aria-hidden="true" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor">
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right sub-col */}
            <div className="contact-section__details-col">
              <h5 className="contact-detail__label">Phone</h5>
              <p className="contact-detail__value">
                <Link href="tel:+15168554328">(516) 855-4328</Link>
              </p>

              <h5 className="contact-detail__label">Hours</h5>
              <p className="contact-detail__value">
                Mon–Fri: 7am–5pm<br />Sat: 7am–1pm
              </p>
            </div>

          </div>
        </div>

        {/* ── RIGHT: Form ─────────────────────────── */}
        <div className="contact-section__form-wrap">
          <h3 className="contact-section__form-heading">Get a Free Estimate</h3>
          <form className="contact-section__form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              className="contact-section__input"
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            />
            <div className="contact-section__row">
              <input
                type="tel"
                placeholder="Phone"
                className="contact-section__input"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="contact-section__input"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="contact-section__row">
              <input
                type="text"
                placeholder="City"
                className="contact-section__input"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
              />
              <input
                type="text"
                placeholder="Subject"
                className="contact-section__input"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
              />
            </div>
            <textarea
              placeholder="Describe your HVAC issue or service needed"
              rows={5}
              className="contact-section__textarea"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <button type="submit" className="contact-section__submit">
              Get a Free Estimate
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
