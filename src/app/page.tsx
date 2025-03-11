import HomePage from "./components/Home";
import ProjectsPage from "./_Pages/ProjectsPage";
import AboutMePage from "./_Pages/AboutMePage";
import { CarouselSpacing } from "./_Pages/TestimonialsPage";
import ContactPage from "./_Pages/ContactPage";
import Footer from "./components/Footer";
import { Metadata } from "next";
 
export const metadata: Metadata =  {
  title: "Prabin Acharya",
  description: "Fullstack Web Developer portfolio showcasing expertise in React, Next.js, Node.js, MongoDB, and more. Explore projects, skills, and experience in building dynamic web applications. Let's connect!",
  keywords: [
    "Fullstack Web Developer",
    "Web Development",
    "Frontend Developer",
    "Backend Developer",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "JavaScript",
    "Tailwind CSS",
    "Fullstack Projects",
    "Portfolio",
    "Software Engineer",
    "UI/UX",
    "Responsive Design",
    "API Development",
    "MERN Stack",
    "Web Applications",
    "Cloud Deployment",
    "GitHub",
    "Freelance Developer",
    "Coding Portfolio",
    "Prabin Acharya",
    "Prabin",
    "Acharya"
  ],
  openGraph: {
    "url": "https://prabinacharya1.com.np",
    "type": "website",
    "title": "Fullstack Web Developer | Prabin Acharya",
    "description": "Showcasing my expertise in fullstack web development using React, Next.js, Node.js, and MongoDB. Explore my projects, skills, and experience in building modern web applications.",
    "images": [
      {
        "url": "https://prabinacharya1.com.np/Images/Portfolio-Thumbnail.png",
        "width": 1200,
        "height": 630,
        "alt": "Portfolio of Prabin Acharya"
      }
    ]
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Fullstack Web Developer | Prabin Acharya",
    "description": "Showcasing my expertise in fullstack web development using React, Next.js, Node.js, and MongoDB. Explore my projects, skills, and experience in building modern web applications.",
    "creator": "@yourTwitterHandle",
    "site": "@yourTwitterHandle",
    "images": [
      {
        "url": "https://yourportfolio.com/Images/Portfolio-Thumbnail.png",
        "width": 1200,
        "height": 630,
        "alt": "Portfolio of Prabin Acharya"
      }
    ]
  },
  alternates: {
    canonical: "https://prabinacharya1.com.np"
  }
};

export default function Home() {
  return (
    <main>
      <HomePage />
      <ProjectsPage />
      <AboutMePage />
      <CarouselSpacing />
      <ContactPage />
      <Footer />
    </main>
  );
}
