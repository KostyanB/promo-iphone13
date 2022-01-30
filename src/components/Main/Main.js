import React, { useEffect, useRef, useMemo, lazy } from 'react';
import { useLocation } from 'react-router-dom';
import { MainContextProvider } from '../Context';
import scrollToSection from '../../helpers/scrollToSection';

import Section from '../Styled/Section';
import Present from '../Present';
import Modal from '../Modal';

const Card = lazy(() => import('../Card'));
const Characteristic = lazy(() => import('../Characteristic'));
const CrossSell = lazy(() => import('../CrossSell'));

const Main = () => {
  const location = useLocation();
  const present = useRef();
  const card = useRef();
  const characteristics = useRef();
  const crossSell = useRef();

  const refs = useMemo(
    () => ({
      present: present,
      card: card,
      characteristics: characteristics,
      crossSell: crossSell,
    }),
    [present, card, characteristics],
  );

  useEffect(() => {
    // const id = location.hash.substring(1);
    const target = location.pathname.split('/')[2];
    const section = refs[target]?.current;
    section && scrollToSection(section);
  }, [location, refs]);

  return (
    <main>
      <MainContextProvider>
        <Section id="present" ref={present}>
          <Present />
        </Section>
        <Section id="card" ref={card}>
          <Card />
        </Section>
        <Section id="characteristics" ref={characteristics}>
          <Characteristic />
        </Section>
        <Section id="crossSell" ref={crossSell}>
          <CrossSell />
        </Section>
        <Modal />
      </MainContextProvider>
    </main>
  );
};
export default Main;
