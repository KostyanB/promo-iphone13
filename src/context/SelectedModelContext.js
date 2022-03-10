import React, { createContext, useContext } from 'react';
import useSelectedModel from '../hooks/useSelectedModel';

const SelectedModelContext = createContext();
export const useSelectedModelContext = () => useContext(SelectedModelContext);

export const SelectedModelContextProvider = props => {
  const selectedModel = useSelectedModel();

  return (
    <SelectedModelContext.Provider
      value={{
        selectedModel,
      }}
    >
      {props.children}
    </SelectedModelContext.Provider>
  );
};
