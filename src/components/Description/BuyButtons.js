import React from 'react';
import styled from 'styled-components';
import { useSelectedModelContext, useModalContext } from '../../context';
import { useDispatch, useSelector } from 'react-redux';
import { setMainGood } from '../../store/sendOrderSlice';
import { selectCard } from '../../store/getGoodDbSlice';
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
  const { title } = useSelector(selectCard);
  const {
    selectedModel: { selectedColor, selectedMemory },
  } = useSelectedModelContext();
  const { onOpenModal } = useModalContext();

  const handleSetMainGood = needDelivery => {
    const model = `${title}${selectedMemory}GB ${selectedColor}`;
    dispatch(
      setMainGood({
        good: model,
        delivery: needDelivery,
      }),
    );
    onOpenModal();
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
