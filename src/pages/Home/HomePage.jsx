import React from 'react';
import styles from './HomePage.module.css';
import { Button, Card } from '../../components/common';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div>
          <h1>Welcome to MyReactApp 🚀</h1>
          <p>Your all-in-one learning and development platform.</p>
          <Button text="Get Started" onClick={() => alert("Let's go!")} />
        </div>
        <img src="/assets/images/hero.jpg" alt="Hero" className={styles.heroImage} />
      </section>

      <section className={styles.cards}>
        <Card title="Learn" description="Explore tutorials and guides." />
        <Card title="Build" description="Create stunning projects with ease." />
        <Card title="Deploy" description="Host your apps with one click." />
      </section>
    </div>
  );
};

export default HomePage;
