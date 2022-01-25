import React, { useContext } from 'react';
import styled from 'styled-components';
import { CardContext } from '../Context';
import { useSelector } from 'react-redux';
import { selectCard } from '../../store/goodSlice';

const H2 = styled.h2`
  font-size: 36px;
  line-height: 43px;
  text-align: center;
  @media (max-width: 698px) {
    font-size: 28px;
    margin-bottom: 30px;
  }
`;

const Title = () => {
  const title = useSelector(selectCard).title;

  const {
    currentModel: { currentColor },
  } = useContext(CardContext);

  return (
    <H2>
      {title}
      <span>{currentColor}</span>
    </H2>
  );
};
export default Title;