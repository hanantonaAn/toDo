import React from 'react';
import styles from './MyInput.module.css';

const MyInput = ({ name, placeholder, onChange, val }) => {
  return (
    <input
      name={name}
      className={styles.myInput}
      placeholder={placeholder}
      onChange={onChange}
      value={val}
    ></input>
  );
};

export default MyInput;
