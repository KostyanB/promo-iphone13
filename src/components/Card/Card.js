import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { selectCard } from '../../store/goodSlice';

import Container from '../Styled/Container';
import ModelBtns from './ModelBtns';
import DetailList from './DetailList';

const As = styled.div`
  @media (max-width: 968px) {
  }
  @media (max-width: 698px) {
  }
  @media (max-width: 520px) {
  }
`;
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
const Title = styled.h2`
  font-size: 36px;
  line-height: 43px;
  text-align: center;
  @media (max-width: 698px) {
    font-size: 28px;
    margin-bottom: 30px;
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
  const cardDb = useSelector(selectCard);
  const { colors, price, models, title } = cardDb;

  const [currentModel, setCurrentModel] = useState('');

  useEffect(() => {
    setCurrentModel(models.graphite.color);
  }, [models]);

  return (
    <Section id="Card">
      <Wrapper>
        <figure className="card__image">
          <img
            className="card__image_item"
            src="img/iPhone-graphite.webp"
            alt="iPhone12"
          />
        </figure>
        <Details>
          <Title>
            {title}
            {currentModel}
          </Title>
          <ModelBtns />
          {/* <ul className="card-detail__buttons">
            <li className="card-details__wrap-btn">
              <button className="card-detail__change active" type="button">
                Графитовый
              </button>
            </li>
            <li className="card-details__wrap-btn">
              <button className="card-detail__change" type="button">
                Серебристый
              </button>
            </li>
            <li className="card-details__wrap-btn">
              <button className="card-detail__change" type="button">
                Небесно-голубой
              </button>
            </li>
          </ul> */}
          <Description className="card-details__description">
            <DetailList />
            <a
              className="card-details__link-characteristics"
              href="#characteristics">
              Полные харакстеристики
            </a>
            <div className="card-details__footer">
              <p className="card-details__price">99990₽</p>
              <button
                className="button button_buy card-details__button_buy"
                data-button-buy="Оплата">
                Купить
              </button>
              <button
                className="button card-details__button_delivery"
                data-button-buy="Доставка и оплата">
                Купить с доставкой
              </button>
            </div>
          </Description>
        </Details>
      </Wrapper>
    </Section>
  );
};
export default Card;
