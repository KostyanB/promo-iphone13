import React, { useContext } from 'react';
import styled from 'styled-components';
import { CurrentModelContext } from '../Context';
import env from '../../env.json';
import Button from '../Styled/Button';

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

  const buyColors = env.colors.specificBtnColors;

  return (
    <Wrapper>
      <Price>{currentPrice}&#8381;</Price>
      <BtnWrap>
        <Button styles={buyColors} data-button-buy="Оплата">
          Купить
        </Button>
        <Button data-button-buy="Доставка и оплата">Купить с доставкой</Button>
      </BtnWrap>
    </Wrapper>
  );
};
export default Footer;
