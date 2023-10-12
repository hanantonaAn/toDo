import React, { useEffect, useState } from 'react';
import styles from '../new-to-do/NewToDo.module.css';
import MyButton from '../../ui/my-btn/MyButton';
import Modal from '@mui/material/Modal';
import MyInput from '../../ui/my-input/MyInput';

const ChangeToDo = ({ todo, open, handleCloseModal, change }) => {
  const [input, setInput] = useState({
    id: '',
    title: '',
    type: '',
    description: '',
  });
  const { id, title, type, description } = input;

  useEffect(() => {
    setInput(todo);
  }, [todo]);

  const changeInput = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const changeToDo = () => {
    change(input);
    handleCloseModal();
  };

  return (
    <div>
      <Modal open={open} onClose={handleCloseModal}>
        <div className={styles.modal}>
          <h1 style={{ marginBottom: '15px' }}>Change data</h1>
          <MyInput
            name={'title'}
            placeholder={'Title'}
            onChange={(e) => changeInput(e)}
            val={title}
          />
          <MyInput
            name={'type'}
            placeholder={'Type'}
            onChange={(e) => changeInput(e)}
            val={type}
          />
          <MyInput
            name={'description'}
            placeholder={'Description'}
            onChange={(e) => changeInput(e)}
            val={description}
          />
          <div className={styles.btns}>
            <MyButton name={'Exit'} onClick={handleCloseModal} />
            {title != '' && type != '' && description != 0 ? (
              <MyButton name={'Add'} onClick={() => changeToDo()} />
            ) : (
              <p style={{ color: 'var(--purple-color)' }}>Null input!</p>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ChangeToDo;
