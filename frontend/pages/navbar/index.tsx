// frontend/components/Navbar.tsx
import Link from "next/link";

const navItems = [
  { href: "/home", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/about", label: "About Me" },
  { href: "/contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
];

const Navbar = () => (
  <nav className="flex justify-evenly bg-gradient-to-r from-blue-500 to-blue-700 rounded-l-50 rounded-br-50 rounded-tr-10 text-gray-200 h-10 ">
    <Link className="hover:text-white focus:text-white" href="/home">
      Home
    </Link>
    {navItems.map((i) => {
      return (
        <Link
          key={i.href + "-key"}
          className="hover:text-white focus:text-white"
          href={i.href}
        >
          {i.label}
        </Link>
      );
    })}
  </nav>
);

export default Navbar;
