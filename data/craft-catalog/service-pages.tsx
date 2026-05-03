import type { ReactNode } from "react";

export type ServiceNavItem = { href: string; label: string };

export type ServicePageData = {
  title: string;
  /** Fallback background color while TODO image is pending */
  bgColor: string;
  navItems: ServiceNavItem[];
  /** Short intro paragraph shown in CraftOverview left column */
  overviewContent: ReactNode;
  /** Quick links shown in CraftOverview right column */
  overviewQuickLinks: { label: string; href: string }[];
  /** Middle content sections rendered between overview and related services */
  sections: { id: string; heading: string; content: ReactNode }[];
  /** "Related Services" links at page bottom */
  relatedServices: { label: string; href: string }[];
};

export const servicePages: Record<string, ServicePageData> = {

  /* ─── CENTRAL AIR CONDITIONING ─────────────────────────────────────────── */
  "central-air-conditioning": {
    title: "Central Air Conditioning",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"        },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"     },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Central air conditioning is the most common cooling system in Nassau
          County homes — and one of the most common service calls we handle all
          summer. Whether your system stopped cooling, is running constantly, or
          simply needs its annual tune-up before the heat sets in, Floral Park
          HVAC has the technicians and the parts to handle it fast.
        </p>
        <p>
          We install, repair, and replace central AC systems for all home sizes
          across Nassau County, Western Suffolk, and Northern Queens. We work on
          all major brands and install American Standard and Comfortmaker
          equipment on new jobs.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (516) 855-4328", href: "tel:5168554328" },
      { label: "Contact Us Online",   href: "/contact-us"    },
      { label: "All Services",        href: "/craft-catalog" },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "Signs Your AC Needs Service",
        content: (
          <>
            <p>
              The most obvious sign is an AC that runs but doesn&rsquo;t cool —
              warm air coming from the vents when the system is on. Other warning
              signs include: short cycling (the unit turns on and off rapidly),
              unusual sounds like grinding or rattling, water pooling around the
              air handler, or a sudden spike in your electric bill during the
              cooling season.
            </p>
            <p>
              If the system is over 12–15 years old and needs a significant
              repair, we&rsquo;ll give you an honest comparison between repairing
              and replacing — and we won&rsquo;t push you toward the more
              expensive option if the repair makes more sense.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p>
              <strong>Step 1 — Diagnose.</strong> We assess the full system —
              condenser, air handler, refrigerant levels, electrical, and
              ductwork — to find the actual cause, not just the symptom.
            </p>
            <p>
              <strong>Step 2 — Quote Upfront.</strong> You get the full price
              before any work starts. What we quote is what you pay.
            </p>
            <p>
              <strong>Step 3 — Fix It Right.</strong> We carry common parts on
              the truck. Most repairs are completed same-day. Installs are
              scheduled fast and completed in one visit.
            </p>
            <p>
              <strong>Step 4 — Test and Confirm.</strong> We run the system
              through a full cooling cycle, confirm proper operation and
              airflow, and walk you through what was done before we leave.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Mini Split Systems",          href: "/craft-catalog/mini-split-systems"       },
      { label: "A/C Tune-Up & Maintenance",   href: "/craft-catalog/ac-maintenance"           },
      { label: "Air Handlers & Duct Work",    href: "/craft-catalog/air-handlers-duct-work"   },
      { label: "Full System Replacements",    href: "/craft-catalog/system-replacements"      },
    ],
  },

  /* ─── MINI SPLIT SYSTEMS ────────────────────────────────────────────────── */
  "mini-split-systems": {
    title: "Mini Split Systems",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"        },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"     },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Mini split systems — ductless heat pumps — are the ideal solution for
          rooms without ductwork, finished basements, garage conversions, and
          additions that your central system doesn&rsquo;t reach. They cool and
          heat efficiently, install without major construction, and give you
          independent zone control.
        </p>
        <p>
          Floral Park HVAC installs and services single-zone and multi-zone mini
          split systems across Nassau County and Northern Queens. We assess your
          space, recommend the right capacity, and handle the full installation
          in most cases within a single day.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (516) 855-4328", href: "tel:5168554328" },
      { label: "Get a Free Estimate", href: "/contact-us"    },
      { label: "All Services",        href: "/craft-catalog" },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "Is a Mini Split Right for Your Situation?",
        content: (
          <>
            <p>
              Mini splits make the most sense when: you have a finished basement
              or sunroom that your central system doesn&rsquo;t reach; you&rsquo;re
              adding square footage and don&rsquo;t want to extend the ductwork;
              you have an older home with radiator heat and no AC ductwork; or you
              want independent temperature control in a bedroom or home office.
            </p>
            <p>
              If you&rsquo;re comparing a mini split vs. a window unit: the mini
              split is quieter, more efficient, doesn&rsquo;t block a window, and
              heats as well as cools. The upfront cost is higher, but the operating
              cost and comfort level are meaningfully better.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p>
              <strong>Step 1 — Assess the Space.</strong> We look at the room
              size, insulation, existing electrical, and the best mounting location
              for both the indoor and outdoor units.
            </p>
            <p>
              <strong>Step 2 — Quote Upfront.</strong> Full price before anything
              starts — equipment, labor, and any electrical work included.
            </p>
            <p>
              <strong>Step 3 — Install Clean.</strong> We mount the indoor unit,
              run the line set and electrical, and set the outdoor condenser.
              Most single-zone installs are done in one day with minimal disruption
              to your home.
            </p>
            <p>
              <strong>Step 4 — Test All Modes.</strong> We confirm cooling,
              heating, and the full function of the remote or smart control before
              leaving. You leave knowing exactly how to operate it.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Central Air Conditioning",  href: "/craft-catalog/central-air-conditioning" },
      { label: "A/C Tune-Up & Maintenance", href: "/craft-catalog/ac-maintenance"           },
      { label: "Full System Replacements",  href: "/craft-catalog/system-replacements"      },
      { label: "Air Handlers & Duct Work",  href: "/craft-catalog/air-handlers-duct-work"   },
    ],
  },

  /* ─── AC MAINTENANCE ────────────────────────────────────────────────────── */
  "ac-maintenance": {
    title: "A/C Tune-Up & Maintenance Plans",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"        },
      { href: "#when_you_need_it", label: "Why It Matters"  },
      { href: "#our_process",      label: "What We Do"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          An annual AC tune-up before the cooling season is the single best
          thing you can do to avoid a no-cool call in the middle of summer.
          Our technicians inspect, clean, and calibrate your system so it runs
          efficiently through the hottest months on Long Island.
        </p>
        <p>
          We offer one-time seasonal tune-ups and ongoing maintenance plans for
          homeowners who want to stay on a consistent schedule without having to
          remember to call.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (516) 855-4328",       href: "tel:5168554328" },
      { label: "Schedule a Tune-Up",        href: "/contact-us"    },
      { label: "All Services",              href: "/craft-catalog" },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "Why Annual Maintenance Matters",
        content: (
          <>
            <p>
              Most AC failures in July and August trace back to deferred
              maintenance — a dirty coil that was never cleaned, a refrigerant
              level that was slowly dropping, or an electrical component showing
              early signs of failure. A spring tune-up catches all of these
              before they become emergency calls.
            </p>
            <p>
              Beyond preventing breakdowns: a properly maintained AC uses less
              electricity. A dirty or poorly calibrated system can run 10–15%
              less efficiently — which adds up fast across a Long Island summer.
              Maintenance pays for itself.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "What Our Tune-Up Includes",
        content: (
          <>
            <p>
              <strong>Condenser Inspection &amp; Cleaning.</strong> We clean the
              outdoor coil, check refrigerant pressure, inspect electrical
              connections and the contactor, and verify fan operation.
            </p>
            <p>
              <strong>Air Handler Check.</strong> We inspect the evaporator coil,
              the blower motor and belt (where applicable), the condensate drain
              line, and the filter. We clear the drain if there&rsquo;s buildup.
            </p>
            <p>
              <strong>Refrigerant Level.</strong> We check refrigerant pressures
              and note any signs of a slow leak. If the charge is low, we explain
              your options before adding refrigerant.
            </p>
            <p>
              <strong>Thermostat &amp; Controls.</strong> We verify the thermostat
              is reading and cycling accurately and confirm proper operation
              across all modes.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Central Air Conditioning", href: "/craft-catalog/central-air-conditioning" },
      { label: "Mini Split Systems",       href: "/craft-catalog/mini-split-systems"       },
      { label: "Gas Heating",              href: "/craft-catalog/gas-heating"              },
      { label: "Oil Heating",              href: "/craft-catalog/oil-heating"              },
    ],
  },

  /* ─── GAS HEATING ───────────────────────────────────────────────────────── */
  "gas-heating": {
    title: "Gas Heating",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"        },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"     },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Gas furnaces and gas heating systems are common throughout Nassau
          County and Long Island, and our technicians service them every day.
          Whether you&rsquo;re dealing with a no-heat call on a cold morning or
          you want an annual tune-up before winter hits, we respond fast and
          fix it right.
        </p>
        <p>
          We service all major brands and install American Standard and
          Comfortmaker gas heating equipment. Every job comes with upfront
          pricing — you approve the cost before any work starts.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (516) 855-4328", href: "tel:5168554328" },
      { label: "Contact Us Online",   href: "/contact-us"    },
      { label: "All Services",        href: "/craft-catalog" },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "Signs Your Gas Heating System Needs Service",
        content: (
          <>
            <p>
              The clearest sign is a furnace that runs but doesn&rsquo;t heat —
              cold air coming from the vents when the system is on. Other
              warning signs include: the furnace short cycling (turning on and
              off rapidly), a pilot light or ignition that won&rsquo;t stay lit,
              unusual smells from the unit, or a system that&rsquo;s taking
              noticeably longer to bring the house up to temperature.
            </p>
            <p>
              If your furnace is over 15 years old and requires a significant
              repair, we&rsquo;ll give you an honest breakdown of repair vs.
              replacement — including energy savings — so you can make the right
              call for your situation.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p>
              <strong>Step 1 — Diagnose.</strong> We inspect the heat exchanger,
              burner, ignition system, blower, flue, and controls. We find the
              actual cause before recommending any repair.
            </p>
            <p>
              <strong>Step 2 — Quote Upfront.</strong> Clear price before we
              touch anything. No surprises.
            </p>
            <p>
              <strong>Step 3 — Repair or Replace.</strong> Most common repairs
              are completed same-day. If a full replacement makes more financial
              sense, we&rsquo;ll explain why and give you a full install quote.
            </p>
            <p>
              <strong>Step 4 — Test and Confirm.</strong> We run the system
              through multiple heating cycles, verify flue gas readings, and
              confirm proper operation before leaving.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Oil Heating",              href: "/craft-catalog/oil-heating"           },
      { label: "Boilers",                  href: "/craft-catalog/boilers"               },
      { label: "A/C Tune-Up & Maintenance", href: "/craft-catalog/ac-maintenance"       },
      { label: "Full System Replacements", href: "/craft-catalog/system-replacements"   },
    ],
  },

  /* ─── OIL HEATING ───────────────────────────────────────────────────────── */
  "oil-heating": {
    title: "Oil Heating",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"        },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"     },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Oil heating is still the dominant fuel source in many Nassau County
          and Long Island homes — particularly in older housing stock that
          predates gas line expansion. These systems require technicians who
          actually understand them, and that&rsquo;s exactly what Floral Park
          HVAC brings.
        </p>
        <p>
          We service oil furnaces and oil boilers, diagnose burner failures,
          perform annual oil heating tune-ups, and handle full system conversions
          for homeowners looking to switch fuels.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (516) 855-4328", href: "tel:5168554328" },
      { label: "Contact Us Online",   href: "/contact-us"    },
      { label: "All Services",        href: "/craft-catalog" },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "Signs Your Oil System Needs Service",
        content: (
          <>
            <p>
              Oil systems give warning signs before they fail completely: soot
              or smoke around the furnace, a burner that takes multiple attempts
              to ignite, the smell of fuel oil in the house, or visible corrosion
              on the unit. A system that runs longer than usual to heat the house
              is also a sign of reduced efficiency — often traced to a dirty
              nozzle, filter, or heat exchanger.
            </p>
            <p>
              Annual tune-ups are especially important for oil systems because
              the combustion process leaves deposits that build up over time.
              A properly tuned oil system runs cleaner and more efficiently —
              and is far less likely to fail on a cold night.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p>
              <strong>Step 1 — Diagnose.</strong> We inspect the burner, nozzle,
              electrodes, heat exchanger, flue, and controls to find the problem
              and assess the overall system condition.
            </p>
            <p>
              <strong>Step 2 — Quote Upfront.</strong> Full price before work
              starts — no hidden charges.
            </p>
            <p>
              <strong>Step 3 — Service or Replace.</strong> We carry common
              burner parts on the truck. Annual tune-up jobs include nozzle
              replacement, filter change, and combustion analysis. If the system
              warrants replacement, we&rsquo;ll walk you through your options.
            </p>
            <p>
              <strong>Step 4 — Combustion Test.</strong> Before leaving, we run
              a combustion efficiency analysis to confirm the system is burning
              cleanly and safely.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Gas Heating",              href: "/craft-catalog/gas-heating"           },
      { label: "Boilers",                  href: "/craft-catalog/boilers"               },
      { label: "Full System Replacements", href: "/craft-catalog/system-replacements"   },
      { label: "A/C Tune-Up & Maintenance", href: "/craft-catalog/ac-maintenance"       },
    ],
  },

  /* ─── BOILERS ───────────────────────────────────────────────────────────── */
  "boilers": {
    title: "Boilers",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"        },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"     },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Hot water boilers are common throughout Long Island — particularly in
          older Nassau County homes built before forced-air systems became the
          standard. Boiler heat is consistent and comfortable, but these systems
          require technicians who understand the specific demands of hydronic
          heating.
        </p>
        <p>
          Floral Park HVAC installs, replaces, and services boilers throughout
          Nassau County and Western Suffolk. We install Burnham boilers on new
          jobs and service all major brands for repairs and tune-ups.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (516) 855-4328", href: "tel:5168554328" },
      { label: "Contact Us Online",   href: "/contact-us"    },
      { label: "All Services",        href: "/craft-catalog" },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "Signs Your Boiler Needs Attention",
        content: (
          <>
            <p>
              Common warning signs include: radiators that take a long time to
              heat up or don&rsquo;t heat evenly across zones, banging or
              kettling noises from the boiler, water pressure that keeps dropping
              (requiring frequent refills), or visible leaks around the unit.
              A pilot light or ignition that won&rsquo;t hold is also a sign
              of a failing component.
            </p>
            <p>
              An aging boiler that&rsquo;s losing efficiency — evidenced by
              higher fuel bills with the same usage pattern — is often a
              candidate for replacement. A new high-efficiency boiler can
              meaningfully reduce your annual heating costs.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p>
              <strong>Step 1 — Diagnose.</strong> We assess the burner,
              heat exchanger, circulator pump, pressure relief valve, expansion
              tank, and zone valves. We trace the symptom to its actual cause.
            </p>
            <p>
              <strong>Step 2 — Quote Upfront.</strong> You see the full price
              before any work begins.
            </p>
            <p>
              <strong>Step 3 — Repair or Replace.</strong> Common repairs are
              completed fast. If replacement makes more sense — in terms of age,
              repair cost, and efficiency — we&rsquo;ll give you a clear
              comparison. We install Burnham boilers and stand behind the work.
            </p>
            <p>
              <strong>Step 4 — Confirm and Test Zones.</strong> We test each
              zone, verify proper pressure and flow, and confirm clean combustion
              before we leave.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Oil Heating",              href: "/craft-catalog/oil-heating"           },
      { label: "Gas Heating",              href: "/craft-catalog/gas-heating"           },
      { label: "Full System Replacements", href: "/craft-catalog/system-replacements"   },
      { label: "Water Heaters",            href: "/craft-catalog/water-heaters"         },
    ],
  },

  /* ─── WATER HEATERS ─────────────────────────────────────────────────────── */
  "water-heaters": {
    title: "Water Heaters",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"        },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"     },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          A failing water heater rarely gives much warning — by the time you
          notice, you&rsquo;re already dealing with no hot water or water on
          the basement floor. Floral Park HVAC installs and replaces water
          heaters fast, with same-day or next-day scheduling available across
          Nassau County and Northern Queens.
        </p>
        <p>
          We install gas, oil, and electric water heaters and advise on the
          right size and fuel type for your home. No upsell on tankless if a
          standard tank is the right call for your situation.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (516) 855-4328", href: "tel:5168554328" },
      { label: "Contact Us Online",   href: "/contact-us"    },
      { label: "All Services",        href: "/craft-catalog" },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "Signs Your Water Heater Needs Service or Replacement",
        content: (
          <>
            <p>
              No hot water or insufficient hot water is the obvious sign, but
              earlier warnings include: rust-colored water from the hot side,
              a rumbling or popping sound from the tank (mineral buildup on the
              heating element), water pooling around the base of the unit, or
              a relief valve that keeps activating.
            </p>
            <p>
              Most standard tank water heaters last 8–12 years. If yours is
              approaching that age and showing symptoms, replacement is usually
              more cost-effective than repair — especially given how fast and
              relatively straightforward a water heater swap is.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p>
              <strong>Step 1 — Assess.</strong> We check the unit, the fuel
              supply, and the venting to confirm whether repair or replacement
              is the right call. We&rsquo;ll never push a replacement if the
              repair makes sense.
            </p>
            <p>
              <strong>Step 2 — Quote Upfront.</strong> Full price including
              equipment, labor, and disposal of the old unit before we start.
            </p>
            <p>
              <strong>Step 3 — Install.</strong> We disconnect and remove the
              old unit, set the new one, make gas or electrical connections,
              and handle proper venting. Most installations are completed in
              2–3 hours.
            </p>
            <p>
              <strong>Step 4 — Test and Walk You Through It.</strong> We verify
              proper ignition, confirm there are no leaks, and show you the
              controls and the shutoff before we leave.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Boilers",                  href: "/craft-catalog/boilers"               },
      { label: "Gas Heating",              href: "/craft-catalog/gas-heating"           },
      { label: "Full System Replacements", href: "/craft-catalog/system-replacements"   },
      { label: "Air Handlers & Duct Work", href: "/craft-catalog/air-handlers-duct-work" },
    ],
  },

  /* ─── AIR HANDLERS & DUCT WORK ──────────────────────────────────────────── */
  "air-handlers-duct-work": {
    title: "Air Handlers & Duct Work",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"        },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"     },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          The air handler and ductwork are the distribution system for your
          HVAC — and problems here affect every room in the house. A failing
          air handler blower, leaking duct connections, or undersized duct
          runs can make even a new, high-efficiency condenser perform poorly.
        </p>
        <p>
          Floral Park HVAC installs and services air handlers and handles
          ductwork repairs, modifications, and new duct runs for homes across
          Nassau County and Western Suffolk.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (516) 855-4328", href: "tel:5168554328" },
      { label: "Contact Us Online",   href: "/contact-us"    },
      { label: "All Services",        href: "/craft-catalog" },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "Signs You Have an Air Handler or Duct Problem",
        content: (
          <>
            <p>
              Rooms that never cool or heat evenly — hot on one end of the
              house, comfortable on the other — often point to duct issues
              rather than the HVAC unit itself. Other signs include: weak
              airflow from one or more registers, visible duct disconnections
              in the attic or basement, excessive dust throughout the house
              shortly after cleaning, or a blower that runs but produces
              noticeably less air than it used to.
            </p>
            <p>
              If you&rsquo;re replacing a condenser or air conditioning system,
              it&rsquo;s worth having the ductwork inspected at the same time.
              A new system connected to leaky or undersized ducts will never
              perform to its rated efficiency.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p>
              <strong>Step 1 — Inspect.</strong> We assess the air handler,
              blower motor, coil, and as much of the accessible ductwork as
              possible. We look for leaks, disconnections, improper sizing,
              and airflow restrictions.
            </p>
            <p>
              <strong>Step 2 — Quote Upfront.</strong> You get the full scope
              and price before work starts.
            </p>
            <p>
              <strong>Step 3 — Fix It.</strong> Air handler repairs are
              typically same-day. Duct repairs and modifications are completed
              efficiently — we don&rsquo;t leave a job with open ductwork
              or unsealed connections.
            </p>
            <p>
              <strong>Step 4 — Verify Airflow.</strong> We confirm proper
              airflow at the registers and verify the system is cycling
              correctly before signing off.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Central Air Conditioning",  href: "/craft-catalog/central-air-conditioning" },
      { label: "Full System Replacements",  href: "/craft-catalog/system-replacements"      },
      { label: "A/C Tune-Up & Maintenance", href: "/craft-catalog/ac-maintenance"           },
      { label: "Mini Split Systems",        href: "/craft-catalog/mini-split-systems"       },
    ],
  },

  /* ─── FULL SYSTEM REPLACEMENTS ──────────────────────────────────────────── */
  "system-replacements": {
    title: "Full System Replacements",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"        },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"     },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          When a repair no longer makes financial sense — or when a system has
          simply reached the end of its useful life — a full replacement is the
          right move. Floral Park HVAC handles complete HVAC system replacements
          for homes across Nassau County, Western Suffolk, and Northern Queens,
          including matched cooling and heating systems, new air handlers, and
          ductwork upgrades when needed.
        </p>
        <p>
          We install American Standard and Comfortmaker cooling systems and
          Burnham boilers, and we stand behind every installation with full
          manufacturer warranty support and our own workmanship guarantee.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (516) 855-4328",  href: "tel:5168554328" },
      { label: "Get a Free Estimate",  href: "/contact-us"    },
      { label: "All Services",         href: "/craft-catalog" },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Does Replacement Make More Sense Than Repair?",
        content: (
          <>
            <p>
              A useful rule of thumb: if your system is over 12–15 years old
              and the repair cost exceeds 50% of what a new system would cost,
              replacement usually wins. At that age, the efficiency gap between
              your existing system and a modern one is also significant — newer
              equipment runs meaningfully cheaper to operate, and the energy
              savings often offset a substantial portion of the replacement cost
              over 3–5 years.
            </p>
            <p>
              Recurring breakdowns — the same system failing multiple times in
              a season — are also a strong signal. We&rsquo;ll give you the
              honest comparison and let you decide. We won&rsquo;t push a
              replacement if the repair makes more sense for your situation.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p>
              <strong>Step 1 — Assess the Full System.</strong> Before
              recommending equipment, we evaluate your existing ductwork,
              electrical, and any other system components that will carry over.
              A correct equipment selection depends on the full picture, not
              just the condenser tonnage.
            </p>
            <p>
              <strong>Step 2 — Quote Upfront — Full Scope.</strong> You get
              the complete price — equipment, labor, permits where required,
              and any ductwork or electrical work included — before we start.
              No surprises on install day.
            </p>
            <p>
              <strong>Step 3 — Install in One Day (Typically).</strong>
              Most full system swaps are completed in a single day. We remove
              and properly dispose of the old equipment, install and commission
              the new system, and leave the work area clean.
            </p>
            <p>
              <strong>Step 4 — Commission and Walk You Through It.</strong>
              We run the system through full heating and cooling cycles,
              verify all settings, and walk you through the new equipment
              and controls before we leave. You know exactly what you have
              and how to use it.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Central Air Conditioning",  href: "/craft-catalog/central-air-conditioning" },
      { label: "Gas Heating",               href: "/craft-catalog/gas-heating"              },
      { label: "Boilers",                   href: "/craft-catalog/boilers"                  },
      { label: "Air Handlers & Duct Work",  href: "/craft-catalog/air-handlers-duct-work"   },
    ],
  },

};
