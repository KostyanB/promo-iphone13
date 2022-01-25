import { useState } from 'react';

const useFalloutNav = () => {
  const [isOpenNav, setisOpenNav] = useState(true);
  const [isVisibleNav, setisVisibleNav] = useState(true);

  const toggleNav = () => {
    !isVisibleNav && setisVisibleNav(true);
    setisOpenNav(!isOpenNav);
  };
  const closeNav = () => setisOpenNav(false);

  const showBurger = () => {
    setisOpenNav(false);
    setisVisibleNav(!isVisibleNav);
  };

  const hideBurger = () => {
    setisVisibleNav(true);
  };

  return {
    isOpenNav,
    setisOpenNav,
    isVisibleNav,
    setisVisibleNav,
    toggleNav,
    closeNav,
    showBurger,
    hideBurger,
  };
};
export default useFalloutNav;
