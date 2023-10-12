import React, { useState, useEffect } from 'react';

const useModal = () => {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState();

  const changeModal = () => {
    setOpen((prev) => !prev);
  };

  const handleOpenChangeModal = (list) => {
    setOpen((prev) => !prev);
    setItem(list);
  };

  useEffect(() => {
    if (open === false) setItem(undefined);
  }, [open]);
  return {
    open,
    changeModal,
    item,
    handleOpenChangeModal,
  };
};

export default useModal;
