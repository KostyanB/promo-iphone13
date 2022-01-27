import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

import env from '../../env.json';

const {
  colors: { hoverColor, activeColor },
  transitionDuration,
  scrollDuration,
} = env;

const SectionLinkStyle = styled(Link)`
  display: block;
  width: max-content;
  color: ${hoverColor};
  font-size: 18px;
  line-height: 21px;
  cursor: pointer;
  transition: color ${transitionDuration};

  &:hover,
  &:active {
    color: ${activeColor};
  }
`;

const SectionLink = ({ target, name, offset }) => {
  const handleLink = () => {};

  return (
    <SectionLinkStyle
      to={target}
      spy={true}
      hashSpy={true}
      smooth={true}
      offset={offset}
      duration={scrollDuration}
      onSetInactive={handleLink}>
      {name}
    </SectionLinkStyle>
  );
};
export default SectionLink;
