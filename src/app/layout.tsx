import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sainiamit.com"),
  title: "Mohit Kumawat — Full Stack Developer & AI Engineer | sainiamit.com",
  description: "Mohit Kumawat is a Full Stack Developer & AI Engineer from India. Not the singer — the software engineer who builds custom web apps, AI chatbots, WhatsApp Business API integrations, and SaaS platforms. Hire for Next.js, React, Node.js, Python projects.",
  keywords: [
    "Mohit Kumawat developer",
    "Mohit Kumawat software engineer",
    "Mohit Kumawat",
    "Mohit Kumawat full stack developer",
    "Mohit Kumawat AI engineer",
    "Mohit Kumawat portfolio",
    "Mohit Kumawat web developer India",
    "Mohit Kumawat Jaipur",
    "Mohit Kumawat Rajasthan developer",
    "sainiamit.com",
    "hire full stack developer India",
    "hire full stack developer Jaipur",
    "Next.js developer India",
    "React developer freelance",
    "AI chatbot developer",
    "WhatsApp Business API developer",
    "SaaS developer India",
    "Node.js Python developer",
    "freelance web developer India",
    "freelance web developer Jaipur",
    "custom web application developer",
    "Mohit Kumawat programmer",
    "Mohit Kumawat coder",
    "Mohit Kumawat GitHub",
    "Mohit Kumawat Intap Studio",
    "Mohit Kumawat Photozoot AI",
    "Photozoot AI developer",
    "Intap Studio Pvt Ltd",
    "Intap Studio developer",
    "Mohit Kumawat SDE",
    "Mohit Kumawat freelance",
    "Mohit Kumawat hire",
    "Mohit Kumawat India developer",
    "best web developer Jaipur",
    "best full stack developer India",
    "web developer near me India",
    "hire AI developer India",
    "hire React developer India",
    "hire Next.js developer freelance",
    "WhatsApp CRM developer",
    "WhatsApp chatbot developer India",
    "Meta Business API developer",
    "Facebook API integration developer",
    "Instagram API developer India",
    "Vercel deployment expert",
    "Supabase developer India",
    "cloud deployment specialist India",
    "startup MVP developer India",
    "startup web developer freelance",
    "e-commerce developer India",
    "Shopify developer India",
    "payment gateway developer Razorpay",
    "admin panel developer",
    "dashboard developer India",
    "CRM developer India",
    "automation developer N8N",
    "AI automation developer India",
    "ChatGPT integration developer",
    "Claude AI integration developer",
    "Gemini AI developer",
    "machine learning developer India",
    "TypeScript expert India",
    "MongoDB PostgreSQL developer",
    "Docker AWS DevOps India",
    "CI CD pipeline developer",
    "REST API GraphQL developer India",
    "Mohit Kumawat LinkedIn",
    "Mohit Kumawat Twitter",
    "Mohit Kumawat Instagram",
    "as-amit LinkedIn",
    "amitsaini-9 GitHub",
    "image processing AI developer",
    "Photozoot AI engineer",
    "AI image enhancement developer",
  ],
  authors: [{ name: "Mohit Kumawat", url: "https://sainiamit.com" }],
  creator: "Mohit Kumawat",
  publisher: "Mohit Kumawat",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sainiamit.com",
    siteName: "Mohit Kumawat — Full Stack Developer",
    title: "Mohit Kumawat — Full Stack Developer & AI Engineer",
    description: "Software engineer building web apps, AI integrations, and SaaS platforms. Not the singer — the developer. Based in India, available worldwide.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohit Kumawat — Full Stack Developer & AI Engineer",
    description: "Software engineer building web apps, AI integrations, and SaaS platforms. Based in India.",
    creator: "@AmitSaini9086",
  },
  alternates: {
    canonical: "https://sainiamit.com",
  },
  category: "Technology",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: "/mk.png",
    shortcut: "/mk.png",
    apple: "/mk.png",
  },
  other: {
    "google-adsense-account": "ca-pub-6830060544242264",
    "profile:first_name": "Amit",
    "profile:last_name": "Saini",
    "profile:username": "amitsaini-9",
    "contact:phone_number": "+91 97727 77565",
    "contact:email": "mohitkumawat23564@gmail.com",
    "contact:address": "Jaipur, Rajasthan, India",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://sainiamit.com/#person",
    name: "Mohit Kumawat",
    alternateName: ["Mohit Kumawat", "Sainiamit"],
    givenName: "Amit",
    familyName: "Saini",
    url: "https://sainiamit.com",
    image: "https://sainiamit.com/mk.png",
    jobTitle: "Full Stack Developer & AI Engineer",
    description: "Mohit Kumawat is a software engineer and full stack developer from Jaipur, Rajasthan, India specializing in web applications, AI integration, and SaaS platforms. This is the developer Mohit Kumawat, not the Haryanvi singer.",
    email: "mohitkumawat23564@gmail.com",
    telephone: "+919772777565",
    nationality: { "@type": "Country", name: "India" },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "B.Tech Computer Science",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
    sameAs: [
      "https://github.com/amitsaini-9",
      "https://www.linkedin.com/in/as-amit/",
      "https://www.instagram.com/__amit_saini_/",
      "https://x.com/AmitSaini9086",
    ],
    knowsAbout: [
      "Full Stack Web Development",
      "Artificial Intelligence",
      "Software Engineering",
      "Next.js",
      "React",
      "Node.js",
      "Python",
      "TypeScript",
      "WhatsApp Business API",
      "SaaS Development",
      "Cloud Computing",
      "Machine Learning",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Software Developer",
      occupationalCategory: "15-1252.00",
      skills: "JavaScript, TypeScript, Python, React, Next.js, Node.js, AI/ML, AWS, Docker",
    },
    worksFor: {
      "@type": "Organization",
      name: "Intap Studio Pvt Ltd",
      url: "https://intapstudio.com",
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://sainiamit.com/#website",
    url: "https://sainiamit.com",
    name: "Mohit Kumawat — Full Stack Developer Portfolio",
    description: "Portfolio of Mohit Kumawat, a software engineer specializing in full stack development and AI engineering.",
    publisher: { "@id": "https://sainiamit.com/#person" },
    inLanguage: "en-US",
  };

  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://sainiamit.com/#services",
    name: "Mohit Kumawat — Web Development Services",
    provider: { "@id": "https://sainiamit.com/#person" },
    areaServed: { "@type": "Country", name: "Worldwide" },
    serviceType: "Software Development",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Development Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Website Development", description: "Full-stack web applications using Next.js, React, Node.js, Python" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Integration & Chatbots", description: "ChatGPT, Claude, Gemini AI integration, conversational AI, automation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "WhatsApp Business API Integration", description: "WhatsApp chatbots, CRM, marketing automation, business messaging" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "SaaS Platform Development", description: "Multi-tenant applications, subscription billing, admin dashboards" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud Deployment & DevOps", description: "AWS, Vercel, Docker, CI/CD pipelines, server management" } },
      ],
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://sainiamit.com" },
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="canonical" href="https://sainiamit.com" />
        <link rel="preconnect" href="https://stream.mux.com" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="preload" href="/assets/hero-poster.jpg" as="image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </head>
      <body className="antialiased">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7HV4DPD268"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7HV4DPD268');
          `}
        </Script>
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6830060544242264"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
