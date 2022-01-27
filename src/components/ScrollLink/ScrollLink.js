import React from 'react';

import useScrollOffset from '../../hooks/useScrollOffset';
import NavLink from './NavLink';
import SectionLink from './SectionLink';

const ScrollLink = ({ href, name, type }) => {
  const scrollOffset = useScrollOffset().scrollOffset;
  const target = href.split('#')[1];
  // console.log('target: ', target);

  if (type === 'nav-link') {
    return (
      <NavLink target={target} name={name} offset={scrollOffset} href={href} />
    );
  } else if (type === 'section-link') {
    return <SectionLink target={target} name={name} offset={scrollOffset} />;
  } else {
    return null;
  }
};
export default ScrollLink;
