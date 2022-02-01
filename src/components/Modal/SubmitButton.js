import React, { useContext } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectDelivery } from '../../store/sendOrderSlice';
import { FormContext } from '../Context';
import { BuyButton } from '../Styled/Buttons';

const Button = styled(BuyButton).attrs(props => ({
  disabled: props.disable,
  type: props.type,
  form: props.form,
}))``;

const SubmitButton = ({ disable }) => {
  const {
    validateInputs: { isValidInputs },
  } = useContext(FormContext);
  const delivery = useSelector(selectDelivery);
  const deliveryText = delivery ? ' доставку' : '';

  return (
    <Button type="submit" form="modal-form" disable={!isValidInputs}>
      Заказать{deliveryText}
    </Button>
  );
};
export default SubmitButton;
