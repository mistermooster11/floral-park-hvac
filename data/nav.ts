export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about-us",
    children: [
      { label: "About Us", href: "/about-us" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "Services",
    href: "/services-page",
    children: [
      { label: "AC Repair", href: "/ac-repair" },
      { label: "Furnace Repair", href: "/furnace-repair" },
      { label: "Heat Pump Services", href: "/heat-pump" },
      { label: "AC Maintenance", href: "/ac-maintenance" },
      { label: "Heating Maintenance", href: "/heating-maintenance" },
    ],
  },
  { label: "Blog", href: "/blog" },
  {
    label: "Contact",
    href: "/contact-us",
    children: [
      { label: "Get In Touch", href: "/contact-us" },
    ],
  },
];

/* ── Footer links ─────────────────────────────── */
export type FooterLink = { label: string; href: string };

export const quickLinks: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Services", href: "/services-page/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Contact Us", href: "/contact-us/" },
];

export const servicesLinks: FooterLink[] = [
  { label: "AC Repair", href: "/ac-repair/" },
  { label: "Furnace Repair", href: "/furnace-repair/" },
  { label: "Heat Pump Services", href: "/heat-pump/" },
  { label: "AC Maintenance", href: "/ac-maintenance/" },
  { label: "Heating Maintenance", href: "/heating-maintenance/" },
];
