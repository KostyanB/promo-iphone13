import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { CurrentModelContext } from '../Context';
import { selectCard } from '../../store/goodSlice';

import Container from '../Styled/Container';
import Title from './Title';
import ProductImg from './ProductImg';
import ModelBtns from './ModelBtns';
import DetailList from './DetailList';
import ScrollLink from '../ScrollLink';
import Footer from './Footer';

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

const Card = () => {
  const models = useSelector(selectCard).models;
  const {
    currentModel: { setCurrentModel },
  } = useContext(CurrentModelContext);

  useEffect(() => {
    const startModel = Object.entries(models)[0][1];
    setCurrentModel(startModel);
  }, []);

  return (
    <Section id="card">
      <Wrapper>
        {/* <CardContext.Provider value={{ currentModel }}> */}
        <ProductImg />
        <Details>
          <Title />
          <ModelBtns />
          <Description>
            <DetailList />
            <ScrollLink
              href="#characteristics"
              name="Полные харакстеристики"
              type="section-link"
            />
            <Footer />
          </Description>
        </Details>
        {/* </CardContext.Provider> */}
      </Wrapper>
    </Section>
  );
};
export default Card;
