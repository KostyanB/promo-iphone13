import React, { useContext } from 'react';
import styled from 'styled-components';
import { MainContext } from '../Context';
import { useDispatch } from 'react-redux';
import { setMainGood } from '../../store/sendOrderSlice';

import { MainButton, BuyButton } from '../Styled/Buttons';

const BtnWrap = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 698px) {
    flex-direction: column;
  }
`;

const BuyButtons = () => {
  const dispatch = useDispatch();

  const {
    currentModel: { modelName },
    openModal: { onOpen },
  } = useContext(MainContext);

  const handleSetMainGood = needDelivery => {
    dispatch(
      setMainGood({
        good: modelName,
        delivery: needDelivery,
      }),
    );
    onOpen();
  };

  return (
    <BtnWrap>
      <BuyButton onClick={() => handleSetMainGood(false)}>Купить</BuyButton>
      <MainButton onClick={() => handleSetMainGood(true)}>
        Купить с доставкой
      </MainButton>
    </BtnWrap>
  );
};
export default BuyButtons;
