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
  justify-content: space-between;
  gap: 20px;
  /* margin: 0 auto; */

  @media (max-width: 768px) {
    justify-content: center;
  }
  @media (max-width: 375px) {
    gap: 10px;
  }
`;
const Logo = styled.img`
  max-width: 34px;
`;
const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  flex-grow: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: baseline;
    flex-grow: 0;
    /* visibility: hidden; */
    transform: translateY(-50%);
  }
`;
const Burger = styled.div`
  display: none;
  margin-left: auto;
`;

const Header = () => {
  return (
    <header>
      <Wrapper>
        <Nav>
          <Logo src={appleLogo} alt="apple" />
          <NavList>
            {env.nav.map((item, i) => (
              <NavItem key={i} href={item[0]} name={item[1]} />
            ))}
          </NavList>
          <Burger />
        </Nav>
      </Wrapper>
    </header>
  );
};
export default Header;
