import React from 'react';
import styled from 'styled-components';
import { useResolvedPath, useMatch, Link, useLocation } from 'react-router-dom';
import env from '../../env.json';

const {
  colors: { hoverColor },
  transitionDuration,
} = env;

const RouteLinkStyle = styled(Link)`
  cursor: pointer;
  transition: border-color ${transitionDuration}, color ${transitionDuration};
  border-bottom: 1px solid;

  &:hover,
  &:active {
    color: ${hoverColor};
  }
`;

const RouteLink = ({ children, to, ...props }) => {
  const location = useLocation();
  const resolved = useResolvedPath(to);

  const matchAsIndex = location.pathname === '/';

  const matchWithHash = resolved.hash && resolved.hash === location.hash;

  const path = resolved.pathname === '/main' ? '' : resolved.pathname;
  const matchWithoutHash = useMatch({
    path: path,
  });

  const match = !matchAsIndex && (matchWithHash || matchWithoutHash);

  return (
    <div>
      <RouteLinkStyle
        style={{ borderColor: match ? hoverColor : 'transparent' }}
        to={to}
        {...props}>
        {children}
      </RouteLinkStyle>
    </div>
  );
};
export default RouteLink;
