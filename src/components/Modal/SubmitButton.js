import React from 'react';
import { useSelector } from 'react-redux';
import { selectDelivery } from '../../store/sendOrderSlice';
import { BuyButton } from '../Styled/Buttons';

const SubmitButton = () => {
  const delivery = useSelector(selectDelivery);
  const deliveryText = delivery ? ' доставку' : '';

  return (
    <BuyButton type="submit" form="modal-form">
      Заказать{deliveryText}
    </BuyButton>
  );
};
export default SubmitButton;
