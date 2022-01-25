import React, { useContext } from 'react';
import styled from 'styled-components';
import Media from 'react-media';
import { NavContext } from '../Context';

import env from '../../env.json';

import { MenuIcon } from '../Styled/Icons/Icons';

const { hoverColor, mainColor } = env.colors;

const Burger = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${mainColor};

  &:hover {
    color: ${hoverColor};
  }
`;

const BurgerButton = () => {
  const {
    falloutNav: { toggleNav, showBurger, hideBurger },
  } = useContext(NavContext);

  return (
    <Media
      queries={{
        isBurger: '(max-width: 768px)',
        noBurger: '(min-width: 769px)',
      }}
      onChange={matches => {
        matches.isBurger && showBurger();
        matches.noBurger && hideBurger();
      }}>
      {matches =>
        matches.isBurger && (
          <Burger onClick={toggleNav} id="burger">
            <MenuIcon width={40} height={34} />
          </Burger>
        )
      }
    </Media>
  );
};
export default BurgerButton;
