import React from 'react';
import { useNavContext } from '../../context';
import RouteLink from './RouteLink';

const NavItem = ({ href, name }) => {
  const { closeNav } = useNavContext();

  return (
    <li>
      <RouteLink to={href} onClick={() => closeNav()}>
        {name}
      </RouteLink>
    </li>
  );
};
export default NavItem;
