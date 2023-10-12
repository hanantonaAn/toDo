import React, { useState } from 'react';
import styles from './ToDoAll.module.css';
import ToDo from '../to-do/ToDo';
import MyButton from '../../ui/my-btn/MyButton';
import NewToDo from '../new-to-do/NewToDo';
import useModal from '../hooks/useModal';
import ChangeToDo from '../change-to-do/ChangeToDo';

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
  const { open, changeModal } = useModal();
  const clickDelete = (id) => {
    setList((list) => list.filter((i) => i.id !== id));
  };

  const add = (title, type, description) => {
    setList((prev) => [
      ...prev,
      { id: prev.length + 1, title, type, description },
    ]);
  };

  const change = (todo) => {
    console.log(todo);
    const { id, title, type, description } = todo;
    setList(
      list.map((item) =>
        item.id == id
          ? { ...item, title: title, type: type, description: description }
          : item
      )
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
