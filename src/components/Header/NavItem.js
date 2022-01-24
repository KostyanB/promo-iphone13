import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
  margin-right: 30px;
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
