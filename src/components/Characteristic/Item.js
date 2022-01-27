import React, { useState } from 'react';
import styled from 'styled-components';
import DescriptionList from './DescriptionList';

const Wrapper = styled.li`
  margin-bottom: 15px;
`;
const ItemTitle = styled.button`
  position: relative;
  width: 100%;
  padding: 12px 30px;
  background-color: transparent;
  text-align: left;

  &:after {
    content: '';
    position: absolute;
    right: 15px;
    bottom: 15px;
    width: 17px;
    height: 17px;
    border: 1px solid;
    border-color: transparent #000 #000 transparent;
    transform: rotate(45deg);
    transition: border-color 0.4s ease-in-out, bottom 0.4s ease-in-out;
  }

  &:focus {
    outline: none;
  }

  &.active:after {
    border-color: #000 transparent transparent #000;
    bottom: 5px;
  }
`;
const Description = styled.div`
  margin-top: -2px;
  border: 1px solid;
  border-color: transparent #000 #000 #000;
  height: 0;
  overflow: hidden;
  transition: height 0.4s ease-in-out;

  /* height: ${props => (props.open ? 'auto' : 0)}; */
  transition: height linear 1s;
  &.active {
    height: auto;
  }
`;

const Item = ({ name, title }) => {
  const [openDescription, setOpenDescription] = useState(false);

  const toggleDescription = () => setOpenDescription(!openDescription);

  return (
    <Wrapper>
      <ItemTitle onClick={toggleDescription}>{title}</ItemTitle>
      <Description
        className={openDescription ? 'active' : ''}
        open={openDescription}>
        <DescriptionList name={name} />
      </Description>
    </Wrapper>
  );
};
export default Item;
