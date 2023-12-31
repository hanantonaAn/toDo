import React, { useState } from 'react';
import styles from './NewToDo.module.css';
import MyButton from '../../ui/my-btn/MyButton';
import Modal from '@mui/material/Modal';
import MyInput from '../../ui/my-input/MyInput';

const clearData = {
  id: '',
  title: '',
  type: '',
  description: '',
};

const NewToDo = ({ open, handleCloseModal, close, add }) => {
  const [input, setInput] = useState(clearData);
  const { title, type, description } = input;

  const changeInput = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const clear = () => setInput(clearData);

  const addToDo = () => {
    add(title, type, description);
    handleCloseModal();
    clear();
  };

  return (
    <div>
      <Modal open={open} onClose={close}>
        <div className={styles.modal}>
          <h1 style={{ marginBottom: '15px' }}>Enter data</h1>
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
            <MyButton name={'Clear'} onClick={clear} />
            {title != '' && type != '' && description != 0 ? (
              <MyButton name={'Add'} onClick={() => addToDo()} />
            ) : (
              <p style={{ color: 'var(--purple-color)' }}>Fill inputs</p>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default NewToDo;
