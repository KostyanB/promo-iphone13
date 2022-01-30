import React, { createContext } from 'react';
import useCurrentModel from '../../hooks/useCurrentModel';
import useOpenModal from '../../hooks/useOpenModal';

export const MainContext = createContext();

export const MainContextProvider = props => {
  const currentModel = useCurrentModel();
  const openModal = useOpenModal();

  return (
    <MainContext.Provider
      value={{
        currentModel,
        openModal,
      }}>
      {props.children}
    </MainContext.Provider>
  );
};
