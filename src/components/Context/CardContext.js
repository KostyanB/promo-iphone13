import React, { createContext } from 'react';
import useCurrentModel from '../../hooks/useCurrentModel';

export const CardContext = createContext();

export const CardContextProvider = props => {
  const currentModel = useCurrentModel();

  return (
    <CardContext.Provider
      value={{
        currentModel,
      }}>
      {props.children}
    </CardContext.Provider>
  );
};
