const experiences = [
  {
    id: 1,
    company: "Rocket Code",
    position: "Full-Stack Developer",
    startDate: new Date("2024-06-09"),
    endDate: "",
    type: "Full Time",
    location: "Remote",
    description: `Contributed to the development of a contract and agreement management platform for an insurance company, taking an active role in both front-end and back-end development. Key contributions include:\n\n- <strong>Team Mentorship:</strong> Acted as a mentor for team members, providing guidance and support in both frontend and backend tasks to ensure high-quality deliverables.\n\n- <strong>Architectural Planning:</strong> Participated in the design and planning of the platform's architecture for both front-end and back-end systems.\n\n- <strong>Frontend Development:</strong> Built responsive and user-friendly interfaces using Angular 18, ensuring compatibility across desktop and mobile devices.\n\n- <strong>Backend Development:</strong> Developed robust endpoints and services using Java, Spring Boot, and MyBatis, optimizing data handling and system performance.\n\n- <strong>System Integration:</strong> Seamlessly integrated backend APIs with frontend components to deliver a cohesive and reliable user experience.`,
    shortDescription:
      "I contributed to building a contract and agreement management platform for an insurance company. My key achievements included mentoring team members, designing responsive interfaces with Angular 18, and developing robust backend services using Java and Spring Boot. I also ensured seamless integration between front-end and back-end components.",
    image: "../img/rocket-code-logo.jpeg",
    url: "https://www.linkedin.com/company/the-rocket-code",
    tagIds: [
      "angular",
      "typescript",
      "javascript",
      "java",
      "maven",
      "springboot",
      "mysql",
    ],
  },
  {
    id: 2,
    company: "La DAO",
    position: "Front-End Developer",
    startDate: new Date("2024-03-08"),
    endDate: new Date("2024-08-08"),
    type: "Freelance",
    location: "Remote",
    description:
      "Developed the user interface for a blockchain-based application supporting transactions with the XOC cryptocurrency. Key contributions include:\n\n- <strong>UI Development:</strong> Designed and implemented key views such as the landing page, dashboard, and transaction interfaces for payments, purchases, and loans using Next.js and React.\n\n- <strong>Wallet Integration:</strong> Integrated multiple cryptocurrency wallets, including MetaMask, enabling secure and seamless user transactions.\n\n- <strong>Blockchain Interaction:</strong> Utilized Scaffold and Wagmi libraries to connect the frontend with smart contracts provided by the backend team.\n\n- <strong>Collaborative Development:</strong> Worked closely with the backend team to integrate smart contract functionalities, ensuring a cohesive and reliable user experience.",
    shortDescription:
      "I played a pivotal role in developing the user interface for a blockchain-based application that supports XOC cryptocurrency transactions. My responsibilities included designing key views with Next.js and React, integrating wallets like MetaMask, and connecting the frontend to smart contracts via Wagmi and Scaffold.",
    image: "../img/la-dao-logo.jpeg",
    url: "https://www.linkedin.com/company/ladao/",
    tagIds: ["nextjs", "reactjs", "tailwindcss", "wagmi", "scaffold"],
  },
  {
    id: 3,
    company: "Seguros Gutierrez y Arredondo",
    position: "Django Developer",
    startDate: new Date("2024-02-07"),
    endDate: new Date("2024-06-07"),
    type: "Freelance",
    location: "Hibryd",
    description:
      "Contributed to an existing CRM project by developing a data retrieval module using Django and PostgreSQL. Key contributions include:\n\n- <strong>Form Development:</strong> Designed and implemented a user-friendly data entry form, following the MVC pattern to ensure clean and efficient integration with the backend.\n\n- <strong>Database Integration:</strong> Connected the form to the backend, ensuring seamless data storage in the PostgreSQL database with robust validation.\n\n- <strong>Email Automation:</strong> Configured automated email notifications to an administrator for every successful data submission.\n\n- <strong>Enhanced Efficiency:</strong> Improved lead acquisition processes by streamlining the form's interface and ensuring accurate data handling within the CRM.",
    shortDescription:
      "I enhanced their CRM system by creating a data entry module using Django and PostgreSQL. I also automated email notifications and optimized lead acquisition processes through a streamlined form interface.",
    image: "../img/GrupoGyA.png",
    url: "https://seragentedeseguros.mx/gya",
    tagIds: ["django", "postgresql", "aws", "bootstrap"],
  },
  {
    id: 4,
    company: "ICCBR 2024",
    position: "Full-Stack Developer",
    startDate: new Date("2023-01-23"),
    endDate: new Date("2024-02-23"),
    type: "Freelance",
    location: "Remote",
    description:
      "Refactored and modernized an international event platform, migrating from legacy PHP to Astro and TailwindCSS on the frontend, and Node.js with Prisma on the backend. Key contributions include:\n\n- <strong>System Migration:</strong> Transitioned the platform to modern technologies, enhancing maintainability, security, and performance while preserving the original design.\n\n- <strong>Architecture Overhaul:</strong> Redesigned the system architecture with best practices, implementing design patterns and robust security measures to mitigate SQL injection risks.\n\n- <strong>Payment Integration:</strong> Built and integrated a Stripe payment gateway, enabling seamless checkout and ticket purchase functionality.\n\n- <strong>Scalable Deployment:</strong> Established CI/CD pipelines with AWS for efficient and reliable deployment to the main server.",
    shortDescription:
      "I modernized an international event platform by migrating from legacy PHP to Astro and TailwindCSS on the frontend and Node.js with Prisma on the backend. I also integrated Stripe for payment processing and set up CI/CD pipelines in AWS to enable scalable deployments.",
    image: "../img/iccbr-2024-logo.png",
    url: "https://iccbr2024.org/",
    tagIds: ["astro", "tailwindcss", "javascript", "nodejs", "prisma", "aws"],
  },
  {
    id: 5,
    company: "Jumwork",
    position: "Bubble Developer",
    startDate: new Date("2021-06-18"),
    endDate: new Date("2023-01-05"),
    type: "Full Time",
    location: "Remote",
    description:
      "Led the development of an academic marketplace platform from the ground up, connecting students with teachers for online task support. Key contributions include:\n\n- <strong>End-to-End Platform Development:</strong> Designed and built a responsive and user-friendly platform accessible on both mobile and desktop.\n\n- <strong>Feature Integration:</strong> Implemented critical functionalities such as WhatsApp and email notifications, a private chat system with file-sharing capabilities, and a robust auction and rating system for teacher selection.\n\n- <strong>Payment Gateway Integration:</strong> Seamlessly integrated Stripe for secure payment processing, ensuring smooth transactions and a 30% reduction in payment errors.\n\n- <strong>Modular Development:</strong> Utilized Bubble plugins for scalable component modularization, optimizing feature integration.\n\n- <strong>Impactful Results:</strong> Enhanced platform usability and reliability, reducing payment errors by 30% and increasing user engagement through a streamlined user experience.",
    shortDescription:
      "I led the development of an academic marketplace platform from scratch. I implemented essential features such as private chat with file sharing, notifications via WhatsApp and email, and a robust auction system. Integrating Stripe significantly reduced payment errors, improving the overall user experience.",
    image: "../img/jumwork-logo.png",
    url: "https://www.jumwork.com",
    tagIds: ["bubble"],
  },
];

export default experiences;
