import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useNavContext } from '../../context';
import env from '../../env.json';
import NavItems from './NavItems';

const {
  colors: { backgroundColor },
  transitionDuration,
} = env;

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  flex-grow: 1;
  padding: 20px;

  @media (max-width: 768px) {
    position: absolute;
    top: 55px;
    right: 0;
    flex-direction: column;
    align-items: flex-end;
    flex-grow: 0;
    gap: 10px;
    padding-right: 0;
    background-color: ${backgroundColor};
    z-index: 101;
    transform: translateY(-200%);

    &.isOpen {
      transform: translateY(0);
      transition: transform ${transitionDuration};
    }
  }
`;

const NavList = () => {
  const { isOpenNav, closeNav } = useNavContext();

  // закрытие по клику мимо меню
  const rootEl = useRef(null);

  useEffect(() => {
    const onClick = e => {
      const isClickPastNav =
        !rootEl.current?.contains(e.target) &&
        !e.target.closest('#burgerNav') &&
        !e.target.closest('#burger');

      isClickPastNav && closeNav();
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [rootEl, closeNav]);

  return (
    <List id='burgerNav' className={isOpenNav ? 'isOpen' : ''}>
      <NavItems />
    </List>
  );
};
export default NavList;
