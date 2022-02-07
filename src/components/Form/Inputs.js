import React, { useContext } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectDelivery } from '../../store/sendOrderSlice';
import { FormContext } from '../Context';

import env from '../../env.json';
import FormInput from './FormInput';

const {
  inputMasks: { phoneMask },
} = env;

const Label = styled.label`
  display: flex;
  margin-bottom: 12px;
  align-items: center;

  & > span {
    min-width: 105px;
    font-size: 14px;
    margin-right: 20px;
  }
`;

const Inputs = () => {
  const delivery = useSelector(selectDelivery);

  const {
    validateInputs: { isValidName, isValidAddress, isValidPhone },
  } = useContext(FormContext);

  return (
    <>
      {delivery && (
        <Label>
          <span>Куда доставить</span>
          <FormInput type="text" name="address" isValid={isValidAddress} />
        </Label>
      )}
      <Label>
        <span>Кому</span>
        <FormInput type="text" name="username" isValid={isValidName} />
      </Label>
      <Label>
        <span>Телефон</span>
        <FormInput
          type="tel"
          name="phone"
          placeholder={phoneMask}
          isValid={isValidPhone}
        />
      </Label>
    </>
  );
};
export default Inputs;
