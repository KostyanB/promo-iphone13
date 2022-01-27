import { useState } from 'react';

const useScrollOffset = () => {
  const [scrollOffset, setScrollOffset] = useState(0);

  const setOffset = () => {
    const offset = document.getElementsByTagName('header')[0].clientHeight;
    offset && setScrollOffset(-offset);
  };

  return {
    scrollOffset,
    setScrollOffset,
    setOffset,
  };
};
export default useScrollOffset;
