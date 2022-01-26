import React from 'react';

import useScrollOffset from '../../hooks/useScrollOffset';
import NavLink from './NavLink';
import SectionLink from './SectionLink';

const ScrollLink = ({ href, name, type }) => {
  const scrollOffset = useScrollOffset().scrollOffset;
  const target = href.substring(1);

  if (type === 'nav-link') {
    return <NavLink target={target} name={name} offset={scrollOffset} />;
  } else if (type === 'section-link') {
    return <SectionLink target={target} name={name} offset={scrollOffset} />;
  } else {
    return null;
  }
};
export default ScrollLink;
