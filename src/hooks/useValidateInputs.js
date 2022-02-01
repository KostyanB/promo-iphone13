import { useState, useMemo } from 'react';
import env from '../env.json';

const useValidateInputs = () => {
  const { validLengths, phoneMask } = env.inputMasks;
  const [isValidInputs, setIsValidInputs] = useState(false);
  const [isValidName, setIsValidName] = useState(false);
  const [isValidAddress, setIsValidAddress] = useState(false);
  const [isValidTel, setIsValidTel] = useState(false);
  const errors = useMemo(() => new Set(), []);

  const checkAllInputs = () => {
    if (errors.size > 0) {
      setIsValidInputs(false);
    } else {
      setIsValidInputs(true);
    }
  };

  const checkLelgth = (str, name) => {
    const validLength = validLengths[name];
    let check;

    if (!str || str.length < validLength) {
      errors.add(name);
      check = false;
    } else {
      errors.delete(name);
      check = true;
    }

    checkAllInputs();

    return check;
  };

  const validateText = (value, name) => {
    const str = value.trim();
    const check = checkLelgth(str, name);

    if (name === 'username') setIsValidName(check);
    if (name === 'address') setIsValidAddress(check);
  };

  const validateTel = (value, name) => {
    const prefix = phoneMask.split(' ')[0];
    const arr = [prefix, '(', ')', ' ', '-'];
    let num = value;

    arr.map(sym => (num = num.replaceAll(sym, '')));

    setIsValidTel(checkLelgth(num, name));
  };

  const validate = input => {
    const inputType = input.type,
      inputValue = input.value,
      inputName = input.name;

    if (inputType === 'text') validateText(inputValue, inputName);
    if (inputType === 'tel') validateTel(inputValue, inputName);
  };

  return {
    isValidInputs,
    isValidName,
    isValidAddress,
    isValidTel,
    validate,
  };
};
export default useValidateInputs;
