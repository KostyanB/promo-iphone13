import React from 'react';
import styled from 'styled-components';
import Section from '../Styled/Section';
import { useSelector } from 'react-redux';

import { selectCharacteristics } from '../../store/goodSlice';

import Container from '../Styled/Container';
import { MainTitle } from '../Styled/Titles';
import Item from './Item';

const List = styled.ul`
  max-width: 920px;
`;

const Characteristic = () => {
  const data = useSelector(selectCharacteristics);

  return (
    <Section id="characteristics">
      <Container>
        <MainTitle>Характеристики</MainTitle>
        <List>
          {Object.entries(data).map(([name, data]) => (
            <Item key={name} name={name} title={data.title} />
          ))}
        </List>
      </Container>
    </Section>
  );
};
export default Characteristic;
