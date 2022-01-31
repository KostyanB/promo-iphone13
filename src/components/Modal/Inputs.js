import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectDelivery } from '../../store/sendOrderSlice';
import env from '../../env.json';

const {
  mainColor,
  inputs: { focusColor, validColor, novalidColor },
  transitionDuration,
} = env.colors;

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
  border-top-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: ${mainColor};
  background-clip: padding-box;
  transition: border-bottom-color ${transitionDuration};

  &:focus {
    border-bottom-color: ${focusColor};
    transition: border-bottom-color ${transitionDuration};
  }
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
