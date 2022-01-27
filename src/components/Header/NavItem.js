import React, { useContext } from 'react';
import styled from 'styled-components';
// import { useResolvedPath, useMatch, Link, useLocation } from 'react-router-dom';
// import type { LinkProps } from 'react-router-dom';

import { NavContext } from '../Context';
import RouteLink from './RouteLink';
import env from '../../env.json';
// import ScrollLink from '../ScrollLink';

const {
  colors: { hoverColor },
  // transitionDuration,
  // scrollDuration,
} = env;

// const Item = styled.li`
//   white-space: nowrap;

//   & > a:hover,
//   & > a:active {
//     color: ${hoverColor};
//   }
// `;

const NavItem = ({ href, name }) => {
  const {
    falloutNav: { closeNav },
  } = useContext(NavContext);

  // const scrollIntoSection = href => {
  //   const section = document.getElementById(href.substring(1));

  //   if (section) {
  //     section.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'start',
  //     });
  //   } else {
  //     //? роутинг на страницу
  //   }
  // };
  const handleNavItem = e => {
    e.preventDefault();
    closeNav();
    // scrollIntoSection(href);
  };

  // const linkToSection = href.charAt(0) === '#';
  const linkToSection = href.split('/')[1] === 'main';

  return (
    <li>
      {/* {linkToSection ? (
        <ScrollLink href={href} name={name} type="nav-link" />
      ) : ( */}
      <RouteLink to={href} onClick={() => closeNav()}>
        {name}
      </RouteLink>
      {/* )} */}
    </li>
  );
};
export default NavItem;
