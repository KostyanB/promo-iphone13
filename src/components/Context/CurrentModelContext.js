import React, { createContext } from 'react';
import useCurrentModel from '../../hooks/useCurrentModel';

export const CurrentModelContext = createContext();

export const CurrentModelContextProvider = props => {
  const currentModel = useCurrentModel();

  return (
    <CurrentModelContext.Provider
      value={{
        currentModel,
      }}>
      {props.children}
    </CurrentModelContext.Provider>
  );
};
