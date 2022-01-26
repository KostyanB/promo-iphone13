import { useState, useEffect } from 'react';

const useScrollOffset = () => {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const offset = document.querySelector('header').offsetHeight;
    offset && setScrollOffset(-offset);
  }, []);
  return {
    scrollOffset,
    setScrollOffset,
  };
};
export default useScrollOffset;
