import React, { useContext } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectPresent } from '../../store/goodSlice';
import { CardContext } from '../Context';

const CardImg = styled.figure`
  max-width: 300px;
  margin: 0 70px 0 0;

  @media (max-width: 968px) {
    order: 1;
    margin-right: 0;
  }

  & > img {
    width: 230px;
    max-width: none;
  }
`;

const ProductImg = () => {
  const {
    currentModel: { currentImg },
  } = useContext(CardContext);

  const altText = useSelector(selectPresent).imgAlt;

  return (
    <CardImg>
      <img src={currentImg} alt={altText} />
    </CardImg>
  );
};
export default ProductImg;
