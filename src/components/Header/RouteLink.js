import React from 'react';
import styled from 'styled-components';
import {
  // useResolvedPath,
  // useMatch,
  // Link,
  // useLocation,
  NavLink,
  // useHref,
} from 'react-router-dom';
import env from '../../env.json';

const {
  colors: { hoverColor },
  transitionDuration,
} = env;

const RouteLinkStyle = styled(NavLink)`
  cursor: pointer;
  transition: border-color ${transitionDuration}, color ${transitionDuration};
  border-color: rgba(255, 255, 255, 0);

  &:hover,
  &:active {
    color: ${hoverColor};
  }

  &.active {
    border-bottom: 1px solid;
    border-color: ${hoverColor};
  }
`;

const RouteLink = ({ children, to, ...props }) => {
  // const location = useLocation();
  // console.log('location: ', location);
  // const resolved = useResolvedPath(to);
  // console.log('resolved: ', resolved);

  // const matchAsIndex = location.pathname === '/';

  // const matchWithHash = resolved.hash && resolved.hash === location.hash;

  // const path = resolved.pathname === '/main' ? '' : resolved.pathname;
  // const matchWithoutHash = useMatch({
  //   path: path,
  // });

  // const match = !matchAsIndex && (matchWithHash || matchWithoutHash);

  // const routeMatch = useMatch({ path: '/main#present' });
  // console.log('routeMatch: ', routeMatch);

  // const activeClassName = 'under';

  // const href = useHref();

  return (
    <div>
      <RouteLinkStyle
        // style={{ borderColor: match ? hoverColor : 'transparent' }}
        // className={({ isActive }) => (isActive ? activeClassName : undefined)}
        to={to}
        {...props}>
        {children}
      </RouteLinkStyle>
    </div>
  );
};
export default RouteLink;
