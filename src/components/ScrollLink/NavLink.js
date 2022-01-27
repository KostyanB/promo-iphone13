import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { NavContext } from '../Context';

import env from '../../env.json';

const {
  colors: { hoverColor },
  transitionDuration,
  scrollDuration,
} = env;

const NavLinkStyle = styled(Link)`
  cursor: pointer;
  border-color: rgba(255, 255, 255, 0);
  transition: border-color ${transitionDuration}, color ${transitionDuration};

  &:hover,
  &:active {
    color: ${hoverColor};
  }

  &.nav-active {
    border-bottom: 1px solid;
    border-color: ${hoverColor};
  }
`;

const NavLink = ({ target, name, offset, href }) => {
  const {
    falloutNav: { closeNav },
  } = useContext(NavContext);

  const handleLink = () => closeNav();

  return (
    <NavLinkStyle
      activeClass="nav-active"
      to={target}
      spy={true}
      // hashSpy={true}
      smooth={true}
      offset={offset}
      duration={scrollDuration}
      onSetInactive={handleLink}
      href={href}>
      {name}
    </NavLinkStyle>
  );
};
export default NavLink;
