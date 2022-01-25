import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectCard } from '../../store/goodSlice';

const List = styled.ul`
  margin-bottom: 18px;
`;

const DetailList = () => {
  const details = useSelector(selectCard).details;

  return (
    <List>
      {Object.entries(details).map(([name, text]) => (
        <li key={name} data-details={name}>
          {text}
        </li>
      ))}
    </List>
  );
};
export default DetailList;
