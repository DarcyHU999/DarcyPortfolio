// frontend/components/Navbar.tsx
import Link from "next/link";
import MenuHorizon from "@/components/menuHorizon";
import { useState } from "react";
const navItems = [
  { href: "/home", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/about", label: "About Me" },
  { href: "/contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const toggleExpand = () => {
    setIsMenuOpen(!isMenuOpen);
    setHasAnimated(true); // 标记为已触发动画
  };

  const handleAnimationEnd = () => {
    setHasAnimated(false);
  };
  return (
    <div className="relative">
      {
        <nav
          className={`flex justify-evenly items-center bg-gradient-to-r from-blue-500 to-blue-700 rounded-l-50 rounded-br-50 rounded-tr-10 text-gray-200 h-10 absolute z-0 ${
            hasAnimated
              ? isMenuOpen
                ? "animate-menu-expand"
                : "animate-menu-collapse"
              : isMenuOpen
              ? "w-full"
              : "w-0"
          }`}
          onAnimationEnd={handleAnimationEnd}
        >
          {navItems.map((i) => {
            return (
              <Link
                key={i.href + "-key"}
                className={`hover:text-white focus:text-white text-center overflow-hidden ${
                  hasAnimated
                    ? isMenuOpen
                      ? "animate-text-expand"
                      : "animate-text-collapse"
                    : isMenuOpen
                    ? "w-full"
                    : "w-0"
                }`}
                href={i.href}
              >
                {i.label}
              </Link>
            );
          })}
        </nav>
      }
      <div className={"absolute z-10"}>
        <MenuHorizon isMenuOpen={isMenuOpen} toggleExpand={toggleExpand} />
      </div>
    </div>
  );
};

export default Navbar;
