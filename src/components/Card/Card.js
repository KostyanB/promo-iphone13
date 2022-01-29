import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { CurrentModelContext } from '../Context';
import { selectCard } from '../../store/goodSlice';

import Container from '../Styled/Container';
import Title from './Title';
import CardImage from './CardImage';
import ModelButtons from './ModelButtons';
import DetailList from './DetailList';
import ScrollLink from '../ScrollLink';
import Footer from './Footer';

import env from '../../env.json';

const {
  colors: { hoverColor, activeColor },
  transitionDuration,
} = env;

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
const CardLink = styled(NavLink)`
  display: block;
  width: max-content;
  color: ${hoverColor};
  font-size: 18px;
  line-height: 21px;
  cursor: pointer;
  transition: color ${transitionDuration};

  &:hover,
  &:active {
    color: ${activeColor};
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
    <Wrapper>
      {/* <CardContext.Provider value={{ currentModel }}> */}
      <CardImage />
      <Details className="details">
        <Title />
        <ModelButtons />
        <Description>
          <DetailList />
          {/* <ScrollLink
            href="#characteristics"
            name="Полные харакстеристики"
            type="section-link"
          /> */}
          <CardLink to="/main/characteristics">Полные харакстеристики</CardLink>
          <Footer />
        </Description>
      </Details>
      {/* </CardContext.Provider> */}
    </Wrapper>
  );
};
export default Card;
