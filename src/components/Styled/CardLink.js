import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import env from '../../env.json';

const {
  colors: { activeColor, cardLinkColor },
  transitionDuration,
} = env;

const CardLink = styled(NavLink)`
  display: block;
  width: max-content;
  color: ${cardLinkColor};
  font-size: 18px;
  line-height: 21px;
  cursor: pointer;
  transition: color ${transitionDuration};

  &:hover,
  &:active {
    color: ${activeColor};
  }
`;
export default CardLink;
