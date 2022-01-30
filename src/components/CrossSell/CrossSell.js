import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { selectGoodForShow, addGoodsToShow } from '../../store/crossSellSlice';

import Container from '../Styled/Container';
import { SectionTitle } from '../Styled/Titles';
import CrossList from './CrossList';
import { MainButton } from '../Styled/Button';

const CrossButton = styled(MainButton)`
  align-self: flex-end;
`;
const CrossSell = () => {
  const dispatch = useDispatch();

  const showMore = () => dispatch(addGoodsToShow());

  return (
    <Container>
      <SectionTitle>Дополняют этот товар</SectionTitle>
      <CrossList />
      <CrossButton onClick={showMore}>Показать еще</CrossButton>
    </Container>
  );
};
export default CrossSell;
