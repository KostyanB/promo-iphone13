import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';
import { selectCharacteristics } from '../../store/getGoodDbSlice';
import Container from '../Styled/Container';
import { SectionTitle } from '../Styled/Titles';
import Item from './Item';

const List = styled.ul`
  max-width: 920px;
`;

const Characteristic = () => {
  const data = useSelector(selectCharacteristics);

  return (
    <Container>
      <SectionTitle>Характеристики</SectionTitle>
      <List>
        {Object.entries(data).map(([name, data]) => (
          <Item key={name} name={name} title={data.title} />
        ))}
      </List>
    </Container>
  );
};
export default Characteristic;
