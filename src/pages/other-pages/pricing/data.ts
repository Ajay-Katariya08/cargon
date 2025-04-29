interface PricingPlan {
  title: string;
  description: string;
  price: number;
  features: string[];
  active: boolean;
  frequency: "month" | "year";
}

export const pricingPlans: PricingPlan[] = [
  {
    title: "Starter Pack",
    description:
      "Our Freight Forwarding Services ensure your goods are transported efficiently.",
    price: 99.0,
    features: [
      "Single Plane Service",
      "Additional Plane Available",
      "Insurance Included",
      "1000km Maximum Distance",
    ],
    active: false,
    frequency: "month",
  },
  {
    title: "Pro Pack",
    description:
      "While our Comprehensive Warehousing Solutions provide secure storage.",
    price: 149.0,
    features: [
      "Dual Plane Service",
      "Additional Plane Available",
      "Insurance Included",
      "3000km Maximum Distance",
    ],
    active: true,
    frequency: "month",
  },
  {
    title: "Business Pack",
    description:
      "With Specialized Project Cargo Handling and Cold Chain Logistics Services.",
    price: 199.0,
    features: [
      "Single Plane Service",
      "Additional Plane Available",
      "Insurance Included",
      "1000km Maximum Distance",
    ],
    active: false,
    frequency: "month",
  },
];
