import React, { useContext } from 'react';
import { MainContext } from '../Context';
import { useSelector } from 'react-redux';
import { selectCard } from '../../store/getGoodDbSlice';
import { Title2 } from '../Styled/Titles';

const Title = () => {
  const title = useSelector(selectCard).title;

  const {
    currentModel: { currentColor, currentMemory },
  } = useContext(MainContext);

  return (
    <Title2>
      {title} <br />
      <span>
        {currentMemory}Gb {currentColor}
      </span>
    </Title2>
  );
};
export default Title;
