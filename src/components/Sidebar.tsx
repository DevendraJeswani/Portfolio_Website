import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Sidebar = () => {
  return (
    <nav className="fixed left-0 top-0 h-full w-48 md:w-56 lg:w-72 z-50 flex flex-col justify-center py-10 px-8 lg:px-12 bg-transparent pointer-events-none transition-all duration-300">
      <ul className="space-y-5 text-right pointer-events-auto">
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `text-xl font-mono tracking-wide transition-all duration-200 inline-block hover:font-bold hover:scale-105 origin-right ${
                  isActive
                    ? "text-pink-500 font-bold scale-105"
                    : "text-foreground hover:text-pink-400"
                }`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
