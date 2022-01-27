import React, { useContext } from 'react';
import styled from 'styled-components';
import { CurrentModelContext } from '../Context';
import { useSelector } from 'react-redux';
import { selectCard } from '../../store/goodSlice';
import { Title2 } from '../Styled/Titles';

const H2 = styled.h2`
  font-size: 36px;
  line-height: 43px;
  text-align: center;
  @media (max-width: 698px) {
    font-size: 28px;
  }
`;

const Title = () => {
  const title = useSelector(selectCard).title;

  const {
    currentModel: { currentColor, currentMemory },
  } = useContext(CurrentModelContext);

  return (
    <H2>
      {title} <br />
      <span>
        {currentMemory}Gb {currentColor}
      </span>
    </H2>
  );
};
export default Title;
