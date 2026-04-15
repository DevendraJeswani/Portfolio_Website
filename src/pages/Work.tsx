import ScrollReveal from "@/components/ScrollReveal";
import HoverCard from "@/components/HoverCard";
import placeholder1 from "@/assets/placeholder-1.jpg";
import placeholder2 from "@/assets/placeholder-2.jpg";
import placeholder3 from "@/assets/placeholder-3.jpg";
import placeholder4 from "@/assets/placeholder-4.jpg";
import placeholder5 from "@/assets/placeholder-5.jpg";
import placeholder6 from "@/assets/placeholder-6.jpg";

const skills = [
  "Product Management", "UI/UX Design", "React", "TypeScript", "Next.js",
  "Python", "Figma", "Data Analysis", "User Research", "Agile",
  "Project Management", "Leadership", "Event Management", "Technical Writing",
];

const Work = () => {
  return (
    <div className="min-h-screen py-16 px-8 md:px-16">
      {/* Header */}
      <ScrollReveal>
        <div className="mb-16">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground leading-tight">
            My Professional Journey
          </h1>
        </div>
      </ScrollReveal>

      {/* Internships */}
      <ScrollReveal>
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <HoverCard
              image="/wspl.png"
              title="WSPL"
              subtitle="Product Management"
              className="aspect-square bg-white"
              imageClassName="object-contain p-8"
            />
            <HoverCard
              image="/iim.png"
              title="IIM Ranchi"
              subtitle="Research Intern"
              className="aspect-square bg-white"
              imageClassName="object-contain p-8"
            />
            <HoverCard
              image="/livguard.png"
              title="Livguard"
              subtitle="Strategy Intern"
              className="aspect-square bg-white"
              imageClassName="object-contain p-8"
            />
          </div>
        </div>
      </ScrollReveal>

      {/* Curated Indices / Projects & Competitions */}
      <ScrollReveal>
        <div className="mb-20">
          <div className="flex justify-between items-baseline mb-8">
            <h2 className="font-display text-xl font-bold text-foreground">
              Curated Indices
            </h2>
            <span className="text-xs text-muted-foreground tracking-wider uppercase">
              02 / projects
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <HoverCard
              image={placeholder4}
              title="Project Alpha"
              subtitle="Design"
              className="aspect-[4/5]"
            />
            <HoverCard
              image={placeholder5}
              title="Sprint Beta"
              subtitle="Engineering"
              className="aspect-[4/5]"
            />
            <HoverCard
              image={placeholder6}
              title="Lab Gamma"
              subtitle="Research"
              className="aspect-[4/5]"
            />
            <HoverCard
              image={placeholder2}
              title="Comp 01"
              subtitle="Competition"
              className="aspect-[4/5]"
            />
            <HoverCard
              image={placeholder1}
              title="Comp 02"
              subtitle="Competition"
              className="aspect-[4/5]"
            />
            <HoverCard
              image={placeholder3}
              title="Comp 03"
              subtitle="Competition"
              className="aspect-[4/5]"
            />
          </div>
        </div>
      </ScrollReveal>

      {/* Skills Marquee */}
      <ScrollReveal>
        <div className="py-12 border-t border-border">
          <p className="text-xs text-muted-foreground uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary inline-block" />
            technical proficiency & tools
          </p>
          <div className="overflow-hidden">
            <div className="animate-marquee flex gap-8 whitespace-nowrap">
              {[...skills, ...skills].map((skill, i) => (
                <span
                  key={i}
                  className="text-3xl md:text-5xl font-display font-light text-muted-foreground/30 flex items-center gap-8"
                >
                  {skill}
                  <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      <footer className="py-8 border-t border-border text-center">
        <p className="text-xs text-muted-foreground uppercase tracking-wider">
          © 2024 the editorial archive. curated with intention.
        </p>
      </footer>
    </div>
  );
};

export default Work;
