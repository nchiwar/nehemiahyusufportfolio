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
                  alt="Nehemiah - Mobile Application Developer and Full-Stack Web Developer" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 rounded-2xl border-2 border-primary/50 group-hover:border-primary transition-colors transform group-hover:translate-x-2 group-2xl group-hover:translate-y-2 transition-transform pointer-events-none" />
            </div>

            {/* Bio */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a motivated Mobile and Full Stack Developer with a strong passion for building seamless, cross-platform applications. 
                My core expertise lies in developing robust mobile applications using Flutter, Dart, and React Native, while managing the complete Android and iOS app lifecycles.
                I also have extensive experience in backend development with Python, FastAPI, Django, REST APIs, and Node.js, 
                as well as frontend development using React. With a keen eye for UI/UX design, I strive to create applications 
                that are not only functional but also visually appealing and user-friendly.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in building beautiful 
                mobile apps with <span className="text-primary font-semibold">Flutter and React Native</span>, 
                robust backends with <span className="text-primary font-semibold">Python, FastAPI, Django, REST APIs, Node.js,</span> responsive frontends with  <span className="text-primary font-semibold">React, Next.js, Typescripts</span>. I also have a keen 
                eye for <span className="text-primary font-semibold">UI/UX design</span>, ensuring every project 
                is both functional and visually appealing.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-mono border border-primary/20">
                  Mobile Developer
                </span>
                <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-mono border border-accent/20">
                  Backend Developer
                </span>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-mono border border-primary/20">
                Frontend Developer
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