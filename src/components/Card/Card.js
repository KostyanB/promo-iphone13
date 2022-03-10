import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useSelectedModelContext } from '../../context';
import { selectCard } from '../../store/getGoodDbSlice';

import Container from '../Styled/Container';
import CardWrapper from '../Styled/CardWrapper';
import Title from './Title';
import CardImage from './CardImage';
import ModelButtons from './ModelButtons';
import Description from '../Description';

const CardContainer = styled(Container)`
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 968px) {
    flex-direction: column;
  }
`;
const Details = styled(CardWrapper)`
  align-items: center;

  @media (max-width: 968px) {
    max-width: 700px;
  }
  @media (max-width: 698px) {
    max-width: 600px;
  }
`;

const Card = () => {
  const { models } = useSelector(selectCard);
  const {
    selectedModel: { setSelectedModel },
  } = useSelectedModelContext();

  const startModel = useMemo(() => Object.entries(models)[0][1], [models]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setSelectedModel(startModel), []);

  return (
    <CardContainer>
      <CardImage />
      <Details>
        <Title />
        <ModelButtons />
        <Description />
      </Details>
    </CardContainer>
  );
};
export default Card;
