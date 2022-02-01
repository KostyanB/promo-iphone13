import React, { createContext } from 'react';
import useValidateInputs from '../../hooks/useValidateInputs';

export const FormContext = createContext();

export const FormContextProvider = props => {
  const validateInputs = useValidateInputs();

  return (
    <FormContext.Provider
      value={{
        validateInputs,
      }}>
      {props.children}
    </FormContext.Provider>
  );
};
