import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectDelivery } from '../../store/sendOrderSlice';

const Label = styled.label`
  display: flex;
  margin-bottom: 12px;
  align-items: center;

  & > span {
    min-width: 105px;
    font-size: 14px;
    margin-right: 20px;
  }

  &.hide {
    display: none !important;
    background-color: 'yellow';
  }
`;
const Input = styled.input`
  flex-grow: 1;
  border-style: solid;
  border-width: 1px;
  border-color: transparent transparent #000 transparent;
`;

const Inputs = () => {
  const delivery = useSelector(selectDelivery);

  return (
    <>
      {delivery && (
        <Label>
          <span>Куда доставить</span>
          <Input type="text" name="address" />
        </Label>
      )}
      <Label>
        <span>Кому</span>
        <Input type="text" name="username" />
      </Label>
      <Label>
        <span>Телефон</span>
        <Input type="text" name="phone" />
      </Label>
    </>
  );
};
export default Inputs;
