import React, { useContext } from 'react';
import styled from 'styled-components';
import { CurrentModelContext } from '../Context';
import { MainButton, BuyButton } from '../Styled/Button';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: 698px) {
    flex-wrap: wrap;
    flex-direction: column;
    gap: 30px;
  }
`;
const Price = styled.p`
  min-width: 120px;
  font-weight: 700;
  font-size: 24px;

  @media (max-width: 698px) {
    align-self: baseline;
  }
`;
const BtnWrap = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 698px) {
    flex-direction: column;
  }
`;

const Footer = () => {
  const {
    currentModel: { currentPrice },
  } = useContext(CurrentModelContext);

  return (
    <Wrapper>
      <Price>{currentPrice}&#8381;</Price>
      <BtnWrap>
        <BuyButton data-button-buy="Оплата">Купить</BuyButton>
        <MainButton data-button-buy="Доставка и оплата">
          Купить с доставкой
        </MainButton>
      </BtnWrap>
    </Wrapper>
  );
};
export default Footer;
