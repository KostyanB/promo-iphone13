import { useState } from 'react';
import env from '../env.json';
import getPrefix from '../helpers/getPrefix';

const useValidateForm = () => {
  const { validLengths, phoneMask } = env.inputMasks;
  const [isValidInputs, setIsValidInputs] = useState(false);
  const [isValidName, setIsValidName] = useState(false);
  const [isValidAddress, setIsValidAddress] = useState(false);
  const [isValidPhone, setIsValidPhone] = useState(false);
  const [errObj, setErrObj] = useState({});

  const setErrors = name => {
    if (!errObj[name]) {
      errObj[name] = name;
    }
  };

  const checkAllInputs = () => {
    if (Object.keys(errObj).length > 0) {
      setIsValidInputs(false);
    } else {
      setIsValidInputs(true);
    }
  };

  const checkLelgth = (str, name) => {
    const validLength = validLengths[name];
    let check;

    if (!str || str.length < validLength) {
      setErrors(name);
      check = false;
    } else {
      delete errObj[name];
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
    const maskPrefix = getPrefix(phoneMask);
    const inputPrefix = value.slice(0, maskPrefix.length);

    let num = value;
    const arr = [maskPrefix, '(', ')', ' ', '-'];
    arr.map(sym => (num = num.replaceAll(sym, '')));

    maskPrefix === inputPrefix && setIsValidPhone(checkLelgth(num, name));
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
    isValidPhone,
    validate,
    setErrors,
    errObj,
    setErrObj,
  };
};
export default useValidateForm;
