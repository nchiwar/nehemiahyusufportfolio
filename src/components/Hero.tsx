import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 animate-pulse opacity-50" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Greeting */}
          <div className="inline-block">
            <span className="text-muted-foreground text-lg md:text-xl font-mono">
              Hi, my name is
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
            <span className="gradient-text">Nehemiah Yusuf</span>
          </h1>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground/90">
            Full-Stack Developer & Designer
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I craft beautiful, performant web and mobile applications. 
            Specializing in React, Django, Flutter, React Native and UI/UX design.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 glow-effect hover:scale-105 transition-transform"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 hover:scale-105 transition-transform"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center pt-8">
            <a 
              href="https://github.com/nchiwar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
              aria-label="GitHub Profile"
            >
              <Github className="w-7 h-7" />
            </a>
            <a 
              href="https://linkedin.com/in/nehemiah-yusuf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-7 h-7" />
            </a>
            <a 
              href="mailto:nehechiwar@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
              aria-label="Email Contact"
            >
              <Mail className="w-7 h-7" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
