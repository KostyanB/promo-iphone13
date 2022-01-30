import React, { useContext } from 'react';
import styled from 'styled-components';
import { MainContext } from '../Context';
import { useSelector } from 'react-redux';
import { selectCard } from '../../store/getGoodDbSlice';

const Title = styled.h3`
  font-size: 36px;
  line-height: 43px;
  margin-bottom: 30px;
`;

const FormTitle = () => {
  const {
    currentModel: { currentColor, currentMemory },
  } = useContext(MainContext);
  const title = useSelector(selectCard).title;

  const currentTitle = `${title}${currentMemory}GB ${currentColor}`;

  return (
    <>
      <input
        type="text"
        className="visually-hidden"
        name="name-good"
        value={currentTitle}
        disabled
      />
      <Title>{currentTitle}</Title>
    </>
  );
};
export default FormTitle;
