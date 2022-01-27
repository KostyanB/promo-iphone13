import React, { useEffect, useContext, lazy, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { Context, CurrentModelContextProvider } from '../Context';
import scrollToSection from '../../helpers/scrollToSection';

import Present from '../Present';

const Card = lazy(() => import('../Card'));

const Main = () => {
  const location = useLocation();

  // const {
  //   scrollOffset: { scrollOffset },
  // } = useContext(Context);

  // const scrollToSection = useCallback(
  //   id => {
  //     const section = document.getElementById(id);

  //     if (section) {
  //       console.log('scrollOffset: ', scrollOffset);
  //       const pos =
  //         section.getBoundingClientRect().top + window.pageYOffset - 116;

  //       window.scrollTo({ top: pos, behavior: 'smooth' });
  //     }
  //   },
  //   [scrollOffset],
  // );

  useEffect(() => {
    const id = location.hash.substring(1);
    scrollToSection(id);
  }, [location]);

  return (
    <main>
      <CurrentModelContextProvider>
        <Present />
        <Card />
      </CurrentModelContextProvider>
    </main>
  );
};
export default Main;
