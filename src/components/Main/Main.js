import React, { useEffect, lazy, useRef, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import {
  SelectedModelContextProvider,
  ModalContextProvider,
} from '../../context';
// seamless-polifill for Safari support
import { elementScrollIntoView } from 'seamless-scroll-polyfill';

import Section from '../Styled/Section';
import Present from '../Present';
import Modal from '../Modal';

const Card = lazy(() => import('../Card'));
const Characteristic = lazy(() => import('../Characteristic'));
const CrossSell = lazy(() => import('../CrossSell'));

const Main = () => {
  const location = useLocation();
  const presentRef = useRef(null);
  const cardRef = useRef(null);
  const characteristicsRef = useRef(null);
  const crossSellRef = useRef(null);

  const refs = useMemo(
    () => ({
      present: presentRef,
      card: cardRef,
      characteristics: characteristicsRef,
      'cross-sell': crossSellRef,
    }),
    [presentRef, cardRef, characteristicsRef, crossSellRef],
  );

  useEffect(() => {
    const target = location.pathname.split('/')[2];
    const section = refs[target]?.current;

    section &&
      elementScrollIntoView(section, {
        behavior: 'smooth',
        block: 'start',
      });
  }, [location, refs]);

  return (
    <main>
      <SelectedModelContextProvider>
        <Section ref={presentRef}>
          <Present />
        </Section>
        <ModalContextProvider>
          <Section ref={cardRef}>
            <Card />
          </Section>
          <Section ref={characteristicsRef}>
            <Characteristic />
          </Section>
          <Section ref={crossSellRef}>
            <CrossSell />
          </Section>
          <Modal />
        </ModalContextProvider>
      </SelectedModelContextProvider>
    </main>
  );
};
export default Main;
