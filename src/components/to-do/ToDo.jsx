import React from 'react';
import styles from './ToDo.module.css';
import MyButton from '../../ui/my-btn/MyButton';

const ToDo = ({ todo, onDelete, change, makeDone }) => {
  const { id, title, type, description, isDone } = todo;

  return (
    <div className={styles.todo}>
      <input
        type="checkbox"
        id={id}
        name={id}
        checked={isDone}
        onChange={makeDone}
      />
      <label htmlFor={id}>
        <p>{title}</p>
        <p>{type}</p>
        <p>{description}</p>
      </label>
      <div className={styles.btns}>
        <MyButton name={'Change'} onClick={change} />
        <MyButton name={'Delete'} onClick={onDelete} />
      </div>
    </div>
  );
};

export default ToDo;
