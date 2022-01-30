import React, { useContext } from 'react';
import { MainContext } from '../Context';
import { useSelector } from 'react-redux';
import { selectCard } from '../../store/getGoodDbSlice';

const DetailList = () => {
  const details = useSelector(selectCard).details;
  const {
    currentModel: { currentMemory },
  } = useContext(MainContext);

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
