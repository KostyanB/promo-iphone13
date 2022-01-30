import React, { useContext } from 'react';
import styled from 'styled-components';
import { MainContext } from '../Context';
import { MainButton, BuyButton } from '../Styled/Buttons';

const BtnWrap = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 698px) {
    flex-direction: column;
  }
`;

const BuyButtons = () => {
  const {
    currentModel: { currentPrice },
    openModal: { onOpen },
  } = useContext(MainContext);

  const handleButtons = () => {
    console.log('click');
    onOpen();
  };

  return (
    <BtnWrap>
      <BuyButton onClick={handleButtons} data-button-buy="Оплата">
        Купить
      </BuyButton>
      <MainButton onClick={handleButtons} data-button-buy="Доставка и оплата">
        Купить с доставкой
      </MainButton>
    </BtnWrap>
  );
};
export default BuyButtons;
