import React, { createContext, useContext, useState, useMemo } from 'react';

const NavContext = createContext();

export const useNavContext = () => useContext(NavContext);

export const NavContextProvider = props => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [isVisibleNav, setIsVisibleNav] = useState(true);

  const value = useMemo(
    () => ({
      isOpenNav,
      isVisibleNav,
      toggleNav: () => {
        setIsVisibleNav(!isVisibleNav);
        setIsOpenNav(!isOpenNav);
      },
      closeNav: () => setIsOpenNav(false),
    }),
    [isOpenNav, isVisibleNav],
  );

  return (
    <NavContext.Provider value={value}>{props.children}</NavContext.Provider>
  );
};
