import blog1 from "@/assets/img/blog/ca-blog-1.1.png";
import blog2 from "@/assets/img/blog/ca-blog-1.2.png";
import blog3 from "@/assets/img/blog/ca-blog-1.3.png";
import blog4 from "@/assets/img/blog/ca-blog-1.4.png";
import blog5 from "@/assets/img/blog/ca-blog-1.5.png";
import blog6 from "@/assets/img/blog/ca-blog-1.6.png";
import blog7 from "@/assets/img/blog/ca-blog-1.7.png";
import blog8 from "@/assets/img/blog/ca-blog-1.8.png";
import blog9 from "@/assets/img/blog/ca-blog-1.9.png";


interface BlogPost {
  link: string | undefined;
  date: string;
  author: string;
  category: string;
  title: string;
  description: string;
  imageUrl:string
}

export const blogPosts: BlogPost[] = [
  {
      imageUrl: blog2,
      date: "March 21, 2024",
      author: "Henry Nicolls",
      category: "Transport & Logistics",
      title: "Optimizing Last-Mile Delivery: Strategies for Success",
      description: "Delve into the challenges of last-mile delivery and explore strategies to overcome them.",
      link: undefined
  },
  {
      imageUrl: blog3,
      date: "March 20, 2024",
      author: "Henry Nicolls",
      category: "Transport & Logistics",
      title: "Handling Project Cargo: Expert Tips and Strategies",
      description: "Get expert tips on managing project cargo logistics. From planning and coordination.",
      link: undefined
  },
  {
      imageUrl: blog1,
      date: "March 18, 2024",
      author: "Henry Nicolls",
      category: "Transport & Logistics",
      title: "The Importance of Reliable Freight Forwarding Services",
      description: "Learn practical strategies for optimizing your supply chain operations, improve delivery.",
      link: undefined
  },
  {
      imageUrl: blog4,
      date: "March 18, 2024",
      author: "Henry Nicolls",
      category: "Transport & Logistics",
      title: "The Importance of Reliable Freight Forwarding Services",
      description: "Learn practical strategies for optimizing your supply chain operations, improve delivery.",
      link: undefined
  },
  {
      imageUrl: blog5,
      date: "March 18, 2024",
      author: "Henry Nicolls",
      category: "Transport & Logistics",
      title: "The Importance of Reliable Freight Forwarding Services",
      description: "Learn practical strategies for optimizing your supply chain operations, improve delivery.",
      link: undefined
  },
  {
      imageUrl: blog6,
      date: "March 18, 2024",
      author: "Henry Nicolls",
      category: "Transport & Logistics",
      title: "The Importance of Reliable Freight Forwarding Services",
      description: "Learn practical strategies for optimizing your supply chain operations, improve delivery.",
      link: undefined
  },
  {
      imageUrl: blog7,
      date: "March 18, 2024",
      author: "Henry Nicolls",
      category: "Transport & Logistics",
      title: "The Importance of Reliable Freight Forwarding Services",
      description: "Learn practical strategies for optimizing your supply chain operations, improve delivery.",
      link: undefined
  },
  {
      imageUrl: blog8,
      date: "March 18, 2024",
      author: "Henry Nicolls",
      category: "Transport & Logistics",
      title: "The Importance of Reliable Freight Forwarding Services",
      description: "Learn practical strategies for optimizing your supply chain operations, improve delivery.",
      link: undefined
  },
  {
      imageUrl: blog9,
      date: "March 18, 2024",
      author: "Henry Nicolls",
      category: "Transport & Logistics",
      title: "The Importance of Reliable Freight Forwarding Services",
      description: "Learn practical strategies for optimizing your supply chain operations, improve delivery.",
      link: undefined
  },
];