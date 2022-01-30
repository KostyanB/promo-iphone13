import React, { useContext } from 'react';
import styled from 'styled-components';
import { MainContext } from '../Context';
import BuyButtons from './BuyButtons';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: 698px) {
    flex-wrap: wrap;
    flex-direction: column;
    gap: 30px;
  }
`;
const Price = styled.p`
  min-width: 120px;
  font-weight: 700;
  font-size: 24px;

  @media (max-width: 698px) {
    align-self: baseline;
  }
`;

const Footer = () => {
  const {
    currentModel: { currentPrice },
  } = useContext(MainContext);

  return (
    <Wrapper>
      <Price>{currentPrice}&#8381;</Price>
      <BuyButtons />
    </Wrapper>
  );
};
export default Footer;
