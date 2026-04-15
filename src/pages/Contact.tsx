import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center py-16 px-8 md:px-16">
      <motion.div
        className="max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-primary text-xs uppercase tracking-[0.3em] font-display mb-4">
          get in touch
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground leading-tight">
          Let's build
          <br />
          <span className="italic">something.</span>
        </h1>
        <p className="mt-6 text-muted-foreground text-sm max-w-md leading-relaxed">
          Open to conversations about product management, design, internships, and collaboration opportunities. Feel free to reach out.
        </p>

        <div className="mt-12 space-y-4">
          <a
            href="mailto:devendrajeswani55@gmail.com"
            className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
          >
            <Mail size={20} strokeWidth={1.5} />
            <span className="text-sm font-display tracking-wide group-hover:underline underline-offset-4">
              devendrajeswani55@gmail.com
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/devendra-jeswani-b63388294/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
          >
            <Linkedin size={20} strokeWidth={1.5} />
            <span className="text-sm font-display tracking-wide group-hover:underline underline-offset-4">
              LinkedIn
            </span>
          </a>
          <a
            href="#"
            className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
          >
            <Github size={20} strokeWidth={1.5} />
            <span className="text-sm font-display tracking-wide group-hover:underline underline-offset-4">
              GitHub
            </span>
          </a>
          <a
            href="#"
            className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
          >
            <Twitter size={20} strokeWidth={1.5} />
            <span className="text-sm font-display tracking-wide group-hover:underline underline-offset-4">
              Twitter / X
            </span>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
