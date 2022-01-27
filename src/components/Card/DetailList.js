import React, { useContext } from 'react';
import { CurrentModelContext } from '../Context';
import { useSelector } from 'react-redux';
import { selectCard } from '../../store/goodSlice';

const DetailList = () => {
  const details = useSelector(selectCard).details;
  const {
    currentModel: { currentMemory },
  } = useContext(CurrentModelContext);

  return (
    <ul>
      {Object.entries(details).map(([name, text]) => (
        <li key={name} data-details={name}>
          {text}
          {name === 'memory' && `${currentMemory} ГБ`}
        </li>
      ))}
    </ul>
  );
};
export default DetailList;
