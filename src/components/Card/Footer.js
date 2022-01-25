import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { selectCard } from '../../store/goodSlice';
import env from '../../env.json';

import Button from '../Styled/Button';

const {
  colors: { activeColor, btnText },
  transitionDuration,
} = env;

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 698px) {
    flex-wrap: wrap;
    align-items: start;
  }
`;
const Price = styled.p`
  min-width: 120px;
  font-weight: 700;
  font-size: 24px;
  margin-right: 60px;

  @media (max-width: 698px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 30px;
  }
`;
const ButtonBuy = styled(Button)`
  background-color: ${activeColor};
  border: 1px solid ${activeColor};
  color: ${btnText};
  margin-right: 28px;
  transition: color ${transitionDuration},
    background-color ${transitionDuration};

  &:hover,
  &:active {
    background-color: ${btnText};
    border: 1px solid ${activeColor};
    color: ${activeColor};
  }
  @media (max-width: 698px) {
    margin-bottom: 30px;
  }
`;

const Footer = () => {
  const price = useSelector(selectCard).price;

  return (
    <Wrapper>
      <Price>{price}&#8381;</Price>
      <ButtonBuy data-button-buy="Оплата">Купить</ButtonBuy>
      <Button data-button-buy="Доставка и оплата">Купить с доставкой</Button>
    </Wrapper>
  );
};
export default Footer;
