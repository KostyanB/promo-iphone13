import React, { useState } from 'react';
import styled from 'styled-components';
import AnimatedItemBtn from './AnimatedItemBtn';
import AnimatedList from './AnimatedList';

const Wrapper = styled.li`
  margin-bottom: 15px;
`;

const Item = ({ name, title }) => {
  const [openList, setOpenList] = useState(false);

  const toggleDescription = () => setOpenList(!openList);

  return (
    <Wrapper>
      <AnimatedItemBtn
        title={title}
        isOpen={openList}
        toggleFn={toggleDescription}
      />
      <AnimatedList name={name} isOpen={openList} />
    </Wrapper>
  );
};
export default Item;
