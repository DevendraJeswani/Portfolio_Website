import ScrollReveal from "@/components/ScrollReveal";
import HoverCard from "@/components/HoverCard";
import placeholder1 from "@/assets/placeholder-1.jpg";
import placeholder2 from "@/assets/placeholder-2.jpg";
import placeholder3 from "@/assets/placeholder-3.jpg";
import placeholder4 from "@/assets/placeholder-4.jpg";
import placeholder5 from "@/assets/placeholder-5.jpg";
import placeholder6 from "@/assets/placeholder-6.jpg";

const skills = [
  "General Management", "Canva & Figma", "Python", "SQL", "Notion", "Tableau", "BI",
];

const Work = () => {
  return (
    <div className="min-h-screen py-16 px-8 md:px-16">
      <ScrollReveal>
        <div className="mb-16">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground leading-tight">
            My Professional Journey
          </h1>
        </div>
      </ScrollReveal>

      {/* Internships Section Header */}
      <ScrollReveal>
        <div className="mb-8">
          <h2 className="font-display text-2xl font-bold text-foreground">
            My Internships
          </h2>
        </div>
      </ScrollReveal>

      {/* Internships */}
      <ScrollReveal>
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <HoverCard
              image="/wspl.png"
              title="WSPL"
              subtitle="Product Management Intern"
              className="aspect-square bg-white"
              imageClassName="object-contain p-6"
            />
            <HoverCard
              image="/iim.png"
              title="IIM Ranchi"
              subtitle="Research Intern"
              className="aspect-square bg-white"
              imageClassName="object-contain p-6"
            />
            <HoverCard
              image="/livguard-v2.png"
              title="Livguard"
              subtitle="Strategy Intern"
              className="aspect-square bg-white"
              imageClassName="object-contain p-6"
            />
          </div>
        </div>
      </ScrollReveal>

      {/* Curated Indices / Projects & Competitions */}
      <ScrollReveal>
        <div className="mb-20">
          <div className="flex justify-between items-baseline mb-8">
            <h2 className="font-display text-xl font-bold text-foreground">
              Competitions and Projects
            </h2>
            <span className="text-xs text-muted-foreground tracking-wider uppercase">
              02 / projects
            </span>
          </div>
          <div className="flex overflow-x-auto pb-8 gap-4 scrollbar-hide snap-x snap-mandatory">
            <HoverCard
              image="/iim-rohtak.png"
              title="IIM Ranchi"
              subtitle="Ignitus-7.0&#10;Top 4"
              tag="competition"
              className="flex-shrink-0 w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)] lg:w-[calc(20%-0.8rem)] aspect-square bg-white snap-center"
              imageClassName="object-contain p-6"
            />
            <HoverCard
              image="/iit-dhanbad.png"
              title="IIT Dhanbad"
              subtitle="Prodlblitz-3.0&#10;Top 5"
              tag="competition"
              className="flex-shrink-0 w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)] lg:w-[calc(20%-0.8rem)] aspect-square bg-white snap-center"
              imageClassName="object-contain p-6"
            />
            <HoverCard
              image="/nsut.png"
              title="NSUTS"
              subtitle="Netaji Subhas Business Case&#10;Finalist"
              tag="competition"
              className="flex-shrink-0 w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)] lg:w-[calc(20%-0.8rem)] aspect-square bg-white snap-center"
              imageClassName="object-contain p-6"
            />
            <HoverCard
              image="/bike-analysis.png"
              title="Self Project"
              subtitle="Bike and store Analysis"
              tag="Self Project"
              link="https://github.com/DevendraJeswani/Data-Analysis-Project"
              className="flex-shrink-0 w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)] lg:w-[calc(20%-0.8rem)] aspect-square bg-white snap-center"
              imageClassName="object-contain p-6"
            />
            <HoverCard
              image="/ai-review.png"
              title="Self Project"
              subtitle="AI Review Analysis"
              tag="Self Project"
              link="https://github.com/DevendraJeswani/Review-Analysis"
              className="flex-shrink-0 w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)] lg:w-[calc(20%-0.8rem)] aspect-square bg-white snap-center"
              imageClassName="object-contain p-6"
            />
            <HoverCard
              image="/green-industry-v2.png"
              title="Report"
              subtitle="Green Industry Report"
              tag="Self Project"
              link="https://www.dropbox.com/scl/fi/wnm292jchm7o97yu51rn0/Green-Hydrogen-Industry-1.pdf?rlkey=rqzqb97gf9pobr6gsr4ix3kbp&e=1&st=6ehx6f9n&bmus=1&dl=0"
              className="flex-shrink-0 w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)] lg:w-[calc(20%-0.8rem)] aspect-square bg-white snap-center"
              imageClassName="object-contain p-6"
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

    </div>
  );
};

export default Work;
