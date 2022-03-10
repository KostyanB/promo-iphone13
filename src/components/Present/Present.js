import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectPresent } from '../../store/getGoodDbSlice';
import Section from '../Styled/Section';
import Container from '../Styled/Container';
import { Title1 } from '../Styled/Titles';

const Description = styled.p`
  font-size: clamp(18px, 3.4vw, 36px);
  line-height: 1.3;
  width: min(80vw, 865px);
  margin: 0 auto 100px;

  @media (max-width: 968px) {
    line-height: 1.2;
  }
  @media (max-width: 698px) {
    margin-bottom: 20px;
  }
  @media (max-width: 520px) {
    line-height: 1.1;
  }
`;
const Figure = styled.figure`
  max-width: min(40vw, 440px);
  margin: 0 auto;

  & > img {
    aspect-ratio: 187 / 380;
  }
`;

const Present = () => {
  const presentDb = useSelector(selectPresent);
  const { imgSrc, imgAlt, promo, title } = presentDb;

  return (
    <Section id='present'>
      <Container>
        <Title1>{title}</Title1>
        <Description>{promo}</Description>
        <Figure>
          <img src={imgSrc} alt={imgAlt} />
        </Figure>
      </Container>
    </Section>
  );
};
export default Present;
