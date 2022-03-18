import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import env from '../../env.json';

const {
  colors: { hoverColor },
  transitionDuration,
} = env;

const NavLinkStyle = styled(NavLink)`
  cursor: pointer;
  transition: border-color ${transitionDuration}, color ${transitionDuration};
  border-color: rgba(255, 255, 255, 0);

  &:hover,
  &:active {
    color: ${hoverColor};
  }

  &.active {
    border-bottom: 1px solid;
    border-color: ${hoverColor};
  }
`;

const CustomNavLink = ({ children, to, ...props }) => {
  return (
    <NavLinkStyle to={to} {...props}>
      {children}
    </NavLinkStyle>
  );
};
export default CustomNavLink;
