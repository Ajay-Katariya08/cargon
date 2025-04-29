
import ser1 from "@/assets/img/icon/ca-iner-ser1.1.svg";
import ser2 from "@/assets/img/icon/ca-iner-ser1.2.svg";
import ser3 from "@/assets/img/icon/ca-iner-ser1.3.svg";
import ser4 from "@/assets/img/icon/ca-iner-ser1.4.svg";
import ser5 from "@/assets/img/icon/ca-iner-ser1.5.svg";
import ser6 from "@/assets/img/icon/ca-iner-ser1.6.svg";
import ser7 from "@/assets/img/icon/ca-iner-ser1.7.svg";
import ser8 from "@/assets/img/icon/ca-iner-ser1.8.svg";
import ser9 from "@/assets/img/icon/ca-iner-ser1.9.svg";


interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}



interface Servicese {
  title: string;
  link: string;
}

interface FaqItem {
  id: string;
  headerId: string;
  question: string;
  answer: string;
  expanded: boolean;
}

export const servicesData: Service[] = [
  {
    id: 1,
    title: "Express Delivery Services",
    description:
      "We provide a comprehensive suite of logistics services designed to streamline your supply chain & meet your unique business needs.",
    image: ser1,
    link: "/services/single",
  },
  {
    id: 2,
    title: "Supply Chain Management",
    description:
      "We offer state-of-the-art warehousing solutions, ensuring your inventory is managed with precision and care.",
    image: ser2,
    link: "/services/single",
  },
  {
    id: 3,
    title: "Project Cargo Handling",
    description:
      "Our freight forwarding services ensure smooth and efficient transportation of goods across borders.",
    image: ser3,
    link: "/services/single",
  },
  {
    id: 4,
    title: "Warehousing Solutions",
    description:
      "Our domestic transport services guarantee timely, reliable deliveries within the country, while our international shipping solutions.",
    image: ser4,
    link: "/services/single",
  },
  {
    id: 5,
    title: "International Shipping",
    description:
      "Our supply chain management services optimize every step of your logistics process, and our e-commerce fulfillment services.",
    image: ser5,
    link: "/services/single",
  },
  {
    id: 6,
    title: "Cold Chain Logistics",
    description:
      "Whether it's handling project cargo with specialized requirements or maintaining the integrity of temperature-sensitive products.",
    image: ser6,
    link: "/services/single",
  },
  {
    id: 7,
    title: "Inventory Management",
    description:
      "Reliable Last-Mile Delivery and Freight Consolidation Services ensure your goods reach their final destination.",
    image: ser7,
    link: "/services/single",
  },
  {
    id: 8,
    title: "Cold Chain Logistics",
    description:
      " Trust our Professional Logistics Consulting to enhance your logistics strategy, & rely on our Efficient Reverse Logistics for seamless",

    image: ser8,
    link: "/services/single",
  },
  {
    id: 9,
    title: "Domestic Transport",
    description:
      "Specialized Project Cargo Handling and Cold Chain Logistics Services cater to specialized and temperature-sensitive goods.",
    image: ser9,
    link: "/services/single",
  },
];



export const services: Servicese[] = [
  {
    title: "Supply Chain Management",
    link: "#",
  },
  {
    title: "Domestic Freight Transport",
    link: "#",
  },
  {
    title: "Heavy Lift and Project Cargo",
    link: "#",
  },
  {
    title: "Inventory Optimization",
    link: "#",
  },
  {
    title: "E-commerce Fulfillment",
    link: "#",
  },
];

export const faqData: FaqItem[] = [
  {
    id: "collapseTwo",
    headerId: "headingTwo",
    question: "What is your policy on damaged or lost goods?",
    answer:
      "That's why we've compiled a list of frequently asked questions to help you get the <br /> answers you need quickly and easily. Whether you're curious about our range of <br /> services, need information on tracking your shipment, or want to understand.",
    expanded: false,
  },
  {
    id: "collapseOne",
    headerId: "headingOne",
    question: "What should I do if my shipment is delayed?",
    answer:
      "That's why we've compiled a list of frequently asked questions to help you get the <br /> answers you need quickly and easily. Whether you're curious about our range of <br /> services, need information on tracking your shipment, or want to understand.",
    expanded: true,
  },
  {
    id: "collapseThree",
    headerId: "headingThree",
    question: "Can you handle oversized or special cargo?",
    answer:
      "That's why we've compiled a list of frequently asked questions to help you get the <br /> answers you need quickly and easily. Whether you're curious about our range of <br /> services, need information on tracking your shipment, or want to understand.",
    expanded: false,
  },
  {
    id: "collapseFour",
    headerId: "headingFour",
    question: "What types of goods can you transport?",
    answer:
      "That's why we've compiled a list of frequently asked questions to help you get the <br /> answers you need quickly and easily. Whether you're curious about our range of <br /> services, need information on tracking your shipment, or want to understand.",
    expanded: false,
  },
];

export const checkListData = [
  "Service Breakdown",
  "Our Specialized Services",
  "Service Highlights",
  "Our Services in Detail",
  "What We Provide",
  "Extensive Service",
];
