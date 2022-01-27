import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import DescriptionItem from './DescriptionItem';
import { selectCharacteristics } from '../../store/goodSlice';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px 15px;
`;

const DescriptionList = ({ name }) => {
  const data = useSelector(selectCharacteristics)[name].descriptions;

  return (
    <List>
      {data.map((item, i) => (
        <DescriptionItem key={i} data={item} />
      ))}
    </List>
  );
};
export default DescriptionList;
