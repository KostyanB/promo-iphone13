import React, { useEffect, lazy } from 'react';
import { useLocation } from 'react-router-dom';
import {
  SelectedModelContextProvider,
  ModalContextProvider,
} from '../../context';
import scrollToSection from '../../helpers/scrollToSection';

import Present from '../Present';
import Modal from '../Modal';

const Card = lazy(() => import('../Card'));
const Characteristic = lazy(() => import('../Characteristic'));
const CrossSell = lazy(() => import('../CrossSell'));

const Main = () => {
  const location = useLocation();

  useEffect(() => {
    const targetId = location.pathname.split('/')[2];
    targetId && scrollToSection(targetId);
  }, [location]);

  return (
    <main>
      <SelectedModelContextProvider>
        <Present />
        <ModalContextProvider>
          <Card />
          <Characteristic />
          <CrossSell />
          <Modal />
        </ModalContextProvider>
      </SelectedModelContextProvider>
    </main>
  );
};
export default Main;
