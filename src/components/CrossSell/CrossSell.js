import React from 'react';
// import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectCrossSell } from '../../store/goodSlice';

import Container from '../Styled/Container';
import { SectionTitle } from '../Styled/Titles';

// import env from '../../env.json';

// const {
//   colors: { hoverColor, activeColor },
//   transitionDuration,
// } = env;

const CrossSell = () => {
  const crossSell = useSelector(selectCrossSell);
  console.log('crossSell: ', crossSell);

  return (
    <Container>
      <SectionTitle>Дополняют этот товар</SectionTitle>
    </Container>
  );
};
export default CrossSell;
