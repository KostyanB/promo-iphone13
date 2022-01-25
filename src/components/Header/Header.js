import React from 'react';
import styled from 'styled-components';
import { NavContextProvider } from '../Context';
import env from '../../env.json';

import Container from '../Styled/Container';
import NavList from './NavList';
import BurgerButton from './BurgerButton';
import { LogoIcon } from '../Styled/Icons/Icons';

const {
  colors: { hoverColor, mainColor },
  transitionDuration,
} = env;

const Wrapper = styled(Container)`
  max-width: min(100vw, 1130px);
`;
const Nav = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  & > svg {
    color: ${mainColor};

    &:hover {
      color: ${hoverColor};
    }
  }

  @media (max-width: 375px) {
    gap: 10px;
  }
`;

const Header = () => (
  <header>
    <Wrapper>
      <Nav>
        <LogoIcon width={34} height={40} />
        <NavContextProvider>
          <NavList />
          <BurgerButton />
        </NavContextProvider>
      </Nav>
    </Wrapper>
  </header>
);
export default Header;
