export type BlogPost = {
  slug: string;
  image: string;
  date: string;
  monthYear: string;
  category: string;
  categoryHref: string;
  title: string;
  excerpt: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "/blog/signs-your-ac-needs-repair/",
    image: "/images/hvac-technician-servicing-ac-unit-residential.jpg",
    date: "15",
    monthYear: "May '26",
    category: "AC Repair",
    categoryHref: "/blog/",
    title: "5 Warning Signs Your AC Needs Repair Before Summer Hits",
    excerpt:
      "Don't wait until the hottest day of the year to find out your AC is failing. Here are the five warning signs Nassau County homeowners should watch for before summer arrives.",
  },
  {
    slug: "/blog/furnace-repair-vs-replace/",
    image: "/images/hvac-technician-inspecting-outdoor-unit.jpg",
    date: "10",
    monthYear: "Apr '26",
    category: "Heating",
    categoryHref: "/blog/",
    title: "Furnace Repair vs. Replacement: What Long Island Homeowners Need to Know",
    excerpt:
      "When your furnace breaks down in the middle of a Long Island winter, you need answers fast. This guide helps you decide whether repair or replacement is the smarter investment.",
  },
  {
    slug: "/blog/hvac-maintenance-schedule/",
    image: "/images/hvac-technician-ac-unit-maintenance-repair.jpg",
    date: "22",
    monthYear: "Mar '26",
    category: "Maintenance",
    categoryHref: "/blog/",
    title: "The HVAC Maintenance Schedule Every Nassau County Homeowner Should Follow",
    excerpt:
      "Twice-a-year tune-ups keep your system running efficiently and catch small issues before they become expensive repairs. Here is the maintenance timeline we recommend for Long Island homes.",
  },
];
