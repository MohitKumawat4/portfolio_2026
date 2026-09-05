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
    title: "Ultima",
    description: "Precision task orchestration platform with drag-and-drop workload balancing, role isolation, and sub-second live state sync.",
    image: "/projects/ultima.png",
    fullImage: "/projects/ultima-full.png",
    tags: ["Next.js 16", "Supabase", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://ultima-five.vercel.app",
    githubUrl: "",
    featured: true,
    techStack: ["Next.js 16", "Supabase", "TypeScript", "Tailwind CSS", "dnd-kit", "Resend", "RLS Security"],
    details: "High-velocity task orchestration engine featuring direct-manipulation workload balancing, sub-second Supabase realtime state sync, automated Resend email dispatch, and enterprise Row-Level Security policies.",
    type: "Personal Project",
  },
  {
    id: 2,
    title: "Strike",
    description: "Personal email intelligence dashboard that ingests Gmail via Google Pub/Sub, synthesizes AI summaries with Gemini, and delivers real-time WhatsApp alerts.",
    image: "/projects/strike.png",
    fullImage: "/projects/strike-full.png",
    tags: ["Next.js", "Gemini AI", "WhatsApp API", "Pub/Sub"],
    liveUrl: "https://strike-lac.vercel.app",
    githubUrl: "",
    featured: true,
    techStack: ["Next.js", "Google Gemini", "WhatsApp Cloud API", "Google Cloud Pub/Sub", "TypeScript", "Tailwind CSS"],
    details: "Real-time mailbox triage and alert engine. Authorizes Google OAuth 2.0 with limited-use compliance, streams incoming emails via Pub/Sub, scores urgency & generates executive summaries with Gemini, and dispatches actionable WhatsApp alerts.",
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
    title: "3D Portfolio",
    description: "Immersive 3D interactive portfolio featuring custom WebGL shaders, kinetic stacking cards, and sleek micro-interactions.",
    image: "/projects/portfolio.png",
    fullImage: "/projects/portfolio-full.png",
    tags: ["Next.js 16", "Three.js / R3F", "Framer Motion", "Tailwind CSS"],
    liveUrl: "#home",
    githubUrl: "",
    featured: true,
    techStack: ["Next.js 16", "React Three Fiber", "Three.js", "Framer Motion", "Tailwind CSS", "Razorpay API", "TypeScript"],
    details: "Built an immersive personal 3D experience utilizing custom WebGL GLSL silk fluid shaders, interactive 3D physics elements, scroll-stacked project showcase, and dynamic developer analytics.",
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
  ogImage: "/mk.png",
  siteUrl: "https://yourwebsite.com",
};
