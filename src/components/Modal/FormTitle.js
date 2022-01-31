import React, { useContext } from 'react';
import styled from 'styled-components';
import { MainContext } from '../Context';
import { selectCard } from '../../store/getGoodDbSlice';
import { useSelector } from 'react-redux';
import {
  selectMainGood,
  selectCrossOrder,
  selectDelivery,
} from '../../store/sendOrderSlice';

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
    margin-bottom: 30px;
  }
`;

const FormTitle = ({ notEmptyCross }) => {
  const mainGood = useSelector(selectMainGood);
  const crossOrder = useSelector(selectCrossOrder);

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
    </>
  );
};
export default FormTitle;
