import Link from "next/link";
import MenuHorizon from "@/components/menuHorizon";
import { useState } from "react";
const navItems = [
  { href: "/about", label: "About" },
  { href: "/qualifications", label: "Qualifications" },
  { href: "/projects", label: "Projects" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const toggleExpand = () => {
    setIsMenuOpen(!isMenuOpen);
    setHasAnimated(true); 
  };

  const handleAnimationEnd = () => {
    setHasAnimated(false);
  };
  return (
    <div className="xl:relative fixed w-full top-0 right-0 z-10">
      {
        <nav
          className={`overflow-hidden flex flex-col h-full  min-h-screen xl:flex-row justify-center bg-white xl:justify-evenly items-center xl:bg-gradient-to-r xl:from-blue-500 xl:to-blue-700 xl:rounded-l-50 xl:rounded-br-50 xl:rounded-tr-10 text-blue-300 xl:text-gray-200 xl:pr-16 xl:h-16 xl:min-h-10 fixed xl:absolute top-0 right-0 px-0 ${
            hasAnimated
              ? isMenuOpen
                ? "animate-menu-expand"
                : "animate-menu-collapse"
              : isMenuOpen
              ? "w-full px-5"
              : "w-0"
          }`}
          onAnimationEnd={handleAnimationEnd}
        >
          {navItems.map((i) => {
            return (
              <Link key={i.href + "-key"} href={i.href} passHref>
                <button
                  className={`my-5 text-5xl xl:text-lg text-center hover:text-blue-500 xl:hover:text-white overflow-hidden active:scale-95 ${
                    hasAnimated
                      ? isMenuOpen
                        ? "animate-text-expand"
                        : "animate-text-collapse"
                      : isMenuOpen
                      ? "w-auto"
                      : "w-0"
                  }`}
                >
                  {i.label}
                </button>
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
