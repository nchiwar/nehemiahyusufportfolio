import myImage from '../assets/images/my-photo.jpg'; // Update this path to your actual image

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            About <span className="gradient-text">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image with your photo */}
            <div className="relative group">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={myImage} 
                  alt="Your Name - Full Stack Developer" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 rounded-2xl border-2 border-primary/50 group-hover:border-primary transition-colors transform group-hover:translate-x-2 group-2xl group-hover:translate-y-2 transition-transform pointer-events-none" />
            </div>

            {/* Bio */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hello! I'm a passionate full-stack developer who loves building exceptional digital experiences. 
                My journey in web development started with curiosity about how websites work, and has evolved 
                into a career creating scalable, user-friendly applications.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in building responsive frontends with <span className="text-primary font-semibold">React</span>, 
                robust backends with <span className="text-primary font-semibold">Django</span>, and beautiful 
                mobile apps with <span className="text-primary font-semibold">Flutter and React Native</span>. I also have a keen 
                eye for <span className="text-primary font-semibold">UI/UX design</span>, ensuring every project 
                is both functional and visually appealing.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or designing in Figma.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-mono border border-primary/20">
                  Frontend Developer
                </span>
                <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-mono border border-accent/20">
                  Backend Developer
                </span>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-mono border border-primary/20">
                  Mobile Developer
                </span>
                <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-mono border border-accent/20">
                  UI/UX Designer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;