// ============================================
// PORTFOLIO DATA - Single source of truth
// Update this file to change content across the site
// ============================================

// Personal Information
export const personalInfo = {
  name: "Mohit Kumawat",
  title: "Front-end Developer",
  subtitle: "Modern Web Development",
  email: "mohitkumawat23564@gmail.com",
  location: "Jaipur, India",
  bio: "Building custom web solutions, AI integrations, and automation systems. From concept to deployment.",
  resumeUrl: "/Mohit-Resume-2026.pdf",
};

// Navigation Items
export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Hire", href: "#hire" },
  { label: "Support", href: "#support" },
];

// Skills
export const skills = [
  {
    category: "Programming Languages",
    items: ["TypeScript", "JavaScript", "Java"],
  },
  {
    category: "Frontend",
    items: [
      "NextJS",
      "React",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap"
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "Supabase"],
  },
  {
    category: "Other Skills",
    items: ["Problem-Solving", "Team Collaboration", "Communication"],
  },
];

// Projects
export const projects = [
  {
    id: 1,
    title: "ApplyX",
    description: "AI-powered job hunting platform that auto-applies to hundreds of jobs across LinkedIn, Indeed, Naukri & more.",
    image: "/projects/applyx.png",
    fullImage: "/projects/applyx-full.png",
    tags: ["Next.js", "AI", "Automation", "SaaS"],
    liveUrl: "https://apply-x-auto-job-hunter.vercel.app/",
    githubUrl: "",
    featured: true,
    techStack: ["Next.js 16", "TypeScript", "Tailwind CSS", "OpenAI API", "Supabase", "Vercel"],
    details: "Built from scratch as a personal project. Features ATS-optimized resume generation, multi-platform job scraping, and intelligent matching algorithms.",
    type: "Personal Project",
  },
  {
    id: 2,
    title: "AI Interviewer",
    description: "Practice real-world interviews with AI characters that simulate HR managers, tech leads, and senior developers.",
    image: "/projects/ai-interviewer.png",
    fullImage: "/projects/ai-interviewer-full.png",
    tags: ["React", "AI", "Speech API", "TypeScript"],
    liveUrl: "https://ai-interviewer-indol-three.vercel.app/",
    githubUrl: "",
    featured: true,
    techStack: ["React", "TypeScript", "Web Speech API", "Google Gemini", "Tailwind CSS", "Vercel"],
    details: "Personal project featuring real-time speech recognition, AI-powered interview simulation, and detailed performance feedback with scoring.",
    type: "Personal Project",
  },
  {
    id: 3,
    title: "Talker",
    description: "Anonymous chat platform with AI roleplay characters and real people. Completely private and encrypted.",
    image: "/projects/project-v2.png",
    fullImage: "/projects/project-v2-full.png",
    tags: ["Next.js", "WebSocket", "AI", "Real-time"],
    liveUrl: "https://project-v2-one.vercel.app/",
    githubUrl: "",
    featured: true,
    techStack: ["Next.js 15", "WebSocket", "AI Characters", "Supabase", "Real-time Chat", "Vercel"],
    details: "Personal project supporting text, images, audio, video sharing with AI roleplay characters. End-to-end encrypted with anonymous identity.",
    type: "Personal Project",
  },
  {
    id: 4,
    title: "Resume Persona",
    description: "Resume builder with premium templates and user friendly UI.",
    image: "/projects/resume-persona.png",
    fullImage: "/projects/resume-persona-full.png",
    tags: ["NextJS", "React", "TailwindCSS"],
    liveUrl: "https://resume-persona.vercel.app/",
    githubUrl: "",
    featured: true,
    techStack: ["NextJS", "React", "TailwindCSS", "TypeScript", "Shadcn", "AceternityUI Components", "Supabase"],
    details: "Built a resume builder with premium templates and user friendly ui.",
    type: "Personal Project",
  },
];

// Career Start Date
export const CAREER_START_DATE = new Date("2024-07-01");

// Personal Stats
export const personalStats = [
  { label: "Experience", value: "Dynamic" }, // Calculated dynamically in component
  { label: "Projects", value: "4+" },
  { label: "Internships", value: "3" },
];

export const education = [
  {
    id: 1,
    institution: "Sri Balaji College of Engineering and Technology",
    degree: "B.Tech in Computer Science and Engineering",
    duration: "Sept 2022 - Sept 2026",
    description: "Certifications: Programming in Java (NPTEL, IIT Kharagpur) | Google Cloud Computing Foundations (NPTEL, IIT Kharagpur)",
  },
];

// Work Experience
export const experiences = [
  {
    id: 1,
    company: "Learn & Build",
    role: "Web Development Intern",
    startDate: "Jul 2024",
    duration: "Sept 2024",
    description: "Worked as a web development intern in Jaipur.",
    technologies: ["Web Development"],
  },
  {
    id: 2,
    company: "Sunrays Image Pvt LTD",
    role: "Software Developer Intern",
    startDate: "Nov 2025",
    duration: "Jan 2026",
    description: "Worked as a Software Developer Intern.",
    technologies: ["Software Development"],
  },
  {
    id: 3,
    company: "LawDocs.in",
    role: "Software Developer Intern",
    startDate: "Feb 2026",
    duration: "Present",
    description: "Working on RBI compliance software and loan origination system.",
    technologies: ["Compliance Software", "Loan Origination"],
  },
];

// Testimonials (optional)
export const testimonials = [
  {
    id: 1,
    name: "Client Name",
    role: "CEO at Company",
    content: "Testimonial content goes here.",
    avatar: "/testimonials/avatar1.jpg",
  },
];

// SEO Metadata
export const seoConfig = {
  title: "Mohit Kumawat | Front-end Developer",
  description: "Portfolio of Mohit Kumawat — Front-end developer specializing in Next.js, React, and modern web development.",
  keywords: ["Mohit Kumawat", "Front-end Developer", "Web Developer", "Next.js", "React", "India"],
  ogImage: "/logo.png",
  siteUrl: "https://yourwebsite.com",
};
