import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavContext } from '../Context';
import env from '../../env.json';
import ScrollLink from '../ScrollLink';

const {
  colors: { hoverColor },
} = env;

const Item = styled.li`
  white-space: nowrap;

  & > a:hover,
  & > a:active {
    color: ${hoverColor};
  }
`;

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

  const linkToSection = href.charAt(0) === '#';

  return (
    <Item>
      {linkToSection ? (
        <ScrollLink href={href} name={name} type="nav-link" />
      ) : (
        <a href={href} onClick={handleNavItem}>
          {name}
        </a>
      )}
    </Item>
  );
};
export default NavItem;
