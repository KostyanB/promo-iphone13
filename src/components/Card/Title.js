import React from 'react';
import { useSelectedModelContext } from '../../context';
import { useSelector } from 'react-redux';
import { selectCard } from '../../store/getGoodDbSlice';
import { Title2 } from '../Styled/Titles';

const Title = () => {
  const title = useSelector(selectCard).title;

  const {
    selectedModel: { selectedColor, selectedMemory },
  } = useSelectedModelContext();

  return (
    <Title2>
      {title} <br />
      <span>
        {selectedMemory}Gb {selectedColor}
      </span>
    </Title2>
  );
};
export default Title;
