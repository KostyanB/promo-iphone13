import React from 'react';
import styled from 'styled-components';
import { NavContextProvider } from '../Context';
import env from '../../env.json';

import Container from '../Styled/Container';
import NavList from './NavList';
import BurgerButton from './BurgerButton';
import { LogoIcon } from '../Styled/Icons/Icons';

const {
  colors: { hoverColor, mainColor, backgroundColor },
  transitionDuration,
} = env;

const HeaderWrapper = styled.header`
  position: fixed;
  width: 100vw;
  background-color: ${backgroundColor};
`;
const NavContainer = styled(Container)`
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
    transition: color ${transitionDuration};

    &:hover {
      color: ${hoverColor};
    }
  }

  @media (max-width: 375px) {
    gap: 10px;
  }
`;

const Header = () => (
  <HeaderWrapper>
    <NavContainer>
      <Nav>
        <LogoIcon width={34} height={40} />
        <NavContextProvider>
          <NavList />
          <BurgerButton />
        </NavContextProvider>
      </Nav>
    </NavContainer>
  </HeaderWrapper>
);
export default Header;
