// frontend/components/Skills.tsx
import styles from '@/styles/Skills.module.css'

const Skills = () => (
  <section id="skills" className={styles.skills}>
    <h2>Skills</h2>
    <div className={styles.skillBars}>
      <div className={styles.skill}>
        <span>HTML</span>
        <div className={styles.progressBar}><div className={styles.progress} style={{ width: '90%' }}></div></div>
      </div>
      {/* Repeat for other skills */}
    </div>
  </section>
);

export default Skills;
