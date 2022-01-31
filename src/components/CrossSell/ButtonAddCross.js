import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { animated, config, useTransition } from 'react-spring';
import { addCrossGood, delCrossGood } from '../../store/sendOrderSlice';

import { MainButton, BuyButton } from '../Styled/Buttons';

const ButtonAddCross = ({ id, name }) => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(true);
  const transitions = useTransition(toggle, {
    from: {
      gridArea: '1/-1',
      opacity: 0,
    },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.slow,
  });

  const handleAddCrossGood = () => {
    if (toggle) {
      dispatch(addCrossGood({ key: id, value: name }));
    } else {
      dispatch(delCrossGood(id));
    }
    setToggle(!toggle);
  };

  return transitions((props, item) =>
    item ? (
      <animated.div style={props}>
        <BuyButton onClick={handleAddCrossGood}>Добавить</BuyButton>
      </animated.div>
    ) : (
      <animated.div style={props}>
        <MainButton onClick={handleAddCrossGood}>Удалить</MainButton>
      </animated.div>
    ),
  );
};
export default ButtonAddCross;
