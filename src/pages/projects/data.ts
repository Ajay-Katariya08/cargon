

import portfolio_sm_1_4 from "@/assets/img/portfolio/portfolio-sm-1.4.png";
import portfolio_sm_1_5 from "@/assets/img/portfolio/portfolio-sm-1.5.png";
import Portfolio_1_6 from "@/assets/img/portfolio/portfolio-sm-1.6.png";
import { ProjectData } from "./type";

export const projectData: ProjectData = {
  title: "Customs Clearance Excellence",
  breadcrumb: {
    home: "Home",
    projects: "Project",
    current: "Customs Clearance Excellence",
  },
  description: {
    main: "We provide a full spectrum of logistics & transport services designed to meet the specific needs of businesses in various industries...",
    consolidation:
      "Our Warehousing Solutions offer secure, climate-controlled storage with advanced inventory tracking...",
    domesticFreight:
      "Our expertise in Customs Clearance navigates the complexities of global trade regulations...",
  },
  details: {
    category: "Branding & Profile",
    location: "73 Bridge St Brooklyn, USA.",
    client: "Transport & Logistics",
    date: "20/06/2024",
  },
  services: [
    "Secure Warehousing",
    "Customs Brokerage",
    "E-commerce Fulfillment",
    "Heavy Lift and Project Cargo",
    "Rapid Express Delivery",
    "Inventory Optimization",
  ],
  moreProjects: [
    {
      image: portfolio_sm_1_4,
      title: "Experts in Logistics Management",
      category: "Transportation 2024",
    },
    {
      image: portfolio_sm_1_5,
      title: "Experts in Logistics Management",
      category: "Transportation 2024",
    },
    {
      image: Portfolio_1_6,
      title: "Experts in Logistics Management",
      category: "Transportation 2024",
    },
  ],
};
