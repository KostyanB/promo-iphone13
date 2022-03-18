import React from 'react';
import { useLocation } from 'react-router-dom';
import { animated, useTransition, config } from 'react-spring';
// components
import AppRoutes from '../AppRoutes';

const AnimatedRoutes = () => {
  const location = useLocation();

  const transitionToPage = useTransition(location, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.slow,
  });
  /*
   * в стиль animated.div добавлен gridArea: '1/-1' для компенсации
   * смещения при одновременном роутинге двух element
   * #root задан 'display: grid'
   */
  return transitionToPage((props, item) => (
    <animated.div style={{ ...props, gridArea: '1/-1' }}>
      <AppRoutes location={item} />
    </animated.div>
  ));
};

export default AnimatedRoutes;
