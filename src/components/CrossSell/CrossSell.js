import React from 'react';
import Container from '../Styled/Container';
import { SectionTitle } from '../Styled/Titles';
import CrossList from './CrossList';
import MoreButton from './MoreButton';
import CardLink from '../Styled/CardLink';

const CrossSell = () => (
  <Container>
    <SectionTitle>Дополняют этот товар</SectionTitle>
    <CrossList />
    <MoreButton />
    <CardLink to='/main/card'>К выбору модели &#8593;</CardLink>
  </Container>
);
export default CrossSell;
