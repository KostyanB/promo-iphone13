import React from 'react';
import { useNavContext } from '../../context';
import CustomNavLink from './CustomNavLink';

const NavItem = ({ href, name }) => {
  const { closeNav } = useNavContext();

  return (
    <li>
      <CustomNavLink to={href} onClick={() => closeNav()}>
        {name}
      </CustomNavLink>
    </li>
  );
};
export default NavItem;
