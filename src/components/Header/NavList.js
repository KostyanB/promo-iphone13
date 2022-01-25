import React, { useContext, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { NavContext } from '../Context';
import env from '../../env.json';

import NavItem from './NavItem';

const {
  colors: { backgroundColor },
  transitionDuration,
} = env;

const animationParam = `${transitionDuration} ease-in-out forwards`;

const openAnim = keyframes`
  from {
    -webkit-transform: translateY(-200%);
    transform: translateY(-200%);
  }
  to {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;
const closeAnim = keyframes`
  from {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  to {
    -webkit-transform: translateY(-200%);
    transform: translateY(-200%);
  }
`;
const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  flex-grow: 1;
  padding: 20px;
  /* transition: transform ${transitionDuration}; */
  visibility: ${props => (props.isVisibleNav ? 'visible' : 'hidden')};
  /* transform: ${props =>
    props.isOpenNav ? 'translateY(0)' : 'translateY(-200%)'}; */

  @media (max-width: 768px) {
    position: absolute;
    top: 40px;
    right: 0;
    flex-direction: column;
    align-items: flex-end;
    flex-grow: 0;
    gap: 10px;
    padding-right: 0;
    background-color: ${backgroundColor};
    z-index: 101;
    -webkit-animation: ${props => (props.isOpenNav ? openAnim : closeAnim)}
      ${animationParam};
    animation: ${props => (props.isOpenNav ? openAnim : closeAnim)}
      ${animationParam};
  }
`;

const NavList = () => {
  const {
    falloutNav: { isOpenNav, isVisibleNav, closeNav },
  } = useContext(NavContext);

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
    <List id="burgerNav" isOpenNav={isOpenNav} isVisibleNav={isVisibleNav}>
      {env.nav.map((item, i) => (
        <NavItem key={i} href={item[0]} name={item[1]} />
      ))}
    </List>
  );
};
export default NavList;
