import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCrossOrder, sendOrder } from '../../store/sendOrderSlice';

import FormTitle from './FormTitle';
import HiddenInputs from './HiddenInputs';
import Inputs from './Inputs';
import SubmitButton from './SubmitButton';

const Form = () => {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const crossOrder = useSelector(selectCrossOrder);
  const emptyCross = !Object.keys(crossOrder).length;

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(formRef.current);
    dispatch(sendOrder(data));
  };

  return (
    <form id="modal-form" ref={formRef} onSubmit={handleSubmit}>
      <HiddenInputs notEmptyCross={!emptyCross} />
      <FormTitle notEmptyCross={!emptyCross} />
      <Inputs />
      <SubmitButton />
    </form>
  );
};
export default Form;
