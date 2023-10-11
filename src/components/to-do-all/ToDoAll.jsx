import React, { useState } from 'react';
import styles from './ToDoAll.module.css';
import ToDo from '../to-do/ToDo';
import MyButton from '../../ui/my-btn/MyButton';
import NewToDo from '../new-to-do/NewToDo';

const ToDoAll = () => {
  const [list, setList] = useState([
    {
      id: 0,
      title: 'Do homework',
      type: 'Basic',
      description: 'English, p12 ex1',
    },
    {
      id: 1,
      title: 'Do house work',
      type: 'Home',
      description: 'Dishes',
    },
    {
      id: 2,
      title: 'House',
      type: 'House',
      description: 'Clean windows',
    },
    {
      id: 3,
      title: 'Work',
      type: 'Bissnes',
      description: 'Send email',
    },
    {
      id: 4,
      title: 'Do homework',
      type: 'Basic',
      description: 'English, p12 ex1',
    },
    {
      id: 5,
      title: 'Do workout',
      type: 'Body',
      description: 'Tabata',
    },
  ]);
  const [newModal, setNewModal] = useState(false);

  const clickDelete = (id) => {
    setList((list) => list.filter((i) => i.id !== id));
  };

  const handleCloseModal = () => {
    setNewModal(false);
  };

  const clickNewTask = () => {
    setNewModal(true);
  };

  return (
    <div className={styles.toDoAll}>
      <MyButton name={'+ New task'} onClick={clickNewTask} />
      <NewToDo
        open={newModal}
        handleCloseModal={handleCloseModal}
        close={handleCloseModal}
        setList={setList}
      />
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
