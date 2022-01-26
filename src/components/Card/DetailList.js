import React, { useContext } from 'react';
import styled from 'styled-components';
import { CurrentModelContext } from '../Context';
import { useSelector } from 'react-redux';
import { selectCard } from '../../store/goodSlice';

const List = styled.ul`
  margin-bottom: 18px;
`;

const DetailList = () => {
  const details = useSelector(selectCard).details;
  const {
    currentModel: { currentMemory },
  } = useContext(CurrentModelContext);

  return (
    <List>
      {Object.entries(details).map(([name, text]) => (
        <li key={name} data-details={name}>
          {text}
          {name === 'memory' && `${currentMemory} ГБ`}
        </li>
      ))}
    </List>
  );
};
export default DetailList;
