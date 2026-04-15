import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import devendraPhoto from "@/assets/devendra-photo.png";

const About = () => {
  return (
    <div className="min-h-screen py-16 px-8 md:px-16">
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
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-foreground mb-4">Interests</h3>
              <p className="text-sm text-muted-foreground">Product Management</p>
              <p className="text-sm text-muted-foreground">User Experience Design</p>
              <p className="text-sm text-muted-foreground">Data-Driven Decision Making</p>
            </div>
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-foreground mb-4">Currently</h3>
              <p className="text-sm text-muted-foreground">Exploring PM roles</p>
              <p className="text-sm text-muted-foreground">Building side projects</p>
              <p className="text-sm text-muted-foreground">IIT KGP campus life</p>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default About;
