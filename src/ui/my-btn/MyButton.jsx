import React from 'react';
import styles from './MyButton.module.css';

const MyButton = ({ name, onClick }) => {
  return (
    <button className={styles.myButton} onClick={onClick}>
      {name}
    </button>
  );
};

export default MyButton;
