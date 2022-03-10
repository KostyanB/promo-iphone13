import React from 'react';
import styled from 'styled-components';
import DetailList from './DetailList';
import Footer from './Footer';
import CardLink from '../Styled/CardLink';
import CardWrapper from '../Styled/CardWrapper';

const Wrapper = styled(CardWrapper)`
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  text-align: left;
`;

const Description = () => {
  return (
    <Wrapper>
      <DetailList />
      <CardLink to='/main/characteristics'>Полные харакстеристики</CardLink>
      <Footer />
    </Wrapper>
  );
};
export default Description;
