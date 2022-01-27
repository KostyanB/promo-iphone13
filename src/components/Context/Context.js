import React, { createContext } from 'react';
import useScrollOffset from '../../hooks/useScrollOffset';

export const Context = createContext();

export const ContextProvider = props => {
  const scrollOffset = useScrollOffset();
  return (
    <Context.Provider value={{ scrollOffset }}>
      {props.children}
    </Context.Provider>
  );
};
