import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import useCurrentModel from '../../hooks/useCurrentModel';
import { CardContext } from '../Context';
import { selectCard } from '../../store/goodSlice';
import env from '../../env.json';

import Container from '../Styled/Container';
import Title from './Title';
import ProductImg from './ProductImg';
import ModelBtns from './ModelBtns';
import DetailList from './DetailList';
import Footer from './Footer';

const { hoverColor, activeColor } = env.colors;

const Section = styled.section`
  padding-top: 90px;

  @media (max-width: 968px) {
    padding-top: 50px;
  }
  @media (max-width: 698px) {
  }
  @media (max-width: 520px) {
  }
`;
const Wrapper = styled(Container)`
  display: flex;
  align-items: center;

  @media (max-width: 968px) {
    flex-direction: column;
  }
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 968px) {
    max-width: 600px;
    margin-bottom: 30px;
  }
  @media (max-width: 698px) {
    max-width: 400px;
    margin-bottom: 20px;
  }
  @media (max-width: 520px) {
  }
`;
const Description = styled.div`
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 20px;

  @media (max-width: 968px) {
    flex-direction: column;
  }
`;
const Link = styled.a`
  display: block;
  width: max-content;
  margin-bottom: 60px;
  color: ${hoverColor};
  font-size: 18px;
  line-height: 21px;

  &:hover,
  &:active {
    color: ${activeColor};
  }
`;

const Card = () => {
  const models = useSelector(selectCard).models;
  const currentModel = useCurrentModel();

  useEffect(() => {
    const startModel = Object.entries(models)[0][1];
    currentModel.setCurrentModel(startModel);
  }, []);

  return (
    <CardContext.Provider value={{ currentModel }}>
      <Section id="card">
        <Wrapper>
          <ProductImg />
          <Details>
            <Title />
            <ModelBtns />
            <Description>
              <DetailList />
              <Link href="#characteristics">Полные харакстеристики</Link>
              <Footer />
            </Description>
          </Details>
        </Wrapper>
      </Section>
    </CardContext.Provider>
  );
};
export default Card;
