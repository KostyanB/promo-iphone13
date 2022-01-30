import React, { useContext } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { MainContext } from '../Context';
import { selectCard } from '../../store/getGoodDbSlice';
import env from '../../env.json';

const { activeColor, mainColor } = env.colors;

const Buttons = styled.ul`
  display: flex;
  gap: 24px;
  font-size: 18px;
  font-weight: 600;
  white-space: nowrap;

  @media (max-width: 698px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;
const Button = styled.button`
  background-color: transparent;
  padding: 11px 16px;
  color: ${mainColor};
  border-bottom: 1px solid;
  border-bottom-color: ${props =>
    props.isActive ? activeColor : 'rgba(255,255,255,0)'};

  :hover {
    color: ${activeColor};
  }
`;

const ModelButtons = () => {
  const models = useSelector(selectCard).models;

  const {
    currentModel: { currentColor, setCurrentModel },
  } = useContext(MainContext);

  const handleCurrentModel = model => setCurrentModel(models[model]);

  const checkActive = model => model.color === currentColor;

  return (
    <Buttons>
      {Object.entries(models).map(([id, data], index) => (
        <li key={index}>
          <Button
            isActive={checkActive(data)}
            className="active"
            onClick={() => handleCurrentModel(id)}>
            {data.name}
          </Button>
        </li>
      ))}
    </Buttons>
  );
};
export default ModelButtons;
