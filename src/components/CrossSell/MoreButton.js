import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCrossSellDb,
  addGoodsToShow,
  selectCountStack,
} from '../../store/crossSellSlice';

import { MainButton } from '../Styled/Buttons';

const Button = styled(MainButton)`
  align-self: flex-end;
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
`;

const MoreButton = () => {
  const [showBtn, setShowBtn] = useState(true);
  const dispatch = useDispatch();
  const crossSellDb = useSelector(selectCrossSellDb);
  const goodCountStack = useSelector(selectCountStack);
  const maxCount = useMemo(() => crossSellDb.length, [crossSellDb]);

  const showMore = () =>
    goodCountStack <= maxCount && dispatch(addGoodsToShow());

  useEffect(() => {
    goodCountStack > maxCount && setShowBtn(false);
  }, [goodCountStack, maxCount]);

  return (
    <Button onClick={showMore} show={showBtn}>
      Показать еще
    </Button>
  );
};
export default MoreButton;
