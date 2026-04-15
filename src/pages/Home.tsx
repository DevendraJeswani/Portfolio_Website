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
  { num: "01", year: "2005–2020", title: "completed high school", desc: "Foundation years, exploring interests and building the curiosity that defines her Kota.", image: placeholder1, side: "left" },
  { num: "02", year: "Till 2022", title: "higher education", desc: "Narrowing focus and embracing complex challenges in science and technology.", image: placeholder2, side: "right" },
  { num: "03", year: "2022–2023", title: "the kota grind", desc: "A pivotal year of intense focus, resilience, and discipline. The defining transition into engineering.", image: placeholder6, side: "left" },
  { num: "04", year: "2023", title: "joined IIT Kharagpur", desc: "Cleared JEE and stepped into the historic campus of IIT KGP to pursue Geophysics.", image: placeholderCampus, side: "right" },
  { num: "05", year: "2023–2025", title: "exploration", desc: "Active leadership in campus societies, event management, and building people-first products.", image: placeholder4, side: "left" },
  { num: "06", year: "Summer 2025", title: "first step", desc: "Completed first professional internship, translating theory into real-world product solutions.", image: placeholder3, side: "right" },
  { num: "07", year: "2025–2026", title: "the hustle", desc: "3rd year projects, product management competitions, and remote internships with global teams.", image: placeholder5, side: "left" },
  { num: "08", year: "2026+", title: "future focus", desc: "Looking forward to new learnings, leading products, and defining the digital future.", image: placeholder5, side: "right" },
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
                href="/work"
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
        {/* Shortened peach background rectangle with negative left to cover sidebar content */}
        <div className="absolute inset-y-0 left-[-14%] right-[10%] bg-[#ffece4] -z-10 transition-all duration-500 rounded-3xl" />
        
        <div className="w-full pr-[15%] space-y-32 mt-12 block">
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
              <div
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
                  <h3 className="font-display text-3xl font-bold text-foreground mt-2">
                    {item.title}
                  </h3>
                  <p className="text-base text-muted-foreground mt-4 max-w-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                
                {/* Image side */}
                <div className="flex-1 w-full flex justify-center relative">
                  <motion.div
                    className="w-full max-w-lg aspect-video rounded-xl overflow-hidden bg-card shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>
          )})}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">
          © 2024 digital curator. all rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
