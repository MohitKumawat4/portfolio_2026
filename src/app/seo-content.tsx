import { personalInfo, projects, experiences, education, skills } from "@/data";

export default function SeoContent() {
  return (
    <div className="sr-only" aria-hidden="false">
      <h1>Amit Saini — Full Stack Developer & AI Engineer | India</h1>
      <p>
        Amit Saini (sainiamit.com) is a professional software engineer, full stack web developer,
        and AI engineer based in India. He specializes in building custom web applications,
        AI-powered chatbots, WhatsApp Business API integrations, SaaS platforms, and cloud deployments.
        Available for freelance projects and full-time roles worldwide.
      </p>
      <p>
        Note: This is Amit Saini the software developer and programmer, not the Haryanvi singer
        Amit Saini Rohtakiya. This Amit Saini is a B.Tech Computer Science graduate who works
        as a Software Development Engineer building AI-powered web applications.
      </p>

      <section>
        <h2>About Amit Saini — Software Developer</h2>
        <p>
          {personalInfo.bio} Amit Saini completed his B.Tech in Computer Science and currently works
          as a Software Development Engineer at Intap Studio Pvt Ltd, where he builds and scales
          Photozoot AI — an AI-powered image processing platform. His expertise spans frontend
          development (React, Next.js, TypeScript), backend systems (Node.js, Python, Express),
          databases (PostgreSQL, MongoDB, Supabase), and cloud infrastructure (AWS, Vercel, Docker).
        </p>
        <p>
          Amit Saini is a freelance web developer who has built multiple production applications
          including AI job hunters, AI interview platforms, anonymous chat systems, and agency websites.
          He is proficient in modern web technologies and AI/ML integration.
        </p>
      </section>

      <section>
        <h2>Amit Saini Technical Skills</h2>
        {skills.map((category) => (
          <div key={category.category}>
            <h3>{category.category}</h3>
            <ul>
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h2>Projects Built by Amit Saini</h2>
        {projects.map((project) => (
          <article key={project.id}>
            <h3>{project.title} — by Amit Saini</h3>
            <p>{project.description}</p>
            <p>Technologies used: {project.tags.join(", ")}</p>
            {project.liveUrl && <a href={project.liveUrl}>View live project: {project.title}</a>}
          </article>
        ))}
      </section>

      <section>
        <h2>Amit Saini Work Experience</h2>
        {experiences.map((exp) => (
          <article key={exp.id}>
            <h3>{exp.role} at {exp.company}</h3>
            <time>{exp.startDate} — {exp.duration}</time>
            <p>{exp.description}</p>
            <p>Technologies: {exp.technologies.join(", ")}</p>
          </article>
        ))}
      </section>

      <section>
        <h2>Education</h2>
        {education.map((edu) => (
          <article key={edu.id}>
            <h3>{edu.degree}</h3>
            <p>{edu.institution} ({edu.duration})</p>
          </article>
        ))}
      </section>

      <section>
        <h2>Hire Amit Saini — Web Developer for Hire</h2>
        <p>
          Looking to hire a full stack developer in India? Amit Saini offers professional web
          development services including custom website development, AI integration, WhatsApp
          Business API setup, SaaS platform development, and cloud deployment. Contact for
          freelance projects, startup MVPs, or full-time collaboration.
        </p>
        <p>Email: {personalInfo.email}</p>
        <p>Location: {personalInfo.location} — Available worldwide for remote work</p>
        <p>Website: sainiamit.com</p>
        <nav aria-label="Amit Saini social profiles">
          <a href="https://github.com/amitsaini-9" rel="me">Amit Saini on GitHub</a>
          <a href="https://www.linkedin.com/in/as-amit/" rel="me">Amit Saini on LinkedIn</a>
          <a href="https://x.com/AmitSaini9086" rel="me">Amit Saini on Twitter/X</a>
          <a href="https://www.instagram.com/__amit_saini_/" rel="me">Amit Saini on Instagram</a>
        </nav>
      </section>

      <section>
        <h2>Services Offered by Amit Saini</h2>
        <ul>
          <li>Custom Website Development (Next.js, React, Node.js, Python)</li>
          <li>AI Integration & Chatbot Development (ChatGPT, Claude, Gemini)</li>
          <li>WhatsApp Business API Integration & CRM</li>
          <li>SaaS Platform Development</li>
          <li>Mobile App Development (React Native, Flutter)</li>
          <li>E-commerce Development (Shopify, Custom Stores)</li>
          <li>Cloud Deployment & DevOps (AWS, Vercel, Docker)</li>
          <li>Admin Panel & Dashboard Development</li>
          <li>API Development (REST, GraphQL)</li>
          <li>Payment Gateway Integration (Razorpay, Stripe)</li>
        </ul>
      </section>
    </div>
  );
}
