import React, { createContext, useContext, useState, useMemo } from 'react';

const ModalContext = createContext();

export const useModalContext = () => useContext(ModalContext);

export const ModalContextProvider = props => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const value = useMemo(
    () => ({
      isOpenModal,
      onOpenModal: () => setIsOpenModal(true),
      onCloseModal: () => setIsOpenModal(false),
    }),
    [isOpenModal],
  );

  return (
    <ModalContext.Provider value={value}>
      {props.children}
    </ModalContext.Provider>
  );
};
