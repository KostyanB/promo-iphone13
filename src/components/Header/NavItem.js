import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavContext } from '../Context';
import env from '../../env.json';

const { hoverColor } = env.colors;

const Item = styled.li`
  white-space: nowrap;

  & > a:hover,
  & > a:active {
    color: ${hoverColor};
  }
`;
//
const NavItem = ({ href, name }) => {
  const {
    falloutNav: { closeNav },
  } = useContext(NavContext);

  const handleNavItem = e => {
    closeNav();
  };

  return (
    <Item>
      <a href={href} onClick={handleNavItem}>
        {name}
      </a>
    </Item>
  );
};
export default NavItem;
