import { useState } from 'react';

const useFalloutNav = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [isVisibleNav, setIsVisibleNav] = useState(true);

  const toggleNav = () => {
    setIsVisibleNav(!isVisibleNav);
    setIsOpenNav(!isOpenNav);
  };
  const closeNav = () => setIsOpenNav(false);

  return {
    isOpenNav,
    isVisibleNav,
    toggleNav,
    closeNav,
  };
};
export default useFalloutNav;
