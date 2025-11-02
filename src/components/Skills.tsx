import { Code2, Database, Smartphone, Palette } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Vite", "Tailwind CSS"],
      color: "primary"
    },
    {
      icon: Database,
      title: "Backend",
      skills: ["Python", "Django", "REST APIs", "Node.js", "Authentication"],
      color: "accent"
    },
    {
      icon: Smartphone,
      title: "Mobile",
      skills: ["Flutter", "React Native", "Dart", "Mobile UI", "Cross-platform"],
      color: "primary"
    },
    {
      icon: Palette,
      title: "Design",
      skills: ["UI/UX", "Figma", "Prototyping", "Responsive Design", "Accessibility"],
      color: "accent"
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Skills & <span className="gradient-text">Technologies</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.title}
                className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`inline-block p-4 rounded-xl bg-${category.color}/10 mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-8 h-8 text-${category.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-6">{category.title}</h3>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 rounded-lg bg-secondary text-foreground/80 text-sm font-mono border border-border hover:border-primary/30 hover:text-primary transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-${category.color}/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity`} />
              </div>
            );
          })}
        </div>

        {/* Additional Tools */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-muted-foreground">Tools & Platforms</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Git", "GitHub", "VS Code", "npm", "Vercel", "Render", "Netlify"].map((tool) => (
              <span 
                key={tool}
                className="px-6 py-3 rounded-full bg-secondary/50 text-foreground text-sm font-mono border border-border hover:border-primary/50 hover:bg-secondary transition-all"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
