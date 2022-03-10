import React from 'react';
import { useSelector } from 'react-redux';
import { selectDelivery } from '../../store/sendOrderSlice';
import { useValidateFormContext } from '../../context';
import { BuyButton } from '../Styled/Buttons';

const SubmitButton = () => {
  const {
    validateForm: { isValidInputs },
  } = useValidateFormContext();
  const delivery = useSelector(selectDelivery);
  const deliveryText = delivery ? ' доставку' : '';

  return (
    <BuyButton type='submit' form='modal-form' disable={!isValidInputs}>
      Заказать{deliveryText}
    </BuyButton>
  );
};
export default SubmitButton;
