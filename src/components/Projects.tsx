import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import EternalGraceFellowship from '../assets/images/EternalGraceFellowship.jpg';
import NewHorizoneAcademy from '../assets/images/NewHorizoneAcademy.jpg';
import ADTNWebsite from '../assets/images/ADTNWebsite.jpg';
import FinanceDashboard from '../assets/images/Finance Dashboard.png';
import Translator from '../assets/images/Translator.jpg';
import Wallet from '../assets/images/Wallet.jpg';
import EmpowerChain from '../assets/images/EmpowerChain.jpg';
import Setlinn from '../assets/images/Setlinn.jpg';
import binta from '../assets/images/binta.jpg';
import iwc from '../assets/images/iwc.jpg';
import propti from '../assets/images/propti.jpg';
import thawigs from '../assets/images/thawigs.png';

const Projects = () => {
  const projects = [
    {
      title: "IWC Exchange (Cryptocurrency Platform)",
      description: "A comprehensive cryptocurrency exchange platform featuring functionalities similar to Binance and TrustWallet. Engineered the cross-platform mobile application using Flutter with Provider for state management, while building the responsive web interface in React. Developed a robust, secure backend architecture using FastAPI and PostgreSQL to handle REST API integrations seamlessly across all platforms.",
      image: iwc,
      tags: ["Flutter", "Dart", "Provider", "React", "Tailwind CSS", "FastAPI", "PostgreSQL"],
      demo: "https://www.iwcexchange.com",
    },

    {
      title: "Proptibank Mobile App",
      description: "Coded the mobile interface for a modern investment property application. Responsible for translating UI/UX designs into fully functional, interactive mobile components and seamlessly integrating available backend endpoints to deliver a smooth and responsive user experience.",
      image: propti,
      tags: ["React Native", "JavaScript", "REST APIs", "Mobile UI"],
      demo: "https://play.google.com/store/apps/details?id=com.realcod3r.moapp1",
    },

    {
      title: "Sign Language Translator App",
      description: "Mobile-first Sign Language Translator, thats use for hard of hearing communcation effectively. Cross-platform React app with Django backend and JSON File for Mapping.",
       image: Translator,
      tags: ["React Native", "Django", "JSON File", "Expo"],
      github: "https://github.com/nchiwar/text_to_video_sign_language_app.git",
      challenges: "Implemented real-time video processing for sign language recognition",
      demo: null,
    },

    {
      title: "Thawigs Multiconcepts (Loan Management Platform)",
      description: "Thawigs Multiconcepts is a comprehensive loan management platform designed to streamline the lending process for financial institutions. Built with a modern tech stack, it offers features like automated credit scoring, real-time risk assessment, and seamless integration with existing banking systems.",
      image: thawigs,
      tags: ["PHP", "Laravel", "HTML", "CSS", "UI/UX Design"],
      demo: "http://thawigsmulticoncept.com/",
    },

    {
      title: "Princess Diana Madaki Foundation",
      description: "The Princess Diana Madaki Foundation is dedicated to improving the lives of underprivileged children in Nigeria through education, healthcare, and community development initiatives.",
      image: binta,
      tags: [" React", "JavaScript", "tailwindCSS", "Responsive Design"],
      demo: "https://pbdmfoundation.vercel.app/",
    },

    {
      title: "Association of Dental Tecnologist of Nigeria",
      description: "ADTN Nigeria is the official website of the Association of Dental Technologists of Nigeria (ADTN). It serves as a professional hub for dental technologists across Nigeria, offering: Latest news & events in dental technology, Membership registration & benefits, CPD (Continuing Professional Development) updates, Publications, resources, and policy documents, Online enquiry & contact system. A clean, modern platform built to connect, inform, and empower Nigeria’s dental technology community.",
      image: ADTNWebsite,
      tags: ["React", "HTML", "CSS", "Javascripts" ,"Django", "PostgreSQL", "Paystack", "Render"],
      github: "https://github.com/nchiwar/adtn_nigeria_project.git",
      demo: "https://adtn-nigeria-project.onrender.com/",
    },
    {
      title: "SetLinn Migration Hub (A Simulation Project)",
      description: "Setlinn is the world's largest migration support community platform dedicated to helping migrants settle into their new lives in Germany and beyond. We connect global migrants through shared experiences, verified resources, and ongoing support — from residence permits to housing, jobs, language learning, and community.",
      image: Setlinn,
      tags: ["React.js + Vite", " TypeScript", "Tailwind CSS", "React Router v6", "React Hooks", "Supabase", "Vercel"],
      github: "https://github.com/nchiwar/setlinn.git",
      demo: "https://setlinn-krw2.vercel.app/",
    },
    {
      title: "Finance Management Dashboard",
      description: "Finance management dashboard for small businesses. The web app allow a business owner to: Create and manage invoices, Mark invoices as paid or unpaid, Auto-calculate VAT, View financial summaries (total revenue, pending invoices, VAT collected).",
      image: FinanceDashboard,
      tags: ["React 18+", "Vite", "TypeScript", "Tailwind CSS v4", "shadcn/u", "Appwrite (Auth + Database)", "Recharts", "React Hook Form + Zod", "Vercel", "React Router v6", "Custom Hooks + React Context"],
      github: "https://github.com/nchiwar/financedashboard.git",
      demo: "https://financedashboard-coral.vercel.app/",
    },
    {
      title: "Digital Wallet for Multiple Credit and Debit Cards",
      description: "Mobile Digital Wallet for Keeping Multiple Credit and Debit Cards for ease of transcation,  Built with Flutter and Firebase.",
      image: Wallet,
      tags: ["Flutter", "Firebase", "Auth"],
      github: "https://github.com/nchiwar/my_wallet.git",
      demo: null,

    },

  ];

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my skills in Mobile Application Development and Full-Stack Development, 
            Each project solved real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-fade-in bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-xs font-mono rounded-lg bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Challenges */}
                <p className="text-sm text-muted-foreground italic">
                  {project.challenges}
                </p>
              </CardContent>

              <CardFooter className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex-1"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
                {project.demo && (
                  <Button 
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a href="https://github.com/nchiwar" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
