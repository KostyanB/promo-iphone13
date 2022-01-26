import React, { useContext, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useSelector } from 'react-redux';
import { selectPresent } from '../../store/goodSlice';
import { CurrentModelContext } from '../Context';
import env from '../../env.json';

const transitionDuration = env.transitionDuration;

const show = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`;
const hide = keyframes`
  0% { opacity: 1 }
  100% { opacity: 0 }
`;

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
    animation-name: ${props => (props.change === 'show' ? show : hide)};
    animation-timing-function: ease-in-out;
    animation-duration: ${transitionDuration};
    animation-fill-mode: forward;
  }
`;

const ProductImg = () => {
  const {
    currentModel: { currentImg },
  } = useContext(CurrentModelContext);

  const [nextImg, setNextImg] = useState('');
  const [changeImg, setChangeImg] = useState('show');

  useEffect(() => {
    if (currentImg !== nextImg) {
      setChangeImg('hide');
      setTimeout(() => {
        setNextImg(currentImg);
        setChangeImg('show');
      }, transitionDuration);
    }
  }, [currentImg, nextImg]);

  const altText = useSelector(selectPresent).imgAlt;

  return (
    <CardImg change={changeImg}>
      <img src={nextImg} alt={altText} />
    </CardImg>
  );
};
export default ProductImg;
