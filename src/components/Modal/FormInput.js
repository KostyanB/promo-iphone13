import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { FormContext } from '../Context';
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

  &.valid-input {
    border-bottom-color: ${validColor};
  }

  &.novalid-input {
    border-bottom-color: ${novalidColor};
  }
`;
const FormInput = ({ name, type, placeholder, isValid }) => {
  const [checked, setChecked] = useState(false);
  const {
    validateInputs: { setErrors, validate },
  } = useContext(FormContext);

  useEffect(() => {
    if (type === 'tel') {
      const selector = `input[name=${name}]`;
      maskPhone(selector, phoneMask);
    }

    setErrors(name);
  }, [type, name]);

  const handleValidate = e => {
    setChecked(true);
    validate(e.target);
  };

  return (
    <Input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={handleValidate}
      onBlur={handleValidate}
      onInput={handleValidate}
      className={!checked ? '' : isValid ? 'valid-input' : 'novalid-input'}
    />
  );
};
export default FormInput;
