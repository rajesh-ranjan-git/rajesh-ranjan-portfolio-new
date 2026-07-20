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
    profileImage: "/assets/personal-img/profile-photo-3d-cartoon-square.webp",
    greetingsImage: "/assets/personal-img/profile-photo-3d-cartoon.webp",
    aboutImage: "/assets/personal-img/profile-photo-3d-cartoon.webp",
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
    "react-js",
    "next-js",
    "node-js",
    "mongo-db",
    "my-sql",
    "postgresql",
    "java",
    "python",
    "bootstrap",
  ],
  tools: [
    "visual-studio",
    "amazon-web-services",
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
} as const;

export const experience = [
  {
    designation: "Full Stack Developer",
    isCurrent: true,
    startMonth: "April",
    startYear: 2025,
    company: "India Today Group",
    companyImage: "/assets/companies/itg.webp",
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
    designation: "React Native Developer Intern",
    isCurrent: false,
    startMonth: "February",
    startYear: 2025,
    endMonth: "March",
    endYear: 2025,
    company: "CYBERED",
    companyImage: "/assets/companies/cybered.webp",
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
    companyImage: "/assets/companies/ntt.webp",
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
    companyImage: "/assets/companies/ie.webp",
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
    companyImage: "/assets/companies/concentrix.webp",
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
    companyImage: "/assets/companies/dws.webp",
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
    description:
      "Landing page copy of makemytrip.com created using HTML and CSS.",
    thumbnail: "/assets/portfolio/make-my-trip/make-my-trip.webp",
    category: "Frontend (HTML & CSS)",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    liveUrl: "https://mmt-clone-site.netlify.app/",
    githubUrl: "https://github.com/rajesh-ranjan-git/MakeMyTrip/",
    images: ["/assets/portfolio/make-my-trip/make-my-trip.webp"],
  },
  {
    id: 2,
    title: "Ironing",
    description:
      "Landing page for ironing site created using HTML, CSS and Bootstrap.",
    thumbnail: "/assets/portfolio/ironing/ironing-thumbnail.webp",
    category: "Frontend (HTML & CSS)",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    liveUrl: "https://ironing.netlify.app/",
    githubUrl: "https://github.com/rajesh-ranjan-git/Ironing/",
    images: [
      "/assets/portfolio/ironing/ironing-1.webp",
      "/assets/portfolio/ironing/ironing-2.webp",
    ],
  },
  {
    id: 3,
    title: "Bitcoin Journal",
    description:
      "Landing page for Bitcoin-Journal Blog Page created using HTML, CSS and Bootstrap.",
    thumbnail:
      "/assets/portfolio/bitcoin-journal/bitcoin-journal-thumbnail.webp",
    category: "Frontend (HTML & CSS)",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    liveUrl: "https://bitcoin-journal.netlify.app/",
    githubUrl: "https://github.com/rajesh-ranjan-git/Bitcoin-Journal/",
    images: [
      "/assets/portfolio/ironing/bitcoin-journal-landing-page-1.webp",
      "/assets/portfolio/ironing/bitcoin-journal-landing-page-2.webp",
      "/assets/portfolio/ironing/bitcoin-journal-landing-page-3.webp",
      "/assets/portfolio/ironing/bitcoin-journal-landing-page-4.webp",
    ],
  },
  {
    id: 4,
    title: "Commercial Cleaning",
    description:
      "Landing page for cleaning site created using HTML, CSS and Bootstrap.",
    thumbnail:
      "/assets/portfolio/commercial-cleaning/commercial-cleaning-thumbnail.webp",
    category: "Frontend (HTML & CSS)",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    liveUrl: "https://commercial-cleaning.netlify.app/",
    githubUrl: "https://github.com/rajesh-ranjan-git/Commercial-Cleaning/",
    images: [
      "/assets/portfolio/ironing/commercial-cleaning-1.webp",
      "/assets/portfolio/ironing/commercial-cleaning-2.webp",
    ],
  },
  {
    id: 5,
    title: "JonesTree",
    description:
      "Landing page for forestry work site created using HTML, CSS and Bootstrap.",
    thumbnail: "/assets/portfolio/jonestree/jonestree-thumbnail.webp",
    category: "Frontend (HTML & CSS)",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    liveUrl: "https://jonestree.netlify.app/",
    githubUrl: "https://github.com/rajesh-ranjan-git/Jonestree/",
    images: [
      "/assets/portfolio/jonestree/jonestree-landing-page-1.webp",
      "/assets/portfolio/jonestree/jonestree-landing-page-2.webp",
    ],
  },
  {
    id: 6,
    title: "Flipkart Clone",
    description:
      "Landing page copy of flipkart.com created using HTML and CSS.",
    thumbnail: "/assets/portfolio/flipkart-clone/flipkart-clone-thumbnail.webp",
    category: "Frontend (HTML & CSS)",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    liveUrl: "https://flpkart-clone.netlify.app/",
    githubUrl: "https://github.com/rajesh-ranjan-git/Flipkart-Clone/",
    images: [
      "/assets/portfolio/flipkart-clone/flipkart-clone-1.webp",
      "/assets/portfolio/flipkart-clone/flipkart-clone-2.webp",
      "/assets/portfolio/flipkart-clone/flipkart-clone-3.webp",
      "/assets/portfolio/flipkart-clone/flipkart-clone-4.webp",
    ],
  },
  {
    id: 7,
    title: "Amazon Clone",
    description: "Landing page copy of amazon.com created using HTML and CSS.",
    thumbnail: "/assets/portfolio/amazon-clone/amazon-clone-thumbnail.webp",
    category: "Frontend (HTML & CSS)",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://amazon-clone-site.netlify.app/",
    githubUrl: "https://github.com/rajesh-ranjan-git/Amazon-Clone/",
    images: [
      "/assets/portfolio/amazon-clone/amazon-clone-1.webp",
      "/assets/portfolio/amazon-clone/amazon-clone-2.webp",
      "/assets/portfolio/amazon-clone/amazon-clone-3.webp",
    ],
  },
  {
    id: 8,
    title: "Currency Converter",
    description: "Currency Converter created using HTML, CSS and Vanilla JS.",
    thumbnail: "/assets/portfolio/currency-converter/currency-converter.webp",
    category: "Vanilla JS",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://currency-converter-vanillajs.netlify.app/",
    githubUrl: "https://github.com/rajesh-ranjan-git/Currency-Converter/",
    images: ["/assets/portfolio/currency-converter/currency-converter.webp"],
  },
  {
    id: 9,
    title: "JP Tech Fest",
    description:
      "Tech Fest Landing Page for JP Institute of Engineering and Technology created using HTML, CSS and Bootstrap.",
    thumbnail: "/assets/portfolio/jp-tech-fest/jp-tech-fest-thumbnail.webp",
    category: "Frontend (HTML & CSS)",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    liveUrl: "https://rajesh-ranjan-git.github.io/JPTechFest/",
    githubUrl: "https://github.com/rajesh-ranjan-git/JPTechFest/",
    images: [
      "/assets/portfolio/jp-tech-fest/jp-tech-fest-about.webp",
      "/assets/portfolio/jp-tech-fest/jp-tech-fest-all-events.webp",
      "/assets/portfolio/jp-tech-fest/jp-tech-fest-events.webp",
      "/assets/portfolio/jp-tech-fest/jp-tech-fest-home-page.webp",
      "/assets/portfolio/jp-tech-fest/jp-tech-fest-team.webp",
    ],
  },
  {
    id: 10,
    title: "Tic Tac Toe",
    description: "Tic Tac Toe game created using HTML, CSS and Vanilla JS.",
    thumbnail: "/assets/portfolio/tic-tac-toe/tic-tac-toe-thumbnail.webp",
    category: "Vanilla JS",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://tictactoe-vanilla-js.netlify.app/",
    githubUrl: "https://github.com/rajesh-ranjan-git/TicTacToe/",
    images: [
      "/assets/portfolio/tic-tac-toe/tic-tac-toe-draw-page.webp",
      "/assets/portfolio/tic-tac-toe/tic-tac-toe-game-page.webp",
      "/assets/portfolio/tic-tac-toe/tic-tac-toe-loader.webp",
      "/assets/portfolio/tic-tac-toe/tic-tac-toe-winner-page.webp",
    ],
  },
  {
    id: 11,
    title: "Car Removal",
    description:
      "Landing page for car repairing site created using HTML, CSS and Bootstrap.",
    thumbnail: "/assets/portfolio/car-removal/car-removal-thumbnail.webp",
    category: "Frontend (HTML & CSS)",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    liveUrl: "https://car-removal.netlify.app/",
    githubUrl: "https://github.com/rajesh-ranjan-git/Car-Removal/",
    images: [
      "/assets/portfolio/car-removal/car-removal-1.webp",
      "/assets/portfolio/car-removal/car-removal-2.webp",
      "/assets/portfolio/car-removal/car-removal-3.webp",
    ],
  },
  {
    id: 12,
    title: "Exterior Water Blaster",
    description:
      "Landing page for washing company site created using HTML, CSS and Bootstrap.",
    thumbnail:
      "/assets/portfolio/exterior-water-blaster/exterior-water-blaster-thumbnail.webp",
    category: "Frontend (HTML & CSS)",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    liveUrl: "https://exterior-water-blaster.netlify.app/",
    githubUrl: "https://github.com/rajesh-ranjan-git/Exterior-Water-Blaster/",
    images: [
      "/assets/portfolio/exterior-water-blaster/exterior-water-blaster-1.webp",
      "/assets/portfolio/exterior-water-blaster/exterior-water-blaster-2.webp",
    ],
  },
  {
    id: 13,
    title: "To Do App",
    description: "To Do App created using HTML, CSS and Vanilla JS.",
    thumbnail: "/assets/portfolio/to-do-app/to-do-app-thumbnail.webp",
    category: "Vanilla JS",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://to-do-vanillajs.netlify.app/",
    githubUrl: "https://github.com/rajesh-ranjan-git/To-Do-App/",
    images: [
      "/assets/portfolio/to-do-app/to-do-app-adding-description.webp",
      "/assets/portfolio/to-do-app/to-do-app-deleting-item.webp",
      "/assets/portfolio/to-do-app/to-do-app-editing-title.webp",
      "/assets/portfolio/to-do-app/to-do-app-home-page.webp",
      "/assets/portfolio/to-do-app/to-do-app-new-title.webp",
      "/assets/portfolio/to-do-app/to-do-app-with-description.webp",
      "/assets/portfolio/to-do-app/to-do-app-with-items-without-description.webp",
    ],
  },
  {
    id: 14,
    title: "Task Manager App creates using HTML, CSS and Vanilla JS",
    description: "Task Manager",
    thumbnail: "/assets/portfolio/task-manager/task-manager-thumbnail.webp",
    category: "Vanilla JS",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://rajesh-ranjan-git.github.io/Task-Manager/",
    githubUrl: "https://github.com/rajesh-ranjan-git/Task-Manager/",
    images: [
      "/assets/portfolio/task-manager/task-manager-add-tasks.webp",
      "/assets/portfolio/task-manager/task-manager-filtered-tasks.webp",
      "/assets/portfolio/task-manager/task-manager-home-page.webp",
      "/assets/portfolio/task-manager/task-manager-tasks-after-deleting.webp",
      "/assets/portfolio/task-manager/task-manager-tasks-with-priorities.webp",
    ],
  },
  {
    id: 15,
    title: "Tic Tac Toe React",
    description:
      "Tic Tac Toe game created using React & Vite with Tailwind CSS.",
    thumbnail:
      "/assets/portfolio/tic-tac-toe-react/tic-tac-toe-react-thumbnail.webp",
    category: "React JS",
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Tailwind CSS",
      "React JS",
      "Vite",
    ],
    liveUrl: "https://tictactoe-react-vite-game.netlify.app/",
    githubUrl: "https://github.com/rajesh-ranjan-git/TicTacToe-React/",
    images: [
      "/assets/portfolio/tic-tac-toe-react/tic-tac-toe-react-draw-page.webp",
      "/assets/portfolio/tic-tac-toe-react/tic-tac-toe-react-game-page.webp",
      "/assets/portfolio/tic-tac-toe-react/tic-tac-toe-react-player-page.webp",
      "/assets/portfolio/tic-tac-toe-react/tic-tac-toe-react-start-page.webp",
      "/assets/portfolio/tic-tac-toe-react/tic-tac-toe-react-winner-page.webp",
    ],
  },
  {
    id: 16,
    title: "FQS Painting",
    description:
      "Landing page for painting site created using HTML, CSS and Bootstrap.",
    thumbnail: "/assets/portfolio/fqs-painting/fqs-painting-thumbnail.webp",
    category: "Frontend (HTML & CSS)",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    liveUrl: "https://rajesh-ranjan-git.github.io/FQS-Painting/",
    githubUrl: "https://github.com/rajesh-ranjan-git/FQS-Painting/",
    images: [
      "/assets/portfolio/fqs-painting/fqs-painting-about-page.webp",
      "/assets/portfolio/fqs-painting/fqs-painting-contact-page.webp",
      "/assets/portfolio/fqs-painting/fqs-painting-gallery-page.webp",
      "/assets/portfolio/fqs-painting/fqs-painting-home-page.webp",
      "/assets/portfolio/fqs-painting/fqs-painting-image-view.webp",
      "/assets/portfolio/fqs-painting/fqs-painting-services-page.webp",
    ],
  },
  {
    id: 17,
    title: "Sky Painting",
    description:
      "Landing page for painting site created using HTML, CSS and Bootstrap.",
    thumbnail: "/assets/portfolio/sky-painting/sky-painting-thumbnail.webp",
    category: "Frontend (HTML & CSS)",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    liveUrl: "https://sky-painting.netlify.app/",
    githubUrl: "https://github.com/rajesh-ranjan-git/Sky-Painting/",
    images: [
      "/assets/portfolio/sky-painting/sky-painting-landing-page-1.webp",
      "/assets/portfolio/sky-painting/sky-painting-landing-page-2.webp",
      "/assets/portfolio/sky-painting/sky-painting-landing-page-3.webp",
    ],
  },
  {
    id: 18,
    title: "Photo Phlix",
    description:
      "Image gallery application created using React JS & Vite with Tailwind CSS.",
    thumbnail: "/assets/portfolio/photo-phlix/photo-phlix-thumbnail.webp",
    category: "React JS",
    techStack: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "JavaScript",
      "React JS",
      "Vite",
    ],
    liveUrl: "https://photophlix.netlify.app/",
    githubUrl: "https://github.com/rajesh-ranjan-git/PhotoPhlix/",
    images: [
      "/assets/portfolio/photo-phlix/photo-phlix-after-search.webp",
      "/assets/portfolio/photo-phlix/photo-phlix-favorites-page.webp",
      "/assets/portfolio/photo-phlix/photo-phlix-home-page.webp",
      "/assets/portfolio/photo-phlix/photo-phlix-light-box.webp",
    ],
  },
  {
    id: 19,
    title: "Get Kart",
    description:
      "A full-stack e-commerce application with frontend using React JS, Vite, Tailwind CSS and backend using Node JS, Express JS and MongoDB",
    thumbnail: "/assets/portfolio/get-kart/get-kart-thumbnail.webp",
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
    liveUrl: "https://get-kart.netlify.app/",
    githubUrl: "https://github.com/rajesh-ranjan-git/GetKart/",
    images: [
      "/assets/portfolio/get-kart/get-kart-cart-page.webp",
      "/assets/portfolio/get-kart/get-kart-home-page-lighttheme.webp",
      "/assets/portfolio/get-kart/get-kart-home-page.webp",
      "/assets/portfolio/get-kart/get-kart-login-page.webp",
      "/assets/portfolio/get-kart/get-kart-profile-page-withupdatedetails.webp",
      "/assets/portfolio/get-kart/get-kart-shimmerui.webp",
      "/assets/portfolio/get-kart/get-kart-signup-page.webp",
      "/assets/portfolio/get-kart/get-kart-singleproduct-page.webp",
    ],
  },
  {
    id: 20,
    title: "Bancardify Me",
    description:
      "An end to end banking application with real banks and real transactions.",
    thumbnail: "/assets/portfolio/bancardify-me/bancardify-me-thumbnail.webp",
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
    liveUrl: "https://bancardifyme.netlify.app/",
    githubUrl: "https://github.com/rajesh-ranjan-git/bancardifyme/",
    images: [
      "/assets/portfolio/bancardify-me/bancardify-me-banks.webp",
      "/assets/portfolio/bancardify-me/bancardify-me-home.webp",
      "/assets/portfolio/bancardify-me/bancardify-me-sign-in.webp",
      "/assets/portfolio/bancardify-me/bancardify-me-sign-up-2.webp",
      "/assets/portfolio/bancardify-me/bancardify-me-sign-up.webp",
      "/assets/portfolio/bancardify-me/bancardify-me-transactions.webp",
      "/assets/portfolio/bancardify-me/bancardify-me-transfer.webp",
    ],
  },
  {
    id: 21,
    title: "Movie Mania",
    description:
      "Movie hub application created using React JS, Vite and Tailwind CSS.",
    thumbnail: "/assets/portfolio/movie-mania/movie-mania-thumbnail.webp",
    category: "React JS",
    techStack: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "JavaScript",
      "React JS",
      "Vite",
    ],
    liveUrl: "https://app-moviemania.netlify.app/",
    githubUrl: "https://github.com/rajesh-ranjan-git/MovieMania/",
    images: [
      "/assets/portfolio/movie-mania/movie-mania-home-page.webp",
      "/assets/portfolio/movie-mania/movie-mania-horizontal-cards.webp",
      "/assets/portfolio/movie-mania/movie-mania-movies-page.webp",
      "/assets/portfolio/movie-mania/movie-mania-search-page.webp",
      "/assets/portfolio/movie-mania/movie-mania-singlemovie-page.webp",
      "/assets/portfolio/movie-mania/movie-mania-trailer-section.webp",
      "/assets/portfolio/movie-mania/movie-mania-tv-shows-page.webp",
    ],
  },
  {
    id: 22,
    title: "Shopprixity",
    description:
      "A full-stack e-commerce platform designed to provide users with an intuitive and robust online shopping experience.",
    thumbnail: "/assets/portfolio/shopprixity/shopprixity-thumbnail.webp",
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
    liveUrl: "https://shopprixity.vercel.app/",
    githubUrl: "https://github.com/rajesh-ranjan-git/Shopprixity/",
    images: [
      "/assets/portfolio/shopprixity/shopprixity-accountaddress.webp",
      "/assets/portfolio/shopprixity/shopprixity-accountaddress1.webp",
      "/assets/portfolio/shopprixity/shopprixity-accountorders.webp",
      "/assets/portfolio/shopprixity/shopprixity-addproduct.webp",
      "/assets/portfolio/shopprixity/shopprixity-admindashboard.webp",
      "/assets/portfolio/shopprixity/shopprixity-adminorderdetails.webp",
      "/assets/portfolio/shopprixity/shopprixity-adminorders.webp",
      "/assets/portfolio/shopprixity/shopprixity-adminorderupdate.webp",
      "/assets/portfolio/shopprixity/shopprixity-adminproducts.webp",
      "/assets/portfolio/shopprixity/shopprixity-allproducts.webp",
      "/assets/portfolio/shopprixity/shopprixity-cart.webp",
      "/assets/portfolio/shopprixity/shopprixity-checkout.webp",
      "/assets/portfolio/shopprixity/shopprixity-checkout1.webp",
      "/assets/portfolio/shopprixity/shopprixity-editproduct.webp",
      "/assets/portfolio/shopprixity/shopprixity-filterproducts.webp",
      "/assets/portfolio/shopprixity/shopprixity-filterproducts1.webp",
      "/assets/portfolio/shopprixity/shopprixity-orderdetails.webp",
      "/assets/portfolio/shopprixity/shopprixity-orderupdatedstatus.webp",
      "/assets/portfolio/shopprixity/shopprixity-paymentsuccess.webp",
      "/assets/portfolio/shopprixity/shopprixity-paypal.webp",
      "/assets/portfolio/shopprixity/shopprixity-profiledropdown.webp",
      "/assets/portfolio/shopprixity/shopprixity-register.webp",
      "/assets/portfolio/shopprixity/shopprixity-search.webp",
      "/assets/portfolio/shopprixity/shopprixity-searchresults.webp",
      "/assets/portfolio/shopprixity/shopprixity-shophome.webp",
      "/assets/portfolio/shopprixity/shopprixity-shophome1.webp",
      "/assets/portfolio/shopprixity/shopprixity-signin.webp",
    ],
  },
];

export const certificates = [
  {
    name: "AI for Engineers Masterclass",
    platform: "Outskill",
    imageSrc:
      "/assets/certificates/ai-for-engineers-masterclass-certificate-outskill.webp",
    url: "https://drive.google.com/file/d/13zkE31ndTIo7SdTIv57hFmP3kwhtg9HV/view?usp=drive_link",
  },
  {
    name: "Data Science vs Machine Learning vs AI Masterclass",
    platform: "Scaler",
    imageSrc:
      "/assets/certificates/data-science-vs-machine-learning-vs-artificial-intelligence-masterclass-scaler-certificate.webp",
    url: "https://drive.google.com/file/d/1bMTsJmeCq0cHEX_3SRt2l7YcM_TQXJ1X/view?usp=drive_link",
  },
  {
    name: "SEO",
    platform: "India Today Group",
    imageSrc: "/assets/certificates/seo-certificate-itg.webp",
    url: "https://drive.google.com/file/d/1ylTZCVNfJc8P8VnQ59hq2fuVwX9opUPr/view?usp=drive_link",
  },
  {
    name: "Fundamentals of Docker & Kubernetes",
    platform: "Scaler",
    imageSrc:
      "/assets/certificates/fundamentals-of-docker-&-kubernetes-certificate-scaler.webp",
    url: "https://drive.google.com/file/d/1ZMJUQHjG4Bg66ALhOCY5M3Lq9laIVUkw/view?usp=drive_link",
  },
  {
    name: "SOLID Principles Masterclass",
    platform: "Scaler",
    imageSrc:
      "/assets/certificates/solid-principles-every-developer-must-know-masterclass-scaler-certificate.webp",
    url: "https://drive.google.com/file/d/1WgyKdWs7xpdTSbiodHz0cZ1yBFuYEVHh/view?usp=drive_link",
  },
  {
    name: "React Native Development Internship",
    platform: "CYBERED",
    imageSrc:
      "/assets/certificates/internship-completion-&-recommendation-react-native-development-certificate-cybered-edtech.webp",
    url: "https://drive.google.com/file/d/1uaXBqmSd3QOtoVPz46nf1yGDdXYEURDs/view?usp=drive_link",
  },
  {
    name: "Namaste FrontEnd System Design",
    platform: "NamasteDev.com",
    imageSrc:
      "/assets/certificates/namaste-frontend-system-design-certificate-namastedev.webp",
    url: "https://drive.google.com/file/d/1VhpRBFVuTlhp69_6mYx7RN3jruDV8cM5/view?usp=drive_link",
  },
  {
    name: "MERN Full Stack Web Development",
    platform: "GeeksForGeeks",
    imageSrc:
      "/assets/certificates/mern-full-stack-web-development-certificate-gfg.webp",
    url: "https://drive.google.com/file/d/1H03oAe-SboKKAFK0hZk9TodYC4nqolm1/view?usp=drive_link",
  },
  {
    name: "Namaste Node JS",
    platform: "NamasteDev.com",
    imageSrc:
      "/assets/certificates/namaste-node-js-certificate-namastedev.webp",
    url: "https://drive.google.com/file/d/1Lw0HAzjF3ra7OMI5NYZDP93_xkUhIYsi/view?usp=drive_link",
  },
  {
    name: "Namaste JavaScript",
    platform: "NamasteDev.com",
    imageSrc:
      "/assets/certificates/namaste-javascript-certificate-namastedev.webp",
    url: "https://drive.google.com/file/d/1rgeTaUVUz9ZYyiGXxYEx1DSwGzqvuyOB/view?usp=drive_link",
  },
  {
    name: "Crack FrontEnd Interview",
    platform: "NamasteDev.com",
    imageSrc:
      "/assets/certificates/crack-frontend-interview-certificate-namastedev.webp",
    url: "https://drive.google.com/file/d/1Kw_RDOtcAbZJbKqUnTxwK3FKPnjBA6Ld/view?usp=drive_link",
  },
  {
    name: "React JS",
    platform: "GeeksForGeeks",
    imageSrc: "/assets/certificates/react-js-certificate-gfg.webp",
    url: "https://drive.google.com/file/d/1MFjV6NudohOh6n95IqnwSa_VAk42AJQQ/view?usp=drive_link",
  },
  {
    name: "React JS & Grunt",
    platform: "NTT Data Services",
    imageSrc: "/assets/certificates/react-js-&-grunt-certificate-ntt.webp",
    url: "https://drive.google.com/file/d/1VhocrtC0DMQADKvmGudZxVRG46nldELb/view?usp=drive_link",
  },
  {
    name: "HTML5 with JavaScript & Css3 Introduction",
    platform: "NTT Data Services",
    imageSrc:
      "/assets/certificates/html5-with-javascript-&-css3-introduction-certificate-ntt.webp",
    url: "https://drive.google.com/file/d/16w6XGnbvRlYsooY62rPODrGpA3gGhbtE/view?usp=drive_link",
  },
  {
    name: "Industrial Training - Java",
    platform: "Ducat",
    imageSrc: "/assets/error/image-not-available.webp",
  },
  {
    name: "Industrial Training - Python",
    platform: "Ducat",
    imageSrc: "/assets/error/image-not-available.webp",
  },
] as const;
