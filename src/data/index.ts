// ============================================
// PORTFOLIO DATA - Single source of truth
// Update this file to change content across the site
// ============================================

// Personal Information
export const personalInfo = {
  name: "Your Name",
  title: "Software Engineer",
  subtitle: "Web Developer",
  email: "your.email@example.com",
  location: "Your City, Country",
  bio: "A passionate software engineer focused on building exceptional web experiences.",
  resumeUrl: "/resume.pdf",
};

// Social Links
export const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  instagram: "https://instagram.com/yourusername",
};

// Navigation Items
export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

// Skills
export const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Figma", "VS Code", "Vercel"],
  },
];

// Projects
export const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of your first project and its key features.",
    image: "/projects/project1.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "https://project1.com",
    githubUrl: "https://github.com/yourusername/project1",
    featured: true,
  },
  {
    id: 2,
    title: "Project Two",
    description: "A brief description of your second project and its key features.",
    image: "/projects/project2.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://project2.com",
    githubUrl: "https://github.com/yourusername/project2",
    featured: true,
  },
  {
    id: 3,
    title: "Project Three",
    description: "A brief description of your third project and its key features.",
    image: "/projects/project3.jpg",
    tags: ["Three.js", "GSAP", "WebGL"],
    liveUrl: "https://project3.com",
    githubUrl: "https://github.com/yourusername/project3",
    featured: false,
  },
];

// Work Experience
export const experiences = [
  {
    id: 1,
    company: "Company Name",
    role: "Software Engineer",
    duration: "2023 - Present",
    description: "Description of your role and key achievements at this company.",
    technologies: ["React", "TypeScript", "Node.js"],
  },
  {
    id: 2,
    company: "Previous Company",
    role: "Junior Developer",
    duration: "2021 - 2023",
    description: "Description of your role and key achievements at this company.",
    technologies: ["JavaScript", "Python", "PostgreSQL"],
  },
];

// Education
export const education = [
  {
    id: 1,
    institution: "University Name",
    degree: "Bachelor of Science in Computer Science",
    duration: "2017 - 2021",
    description: "Relevant coursework and achievements.",
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
  title: "Your Name | Software Engineer",
  description: "Portfolio website of Your Name - A software engineer specializing in web development.",
  keywords: ["software engineer", "web developer", "portfolio", "react", "next.js"],
  ogImage: "/og-image.jpg",
  siteUrl: "https://yourportfolio.com",
};
