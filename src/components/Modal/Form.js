import React, { useState } from 'react';
import styled from 'styled-components';

import FormTitle from './FormTitle';
import { BuyButton } from '../Styled/Buttons';

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
const Input = styled.input`
  flex-grow: 1;
  border-style: solid;
  border-width: 1px;
  border-color: transparent transparent #000 transparent;
`;

const Form = () => {
  return (
    <form>
      <FormTitle />
      <Label>
        <span>Куда доставить</span>
        <Input type="text" />
      </Label>
      <Label>
        <span>Кому</span>
        <Input type="text" />
      </Label>
      <Label>
        <span>Телефон</span>
        <Input type="text" />
      </Label>
      <BuyButton type="submit">Заказать доставку</BuyButton>
    </form>
  );
};
export default Form;
