import React, { useEffect, useState } from 'react';
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
const Buttons = styled.ul`
  display: flex;
  gap: 24px;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 40px;
  white-space: nowrap;

  @media (max-width: 698px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;
const Button = styled.button`
  border: 1px solid transparent;
  background-color: transparent;
  padding: 11px 16px;
`;

const ModelBtns = () => {
  const cardDb = useSelector(selectCard);

  return (
    <Buttons>
      {Object.entries(cardDb.models).map((model, i) => (
        <li key={i}>
          <Button className="active">{model[1].name}</Button>
        </li>
      ))}
    </Buttons>
  );
};
export default ModelBtns;
