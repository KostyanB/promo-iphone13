import React, { useRef, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCrossOrder, sendOrder } from '../../store/sendOrderSlice';
import { FormContext } from '../Context';

import FormTitle from './FormTitle';
import HiddenInputs from './HiddenInputs';
import Inputs from './Inputs';
import SubmitButton from './SubmitButton';

const Form = () => {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const crossOrder = useSelector(selectCrossOrder);
  const emptyCross = !Object.keys(crossOrder).length;
  const {
    validateInputs: { isValidInputs },
  } = useContext(FormContext);
  console.log('isValidInputs: ', isValidInputs);

  const handleSubmit = e => {
    e.preventDefault();
    if (isValidInputs) {
      const data = new FormData(formRef.current);
      dispatch(sendOrder(data));
    }
  };

  return (
    <form id="modal-form" ref={formRef} onSubmit={handleSubmit}>
      <HiddenInputs notEmptyCross={!emptyCross} />
      <FormTitle notEmptyCross={!emptyCross} />
      <Inputs />
      <SubmitButton disable={!isValidInputs} />
    </form>
  );
};
export default Form;
