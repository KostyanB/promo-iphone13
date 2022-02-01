import React, { useRef, useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectDelivery } from '../../store/sendOrderSlice';
import useValidateInputs from '../../hooks/useValidateInputs';
import env from '../../env.json';
import maskPhone from '../../helpers/maskPhone';

const {
  colors: {
    mainColor,
    inputs: { focusColor, validColor, novalidColor },
  },
  transitionDuration,
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
  const phoneRef = useRef(null);
  const addressRef = useRef(null);
  const nameRef = useRef(null);

  const inputRefs = useMemo(() => [phoneRef, addressRef, nameRef], []);

  const { isValidInputs, isValidName, isValidAddress, isValidTel, validate } =
    useValidateInputs();
  console.log('***********');
  console.log('isValidInputs: ', isValidInputs);
  console.log('isValidName: ', isValidName);
  console.log('isValidAddress: ', isValidAddress);
  console.log('isValidTel: ', isValidTel);

  useEffect(() => {
    maskPhone(phoneRef.current, phoneMask);

    inputRefs.map(input => validate(input.current));
  }, []);

  const handleValidate = e => {
    validate(e.target);
  };

  return (
    <>
      {delivery && (
        <Label>
          <span>Куда доставить</span>
          <Input
            ref={addressRef}
            type="text"
            name="address"
            onChange={handleValidate}
            onBlur={handleValidate}
          />
        </Label>
      )}
      <Label>
        <span>Кому</span>
        <Input
          ref={nameRef}
          type="text"
          name="username"
          onChange={handleValidate}
          onBlur={handleValidate}
        />
      </Label>
      <Label>
        <span>Телефон</span>
        <Input
          ref={phoneRef}
          type="tel"
          name="phone"
          placeholder={phoneMask}
          onChange={handleValidate}
          onBlur={handleValidate}
          onInput={handleValidate}
        />
      </Label>
    </>
  );
};
export default Inputs;
