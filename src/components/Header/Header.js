import React from 'react';
import styled from 'styled-components';

import env from '../../env.json';

import appleLogo from '../../img/apple_logo_black.svg';

import Container from '../Styled/Container';
import NavItem from './NavItem';

const Wrapper = styled(Container)`
  max-width: min(100vw, 1130px);
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  max-width: 34px;
  margin-right: auto;

  @media (max-width: 375px) {
    margin-right: 10px;
  }
`;
const NavList = styled.ul`
  display: flex;
  align-items: center;
`;
const Burger = styled.div`
  margin-left: auto;
`;

const Header = () => {
  return (
    <header>
      <Wrapper>
        <Nav>
          <Logo src={appleLogo} alt="apple" />
          <NavList>
            {env.nav.map(item => (
              <NavItem href={item[0]} name={item[1]} />
            ))}
          </NavList>
          <Burger />
        </Nav>
      </Wrapper>
    </header>
  );
};
export default Header;
