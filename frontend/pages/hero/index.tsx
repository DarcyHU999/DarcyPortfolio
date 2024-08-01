// frontend/components/Hero.tsx
import styles from '@/styles/Hero.module.css'

const Hero = () => (
  <section id="home" className={styles.hero}>
    <div className={styles.heroContent}>
      <h1>Your Name</h1>
      <p>Senior Front-End Developer</p>
      <a href="#projects" className={styles.btn}>View My Work</a>
    </div>
  </section>
);

export default Hero;
