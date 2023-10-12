import React, { useState } from 'react';
import styles from './ToDoAll.module.css';
import ToDo from '../to-do/ToDo';
import MyButton from '../../ui/my-btn/MyButton';
import NewToDo from '../new-to-do/NewToDo';
import useModal from '../hooks/useModal';
import ChangeToDo from '../change-to-do/ChangeToDo';
import useLocalStorage from 'use-local-storage';

const ToDoAll = () => {
  const [list, setList] = useLocalStorage('list', '');
  const { open, changeModal } = useModal();
  const clickDelete = (id) => {
    setList((list) => list.filter((i) => i.id !== id));
  };

  const add = (title, type, description) => {
    setList((prev) => [
      ...prev,
      { id: prev.length + 1, isDone: false, title, type, description },
    ]);
  };

  const change = (todo) => {
    const { id, title, type, description } = todo;
    setList(
      list.map((item) =>
        item.id == id
          ? { ...item, title: title, type: type, description: description }
          : item
      )
    );
  };

  const makeDone = (todo) => {
    const { id, isDone } = todo;
    setList(
      list.map((item) => (item.id == id ? { ...item, isDone: !isDone } : item))
    );
  };

  const {
    open: openEdit,
    changeModal: changeModalEdit,
    item,
    handleOpenChangeModal,
  } = useModal();

  return (
    <div className={styles.toDoAll}>
      <MyButton name={'+ New task'} onClick={changeModal} />
      <NewToDo
        open={open}
        handleCloseModal={changeModal}
        close={changeModal}
        add={add}
      />
      {item && (
        <ChangeToDo
          open={openEdit}
          handleCloseModal={changeModalEdit}
          todo={item}
          change={change}
        />
      )}
      {list.length ? (
        list.map((todo) => {
          return (
            <ToDo
              key={todo.id}
              todo={todo}
              change={() => handleOpenChangeModal(todo)}
              onDelete={() => clickDelete(todo.id)}
              makeDone={() => makeDone(todo)}
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
