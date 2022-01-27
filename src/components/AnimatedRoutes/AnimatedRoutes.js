import React, { lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';
// components
import Main from '../Main';
import Page404 from '../Page404';
import Header from '../Header';
const DeliveryTerms = lazy(() => import('../DeliveryTerms'));
const Feedbacks = lazy(() => import('../Feedbacks'));

const AnimatedRoutes = () => {
  const location = useLocation();
  console.log('location: ', location);

  const transitionToPage = useTransition(location, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const transitionToSection = useTransition(location, {});

  return transitionToPage((props, item) => (
    <animated.div style={props}>
      <Routes location={item}>
        <Route path="/" element={<Header />}>
          <Route index element={<Main />} />
          <Route path="main" element={<Main />} />
          <Route path="delivery-terms" element={<DeliveryTerms />} />
          <Route path="feedback" element={<Feedbacks />} />
        </Route>
        <Route path="*" element={<Page404 />} />
        {/* <Route path="*" element={<Page404 />} /> */}
      </Routes>
    </animated.div>
  ));
};
export default AnimatedRoutes;
