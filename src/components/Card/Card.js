import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useSelectedModelContext } from '../../context';
import { selectCard } from '../../store/getGoodDbSlice';
import Section from '../Styled/Section';
import Container from '../Styled/Container';
import Title from './Title';
import CardImage from './CardImage';
import ModelButtons from './ModelButtons';
import DetailList from './DetailList';
import Footer from './Footer';
import CardLink from '../Styled/CardLink';

const CardContainer = styled(Container)`
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 968px) {
    flex-direction: column;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vw;
`;
const Details = styled(Wrapper)`
  align-items: center;
  @media (max-width: 968px) {
    max-width: 700px;
  }
  @media (max-width: 698px) {
    max-width: 600px;
  }
`;
const Description = styled(Wrapper)`
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  text-align: left;
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
    <Section id='card'>
      <CardContainer>
        <CardImage />
        <Details>
          <Title />
          <ModelButtons />
          <Description>
            <DetailList />
            <CardLink to='/main/characteristics'>
              Полные харакстеристики
            </CardLink>
            <Footer />
          </Description>
        </Details>
      </CardContainer>
    </Section>
  );
};
export default Card;
