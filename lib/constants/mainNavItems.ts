export type NavDropdown = {
  title: string;
  titleHref: string;
  description: string;
  links: { label: string; href: string; external?: boolean }[];
  quickLinks?: { label: string; href: string; icon: string; external?: boolean }[];
};

export type MainNavItem = {
  label: string;
  href?: string | null;
  external?: boolean;
  dropdown?: NavDropdown | null;
};

export const mainNavItems: MainNavItem[] = [
  { label: "Home",     href: "/"              },
  { label: "Services", href: "/craft-catalog" },
  { label: "FAQs",     href: "/general-faqs"  },
  { label: "Contact",  href: "/contact-us"    },
];
