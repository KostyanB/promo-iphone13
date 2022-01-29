import React, { lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';
// components
import Main from '../Main';
import Page404 from '../Page404';
import Header from '../Header';
import Present from '../Present';

const Card = lazy(() => import('../Card'));
const Characteristic = lazy(() => import('../Characteristic'));
const CrossSell = lazy(() => import('../CrossSell'));
const DeliveryTerms = lazy(() => import('../DeliveryTerms'));
const Feedbacks = lazy(() => import('../Feedbacks'));

const AnimatedRoutes = () => {
  const location = useLocation();

  const transitionToPage = useTransition(location, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    onRest: {
      display: 'grid',
    },
  });
  /*
   * в стиль animated.div добавлен gridArea: '1/-1' для компенсации
   * смещения при одновременном роутинге двух element
   * #root задан 'display: grid'
   */
  return transitionToPage((props, item) => (
    <animated.div style={{ ...props, gridArea: '1/-1' }}>
      <Routes location={item}>
        <Route path="/" element={<Header />}>
          <Route index element={<Main />} />
          <Route path="main" element={<Main />}>
            <Route path="*" element={<Main />} />
            <Route path="present" element={<Present />} />
            <Route path="card" element={<Card />} />
            <Route path="characteristics" element={<Characteristic />} />
            <Route path="cross-sell" element={<CrossSell />} />
          </Route>
          <Route
            path="delivery-terms"
            element={<DeliveryTerms animate={true} />}
          />
          <Route path="feedback" element={<Feedbacks animate={true} />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </animated.div>
  ));
};
export default AnimatedRoutes;
