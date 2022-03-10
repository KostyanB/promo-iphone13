import React, { createContext, useContext } from 'react';
import useValidateForm from '../hooks/useValidateForm';

const ValidateFormContext = createContext();
export const useValidateFormContext = () => useContext(ValidateFormContext);

export const ValidateFormContextProvider = props => {
  const validateForm = useValidateForm();

  return (
    <ValidateFormContext.Provider
      value={{
        validateForm,
      }}
    >
      {props.children}
    </ValidateFormContext.Provider>
  );
};
