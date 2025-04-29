interface NavItem {
  label: string;
  link: string;
  submenu?: NavItem[];
}
export const navItems: NavItem[] = [
  {
    label: "Home",
    link: "#",
    submenu: [
      { label: "Home 01", link: "/" },
      { label: "Home 02", link: "/index-2" },
      { label: "Home 03", link: "/index-3" },
      { label: "Home 04", link: "/index-4" },
    ],
  },
  { label: "About Us", link: "/about" },
  {
    label: "Service",
    link: "#",
    submenu: [
      { label: "Service", link: "/services" },
      { label: "Service Left", link: "/services/left" },
      { label: "Service Right", link: "/services/right" },
      { label: "Service Single", link: "/services/single" },
    ],
  },
  {
    label: "Pages",
    link: "#",
    submenu: [
      { label: "Team", link: "/pages/team" },
      { label: "Testimonial", link: "/pages/testimonial" },
      { label: "Faq", link: "/pages/faq" },
      { label: "Pricing Plan", link: "/pages/pricing" },
      { label: "Contact Us", link: "/contact" },
      { label: "404", link: "/pages/404" },
    ],
  },
  {
    label: "Blog",
    link: "#",
    submenu: [
      { label: "Blog", link: "/blog" },
      { label: "Blog Left", link: "/blog/left" },
      { label: "Blog Right", link: "/blog/right" },
      { label: "Blog Single", link: "/blog/single" },
    ],
  },
  {
    label: "Project",
    link: "#",
    submenu: [
      { label: "Project", link: "/projects" },
      { label: "Project Left", link: "/projects/left" },
      { label: "Project Right", link: "/projects/right" },
      { label: "Project Single", link: "/projects/single" },
    ],
  },
];
