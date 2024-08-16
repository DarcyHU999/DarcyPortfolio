// frontend/components/Contact.tsx
import styles from "@/styles/Contact.module.css";

const Contact = () => (
  <section id="contact" className={styles.contact}>
    <h2>Contact</h2>
    <form className={styles.form}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Message:
        <textarea name="message"></textarea>
      </label>
      <button type="submit">Send</button>
    </form>
    <div className={styles.socials}>
      <a href="https://linkedin.com">LinkedIn</a>
      <a href="https://github.com">GitHub</a>
      <a href="https://twitter.com">Twitter</a>
    </div>
  </section>
);

export default Contact;
