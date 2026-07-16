export const basicDetails = {
  initials: "RR",
  firstName: "Rajesh",
  lastName: "Ranjan",
  experience: { years: 7, months: 10 },
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
} as const;

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
    details: [
      {
        title: "Full-Stack Application Development",
        description:
          "Built and maintained scalable web applications using Next.js, React.js, Node.js, and Python (Flask), accelerating feature delivery by 35% through modular architecture and reusable component systems.",
      },
      {
        title: "Performance Optimization & Rendering Strategies",
        description:
          "Improved application speed by up to 40% by implementing Server-Side Rendering (SSR), CDN caching, lazy loading, and optimized API response handling.",
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
    details: [
      {
        title: "Full-Stack Application Development",
        description:
          "Built and maintained scalable web applications using Next.js, React.js, Node.js, and Python (Flask), accelerating feature delivery by 35% through modular architecture and reusable component systems.",
      },
      {
        title: "Performance Optimization & Rendering Strategies",
        description:
          "Improved application speed by up to 40% by implementing Server-Side Rendering (SSR), CDN caching, lazy loading, and optimized API response handling.",
      },
    ],
  },
  {
    designation: "Advisor",
    isCurrent: false,
    startMonth: "August",
    startYear: 2018,
    endMonth: "October",
    endYear: 2020,
    company: "iEnergizer IT Services Pvt. Ltd.",
    companyImage: "/assets/companies/ie.jpeg",
    details: [
      {
        title: "Full-Stack Application Development",
        description:
          "Built and maintained scalable web applications using Next.js, React.js, Node.js, and Python (Flask), accelerating feature delivery by 35% through modular architecture and reusable component systems.",
      },
      {
        title: "Performance Optimization & Rendering Strategies",
        description:
          "Improved application speed by up to 40% by implementing Server-Side Rendering (SSR), CDN caching, lazy loading, and optimized API response handling.",
      },
    ],
  },
];

export const primaryTechnologies = [
  "next js",
  "react js",
  "vanilla js",
  "frontend",
] as const;

export const projects = [
  ["amazon-clone", "amazon-clone-1.png"],
  ["bancardify-me", "bancardify-me-banks.png"],
  ["bitcoin-journal", "bitcoin-journal-landing-page-1.png"],
  ["car-removal", "car-removal-1.png"],
  ["commercial-cleaning", "commercial-cleaning-1.png"],
  ["currency-converter", "currency-converter.png"],
  ["exterior-water-blaster", "exterior-water-blaster-1.png"],
  ["flipkart-clone", "flipkart-clone-1.png"],
  ["fqs-painting", "fqs-painting-about-page.png"],
  ["get-kart", "get-kart-cart-page.png"],
  ["ironing", "ironing-1.png"],
  ["jonestree", "jonestree-landing-page-1.png"],
  ["jp-tech-fest", "jp-tech-fest-about.png"],
  ["make-my-trip", "make-my-trip.png"],
  ["movie-mania", "movie-mania-home-page.png"],
  ["photo-phlix", "photo-phlix-after-search.png"],
  ["shopprixity", "shopprixity-accountaddress.png"],
  ["sky-painting", "sky-painting-landing-page-1.png"],
  ["task-manager", "task-manager-add-tasks.png"],
  ["tic-tac-toe", "tic-tac-toe-draw-page.png"],
  ["tic-tac-toe-react", "tic-tac-toe-react-draw-page.png"],
  ["to-do-app", "to-do-app-adding-description.png"],
] as const;

export const certificateFiles = [
  "ai-for-engineers-masterclass-certificate-outskill.webp",
  "data-science-vs-machine-learning-vs-artificial-intelligence-masterclass-scaler-certificate.webp",
  "fundamentals-of-docker-&-kubernetes-certificate-scaler.webp",
  "html5-with-javascript-&-css3-introduction-certificate-ntt.webp",
  "internship-completion-&-recommendation-react-native-development-certificate-cybered-edtech.webp",
  "mern-full-stack-web-developement-certificate-gfg.webp",
  "namaste-frontend-system-design-certificate-namastedev.webp",
  "namaste-javascript-certificate-namastedev.webp",
  "namaste-node-js-certificate-namastedev.webp",
  "react-js-&-grunt-certificate-ntt.webp",
  "react-js-certificate-gfg.webp",
  "seo-certificate-itg.webp",
  "solid-principles-every-developer-must-know-masterclass-scaler-certificate.webp",
] as const;
