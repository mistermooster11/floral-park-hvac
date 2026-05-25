"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const dividerRef = useRef<HTMLHRElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let tl: any;

    (async () => {
      const { gsap } = await import("gsap");
      if (cancelled) return;

      gsap.set([titleRef.current, dividerRef.current, descRef.current, buttonsRef.current], {
        opacity: 0,
      });

      tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(titleRef.current,
          { y: -40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, clearProps: "all" }
        )
        .fromTo(dividerRef.current,
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.5, transformOrigin: "left center", clearProps: "all" },
          "-=0.4"
        )
        .fromTo(descRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, clearProps: "all" },
          "-=0.3"
        )
        .fromTo(buttonsRef.current,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, clearProps: "all" },
          "-=0.4"
        );
    })();

    return () => {
      cancelled = true;
      tl?.kill();
    };
  }, []);

  return (
    <section className="hero">
      {/* Video background */}
      <div className="hero__video-bg">
        <iframe
          src="https://customer-ip9lnkk65px0t3ak.cloudflarestream.com/3253ca00a56fb3e02ebc7f6e5abd755f/iframe?autoplay=true&muted=true&loop=true&controls=false&preload=true"
          className="hero__video-iframe"
          allow="autoplay; fullscreen"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="hero__content">
        <h1 className="hero__title" ref={titleRef}>
          Nassau County &amp; Queens
          <br />
          HVAC — Honest Pricing,
          <br />
          Fast Service
        </h1>

        <hr className="hero__divider" ref={dividerRef} />

        <p className="hero__description" ref={descRef}>
          Licensed, insured &amp; bonded HVAC contractor serving Nassau County,
          <br />
          Western Suffolk &amp; Northern Queens — upfront pricing on every job,
          <br />
          same-day service available.
        </p>

        <div className="hero__buttons" ref={buttonsRef}>
          <a href="tel:+15168554328" className="hero__btn-primary">
            Call (516) 855-4328
          </a>
          <a href="/contact-us" className="hero__btn-secondary">
            Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
}
