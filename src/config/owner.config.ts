export const basicDetails = {
  initials: "RR",
  firstName: "Rajesh",
  lastName: "Ranjan",
  totalExperience: { years: 7, months: 10 },
  designation: "Full Stack Developer",
  company: "Business Today Technology",
  organization: "India Today Group",
  description:
    "Experienced Full Stack Developer with expertise in React, Next.js, Node.js, TypeScript, and cloud-based application development.",
  location: { city: "Noida", state: "Uttar Pradesh", country: "India" },
  phone: "+91-9999340771",
  images: {
    profileImage: "/assets/personal-img/profile_photo_3d_cartoon.png",
    greetingsImage: "/assets/personal-img/profile_photo_3d_cartoon.png",
    aboutImage: "/assets/personal-img/profile_photo_3d_cartoon.png",
  },
  typewriterTexts: [
    "Full Stack Developer",
    "Software Developer",
    "Software Engineer",
  ],
  social: {
    github: "rajesh-ranjan-git",
    google: "rajeshranjan8271@gmail.com",
    stackOverflow: "",
    linkedin: "rajesh-ranjan-full-stack-developer",
    twitter: "_rajesh____",
    youtube: "",
    facebook: "rajeshranjan8271",
    instagram: "_rajesh____",
  },
  socialBadge: "github",
  resumeLink:
    "https://drive.google.com/file/d/1L73b_IyVJpdDCkDk1t9dBPB6kEnEHGrW/view?usp=drive_link",
  skills: [
    "html",
    "css",
    "javascript",
    "typescript",
    "react",
    "nextJs",
    "nodeJs",
    "mongoDb",
    "mySql",
    "postgresql",
    "java",
    "python",
    "bootstrap",
  ],
  tools: [
    "visualStudio",
    "amazonWebServices",
    "bash",
    "atom",
    "docker",
    "firebase",
    "git",
    "github",
    "gitlab",
    "intellij",
    "npm",
    "postman",
    "redis",
    "slack",
    "ubuntu",
  ],
};

export const education = {
  college: {
    id: "college",
    name: "JP Institute of Engineering & Technology",
    location: { city: "Meerut", state: "Uttar Pradesh", country: "India" },
    degree: "Bachelor of Technology",
    stream: "Computer Science & Engineering",
    gradingSystem: "percent",
    score: 72.8,
    startYear: 2014,
    endYear: 2018,
    imageSrc: "/assets/education/education-1.svg",
  },
  highSchool: {
    id: "highSchool",
    name: "Indian School of Learning",
    location: { city: "Dhanbad", state: "Jharkhand", country: "India" },
    degree: "Senior Secondary (XII)",
    stream: "Science",
    gradingSystem: "percent",
    score: 78,
    startYear: 2013,
    endYear: 2014,
    imageSrc: "/assets/education/education-2.svg",
  },
};

export const experience = [
  {
    designation: "Full Stack Developer",
    isCurrent: true,
    startMonth: "April",
    startYear: 2025,
    company: "India Today Group",
    companyImage: "/assets/companies/itg.png",
    techStack: [
      "Next JS",
      "React JS",
      "TypeScript",
      "Node JS",
      "Python",
      "Flask",
      "MongoDB",
      "MySQL",
      "OpenAI API",
      "Transformers",
      "NLP",
      "Pandas",
      "NumPy",
      "REST APIs",
      "OAuth2",
      "WebSockets",
      "Tailwind CSS",
      "SSR",
      "CDN",
      "AMP",
    ],
    details: [
      {
        title: "Application Architecture Modernization",
        description:
          "Re-engineered distributed Python-based services into a more unified and scalable Next.js architecture, simplifying infrastructure and helping reduce cloud operational costs by approximately 30%.",
      },
      {
        title: "Next.js Platform Migration",
        description:
          "Led the upgrade from Next.js 12 to Next.js 15, addressing 10+ security vulnerabilities while improving application stability, maintainability, and compatibility with modern framework capabilities.",
      },
      {
        title: "AI-Powered Content Intelligence",
        description:
          "Developed AI-driven content analysis workflows using OpenAI APIs and transformer-based NLP models to process 500,000+ news articles and power plagiarism and similarity detection with 90%+ accuracy.",
      },
      {
        title: "Intelligent Content Features",
        description:
          "Built AI-backed capabilities for content summarization, automated story generation, FAQs, and predictive insights, creating more engaging and intelligent experiences across digital products.",
      },
      {
        title: "SEO & Rendering Optimization",
        description:
          "Applied SSR, dynamic rendering, structured metadata, schema markup, and other SEO strategies to improve search visibility while reducing page rendering time from 3.7 seconds to approximately 1.5 seconds.",
      },
      {
        title: "Core Web Vitals & Frontend Performance",
        description:
          "Improved TTFB, FCP, and overall page responsiveness through lazy loading, caching strategies, optimized API handling, and systematic Lighthouse and DevTools performance audits.",
      },
      {
        title: "API Efficiency & Request Tracking",
        description:
          "Introduced API optimization and request-tracking mechanisms that reduced unnecessary network calls by more than 40% and lowered backend resource utilization by approximately 20%.",
      },
      {
        title: "Python Deployment Optimization",
        description:
          "Optimized deployment workflows for Python services by introducing lazy loading for resource-heavy libraries, reducing deployment time from roughly 60 minutes to 12 minutes.",
      },
      {
        title: "Real-Time Trends Analytics",
        description:
          "Developed a Google Trends analytics dashboard using a short-polling architecture to deliver timely trend insights and improve the freshness of visualized data.",
      },
      {
        title: "Database Performance Engineering",
        description:
          "Designed and optimized MongoDB and MySQL data layers using indexing, aggregation pipelines, schema improvements, and query tuning to achieve significantly faster data retrieval.",
      },
      {
        title: "Accessible Mobile-First Interfaces",
        description:
          "Created responsive, mobile-first interfaces with React and Tailwind CSS while following WCAG accessibility principles to deliver consistent experiences across devices.",
      },
      {
        title: "Reusable Frontend Systems",
        description:
          "Built shared UI components, utilities, and reusable development patterns that reduced duplication and accelerated feature implementation across applications.",
      },
      {
        title: "API & Third-Party Integrations",
        description:
          "Designed and integrated RESTful APIs, OAuth2 authentication flows, and external services to streamline communication between frontend, backend, and third-party platforms.",
      },
      {
        title: "Monitoring & Application Reliability",
        description:
          "Strengthened production reliability through structured logging, error handling, monitoring, and debugging practices designed to identify and resolve issues efficiently.",
      },
      {
        title: "Cross-Functional Product Delivery",
        description:
          "Collaborated with product, design, and engineering teams throughout Agile development cycles, contributing to technical planning, code reviews, sprint execution, and production releases.",
      },
    ],
  },
  {
    designation: "React Native Developer",
    isCurrent: false,
    startMonth: "February",
    startYear: 2025,
    endMonth: "March",
    endYear: 2025,
    company: "CYBERED (Internship | Remote)",
    companyImage: "/assets/companies/cybered.jpeg",
    techStack: [
      "React Native",
      "Expo",
      "JavaScript",
      "TypeScript",
      "Node JS",
      "REST APIs",
      "Push Notifications",
      "OTA Updates",
    ],
    details: [
      {
        title: "Cross-Platform Mobile Development",
        description:
          "Developed Android-focused mobile experiences for an EdTech application using React Native and Expo, working with reusable components, navigation, state management, and responsive layouts.",
      },
      {
        title: "Reusable Mobile UI Components",
        description:
          "Created reusable component patterns that improved UI consistency and helped reduce the development effort required for new application features.",
      },
      {
        title: "Responsive UI Improvements",
        description:
          "Diagnosed and resolved 15+ layout and responsiveness issues, delivering a more consistent user experience across different mobile screen sizes.",
      },
      {
        title: "Learning Session Notifications",
        description:
          "Implemented push notifications to remind learners about upcoming sessions and improve timely participation in educational activities.",
      },
      {
        title: "Backend & API Integration",
        description:
          "Integrated mobile interfaces with backend services and APIs to maintain reliable communication and smooth data flow between application layers.",
      },
      {
        title: "Over-the-Air Application Updates",
        description:
          "Contributed to OTA update implementation, allowing application improvements to be delivered without requiring a traditional Play Store release for every update.",
      },
      {
        title: "Mobile Performance & Debugging",
        description:
          "Worked with senior developers to investigate rendering and UI issues, optimize application behavior, and improve overall stability.",
      },
      {
        title: "Agile Team Collaboration",
        description:
          "Collaborated with a five-member development team and product stakeholders to troubleshoot issues and deliver iterative feature improvements.",
      },
    ],
  },
  {
    designation: "Analyst (UI Developer)",
    isCurrent: false,
    startMonth: "November",
    startYear: 2020,
    endMonth: "April",
    endYear: 2025,
    company: "NTT Data Services",
    companyImage: "/assets/companies/ntt.jpeg",
    techStack: [
      "React JS",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "REST APIs",
      "Node JS",
      "Express JS",
      "MongoDB",
    ],
    details: [
      {
        title: "React Application Development",
        description:
          "Developed responsive, user-focused web interfaces with React, JavaScript, and TypeScript, emphasizing maintainable architecture and consistent user experiences.",
      },
      {
        title: "Reusable Component Architecture",
        description:
          "Created 20+ reusable React components to standardize interface patterns, improve UI consistency, and accelerate frontend feature development.",
      },
      {
        title: "Frontend Performance Optimization",
        description:
          "Replaced resource-heavy UI dependencies with lightweight custom components, reducing unnecessary JavaScript overhead and improving application responsiveness and Lighthouse performance.",
      },
      {
        title: "Single-Page Application Development",
        description:
          "Built and maintained SPA experiences with optimized loading behavior and reliable functionality across modern browsers and device sizes.",
      },
      {
        title: "Responsive & Cross-Browser UI",
        description:
          "Implemented adaptable interfaces designed to maintain consistent layouts, interactions, and usability across desktop and mobile environments.",
      },
      {
        title: "API & Service Integration",
        description:
          "Integrated frontend applications with REST APIs and external services, enabling reliable communication between user interfaces and backend systems.",
      },
      {
        title: "Code Quality & Maintainability",
        description:
          "Applied reusable development patterns and modular component design to reduce duplication and make frontend codebases easier to extend and maintain.",
      },
    ],
  },
  {
    designation: "Assistant Executive",
    isCurrent: false,
    startMonth: "August",
    startYear: 2018,
    endMonth: "October",
    endYear: 2020,
    company: "iEnergizer IT Services Pvt. Ltd.",
    companyImage: "/assets/companies/ie.jpeg",
    details: [
      {
        title: "Digital Content Moderation",
        description:
          "Reviewed audio, video, and in-game content against established community standards to help maintain safe and appropriate digital experiences.",
      },
      {
        title: "Policy & Compliance Enforcement",
        description:
          "Evaluated user-facing content for policy violations and took appropriate moderation actions in accordance with platform guidelines.",
      },
      {
        title: "Content Quality Assurance",
        description:
          "Applied consistent review processes and quality standards to support platform integrity, user trust, and compliance requirements.",
      },
    ],
  },
  {
    designation: "Advisor",
    isCurrent: false,
    startMonth: "February",
    startYear: 2018,
    endMonth: "May",
    endYear: 2018,
    company: "Concentrix Daksh Services India Pvt. Ltd.",
    companyImage: "/assets/companies/concentrix.avif",
    details: [
      {
        title: "Customer Support Operations",
        description:
          "Assisted users with service-related queries and issues while maintaining clear communication and following established support processes.",
      },
      {
        title: "Issue Resolution & Coordination",
        description:
          "Investigated customer concerns, documented relevant information, and coordinated resolutions through defined operational workflows.",
      },
    ],
  },
  {
    designation: "Tech Intern",
    isCurrent: false,
    startMonth: "June",
    startYear: 2017,
    endMonth: "August",
    endYear: 2017,
    company: "Digital Web Solutions Pvt. Ltd.",
    companyImage: "/assets/companies/dws.jpeg",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP", "WordPress"],
    details: [
      {
        title: "Frontend Web Development",
        description:
          "Contributed to responsive web applications and websites using HTML, CSS, JavaScript, and Bootstrap, building a strong foundation in modern frontend development.",
      },
      {
        title: "Responsive Interface Implementation",
        description:
          "Translated design requirements into functional interfaces optimized for desktop, tablet, and mobile screen sizes.",
      },
      {
        title: "UI/UX Collaboration",
        description:
          "Worked alongside design teams to implement visually consistent interfaces while maintaining usability across browsers and devices.",
      },
      {
        title: "Reusable & Maintainable Code",
        description:
          "Followed modular development practices and created reusable frontend structures to improve maintainability and consistency.",
      },
      {
        title: "Debugging & Optimization",
        description:
          "Assisted with identifying and resolving frontend issues while improving responsive behavior and overall website usability.",
      },
    ],
  },
];

export const categories = [
  "Next JS",
  "React JS",
  "Vanilla JS",
  "Frontend (HTML & CSS)",
];

export const portfolio = [
  {
    id: 1,
    title: "Make My Trip",
    description: "Make My Trip",
    thumbnail: "/assets/portfolio/make-my-trip/make-my-trip.png",
    category: "Frontend (HTML & CSS)",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
  },
  {
    id: 2,
    title: "Ironing",
    description: "Ironing",
    thumbnail: "/assets/portfolio/ironing/ironing-thumbnail.png",
    category: "Frontend (HTML & CSS)",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
  },
  {
    id: 3,
    title: "Bitcoin Journal",
    description: "Bitcoin Journal",
    thumbnail:
      "/assets/portfolio/bitcoin-journal/bitcoin-journal-thumbnail.png",
    category: "Frontend (HTML & CSS)",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
  },
  {
    id: 4,
    title: "Commercial Cleaning",
    description: "Commercial Cleaning",
    thumbnail:
      "/assets/portfolio/commercial-cleaning/commercial-cleaning-thumbnail.png",
    category: "Frontend (HTML & CSS)",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
  },
  {
    id: 5,
    title: "JonesTree",
    description: "JonesTree",
    thumbnail: "/assets/portfolio/jonestree/jonestree-thumbnail.png",
    category: "Frontend (HTML & CSS)",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
  },
  {
    id: 6,
    title: "Flipkart Clone",
    description: "Flipkart Clone",
    thumbnail: "/assets/portfolio/flipkart-clone/flipkart-clone-thumbnail.png",
    category: "Frontend (HTML & CSS)",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
  },
  {
    id: 7,
    title: "Amazon Clone",
    description: "Amazon Clone",
    thumbnail: "/assets/portfolio/amazon-clone/amazon-clone-thumbnail.png",
    category: "Frontend (HTML & CSS)",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
  },
  {
    id: 8,
    title: "Currency Converter",
    description: "Currency Converter",
    thumbnail: "/assets/portfolio/currency-converter/currency-converter.png",
    category: "Vanilla JS",
    techStack: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    id: 9,
    title: "JP Tech Fest",
    description: "JP Tech Fest",
    thumbnail: "/assets/portfolio/jp-tech-fest/jp-tech-fest-thumbnail.png",
    category: "Frontend (HTML & CSS)",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
  },
  {
    id: 10,
    title: "Tic Tac Toe",
    description: "Tic Tac Toe",
    thumbnail: "/assets/portfolio/tic-tac-toe/tic-tac-toe-thumbnail.png",
    category: "Vanilla JS",
    techStack: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    id: 11,
    title: "Car Removal",
    description: "Car Removal",
    thumbnail: "/assets/portfolio/car-removal/car-removal-thumbnail.png",
    category: "Frontend (HTML & CSS)",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
  },
  {
    id: 12,
    title: "Exterior Water Blaster",
    description: "Exterior Water Blaster",
    thumbnail:
      "/assets/portfolio/exterior-water-blaster/exterior-water-blaster-thumbnail.png",
    category: "Frontend (HTML & CSS)",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
  },
  {
    id: 13,
    title: "To Do App",
    description: "To Do App",
    thumbnail: "/assets/portfolio/to-do-app/to-do-app-thumbnail.png",
    category: "Vanilla JS",
    techStack: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    id: 14,
    title: "Task Manager",
    description: "Task Manager",
    thumbnail: "/assets/portfolio/task-manager/task-manager-thumbnail.png",
    category: "Vanilla JS",
    techStack: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    id: 15,
    title: "Tic Tac Toe React",
    description: "Tic Tac Toe React",
    thumbnail:
      "/assets/portfolio/tic-tac-toe-react/tic-tac-toe-react-thumbnail.png",
    category: "React JS",
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Tailwind CSS",
      "React JS",
      "Vite",
    ],
  },
  {
    id: 16,
    title: "FQS Painting",
    description: "FQS Painting",
    thumbnail: "/assets/portfolio/fqs-painting/fqs-painting-thumbnail.png",
    category: "Frontend (HTML & CSS)",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
  },
  {
    id: 17,
    title: "Sky Painting",
    description: "Sky Painting",
    thumbnail: "/assets/portfolio/sky-painting/sky-painting-thumbnail.png",
    category: "Frontend (HTML & CSS)",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
  },
  {
    id: 18,
    title: "Photo Phlix",
    description: "Photo Phlix",
    thumbnail: "/assets/portfolio/photo-phlix/photo-phlix-thumbnail.png",
    category: "React JS",
    techStack: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "JavaScript",
      "React JS",
      "Vite",
    ],
  },
  {
    id: 19,
    title: "Get Kart",
    description: "Get Kart",
    thumbnail: "/assets/portfolio/get-kart/get-kart-thumbnail.png",
    category: "React JS",
    techStack: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "JavaScript",
      "Node JS",
      "React JS",
      "Vite",
      "MongoDB",
      "Express JS",
    ],
  },
  {
    id: 20,
    title: "Bancardify Me",
    description: "Bancardify Me",
    thumbnail: "/assets/portfolio/bancardify-me/bancardify-me-thumbnail.png",
    category: "Next JS",
    techStack: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "TypeScript",
      "Node JS",
      "Next JS",
      "Shadcn UI",
      "Appwrite",
      "Plaid",
      "Dwolla",
    ],
  },
  {
    id: 21,
    title: "Movie Mania",
    description: "Movie Mania",
    thumbnail: "/assets/portfolio/movie-mania/movie-mania-thumbnail.png",
    category: "React JS",
    techStack: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "JavaScript",
      "React JS",
      "Vite",
    ],
  },
  {
    id: 22,
    title: "Shopprixity",
    description: "Shopprixity",
    thumbnail: "/assets/portfolio/shopprixity/shopprixity-thumbnail.png",
    category: "React JS",
    techStack: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "Express JS",
      "MongoDB",
      "Shadcn UI",
      "Prisma",
      "Paypal",
      "Firebase",
      "Vercel",
    ],
  },
];

export const certificates = [
  {
    name: "AI for Engineers Masterclass",
    platform: "Outskill",
    imageSrc:
      "/assets/certificates/ai-for-engineers-masterclass-certificate-outskill.webp",
  },
  {
    name: "Data Science vs Machine Learning vs AI Masterclass",
    platform: "Scaler",
    imageSrc:
      "/assets/certificates/data-science-vs-machine-learning-vs-artificial-intelligence-masterclass-scaler-certificate.webp",
  },
  {
    name: "SEO",
    platform: "India Today Group",
    imageSrc: "/assets/certificates/seo-certificate-itg.webp",
  },
  {
    name: "Fundamentals of Docker & Kubernetes",
    platform: "Scaler",
    imageSrc:
      "/assets/certificates/fundamentals-of-docker-&-kubernetes-certificate-scaler.webp",
  },
  {
    name: "SOLID Principles Masterclass",
    platform: "Scaler",
    imageSrc:
      "/assets/certificates/solid-principles-every-developer-must-know-masterclass-scaler-certificate.webp",
  },
  {
    name: "React Native Development Internship",
    platform: "CYBERED",
    imageSrc:
      "/assets/certificates/internship-completion-&-recommendation-react-native-development-certificate-cybered-edtech.webp",
  },
  {
    name: "Namaste FrontEnd System Design",
    platform: "NamasteDev.com",
    imageSrc:
      "/assets/certificates/namaste-frontend-system-design-certificate-namastedev.webp",
  },
  {
    name: "MERN Full Stack Web Development",
    platform: "GeeksForGeeks",
    imageSrc:
      "/assets/certificates/mern-full-stack-web-developement-certificate-gfg.webp",
  },
  {
    name: "Namaste Node JS",
    platform: "NamasteDev.com",
    imageSrc:
      "/assets/certificates/namaste-node-js-certificate-namastedev.webp",
  },
  {
    name: "Namaste JavaScript",
    platform: "NamasteDev.com",
    imageSrc:
      "/assets/certificates/namaste-javascript-certificate-namastedev.webp",
  },
  {
    name: "React JS",
    platform: "GeeksForGeeks",
    imageSrc: "/assets/certificates/react-js-certificate-gfg.webp",
  },
  {
    name: "React JS & Grunt",
    platform: "NTT Data Services",
    imageSrc: "/assets/certificates/react-js-&-grunt-certificate-ntt.webp",
  },
  {
    name: "HTML5 with JavaScript & Css3 Introduction",
    platform: "NTT Data Services",
    imageSrc:
      "/assets/certificates/html5-with-javascript-&-css3-introduction-certificate-ntt.webp",
  },
  {
    name: "Industrial Training - Java",
    platform: "Ducat",
  },
  {
    name: "Industrial Training - Python",
    platform: "Ducat",
  },
];
