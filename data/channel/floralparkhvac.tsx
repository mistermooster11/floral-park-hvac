import type { ChannelPageData } from "@/components/custom/channel/types";

const floralparkhvac: ChannelPageData = {
  slug: "floralparkhvac",

  navItems: [
    { href: "#channel",           label: "About Us"          },
    { href: "#helpful_resources", label: "Quick Links"       },
    { href: "#crafts",            label: "Our Services"      },
    { href: "#testimonials",      label: "Testimonials"      },
    { href: "#flex_feature",      label: "Emergency Service" },
    { href: "#get_in_touch",      label: "Get in Touch"      },
  ],

  hero: {
    title:           "HVAC Specialists — Nassau County & Queens",
    breadcrumbLabel: "About Us",
    imageBg:
      "url(https://www.floralparkhvac.com/) no-repeat center center / cover",
    description: (
      <p>
        Floral Park HVAC is a licensed, insured, and bonded HVAC company
        serving Nassau County, Western Suffolk, and Northern Queens. We install,
        service, and repair air conditioning systems, heating units, boilers,
        and water heaters — with honest pricing and fast response, every time.
      </p>
    ),
  },

  learnMore: {
    title: "100% Honesty. Hard Workers.",
    content: (
      <>
        <p>
          Floral Park HVAC was built on a simple promise: treat every customer
          the way we&rsquo;d want our own family treated. That means showing up
          on time, explaining the problem in plain language, and giving you a
          fair price before any work begins. No mystery charges. No upselling
          on work you don&rsquo;t need.
        </p>

        <h5>Licensed, Insured &amp; Bonded</h5>
        <p>
          We hold a Nassau County Home Improvement Contractor license and
          maintain full insurance and bonding — so you&rsquo;re covered no
          matter what. Our BuildZoom score of 94 places us in the top 24% of
          licensed New York contractors. When a professional comes to your home,
          you deserve credentials you can verify.
        </p>

        <h5>Upfront Pricing — Always</h5>
        <p>
          We assess your system, explain exactly what needs to happen, and give
          you the price before a single tool is picked up. What we quote is what
          you pay. No surprise invoices, no hourly mysteries — just a straight
          answer and a plan.
        </p>

        <h5>All Major Brands Serviced</h5>
        <p>
          We work on American Standard, Comfortmaker, Burnham, and most other
          major HVAC brands. Whether you need a tune-up on an aging system or a
          full replacement with the latest equipment, our technicians have the
          training and parts to get it done right.
        </p>

        <h5>Serving Long Island &amp; Queens Since Day One</h5>
        <p>
          We&rsquo;ve been installing, maintaining, and repairing HVAC equipment
          across Nassau County, Western Suffolk, and Northern Queens for years.
          We know the housing stock, the local climate demands, and what it takes
          to keep Long Island homes comfortable through brutal summers and cold
          winters.
        </p>
      </>
    ),
  },

  resources: {
    title: "Quick Links",
    resources: [
      { title: "Call Us Now — (516) 855-4328",    href: "tel:5168554328",  icon: "icon-message" },
      { title: "Contact Us Online",               href: "/contact-us",     icon: "icon-mail"    },
      { title: "Our Services",                    href: "/craft-catalog",  icon: "icon-link"    },
      { title: "Service Areas",                   href: "/service-areas",  icon: "icon-info"    },
      { title: "Frequently Asked Questions",      href: "/general-faqs",   icon: "icon-link"    },
    ],
  },

  crafts: {
    description: (
      <p>
        From emergency AC repairs in the middle of summer to boiler replacements
        before the first cold snap — we handle every heating and cooling need
        across Nassau County, Western Suffolk, and Northern Queens. Call us and
        we&rsquo;ll get the right tech out fast.
      </p>
    ),
    craftLinks: [
      { label: "Central Air Conditioning",  href: "/craft-catalog/central-air-conditioning" },
      { label: "Mini Split Systems",        href: "/craft-catalog/mini-split-systems"       },
      { label: "Gas Heating",               href: "/craft-catalog/gas-heating"              },
      { label: "Oil Heating",               href: "/craft-catalog/oil-heating"              },
      { label: "Boilers",                   href: "/craft-catalog/boilers"                  },
      { label: "Water Heaters",             href: "/craft-catalog/water-heaters"            },
      { label: "Air Handlers & Duct Work",  href: "/craft-catalog/air-handlers-duct-work"  },
      { label: "System Replacements",       href: "/craft-catalog/system-replacements"      },
    ],
  },

  testimonials: {
    videos: [],
    quote: {
      text:
        "Floral Park HVAC is a company that was great from scheduling an appointment to completion of inspection and analysis of issues. I cannot say enough about their service and professionalism. They were very understanding and caring throughout the whole process.",
      name:     "Satisfied Customer",
      position: "Nassau County Homeowner",
    },
  },

  flexFeature: {
    imageSrc:    "https://www.floralparkhvac.com/",
    title:       "AC Down or Heat Not Working?",
    body: (
      <p>
        HVAC emergencies don&rsquo;t wait for business hours. If your system
        goes out, call us first — our technicians serve Nassau County, Western
        Suffolk, and Northern Queens and are ready to respond fast. Call{" "}
        <strong>(516) 855-4328</strong> to speak with a real tech.
      </p>
    ),
    buttonLabel: "Call Now",
    buttonHref:  "tel:5168554328",
  },

  getInTouch: {
    body: (
      <p>
        Ready to schedule service or need a free estimate? Call us at{" "}
        <strong>(516) 855-4328</strong> or use our online contact form and
        we&rsquo;ll get back to you fast.
      </p>
    ),
    buttonLabel: "Contact Us",
    buttonHref:  "/contact-us",
  },
};

export default floralparkhvac;
