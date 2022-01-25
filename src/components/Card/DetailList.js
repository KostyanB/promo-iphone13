import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { selectCard } from '../../store/goodSlice';

const As = styled.div`
  @media (max-width: 968px) {
  }
  @media (max-width: 698px) {
  }
  @media (max-width: 520px) {
  }
`;

const List = styled.ul`
  margin-bottom: 18px;
`;

const DetailList = () => {
  const cardDb = useSelector(selectCard);

  return (
    <List>
      {Object.entries(cardDb.details).map(([name, text]) => (
        <li key={name} data-details={name}>
          {text}
        </li>
      ))}
    </List>
  );
};
export default DetailList;
