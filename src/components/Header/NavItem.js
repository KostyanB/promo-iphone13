import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
  white-space: nowrap;

  & > a {
    padding-top: 10px;
    padding-bottom: 10px;
    display: block;
  }
`;

const NavItem = ({ href, name }) => (
  <Item>
    <a href={href}>{name}</a>
  </Item>
);
export default NavItem;
