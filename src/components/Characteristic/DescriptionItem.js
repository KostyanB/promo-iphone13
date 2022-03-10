import React from 'react';
import styled from 'styled-components';
import { useSelectedModelContext } from '../../context';

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
    selectedModel: { selectedMemory },
  } = useSelectedModelContext();

  const value = data[0] === 'Встроенная память (Гб)' ? selectedMemory : data[1];

  return (
    <Li>
      <p>{data[0]}</p>
      <p>{value}</p>
    </Li>
  );
};
export default DescriptionItem;
