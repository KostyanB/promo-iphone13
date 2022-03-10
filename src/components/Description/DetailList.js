import React from 'react';
import { useSelectedModelContext } from '../../context';
import { useSelector } from 'react-redux';
import { selectCard } from '../../store/getGoodDbSlice';

const DetailList = () => {
  const details = useSelector(selectCard).details;
  const {
    selectedModel: { selectedMemory },
  } = useSelectedModelContext();

  return (
    <ul>
      {Object.entries(details).map(([name, text]) => (
        <li key={name} data-details={name}>
          {text}
          {name === 'memory' && `${selectedMemory} ГБ`}
        </li>
      ))}
    </ul>
  );
};
export default DetailList;
