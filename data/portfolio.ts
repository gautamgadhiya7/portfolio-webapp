export const personalInfo = {
  name: "Gautam Gadhiya",
  title: " Software Engineer ",
  bio: "Full Stack Software Developer passionate about creating innovative solutions and delivering outstanding user experiences through clean, efficient, and elegant code.",
  location: "Ahmedabad, Gujarat",
  phone: "+91 9638288447",
  email: "gautamgadhiya27@gmail.com",
  github: "https://github.com/gautamgadhiya7",
  linkedin: "https://www.linkedin.com/in/gautam-gadhiya",
  resumeUrl: "/Resume_Gautam_Gadhiya.pdf",
  photo: "/images/profile2.png",
};

export const experiences = [
  {
    company: "Mazda Consultancy Services Pvt. Ltd.",
    logo: "/images/logo.png",
    role: "Software Developer",
    duration: "May 2026 – Present",
    location: null,
    type: "Full-time",
    description:
      "Contributing to Travelodeal's live production platform, building scalable and responsive user interfaces with a focus on maintainability and user experience.",
    highlights: [
      "Developed and maintained platform features using Next.js, React, TypeScript, and shadcn/ui.",
      "Created reusable UI components and integrated REST APIs to support performance and maintainability.",
      "Collaborated across teams using Azure DevOps and Bitbucket to deliver features on schedule.",
    ],
  },
  {
    company: "Zealous System and Solutions LLP",
    logo: "/images/zealous_logo.png",
    role: "Full Stack Developer Intern",
    duration: "Jan 2026 – March 2026",
    location: null,
    type: "Internship",
    description:
      "Built a restaurant and food ordering management platform serving customers, restaurants, delivery partners, and administrators.",
    highlights: [
      "Developed the full-stack application using React, Material UI, Redux Toolkit, Node.js, Express, MySQL, and Knex.js.",
      "Designed REST APIs with authentication, authorization, and role-based access control.",
      "Managed client state with Redux Toolkit and optimized database operations with MySQL and Knex.js.",
    ],
  },
];

export const projects = [
  {
    title: "RoomLink — Student Accommodation Platform",
    description:
      "A responsive platform for finding verified student rentals, with filters for rent, location, and amenities, secure Razorpay rent payments, and user reviews.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Razorpay"],
    github: null,
    live: null,
    featured: true,
    image: null,
    category: "Full Stack",
  },
  {
    title: "GEC Student Dashboard",
    description:
      "An academic dashboard for schedules, results, and fees, featuring secure authentication, a placement portal, and fee payments.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: null,
    live: null,
    featured: true,
    image: null,
    category: "Full Stack",
  },
];

export const education = [
  {
    degree: "B.E. in Computer Engineering",
    institution: "Government Engineering College, Bhavnagar, Gujarat, India",
    duration: "June 2026",
    location: "Bhavnagar, Gujarat, India",
    grade: "CGPA: 7.76 / 10",
    highlights: [],
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Government Polytechnic, Porbandar, Gujarat, India",
    duration: "June 2023",
    location: "Porbandar, Gujarat, India",
    grade: "CGPA: 8.34 / 10",
    highlights: [],
  },
];

export const contactInfo = {
  email: "gautamgadhiya27@gmail.com",
  phone: "+91 9638288447",
  github: "https://github.com/gautamgadhiya7",
  linkedin: "https://www.linkedin.com/in/gautam-gadhiya",
};

export const emailLink = `mailto:${personalInfo.email}`;
