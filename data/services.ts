export type Service = {
  number: string;
  title: string;
  image: string;
  href: string;
  width: number;
  height: number;
};

export type SidebarService = {
  label: string;
  href: string;
};

export const sidebarServices: SidebarService[] = [
  { label: "AC Repair",           href: "/ac-repair/" },
  { label: "Furnace Repair",      href: "/furnace-repair/" },
  { label: "Heat Pump Services",  href: "/heat-pump/" },
  { label: "AC Maintenance",      href: "/ac-maintenance/" },
  { label: "Heating Maintenance", href: "/heating-maintenance/" },
];

export const services: Service[] = [
  {
    number: "01",
    title: "AC Repair",
    image: "/images/hvac-technician-servicing-ac-unit-residential.jpg",
    href: "/ac-repair/",
    width: 535,
    height: 643,
  },
  {
    number: "02",
    title: "Furnace Repair",
    image: "/images/hvac-technician-inspecting-outdoor-unit.jpg",
    href: "/furnace-repair/",
    width: 535,
    height: 643,
  },
  {
    number: "03",
    title: "Heat Pump Services",
    image: "/images/ac-unit-installed-residential-backyard.jpg",
    href: "/heat-pump/",
    width: 535,
    height: 643,
  },
  {
    number: "04",
    title: "AC Maintenance",
    image: "/images/hvac-technician-ac-unit-maintenance-repair.jpg",
    href: "/ac-maintenance/",
    width: 535,
    height: 643,
  },
  {
    number: "05",
    title: "Heating Maintenance",
    image: "/images/technician-inspecting-ac-unit-residential.jpg",
    href: "/heating-maintenance/",
    width: 535,
    height: 643,
  },
];
