const navItems = [
  { to: "#home", label: "Home" },
  { to: "#work", label: "Work" },
  { to: "#about", label: "About" },
];

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "work", "about"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 400;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed left-0 top-0 h-full w-48 md:w-56 lg:w-72 z-50 flex flex-col justify-center py-10 px-8 lg:px-12 bg-transparent pointer-events-none transition-all duration-300">
      <ul className="space-y-5 text-right pointer-events-auto">
        {navItems.map((item) => {
          const isActive = activeSection === item.to.slice(1);
          return (
            <li key={item.to}>
              <a
                href={item.to}
                className={`text-xl font-mono tracking-wide transition-all duration-200 inline-block hover:font-bold hover:scale-105 origin-right ${
                  isActive
                    ? "text-pink-500 font-bold scale-105"
                    : "text-foreground hover:text-pink-400"
                }`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

import { useState, useEffect } from "react";
export default Sidebar;
