import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import DescriptionItem from './DescriptionItem';
import { selectCharacteristics } from '../../store/getGoodDbSlice';

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px 15px;
`;

const DescriptionList = ({ name }) => {
  const data = useSelector(selectCharacteristics)[name].descriptions;

  return (
    <Ul>
      {data.map((item, i) => (
        <DescriptionItem key={i} data={item} />
      ))}
    </Ul>
  );
};
export default DescriptionList;
