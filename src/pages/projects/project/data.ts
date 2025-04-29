import port1 from "@/assets/img/portfolio/portfolio-sm-1.1.png";
import port2 from "@/assets/img/portfolio/portfolio-big-1.1.png";
import port3 from "@/assets/img/portfolio/portfolio-big-1.3.png";
import port4 from "@/assets/img/portfolio/portfolio-sm-1.2.png";
import port5 from "@/assets/img/portfolio/portfolio-sm-1.3.png";
import port6 from "@/assets/img/portfolio/portfolio-big-1.3.png";
import port7 from "@/assets/img/portfolio/portfolio-sm-1.4.png";
import port8 from "@/assets/img/portfolio/portfolio-sm-1.5.png";
import port9 from "@/assets/img/portfolio/portfolio-sm-1.6.png";

interface PortfolioItem {
  image: string;
  alt: string;
  category: string;
  title: string;
  isBig?: boolean;
}

export const portfolioData: PortfolioItem[] = [
  {
    image: port1,
    alt: "Portfolio 1",
    category: "Transportation 2024",
    title: "Experts in Logistics Management",
  },
  {
    image: port2,
    alt: "Portfolio 2",
    category: "Transportation 2024",
    title: "Experts in Logistics Management",
    isBig: true,
  },
  {
    image: port3,
    alt: "Portfolio 3",
    category: "Transportation 2024",
    title: "Experts in Logistics Management",
    isBig: true,
  },
  {
    image: port4,
    alt: "Portfolio 4",
    category: "Transportation 2024",
    title: "Experts in Logistics Management",
  },
  {
    image: port5,
    alt: "Portfolio 5",
    category: "Transportation 2024",
    title: "Experts in Logistics Management",
  },
  {
    image: port6,
    alt: "Portfolio 6",
    category: "Transportation 2024",
    title: "Experts in Logistics Management",
    isBig: true,
  },
  {
    image: port7,
    alt: "Portfolio 7",
    category: "Transportation 2024",
    title: "Experts in Logistics Management",
  },
  {
    image: port8,
    alt: "Portfolio 8",
    category: "Transportation 2024",
    title: "Experts in Logistics Management",
  },
  {
    image: port9,
    alt: "Portfolio 9",
    category: "Transportation 2024",
    title: "Experts in Logistics Management",
  },
];
