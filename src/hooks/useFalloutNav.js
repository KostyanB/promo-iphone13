import { useState } from 'react';

const useFalloutNav = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [isVisibleNav, setIsVisibleNav] = useState(true);

  const toggleNav = () => {
    setIsVisibleNav(!isVisibleNav);
    setIsOpenNav(!isOpenNav);
  };
  const closeNav = () => setIsOpenNav(false);

  // const showBurger = () => {
  //   setIsOpenNav(false);
  //   // setIsVisibleNav(!isVisibleNav);
  //   // setIsVisibleBtn(true);
  // };

  // const hideBurger = () => {
  //   setIsVisibleNav(true);
  //   setIsVisibleBtn(false);
  // };

  return {
    isOpenNav,
    isVisibleNav,
    // isVisibleBtn,
    toggleNav,
    closeNav,
    // showBurger,
    // hideBurger,
  };
};
export default useFalloutNav;
