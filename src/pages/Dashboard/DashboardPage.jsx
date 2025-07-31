import React from 'react';
import styles from './DashboardPage.module.css';

const DashboardPage = () => {
  return (
    <div className={styles.dashboardContainer}>
      <h1>📊 Dashboard</h1>
      <p>Welcome back! Here’s a quick look at your recent activity and metrics.</p>

      <div className={styles.cardsGrid}>
        <div className={styles.card}>
          <h3>👥 Users</h3>
          <p>1,452</p>
        </div>
        <div className={styles.card}>
          <h3>📩 Messages</h3>
          <p>812</p>
        </div>
        <div className={styles.card}>
          <h3>💼 Projects</h3>
          <p>34</p>
        </div>
        <div className={styles.card}>
          <h3>⚙️ Settings</h3>
          <p>Update preferences</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
