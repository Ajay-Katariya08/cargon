interface FAQItem {
    id: string;
    question: string;
    answer: string;
  }
  
  interface FAQSection {
    id: string;
    title: string;
    subtitle: string;
    faqs: FAQItem[];
  }
  
export const faqData: FAQSection[] = [
    {
      id: "section1",
      title: "Frequently Asked Questions And Answers",
      subtitle: "FAQ'S",
      faqs: [
        {
          id: "faq1",
          question: "How do you ensure the safety of my shipments?",
          answer:
            "Our FAQs also address our warehousing options, shipment tracking systems, & specialized services for different industries. Additionally, you'll find information on how we manage temperature-sensitive.",
        },
        {
          id: "faq2",
          question: "What transport and logistics services do you offer?",
          answer:
            "Our FAQs also address our warehousing options, shipment tracking systems, & specialized services for different industries. Additionally, you'll find information on how we manage temperature-sensitive.",
        },
        {
          id: "faq3",
          question: "How can I get a quote for your services?",
          answer:
            "Our FAQs also address our warehousing options, shipment tracking systems, & specialized services for different industries. Additionally, you'll find information on how we manage temperature-sensitive.",
        },
        {
          id: "faq4",
          question: "What steps do you take to ensure timely deliveries?",
          answer:
            "Our FAQs also address our warehousing options, shipment tracking systems, & specialized services for different industries. Additionally, you'll find information on how we manage temperature-sensitive.",
        },
      ],
    },
    {
      id: "section2",
      title: "Answers to Your Questions",
      subtitle: "FAQ'S",
      faqs: [
        {
          id: "faq5",
          question: "Do you provide same-day or express delivery services?",
          answer:
            "Learn more about our pricing, compliance with international regulations, & the advanced technology we use to enhance efficiency & transparency in your logistics operations. If you have further questions.",
        },
        {
          id: "faq6",
          question: "What are your warehousing and storage options?",
          answer:
            "Learn more about our pricing, compliance with international regulations, & the advanced technology we use to enhance efficiency & transparency in your logistics operations. If you have further questions.",
        },
        {
          id: "faq7",
          question: "How do you handle temperature-sensitive shipments?",
          answer:
            "Learn more about our pricing, compliance with international regulations, & the advanced technology we use to enhance efficiency & transparency in your logistics operations. If you have further questions.",
        },
        {
          id: "faq8",
          question: "How do you manage large or complex shipments?",
          answer:
            "Learn more about our pricing, compliance with international regulations, & the advanced technology we use to enhance efficiency & transparency in your logistics operations. If you have further questions.",
        },
        {
          id: "faq9",
          question: "What technology do you use for inventory?",
          answer:
            "Learn more about our pricing, compliance with international regulations, & the advanced technology we use to enhance efficiency & transparency in your logistics operations. If you have further questions.",
        },
        {
          id: "faq10",
          question: "What industries do you specialize in?",
          answer:
            "Learn more about our pricing, compliance with international regulations, & the advanced technology we use to enhance efficiency & transparency in your logistics operations. If you have further questions.",
        },
        {
          id: "faq11",
          question: "How can I track my shipment?",
          answer:
            "Learn more about our pricing, compliance with international regulations, & the advanced technology we use to enhance efficiency & transparency in your logistics operations. If you have further questions.",
        },
      ],
    },
  ];