import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
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

const AppRoutes = ({ location }) => (
  <Routes location={location}>
    <Route path='/' element={<Header />}>
      <Route index element={<Main />} />
      <Route path='main' element={<Main />}>
        <Route index element={<Main />} />
        <Route path='present' element={<Present />} />
        <Route path='card' element={<Card />} />
        <Route path='characteristics' element={<Characteristic />} />
        <Route path='cross-sell' element={<CrossSell />} />
      </Route>
      <Route path='delivery-terms' element={<DeliveryTerms animate={true} />} />
      <Route path='feedback' element={<Feedbacks animate={true} />} />
      <Route path='*' element={<Page404 />} />
    </Route>
  </Routes>
);

export default AppRoutes;
