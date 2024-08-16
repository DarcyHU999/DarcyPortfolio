// frontend/components/Navbar.tsx
import Link from "next/link";
import MenuHorizon from "@/components/menuHorizon";
import { useState } from "react";
const navItems = [
  { href: "/home", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/about", label: "About" },
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
    <div className="xl:relative fixed w-full top-0 right-0 z-10">
      {
        <nav
          className={`flex flex-col h-full  min-h-screen xl:flex-row justify-center bg-white xl:justify-evenly items-center xl:bg-gradient-to-r xl:from-blue-500 xl:to-blue-700 xl:rounded-l-50 xl:rounded-br-50 xl:rounded-tr-10 text-blue-300 xl:text-gray-200 xl:pr-16 xl:h-16 xl:min-h-10 fixed xl:absolute top-0 right-0 ${
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
                className={`text-5xl xl:text-lg text-center hover:text-blue-500 xl:hover:text-white overflow-hidden ${
                  hasAnimated
                    ? isMenuOpen
                      ? "animate-text-expand"
                      : "animate-text-collapse"
                    : isMenuOpen
                      ? "w-auto"
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
      <div className={"absolute top-0 right-0"}>
        <MenuHorizon isMenuOpen={isMenuOpen} toggleExpand={toggleExpand} />
      </div>
    </div>
  );
};

export default Navbar;
