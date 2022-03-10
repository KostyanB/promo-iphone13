import React, { useState } from 'react';
import styled from 'styled-components';
import Media from 'react-media';
import { useNavContext } from '../../context';

import env from '../../env.json';

import { MenuIcon } from '../Styled/Icons/Icons';

const { hoverColor, mainColor } = env.colors;

const Burger = styled.button`
  color: ${mainColor};
  display: ${props => (props.isVisible ? 'block' : 'none')};

  &:hover {
    color: ${hoverColor};
  }
`;

const BurgerButton = () => {
  const { toggleNav, closeNav } = useNavContext();

  const [isVisible, setIsVisible] = useState(false);

  const showBurger = () => {
    closeNav();
    setIsVisible(true);
  };

  const hideBurger = () => {
    closeNav();
    setIsVisible(false);
  };

  return (
    <>
      <Media
        queries={{
          isBurger: '(max-width: 768px)',
          noBurger: '(min-width: 769px)',
        }}
        onChange={matches => {
          matches.isBurger && showBurger();
          matches.noBurger && hideBurger();
        }}
      />
      <Burger isVisible={isVisible} onClick={toggleNav} id='burger'>
        <MenuIcon width={40} height={34} />
      </Burger>
    </>
  );
};
export default BurgerButton;
