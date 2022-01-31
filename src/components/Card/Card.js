import React, { useEffect, useContext, useMemo } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { MainContext } from '../Context';
import { selectCard } from '../../store/getGoodDbSlice';

import Container from '../Styled/Container';
import Title from './Title';
import CardImage from './CardImage';
import ModelButtons from './ModelButtons';
import DetailList from './DetailList';
import Footer from './Footer';

import env from '../../env.json';

const {
  colors: { activeColor, cardLinkColor },
  transitionDuration,
} = env;

const Wrapper = styled(Container)`
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 968px) {
    flex-direction: column;
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
  text-align: left;
`;
const CardLink = styled(NavLink)`
  display: block;
  width: max-content;
  color: ${cardLinkColor};
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
  const { models, title } = useSelector(selectCard);
  const {
    currentModel: { setCurrentModel },
  } = useContext(MainContext);

  const startModel = useMemo(() => Object.entries(models)[0][1], [models]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setCurrentModel(startModel, title), []);

  return (
    <Wrapper>
      {/* <CardContext.Provider value={{ currentModel }}> */}
      <CardImage />
      <Details>
        <Title />
        <ModelButtons />
        <Description>
          <DetailList />
          <CardLink to="/main/characteristics">Полные харакстеристики</CardLink>
          <Footer />
        </Description>
      </Details>
      {/* </CardContext.Provider> */}
    </Wrapper>
  );
};
export default Card;
