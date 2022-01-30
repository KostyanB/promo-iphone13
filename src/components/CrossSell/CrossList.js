import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectGoodForShow } from '../../store/crossSellSlice';
import CrossItem from './CrossItem';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;
const CrossList = () => {
  const goodForShow = useSelector(selectGoodForShow);

  return (
    <List>
      {goodForShow.map(item => (
        <CrossItem key={item.id} data={item} />
      ))}
    </List>
  );
};
export default CrossList;
