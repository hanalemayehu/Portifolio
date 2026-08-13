export const projects = [
  {
    id: 1,
    title: "Social Media App",
    slug: "social-media-app",
    category: "Full-Stack Web Development",
    description:
      "A modern social networking platform inspired by Instagram. Users can share photos, posts and stories, interact through likes/comments/shares, follow/unfollow others and customize their profiles.",
    image: "/projects/social-media.jpg",
    video: "/videos/social-media-demo.mp4",
    tech: ["Next.js", "PostgreSQL", "Tailwind CSS", "NextAuth.js"],
    github: "https://github.com/adri-yano/social-media-app.git",
    live: "#",
    featured: true,
    hasVideo: true,
    caseStudy: {
      problem:
        "Building a full-featured social media platform with real-time interactions, user authentication and a scalable database.",
      process:
        "Designed the database schema with PostgreSQL, implemented authentication with NextAuth.js, built the UI with Tailwind CSS and added features like posts, comments, likes and follows.",
      solution:
        "A fully functional social media app with a clean dark UI, real-time updates and a smooth user experience.",
      outcome:
        "Gained hands-on experience with full-stack Next.js development, database design and user authentication.",
    },
  },
  {
    id: 2,
    title: "Shoes Shop",
    slug: "shoes-shop",
    category: "E-Commerce Platform",
    description:
      "A responsive e-commerce platform for browsing and purchasing shoes online. Features categorized browsing for Men, Women, and Kids, cart management and multiple payment methods.",
    image: "/projects/shoes-shop.jpg",
    video: "/videos/shoes-shop-demo.mp4",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
    github: "#",
    live: "#",
    featured: true,
    hasVideo: true,
    caseStudy: {
      problem:
        "Creating a seamless online shopping experience with product categorization, cart management and secure payment integration.",
      process:
        "Built the frontend with React and Tailwind, developed REST APIs with Node.js/Express, designed the database schema in PostgreSQL and integrated a payment gateway.",
      solution:
        "A fully functional e-commerce platform with smooth browsing, cart management and checkout flow.",
      outcome:
        "Developed a complete e-commerce solution with a focus on UX and performance.",
    },
  },
  {
    id: 3,
    title: "Family Supermarket Network",
    slug: "family-supermarket-network",
    category: "Network Engineering",
    description:
      "Designed and configured a secure, scalable network for a supermarket. Includes 2 routers, distribution switch, 3 access switches, servers, Cloud-PT and CCTV cameras for reliable business operations.",
    image: "/projects/network/topology.png",
    tech: ["Cisco Packet Tracer", "VLAN", "OSPF", "DHCP", "NAT"],
    github: "#",
    live: "#",
    featured: true,
    hasImage: true,
    caseStudy: {
      problem:
        "Designing a secure and reliable network infrastructure for a supermarket with multiple departments, CCTV and cloud connectivity.",
      process:
        "Planned the network topology, configured VLANs for segmentation, implemented OSPF for routing, set up DHCP for dynamic IP allocation and configured NAT for internet access.",
      solution:
        "A fully functional network with secure communication, efficient connectivity and scalability for future growth.",
      outcome:
        "Demonstrated expertise in network design, configuration and troubleshooting using Cisco Packet Tracer.",
    },
  },
  {
    id: 4,
    title: "Age Calculator",
    slug: "age-calculator",
    category: "React Application",
    description:
      "A responsive web application for accurately calculating age. Supports both Gregorian and Ethiopian Calendars, providing a user-friendly interface for quick and accurate calculations.",
    image: "/projects/age-calculator.jpg",
    video: "/videos/age-calculator-demo.mp4",
    tech: ["React", "CSS3", "JavaScript"],
    github: "https://github.com/hanalemayehu/age-calculator.git",
    live: "#",
    featured: true,
    hasVideo: true,
    caseStudy: {
      problem:
        "Creating an accurate age calculator that supports two different calendar systems (Gregorian and Ethiopian).",
      process:
        "Built the UI with React, implemented date calculation logic with JavaScript and added support for both calendar systems.",
      solution:
        "A clean, responsive app that accurately calculates age in both Gregorian and Ethiopian calendars.",
      outcome:
        "Created a unique tool that stands out from typical age calculators.",
    },
  },
];