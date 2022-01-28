import React, { useContext } from 'react';
import styled from 'styled-components';
import { CurrentModelContext } from '../Context';

const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  & > p:first-child {
    text-align: left;
  }

  & > p:last-child {
    text-align: right;
  }
`;

const DescriptionItem = ({ data }) => {
  const {
    currentModel: { currentMemory },
  } = useContext(CurrentModelContext);

  const value = data[0] === 'Встроенная память (Гб)' ? currentMemory : data[1];

  return (
    <Li>
      <p>{data[0]}</p>
      <p>{value}</p>
    </Li>
  );
};
export default DescriptionItem;
