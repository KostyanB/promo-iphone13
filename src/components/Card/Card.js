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
  padding-top: min(5vw, 90px);
`;
const Wrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 968px) {
    flex-direction: column;
    gap: 30px;
  }
  @media (max-width: 698px) {
    gap: 20px;
  }
`;
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vw;
`;
const Details = styled(CardContainer)`
  align-items: center;
  @media (max-width: 968px) {
    max-width: 700px;
  }
  @media (max-width: 698px) {
    max-width: 600px;
  }
`;
const Description = styled(CardContainer)`
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
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
        <Details className="details">
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
