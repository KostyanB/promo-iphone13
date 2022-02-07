import React, { useState, useEffect, useContext, useCallback } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectMainGood, selectCrossOrder } from '../../store/sendOrderSlice';
import { selectCrossSell } from '../../store/crossSellSlice';
import { MainContext } from '../Context';

const Title = styled.h3`
  font-size: 36px;
  line-height: 1.2;
  margin-bottom: 30px;
`;
const Cross = styled.p`
  font-size: 20px;
  line-height: 1.2;
  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 20px;
  }
`;
const Total = styled.p`
  font-size: 30px;
  line-height: 1.2;
  margin-bottom: 20px;
`;

const FormTitle = ({ notEmptyCross }) => {
  const [total, setTotal] = useState(0);
  const mainGood = useSelector(selectMainGood);
  const crossOrder = useSelector(selectCrossOrder);
  const crossSell = useSelector(selectCrossSell);
  const {
    currentModel: { currentPrice },
  } = useContext(MainContext);

  const calcTotal = useCallback(() => {
    const crossTotal = Object.keys(crossOrder).reduce(
      (acc, id) => (acc += +crossSell[id].price),
      0,
    );
    return crossTotal + +currentPrice;
  }, [crossOrder, crossSell, currentPrice]);

  useEffect(() => {
    setTotal(calcTotal());
  }, [calcTotal]);

  return (
    <>
      <Title>{mainGood}</Title>
      {notEmptyCross && (
        <>
          <Cross>Дополнительно: </Cross>
          {Object.values(crossOrder).map((text, i) => (
            <Cross key={i}>
              {i + 1}: {text}
            </Cross>
          ))}
        </>
      )}
      <Total>Итого заказ на сумму {total}&#8381;</Total>
    </>
  );
};
export default FormTitle;
