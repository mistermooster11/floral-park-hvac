import type { ReactNode } from "react";

export type NavItem = { href: string; label: string };

export type ProgramItem = {
  title: string;
  content: ReactNode;
  learnMoreHref: string;
};

export type PartnerItem = {
  href: string;
  imgSrc: string;
  alt: string;
};

export type ProgramsPageData = {
  navItems: NavItem[];
  hero: {
    bgImage: string;
    title: string;
    description: ReactNode;
    breadcrumbParentLabel: string;
    breadcrumbParentHref: string;
  };
  overview: {
    content: ReactNode;
    quickLinks: { label: string; href: string; icon: string }[];
  };
  programs: ProgramItem[];
  partners: PartnerItem[];
};

export const programsData: ProgramsPageData = {
  navItems: [
    { href: "#flex-module-3", label: "Service Details" },
    { href: "#flex-module-4", label: "Service Areas"   },
  ],

  hero: {
    bgImage: "https://www.floralparkhvac.com/",
    title: "Our Services",
    description: (
      <p>
        Floral Park HVAC handles every heating and cooling need across Nassau
        County, Western Suffolk, and Northern Queens — from emergency repairs to
        full system replacements.
      </p>
    ),
    breadcrumbParentLabel: "Services",
    breadcrumbParentHref: "/craft-catalog/",
  },

  overview: {
    content: (
      <>
        <p>
          We assess your system, explain exactly what&rsquo;s needed, and give
          you the price before any work begins. Our technicians carry the parts
          and equipment to handle most repairs in a single visit — no repeat trips,
          no waiting around.
        </p>
        <p>
          We service all major brands including American Standard, Comfortmaker,
          Burnham, and more. Residential service, Mon–Fri 7am–5pm &amp; Sat
          7am–1pm. Call{" "}
          <a href="tel:5168554328">(516) 855-4328</a> for fast scheduling.
        </p>
      </>
    ),
    quickLinks: [
      { label: "View All Services", href: "/craft-catalog/", icon: "icon-books" },
    ],
  },

  programs: [
    {
      title: "Central Air Conditioning",
      content: (
        <p>
          Whether your AC is running but not cooling, making unusual noise, or
          has stopped entirely, we diagnose the problem at the source and fix it
          right. We install Carrier condensers and other top-brand central AC
          units, and we service all major makes already in your home. Most repairs
          are completed same visit with parts on the truck.
        </p>
      ),
      learnMoreHref: "/craft-catalog/central-air-conditioning",
    },
    {
      title: "Mini Split Systems",
      content: (
        <p>
          Mini splits are ideal for rooms without ductwork, additions, garages,
          and finished basements. We install and service ductless mini split
          systems from leading manufacturers, sizing each unit correctly for the
          space so you get maximum efficiency and even temperature control without
          over- or under-sizing.
        </p>
      ),
      learnMoreHref: "/craft-catalog/mini-split-systems",
    },
    {
      title: "A/C Tune-Up & Maintenance Plans",
      content: (
        <p>
          A seasonal tune-up catches small problems before they become expensive
          emergencies mid-summer. We check refrigerant levels, clean coils,
          inspect electrical connections, and test the full system on the
          manufacturer&rsquo;s checklist. Book early in the season for more
          scheduling flexibility — slots fill fast once the heat hits.
        </p>
      ),
      learnMoreHref: "/craft-catalog/ac-maintenance",
    },
    {
      title: "Gas Heating",
      content: (
        <p>
          We install, service, and repair gas furnaces and gas heating systems
          throughout Nassau County and Queens. If your heat failed overnight or
          your furnace is short-cycling, our techs diagnose quickly and carry
          common parts. We also offer annual gas heating tune-ups to keep the
          system running efficiently all winter.
        </p>
      ),
      learnMoreHref: "/craft-catalog/gas-heating",
    },
    {
      title: "Oil Heating",
      content: (
        <p>
          Oil heating is still common across Nassau County and Long Island, and
          we know these systems well. We service oil furnaces and boilers,
          diagnose burner failures, and offer annual oil heating maintenance
          plans to prevent the breakdowns that always seem to happen on the
          coldest nights of the year.
        </p>
      ),
      learnMoreHref: "/craft-catalog/oil-heating",
    },
    {
      title: "Boilers",
      content: (
        <p>
          We install, replace, and service boilers for residential homes across
          Floral Park and the surrounding communities. From a no-heat call in
          January to a planned upgrade from an aging unit, our Burnham-authorized
          techs handle the full scope — including removal of the old system and
          full installation of the new one.
        </p>
      ),
      learnMoreHref: "/craft-catalog/boilers",
    },
    {
      title: "Water Heaters",
      content: (
        <p>
          No hot water is an immediate problem. We install and replace water
          heaters fast, with upfront pricing so you know the full cost before we
          start. We work with standard tank units and can advise on tankless
          options if you&rsquo;re looking to save space or reduce energy costs
          long-term.
        </p>
      ),
      learnMoreHref: "/craft-catalog/water-heaters",
    },
    {
      title: "Air Handlers & Duct Work",
      content: (
        <p>
          The air handler and ductwork are what move conditioned air through your
          home — and when they&rsquo;re undersized, leaking, or improperly
          installed, no amount of equipment upgrades will fix your comfort
          problems. We install air handlers alongside new AC and heating systems,
          and we repair or replace duct runs that are losing efficiency.
        </p>
      ),
      learnMoreHref: "/craft-catalog/air-handlers-duct-work",
    },
    {
      title: "Full System Replacements",
      content: (
        <p>
          When a repair no longer makes financial sense, we handle full system
          swaps — out with the old, in with properly sized, modern equipment.
          We provide customized proposals matched to your home&rsquo;s square
          footage, layout, and budget. No oversizing to inflate the ticket, no
          undersizing to cut corners. The right equipment the first time.
        </p>
      ),
      learnMoreHref: "/craft-catalog/system-replacements",
    },
  ],

  partners: [],
};
