export const ownerConfig = {
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
  education: {
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
  },
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
  professionalExperience: [
    {
      designation: "Full Stack Developer",
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
      startMonth: "November",
      startYear: 2020,
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
      startMonth: "August",
      startYear: 2018,
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
  ],
  certificates: [
    {
      id: "mern-gfg-1",
      title: "MERN GFG Certificate",
      platform: "GeeksForGeeks",
      description:
        "Successfully completed 2 months MERN Stack certification course by GFG.",
      imageSrc: "/assets/certificates/mern-gfg-certificate.jpg",
    },
    {
      id: "react-gfg-1",
      title: "MERN GFG Certificate",
      platform: "GeeksForGeeks",
      description:
        "Successfully completed 2 months React JS certification course by GFG.",
      imageSrc: "/assets/certificates/react-gfg-certificate.jpg",
    },
    {
      id: "mern-gfg-2",
      title: "MERN GFG Certificate",
      platform: "GeeksForGeeks",
      description:
        "Successfully completed 2 months MERN Stack certification course by GFG.",
      imageSrc: "/assets/certificates/mern-gfg-certificate.jpg",
    },
    {
      id: "react-gfg-2",
      title: "MERN GFG Certificate",
      platform: "GeeksForGeeks",
      description:
        "Successfully completed 2 months React JS certification course by GFG.",
      imageSrc: "/assets/certificates/react-gfg-certificate.jpg",
    },
  ],
} as const;
