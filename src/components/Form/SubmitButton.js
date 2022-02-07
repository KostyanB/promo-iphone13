import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { selectDelivery } from '../../store/sendOrderSlice';
import { FormContext } from '../Context';
import { BuyButton } from '../Styled/Buttons';

const SubmitButton = () => {
  const {
    validateInputs: { isValidInputs },
  } = useContext(FormContext);
  const delivery = useSelector(selectDelivery);
  const deliveryText = delivery ? ' доставку' : '';

  return (
    <BuyButton type="submit" form="modal-form" disable={!isValidInputs}>
      Заказать{deliveryText}
    </BuyButton>
  );
};
export default SubmitButton;
