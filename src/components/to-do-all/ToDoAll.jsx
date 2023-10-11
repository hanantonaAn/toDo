import React, { useState } from 'react';
import styles from './ToDoAll.module.css';
import ToDo from '../to-do/ToDo';

const ToDoAll = () => {
  const [list, setList] = useState([
    {
      id: 0,
      title: 'Do homework',
      type: 'Basic',
      descripion: 'English, p12 ex1',
    },
    {
      id: 1,
      title: 'Do house work',
      type: 'Home',
      descripion: 'Dishes',
    },
    {
      id: 2,
      title: 'House',
      type: 'House',
      descripion: 'Clean windows',
    },
    {
      id: 3,
      title: 'Work',
      type: 'Bissnes',
      descripion: 'Send email',
    },
    {
      id: 4,
      title: 'Do homework',
      type: 'Basic',
      descripion: 'English, p12 ex1',
    },
    {
      id: 5,
      title: 'Do workout',
      type: 'Body',
      descripion: 'Tabata',
    },
  ]);

  const clickDelete = (id) => {
    setList((list) => list.filter((i) => i.id !== id));
  };

  return (
    <div className={styles.toDoAll}>
      {list.length ? (
        list.map((todo) => {
          return (
            <ToDo
              key={todo.id}
              todo={todo}
              onDelete={() => clickDelete(todo.id)}
            />
          );
        })
      ) : (
        <p>Nothing</p>
      )}
    </div>
  );
};

export default ToDoAll;
