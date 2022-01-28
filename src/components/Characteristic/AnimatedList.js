import React from 'react';
import styled from 'styled-components';
import useMeasure from 'react-use-measure';
import { animated, useSpring } from 'react-spring';
import env from '../../env.json';
import DescriptionList from './DescriptionList';

const { hoverColor } = env.colors;

const Description = styled.div`
  margin-top: -2px;
  border: 1px solid;
  border-color: transparent ${hoverColor} ${hoverColor} ${hoverColor};
  overflow: hidden;
  height: ${props => (props.open ? 'auto' : 0)};
`;

const AnimatedList = ({ name, isOpen }) => {
  const [ref, { height }] = useMeasure();
  const listProps = useSpring({ height });

  return (
    <animated.div style={{ overflow: 'hidden', ...listProps }}>
      <Description ref={ref} open={isOpen}>
        <DescriptionList name={name} />
      </Description>
    </animated.div>
  );
};
export default AnimatedList;
