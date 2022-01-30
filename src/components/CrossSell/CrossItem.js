import React from 'react';
import styled from 'styled-components';
import { animated, useSpring, config } from 'react-spring';

import { BuyButton } from '../Styled/Button';

const Item = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  min-height: 360px;
  height: 100%;
  justify-content: space-between;
  align-items: baseline;
  gap: 10px;
  height: max(360px, 100%);
`;
const Image = styled.img`
  box-shadow: 0 2px 6px 1px rgba(0, 0, 0, 0.1);
  margin-bottom: 12px;
`;
const Title = styled.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: left;
  flex: 1 0 auto;
`;
const Price = styled.p`
  font-weight: 700;
  font-size: 24px;
`;

const CrossItem = ({ data }) => {
  const { id, name, photo, price } = data;

  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.slow,
  });
  const AnimatedImage = animated(Image);

  const handleBuyCrossGood = () => {};

  return (
    <li>
      <Item>
        <AnimatedImage style={props} src={photo} alt={id} />
        <Title>{name}</Title>
        <Price>{price}&#8381;</Price>
        <BuyButton onClick={handleBuyCrossGood}>Купить</BuyButton>
      </Item>
    </li>
  );
};
export default CrossItem;
