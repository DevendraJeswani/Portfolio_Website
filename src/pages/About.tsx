import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import devendraPhoto from "@/assets/devendra-photo.png";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const About = () => {
  return (
    <div id="about" className="min-h-screen py-24 px-8 md:px-16 relative z-0">
      {/* Shortened peach background rectangle with negative left to cover sidebar content */}
      <div className="absolute inset-y-8 left-[-14%] right-0 bg-[#ffece4] -z-10 transition-all duration-500 rounded-3xl" />
      
      {/* Hero */}
      <section className="min-h-[70vh] flex items-center">
        <div className="flex flex-col md:flex-row items-center gap-12 w-full">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary text-xs uppercase tracking-[0.3em] font-display mb-4">
              about
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Devendra
              <br />
              Jeswani
            </h1>
            <div className="mt-6 space-y-4 text-muted-foreground text-sm leading-relaxed max-w-lg">
              <p>
                Devendra Jeswani is a <span className="text-foreground font-medium">Geophysics student at IIT Kharagpur</span> & an aspiring Product Manager.
              </p>
              <p>
                With a passion for building people-first digital products, he combines analytical thinking from his engineering background with creative problem-solving and user empathy.
              </p>
              <p>
                From leading campus societies to working on real-world product solutions during internships, Devendra brings a unique blend of technical depth and strategic vision to everything he builds.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-72 h-96 md:w-80 md:h-[28rem] rounded-lg overflow-hidden">
              <img
                src={devendraPhoto}
                alt="Devendra Jeswani"
                className="w-full h-full object-cover"
                width={320}
                height={448}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Details */}
      <ScrollReveal>
        <section className="py-20 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-foreground mb-4">Education</h3>
              <p className="text-sm text-foreground font-medium">IIT Kharagpur</p>
              <p className="text-sm text-muted-foreground">BSc in Geology and Geophysics</p>
              <p className="text-sm text-muted-foreground mb-4">2023 – Present</p>

              <p className="text-sm text-foreground font-medium">Primary School</p>
              <p className="text-sm text-muted-foreground">Sacred Heart School, Rayagada</p>
            </div>
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-foreground mb-4">Skills</h3>
              <p className="text-sm text-muted-foreground transition-all duration-300 hover:text-primary cursor-default">General Management</p>
              <p className="text-sm text-muted-foreground transition-all duration-300 hover:text-primary cursor-default">Canva & Figma</p>
              <p className="text-sm text-muted-foreground transition-all duration-300 hover:text-primary cursor-default">Python, SQL</p>
              <p className="text-sm text-muted-foreground transition-all duration-300 hover:text-primary cursor-default">Notion</p>
              <p className="text-sm text-muted-foreground transition-all duration-300 hover:text-primary cursor-default">Tableau & BI</p>
            </div>            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-foreground mb-4 italic">get in touch</h3>
              <h4 className="font-display text-lg font-bold text-foreground mb-6 leading-tight">Let's build<br />something.</h4>
              
              <div className="space-y-4">
                <a
                  href="mailto:devendrajeswani55@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group text-sm"
                >
                  <Mail size={18} strokeWidth={1.5} />
                  <span className="group-hover:underline underline-offset-4">Email</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/devendra-jeswani-b63388294/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group text-sm"
                >
                  <Linkedin size={18} strokeWidth={1.5} />
                  <span className="group-hover:underline underline-offset-4">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/DevendraJeswani/Portfolio_Website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group text-sm"
                >
                  <Github size={18} strokeWidth={1.5} />
                  <span className="group-hover:underline underline-offset-4">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>

  );
};

export default About;
