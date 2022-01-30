import React from 'react';
import Container from '../Styled/Container';
import { SectionTitle } from '../Styled/Titles';
import CrossList from './CrossList';
import MoreButton from './MoreButton';

const CrossSell = () => (
  <Container>
    <SectionTitle>Дополняют этот товар</SectionTitle>
    <CrossList />
    <MoreButton />
  </Container>
);
export default CrossSell;
