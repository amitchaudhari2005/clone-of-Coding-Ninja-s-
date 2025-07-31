import React from 'react';
import styles from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1>About Us</h1>
      <p>
        Welcome to <strong>MyReactApp</strong> – your ultimate platform to explore, learn, and build amazing digital products.
      </p>

      <section className={styles.mission}>
        <h2>🎯 Our Mission</h2>
        <p>
          Empower developers and learners with top-notch tools, guides, and community support to bring their ideas to life.
        </p>
      </section>

      <section className={styles.team}>
        <h2>👨‍💻 Meet the Team</h2>
        <ul>
          <li><strong>Amit Chaudhari</strong> – Frontend Developer</li>
          <li><strong>Anuj Kumar</strong> – UI/UX Designer</li>
          <li><strong>Gagan Sharma</strong> – Backend Specialist</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;
