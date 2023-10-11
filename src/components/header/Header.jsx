import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="wrapper">
        <div className={styles.about}>
          <div className={styles.logo}>
            <img src="/assets/logo.svg" alt="Logo" />
            <p>To Do List</p>
          </div>
          <p>Create task and track your progress</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
