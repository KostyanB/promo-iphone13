import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectMainGood,
  selectCrossOrder,
  selectDelivery,
} from '../../store/sendOrderSlice';

const HiddenInputs = ({ notEmptyCross }) => {
  const mainGood = useSelector(selectMainGood);
  const crossOrder = useSelector(selectCrossOrder);
  const delivery = useSelector(selectDelivery);

  return (
    <>
      <input
        type="text"
        className="visually-hidden"
        name="main-good"
        value={mainGood}
        disabled
      />
      {notEmptyCross &&
        Object.entries(crossOrder).map(([id, name], i) => (
          <input
            key={i}
            type="text"
            className="visually-hidden"
            name={`cross-${id}`}
            value={`${id} ${name}`}
            disabled
          />
        ))}
      {delivery && (
        <input
          type="text"
          className="visually-hidden"
          name="delivery"
          value={delivery ? 'Доставка и оплата' : 'Оплата'}
          disabled
        />
      )}
    </>
  );
};
export default HiddenInputs;
