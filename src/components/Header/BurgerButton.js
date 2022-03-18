import React from 'react';
import styled from 'styled-components';
import { useNavContext } from '../../context';

import env from '../../env.json';

import { MenuIcon } from '../Styled/Icons/Icons';

const { hoverColor, mainColor } = env.colors;

const Burger = styled.button`
  color: ${mainColor};
  display: none;

  @media (max-width: 768px) {
    display: block;
  }

  &:hover {
    color: ${hoverColor};
  }
`;

const BurgerButton = () => {
  const { toggleNav } = useNavContext();

  return (
    <Burger onClick={toggleNav} id='burger'>
      <MenuIcon width={40} height={34} />
    </Burger>
  );
};
export default BurgerButton;
