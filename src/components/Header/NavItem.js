import React, { useContext } from 'react';
import { NavContext } from '../Context';
import RouteLink from './RouteLink';

const NavItem = ({ href, name }) => {
  const {
    falloutNav: { closeNav },
  } = useContext(NavContext);

  return (
    <li>
      <RouteLink to={href} onClick={() => closeNav()}>
        {name}
      </RouteLink>
    </li>
  );
};
export default NavItem;
