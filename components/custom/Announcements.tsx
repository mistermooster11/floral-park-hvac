'use client';

import { useEffect, useRef } from 'react';
import SecondaryButton from './buttons/SecondaryButton';

export default function Announcements() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="front-announcements">
      <div className="inner inner--slim-1172">

        <div className="front-announcements__inner">
          <div className="sub-heading">How It Works</div>
          <h3 className="h3">Straight Answers, Upfront Pricing, Clean Work</h3>
        </div>

        <div className="relative z-20 front-announcements__content">

          {/* Image */}
          <div className="front-announcements__image" ref={imageRef}>
            <div>
              <span
                style={{
                  backgroundImage:
                    'url(https://www.floralparkhvac.com/) no-repeat center center / cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '50% 50%',
                  backgroundSize: 'cover',
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#101d2b',
                }}
              />
              {/* [TODO: Replace with Floral Park HVAC team or job site photo] */}
            </div>
          </div>

          {/* Text */}
          <div className="front-announcements__text">
            <div className="content-entry">
              <p>
                Every service call starts the same way: we show up on time,
                assess your system, and explain exactly what&apos;s wrong and
                what it will take to fix it — before any work begins. No
                surprise charges. No upselling on work you don&apos;t need.
              </p>
              <p>
                <strong>Step 1: Diagnose.</strong> Our tech inspects your
                system and identifies the issue. We explain it to you in plain
                language before we recommend anything.
              </p>
              <p>
                <strong>Step 2: Approve &amp; Schedule.</strong> You get the
                full price upfront. Once you&apos;re ready, we go to work.
                We carry common parts on the truck so most repairs are done
                same visit.
              </p>
              <p>
                <strong>Step 3: Test &amp; Confirm.</strong> We run the system
                through a full cycle, verify it&apos;s performing correctly,
                and don&apos;t leave until you&apos;re satisfied with the result.
              </p>
            </div>

            <SecondaryButton
              href="/contact-us"
              label="Schedule Service"
              wow
              style={{ marginTop: '2.5rem' }}
            />
          </div>

        </div>
      </div>
    </div>
  );
}
