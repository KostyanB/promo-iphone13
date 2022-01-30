import React, { useContext } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectPresent } from '../../store/goodSlice';
import { animated, useTransition, config } from 'react-spring';
import { CurrentModelContext } from '../Context';

const CardImg = styled.figure`
  max-width: 300px;
  margin: 0 70px 0 0;
  display: grid;
  @media (max-width: 968px) {
    order: 1;
    margin-right: 0;
  }

  & > img {
    width: 230px;
    max-width: none;
    grid-area: 1/-1;
  }
`;

const AnimateImg = ({ img, text }) => {
  const changeImg = useTransition(img, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.slow,
  });

  return changeImg((props, item) => (
    <animated.img src={item} alt={text} style={props} />
  ));
};

const CardImage = () => {
  const {
    currentModel: { currentImg },
  } = useContext(CurrentModelContext);

  const altText = useSelector(selectPresent).imgAlt;

  return (
    <CardImg>
      <AnimateImg img={currentImg} text={altText} />
    </CardImg>
  );
};
export default CardImage;
