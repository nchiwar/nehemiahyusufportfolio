import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a project in mind, 
            want to collaborate, or just want to say hi, feel free to reach out!
          </p>

          <Card className="border-border hover:border-primary/50 transition-all bg-card">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {/* Email */}
                <a 
                  href="mailto:your.email@example.com"
                  className="group flex flex-col items-center gap-4 p-6 rounded-xl bg-secondary/50 hover:bg-secondary transition-all hover:scale-105"
                >
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Email</h3>
                    <p className="text-sm text-muted-foreground">nehechiwar@gmail.com</p>
                  </div>
                </a>

                {/* GitHub */}
                <a 
                  href="https://github.com/nchiwar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-4 p-6 rounded-xl bg-secondary/50 hover:bg-secondary transition-all hover:scale-105"
                >
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Github className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">GitHub</h3>
                    <p className="text-sm text-muted-foreground">@nchiwar</p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com/in/nehemiah-yusuf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-4 p-6 rounded-xl bg-secondary/50 hover:bg-secondary transition-all hover:scale-105"
                >
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">LinkedIn</h3>
                    <p className="text-sm text-muted-foreground">@Nehemiah Yusuf </p>
                  </div>
                </a>
              </div>

              {/* Primary CTA */}
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 glow-effect hover:scale-105 transition-transform"
                asChild
              >
                <a href="mailto:nehechiwar@gmail.com">
                  <Send className="w-5 h-5 mr-2" />
                  Send Me an Email
                </a>
              </Button>

              <p className="text-sm text-muted-foreground mt-8">
                Or download my{" "}
                <a 
                  href="/resume.pdf" 
                  className="text-primary hover:underline font-semibold"
                  download
                >
                  resume (PDF)
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
