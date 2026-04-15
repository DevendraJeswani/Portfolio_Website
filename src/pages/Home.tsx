import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import placeholder1 from "@/assets/placeholder-1.jpg";
import placeholder2 from "@/assets/placeholder-2.jpg";
import placeholder3 from "@/assets/placeholder-3.jpg";
import placeholderCampus from "@/assets/placeholder-campus.jpg";
import placeholder4 from "@/assets/placeholder-4.jpg";
import placeholder5 from "@/assets/placeholder-5.jpg";
import placeholder6 from "@/assets/placeholder-6.jpg";

const timelineData = [
  { num: "01", year: "2005–2020", title: "Primary Education", desc: "Completed my primary education in Sacred Heart School, Rayagada. Happy part of life", image: "/sacred-heart.png", side: "left" },
  { num: "02", year: "Till 2022", title: "higher education", desc: "Chose field of science and decided to prepare for JEE online with St. Xavier's High school", image: "/st-xaviers.jpg", side: "right" },
  { num: "03", year: "2022–2023", title: "the kota grind", desc: "A pivotal year of intense focus, resilience, and discipline. The defining transition into engineering.", image: "/allen-kota.png", side: "left" },
  { num: "04", year: "2023", title: "joined IIT Kharagpur", desc: "Cleared JEE and stepped into the historic campus of IIT KGP. Achieved a dream", image: "/iit-kgp-campus.png", side: "right" },
  { num: "05", year: "2023–2025", title: "exploration", desc: "exploration worked in Socities, cell and organzied various events", image: "/e-cell.png", side: "left" },
  { num: "06", year: "Summer 2025", title: "first step", desc: "Finally got the 1st internship after a lot of effort", image: "/livguard-timeline.png", side: "right" },
  { num: "07", year: "2025–2026", title: "the hustle", desc: "Completed various projects, competitions and remote internships to learn", image: "/hustle-checklist.png", side: "left" },
  { num: "08", year: "2026+", title: "future focus", desc: "Looking forward to new learnings, leading products, and defining the digital future.", image: "/future-focus-vision.png", side: "right" },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="min-h-[85vh] flex flex-col md:flex-row items-center justify-between px-8 md:px-16 gap-12 w-full max-w-7xl mx-auto pt-20 md:pt-0">
        <div className="max-w-2xl flex-1 z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary text-xl">✦</span>
            </div>
            <h1 className="font-display text-6xl md:text-[5rem] lg:text-[7rem] font-bold leading-[0.9] tracking-tight text-foreground uppercase">
              Devendra
              <br />
              Jeswani
            </h1>
            <p className="mt-6 text-muted-foreground text-lg md:text-xl max-w-md font-body">
              a Student from IIT Kharagpur.
              <br />I get things done.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <a
                href="#journey"
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-display font-medium tracking-wide uppercase hover:opacity-90 transition-opacity"
              >
                view journey
              </a>
              <a
                href="#work"
                className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
              >
                explore archive →
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="flex-1 w-full max-w-md md:max-w-lg relative mt-12 md:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl relative bg-muted"
          >
            <img 
              src="/profile.jpg" 
              alt="Devendra Jeswani Profile" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out" 
            />
          </motion.div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section id="journey" className="py-24 px-8 md:px-16 w-full relative z-0">
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="font-display text-5xl md:text-7xl font-bold text-foreground leading-tight">
              My Timeline
            </h2>
          </div>
        </ScrollReveal>
        {/* Shortened peach background rectangle with negative left to cover sidebar content */}
        <div className="absolute inset-y-0 left-[-14%] right-[10%] bg-[#ffece4] -z-10 transition-all duration-500 rounded-3xl" />
        
        <div className="w-full pr-[15%] space-y-20 mt-12 block">
          {timelineData.map((item, i) => {
            const yearStr = item.year;
            let formattedYear: React.ReactNode = yearStr;
            if (yearStr.includes("–")) {
              const parts = yearStr.split("–");
              formattedYear = <>{parts[0]}–<br />{parts[1]}</>;
            } else if (yearStr.includes("-")) {
              const parts = yearStr.split("-");
              formattedYear = <>{parts[0]}-<br />{parts[1]}</>;
            } else if (yearStr.includes(" ")) {
              const parts = yearStr.split(" ");
              formattedYear = <>{parts[0]}<br />{parts.slice(1).join(" ")}</>;
            }

            return (
            <ScrollReveal key={item.num} delay={0.1}>
              <motion.div
                initial={{ scale: 0.95, opacity: 0.7 }}
                whileInView={{ scale: 1.03, opacity: 1 }}
                viewport={{ amount: 0.5, once: false }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 justify-center ${
                  item.side === "right" ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Desktop Year Float */}
                <div className={`hidden md:block self-start -mt-2 ${item.side === "right" ? "ml-8" : "mr-8"}`}>
                   <span className="text-4xl lg:text-[4rem] xl:text-[5rem] leading-tight font-mono text-pink-400 opacity-60 block tracking-tight">{formattedYear}</span>
                </div>

                {/* Text Side (Mobile Year included) */}
                <div className={`flex-1 flex flex-col ${item.side === "right" ? "md:items-end md:text-right" : "md:items-start md:text-left"}`}>
                  <span className="md:hidden text-4xl font-mono text-pink-400 opacity-60 mb-4 block tracking-tight">{formattedYear}</span>
                  <motion.h3 
                    className="font-display text-3xl font-bold text-foreground mt-2"
                    whileInView={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p 
                    className="text-base text-muted-foreground mt-4 max-w-sm leading-relaxed"
                    whileInView={{ color: "var(--foreground)" }}
                    transition={{ duration: 0.4 }}
                  >
                    {item.desc}
                  </motion.p>
                </div>
                
                {/* Image side */}
                <div className="flex-1 w-full flex justify-center relative">
                  <motion.div
                    className="w-full max-w-xl rounded-2xl overflow-hidden bg-[#ffece4]/40 shadow-md border border-[#f5d5c5]/50"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto block"
                      loading="lazy"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </ScrollReveal>
          )})}
        </div>
      </section>

    </div>
  );
};

export default Home;
