import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectGoodForShow } from '../../store/crossSellSlice';
import CrossItem from './CrossItem';

import useMeasure from 'react-use-measure';
import { animated, useSpring } from 'react-spring';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  height: auto;
`;
const CrossList = () => {
  const goodForShow = useSelector(selectGoodForShow);

  const [ref, { height }] = useMeasure();
  const listProps = useSpring({ height });

  return (
    <animated.div style={{ overflow: 'hidden', ...listProps }}>
      <List ref={ref}>
        {goodForShow.map(item => (
          <CrossItem key={item.id} data={item} />
        ))}
      </List>
    </animated.div>
  );
};
export default CrossList;
