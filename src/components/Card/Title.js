import React, { useContext } from 'react';
import { CurrentModelContext } from '../Context';
import { useSelector } from 'react-redux';
import { selectCard } from '../../store/goodSlice';
import { Title2 } from '../Styled/Titles';

const Title = () => {
  const title = useSelector(selectCard).title;

  const {
    currentModel: { currentColor, currentMemory },
  } = useContext(CurrentModelContext);

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
