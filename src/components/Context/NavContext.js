import React, { createContext } from 'react';
import useFalloutNav from '../../hooks/useFalloutNav';

export const NavContext = createContext();

export const NavContextProvider = props => {
  const falloutNav = useFalloutNav();

  return (
    <NavContext.Provider
      value={{
        falloutNav,
      }}>
      {props.children}
    </NavContext.Provider>
  );
};
