// frontend/components/Projects.tsx
import styles from '@/styles/Projects.module.css'

const Projects = () => (
  <section id="projects" className={styles.projects}>
    <h2>Projects</h2>
    <div className={styles.projectCards}>
      <div className={styles.card}>
        {/* <img src="/project1.jpg" alt="Project 1" /> */}
        <h3>Project 1</h3>
        <p>Short description</p>
        <div className={styles.techStack}>
          <span>HTML</span><span>CSS</span><span>JavaScript</span>
        </div>
      </div>
      {/* Repeat for other projects */}
    </div>
  </section>
);

export default Projects;
