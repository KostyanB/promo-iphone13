import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { selectPresent } from '../../store/goodSlice';

import Container from '../Styled/Container';

const Section = styled.section`
  text-align: center;
  padding-bottom: 90px;
  padding-top: 30px;
`;
const Title = styled.h1`
  font-size: clamp(38px, 7vw, 72px);
  margin-bottom: 40px;
`;
const Description = styled.p`
  font-size: clamp(18px, 3.4vw, 36px);
  line-height: 1.3;
  width: min(80vw, 865px);
  margin: 0 auto 100px;

  @media (max-width: 968px) {
    line-height: 32px;
  }
  @media (max-width: 698px) {
    margin-bottom: 20px;
  }
  @media (max-width: 520px) {
    line-height: 1.15;
  }
`;
const Figure = styled.figure`
  max-width: 440px;
  margin: 0 auto;

  @media (max-width: 968px) {
    max-width: 380px;
  }
  @media (max-width: 698px) {
    max-width: 300px;
  }
  @media (max-width: 520px) {
    max-width: 280px;
  }
`;

const Present = () => {
  const presentDb = useSelector(selectPresent);
  const { imgSrc, imgAlt, promo, title } = presentDb;

  return (
    <Section id="present">
      <Container>
        <Title>{title}</Title>
        <Description>{promo}</Description>
        <Figure>
          <img src={imgSrc} alt={imgAlt} />
        </Figure>
      </Container>
    </Section>
  );
};
export default Present;
