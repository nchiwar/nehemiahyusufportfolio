import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import EduWebsite from '../assets/images/EduWebsite.jpg';
import ChurchWebsite from '../assets/images/ChurchWebsite.jpg';
import ADTNWebsite from '../assets/images/ADTNWebsite.jpg';
import FinanceDashboard from '../assets/images/Finance Dashboard.png';
import Translator from '../assets/images/Translator.jpg';
import Wallet from '../assets/images/Wallet.jpg';
import NGOWebsite from '../assets/images/NGOWebsite.jpg';
import HealthCareWebsite from '../assets/images/HealthCareWebsite.jpg';
import Todo from '../assets/images/Todo.jpg';
const Projects = () => {
  const projects = [
    {
      title: "Association of Dental Tecnologist of Nigeria",
      description: "ADTN Nigeria is the official website of the Association of Dental Technologists of Nigeria (ADTN). It serves as a professional hub for dental technologists across Nigeria, offering: Latest news & events in dental technology, Membership registration & benefits, CPD (Continuing Professional Development) updates, Publications, resources, and policy documents, Online enquiry & contact system. A clean, modern platform built to connect, inform, and empower Nigeria’s dental technology community.",
      image: ADTNWebsite,
      tags: ["React", "HTML", "CSS", "Javascripts" ,"Django", "PostgreSQL", "Paystack", "Render"],
      github: "https://github.com/nchiwar/adtn_nigeria_project.git",
      demo: "https://adtn-nigeria-project.onrender.com/",
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
      title: "Finance Management Dashboard",
      description: "Finance management dashboard for small businesses. The web app allow a business owner to: Create and manage invoices, Mark invoices as paid or unpaid, Auto-calculate VAT, View financial summaries (total revenue, pending invoices, VAT collected).",
      image: FinanceDashboard,
      tags: ["React 18+", "Vite", "TypeScript", "Tailwind CSS v4", "shadcn/u", "Appwrite (Auth + Database)", "Recharts", "React Hook Form + Zod", "Vercel", "React Router v6", "Custom Hooks + React Context"],
      github: "https://github.com/nchiwar/financedashboard.git",
      demo: "https://financedashboard-coral.vercel.app/",
    },
    {
      title: "Church Website",
      description: "A modern, responsive single-page application for a church, featuring event management, sermon archives, and online donations.",
      image: ChurchWebsite,
      tags: ["React", "Custom CSS", "Redux", "YouTube API"],
      github: "https://github.com/nchiwar/churchwebsite.git",
      demo: "https://nchiwar.github.io/churchwebsite/",
    },
     {
      title: "EduHub Schools Website",
      description: "A modern, dynamic website for Primary and Secondary schools, built with React and Tailwind CSS, featuring a virtual tour, role-based access, and Faculty/Student Portal pages",
      image: EduWebsite,
      tags: ["React", "HTML", "CSS"],
      github: "https://github.com/nchiwar/schoolwebsite.git",
      demo: "https://nchiwar.github.io/schoolwebsite/",
    },
    {
      title: "Digital Wallet for Multiple Credit and Debit Cards",
      description: "Mobile Digital Wallet for Keeping Multiple Credit and Debit Cards for ease of transcation,  Built with Flutter and Firebase.",
      image: Wallet,
      tags: ["Flutter", "Firebase", "Auth"],
      github: "https://github.com/nchiwar/my_wallet.git",
      demo: null,

    },
    {
      title: "GreenEarth NGO Website",
      description: "A responsive, multilingual NGO website built with React, Redux, and custom CSS, featuring a green-themed design with advanced functionality.",
      image: NGOWebsite,
      tags: ["React", "Redux", "Tailwind CSS", "Custom CSS"],
      github: "https://github.com/nchiwar/ngowebsite.git",
      demo: "https://nchiwar.github.io/ngowebsite/",
      challenges: "Implemented multilingual support and dynamic content loading for better user engagement."
    },
    {
      title: "HealthCare Hub Website",
      description: "A modern hospital and pharmacy website built with React and Tailwind CSS, featuring a secure patient portal, real-time appointment scheduling, and an integrated e-commerce pharmacy.",
      image: HealthCareWebsite,
      tags: ["React", "Redux", "Tailwind CSS"],
      github: "https://github.com/nchiwar/hospitalwebsite.git",
      demo: "https://nchiwar.github.io/hospitalwebsite/",
      challenges: ""
    },
    {
      title: "A Simple Todo App",
      description: "A simple and intuitive Todo application built with Flutter and Hive Database, allowing users to manage tasks efficiently with features like adding, editing, deleting, and marking tasks as complete.",
      image: Todo,
      tags: ["Flutter", "Hive"],
    }
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my skills in full-stack development, 
            mobile apps, and UI/UX design. Each project solved real-world problems.
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
