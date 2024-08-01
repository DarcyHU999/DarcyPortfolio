// frontend/components/Navbar.tsx
import Link from 'next/link';
import styles from '@/styles/Navbar.module.css'

const Navbar = () => (
  <nav className={styles.nav}>
    <ul className={styles.navList}>
      <li><Link href="#home">Home</Link></li>
      <li><Link href="#projects">Projects</Link></li>
      <li><Link href="#skills">Skills</Link></li>
      <li><Link href="#about">About Me</Link></li>
      <li><Link href="#contact">Contact</Link></li>
      <li><Link href="#resume">Resume</Link></li>
    </ul>
  </nav>
);

export default Navbar;
